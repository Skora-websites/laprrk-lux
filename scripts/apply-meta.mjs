/* Injects og/twitter metadata into every scaffolded .html page from the
   PAGES list in this script, so social previews work on all 69 pages.
   Run: node scripts/apply-meta.mjs (idempotent). */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const src = readFileSync(join(root, "scripts/scaffold-pages.mjs"), "utf8");
const m = src.match(/const PAGES = \[([\s\S]*?)\n\];/);
if (!m) throw new Error("PAGES list not found in scaffold-pages.mjs");
const PAGES = eval("[" + m[1] + "]");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const titleRe = () => /    <meta property="og:type"[^\n]*\n(?:    <meta[^\n]*\n)*?    <meta name="twitter:image"[^\n]*\n/;
const anchorRe = /(    <meta name="theme-color"[^\n]*\n)/;

let updated = 0;
for (const [slug, title, desc] of PAGES) {
  const file = join(root, `${slug}.html`);
  if (!existsSync(file)) continue;
  let html = readFileSync(file, "utf8");

  const block = [
    `    <meta property="og:type" content="website" />`,
    `    <meta property="og:site_name" content="Laprrk Technology Solutions" />`,
    `    <meta property="og:title" content="${esc(title)}" />`,
    `    <meta property="og:description" content="${esc(desc)}" />`,
    `    <meta property="og:url" content="https://laprrk.com/${slug}.html" />`,
    `    <meta property="og:image" content="https://laprrk.com/assets/img/og-image.png" />`,
    `    <meta property="og:image:width" content="1200" />`,
    `    <meta property="og:image:height" content="630" />`,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:title" content="${esc(title)}" />`,
    `    <meta name="twitter:description" content="${esc(desc)}" />`,
    `    <meta name="twitter:image" content="https://laprrk.com/assets/img/og-image.png" />`,
    ``,
  ].join("\n");

  if (titleRe().test(html)) html = html.replace(titleRe(), block);
  else if (anchorRe.test(html)) html = html.replace(anchorRe, (a) => a + block);
  else throw new Error(`no metadata anchor in ${slug}.html`);

  writeFileSync(file, html);
  updated++;
}
console.log(`meta applied to ${updated} pages`);
