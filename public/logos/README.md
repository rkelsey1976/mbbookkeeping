# Manufacturer logos

## How to add them

1. Save the source files into `public/logos/raw/` — any format, any size.
   Name them after the manufacturer:

       weber.png   k-rend.png   parex.png   johnstones.png
       british-gypsum.png   knauf.png   thistle.png

2. Run:

       bash scripts/prepare-logos.sh

That trims the surrounding whitespace, normalises everything to 120px tall,
and writes transparent PNGs into `public/logos/`. They then appear on the
Materials cards automatically. Anything missing keeps the generic icon, so a
partial set is fine.

## Why the trim step exists

Logos copied from manufacturer websites are often square canvases with the
mark small in the middle (K Rend and Parex both are). Displayed at a fixed
height the padding counts as part of the logo, so those marks render tiny
next to one like Weber that fills its box. Trimming equalises them.

## Sourcing

These are third-party trademarks. Use the approved-installer / registered-
applicator packs the manufacturers issue to their installers — the versions
on their public websites are usually low-resolution, on a white background,
and sometimes carry drop shadows that look wrong on a card.

Displaying a manufacturer's mark asserts a commercial relationship, so only
include the ones KD actually holds.
