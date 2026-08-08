const fs = require("fs");
const path = require("path");
const { STORES } = require("./data.js");
const { ARTS } = require("./art.js");

const ROOT = path.join(__dirname, "..");
const BASE = "https://xicuvufv-bot.github.io/riyadh-landing-pages";

const phoneDisplay = (p) => {
  if (!p) return "05X XXX XXXX";
  return `+${p.slice(0, 3)} ${p.slice(3, 5)} ${p.slice(5, 8)} ${p.slice(8)}`;
};
const waLink = (p) => (p ? `https://wa.me/${p}` : "https://wa.me/9665XXXXXXXX");

let uid = 0;
const art = (key, t, extra = "") => {
  const svg = ARTS[key] ? ARTS[key](`a${++uid}`) : ARTS.giftbox(`a${++uid}`);
  return extra ? svg.replace("<svg ", `<svg ${extra} `) : svg;
};

const favicon = `<link rel="icon" type="image/svg+xml" href="../../assets/favicon.svg">`;

const cubes = `
<div class="cube-scene c1"><div class="cube"><div class="f1"></div><div class="f2"></div><div class="f3"></div><div class="f4"></div><div class="f5"></div><div class="f6"></div></div></div>
<div class="cube-scene c2"><div class="cube"><div class="f1"></div><div class="f2"></div><div class="f3"></div><div class="f4"></div><div class="f5"></div><div class="f6"></div></div></div>
<div class="cube-scene c3"><div class="cube"><div class="f1"></div><div class="f2"></div><div class="f3"></div><div class="f4"></div><div class="f5"></div><div class="f6"></div></div></div>`;

const heroSplit = (s) => `
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
    <div class="hero-art">
      <div class="art-float">${art(s.products[0].a, s)}</div>
    </div>
  </div>
</div>`;

const heroCenter = (s) => `
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
    <div class="art-row">
      <div class="art-float">${art(s.products[0].a, s)}</div>
      <div class="art-float" style="animation-delay:-3s">${art(s.products[1].a, s)}</div>
    </div>
  </div>
</div>`;

const heroArtbg = (s) => `
<div class="hero artbg">
  <div class="bg-svg">${art(s.products[0].a, s, 'preserveAspectRatio="xMidYMid slice"')}</div>
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

const heroStack = (s) => `
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
    <div class="art-row">
      <div class="art-float">${art(s.products[0].a, s)}</div>
    </div>
  </div>
</div>`;

const heroOf = { split: heroSplit, center: heroCenter, artbg: heroArtbg, stack: heroStack };

const cardClasses = ["", "square", "outline", "line-right"];

const servicesSec = (s) => `
<section id="services">
  <div class="container">
    <div class="shead">
      <span class="kick">خدماتنا</span>
      <h2>كل ما تحتاجه في مكان واحد</h2>
      <p>${s.cat} بأعلى معايير الجودة والاحترافية</p>
    </div>
    <div class="grid">
      ${s.services.map((sv, i) => `
      <div class="tilt-wrap"><div class="card ${cardClasses[i % 4]} tilt">
        <span class="icon">&#9670;</span>
        <h3>${sv.t}</h3>
        <p>${sv.d}</p>
      </div></div>`).join("")}
    </div>
  </div>
</section>`;

const productsSec = (s) => `
<section id="products" style="background:linear-gradient(180deg, var(--bg), var(--panel));">
  <div class="container">
    <div class="shead">
      <span class="kick">منتجاتنا</span>
      <h2>تشكيلة مختارة بعناية</h2>
      <p>معروضات حقيقية بجودة تلمسها بنفسك</p>
    </div>
    <div class="products">
      ${s.products.map((p) => `
      <div class="product">
        <div class="art"><div class="shine"></div>${art(p.a, s)}</div>
        <h3>${p.t}</h3>
        <p>${p.d}</p>
      </div>`).join("")}
    </div>
  </div>
</section>`;

const whySec = (s) => `
<section>
  <div class="container two-col">
    <div class="why">
      <div class="shead">
        <span class="kick">ليش نحن؟</span>
        <h2>أسباب تجعلنا خيارك الأول</h2>
      </div>
      <ul>
        ${s.why.map((w) => `<li>${w}</li>`).join("")}
      </ul>
    </div>
    <div class="stats">
      ${s.stats.map(([b, t]) => `
      <div class="stat"><div class="big">${b}</div><p>${t}</p></div>`).join("")}
    </div>
  </div>
