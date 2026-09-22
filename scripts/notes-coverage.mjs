// Report which service × neighbourhood combinations still need copy.
const { SERVICE_AREA_NOTES } = await import('../src/lib/serviceAreaNotes.ts');
const entries = Object.entries(SERVICE_AREA_NOTES);
const done = entries.filter(([, v]) => v.trim().length > 0);
const bySvc = {};
for (const [k, v] of entries) {
  const svc = k.split('/')[0];
  bySvc[svc] ??= { done: 0, total: 0 };
  bySvc[svc].total++;
  if (v.trim()) bySvc[svc].done++;
}
console.log(`\n  ${done.length} of ${entries.length} written\n`);
for (const [svc, s] of Object.entries(bySvc)) {
  const bar = '█'.repeat(Math.round((s.done / s.total) * 20)).padEnd(20, '·');
  console.log(`  ${svc.padEnd(26)} ${bar} ${s.done}/${s.total}`);
}
const todo = entries.filter(([, v]) => !v.trim()).map(([k]) => k);
if (todo.length) console.log(`\n  next up: ${todo.slice(0, 5).join(', ')}${todo.length > 5 ? ` … +${todo.length - 5}` : ''}`);
console.log('');
