const fs = require("fs");
const path = require("path");
const ROOT = process.cwd();
const { STORES } = require("./data.js");

let fails = 0, checks = 0;
for (const s of STORES) {
  const html = fs.readFileSync(path.join(ROOT, "stores", s.slug, "index.html"), "utf8");
  const refs = [...html.matchAll(/src="([^"]+\.(?:jpg|webp|png|svg))"/g)].map((m) => m[1]);
  const imgRefs = refs.filter((r) => !r.startsWith("http"));
  for (const r of imgRefs) {
    checks++;
    const abs = path.join(ROOT, r.replace("../../", ""));
    if (!fs.existsSync(abs)) { fails++; console.log("مفقود:", s.slug, r); }
  }
  const fontOk = html.includes("fonts.googleapis.com/css2");
  const siteJs = html.includes("assets/site.js");
  const heroImg = html.includes("hero.");
  const prodCount = (html.match(/class="product tilt reveal"/g) || []).length;
  if (!fontOk) { fails++; console.log("بدون خط:", s.slug); }
  if (!siteJs) { fails++; console.log("بدون site.js:", s.slug); }
  if (!heroImg) { fails++; console.log("بدون صورة هيرو:", s.slug); }
  if (prodCount !== 4) { fails++; console.log("منتجات ناقصة:", s.slug, prodCount); }
  console.log(s.slug, "| منتجات:", prodCount, "| خط:", fontOk ? "v" : "x", "| js:", siteJs ? "v" : "x", "| هيرو:", heroImg ? "v" : "x");
}
const idx = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const idxImgs = [...idx.matchAll(/src="(assets\/img\/[^"]+)"/g)].map((m) => m[1]);
for (const r of idxImgs) { checks++; if (!fs.existsSync(path.join(ROOT, r))) { fails++; console.log("مفقود في index:", r); } }
console.log("---");
console.log("index صور:", idxImgs.length, "| فحوصات:", checks, "| أخطاء:", fails);
process.exit(fails ? 1 : 0);
