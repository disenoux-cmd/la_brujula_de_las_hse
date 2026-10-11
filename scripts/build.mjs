import { mkdir, copyFile, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
await rm(output, { recursive: true, force: true });
await mkdir(path.join(output, 'docs'), { recursive: true });
await mkdir(path.join(output, 'assets'), { recursive: true });
for (const file of ['index.html', 'styles.css', 'interactions.css', 'app.js', 'sintesis.html', 'sintesis-hse.pdf', 'favicon.ico']) {
  await copyFile(path.join(root, file), path.join(output, file));
}
await copyFile(path.join(root, 'docs', 'excolombia.png'), path.join(output, 'docs', 'excolombia.png'));
for (const image of ['portada-hse.webp', 'aula-aprendizaje.webp', 'liderazgo-colectivo.webp']) {
  await copyFile(path.join(root, 'assets', image), path.join(output, 'assets', image));
}
console.log('Sitio estático listo en dist/. Solo se incluyen archivos públicos del RED.');
