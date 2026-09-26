import { copyFileSync, existsSync } from 'node:fs';

const source = 'public/.htaccess';
const destination = 'out/.htaccess';

if (!existsSync(source)) {
  console.error('public/.htaccess is missing.');
  process.exit(1);
}

if (!existsSync('out')) {
  console.error('out/ is missing. Run next build first.');
  process.exit(1);
}

copyFileSync(source, destination);
console.log('Copied public/.htaccess to out/.htaccess');
