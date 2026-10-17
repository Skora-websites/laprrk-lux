import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const files = fs.readdirSync(rootDir).filter((f) => f.endsWith(".html"));

const targetSnippet = `<script>
      document.documentElement.setAttribute("data-theme","light");
    </script>`;

const replacementSnippet = `<script>
      (function(){
        try {
          var saved = localStorage.getItem("laprrk-theme");
          var theme = saved || "light";
          document.documentElement.setAttribute("data-theme", theme);
        } catch (e) {}
      })();
    </script>`;

let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(rootDir, file);
  let content = fs.readFileSync(filePath, "utf-8");

  if (content.includes(targetSnippet)) {
    content = content.replace(targetSnippet, replacementSnippet);
    fs.writeFileSync(filePath, content, "utf-8");
    updatedCount++;
  } else if (file === "index.html") {
    if (!content.includes('localStorage.getItem("laprrk-theme")')) {
      content = content.replace(
        '<link rel="stylesheet" href="/style.css" />',
        `<link rel="stylesheet" href="/style.css" />\n    ${replacementSnippet}`
      );
      fs.writeFileSync(filePath, content, "utf-8");
      updatedCount++;
    }
  }
}

console.log(`Updated theme bootstrap in ${updatedCount} HTML files.`);
