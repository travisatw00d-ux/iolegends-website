// Brings the latest Knot Quite There download into the site: the zip and version.txt from
// ../Scramble/desktop/dist (made by its package.bat) go to public/knotquitethere/, and
// src/knot-release.json records the version, file, size and date for the download page.
// The game checks /knotquitethere/version.txt at launch to tell players a new version is out.
//   Usage: node scripts/sync-knot.mjs
import fs from 'node:fs';
import path from 'node:path';

const site = path.resolve(import.meta.dirname, '..');
const dist = path.resolve(site, '..', 'Scramble', 'desktop', 'dist');
const dest = path.join(site, 'public', 'knotquitethere');

const version = fs.readFileSync(path.join(dist, 'version.txt'), 'utf8').trim();
const file = `KnotQuiteThere-v${version}-windows.zip`;
const zip = path.join(dist, file);
if (!fs.existsSync(zip)) {
  console.error(`${file} not found in ${dist}: run package.bat there first`);
  process.exit(1);
}
const size = fs.statSync(zip).size;
// Cloudflare serves files up to 25 MiB.
if (size >= 25 * 1024 * 1024) {
  console.error(`${file} is ${(size / 1048576).toFixed(1)} MB: over the 25 MB limit`);
  process.exit(1);
}

fs.mkdirSync(dest, { recursive: true });
// (Only the current download: older zips go.)
for (const f of fs.readdirSync(dest)) {
  if (/^KnotQuiteThere-v.*\.zip$/.test(f) && f !== file) fs.rmSync(path.join(dest, f));
}
fs.copyFileSync(zip, path.join(dest, file));
fs.writeFileSync(path.join(dest, 'version.txt'), version + '\n');

const release = {
  version,
  file,
  href: `/knotquitethere/${file}`,
  sizeMB: Math.round((size / 1048576) * 10) / 10,
  date: new Date(fs.statSync(zip).mtime).toISOString().slice(0, 10),
};
fs.writeFileSync(path.join(site, 'src', 'knot-release.json'), JSON.stringify(release, null, 2) + '\n');
console.log(`Knot Quite There ${version}: ${file} (${release.sizeMB} MB) -> ${dest}`);
