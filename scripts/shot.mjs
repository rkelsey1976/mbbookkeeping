import { chromium } from 'playwright';
const b = await chromium.launch();
const pg = await b.newPage({ viewport: { width: 1400, height: 900 } });
await pg.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
await pg.screenshot({ path: '/tmp/mb-home.png' });
await pg.goto('http://localhost:4321/bookkeeping/clifton/', { waitUntil: 'networkidle' });
await pg.screenshot({ path: '/tmp/mb-matrix.png' });
await b.close();
console.log('shots done');
