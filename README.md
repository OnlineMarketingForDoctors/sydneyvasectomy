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
| `dr-geoff-studio.jpg`, `dr-matt-studio.jpg` | Client photography, cut out and composited onto an identical sage studio plate so both portraits match |
| `dr-geoff-dark.jpg`, `dr-matt-consult.jpg` | Client photography, optimized |
| `hero-duo.webp` | **AI-generated** (nano banana pro, reference-based) — both doctors together, hero |
| `duo-corridor.webp` | **AI-generated** (nano banana pro, reference-based) — both doctors in clinic corridor |
| `consult.webp` | **AI-generated** (nano banana pro, reference-based) — Dr Cashion consulting |
| `clinic-bg.webp` | **AI-generated** (nano banana pro, text-only) — clinic interior, full-bleed closing background |
| `procedure-room.webp` | **AI-generated** — procedure room, Patient information hero |
| `about-room.webp` | **AI-generated** — consulting room set for two, About hero |
| `fees-counter.webp` | **AI-generated** — reception counter still life, Fees hero |
| `book-diary.webp` | **AI-generated** — appointment diary, Book online hero |
| `privacy-files.webp` | **AI-generated** — locked record drawers, Privacy policy hero |
| `enmore-street.webp` | **AI-generated** (client-supplied) — inner-west street scene, Location hero |
| `consent-hands.webp` | **AI-generated** (client-supplied) — doctor's hands and consent form, Contact hero |
| `recovery.webp` | **AI-generated** — recovering at home, Patient information |
| `reception.webp` | **AI-generated** — reception desk |
| `video-poster.webp` | Frame extracted from the client's *How it works* video |
| `logo.png`, `logo-mark.png` | Client logo (Drive) |

## Video

`assets/video/how-it-works.mp4` is **not committed** — see
`assets/video/README.md`. `build.sh` fetches the web encode at deploy time.

## Local preview

```
python3 -m http.server 8000
# open http://localhost:8000
```
