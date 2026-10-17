// Fails the site build if a game linked from the shelf hasn't been synced into public/.
// The game folders are gitignored (deploy.bat syncs them in), so a build from a fresh clone
// would otherwise deploy without them and /nutfall/ would 404.
import fs from 'node:fs';
import path from 'node:path';

const site = path.resolve(import.meta.dirname, '..');
const games = { nutfall: 'npm run sync:nutfall', siegebreak: 'npm run sync:siegebreak' };
const missing = Object.entries(games).filter(([slug]) => !fs.existsSync(path.join(site, 'public', slug, 'index.html')));
if (missing.length) {
  for (const [slug, fix] of missing) console.error(`public/${slug}/index.html is missing; run: ${fix}`);
  process.exit(1);
}
