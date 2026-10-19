const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'src', 'pages', 'data');
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

// Always generate 404.html
fs.copyFileSync(indexHtmlPath, path.join(distDir, '404.html'));

// Extract all slugs
const files = ['services.ts', 'hiring.ts', 'training.ts', 'company.ts'];
const slugs = new Set();

files.forEach(f => {
  const filePath = path.join(dataDir, f);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const reg = /slug:\s*["']([^"']+)["']/g;
    let m;
    while ((m = reg.exec(content)) !== null) {
      slugs.add(m[1]);
    }
  }
});

slugs.forEach(slug => {
  const target = path.join(distDir, `${slug}.html`);
  fs.copyFileSync(indexHtmlPath, target);
});

console.log(`Generated 404.html and ${slugs.size} subpage HTML entrypoints in dist/`);
