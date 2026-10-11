#!/usr/bin/env python3
"""Compare every served production file against the uploaded manifest."""
import hashlib
import json
from pathlib import Path
import urllib.error
import urllib.parse
import urllib.request

manifest = json.loads(Path("/home/pyie/jiasheng-resume/release.json").read_text())
origin = "http://127.0.0.1:9082"
results = []
for relative, expected in manifest["files"].items():
    request = urllib.request.Request(origin + "/" + urllib.parse.quote(relative), headers={"Host": "jiasheng.4bytedigi.com"})
    with urllib.request.urlopen(request, timeout=10) as response:
        body = response.read()
        assert response.status == 200
        assert hashlib.sha256(body).hexdigest() == expected, relative
        if relative.startswith("assets/"):
            assert response.headers["Cache-Control"] == "public, max-age=31536000, immutable"
        if relative.endswith(".pdf"):
            assert body.startswith(b"%PDF-")
            assert response.headers["Content-Type"] == "application/pdf"
        results.append({"path": relative, "status": response.status, "bytes": len(body), "sha256Matches": True})
try:
    urllib.request.urlopen(origin + "/this-file-does-not-exist", timeout=5)
except urllib.error.HTTPError as error:
    assert error.code == 404
else:
    raise AssertionError("A missing file did not return HTTP 404.")
print(json.dumps({"release": manifest["release"], "origin": origin, "status": "verified", "files": results, "missingFile": 404}, indent=2))
