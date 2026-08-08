const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const IMG = path.join(ROOT, "assets", "img");

const REFILLS = {
  "noor-abayas": { names: ["p2"], terms: ["abaya woman", "black abaya women", "hijab dress"], bad: ["portrait", "girl", "jewelry", "gold", "sukh", "lake", "river"] },
};

const API = "https://commons.wikimedia.org/w/api.php";
const UA = { "User-Agent": "RiyadhStorePages/1.0 (https://github.com/xicuvufv-bot/riyadh-landing-pages; contact: xicuvufv@gmail.com)" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function search(term, bad, limit = 30) {
  const url = `${API}?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(
    "filetype:bitmap " + term
  )}&gsrnamespace=6&gsrlimit=${limit}&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=1400`;
  for (let i = 0; i < 3; i++) {
    try {
      const res = await fetch(url, { headers: UA, signal: AbortSignal.timeout(20000) });
      if (res.status === 429) throw new Error("HTTP 429");
      const j = await res.json();
      const pages = j.query && j.query.pages ? Object.values(j.query.pages) : [];
      const out = [];
      for (const p of pages) {
        const ii = p.imageinfo && p.imageinfo[0];
        if (!ii || !ii.thumburl || !ii.mime) continue;
        if (ii.mime !== "image/jpeg") continue;
        if (!ii.width || ii.width < 900) continue;
        const title = p.title.toLowerCase();
        if (/logo|icon|map |flag|diagram|coat|emblem|seal|stamp|chart|screenshot|drawing|painting|sketch|illustration/.test(title)) continue;
        if (bad.some((b) => title.includes(b))) continue;
        let score = 0;
        if (ii.width >= 1400) score += 50;
        score += Math.min(ii.width, 2400) / 100;
        out.push({ title: p.title, url: ii.thumburl, w: ii.width, h: ii.height || 0, score });
      }
      out.sort((a, b) => b.score - a.score);
      return out;
    } catch (e) {
      if (i === 2) throw e;
      await sleep(3000 * (i + 1));
    }
  }
}

async function download(url, dest) {
  for (let i = 0; i < 4; i++) {
    try {
      const res = await fetch(url, { headers: UA, signal: AbortSignal.timeout(30000) });
      if (res.status === 429) throw new Error("HTTP 429");
      if (!res.ok) throw new Error("HTTP " + res.status);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 15000) throw new Error("too small " + buf.length);
      fs.writeFileSync(dest, buf);
      return buf.length;
    } catch (e) {
      if (i === 3) throw e;
      await sleep(3500 * (i + 1));
    }
  }
}

(async () => {
  const report = [];
  for (const [slug, cfg] of Object.entries(REFILLS)) {
    const dir = path.join(IMG, slug);
    fs.mkdirSync(dir, { recursive: true });
    const all = [];
    for (const t of cfg.terms) {
      try {
        all.push(...(await search(t, cfg.bad)));
        await sleep(800);
      } catch (e) {
        console.log(`بحث فشل ${slug}/${t}: ${e.message}`);
      }
    }
    const seen = new Set();
    const uniq = all.filter((x) => !seen.has(x.title) && seen.add(x.title));
    const files = [];
    for (const name of cfg.names) {
      const hero = name === "hero";
      const pick = hero ? uniq.find((x) => x.h && x.w / x.h >= 1.25) || uniq[0] : uniq[0];
      if (!pick) {
        console.log(`لا نتائج ${slug}/${name}`);
        continue;
      }
      uniq.splice(uniq.indexOf(pick), 1);
      try {
        const bytes = await download(pick.url, path.join(dir, `${name}.jpg`));
        files.push({ name: `${name}.jpg`, bytes, title: pick.title });
        console.log(`✓ ${slug}/${name}.jpg <- ${pick.title}`);
      } catch (e) {
        console.log(`تحميل فشل ${slug}/${name}: ${e.message}`);
      }
      await sleep(900);
    }
    report.push({ slug, files });
  }
  fs.writeFileSync(path.join(__dirname, "img-report2.json"), JSON.stringify(report, null, 2));
  console.log("التقرير: scripts/img-report2.json");
})();
