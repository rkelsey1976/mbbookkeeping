#!/usr/bin/env bash
# Regenerate the Google Business Profile image set from assets-src/services.
# Outputs to gbp-images/ (not shipped — outside public/). Requires ImageMagick.
#
#   bash scripts/gbp-images.sh
#
# Sizes follow Google's spec: logo 720x720, cover 16:9 1080x608, gallery
# photos 1200px on the long edge (4:3 landscape, 3:4 for on-site portrait).
set -u
S=assets-src/services
O=gbp-images
rm -rf "$O"; mkdir -p "$O"/{profile,exterior,at-work,ewi}
fail=0
fill(){ magick "$1" -auto-orient -resize "${3}x${4}^" -gravity center -extent "${3}x${4}" \
        -strip -quality "${5:-86}" "$2" 2>/dev/null && echo "  ok  ${2#$O/}" || { echo "  MISS $1"; fail=1; }; }

# Logo — flatten the rounded-corner app icon onto solid black so the GBP
# circle mask gives a clean edge.
magick -size 720x720 xc:black \
  \( public/icon-512.png -resize 720x720 \) -gravity center -composite \
  -alpha off -strip "$O/profile/kd-plastering-logo-720.png" && echo "  ok  profile/kd-plastering-logo-720.png"

# Cover — 16:9
fill "$S/house-rendering-hero.jpg" "$O/profile/kd-plastering-cover-rendered-house-bristol.jpg" 1080 608 88

# Exterior / finished work — 4:3
fill "$S/house-rendering-1.jpg"      "$O/exterior/kd-plastering-house-rendering-bristol-01.jpg" 1200 900
fill "$S/house-rendering-2.jpg"      "$O/exterior/kd-plastering-house-rendering-bristol-02.jpg" 1200 900
fill "$S/house-rendering-3.jpg"      "$O/exterior/kd-plastering-house-rendering-bristol-03.jpg" 1200 900
fill "$S/ewall-rendering-hero.jpg"   "$O/exterior/kd-plastering-external-wall-rendering-bristol-01.jpg" 1200 900
fill "$S/ewall-rendering-3.jpg"      "$O/exterior/kd-plastering-external-wall-rendering-bristol-02.jpg" 1200 900
fill "$S/monocouche-rendering-2.jpg" "$O/exterior/kd-plastering-monocouche-render-bristol-01.jpg" 1200 900
fill "$S/monocouche-rendering-3.jpg" "$O/exterior/kd-plastering-monocouche-render-bristol-02.jpg" 1200 900
fill "$S/silicone-rendering-hero.jpg" "$O/exterior/kd-plastering-silicone-render-bristol-01.jpg" 1200 900
fill "$S/silicone-rendering-1.jpg"   "$O/exterior/kd-plastering-silicone-render-bristol-02.jpg" 1200 900
fill "$S/silicone-rendering-3.jpg"   "$O/exterior/kd-plastering-silicone-render-bristol-03.jpg" 1200 900

# At work — landscape where the shot allows, portrait 3:4 for the on-site ones
fill "$S/plastering-hero.jpg" "$O/at-work/kd-plastering-skimming-bristol-01.jpg" 1200 900
fill "$S/plastering-1.jpg"    "$O/at-work/kd-plastering-skimming-bristol-02.jpg" 1200 900
i=1; for n in 2 3 4 5 6 7; do
  fill "$S/plastering-$n.jpg" "$O/at-work/kd-plastering-plastering-in-progress-bristol-0$i.jpg" 1200 1600
  i=$((i+1))
done

# EWI
fill "$S/ewi-hero.jpg" "$O/ewi/kd-plastering-external-wall-insulation-bristol-01.jpg" 1200 900
fill "$S/ewi-1.jpg"    "$O/ewi/kd-plastering-external-wall-insulation-bristol-02.jpg" 1200 900

[ $fail -eq 0 ] && echo "done" || echo "done (some sources missing)"
exit $fail
