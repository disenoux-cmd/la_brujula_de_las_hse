import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const project = fileURLToPath(new URL('../', import.meta.url));
const root = process.argv[2] === 'dist' ? path.join(project, 'dist') : project;
const port = Number(process.env.PORT || 4173);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png', '.webp': 'image/webp', '.ico': 'image/x-icon', '.pdf': 'application/pdf' };
const allowed = new Set(['/index.html', '/styles.css', '/interactions.css', '/app.js', '/sintesis.html', '/sintesis-hse.pdf', '/favicon.ico', '/docs/excolombia.png', '/assets/portada-hse.webp', '/assets/aula-aprendizaje.webp', '/assets/liderazgo-colectivo.webp']);
http.createServer(async (req, res) => {
  try {
    let name = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (name === '/') name = '/index.html';
    if (!allowed.has(name)) { res.writeHead(404); res.end('No encontrado'); return; }
    const content = await readFile(path.join(root, name));
    res.writeHead(200, { 'Content-Type': types[path.extname(name)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    res.end(content);
  } catch { res.writeHead(404); res.end('No encontrado'); }
}).listen(port, '0.0.0.0', () => console.log(`RED disponible en http://localhost:${port}`));
