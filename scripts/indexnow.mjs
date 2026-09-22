// Submit URLs to IndexNow (Bing, Yandex, Seznam, Naver — not Google).
//
// Usage:
//   node scripts/indexnow.mjs                 # submit every URL in the live sitemap
//   node scripts/indexnow.mjs <url> [<url>…]  # submit only the URLs given
//
// The key file must already be live at:
//   https://www.kdplasteringrenderingservices.co.uk/<KEY>.txt
//
// IndexNow expects only changed URLs in normal use. A full-sitemap submit is
// for one-off events — a migration, a mass content change — not routine.
//
// Endpoints are hit independently. The run succeeds if any one accepts.
// Bing currently returns 403 UserForbiddedToAccessSite until the domain's
// Bing Webmaster Tools ownership is sorted — that's logged as a warning, not
// a failure, so it starts working automatically once BWT is fixed.

const HOST = 'www.kdplasteringrenderingservices.co.uk';
const KEY = '20e965efe84b46f8bea807703e4ac16a';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP = `https://${HOST}/sitemap-0.xml`;
const BATCH = 10000; // IndexNow hard limit per request

const ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://yandex.com/indexnow',
  'https://www.bing.com/indexnow',
];

async function urlsFromSitemap() {
  const res = await fetch(SITEMAP);
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function submit(endpoint, urlList) {
  let res;
  try {
    res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
    });
  } catch (err) {
    console.log(`  ${endpoint} — network error: ${err.message}`);
    return false;
  }
  const body = (await res.text()).trim();
  const ok = res.status === 200 || res.status === 202;
  const tag = ok ? 'ok' : res.status === 403 ? 'not authorised (warn)' : 'FAILED';
  console.log(`  ${endpoint} — ${res.status} ${res.statusText} [${tag}]${body ? ` ${body}` : ''}`);
  return ok;
}

const args = process.argv.slice(2);
const urls = args.length ? args : await urlsFromSitemap();

if (!urls.length) {
  console.error('No URLs to submit.');
  process.exit(1);
}

console.log(`Submitting ${urls.length} URL(s) to IndexNow as ${HOST}`);
let anyAccepted = false;
for (let i = 0; i < urls.length; i += BATCH) {
  const chunk = urls.slice(i, i + BATCH);
  console.log(`batch ${i / BATCH + 1} (${chunk.length} URLs):`);
  for (const ep of ENDPOINTS) {
    if (await submit(ep, chunk)) anyAccepted = true;
  }
}

if (!anyAccepted) {
  console.error('No endpoint accepted the submission.');
  process.exit(1);
}
