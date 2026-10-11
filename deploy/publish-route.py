#!/usr/bin/env python3
"""Add only the Jia Sheng hostname to the existing local Cloudflare tunnel.

Run on 4bytedigi with sudo after the dedicated origin has been verified.
Preserves all other routes, backs up the config and rolls back on failure.
This script does not change DNS, permissions, or credentials.
"""
import copy
import hashlib
import os
from pathlib import Path
import re
import shutil
import socket
import subprocess
import sys
import tempfile
import time
import urllib.request

import yaml

HOST = "jiasheng.4bytedigi.com"
ORIGIN = "http://127.0.0.1:9082"
TUNNEL = "dc054a50-d5b1-4c37-b12a-b2c89d11ca56"
CONFIG = Path("/etc/cloudflared/config.yml")
SERVICE = "dbstudios-tunnel.service"
CLOUDFLARED = "/usr/local/bin/cloudflared"


def add_route(original):
    config = yaml.safe_load(original)
    if str(config.get("tunnel")) != TUNNEL:
        raise RuntimeError("Unexpected tunnel identity; no changes made.")
    routes = config.get("ingress", [])
    expected_route = {"hostname": HOST, "service": ORIGIN}
    existing = [route for route in routes if route.get("hostname", "").lower() == HOST]
    if existing:
        if existing == [expected_route]:
            return original
        raise RuntimeError("A conflicting hostname route exists; it was not changed.")
    if not routes or routes[-1] != {"service": "http_status:404"}:
        raise RuntimeError("Unexpected tunnel catch-all; no changes made.")
    matches = list(re.finditer(r"(?m)^( +)- service: http_status:404[ \t]*$", original))
    if len(matches) != 1:
        raise RuntimeError("Cannot identify a unique catch-all line; no changes made.")
    match = matches[0]
    indent = match.group(1)
    addition = indent + "- hostname: " + HOST + "\n" + indent + "  service: " + ORIGIN + "\n"
    changed = original[:match.start()] + addition + original[match.start():]
    expected = copy.deepcopy(config)
    expected["ingress"].insert(len(routes) - 1, expected_route)
    if yaml.safe_load(changed) != expected:
        raise RuntimeError("Other settings changed; no changes made.")
    return changed


def self_test():
    sample = "tunnel: " + TUNNEL + "\ningress:\n  - hostname: existing.example.com\n    service: http://127.0.0.1:3080\n  - service: http_status:404\n"
    updated = add_route(sample)
    assert add_route(updated) == updated
    assert yaml.safe_load(updated)["ingress"][0] == yaml.safe_load(sample)["ingress"][0]
    for conflict in [updated.replace(ORIGIN, "http://127.0.0.1:9999"), sample.replace(TUNNEL, "wrong-tunnel"), sample.replace("http_status:404", "http_status:410")]:
        try:
            add_route(conflict)
        except RuntimeError:
            pass
        else:
            raise AssertionError("A conflicting configuration was accepted")
    print("Route preservation, idempotency and conflict checks passed.")


def main():
    if sys.argv[1:] == ["--self-test"]:
        return self_test()
    if sys.argv[1:]:
        raise RuntimeError("No deployment arguments are accepted.")
    if os.geteuid() != 0 or socket.gethostname() != "4bytedigi":
        raise RuntimeError("Run with sudo on the 4bytedigi server.")
    local_index = Path("/home/pyie/jiasheng-resume/current/index.html").read_bytes()
    with urllib.request.urlopen(ORIGIN + "/", timeout=5) as response:
        served_index = response.read()
        if response.status != 200 or hashlib.sha256(served_index).digest() != hashlib.sha256(local_index).digest():
            raise RuntimeError("The origin does not match the uploaded release; no changes made.")
    if b"Chua Jia Sheng" not in served_index:
        raise RuntimeError("Unexpected origin content; no changes made.")
    original = CONFIG.read_text()
    changed = add_route(original)
    if changed == original:
        print("The Jia Sheng route is already configured.")
        return
    stat = CONFIG.stat()
    fd, name = tempfile.mkstemp(prefix="jiasheng-", suffix=".yml", dir=CONFIG.parent)
    candidate = Path(name)
    backup = CONFIG.with_name("config.yml.before-jiasheng-" + time.strftime("%Y%m%dT%H%M%SZ", time.gmtime()))
    replaced = False
    try:
        with os.fdopen(fd, "w") as stream:
            stream.write(changed)
        os.chmod(candidate, stat.st_mode & 0o777)
        os.chown(candidate, stat.st_uid, stat.st_gid)
        subprocess.run([CLOUDFLARED, "--config", str(candidate), "tunnel", "ingress", "validate"], check=True)
        shutil.copy2(CONFIG, backup)
        os.chown(backup, stat.st_uid, stat.st_gid)
        os.replace(candidate, CONFIG)
        replaced = True
        subprocess.run(["systemctl", "restart", SERVICE], check=True)
        subprocess.run(["systemctl", "is-active", "--quiet", SERVICE], check=True)
        for attempt in range(30):
            try:
                with urllib.request.urlopen("http://127.0.0.1:20241/ready", timeout=2) as response:
                    if response.status == 200:
                        break
            except Exception:
                time.sleep(1)
        else:
            raise RuntimeError("Tunnel did not reconnect; restoring the previous configuration.")
    except BaseException:
        if replaced:
            shutil.copy2(backup, CONFIG)
            os.chown(CONFIG, stat.st_uid, stat.st_gid)
            subprocess.run(["systemctl", "restart", SERVICE], check=False)
        raise
    finally:
        candidate.unlink(missing_ok=True)
    print("Jia Sheng route installed; all previous routes were preserved.")
    print("Backup: " + str(backup))
    print("Public DNS must point " + HOST + " to " + TUNNEL + ".cfargotunnel.com (proxied CNAME).")


if __name__ == "__main__":
    main()
