#!/usr/bin/env bash
# Prepare manufacturer logos for the Materials cards.
#
# Drop raw logo files (any format/size) into public/logos/raw/, named after
# the manufacturer, then run:  bash scripts/prepare-logos.sh
#
# Trims surrounding whitespace, normalises height, writes optimised PNGs
# with transparency into public/logos/.
#
# The trim matters. Logos taken from manufacturer websites are often square
# canvases with the mark small in the middle. At a fixed display height the
# padding counts as part of the logo, so that mark looks tiny beside one
# that fills its box.
set -euo pipefail
cd "$(dirname "$0")/.."
RAW=public/logos/raw
OUT=public/logos
[ -d "$RAW" ] || { echo "Create $RAW and put the source files in it."; exit 1; }
shopt -s nullglob
found=0
for f in "$RAW"/*.png "$RAW"/*.jpg "$RAW"/*.jpeg "$RAW"/*.webp "$RAW"/*.svg; do
  found=1
  name=$(basename "${f%.*}" | tr '[:upper:]' '[:lower:]' | tr -c 'a-z0-9\n' '-' | sed 's/-\{2,\}/-/g; s/-$//')
  out="$OUT/$name.png"
  magick "$f" -background none -alpha set -fuzz 8% -trim +repage -resize x120 -strip "$out"
  printf "  %-24s -> %-24s %s\n" "$(basename "$f")" "$name.png" "$(magick identify -format '%wx%h' "$out")"
done
[ "$found" = 1 ] || echo "  nothing in $RAW yet"
echo
echo "Then point LOGOS in src/components/MaterialGrid.astro at those .png names."
