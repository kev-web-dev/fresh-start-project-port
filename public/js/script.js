/* STREET FOODS – vanilla JS. Sections: 1 data, 2 helpers, 3 foods, 4 vendors, 5 locations+map, 6 favorites, 7 forms, 8 UI */
"use strict";
/* ===== 1. DATA (edit here to customize) ===== */
const CITY = "Bayawan City, Negros Oriental";
const TBC = "Information needs confirmation";
// p = estimated price range in PHP [low, high]. Illustrative only.
const FOODS = [
 {id:"isaw",n:"Isaw",c:"Grilled",p:[8,15],e:"🍢",d:"Chicken or pork intestines, cleaned, skewered and grilled with a sweet-savory glaze.",i:["Chicken or pork intestines","Soy sauce","Sugar","Garlic","Vinegar dip"],o:"A staple of Filipino barbecue stalls nationwide; recipes vary by region and vendor.",r:["barbecue","betamax","adidas"]},
 {id:"kwek-kwek",n:"Kwek-Kwek",c:"Fried",p:[10,20],e:"🥚",d:"Hard-boiled quail eggs coated in bright orange batter and deep-fried.",i:["Quail eggs","Flour","Annatto or food coloring","Cooking oil","Spiced vinegar"],o:"A popular street snack across the country, usually served with sweet or spiced vinegar sauce.",r:["fishballs","squidballs","dynamite"]},
 {id:"fishballs",n:"Fish Balls",c:"Fried",p:[1,5],e:"🍡",d:"Round fish paste balls fried until golden, eaten with sweet, spicy or vinegar sauce.",i:["Fish paste","Flour","Salt","Cooking oil","Dipping sauce"],o:"One of the most recognizable Filipino street snacks, sold from carts almost everywhere.",r:["squidballs","kwek-kwek"]},
 {id:"squidballs",n:"Squid Balls",c:"Fried",p:[1,5],e:"🦑",d:"Chewy, squid-flavored balls fried and served on sticks with dipping sauce.",i:["Squid or fish paste","Flour","Seasoning","Cooking oil"],o:"A cart-side companion to fish balls and kikiam.",r:["fishballs","kwek-kwek"]},
 {id:"betamax",n:"Betamax",c:"Grilled",p:[8,15],e:"🍢",d:"Cubes of congealed, seasoned chicken blood, grilled on skewers.",i:["Chicken blood","Salt","Soy sauce glaze"],o:"Nicknamed for its resemblance to a Betamax tape; common at barbecue stalls.",r:["isaw","adidas","barbecue"]},
 {id:"adidas",n:"Adidas",c:"Grilled",p:[10,20],e:"🍗",d:"Marinated chicken feet grilled over charcoal.",i:["Chicken feet","Soy sauce","Calamansi","Sugar","Garlic"],o:"Nicknamed after the three-stripe logo, a playful name for chicken feet.",r:["isaw","betamax","barbecue"]},
 {id:"banana-cue",n:"Banana Cue",c:"Sweet Snack",p:[10,20],e:"🍌",d:"Saba bananas deep-fried in caramelized brown sugar and served on a stick.",i:["Saba bananas","Brown sugar","Cooking oil"],o:"A beloved merienda (afternoon snack) found throughout the Philippines.",r:["camote-cue","turon"]},
 {id:"turon",n:"Turon",c:"Sweet Snack",p:[10,25],e:"🌯",d:"Saba banana (often with jackfruit) wrapped in lumpia wrapper, fried and caramelized.",i:["Saba bananas","Jackfruit (optional)","Lumpia wrapper","Brown sugar"],o:"A classic Filipino merienda sold from stalls and markets.",r:["banana-cue","camote-cue"]},
 {id:"halo-halo",n:"Halo-Halo",c:"Cold Treat",p:[35,120],e:"🍧",d:"Shaved ice with sweet beans, fruits, jellies, milk and often leche flan or ice cream.",i:["Shaved ice","Evaporated milk","Sweet beans","Nata de coco","Leche flan","Ube"],o:"Its name means “mix-mix”; a favorite Filipino summer dessert.",r:["sorbetes","taho"]},
 {id:"taho",n:"Taho",c:"Drink / Dessert",p:[10,25],e:"🥛",d:"Warm silken tofu with arnibal (brown sugar syrup) and sago pearls, often sold by walking vendors.",i:["Silken tofu","Arnibal syrup","Sago pearls"],o:"Traditionally sold in the morning by vendors calling “Tahooo!”.",r:["halo-halo","sorbetes"]},
 {id:"sorbetes",n:"Sorbetes",c:"Cold Treat",p:[10,30],e:"🍦",d:"Local “dirty ice cream” sold from colorful carts, scooped into cones or bread buns.",i:["Coconut milk","Sugar","Flavors such as ube, cheese or mango"],o:"A nostalgic street treat sold from push carts.",r:["halo-halo","taho"]},
 {id:"lumpiang-togue",n:"Lumpiang Togue",c:"Fried",p:[5,15],e:"🥢",d:"Crispy spring rolls filled with mung bean sprouts and vegetables.",i:["Mung bean sprouts","Vegetables","Lumpia wrapper","Cooking oil","Vinegar dip"],o:"An affordable, vegetable-forward street snack.",r:["kwek-kwek","dynamite"]},
 {id:"barbecue",n:"Barbecue",c:"Grilled",p:[15,40],e:"🍢",d:"Marinated pork skewers grilled over charcoal and brushed with sweet-savory sauce.",i:["Pork","Soy sauce","Banana ketchup","Sugar","Garlic","Calamansi"],o:"Filipino-style barbecue is a street food staple, often paired with rice.",r:["isaw","adidas","betamax"]},
 {id:"dynamite",n:"Dynamite",c:"Fried",p:[15,35],e:"🌶️",d:"Long green chili stuffed with cheese and meat, wrapped and fried; mild to spicy.",i:["Long green chili","Cheese","Ground meat","Spring roll wrapper"],o:"A spicy, crunchy snack also known as “Dynamite Lumpia”.",r:["lumpiang-togue","kwek-kwek"]},
 {id:"camote-cue",n:"Camote Cue",c:"Sweet Snack",p:[8,15],e:"🍠",d:"Sweet potato slices fried in caramelized brown sugar and skewered.",i:["Sweet potato (camote)","Brown sugar","Cooking oil"],o:"The sweet-potato cousin of banana cue.",r:["banana-cue","turon"]}
];
const FOOD_IMG = {"adidas": "/__l5e/assets-v1/8b9f9fd3-5538-436e-a7c9-240f2bb758a3/adidas.jpg", "barbecue": "/__l5e/assets-v1/56a1c0c6-fba3-4b6d-8e41-64fe5c33bd7f/barbecue.jpg", "betamax": "/__l5e/assets-v1/f53a7bde-6117-4085-87e1-f2257c86d218/betamax.jpg", "camote-cue": "/__l5e/assets-v1/425f4cc8-c40e-48e6-ab1a-b41855e663e0/camote-cue.jpg", "dynamite": "/__l5e/assets-v1/265b3f96-bf31-42aa-81f3-5b9e57fb0288/dynamite.jpg", "halo-halo": "/__l5e/assets-v1/dd48c0db-6d74-4e79-886f-2d09bc7e1f95/halo-halo.jpg", "lumpiang-togue": "/__l5e/assets-v1/7b31e82d-53d0-4b9f-a00c-ce857f0f285f/lumpiang-togue.jpg", "sorbetes": "/__l5e/assets-v1/b06864d6-745d-4f28-a534-5915516b743d/sorbetes.jpg", "taho": "/__l5e/assets-v1/46780d5d-ab86-4267-8695-8c00c41d3e0f/taho.jpg", "isaw": "/__l5e/assets-v1/6b577ec1-a652-4efe-b803-bcc6b824d9f0/isaw.jpg"};
const LOC_IMG = {"boulevard": "/__l5e/assets-v1/e9210863-f48b-4a29-945c-f78b6f287f94/boulevard.jpg", "galz": "/__l5e/assets-v1/b8884282-3f02-42a5-98e8-19744d2f1297/galz.jpg", "hayahay": "/__l5e/assets-v1/b64eba45-660e-4ddd-8781-a112bcdd21d0/hayahay.jpg", "market": "/__l5e/assets-v1/d5466625-de25-46a5-9a97-901a3ce9ce17/market.jpg", "paonay": "/__l5e/assets-v1/b16742c3-f47c-4e24-b343-1860c96ef47d/paonay.jpg"};
const IMG = id => FOOD_IMG[id] || `/assets/images/${id}.jpg`;
// Demonstration vendors. Generic, clearly fake, never presented as real or verified.
const VENDORS = [
 {id:"s1",n:"Sample Vendor A (Demo)",loc:"Bayawan City",b:TBC,cat:"Grilled",prod:"Isaw, barbecue",desc:"Demonstration profile showing how a grilled-food vendor listing looks.",img:"isaw",sample:1},
 {id:"s2",n:"Sample Vendor B (Demo)",loc:"Bayawan City",b:TBC,cat:"Fried",prod:"Fish balls, kwek-kwek",desc:"Demonstration profile showing how a fried-snack vendor listing looks.",img:"fishballs",sample:1},
 {id:"s3",n:"Sample Vendor C (Demo)",loc:"Bayawan City",b:TBC,cat:"Sweet Snack",prod:"Banana cue, turon",desc:"Demonstration profile showing how a sweet-snack vendor listing looks.",img:"turon",sample:1}
];
// category is a browsing aid; confirm before treating as fact. No coordinates are stored for these.
const LOCS = [
 {id:"hayahay",n:"Hayahay Square",cat:"Food Parks",area:"Bayawan City Boulevard",addr:"",q:"Hayahay Square, Bayawan City, Negros Oriental",d:"Candidate food destination near the boulevard area."},
 {id:"market",n:"Bayawan City Public Market",cat:"Public Market",area:"Ramon Magsaysay Street",addr:"Ramon Magsaysay Street, Bayawan City",q:"Bayawan City Public Market, Ramon Magsaysay Street, Bayawan City, Negros Oriental",d:"The city's public market, a place to look for local food and snacks."},
 {id:"boulevard",n:"Bayawan City Boulevard",cat:"Food Stalls",area:"Bayawan City Boulevard",addr:"",q:"Bayawan City Boulevard, Bayawan City, Negros Oriental",d:"Seaside food destination popular for strolling and snacking."},
 {id:"paonay",n:"New Paonay Market",cat:"Public Market",area:"New Paonay",addr:"",q:"New Paonay Market, Bayawan City, Negros Oriental",d:"Market destination in Bayawan City."},
 {id:"galz",n:"Gal'z Lechon",cat:"BBQ and Grilled Food",area:"Suba",addr:"Suba area, Bayawan City",q:"Gal'z Lechon, Suba, Bayawan City, Negros Oriental",d:"Lechon (roast pig) destination in the Suba area."}
];
const LOC_CATS = ["Public Market","Food Stalls","Night Market","BBQ and Grilled Food","Local Food Shops","Food Parks"];
const LS = {fav:"sf.favs.v1",vend:"sf.vendors.v1",theme:"sf.theme.v1"};

