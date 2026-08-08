const fs = require("fs");
const path = require("path");
const { STORES } = require("./data.js");
const { ARTS } = require("./art.js");

const ROOT = path.join(__dirname, "..");
const BASE = "https://xicuvufv-bot.github.io/riyadh-landing-pages";

const FONTS = {
  "noor-abayas": "Cairo",
  "lamsa-gifts": "Tajawal",
  "layla-oud": "El Messiri",
  "aileen-flowers": "Alexandria",
  "qimat-alikhlas-spa": "Almarai",
  "aalam-banat": "Reem Kufi",
  "bayt-alhalwiyat": "Markazi Text",
  "othman-laundry": "Mada",
  "nasser-tailoring": "Noto Kufi Arabic",
  "mama-noura-rawdah": "Amiri",
  "perfume-technology": "IBM Plex Sans Arabic",
  "fahad-oud": "Rubik",
  "granada-roses": "Changa",
  "suwaidi-laundry": "Lateef",
  "othman-dates": "Vazirmatn",
};

const imgOf = (slug) => {
  const dir = path.join(ROOT, "assets", "img", slug);
  try {
    return fs.readdirSync(dir).reduce((m, f) => {
      const base = f.replace(/\.[^.]+$/, "");
      m[base] = `../../assets/img/${slug}/${f}`;
      return m;
    }, {});
  } catch {
    return {};
  }
};

const phoneDisplay = (p) => {
  if (!p) return "05X XXX XXXX";
  return `+${p.slice(0, 3)} ${p.slice(3, 5)} ${p.slice(5, 8)} ${p.slice(8)}`;
};
const waLink = (p) => (p ? `https://wa.me/${p}` : "https://wa.me/9665XXXXXXXX");

let uid = 0;
const art = (key) => ARTS[key] ? ARTS[key](`a${++uid}`) : ARTS.giftbox(`a${++uid}`);

const head = (s, font) => `
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${s.name} | الرياض</title>
<meta name="description" content="${s.desc}">
<link rel="icon" type="image/svg+xml" href="../../assets/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=${font.replace(/ /g, "+")}:wght@400;500;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../../assets/style.css">
<style>:root{--accent:${s.accent};--accent2:${s.accent2};--deep:${s.deep};--soft:${s.soft};--light:${s.light};--p1:${s.p1};--p2:${s.p2};--font:'${font}','Noto Kufi Arabic',sans-serif;}</style>
</head>`;

const cubes = `
<div class="cube-scene c1"><div class="cube"><div class="f1"></div><div class="f2"></div><div class="f3"></div><div class="f4"></div><div class="f5"></div><div class="f6"></div></div></div>
<div class="cube-scene c2"><div class="cube"><div class="f1"></div><div class="f2"></div><div class="f3"></div><div class="f4"></div><div class="f5"></div><div class="f6"></div></div></div>
<div class="cube-scene c3"><div class="cube"><div class="f1"></div><div class="f2"></div><div class="f3"></div><div class="f4"></div><div class="f5"></div><div class="f6"></div></div></div>`;

const chips = (s) => `
<div class="chip c1"><b>&#9733;</b>${s.stats[0][0]} ${s.stats[0][1]}</div>
<div class="chip c2"><b>&#10003;</b>${s.stats[1][0]} ${s.stats[1][1]}</div>`;

const heroImg = (s, img, frame) => `
<div class="hero-img">
  <div class="blob"></div>
  <div class="frame"><img src="${img}" alt="${s.name}" loading="eager"></div>
  ${chips(s)}
</div>`;

const heroSplit = (s, img) => `
<div class="hero split">
  ${cubes}
  <div class="container hero-grid">
    <div class="hero-text">
      <span class="badge ${s.badge}">${s.cat}</span>
      <h1>${s.name}<br><span class="grad">${s.tagline}</span></h1>
      <p class="lead">${s.desc}</p>
      <div class="btn-row">
        <a class="btn" href="${waLink(s.phone)}">اطلب عبر الواتساب</a>
        <a class="btn ghost" href="#products">اكتشف منتجاتنا</a>
      </div>
    </div>
    ${heroImg(s, img)}
  </div>
</div>`;

const heroCenter = (s, img) => `
<div class="hero center">
  ${cubes}
  <div class="container">
    <span class="badge ${s.badge}">${s.cat}</span>
    <h1>${s.name}<br><span class="grad">${s.tagline}</span></h1>
    <p class="lead">${s.desc}</p>
    <div class="btn-row">
      <a class="btn" href="${waLink(s.phone)}">اطلب عبر الواتساب</a>
      <a class="btn ghost" href="#products">اكتشف منتجاتنا</a>
    </div>
    ${heroImg(s, img)}
  </div>
</div>`;

const heroArtbg = (s, img) => `
<div class="hero artbg">
  <div class="bg-img"><img src="${img}" alt="${s.name}" loading="eager"></div>
  <div class="container">
    <span class="badge ${s.badge}">${s.cat}</span>
    <h1>${s.name}<br><span class="grad">${s.tagline}</span></h1>
    <p class="lead">${s.desc}</p>
    <div class="btn-row">
      <a class="btn" href="${waLink(s.phone)}">اطلب عبر الواتساب</a>
      <a class="btn ghost" href="#products">اكتشف منتجاتنا</a>
    </div>
  </div>
</div>`;

