# how-it-works.mp4

The procedure walkthrough video is **not committed to git** (2.3 MB binary, and
git is a poor host for media). It is fetched at deploy time by `build.sh`.

- Source: `Copy of How it works.mp4` in the client Drive assets folder (1920x1080, 41.8s, 101 MB)
- Web encode: H.264 1280x720, CRF 27, AAC 96k, faststart → 2.3 MB
- Poster frame: `assets/img/video-poster.webp` (committed)

To refresh it, re-encode from the Drive master with:

```
ffmpeg -i "Copy of How it works.mp4" -vf scale=1280:-2 -c:v libx264 -preset slow \
  -crf 27 -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k how-it-works.mp4
```

and place the result at `assets/video/how-it-works.mp4` (or update the URL in `build.sh`).
