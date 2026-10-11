#!/usr/bin/env python3
"""Install the uploaded static release as an unprivileged loopback service."""
import hashlib
import json
import os
from pathlib import Path, PurePosixPath
import shutil
import socket
import subprocess
import tarfile
import urllib.request

BASE = Path("/home/pyie/jiasheng-resume")
CADDY_URL = "https://github.com/caddyserver/caddy/releases/download/v2.11.7/caddy_2.11.7_linux_amd64.tar.gz"
CADDY_SHA = "727b91701a392de6ebc5027509f548bf39979e5216340d0faed8fa5e69c84f8b"


def run(*args):
    subprocess.run(args, check=True)


def main():
    if socket.gethostname() != "4bytedigi" or os.geteuid() != 1000:
        raise RuntimeError("Run as pyie on 4bytedigi.")
    manifest = json.loads((BASE / "release.json").read_text())
    release_name = manifest["release"]
    if not release_name.replace("-", "").isalnum():
        raise RuntimeError("Invalid release name.")
    archive = BASE / "jiasheng-resume.tar.gz"
    if hashlib.sha256(archive.read_bytes()).hexdigest() != manifest["archiveSha256"]:
        raise RuntimeError("The uploaded archive checksum differs.")
    release = BASE / "releases" / release_name
    release.mkdir(parents=True, exist_ok=False)
    with tarfile.open(archive) as package:
        for member in package.getmembers():
            relative = PurePosixPath(member.name)
            if relative.is_absolute() or ".." in relative.parts or not (member.isdir() or member.isfile()):
                raise RuntimeError("Unsafe archive entry.")
            destination = release.joinpath(*relative.parts)
            if member.isdir():
                destination.mkdir(parents=True, exist_ok=True)
            else:
                destination.parent.mkdir(parents=True, exist_ok=True)
                with package.extractfile(member) as source, destination.open("wb") as target:
                    shutil.copyfileobj(source, target)
    for relative, expected in manifest["files"].items():
        if hashlib.sha256((release / relative).read_bytes()).hexdigest() != expected:
            raise RuntimeError("Release file integrity check failed: " + relative)
    binary = BASE / "bin" / "caddy"
    if not binary.exists():
        binary.parent.mkdir(exist_ok=True)
        caddy_archive = BASE / "caddy-2.11.7.tar.gz"
        with urllib.request.urlopen(CADDY_URL, timeout=60) as response, caddy_archive.open("wb") as target:
            shutil.copyfileobj(response, target)
        if hashlib.sha256(caddy_archive.read_bytes()).hexdigest() != CADDY_SHA:
            raise RuntimeError("Official Caddy download checksum differs.")
        with tarfile.open(caddy_archive) as package:
            member = package.getmember("caddy")
            if not member.isfile():
                raise RuntimeError("Unexpected Caddy archive.")
            with package.extractfile(member) as source, binary.open("wb") as target:
                shutil.copyfileobj(source, target)
        binary.chmod(0o755)
    run(str(binary), "version")
    run(str(binary), "validate", "--config", str(BASE / "Caddyfile"), "--adapter", "caddyfile")
    current = BASE / "current"
    previous = os.readlink(current) if current.is_symlink() else None
    if current.exists() and previous is None:
        raise RuntimeError("The current path is not an expected symlink.")
    temporary = BASE / ".current-next"
    temporary.symlink_to(release)
    os.replace(temporary, current)
    unit = Path.home() / ".config/systemd/user/jiasheng-resume.service"
    unit.parent.mkdir(parents=True, exist_ok=True)
    unit.write_bytes((BASE / "jiasheng-resume.service").read_bytes())
    try:
        run("systemctl", "--user", "daemon-reload")
        run("systemctl", "--user", "enable", "jiasheng-resume.service")
        run("systemctl", "--user", "restart", "jiasheng-resume.service")
        run("systemctl", "--user", "is-active", "--quiet", "jiasheng-resume.service")
    except BaseException:
        if previous:
            temporary.symlink_to(previous)
            os.replace(temporary, current)
            subprocess.run(["systemctl", "--user", "restart", "jiasheng-resume.service"], check=False)
        else:
            subprocess.run(["systemctl", "--user", "disable", "--now", "jiasheng-resume.service"], check=False)
        raise
    print("Uploaded files verified; release installed: " + release_name)
    print("Origin: http://127.0.0.1:9082 (loopback only)")


if __name__ == "__main__":
    main()
