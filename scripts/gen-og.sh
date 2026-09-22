#!/usr/bin/env bash
# Generates Open Graph / Twitter share images at 1200x630 (the size every
# social platform expects for summary_large_image).
#
#   public/og-default.jpg           — sitewide fallback
#   public/og/<service-slug>.jpg    — one per service, used on the service
#                                     hubs, service x area pages and the
#                                     matching blog posts
#
# Each card is that page's hero photo, cover-cropped, darkened top and
# bottom, with the KD wordmark, the title, an orange rule and the domain.
# Re-run after changing a hero image.
set -euo pipefail
cd "$(dirname "$0")/.."

HEROES=public/heroes
OUT=public/og
mkdir -p "$OUT"

FONT_BOLD="/System/Library/Fonts/Supplemental/Arial Bold.ttf"
FONT_REG="/System/Library/Fonts/Supplemental/Arial.ttf"
ORANGE="#ff6b1a"

# card <hero.webp> <output.jpg> <title>
card() {
  local hero="$1" out="$2" title="$3"
  magick "$hero" -resize 1200x630^ -gravity center -extent 1200x630 \
    \( -size 1200x630 gradient:'rgba(10,10,10,0.72)-rgba(10,10,10,0.10)' \) -compose over -composite \
    \( -size 1200x430 gradient:'rgba(10,10,10,0)-rgba(10,10,10,0.94)' \
       -gravity south -background none -extent 1200x630 \) -compose over -composite \
    -font "$FONT_BOLD" \
    -fill white    -pointsize 29 -gravity NorthWest -annotate +80+66  "KD PLASTERING" \
    -fill "$ORANGE" -pointsize 29 -gravity NorthWest -annotate +350+66 "/ RENDERING" \
    -fill white    -pointsize 76 -gravity NorthWest -annotate +76+360 "$title" \
    -fill "$ORANGE" -draw "rectangle 80,476 150,483" \
    -font "$FONT_REG" \
    -fill "rgba(255,255,255,0.85)" -pointsize 26 -gravity NorthWest -annotate +80+506 \
       "Bristol & Bath   ·   kdplasteringrenderingservices.co.uk" \
    -quality 82 -sampling-factor 4:2:0 -strip "$out"
  echo "  $out  $(identify -format '%wx%h %b' "$out")"
}

echo "OG images:"
card "$HEROES/house-rendering.webp"          "public/og-default.jpg"                "Plastering & Rendering"
card "$HEROES/silicone-rendering.webp"       "$OUT/silicone-rendering.jpg"          "Silicone Rendering"
card "$HEROES/house-rendering.webp"          "$OUT/house-rendering.jpg"             "House Rendering"
card "$HEROES/external-wall-rendering.webp"  "$OUT/external-wall-rendering.jpg"     "External Wall Rendering"
card "$HEROES/monocouche-rendering.webp"     "$OUT/monocouche-rendering.jpg"        "Monocouche Rendering"
card "$HEROES/plastering-services.webp"      "$OUT/plastering-services.jpg"         "Plastering Services"
card "$HEROES/external-wall-insulation.webp" "$OUT/external-wall-insulation.jpg"    "External Wall Insulation"
