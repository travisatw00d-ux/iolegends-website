// Builds a game from its own project folder (../<Folder>) and copies the result into
// public/<slug> so the site serves it at /<slug>/.   Usage: node scripts/sync-game.mjs Scramble scramble
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const [folder, slug] = process.argv.slice(2);
if (!folder || !slug) { console.error('usage: node scripts/sync-game.mjs <ProjectFolder> <url-slug>'); process.exit(1); }
const site = path.resolve(import.meta.dirname, '..');
const game = path.resolve(site, '..', folder);
const dest = path.join(site, 'public', slug);
if (!fs.existsSync(path.join(game, 'package.json'))) { console.error(`${folder} not found at ${game}`); process.exit(1); }
console.log(`Building ${folder}...`);
execSync('npm run build', { cwd: game, stdio: 'inherit' });
fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(path.join(game, 'dist'), dest, { recursive: true });
console.log(`Copied ${path.join(game, 'dist')} -> ${dest}`);