</section>`;

const stepsSec = (s) => `
<section>
  <div class="container">
    <div class="shead" style="text-align:center">
      <span class="kick" style="justify-content:center">كيف تطلب؟</span>
      <h2>ثلاث خطوات وطلبك جاهز</h2>
    </div>
    <div class="steps">
      <div class="step"><div class="num">1</div><h3>راسلنا واتساب</h3><p>حدد اللي تبغاه أو أرسل صورة طلبك</p></div>
      <div class="step"><div class="num">2</div><h3>أكد طلبك</h3><p>نؤكد لك الطلب والسعر والوقت فوراً</p></div>
      <div class="step"><div class="num">3</div><h3>يصلك طلبك</h3><p>استلم طلبك في أسرع وقت ممكن</p></div>
    </div>
  </div>
</section>`;

const ctaSec = (s) => `
<section id="contact">
  <div class="container">
    <div class="cta">
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

const page = (s) => `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${s.name} | الرياض</title>
<meta name="description" content="${s.desc}">
${favicon}
<link rel="stylesheet" href="../../assets/style.css">
<style>:root{--accent:${s.accent};--accent2:${s.accent2};--deep:${s.deep};--soft:${s.soft};--light:${s.light};--p1:${s.p1};--p2:${s.p2};}</style>
</head>
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

${heroOf[s.hero](s)}
${marquee(s)}
${servicesSec(s)}
${productsSec(s)}
${whySec(s)}
${stepsSec(s)}
${ctaSec(s)}

<a class="wa-float" href="${waLink(s.phone)}" aria-label="واتساب">&#9993;</a>
<footer><b>${s.name}</b> &mdash; الرياض</footer>
</body>
</html>`;

/* ============ index ============ */
const indexPage = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>مواقع محلات الرياض | دليل الصفحات التعريفية</title>
<meta name="description" content="مجموعة صفحات تعريفية احترافية لمحلات ومتاجر الرياض. كل محل له صفحة مميزة بذر طلب مباشر عبر الواتساب.">
<link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
<link rel="stylesheet" href="assets/style.css">
<style>:root{--accent:#0f766e;--accent2:#f59e0b;}</style>
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
    <p class="lead">صفحات تعريفية احترافية لمحلات الرياض الصغيرة والمتوسطة. كل صفحة بتصميم فريد تعرض خدمات المحل ومنتجاته مع زر طلب مباشر عبر الواتساب.</p>
  </div>
</div>

<div class="marquee">
  <div class="marquee-track">
    ${Array(2).fill(`<span><b>&#10022;</b>تصميم فريد لكل محل</span><span><b>&#10022;</b>زر طلب واتساب مباشر</span><span><b>&#10022;</b>يعمل على جميع الأجهزة</span><span><b>&#10022;</b>تحسين لمحركات البحث</span>`).join("")}
  </div>
</div>

<section id="stores">
  <div class="container">
    <div class="shead">
      <span class="kick">المحلات</span>
      <h2>اضغط على أي محل لعرض صفحته</h2>
      <p>كل بطاقة تعرض المحل، مجاله، ورقم واتسابه</p>
    </div>
    <div class="grid">
      ${STORES.map((s) => `
      <div class="tilt-wrap">
        <a class="card tilt" href="stores/${s.slug}/index.html" style="display:block">
          <div class="art" style="margin:-26px -22px 18px;background:linear-gradient(160deg,${s.p1},${s.p2})">
            <svg viewBox="0 0 400 300" style="width:100%;height:auto" xmlns="http://www.w3.org/2000/svg">${(() => { const svg = art(s.products[0].a, s); return svg.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, ""); })()}</svg>
          </div>
          <span class="icon" style="color:${s.accent2}">&#9670;</span>
          <h3>${s.brand}</h3>
          <p>${s.cat}${s.phone ? " - " + phoneDisplay(s.phone) : ""}</p>
        </a>
      </div>`).join("")}
    </div>
  </div>
</section>

<section id="contact">
  <div class="container">
    <div class="cta">
      <h2>عندك محل في الرياض؟</h2>
      <p>لو عندك نشاط تجاري ومحتاج صفحة تعريفية احترافية برابط خاص وزر طلب واتساب مباشر، نسويها لك بسرعة.</p>
      <div class="btn-row">
        <a class="btn" href="https://wa.me/9665XXXXXXXX">اطلب صفحتك</a>
      </div>
    </div>
  </div>
</section>

<footer>محلات الرياض &mdash; صفحات تعريفية احترافية</footer>
</body>
</html>`;

/* ============ write ============ */
for (const s of STORES) {
  const dir = path.join(ROOT, "stores", s.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), page(s), "utf8");
  console.log("كتبت:", s.slug);
}
fs.writeFileSync(path.join(ROOT, "index.html"), indexPage, "utf8");
console.log("كتبت index.html");
console.log("تم توليد", STORES.length, "صفحة");