const heroStack = (s, img) => `
<div class="hero stack">
  ${cubes}
  <div class="container">
    <span class="badge ${s.badge}">${s.cat}</span>
    <h1>${s.name}<br><span class="grad">${s.tagline}</span></h1>
    <p class="lead">${s.desc}</p>
    <div class="btn-row">
      <a class="btn" href="${waLink(s.phone)}">اطلب عبر الواتساب</a>
      <a class="btn ghost" href="#products">اكتشف منتجاتنا</a>
    </div>
    ${heroImg(s, img)}
  </div>
</div>`;

const heroOf = { split: heroSplit, center: heroCenter, artbg: heroArtbg, stack: heroStack };

const cardClasses = ["", "square", "outline", "line-right"];

const servicesSec = (s) => `
<section id="services">
  <div class="container">
    <div class="shead reveal">
      <span class="kick">خدماتنا</span>
      <h2>كل ما تحتاجه في مكان واحد</h2>
      <p>${s.cat} بأعلى معايير الجودة والاحترافية</p>
    </div>
    <div class="grid">
      ${s.services.map((sv, i) => `
      <div class="tilt-wrap reveal"><div class="card ${cardClasses[i % 4]} tilt">
        <span class="icon">&#9670;</span>
        <h3>${sv.t}</h3>
        <p>${sv.d}</p>
      </div></div>`).join("")}
    </div>
  </div>
</section>`;

const productsSec = (s, imgs) => `
<section id="products" style="background:linear-gradient(180deg, var(--bg), var(--panel));">
  <div class="container">
    <div class="shead reveal">
      <span class="kick">منتجاتنا</span>
      <h2>تشكيلة مختارة بعناية</h2>
      <p>صور حقيقية من متجرنا</p>
    </div>
    <div class="products">
      ${s.products.map((p, i) => {
        const src = imgs[`p${i + 1}`];
        return `
      <div class="product tilt reveal">
        <div class="art">
          ${src ? `<img src="${src}" alt="${p.t}" loading="lazy">` : art(p.a)}
          <span class="shine"></span>
        </div>
        <h3>${p.t}</h3>
        <p>${p.d}</p>
      </div>`;
      }).join("")}
    </div>
  </div>
</section>`;

const whySec = (s) => `
<section>
  <div class="container two-col">
    <div class="why reveal">
      <div class="shead">
        <span class="kick">ليش نحن؟</span>
        <h2>أسباب تجعلنا خيارك الأول</h2>
      </div>
      <ul>
        ${s.why.map((w) => `<li>${w}</li>`).join("")}
      </ul>
    </div>
    <div class="stats reveal">
      ${s.stats.map(([b, t]) => `
      <div class="stat"><div class="big">${b}</div><p>${t}</p></div>`).join("")}
    </div>
  </div>
</section>`;

const stepsSec = (s) => `
<section>
  <div class="container">
    <div class="shead reveal" style="text-align:center">
      <span class="kick" style="justify-content:center">كيف تطلب؟</span>
      <h2>ثلاث خطوات وطلبك جاهز</h2>
    </div>
    <div class="steps">
      ${[
        ["1", "راسلنا واتساب", "حدد اللي تبغاه أو أرسل صورة طلبك"],
        ["2", "أكد طلبك", "نؤكد لك الطلب والسعر والوقت فوراً"],
        ["3", "يصلك طلبك", "استلم طلبك في أسرع وقت ممكن"],
      ].map(([n, t, d]) => `
      <div class="step reveal"><div class="num">${n}</div><h3>${t}</h3><p>${d}</p></div>`).join("")}
    </div>
  </div>
</section>`;

const ctaSec = (s) => `
<section id="contact">
  <div class="container">
    <div class="cta reveal">
      <h2>جاهز تطلب؟</h2>
      <p>راسلنا الآن على الواتساب - رد سريع وخدمة ما بعد الطلب متكاملة.</p>
      <div class="phone">${phoneDisplay(s.phone)}</div>
      <div class="btn-row">
        <a class="btn" href="${waLink(s.phone)}">اطلب عبر الواتساب</a>
      </div>
      <p style="margin-top:16px;color:var(--muted)">الموقع: ${s.address}</p>
    </div>
  </div>
</section>`;

const marquee = (s) => `
<div class="marquee">
  <div class="marquee-track">
    ${Array(2).fill(s.marquee.map((m) => `<span><b>&#10022;</b>${m}</span>`).join("")).join("")}
  </div>
</div>`;

const page = (s, imgs, font) => `<!DOCTYPE html>
<html lang="ar" dir="rtl">
${head(s, font)}
<body>
<div class="topbar">
  <div class="container">
    <div class="brand"><span class="dot"></span>${s.brand}</div>
    <nav class="nav-links">
      <a href="#services">خدماتنا</a>
      <a href="#products">منتجاتنا</a>
      <a href="#contact">تواصل معنا</a>
    </nav>
  </div>