/* ===== 2. HELPERS ===== */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const load = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch { return d; } };
const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch { return false; } };
const peso = p => p[0] === p[1] ? `₱${p[0]}` : `₱${p[0]}–${p[1]}`;
const ph = e => "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFC857"/><stop offset="1" stop-color="#F97316"/></linearGradient></defs><rect width="400" height="300" fill="url(#g)"/><text x="200" y="175" font-size="110" text-anchor="middle">${e}</text></svg>`);
const img = (src, alt, e = "🍢", eager) => `<img src="${esc(src)}" alt="${esc(alt)}" data-e="${e}" ${eager ? "" : 'loading="lazy"'} width="400" height="300">`;
document.addEventListener("error", ev => { const t = ev.target; if (t.tagName === "IMG" && !t.dataset.f) { t.dataset.f = 1; t.src = ph(t.dataset.e || "🍢"); } }, true); // missing images -> branded placeholder
function toast(msg) { const t = document.createElement("div"); t.className = "toast"; t.textContent = msg; $("#toasts").append(t); setTimeout(() => t.remove(), 3200); }
const mapsEmbed = q => "https://www.google.com/maps?q=" + encodeURIComponent(q) + "&output=embed";
const mapsLink = q => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
const safeUrl = u => { try { const x = new URL(u); return x.protocol === "https:" && /(^|\.)(google\.[a-z.]+|goo\.gl)$/i.test(x.hostname) ? x.href : ""; } catch { return ""; } };
function skeleton(el, n = 6) { el.innerHTML = '<div class="skel"></div>'.repeat(n); } // loading state
const opts = (el, first, vals) => { el.innerHTML = `<option value="">${first}</option>` + vals.map(v => `<option>${esc(v)}</option>`).join(""); };

/* ===== 6. FAVORITES (state first: used by cards) ===== */
let favs = load(LS.fav, []);
const isFav = id => favs.includes(id);
function toggleFav(id) {
  favs = isFav(id) ? favs.filter(x => x !== id) : [...favs, id];
  save(LS.fav, favs);
  toast(isFav(id) ? "Added to favorites ❤️" : "Removed from favorites");
  $$(`[data-fav="${id}"]`).forEach(syncFavBtn); renderFavs(); $("#favCount").textContent = $("#favCount2").textContent = favs.length;
}
function syncFavBtn(b) { const on = isFav(b.dataset.fav); b.setAttribute("aria-pressed", on); b.textContent = on ? "♥ Favorited" : "♡ Favorite"; }
const favBtn = id => `<button class="btn ghost fav" data-fav="${id}" aria-pressed="${isFav(id)}">${isFav(id) ? "♥ Favorited" : "♡ Favorite"}</button>`;
function renderFavs() {
  const list = FOODS.filter(f => isFav(f.id));
  $("#favGrid").innerHTML = list.length ? list.map(foodCard).join("") : '<p class="empty">No favorites yet. Tap ♡ on any food to save it here.</p>';
  revealAll();
}

/* ===== 3. FOODS ===== */
const foodCard = f => `<article class="glass card reveal"><div class="ph">${img(IMG(f.id), f.n + " – Filipino street food", f.e)}</div><div class="body"><span class="tag">${esc(f.c)}</span><h3>${esc(f.n)}</h3><p>${esc(f.d)}</p><span class="price">${peso(f.p)} <small>(est.)</small></span><div class="row"><button class="btn" data-food="${f.id}">View Details</button>${favBtn(f.id)}</div></div></article>`;
function renderFoods() {
  const q = $("#fQ").value.trim().toLowerCase(), cat = $("#fCat").value, pr = $("#fPrice").value, so = $("#fSort").value;
  let list = FOODS.filter(f => (!q || (f.n + " " + f.d).toLowerCase().includes(q)) && (!cat || f.c === cat) &&
    (!pr || (pr === "u20" ? f.p[1] < 20 : pr === "o50" ? f.p[0] > 50 : f.p[1] >= 20 && f.p[0] <= 50)));
  const sorts = {az:(a,b)=>a.n.localeCompare(b.n),za:(a,b)=>b.n.localeCompare(a.n),lo:(a,b)=>a.p[0]-b.p[0],hi:(a,b)=>b.p[1]-a.p[1]};
  if (sorts[so]) list.sort(sorts[so]);
  $("#fCount").textContent = `${list.length} of ${FOODS.length} foods`;
  $("#foodGrid").innerHTML = list.length ? list.map(foodCard).join("") : '<p class="empty">No foods match your search. Try different words or clear the filters.</p>';
  revealAll();
}
function foodModal(id) {
  const f = FOODS.find(x => x.id === id); if (!f) return;
  openModal(`<div class="m-grid">${img(IMG(f.id), f.n + " – Filipino street food", f.e, 1)}<div><span class="tag">${esc(f.c)}</span><h3 id="mTitle">${esc(f.n)}</h3><p>${esc(f.d)}</p>
  <p><b>Ingredients:</b> ${f.i.map(esc).join(", ")}</p><p><b>Estimated price:</b> <span class="price">${peso(f.p)}</span> <small>(illustrative, not a verified vendor price)</small></p><p><b>Background:</b> ${esc(f.o)}</p>
  <p><b>Related foods:</b> ${f.r.map(r => { const x = FOODS.find(z => z.id === r); return x ? `<button class="tag" data-food="${x.id}">${esc(x.n)}</button>` : ""; }).join(" ")}</p>${favBtn(f.id)}</div></div>`);
}

/* ===== 4. VENDORS ===== */
const allVendors = () => VENDORS.concat(load(LS.vend, []).map(v => ({id:v.id, n:v.business, loc:v.barangay, b:v.barangay, cat:"Registered locally", prod:v.products, desc:v.desc || "No description provided.", img:"hero-street-food", reg:v})));
function vendorCard(v) {
  const tag = v.sample ? '<span class="tag warn">Sample</span>' : '<span class="tag warn">Unverified</span>';
  return `<article class="glass card reveal"><div class="ph">${img(IMG(v.img), "Illustration for " + v.n, "🛒")}</div><div class="body">${tag} <span class="tag">${esc(v.cat)}</span><h3>${esc(v.n)}</h3><p><b>Products:</b> ${esc(v.prod)}</p><p>${esc(v.loc)}</p><div class="row"><button class="btn" data-vendor="${v.id}">View Details</button><a class="btn ghost" target="_blank" rel="noopener noreferrer" href="${vendorMap(v)}">Google Maps</a></div></div></article>`;
}
const vendorMap = v => (v.reg && safeUrl(v.reg.maps)) || mapsLink(v.reg ? [v.reg.address, v.reg.barangay, CITY].join(", ") : CITY);
function renderVendors() {
  const q = $("#vQ").value.trim().toLowerCase(), loc = $("#vLoc").value, cat = $("#vCat").value, all = allVendors();
  const list = all.filter(v => (!q || (v.n + " " + v.prod).toLowerCase().includes(q)) && (!loc || v.loc === loc) && (!cat || v.cat === cat || (v.prod || "").toLowerCase().includes(cat.toLowerCase())));
  $("#vendorGrid").innerHTML = list.length ? list.map(vendorCard).join("") : '<p class="empty">No vendors match. Try clearing the filters or register your stall below.</p>';
  revealAll();
}
function refreshVendorFilters() {
  const all = allVendors(), keepL = $("#vLoc").value;
  opts($("#vLoc"), "All locations", [...new Set(all.map(v => v.loc))].sort()); $("#vLoc").value = keepL;
  opts($("#vCat"), "All categories", [...new Set(FOODS.map(f => f.c))]);
}
function vendorModal(id) {
  const v = allVendors().find(x => x.id === id); if (!v) return; const r = v.reg;
  openModal(`<div class="m-grid">${img(IMG(v.img), "Illustration for " + v.n, "🛒", 1)}<div><span class="tag warn">${v.sample ? "Sample – not a real business" : "Unverified local registration"}</span><h3 id="mTitle">${esc(v.n)}</h3><p>${esc(v.desc)}</p>
  <p><b>Products:</b> ${esc(v.prod)}</p><p><b>Barangay / location:</b> ${esc(v.loc)}</p><p><b>Address:</b> ${esc(r ? r.address : TBC)}</p><p><b>Contact:</b> ${esc(r ? r.phone + " · " + r.email : TBC)}</p><p><b>Operating hours:</b> ${esc(r && r.hours ? r.hours + " (not verified)" : TBC)}</p>
  <a class="btn" target="_blank" rel="noopener noreferrer" href="${vendorMap(v)}">View on Google Maps</a></div></div>`);
}

/* ===== 5. LOCATIONS + MAP ===== */
let selLoc = null;
function locCard(l) {
  return `<article class="glass card reveal"><div class="ph">${img(LOC_IMG[l.id] || "/assets/locations/" + l.id + ".jpg", l.n + " (illustrative image)", "📍")}</div><div class="body"><span class="tag">${esc(l.cat)}</span> <span class="tag warn">Needs confirmation</span><h3>${esc(l.n)}</h3><p>${esc(l.d)}</p><p><b>Area:</b> ${esc(l.area)}</p><p><b>Address:</b> ${esc(l.addr || TBC)}</p><p><b>Food categories:</b> ${TBC}</p><p><b>Hours:</b> ${TBC}</p><div class="row"><button class="btn" data-loc="${l.id}">Show on map</button><a class="btn ghost" target="_blank" rel="noopener noreferrer" href="${mapsLink(l.q)}">Google Maps</a></div></div></article>`;
}
function showLoc(id) {
  const l = LOCS.find(x => x.id === id); if (!l) return; selLoc = l;
  $("#map").src = mapsEmbed(l.q); $("#mapTitle").textContent = l.n; $("#mapOpen").href = mapsLink(l.q);
}
function renderLocs() {
  const q = $("#lQ").value.trim().toLowerCase(), cat = $("#lCat").value, area = $("#lArea").value;
  const list = LOCS.filter(l => (!q || (l.n + " " + l.area).toLowerCase().includes(q)) && (!cat || l.cat === cat) && (!area || l.area === area));
  $("#locGrid").innerHTML = list.length ? list.map(locCard).join("") : `<p class="empty">No confirmed destinations${cat ? " in “" + esc(cat) + "”" : ""} yet. Use “Search on Google Maps” to look around.</p>`;
  $("#lSearchLink").href = mapsLink((q || cat || "street food") + " " + CITY);
  revealAll();
}
function geolocate() {
  const m = $("#geoMsg");
  if (!navigator.geolocation) { m.textContent = "Geolocation is not supported by this browser."; return; }
  m.textContent = "Waiting for your permission…";
  navigator.geolocation.getCurrentPosition(p => {
    const la = p.coords.latitude.toFixed(5), lo = p.coords.longitude.toFixed(5);
    $("#map").src = `https://www.google.com/maps?q=${encodeURIComponent("street food near " + la + "," + lo)}&ll=${la},${lo}&z=15&output=embed`;
    $("#mapTitle").textContent = "Street food near you"; $("#mapOpen").href = `https://www.google.com/maps/search/street+food/@${la},${lo},15z`;
    m.textContent = "Showing street food near your location. Your location is not stored or sent anywhere by this site."; toast("Location found 📍");
  }, e => { m.textContent = e.code === 1 ? "Location permission denied. You can still browse destinations above." : "Could not get your location. Please try again."; }, {timeout: 10000});
}

