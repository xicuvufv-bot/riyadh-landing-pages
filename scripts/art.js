/* مكتبة الرسومات الاحترافية - SVG برمجي مع تلوين ديناميكي حسب ثيم الموقع */

const D = (uid) => `
<defs>
<linearGradient id="bg${uid}" x1="0" y1="0" x2="1" y2="1">
  <stop offset="0" stop-color="var(--p1)"/>
  <stop offset="1" stop-color="var(--p2)"/>
</linearGradient>
<radialGradient id="gl${uid}" cx="0.35" cy="0.28" r="0.85">
  <stop offset="0" stop-color="rgba(255,255,255,.18)"/>
  <stop offset="1" stop-color="rgba(255,255,255,0)"/>
</radialGradient>
</defs>`;

const BG = (uid) => `<rect width="400" height="300" fill="url(#bg${uid})"/><rect width="400" height="300" fill="url(#gl${uid})"/>`;

const ARTS = {
  abaya: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<path d="M175 38 Q200 12 225 38 L236 86 Q200 96 164 86 Z" fill="var(--deep)" stroke="var(--accent2)" stroke-width="2"/>
<path d="M160 92 L240 92 Q252 210 244 258 Q200 268 156 258 L160 92 Z" fill="var(--deep)"/>
<path d="M156 258 Q200 268 244 258 L243 264 Q200 274 157 264 Z" fill="var(--accent)"/>
<path d="M163 148 Q200 160 237 148 L238 170 Q200 182 162 170 Z" fill="var(--accent2)" opacity=".9"/>
<circle cx="200" cy="174" r="4" fill="var(--accent)"/>
<path d="M162 232 Q200 246 238 232" fill="none" stroke="var(--accent2)" stroke-width="2" stroke-dasharray="6 6"/>
<path d="M180 96 L186 254" stroke="var(--accent2)" stroke-width="1.5" opacity=".55"/>
<path d="M220 96 L214 254" stroke="var(--accent2)" stroke-width="1.5" opacity=".55"/>
</svg>`,
  scarf: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<path d="M80 70 Q200 40 320 70 L300 200 Q200 235 100 200 Z" fill="var(--accent)" opacity=".85"/>
<path d="M120 82 Q200 62 280 82 L268 190 Q200 214 132 190 Z" fill="var(--light)" opacity=".92"/>
<path d="M132 190 Q200 214 268 190 L266 205 Q200 230 134 205 Z" fill="var(--accent2)"/>
<path d="M150 140 L250 140 M150 160 L250 160 M155 180 L245 180" stroke="var(--accent)" stroke-width="3" stroke-linecap="round" opacity=".5"/>
<path d="M120 92 Q110 190 100 200 M280 92 Q290 190 300 200" fill="none" stroke="var(--accent2)" stroke-width="3"/>
<circle cx="92" cy="208" r="8" fill="var(--accent2)"/>
<circle cx="308" cy="208" r="8" fill="var(--accent2)"/>
</svg>`,
  bag: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<path d="M120 120 L280 120 L296 270 Q200 284 104 270 Z" fill="var(--deep)"/>
<path d="M120 120 L280 120 L285 130 L115 130 Z" fill="var(--accent2)" opacity=".85"/>
<path d="M104 270 Q200 284 296 270 L296 262 Q200 276 104 262 Z" fill="var(--accent)"/>
<path d="M150 120 Q150 70 200 70 Q250 70 250 120" fill="none" stroke="var(--accent2)" stroke-width="5" stroke-linecap="round"/>
<circle cx="200" cy="180" r="22" fill="var(--accent2)"/>
<circle cx="200" cy="180" r="13" fill="var(--deep)"/>
<path d="M132 210 L268 210" stroke="var(--accent2)" stroke-width="1.5" opacity=".5" stroke-dasharray="5 6"/>
</svg>`,
  giftbox: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<path d="M120 250 L120 145 L280 145 L280 250 Z" fill="var(--deep)"/>
<path d="M280 145 L325 115 L325 225 L280 250 Z" fill="var(--accent)"/>
<path d="M110 115 L290 115 L295 148 L115 148 Z" fill="var(--accent2)" opacity=".9"/>
<path d="M290 115 L325 115 L325 118 L290 118 Z" fill="var(--accent2)" opacity=".6"/>
<path d="M185 115 L185 250 M215 115 L215 250" stroke="var(--accent2)" stroke-width="16"/>
<path d="M200 110 Q175 62 200 52 Q225 62 200 110 Z" fill="var(--accent2)"/>
<path d="M200 62 L230 38 M200 62 L170 38" stroke="var(--accent2)" stroke-width="10" stroke-linecap="round"/>
<path d="M150 175 h18 M150 190 h12" stroke="var(--light)" stroke-width="3" stroke-linecap="round" opacity=".5"/>
</svg>`,
  cookies: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<ellipse cx="200" cy="240" rx="150" ry="26" fill="rgba(0,0,0,.25)"/>
<circle cx="130" cy="160" r="52" fill="var(--accent2)" stroke="var(--deep)" stroke-width="4"/>
<circle cx="225" cy="130" r="60" fill="var(--accent2)" stroke="var(--deep)" stroke-width="4"/>
<circle cx="285" cy="185" r="46" fill="var(--accent2)" stroke="var(--deep)" stroke-width="4"/>
<circle cx="118" cy="148" r="9" fill="var(--deep)"/><circle cx="150" cy="178" r="9" fill="var(--deep)"/><circle cx="136" cy="196" r="7" fill="var(--deep)"/>
<circle cx="210" cy="118" r="9" fill="var(--deep)"/><circle cx="248" cy="132" r="9" fill="var(--deep)"/><circle cx="222" cy="158" r="7" fill="var(--deep)"/><circle cx="258" cy="106" r="7" fill="var(--deep)"/>
<circle cx="268" cy="176" r="8" fill="var(--deep)"/><circle cx="298" cy="194" r="8" fill="var(--deep)"/>
</svg>`,
  rose: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<path d="M200 175 Q196 240 200 285" stroke="#16a34a" stroke-width="7" stroke-linecap="round" fill="none"/>
<path d="M198 250 Q168 236 152 250 Q168 268 196 252 Z" fill="#16a34a"/>
<path d="M202 230 Q234 216 248 228 Q232 246 204 234 Z" fill="#15803d"/>
<circle cx="200" cy="130" r="66" fill="var(--accent)"/>
<circle cx="200" cy="130" r="48" fill="var(--accent2)"/>
<path d="M200 130 m0 -34 a34 34 0 1 1 -24 59" fill="none" stroke="var(--deep)" stroke-width="7" stroke-linecap="round" opacity=".7"/>
<path d="M146 96 Q200 60 254 96" fill="none" stroke="var(--accent)" stroke-width="10" stroke-linecap="round" opacity=".6"/>
<path d="M160 80 Q162 44 200 46 Q238 44 240 80" fill="none" stroke="var(--accent2)" stroke-width="5" opacity=".8"/>
</svg>`,
  flower: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<path d="M200 150 Q196 210 200 265" stroke="#16a34a" stroke-width="6" fill="none" stroke-linecap="round"/>
<path d="M199 215 Q174 204 160 216 Q176 232 197 218 Z" fill="#16a34a"/>
<path d="M201 195 Q228 184 242 194 Q226 210 203 198 Z" fill="#15803d"/>
<g transform="translate(200 105)">
<path d="M0 -46 C18 -34 18 -8 0 8 C-18 -8 -18 -34 0 -46 Z" fill="var(--accent)"/>
<path d="M0 -46 C18 -34 18 -8 0 8 C-18 -8 -18 -34 0 -46 Z" fill="var(--accent2)" transform="rotate(72)"/>
<path d="M0 -46 C18 -34 18 -8 0 8 C-18 -8 -18 -34 0 -46 Z" fill="var(--accent)" transform="rotate(144)"/>
<path d="M0 -46 C18 -34 18 -8 0 8 C-18 -8 -18 -34 0 -46 Z" fill="var(--accent2)" transform="rotate(216)"/>
<path d="M0 -46 C18 -34 18 -8 0 8 C-18 -8 -18 -34 0 -46 Z" fill="var(--accent)" transform="rotate(288)"/>
<circle cx="0" cy="0" r="16" fill="var(--accent2)"/><circle cx="0" cy="0" r="7" fill="var(--deep)"/>
</g>
</svg>`,
  bouquet: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<path d="M200 70 L115 252 L285 252 Z" fill="var(--light)" opacity=".9"/>
<path d="M200 70 L122 244 M200 70 L278 244" stroke="var(--accent)" stroke-width="3" opacity=".5"/>
<circle cx="200" cy="70" r="30" fill="var(--accent)"/>
<circle cx="200" cy="70" r="18" fill="var(--accent2)"/>
<circle cx="150" cy="110" r="26" fill="var(--accent2)"/>
<circle cx="150" cy="110" r="15" fill="var(--accent)"/>
<circle cx="252" cy="106" r="28" fill="var(--accent)"/>
<circle cx="252" cy="106" r="17" fill="var(--accent2)"/>
<circle cx="205" cy="130" r="22" fill="var(--accent2)"/>
<circle cx="178" cy="160" r="20" fill="var(--accent)"/>
<circle cx="228" cy="156" r="21" fill="var(--accent2)"/>
<g fill="#16a34a"><circle cx="128" cy="168" r="9"/><circle cx="272" cy="166" r="9"/><circle cx="238" cy="200" r="8"/><circle cx="162" cy="202" r="8"/></g>
<path d="M130 252 L160 204 M270 252 L240 204" stroke="#16a34a" stroke-width="5" stroke-linecap="round"/>
</svg>`,
  oudbox: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<path d="M120 140 L280 140 L300 255 Q200 268 100 255 Z" fill="var(--deep)"/>
<path d="M120 140 L280 140 L290 128 Q200 116 110 128 Z" fill="var(--accent2)" opacity=".9"/>
<path d="M100 255 Q200 268 300 255 L296 262 Q200 275 104 262 Z" fill="var(--accent)"/>
<rect x="182" y="168" width="36" height="52" rx="6" fill="var(--accent2)"/>
<path d="M200 168 L200 220" stroke="var(--deep)" stroke-width="3"/>
<path d="M170 250 q30 -18 60 0" stroke="var(--accent2)" stroke-width="3" opacity=".7"/>
<path d="M148 96 Q190 66 232 96 M238 70 Q200 40 162 70" fill="none" stroke="var(--light)" stroke-width="4" stroke-linecap="round" opacity=".5"/>
</svg>`,
  incense: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<path d="M145 210 L255 210 L240 150 Q200 138 160 150 Z" fill="var(--deep)"/>
<path d="M160 150 Q200 138 240 150 L244 128 Q200 114 156 128 Z" fill="var(--accent2)" opacity=".9"/>
<circle cx="200" cy="146" r="12" fill="var(--accent)" opacity=".95"/>
<path d="M145 210 L255 210 L258 222 Q200 234 142 222 Z" fill="var(--accent)"/>
<path d="M168 138 L232 138" stroke="var(--accent2)" stroke-width="4" stroke-linecap="round" opacity=".6"/>
<path d="M205 120 Q225 96 210 74 Q232 58 226 38" fill="none" stroke="var(--light)" stroke-width="5" stroke-linecap="round" opacity=".4"/>
<path d="M188 118 Q172 92 186 70 Q166 58 172 40" fill="none" stroke="var(--light)" stroke-width="4" stroke-linecap="round" opacity=".3"/>
</svg>`,
  perfume: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<ellipse cx="200" cy="262" rx="70" ry="12" fill="rgba(0,0,0,.3)"/>
<rect x="150" y="92" width="100" height="150" rx="20" fill="rgba(255,255,255,.14)" stroke="var(--light)" stroke-width="2" opacity=".95"/>
<rect x="158" y="160" width="84" height="74" rx="12" fill="var(--accent)" opacity=".65"/>
<path d="M150 110 L250 110 L250 124 L150 124 Z" fill="var(--accent2)"/>
<rect x="188" y="44" width="24" height="52" fill="var(--accent2)"/>
<rect x="176" y="36" width="48" height="14" rx="7" fill="var(--accent)"/>
<rect x="172" y="132" width="56" height="20" rx="6" fill="rgba(255,255,255,.75)"/>
<path d="M190 172 q10 -14 20 0 M190 200 q10 -14 20 0" fill="none" stroke="var(--light)" stroke-width="3" opacity=".7"/>
</svg>`,
  spray: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<rect x="168" y="70" width="64" height="64" rx="14" fill="var(--deep)"/>
<rect x="150" y="120" width="100" height="120" rx="24" fill="var(--accent)" opacity=".9"/>
<rect x="160" y="136" width="80" height="92" rx="16" fill="var(--accent2)" opacity=".85"/>
<rect x="176" y="40" width="48" height="12" rx="6" fill="var(--accent2)"/>
<path d="M224 86 L258 70 L258 82 L232 94 Z" fill="var(--accent2)"/>
<g fill="var(--light)" opacity=".75"><circle cx="290" cy="90" r="5"/><circle cx="312" cy="104" r="4"/><circle cx="300" cy="70" r="3"/><circle cx="328" cy="88" r="3"/><circle cx="284" cy="120" r="3"/></g>
<path d="M180 196 q8 -10 16 0 q8 10 16 0" fill="none" stroke="var(--light)" stroke-width="3" opacity=".6"/>
</svg>`,
  atom: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<circle cx="200" cy="150" r="34" fill="var(--accent2)"/>
<circle cx="200" cy="150" r="18" fill="var(--accent)"/>
<g stroke="var(--light)" stroke-width="4" fill="none" opacity=".85">
<ellipse cx="200" cy="150" rx="120" ry="44"/>
<ellipse cx="200" cy="150" rx="120" ry="44" transform="rotate(60 200 150)"/>
<ellipse cx="200" cy="150" rx="120" ry="44" transform="rotate(-60 200 150)"/>
</g>
<circle cx="316" cy="124" r="10" fill="var(--accent2)"/>
<circle cx="88" cy="176" r="10" fill="var(--accent)"/>
<circle cx="252" cy="52" r="9" fill="var(--accent2)"/>
<path d="M200 150 L320 136" stroke="var(--accent2)" stroke-width="3" opacity=".5"/>
</svg>`,
  spa: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<ellipse cx="160" cy="240" rx="88" ry="30" fill="var(--deep)"/>
<ellipse cx="160" cy="226" rx="88" ry="30" fill="var(--accent)" opacity=".9"/>
<ellipse cx="160" cy="226" rx="52" ry="17" fill="var(--light)" opacity=".35"/>
<ellipse cx="262" cy="238" rx="52" ry="18" fill="var(--deep)"/>
<ellipse cx="262" cy="228" rx="52" ry="18" fill="var(--accent)" opacity=".75"/>
<rect x="272" y="70" width="46" height="120" rx="20" fill="var(--deep)"/>
<path d="M278 70 q18 -16 36 0" fill="none" stroke="var(--accent2)" stroke-width="7" stroke-linecap="round"/>
<path d="M295 40 q-7 -14 3 -18" fill="none" stroke="var(--accent2)" stroke-width="7" stroke-linecap="round"/>
<circle cx="295" cy="66" r="10" fill="var(--accent2)"/>
<path d="M312 84 q20 14 8 30 q-12 16 -2 34" fill="none" stroke="var(--light)" stroke-width="5" stroke-linecap="round" opacity=".5"/>
<path d="M110 84 q-16 18 -4 34" fill="none" stroke="var(--light)" stroke-width="4" stroke-linecap="round" opacity=".4"/>
</svg>`,
  candle: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<ellipse cx="200" cy="252" rx="120" ry="22" fill="rgba(0,0,0,.28)"/>
<rect x="150" y="140" width="100" height="100" rx="14" fill="var(--deep)"/>
<rect x="160" y="150" width="80" height="80" rx="10" fill="var(--accent)" opacity=".5"/>
<path d="M200 30 Q192 64 200 140 Q208 64 200 30 Z" fill="var(--accent2)"/>
<path d="M200 46 Q196 74 200 118 Q204 74 200 46 Z" fill="#fff8e1" opacity=".9"/>
<ellipse cx="200" cy="252" rx="90" ry="16" fill="var(--light)" opacity=".5"/>
<path d="M120 180 q-22 14 -6 30 q-14 14 -2 30 M288 170 q18 16 4 30 q12 16 -2 34" fill="none" stroke="var(--light)" stroke-width="4" stroke-linecap="round" opacity=".4"/>
</svg>`,
  mirror: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<ellipse cx="170" cy="140" rx="95" ry="95" fill="var(--accent2)" stroke="var(--deep)" stroke-width="12"/>
<ellipse cx="170" cy="140" rx="80" ry="80" fill="rgba(255,255,255,.22)"/>
<path d="M205 90 Q240 110 235 150" stroke="var(--light)" stroke-width="6" fill="none" stroke-linecap="round" opacity=".6"/>
<path d="M150 232 L150 260 L190 260 L190 232" fill="none" stroke="var(--accent2)" stroke-width="8"/>
<rect x="292" y="120" width="58" height="18" rx="9" fill="var(--deep)" transform="rotate(14 320 129)"/>
<rect x="288" y="92" width="24" height="30" rx="5" fill="var(--accent)" transform="rotate(14 300 107)"/>
<path d="M298 130 l16 24" stroke="var(--accent2)" stroke-width="10" stroke-linecap="round"/>
<circle cx="320" cy="60" r="5" fill="var(--light)" opacity=".8"/><circle cx="350" cy="90" r="4" fill="var(--light)" opacity=".6"/>
</svg>`,
  lipstick: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<ellipse cx="200" cy="255" rx="90" ry="16" fill="rgba(0,0,0,.28)"/>
<rect x="160" y="150" width="80" height="86" rx="12" fill="var(--deep)"/>
<rect x="172" y="162" width="56" height="64" rx="8" fill="var(--accent)"/>
<rect x="160" y="230" width="80" height="18" rx="8" fill="var(--accent2)"/>
<path d="M160 150 L240 150 L244 128 Q200 112 156 128 Z" fill="var(--accent2)"/>
<path d="M184 132 Q200 122 216 132 L212 148 L188 148 Z" fill="var(--accent)"/>
<path d="M168 132 Q158 118 168 104" stroke="var(--accent2)" stroke-width="6" stroke-linecap="round" opacity=".7"/>
<path d="M200 168 v44 M184 176 v30 M216 176 v30" stroke="var(--light)" stroke-width="3" opacity=".5"/>
</svg>`,
  cake: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<ellipse cx="200" cy="252" rx="150" ry="24" fill="rgba(0,0,0,.28)"/>
<path d="M80 160 h240 l12 84 Q200 258 68 244 Z" fill="var(--deep)"/>
<path d="M104 160 h192 l8 30 Q200 202 96 190 Z" fill="var(--accent2)" opacity=".9"/>
<path d="M96 190 l208 0 q10 44 -10 60 Q200 286 92 248 Z" fill="var(--accent)"/>
<path d="M120 190 q14 -20 30 0 q14 20 30 0 q14 -20 30 0 q14 20 30 0 q14 -20 30 0 q14 20 28 0" fill="none" stroke="var(--light)" stroke-width="5" stroke-linecap="round"/>
<rect x="188" y="70" width="24" height="34" rx="4" fill="var(--light)" opacity=".9"/>
<path d="M200 44 q-6 -12 2 -16 q8 4 2 16" fill="var(--accent2)"/>
<circle cx="200" cy="40" r="5" fill="var(--accent2)"/>
<circle cx="146" cy="130" r="7" fill="var(--accent2)"/><circle cx="254" cy="130" r="7" fill="var(--accent2)"/>
</svg>`,
  cupcake: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<ellipse cx="200" cy="252" rx="140" ry="22" fill="rgba(0,0,0,.28)"/>
<path d="M138 250 L162 150 L238 150 L262 250 Z" fill="var(--deep)"/>
<path d="M162 150 L238 150 L232 172 L168 172 Z" fill="var(--accent)" opacity=".6"/>
<path d="M200 100 q-80 34 -74 84 q74 30 148 0 q6 -50 -74 -84 Z" fill="var(--accent2)"/>
<path d="M200 108 q-52 30 -52 70 M200 130 q-40 24 -40 56 M200 152 q-24 18 -24 44" fill="none" stroke="var(--deep)" stroke-width="6" stroke-linecap="round" opacity=".5"/>
<circle cx="200" cy="84" r="14" fill="var(--accent)"/>
<path d="M200 70 q-4 -10 4 -14 q8 4 4 14" fill="var(--light)"/>
<path d="M150 120 q16 -14 34 -4" stroke="var(--light)" stroke-width="4" stroke-linecap="round" opacity=".6"/>
</svg>`,
  baklava: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<ellipse cx="200" cy="248" rx="150" ry="24" fill="rgba(0,0,0,.28)"/>
<ellipse cx="200" cy="238" rx="138" ry="20" fill="var(--light)" opacity=".9"/>
<g fill="var(--accent2)" stroke="var(--deep)" stroke-width="3">
<path d="M120 170 l40 -70 l40 70 l-40 70 Z"/>
<path d="M180 150 l40 -70 l40 70 l-40 70 Z"/>
<path d="M240 130 l40 -70 l40 70 l-40 70 Z"/>
</g>
<g fill="var(--deep)"><circle cx="120" cy="170" r="4"/><circle cx="160" cy="170" r="4"/><circle cx="180" cy="150" r="4"/><circle cx="220" cy="150" r="4"/><circle cx="240" cy="130" r="4"/><circle cx="280" cy="130" r="4"/></g>
<path d="M140 196 q60 26 120 0 M200 216 q50 20 100 0" stroke="var(--accent)" stroke-width="4" fill="none" opacity=".6"/>
</svg>`,
  laundry: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<path d="M110 150 L130 262 L270 262 L290 150 Q200 130 110 150 Z" fill="var(--deep)"/>
<path d="M112 196 L122 200 L278 186 L288 190" fill="none" stroke="var(--accent2)" stroke-width="3" opacity=".6"/>
<path d="M116 224 L124 227 L276 214 L284 217" fill="none" stroke="var(--accent2)" stroke-width="3" opacity=".4"/>
<rect x="150" y="84" width="60" height="66" rx="10" fill="var(--accent)" transform="rotate(-8 180 117)"/>
<rect x="216" y="74" width="56" height="62" rx="10" fill="var(--accent2)" opacity=".9" transform="rotate(6 244 105)"/>
<circle cx="120" cy="120" r="14" fill="rgba(255,255,255,.25)"/>
<circle cx="300" cy="106" r="10" fill="rgba(255,255,255,.2)"/>
<circle cx="288" cy="140" r="7" fill="rgba(255,255,255,.18)"/>
</svg>`,
  shirt: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<path d="M110 90 Q130 76 152 84 L186 108 Q200 116 214 108 L248 84 Q270 76 290 90 L262 262 L138 262 Z" fill="var(--light)" opacity=".95"/>
<path d="M152 84 L186 108 L200 116 L214 108 L248 84 L214 128 L186 128 Z" fill="var(--deep)"/>
<path d="M110 90 L138 262 L138 120 Z" fill="var(--accent)"/>
<path d="M290 90 L262 262 L262 120 Z" fill="var(--accent2)"/>
<circle cx="186" cy="112" r="3.5" fill="var(--accent2)"/><circle cx="214" cy="112" r="3.5" fill="var(--accent2)"/>
<path d="M138 150 h124 M138 190 h124 M138 230 h124" stroke="var(--accent2)" stroke-width="3" opacity=".55"/>
<path d="M110 88 Q130 70 152 80" fill="none" stroke="var(--accent2)" stroke-width="4" stroke-linecap="round"/>
</svg>`,
  iron: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<ellipse cx="200" cy="248" rx="120" ry="20" fill="rgba(0,0,0,.28)"/>
<path d="M150 190 Q120 150 160 130 L310 130 Q330 132 324 152 L300 200 Q240 218 150 190 Z" fill="var(--accent)"/>
<path d="M180 140 L300 140 L290 180 Q240 194 176 176 Z" fill="var(--accent2)" opacity=".85"/>
<path d="M290 112 L310 92 L318 100 L300 122 Z" fill="var(--deep)"/>
<path d="M285 118 L280 74" stroke="var(--deep)" stroke-width="10" stroke-linecap="round"/>
<path d="M298 90 q26 8 26 30" fill="none" stroke="var(--light)" stroke-width="5" stroke-linecap="round" opacity=".6"/>
<path d="M150 190 q-40 8 -52 32" fill="none" stroke="var(--light)" stroke-width="4" stroke-linecap="round" opacity=".45"/>
</svg>`,
  needle: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<path d="M120 60 Q200 120 130 210 Q180 250 220 220 Q280 160 250 90 L180 60 Z" fill="var(--accent)" opacity=".85"/>
<path d="M120 60 Q200 120 130 210" fill="none" stroke="var(--accent2)" stroke-width="3" opacity=".7"/>
<path d="M70 240 Q170 200 250 240" fill="none" stroke="var(--light)" stroke-width="5" stroke-linecap="round" opacity=".8"/>
<circle cx="286" cy="120" r="26" fill="var(--accent2)" stroke="var(--deep)" stroke-width="4"/>
<circle cx="286" cy="120" r="10" fill="var(--deep)"/>
<path d="M276 120 L256 120 M296 120 L312 120" stroke="var(--light)" stroke-width="4" stroke-linecap="round" opacity=".6"/>
<path d="M140 150 l40 -10" stroke="var(--light)" stroke-width="3" opacity=".5"/>
</svg>`,
  thobe: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<path d="M170 40 L230 40 L242 252 Q200 264 158 252 Z" fill="var(--light)" opacity=".95"/>
<path d="M170 40 L200 62 L230 40 L226 60 Q200 74 174 60 Z" fill="var(--deep)"/>
<path d="M196 46 L204 46 L204 52 L200 56 L196 52 Z" fill="var(--accent2)"/>
<path d="M158 252 Q200 264 242 252 L241 258 Q200 270 159 258 Z" fill="var(--accent)"/>
<path d="M176 84 L224 84" stroke="var(--accent2)" stroke-width="3"/>
<path d="M184 92 L216 92 M188 100 L212 100" stroke="var(--accent2)" stroke-width="2" opacity=".6"/>
<path d="M188 120 L212 120 L212 128 L188 128 Z" fill="var(--accent2)" opacity=".8"/>
<path d="M170 236 L230 236" stroke="var(--accent2)" stroke-width="2" stroke-dasharray="5 5" opacity=".7"/>
</svg>`,
  shawarma: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<ellipse cx="200" cy="252" rx="130" ry="20" fill="rgba(0,0,0,.28)"/>
<path d="M120 252 L150 96 L250 96 L280 252 Q200 268 120 252 Z" fill="var(--accent2)" opacity=".92"/>
<path d="M120 252 Q200 268 280 252 L280 246 Q200 262 120 246 Z" fill="var(--accent)"/>
<path d="M150 96 L250 96 L244 130 L156 130 Z" fill="var(--deep)"/>
<path d="M160 130 q10 22 20 0 q10 22 20 0 q10 22 20 0 q10 22 20 0" fill="none" stroke="var(--light)" stroke-width="5" stroke-linecap="round" opacity=".85"/>
<path d="M156 130 Q200 150 244 130 L244 140 Q200 160 156 140 Z" fill="var(--accent2)"/>
<path d="M156 96 Q160 70 182 74 Q200 78 204 60 Q214 50 228 60" fill="none" stroke="var(--light)" stroke-width="5" stroke-linecap="round" opacity=".5"/>
<path d="M300 140 q18 14 4 30" fill="none" stroke="var(--light)" stroke-width="4" stroke-linecap="round" opacity=".4"/>
</svg>`,
  plate: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<ellipse cx="200" cy="236" rx="140" ry="42" fill="var(--deep)"/>
<ellipse cx="200" cy="226" rx="140" ry="42" fill="var(--light)" opacity=".95"/>
<ellipse cx="200" cy="226" rx="104" ry="28" fill="var(--p1)" opacity=".5"/>
<g stroke="var(--deep)" stroke-width="10" stroke-linecap="round">
<path d="M140 226 L140 150"/><path d="M200 226 L200 140"/><path d="M260 226 L260 150"/>
</g>
<g fill="var(--accent)">
<circle cx="140" cy="150" r="17"/><circle cx="140" cy="182" r="17"/><circle cx="140" cy="214" r="17"/>
<circle cx="200" cy="140" r="17"/><circle cx="200" cy="172" r="17"/><circle cx="200" cy="204" r="17"/>
<circle cx="260" cy="150" r="17"/><circle cx="260" cy="182" r="17"/><circle cx="260" cy="214" r="17"/>
</g>
<g fill="var(--accent2)"><circle cx="140" cy="150" r="6"/><circle cx="200" cy="140" r="6"/><circle cx="260" cy="150" r="6"/></g>
<path d="M120 96 q-20 12 -6 26 M292 90 q16 14 4 28" fill="none" stroke="var(--light)" stroke-width="4" stroke-linecap="round" opacity=".45"/>
</svg>`,
  coffee: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<path d="M100 130 L104 190 Q140 208 176 190 L180 130 Z" fill="var(--deep)"/>
<path d="M180 130 L104 190" fill="none" stroke="var(--accent2)" stroke-width="6"/>
<path d="M100 130 L104 190" fill="none" stroke="var(--accent2)" stroke-width="6"/>
<path d="M176 190 L184 246 Q140 262 96 246 L104 190 Z" fill="var(--deep)"/>
<path d="M140 58 L128 128 Q140 136 152 128 L140 58 Z" fill="var(--accent2)"/>
<path d="M140 40 L140 58" stroke="var(--accent2)" stroke-width="6"/>
<path d="M112 176 L168 176 L164 190 L116 190 Z" fill="var(--accent)" opacity=".8"/>
<path d="M108 128 q-14 -20 2 -30 q18 -12 28 6" fill="none" stroke="var(--light)" stroke-width="5" stroke-linecap="round" opacity=".5"/>
<path d="M240 160 h60 q18 0 14 18 l-12 34 q-4 10 -16 10 h-46 Z" fill="var(--light)" opacity=".95"/>
<path d="M240 178 h58 M244 196 h52" stroke="var(--accent2)" stroke-width="4" opacity=".6"/>
</svg>`,
  dates: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<path d="M105 130 Q200 100 295 130 L310 250 Q200 268 90 250 Z" fill="var(--deep)"/>
<path d="M105 130 Q200 100 295 130 L300 150 Q200 122 100 150 Z" fill="var(--accent2)"/>
<g>
<ellipse cx="150" cy="190" rx="40" ry="24" fill="#7c3f12" transform="rotate(-18 150 190)"/>
<ellipse cx="208" cy="175" rx="42" ry="25" fill="#8a4518" transform="rotate(6 208 175)"/>
<ellipse cx="258" cy="196" rx="38" ry="22" fill="#7c3f12" transform="rotate(20 258 196)"/>
<ellipse cx="182" cy="222" rx="40" ry="23" fill="#8a4518" transform="rotate(-6 182 222)"/>
<ellipse cx="240" cy="224" rx="36" ry="21" fill="#7c3f12" transform="rotate(10 240 224)"/>
</g>
<g stroke="var(--accent2)" stroke-width="3" opacity=".85">
<path d="M138 180 L152 184 M196 166 L212 170 M246 188 L262 192 M172 214 L188 218 M232 216 L248 220"/>
</g>
<path d="M70 120 Q100 70 140 96" fill="none" stroke="#16a34a" stroke-width="6" stroke-linecap="round"/>
<path d="M330 118 Q296 72 258 96" fill="none" stroke="#16a34a" stroke-width="6" stroke-linecap="round"/>
<circle cx="90" cy="160" r="5" fill="var(--accent2)"/><circle cx="312" cy="158" r="5" fill="var(--accent2)"/>
</svg>`,
  honey: (u) => `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${D(u)}${BG(u)}
<rect x="150" y="86" width="100" height="150" rx="24" fill="rgba(255,255,255,.14)" stroke="var(--light)" stroke-width="2.5"/>
<rect x="160" y="118" width="80" height="104" rx="16" fill="var(--accent2)" opacity=".95"/>
<rect x="138" y="76" width="124" height="20" rx="8" fill="var(--accent)"/>
<path d="M196 54 L212 78 M204 54 L220 78" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
<path d="M196 96 L196 190 M208 96 L208 190" stroke="rgba(120,53,15,.5)" stroke-width="2" opacity=".5"/>
<g fill="var(--accent)">
<path d="M90 180 q10 26 4 40 q-14 8 -22 -8 q-4 -18 4 -34 z"/>
<path d="M310 200 q10 24 4 38 q-14 8 -22 -8 q-4 -18 4 -32 z"/>
</g>
<path d="M92 218 q8 10 2 18" fill="none" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
</svg>`
};

module.exports = { ARTS };
