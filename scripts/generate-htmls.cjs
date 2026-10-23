const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');

if (!fs.existsSync(distDir)) {
  console.error('dist directory does not exist!');
  process.exit(1);
}

const indexHtmlPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html does not exist!');
  process.exit(1);
}

// Generate 404.html for SPA fallback
fs.copyFileSync(indexHtmlPath, path.join(distDir, '404.html'));

console.log('Generated 404.html for SPA fallback in dist/');