</div>

${heroOf[s.hero](s, imgs.hero || imgs.p1 || "")}
${marquee(s)}
${servicesSec(s)}
${productsSec(s, imgs)}
${whySec(s)}
${stepsSec(s)}
${ctaSec(s)}

<a class="wa-float" href="${waLink(s.phone)}" aria-label="واتساب">&#9993;</a>
<footer><b>${s.name}</b> &mdash; الرياض</footer>
<script src="../../assets/site.js" defer></script>
</body>
</html>`;

/* ============ index ============ */
const indexPage = (card) => `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>مواقع محلات الرياض | دليل الصفحات التعريفية</title>
<meta name="description" content="مجموعة صفحات تعريفية احترافية لمحلات ومتاجر الرياض. كل محل له صفحة مميزة بذر طلب مباشر عبر الواتساب.">
<link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/style.css">
<style>:root{--accent:#0f766e;--accent2:#f59e0b;--font:'Cairo','Noto Kufi Arabic',sans-serif;}</style>
</head>
<body>
<div class="topbar">
  <div class="container">
    <div class="brand"><span class="dot"></span>محلات الرياض</div>
    <nav class="nav-links">
      <a href="#stores">المحلات</a>
      <a href="#contact">تواصل معنا</a>
    </nav>
  </div>
</div>

<div class="hero center">
  <div class="cube-scene c1"><div class="cube"><div class="f1"></div><div class="f2"></div><div class="f3"></div><div class="f4"></div><div class="f5"></div><div class="f6"></div></div></div>
  <div class="container">
    <span class="badge pill2">15 صفحة تعريفية</span>
    <h1>مواقع محلات الرياض<br><span class="grad">كل محل له واجهته الإلكترونية</span></h1>
    <p class="lead">صفحات تعريفية احترافية لمحلات الرياض الصغيرة والمتوسطة. كل صفحة بتصميم فريد تعرض خدمات المحل ومنتجاته بصور حقيقية مع زر طلب مباشر عبر الواتساب.</p>
  </div>
</div>

<div class="marquee">
  <div class="marquee-track">
    ${Array(2).fill(`<span><b>&#10022;</b>تصميم فريد لكل محل</span><span><b>&#10022;</b>صور حقيقية من المتاجر</span><span><b>&#10022;</b>زر طلب واتساب مباشر</span><span><b>&#10022;</b>يعمل على جميع الأجهزة</span>`).join("")}
  </div>
</div>

<section id="stores">
  <div class="container">
    <div class="shead reveal">
      <span class="kick">المحلات</span>
      <h2>اضغط على أي محل لعرض صفحته</h2>
      <p>كل بطاقة تعرض المحل، مجاله، ورقم واتسابه</p>
    </div>
    <div class="grid">
      ${card}
    </div>
  </div>
</section>

<section id="contact">
  <div class="container">
    <div class="cta reveal">
      <h2>عندك محل في الرياض؟</h2>
      <p>لو عندك نشاط تجاري ومحتاج صفحة تعريفية احترافية برابط خاص وزر طلب واتساب مباشر، نسويها لك بسرعة.</p>
      <div class="btn-row">
        <a class="btn" href="https://wa.me/9665XXXXXXXX">اطلب صفحتك</a>
      </div>
    </div>
  </div>
</section>

<footer>محلات الرياض &mdash; صفحات تعريفية احترافية</footer>
<script src="assets/site.js" defer></script>
</body>
</html>`;

/* ============ write ============ */
const indexCards = [];
for (const s of STORES) {
  const dir = path.join(ROOT, "stores", s.slug);
  fs.mkdirSync(dir, { recursive: true });
  const imgs = imgOf(s.slug);
  fs.writeFileSync(path.join(dir, "index.html"), page(s, imgs, FONTS[s.slug] || "Cairo"), "utf8");
  const hero = imgs.hero || imgs.p1;
  indexCards.push(`
      <div class="tilt-wrap reveal">
        <a class="card tilt" href="stores/${s.slug}/index.html" style="display:block;overflow:hidden;padding:0">
          <div class="art" style="aspect-ratio:16/10;border-radius:0;background:var(--panel)">
            ${hero ? `<img src="assets/img/${s.slug}/${path.basename(hero)}" alt="${s.brand}" style="width:100%;height:100%;object-fit:cover;transition:transform .6s" loading="lazy">` : ""}
          </div>
          <div style="padding:18px 20px 22px">
            <h3>${s.brand}</h3>
            <p>${s.cat}${s.phone ? " - " + phoneDisplay(s.phone) : ""}</p>
          </div>
        </a>
      </div>`);
  console.log("كتبت:", s.slug);
}
fs.writeFileSync(path.join(ROOT, "index.html"), indexPage(indexCards.join("")), "utf8");
console.log("كتبت index.html");
console.log("تم توليد", STORES.length, "صفحة");
