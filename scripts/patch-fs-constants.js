const fs = require('fs');
const path = require('path');

// Idempotent patch to replace usage of fs.F_OK with fs.constants.F_OK
// Targets react-dev-utils/checkRequiredFiles.js which emits the deprecation warning.

const target = path.join(__dirname, '..', 'node_modules', 'react-dev-utils', 'checkRequiredFiles.js');

try {
  if (!fs.existsSync(target)) {
    console.log('[patch-fs-constants] target not found, skipping:', target);
    process.exit(0);
  }

  let content = fs.readFileSync(target, 'utf8');
  if (content.indexOf('fs.constants.F_OK') !== -1) {
    console.log('[patch-fs-constants] already patched');
    process.exit(0);
  }

  if (content.indexOf('fs.F_OK') === -1) {
    console.log('[patch-fs-constants] fs.F_OK not found, nothing to do');
    process.exit(0);
  }

  // Replace occurrences conservatively
  const patched = content.replace(/fs\.F_OK/g, 'fs.constants.F_OK');
  fs.writeFileSync(target, patched, 'utf8');
  console.log('[patch-fs-constants] patched', target);
} catch (err) {
  console.error('[patch-fs-constants] error:', err && err.message ? err.message : err);
  // Do not fail install/build on patch errors.
}
