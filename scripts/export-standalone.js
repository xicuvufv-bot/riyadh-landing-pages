const fs = require("fs");
const path = require("path");
const { STORES } = require("./data.js");

const ROOT = path.join(__dirname, "..");
const BUILD = path.join(ROOT, "_build");

fs.rmSync(BUILD, { recursive: true, force: true });
fs.mkdirSync(BUILD, { recursive: true });

for (const s of STORES) {
  const dir = path.join(BUILD, s.slug);
  const assets = path.join(dir, "assets");
  fs.mkdirSync(path.join(assets, "img", s.slug), { recursive: true });

  const html = fs.readFileSync(path.join(ROOT, "stores", s.slug, "index.html"), "utf8")
    .split("../../assets/").join("assets/");

  fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
  for (const f of ["style.css", "site.js", "favicon.svg"]) {
    fs.copyFileSync(path.join(ROOT, "assets", f), path.join(assets, f));
  }
  const imgs = fs.readdirSync(path.join(ROOT, "assets", "img", s.slug));
  for (const f of imgs) {
    fs.copyFileSync(
      path.join(ROOT, "assets", "img", s.slug, f),
      path.join(assets, "img", s.slug, f)
    );
  }
  console.log("جهزت:", s.slug);
}
console.log("جاهز في:", BUILD);
