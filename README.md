# Sydney Vasectomy Centre — homepage rebuild

Editorial redesign of sydneyvasectomy.au. Static build: `index.html` +
`assets/` (self-hosted fonts, optimized images, vanilla CSS/JS).

## Design system

- **Palette** — scrub ink `#131c33`, paper `#fafaf6`, sage `#eef1ea`, and the
  three logo colours: mint `#93d6a6`, butter `#fded8a`, teal `#83b1af`.
- **Type** — Newsreader (editorial display serif) + Archivo (text/labels),
  self-hosted variable woff2 in `assets/fonts/`.
- **Direction** — doctor-led branding: Dr Geoff Cashion and Dr Matt Valentine
  front and centre, headline stat "32,000 vasectomies between them".

## Image provenance

| File | Source |
|---|---|
| `dr-geoff-*.jpg`, `dr-matt-*.jpg` | Client photography (Drive assets folder), optimized |
| `dr-geoff-cutout.webp`, `dr-matt-cutout.webp` | Cutouts derived from client photography |
| `duo-corridor.webp` | **AI-generated** (nano banana pro, reference-based) — both doctors in clinic corridor |
| `consult.webp` | **AI-generated** (nano banana pro, reference-based) — Dr Cashion consulting |
| `logo-mark.png`, `logo-white.png` | Client logo |

## Local preview

```
python3 -m http.server 8000
# open http://localhost:8000
```
