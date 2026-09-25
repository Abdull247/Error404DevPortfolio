#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
PAPER = (244, 243, 239)  # #F4F3EF
INK = (17, 17, 17)  # #111111
SIGNAL = (180, 35, 24)  # #B42318
HATCH = (230, 229, 223)  # #E6E5DF
SHEET = (251, 251, 248)  # #FBFBF8

serif_title = ImageFont.truetype("/workspace/.grok/fonts/newsreader-700.ttf", 118)
serif_small = ImageFont.truetype("/workspace/.grok/fonts/newsreader-400.ttf", 22)
sans_kicker = ImageFont.truetype("/workspace/.grok/fonts/ibm-plex-sans-500.ttf", 15)
sans_tag = ImageFont.truetype("/workspace/.grok/fonts/ibm-plex-sans-400.ttf", 22)
sans_meta = ImageFont.truetype("/workspace/.grok/fonts/ibm-plex-sans-400.ttf", 13)

img = Image.new("RGB", (W, H), PAPER)
draw = ImageDraw.Draw(img)

# Diagonal hatch field
step = 14
for i in range(-H, W + H, step):
    draw.line([(i, 0), (i + H, H)], fill=HATCH, width=1)

# Outer hairline frame
m = 28
draw.rectangle([m, m, W - m - 1, H - m - 1], outline=INK, width=1)

# Inner sheet with second hairline
s = 44
draw.rectangle([s, s, W - s - 1, H - s - 1], fill=SHEET, outline=INK, width=1)

# Inner-inner hairline
ss = 56
draw.rectangle([ss, ss, W - ss - 1, H - ss - 1], outline=INK, width=1)

# Left hatch column inside the sheet (editorial sidebar)
col_x = 80
col_w = 92
draw.rectangle([col_x, 72, col_x + col_w, H - 73], fill=PAPER)
for i in range(-H, W + H, 10):
    x0 = col_x
    y0 = 72
    x1 = col_x + col_w
    y1 = H - 73
    # clip diagonal lines to the column
    # draw full then recrop: simpler via a mask
# redraw column hatch via a crop
col = Image.new("RGB", (col_w, H - 145), PAPER)
cd = ImageDraw.Draw(col)
for i in range(-H, col_w + H, 9):
    cd.line([(i, 0), (i + (H - 145), H - 145)], fill=HATCH, width=1)
img.paste(col, (col_x, 72))
draw.rectangle([col_x, 72, col_x + col_w, H - 73], outline=INK, width=1)

# Signal red bar on the column
draw.rectangle([col_x, 72, col_x + 6, H - 73], fill=SIGNAL)

# Vertical 404 watermark, sized to sit fully inside the column
wm_font = ImageFont.truetype("/workspace/.grok/fonts/newsreader-700.ttf", 36)
probe = ImageDraw.Draw(Image.new("RGB", (1, 1)))
bb = probe.textbbox((0, 0), "404", font=wm_font)
tw, th = bb[2] - bb[0], bb[3] - bb[1]
pad = 6
wm = Image.new("RGBA", (tw + pad * 2, th + pad * 2), (0, 0, 0, 0))
wd = ImageDraw.Draw(wm)
wd.text((pad - bb[0], pad - bb[1]), "404", font=wm_font, fill=INK + (48,))
wm_r = wm.rotate(90, expand=True, fillcolor=(0, 0, 0, 0))
wr, hr = wm_r.size
col_h = H - 145
px = col_x + (col_w - wr) // 2
py = 72 + (col_h - hr) // 2
img.paste(wm_r, (px, py), wm_r)

# Content origin (right of sidebar)
cx = (col_x + col_w + W) // 2 + 8

def center_text(text, font, y, fill=INK, tracking=0):
    if tracking == 0:
        bbox = draw.textbbox((0, 0), text, font=font)
        tw = bbox[2] - bbox[0]
        x = cx - tw // 2
        draw.text((x, y), text, font=font, fill=fill)
        return x, tw
    # manual tracking
    widths = []
    total = 0
    for ch in text:
        b = draw.textbbox((0, 0), ch, font=font)
        w = b[2] - b[0]
        widths.append(w)
        total += w
    total += tracking * (len(text) - 1)
    x = cx - total // 2
    for ch, w in zip(text, widths):
        draw.text((x, y), ch, font=font, fill=fill)
        x += w + tracking
    return cx - total // 2, total

# Kicker
center_text("DEVELOPER  PORTFOLIO", sans_kicker, 168, fill=INK, tracking=7)

# Signal rule under kicker
rule_w = 48
draw.rectangle([cx - rule_w // 2, 198, cx + rule_w // 2, 201], fill=SIGNAL)

# Title
title = "Error404"
tb = draw.textbbox((0, 0), title, font=serif_title)
tw = tb[2] - tb[0]
th = tb[3] - tb[1]
tx = cx - tw // 2
ty = 230
draw.text((tx, ty), title, font=serif_title, fill=INK)

# Hairline under title
gap = 18
line_y = ty + th + gap
line_w = max(int(tw * 0.55), 280)
draw.line([cx - line_w // 2, line_y, cx + line_w // 2, line_y], fill=INK, width=1)

# Tagline
center_text("Mobile. Backend. Automation.", sans_tag, line_y + 22, fill=INK, tracking=1)

# Footer meta
center_text("SOFTWARE  ENGINEERING", sans_meta, 512, fill=INK, tracking=6)

# Tiny corner marks (editorial registration)
mark = 8
for x, y in [
    (ss + 8, ss + 8),
    (W - ss - 9 - mark, ss + 8),
    (ss + 8, H - ss - 9 - mark),
    (W - ss - 9 - mark, H - ss - 9 - mark),
]:
    draw.line([x, y + mark, x, y, x + mark, y], fill=INK, width=1)

out = "/workspace/.grok/og.jpg.tmp"
img.save(out, "JPEG", quality=88, optimize=True, subsampling=0)
print("wrote", out, img.size)