/* ===== 7. FORMS ===== */
const PHONE = /^(\+63|0)9\d{9}$|^(\+63|0)\d{8,10}$/, EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function validate(form, extra) {
  let ok = true;
  $$(".err", form).forEach(e => e.remove());
  $$("input,textarea", form).forEach(f => {
    let msg = "";
    const v = f.value.trim();
    if (f.required && !v) msg = "This field is required.";
    else if (f.type === "email" && v && !EMAIL.test(v)) msg = "Enter a valid email address.";
    else if (f.name === "phone" && v && !PHONE.test(v.replace(/[\s-]/g, ""))) msg = "Enter a valid PH number, e.g. 09171234567.";
    else if (f.name === "maps" && v && !safeUrl(v)) msg = "Use a Google Maps link (https), or leave blank.";
    else if (f.name === "lat" && v && !(Math.abs(+v) <= 90)) msg = "Latitude must be -90 to 90.";
    else if (f.name === "lng" && v && !(Math.abs(+v) <= 180)) msg = "Longitude must be -180 to 180.";
    f.setAttribute("aria-invalid", !!msg);
    if (msg) { ok = false; f.insertAdjacentHTML("afterend", `<span class="err">${msg}</span>`); }
  });
  const g = [form.elements.lat, form.elements.lng].filter(Boolean);
  if (g.length === 2 && !!g[0].value.trim() !== !!g[1].value.trim()) { ok = false; g[1].insertAdjacentHTML("afterend", '<span class="err">Enter both latitude and longitude, or neither.</span>'); }
  if (!ok) { const bad = $('[aria-invalid="true"]', form); if (bad) bad.focus(); }
  return ok;
}
function initForms() {
  $("#vForm").addEventListener("submit", e => {
    e.preventDefault(); const f = e.target; if (!validate(f)) return;
    const d = Object.fromEntries(new FormData(f)); Object.keys(d).forEach(k => d[k] = String(d[k]).trim()); d.id = "r" + Date.now();
    if (!save(LS.vend, load(LS.vend, []).concat(d))) { $("#vMsg").textContent = "Could not save: browser storage is unavailable."; return; }
    f.reset(); $("#vMsg").textContent = "Saved locally in this browser as an unverified demo entry."; toast("Vendor registered (demo) ✅"); refreshVendorFilters(); renderVendors();
  });
  $("#vForm").addEventListener("reset", () => { $$(".err", $("#vForm")).forEach(x => x.remove()); $("#vMsg").textContent = ""; });
  $("#vWipe").addEventListener("click", () => { save(LS.vend, []); refreshVendorFilters(); renderVendors(); toast("Local registrations deleted"); });
  $("#cForm").addEventListener("submit", e => {
    e.preventDefault(); if (!validate(e.target)) return;
    e.target.reset(); $("#cMsg").textContent = "Thank you! This is a demo form, so no message was actually sent. Please use Facebook to reach the owner."; toast("Demo message accepted ✉️");
  });
}

