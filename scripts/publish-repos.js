const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { STORES } = require("./data.js");

const BUILD = path.join(__dirname, "..", "_build");
const OWNER = "xicuvufv-bot";

function sh(cmd, cwd) {
  try {
    return execSync(cmd, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
  } catch (e) {
    return "ERR: " + (e.stderr ? e.stderr.toString().split("\n")[0] : e.message.split("\n")[0]);
  }
}

const results = [];
for (const s of STORES) {
  const repo = s.slug;
  const dir = path.join(BUILD, repo);
  const fullName = `${OWNER}/${repo}`;
  console.log("إنشاء:", fullName);
  fs.rmSync(path.join(dir, ".git"), { recursive: true, force: true });
  sh("git init -b main", dir);
  sh('git config user.name "xicuvufv-bot"', dir);
  sh('git config user.email "xicuvufv@gmail.com"', dir);
  sh("git add -A", dir);
  const commit = sh('git commit -m "store landing page"', dir);
  if (commit.startsWith("ERR")) console.log("  ملاحظة commit:", commit);
  const created = sh(`gh repo create ${fullName} --public --source "${dir}" --push --description "store landing page"`, dir);
  if (created.startsWith("ERR")) {
    console.log("  gh create فشل، محاولة push يدوي:", created);
    sh("git remote remove origin", dir);
    sh(`git remote add origin https://github.com/${fullName}.git`, dir);
    const pushed = sh("git push -u origin main --force", dir);
    console.log("  push:", pushed.startsWith("ERR") ? pushed : "تم");
  } else {
    console.log("  ok:", created.split("\n")[0]);
  }
  results.push(repo);
}
console.log("---");
console.log(results.join(" "));
