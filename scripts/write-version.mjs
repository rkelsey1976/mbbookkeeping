// Emit dist/version.txt with the deployed commit SHA so external checks
// (the IndexNow workflow) can tell when Netlify has published a given push.
// Netlify sets COMMIT_REF at build time; fall back to git or "dev" locally.

import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

let ref = process.env.COMMIT_REF || process.env.GITHUB_SHA || '';
if (!ref) {
  try {
    ref = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();
  } catch {
    ref = 'dev';
  }
}
writeFileSync('dist/version.txt', ref + '\n');
console.log(`dist/version.txt -> ${ref}`);
