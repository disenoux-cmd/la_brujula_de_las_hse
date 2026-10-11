import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'assets');
const env = { ...process.env };
try {
  const content = await readFile(path.join(root, '.env'), 'utf8');
  for (const line of content.split(/\r?\n/)) {
    const match = line.match(/^\s*(?:export\s+)?([A-Za-z_][\w]*)\s*=\s*(.*?)\s*$/);
    if (match) env[match[1]] = match[2].replace(/^(['"])(.*)\1$/, '$2');
  }
} catch { /* La clave también puede proporcionarse como variable de entorno. */ }
const key = env.OPENAI_API_KEY || env.OPENAI_API_TOKEN || env.API_TOKEN_OPENAI || Object.entries(env).find(([name, value]) => /OPENAI|API_TOKEN/i.test(name) && value.startsWith('sk-'))?.[1];
if (!key) throw new Error('Clé OpenAI absente. Définir OPENAI_API_KEY dans .env.');

const style = 'Create a sophisticated editorial illustration for a Colombian teacher professional-learning resource. Landscape 3:2 composition, full-bleed, elegant contemporary hand-painted gouache with fine pencil contour details, tactile but clean, warm believable human expressions, natural body proportions and hands. Restrained palette: deep ink blue #173b54, petrol green #21685e, pale blue-gray #eaf2f4, touches of mustard yellow #fbc900, natural varied skin tones. Visually rich authored scene with thoughtfully layered composition and soft daylight, professional educational publishing quality, not childish clipart, not 3D, not a generic vector flat-design corporate illustration. No letters, words, labels, logos, UI, borders, or watermark. Fictional people, not a representation of an actual school.';
const images = [
  { name: 'portada-hse', prompt: 'Create an extraordinary, polished contemporary editorial cover artwork for a professional educational digital resource about socioemotional skills, learning and collective leadership. Landscape 1536x1024. A seamless deep petrol navy blue studio background, approximately hex #102f43, with the LEFT 48 PERCENT completely empty clean navy negative space, no objects or details there: readable website text will be overlaid later. All of the sculptural subject belongs on the RIGHT HALF, around x=1100 y=500, with safe margins. A beautifully crafted, tactile, elegant off-white open book seen in three-quarter perspective, its pages transforming into three broad graceful interweaving sculptural ribbons that form an airy circular compass-like structure above the book. One ribbon is rich saturated golden yellow, one is muted jade teal, one is porcelain white. A small precise gold directional needle suspended at the center of the open circular structure suggests orientation and shared purpose. The ribbons must have refined folded-paper material with natural subtle texture, physically convincing light and soft shadows, not metallic, not shiny plastic, not inflated balloons. Sculptural editorial installation photographed at high-end studio quality. Confident bold silhouette, elegant unexpected composition, sophisticated education publishing art direction, no decorative confetti, no scattered floating trinkets, no spheres, no neon glow, no gradients as the main subject, no people. Quiet navy background all the way to every edge. Light is soft and directional from the upper right, giving the sculpture depth and readable pale highlights. Ground the book at the bottom-right with subtle cast shadow. No letters, symbols with words, text, UI, logos, border or watermark anywhere. This is a conceptual editorial image, not a diagram or a webpage screenshot.' },
  { name: 'aula-aprendizaje', prompt: `${style} Depict a Colombian female teacher and four teenage students of diverse Afro-Colombian and mestizo backgrounds around a classroom table, all visible in a welcoming sunlit classroom. The teacher listens attentively while a student shares a notebook, other students show engaged curiosity and mutual encouragement. A small potted plant, window light and understated classroom shelving in background. The meaning is belonging, emotional trust and rigorous collaborative learning. Compose the five people naturally across the middle of the frame, retain their heads and gestures inside the central 80 percent so a wide crop stays readable. Navy and teal clothing with a single small yellow accent. Avoid literal flags or cultural stereotypes.` },
  { name: 'liderazgo-colectivo', prompt: `${style} Depict a close three-quarter overhead view of a shared classroom worktable with four teenage students collaboratively building a small community garden model from paper and cardboard. Diverse natural skin tones; part of the students' engaged faces and upper bodies visible near the top edges, their hands arranging miniature plants and paths at the center. One student holds a small sprout, another sketches simple non-text marks in a notebook, another contributes a cardboard piece. Carefully drawn anatomically sensible hands. The meaning is collective purpose, shared responsibility, respect for different contributions and bringing talents together. Rich calm teal and ink blue tones, light cool paper background, small mustard accent supplies. No readable writing on any object. Model should stay central and visible under a 16:9 crop.` }
];
await mkdir(output, { recursive: true });
const embeddingTool = path.join(env.USERPROFILE || '', '.config', 'opencode', 'skills', 'impeccable', 'scripts', 'embed-prompt.mjs');
for (const image of images) {
  const file = path.join(output, `${image.name}.webp`);
  try { await access(file); console.log(`Imagen ya disponible: ${image.name}`); continue; } catch { /* Generar solo archivos ausentes. */ }
  console.log(`Creando ilustración: ${image.name}...`);
  const model = env.OPENAI_IMAGE_MODEL || 'gpt-image-1.5';
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({ model, prompt: image.prompt, n: 1, size: '1536x1024', quality: 'medium', output_format: 'webp', output_compression: 85 }),
    signal: AbortSignal.timeout(240000)
  });
  const data = await response.json();
  if (!response.ok || !data.data?.[0]?.b64_json) {
    const code = data.error?.code || data.error?.type || response.status;
    throw new Error(`No se pudo generar ${image.name}. Código de OpenAI: ${code}.`);
  }
  await writeFile(file, Buffer.from(data.data[0].b64_json, 'base64'));
  await mkdir(path.join(root, '.impeccable', 'image-prompts'), { recursive: true });
  await writeFile(path.join(root, '.impeccable', 'image-prompts', `${image.name}.json`), JSON.stringify({ model, prompt: image.prompt, size: '1536x1024', quality: 'medium', origin: 'Ilustración generada mediante OpenAI para este RED', createdAt: new Date().toISOString() }, null, 2));
  try {
    await access(embeddingTool);
    await promisify(execFile)(process.execPath, [embeddingTool, file, '--prompt', image.prompt]);
  } catch { console.log('Prompt documentado en el archivo de procedencia.'); }
  console.log(`Ilustración guardada: assets/${image.name}.webp`);
}
