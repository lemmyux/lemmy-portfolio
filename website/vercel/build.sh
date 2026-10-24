#!/bin/sh
# Builds standalone Vercel sites for portfolio variations A and B from ../lemmy-portfolio-*.html,
# plus each site's Gallery and About pages, case study pages (../work/<site>/*.html, made by ../work/generate.js) and their images.
# The artifact pages omit <!doctype>/<html>/<head>, so each page is wrapped in a full document here.
set -e
HERE="$(cd "$(dirname "$0")" && pwd)"
SRC="$HERE/.."

wrap() { # wrap <source-html> <dest-html>
  {
    printf '%s\n' '<!doctype html>' '<html lang="en">' '<head>' \
      '<meta charset="utf-8">' \
      '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">' \
      '<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;font-size:14px}img{max-width:100%}[hidden]{display:none!important}</style>'
    cat "$1"
    printf '\n%s\n' '</html>'
  } > "$2"
}

build() {
  name="$1"; page="$2"; key="$3"; shift 3
  out="$HERE/$name"
  rm -rf "$out/img" "$out/work"
  mkdir -p "$out/img" "$out/work"
  wrap "$SRC/$page" "$out/index.html"
  for img in "$@"; do cp "$SRC/img/$img" "$out/img/$img"; done
  for f in "$SRC/work/$key"/*.html; do wrap "$f" "$out/work/$(basename "$f")"; done
  wrap "$SRC/book/$key.html" "$out/book.html"
  wrap "$SRC/about/$key.html" "$out/about.html"
  wrap "$SRC/gallery/$key.html" "$out/gallery.html"
  cp -R "$SRC/img/work" "$out/img/work"
  cp -R "$SRC/img/thumbs" "$out/img/thumbs"
  if [ -d "$SRC/img/gallery" ]; then cp -R "$SRC/img/gallery" "$out/img/gallery"; fi
}

build lemmy-portfolio-a lemmy-portfolio-a.html a rana.jpg soin-attention.jpg vitashield.jpg soin-talent.jpg lemmy.jpg
build lemmy-portfolio-b lemmy-portfolio-b.html b rana.jpg soin-attention.jpg vitashield.jpg soin-talent.jpg lemmy.jpg
echo "Built: $HERE/lemmy-portfolio-a  $HERE/lemmy-portfolio-b"
