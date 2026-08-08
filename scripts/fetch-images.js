const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const IMG = path.join(ROOT, "assets", "img");

const SITES = {
  "noor-abayas": { terms: ["abaya", "hijab fashion women"], n: 5 },
  "lamsa-gifts": { terms: ["gift box", "luxury gift basket"], n: 5 },
  "layla-oud": { terms: ["oud perfume", "bakhoor incense", "incense burner"], n: 5 },
  "aileen-flowers": { terms: ["flower bouquet", "florist flowers shop"], n: 5 },
  "qimat-alikhlas-spa": { terms: ["spa massage", "spa candles stones"], n: 5 },
  "aalam-banat": { terms: ["modest fashion women", "abaya"], n: 5 },
  "bayt-alhalwiyat": { terms: ["baklava", "kunafa arabic sweets", "arabic sweets"], n: 5 },
  "othman-laundry": { terms: ["laundry clothes", "ironing shirts"], n: 5 },
  "nasser-tailoring": { terms: ["tailor sewing suit", "sewing machine tailor", "men suit fashion"], n: 5 },
  "mama-noura-rawdah": { terms: ["kabsa rice arabic food", "arabic food grills", "middle eastern food"], n: 5 },
  "perfume-technology": { terms: ["perfume bottle", "perfume bottle luxury"], n: 5 },
  "fahad-oud": { terms: ["oud perfume attar", "perfume bottle dark", "amber perfume"], n: 5 },
  "granada-roses": { terms: ["red roses", "rose bouquet"], n: 5 },
  "suwaidi-laundry": { terms: ["laundry", "washing machine laundry"], n: 5 },
  "othman-dates": { terms: ["dates fruit palm", "date fruit khalas"], n: 5 },
};

const BAD = /logo|icon|map|flag|diagram|coat|emblem|seal|stamp|chart|screenshot|pixel|drawing|painting|sketch|illustration|textbook|anatomy|botanical|herbarium|stamp_|symbol/i;
const API = "https://commons.wikimedia.org/w/api.php";
const UA = { "User-Agent": "RiyadhStorePages/1.0 (https://github.com/xicuvufv-bot/riyadh-landing-pages; contact: xicuvufv@gmail.com)" };

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function search(term, limit = 25) {
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
        if (!["image/jpeg", "image/webp", "image/png"].includes(ii.mime)) continue;
        if (!ii.width || ii.width < 700) continue;
        if (BAD.test(p.title)) continue;
        let score = 0;
        if (ii.mime === "image/jpeg") score += 100;
        if (ii.width >= 1200) score += 50;
        score += Math.min(ii.width, 2400) / 100;
        out.push({ title: p.title, url: ii.thumburl, w: ii.width, h: ii.height || 0, mime: ii.mime, score });
      }
      out.sort((a, b) => b.score - a.score);
      return out;
    } catch (e) {
      if (i === 2) throw e;
      await sleep(3000 * (i + 1));
    }
  }
}

const ext = (m) => (m === "image/webp" ? "webp" : m === "image/png" ? "png" : "jpg");

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
  for (const [slug, cfg] of Object.entries(SITES)) {
    const dir = path.join(IMG, slug);
    fs.mkdirSync(dir, { recursive: true });
    const all = [];
    for (const t of cfg.terms) {
      try {
        const r = await search(t);
        all.push(...r);
      } catch (e) {
        console.log(`بحث فشل ${slug}/${t}: ${e.message}`);
      }
    }
    const seen = new Set();
    const uniq = all.filter((x) => !seen.has(x.title) && seen.add(x.title));

    const hero = uniq.find((x) => x.h && x.w / x.h >= 1.25) || uniq[0];
    const rest = uniq.filter((x) => x !== hero);
    const picks = [hero, ...rest.slice(0, cfg.n - 1)].filter(Boolean);

    const files = [];
    for (let i = 0; i < picks.length; i++) {
      const name = i === 0 ? `hero.${ext(picks[i].mime)}` : `p${i}.${ext(picks[i].mime)}`;
      try {
        const bytes = await download(picks[i].url, path.join(dir, name));
        files.push({ name, bytes, title: picks[i].title });
        await sleep(900);
      } catch (e) {
        console.log(`تحميل فشل ${slug}/${name}: ${e.message}`);
        await sleep(900);
      }
    }
    report.push({ slug, files });
    console.log(`${slug}: ${files.length} صور (طلب ${cfg.n})`);
  }
  fs.writeFileSync(path.join(__dirname, "img-report.json"), JSON.stringify(report, null, 2));
  console.log("التقرير: scripts/img-report.json");
})();
