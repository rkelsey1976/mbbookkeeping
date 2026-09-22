# Source images

Full-resolution originals. These are NOT deployed — anything under `public/`
ships with every build, and these were adding ~8.9 MB to the bundle while no
page referenced them. The site serves the WebP derivatives in
`public/services/{cards,gallery,full}/`.

Regenerate a derivative with, e.g.:

    cwebp -q 82 assets-src/services/silicone-rendering-1.jpg \
      -o public/services/full/silicone-rendering-1.webp
