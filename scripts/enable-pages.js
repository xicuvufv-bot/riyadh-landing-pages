const { execSync } = require("child_process");
const { STORES } = require("./data.js");
const OWNER = "xicuvufv-bot";

function sh(cmd) {
  try {
    return execSync(cmd, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
  } catch (e) {
    return "ERR: " + (e.stderr ? e.stderr.toString().split("\n")[0] : e.message.split("\n")[0]);
  }
}

const urls = [];
for (const s of STORES) {
  const repo = `${OWNER}/${s.slug}`;
  const enable = sh(`gh api -X POST repos/${repo}/pages -f "source[branch]=main" -f "source[path]=/"`);
  console.log(s.slug, "->", enable.startsWith("ERR") && !enable.includes("already") ? enable : "enabled");
  urls.push({ slug: s.slug, url: `https://${OWNER}.github.io/${s.slug}/` });
}

const { writeFileSync } = require("fs");
const path = require("path");
writeFileSync(path.join(__dirname, "urls.json"), JSON.stringify(urls, null, 2));
console.log("---");
for (const u of urls) console.log(u.url);
