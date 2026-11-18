import { removeBackground } from "@imgly/background-removal-node";
import Jimp from "jimp";
import fs from "node:fs/promises";
import path from "node:path";

const source = path.resolve(
  "C:/Users/Kasia/.cursor/projects/c-Users-Kasia-Desktop-portfolio/assets/image0-b76043f7-be1a-495a-bdc1-dd9afb1b274a.jpg",
);
const outPath = path.resolve("src/assets/kasia.jpg");

console.log("Removing background...");
const sourceBytes = await fs.readFile(source);
const sourceBlob = new Blob([sourceBytes], { type: "image/jpeg" });
const blob = await removeBackground(sourceBlob, {
  output: { format: "image/png", quality: 0.95 },
});

const buffer = Buffer.from(await blob.arrayBuffer());
const cutout = await Jimp.read(buffer);

const w = cutout.bitmap.width;
const h = cutout.bitmap.height;
const size = Math.min(w, h);
const cropX = Math.max(0, Math.round((w - size) * 0.5));
const cropY = Math.max(0, Math.round(h * 0.02));
cutout.crop(cropX, cropY, size, Math.min(size, h - cropY));

const finalSize = 900;
cutout.resize(finalSize, finalSize);

const canvas = new Jimp(finalSize, finalSize, 0x07111fff);

for (let y = 0; y < finalSize; y += 1) {
  for (let x = 0; x < finalSize; x += 1) {
    const dx = (x - finalSize * 0.5) / (finalSize * 0.48);
    const dy = (y - finalSize * 0.42) / (finalSize * 0.52);
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 1) {
      const t = 1 - dist;
      const glow = Math.round(28 + 40 * t * t);
      const blue = Math.round(45 + 70 * t);
      const color =
        ((18 & 255) << 24) | ((glow & 255) << 16) | ((blue & 255) << 8) | 255;
      canvas.setPixelColor(color >>> 0, x, y);
    }
  }
}

cutout.scan(0, 0, cutout.bitmap.width, cutout.bitmap.height, function (x, y, idx) {
  const a = this.bitmap.data[idx + 3];
  if (a < 8) return;

  let r = this.bitmap.data[idx];
  let g = this.bitmap.data[idx + 1];
  let b = this.bitmap.data[idx + 2];

  const gray = 0.299 * r + 0.587 * g + 0.114 * b;
  r = Math.round(r * 0.78 + gray * 0.22 - 4);
  g = Math.round(g * 0.8 + gray * 0.2);
  b = Math.round(b * 0.72 + gray * 0.28 + 10);

  r = Math.min(255, Math.max(0, Math.round((r - 128) * 1.08 + 128)));
  g = Math.min(255, Math.max(0, Math.round((g - 128) * 1.08 + 128)));
  b = Math.min(255, Math.max(0, Math.round((b - 128) * 1.08 + 128)));

  this.bitmap.data[idx] = r;
  this.bitmap.data[idx + 1] = g;
  this.bitmap.data[idx + 2] = b;
});

canvas.composite(cutout, 0, 0);
await canvas.quality(92).writeAsync(outPath);
console.log("Wrote", outPath);
