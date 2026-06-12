import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'images');

const images = [
  { src: join(root, 'logo-big.jpg'), name: 'logo-big' },
  { src: join(root, 'logo-small.jpg'), name: 'logo-small' },
];

await mkdir(outDir, { recursive: true });

for (const { src, name } of images) {
  await sharp(src).jpeg({ quality: 85 }).toFile(join(outDir, `${name}.jpg`));
  await sharp(src).webp({ quality: 85 }).toFile(join(outDir, `${name}.webp`));
  console.log(`Optimized ${name}`);
}
