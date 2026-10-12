# Jia Sheng server deployment

Latest portfolio refinement verified publicly on 13 October 2026.

## Apple cinematic refinement — 13 October 2026

The existing linked Server Manager project automatically deployed UI source `6feb62efbe1d4180bb96e6633940ee1766d2b9e9` from GitHub `main`. The dashboard marked it Ready after an 18-second deployment and the project Live. No host, route, connection or runtime setting was changed.

The public browser loads `/assets/index-CLVNPsVl.js` and `/assets/index-BKswYrMv.css`, matching the reviewed production build references. Desktop at 1440px and mobile at 390px show no document overflow. The page retains one visible full name, five roles, three education records, ten skills, 17 credentials and four award records. Project keyboard browsing moved 1→2; `network` search returned three credentials and clearing restored 17. Browser warning/error logs were empty.

Current evidence is `.impeccable/review/apple-motion-server-ready.jpg`, `apple-motion-live-desktop.jpg` and `apple-motion-live-mobile.jpg`. This is browser-loaded reference and interaction verification, not a full byte-hash comparison of public assets. The profile and local downloadable PDF are unchanged; the PDF was not downloaded again for this revision. Full verification limits and review disposition are in `docs/redesign-verification.md`.

## Prior managed deployment update — 12 October 2026

The current `jiasheng` project is connected to the existing `4bytedigi` GitHub account in [Server Manager](https://server.4bytedigi.com/). It builds `main` from `4bytedigi/Jiasheng_Portfolio` with the Vite / React preset, `npm run build`, and output `dist`. Automatic deployment checks the production branch every minute.

The dashboard marked source commit `5bbf0b7a2fa6287f25822aab371e51c5405d9cb6` Ready (23-second deployment) and the project Live. The public browser loaded `/assets/index-CV8JJfhD.js` and `/assets/index-DNpNSAC1.css`, matching the reviewed local build references. Desktop at 1440px and mobile at 390px have no document overflow. Project keyboard browsing and credential search/reset work in this production revision. The downloadable PDF file is unchanged locally; the previously browser-downloaded PDF SHA-256 is `7136ca5070b67e1180187a8924aed2ae14efa8d442af105a0a50ba42f43fb0b0`. No browser errors or warnings were recorded.

Evidence: `.impeccable/review/blue-live-desktop.jpg`, `blue-live-mobile.jpg` and `blue-server-ready.jpg`; detailed checks are in `docs/redesign-verification.md`. Direct Python HTTPS requests returned 403, so this update does not claim byte-level verification of every public asset. Browser-loaded bundle names and the downloaded PDF were verified.

The records below describe the original 10 October Caddy installation. They are retained as historical operations evidence; the current server filesystem and runtime configuration were not inspected during the Server Manager deployment.

## Original installation — 10 October 2026

## Current status

- Production build passed (`npm run build`).
- Release `20261010T153151Z` is installed and running on the existing `4bytedigi` Ubuntu server.
- All 12 served files match the local build's SHA-256 hashes; the résumé PDF returns `application/pdf`, hashed assets have immutable caching, and missing files return 404.
- Cloudflare has saved a proxied CNAME for `jiasheng.4bytedigi.com` to the existing `4ByteDigi` tunnel. Public DNS resolves.
- The public route is active and all 12 files return HTTP 200 over HTTPS. Eleven files match the release byte for byte. The HTML matches after removing the existing zone's Cloudflare Web Analytics beacon injection; no site or security setting was changed to remove that beacon.
- The public browser checks passed: desktop at 1440 pixels, mobile at 390 pixels, loaded imagery, all five category filters, expansion to 17 credentials, search, empty-state reset, and Escape to close mobile navigation. No browser errors or warnings were recorded.
- The browser's PDF download matches SHA-256 `7136ca5070b67e1180187a8924aed2ae14efa8d442af105a0a50ba42f43fb0b0`.
- The shared tunnel has four ready connections and retains all 15 previous routes plus Jia Sheng's new route. The existing main website and server dashboard both returned HTTP 200 after activation.
- Original tunnel configuration backup: `/etc/cloudflared/config.yml.before-jiasheng-20261010T153700Z`.

## Runtime

| Setting | Value |
| --- | --- |
| SSH alias | `4bytedigi` |
| Server user | `pyie` |
| Site directory | `/home/pyie/jiasheng-resume` |
| Active release | `current` symlink into `releases/20261010T153151Z` |
| Web server | Caddy 2.11.7, official Linux amd64 release, SHA-256 verified before execution |
| Service | User systemd unit `jiasheng-resume.service` |
| Origin | `http://127.0.0.1:9082` (loopback only) |
| Public URL | `https://jiasheng.4bytedigi.com` |
| Tunnel | `dc054a50-d5b1-4c37-b12a-b2c89d11ca56` |
| Tunnel service | `dbstudios-tunnel.service` |

The existing user already has systemd lingering enabled. The résumé service therefore survives SSH logout and starts at boot. Cloudflare supplies public HTTPS and carries requests through the existing tunnel to the loopback origin. No inbound public origin port or Docker installation was added.

Caddy came from the [official release](https://github.com/caddyserver/caddy/releases/tag/v2.11.7). The archive SHA-256 is `727b91701a392de6ebc5027509f548bf39979e5216340d0faed8fa5e69c84f8b`. Its [file server documentation](https://caddyserver.com/docs/caddyfile/directives/file_server) describes the static serving behavior.

## Initial hostname activation

The completed administrator activation used this command. It can be rerun to check that the expected route is already installed:

```powershell
ssh -t 4bytedigi 'sudo python3 /home/pyie/jiasheng-resume/publish-route.py'
```

The uploaded `deploy/publish-route.py` checks the server and tunnel identity, verifies the served index against the uploaded release, and rejects a conflicting hostname route. It inserts only `jiasheng.4bytedigi.com` before the existing 404 catch-all. It verifies that every other parsed setting is unchanged, validates the candidate configuration with cloudflared, preserves the configuration's owner and mode, and creates a timestamped backup before replacing it.

Applying the route briefly reconnects the shared tunnel. If validation or reconnection fails, the script restores the previous configuration. The original routes and catch-all remain present. Route preservation, repeat-run behavior, and conflict rejection were checked with the script's `--self-test` on the server.

## Operations

```powershell
ssh 4bytedigi 'systemctl --user status jiasheng-resume.service --no-pager'
ssh 4bytedigi 'journalctl --user -u jiasheng-resume.service -n 30 --no-pager'
ssh 4bytedigi 'python3 /home/pyie/jiasheng-resume/verify-origin.py'
```

`deploy/Caddyfile` and `deploy/jiasheng-resume.service` are the installed configuration sources. `deploy/install-origin.py` verifies the archive and per-file manifest before installing an immutable release and switching the `current` symlink. It expects a freshly generated `release.json` and `jiasheng-resume.tar.gz`; preserve older release directories for rollback.

Local build archive, manifest, and DNS screenshot are in ignored `output/deploy/`. They contain no deployment credentials. The brand guidelines PDF is a local artifact and is not part of the résumé website's published files.

Public HTTPS integrity checks are saved in `output/deploy/public-verification.json`; browser checks are in `output/deploy/browser-verification.json`. `live-desktop.jpg`, `live-mobile.jpg` and `cloudflare-dns.jpg` provide visual evidence. Run `./deploy/verify-public.ps1` to compare the public files with the local release manifest again.