/* ===== 8. UI: modal, theme, nav, reveal, events ===== */
let lastFocus = null;
function openModal(html) { lastFocus = document.activeElement; $("#mBody").innerHTML = html; $("#modal").hidden = false; document.body.style.overflow = "hidden"; $("#mClose").focus(); }
function closeModal() { $("#modal").hidden = true; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
function setTheme(t) { document.documentElement.dataset.theme = t; $("#themeBtn").textContent = t === "dark" ? "☀️" : "🌙"; save(LS.theme, t); }
let io;
function revealAll() {
  if (!("IntersectionObserver" in window)) return $$(".reveal").forEach(e => e.classList.add("in"));
  io = io || new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), {threshold: .08});
  $$(".reveal:not(.in)").forEach(e => io.observe(e));
}
function initNavSpy() {
  if (!("IntersectionObserver" in window)) return;
  const spy = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) $$("#menu a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + x.target.id)); }), {rootMargin: "-40% 0px -55% 0px"});
  $$("main section[id]").forEach(s => spy.observe(s));
}
function initEvents() {
  document.addEventListener("click", e => {
    const t = e.target.closest("[data-food],[data-fav],[data-vendor],[data-loc]"); if (!t) return;
    if (t.dataset.fav) return toggleFav(t.dataset.fav);
    if (t.dataset.food) return foodModal(t.dataset.food);
    if (t.dataset.vendor) return vendorModal(t.dataset.vendor);
    if (t.dataset.loc) { showLoc(t.dataset.loc); $(".mapwrap").scrollIntoView({behavior: "smooth", block: "center"}); }
  });
  $("#mClose").addEventListener("click", closeModal);
  $("#modal").addEventListener("click", e => { if (e.target.id === "modal") closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !$("#modal").hidden) closeModal(); });
  ["#fQ","#fCat","#fPrice","#fSort"].forEach(s => $(s).addEventListener("input", renderFoods));
  $("#fClear").addEventListener("click", () => { ["#fQ","#fCat","#fPrice","#fSort"].forEach(s => $(s).value = ""); renderFoods(); toast("Filters cleared"); });
  ["#vQ","#vLoc","#vCat"].forEach(s => $(s).addEventListener("input", renderVendors));
  $("#vClear").addEventListener("click", () => { ["#vQ","#vLoc","#vCat"].forEach(s => $(s).value = ""); renderVendors(); });
  ["#lQ","#lCat","#lArea"].forEach(s => $(s).addEventListener("input", renderLocs));
  $("#geoBtn").addEventListener("click", geolocate);
  $("#heroSearch").addEventListener("submit", e => { e.preventDefault(); $("#fQ").value = $("#heroQ").value; renderFoods(); $("#foods").scrollIntoView({behavior: "smooth"}); });
  $("#searchBtn").addEventListener("click", () => { $("#foods").scrollIntoView({behavior: "smooth"}); setTimeout(() => $("#fQ").focus({preventScroll: true}), 500); });
  $("#themeBtn").addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
  $("#burger").addEventListener("click", () => { const o = $("#menu").classList.toggle("open"); $("#burger").setAttribute("aria-expanded", o); });
  $("#menu").addEventListener("click", e => { if (e.target.closest("a")) { $("#menu").classList.remove("open"); $("#burger").setAttribute("aria-expanded", false); } });
  $("#top").addEventListener("click", () => scrollTo({top: 0, behavior: "smooth"}));
  addEventListener("scroll", () => { $("#top").hidden = scrollY < 600; }, {passive: true});
}
function init() {
  setTheme(load(LS.theme, matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  opts($("#fCat"), "All categories", [...new Set(FOODS.map(f => f.c))]);
  opts($("#lCat"), "All categories", LOC_CATS); opts($("#lArea"), "All areas", [...new Set(LOCS.map(l => l.area))]);
  $("#featFoods").innerHTML = ["isaw","kwek-kwek","turon"].map(id => { const f = FOODS.find(x => x.id === id); return `<button data-food="${id}">${img(IMG(id), f.n, f.e, 1)}<span>${f.n}</span></button>`; }).join("");
  $("#favCount").textContent = $("#favCount2").textContent = favs.length;
  initEvents(); initForms(); initNavSpy(); refreshVendorFilters(); showLoc("boulevard");
  [$("#foodGrid"), $("#vendorGrid"), $("#locGrid")].forEach(g => skeleton(g, 3)); // brief loading state
  setTimeout(() => { renderFoods(); renderVendors(); renderLocs(); renderFavs(); revealAll(); }, 450);
  revealAll();
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
