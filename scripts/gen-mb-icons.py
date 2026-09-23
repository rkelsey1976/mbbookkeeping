from PIL import Image, ImageDraw, ImageFont

NAVY = (13, 21, 32)
BLUE = (139, 187, 227)
FONT = "/System/Library/Fonts/Helvetica.ttc"

def tile(sz, fs):
    img = Image.new("RGB", (sz, sz), BLUE)
    d = ImageDraw.Draw(img)
    fo = ImageFont.truetype(FONT, fs)
    bb = d.textbbox((0, 0), "MB", font=fo)
    d.text(((sz - (bb[2] - bb[0])) / 2 - bb[0], (sz - (bb[3] - bb[1])) / 2 - bb[1]),
           "MB", fill=NAVY, font=fo)
    return img

for sz, name, fs in [
    (512, "icon-512.png", 235),
    (192, "android-chrome-192x192.png", 88),
    (512, "android-chrome-512x512.png", 235),
    (180, "apple-touch-icon.png", 82),
    (64, "favicon.png", 29),
]:
    tile(sz, fs).save("public/" + name)

og = Image.new("RGB", (1200, 630), BLUE)
d = ImageDraw.Draw(og)
f1 = ImageFont.truetype(FONT, 340)
b = d.textbbox((0, 0), "MB", font=f1)
d.text(((1200 - (b[2] - b[0])) / 2 - b[0], 60 - b[1]), "MB", fill=NAVY, font=f1)
f2 = ImageFont.truetype(FONT, 52)
sub = "BOOKKEEPING + PAYROLL SOLUTIONS"
b2 = d.textbbox((0, 0), sub, font=f2)
d.text(((1200 - (b2[2] - b2[0])) / 2 - b2[0], 470 - b2[1]), sub, fill=NAVY, font=f2)
og.save("public/og-default.jpg", quality=90)
print("OK - icons and OG generated")
