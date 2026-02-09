const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const DEFAULT_DIRS = ['public', 'src/images', 'assets/img'];
const SUPPORTED_EXT = new Set(['.jpg', '.jpeg', '.png']);

function parseArgs(argv) {
  const args = {
    inPlace: false,
    dryRun: false,
    output: '',
    maxWidth: 1600,
    minBytes: 50 * 1024,
    dirs: [...DEFAULT_DIRS],
  };

  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--in-place') args.inPlace = true;
    else if (a === '--dry-run') args.dryRun = true;
    else if (a === '--output') args.output = String(argv[++i] || '');
    else if (a === '--max-width') args.maxWidth = Number(argv[++i] || args.maxWidth);
    else if (a === '--min-bytes') args.minBytes = Number(argv[++i] || args.minBytes);
    else if (a === '--dirs') {
      const rest = argv.slice(i + 1);
      args.dirs = rest.length ? rest : args.dirs;
      break;
    }
  }

  if (!args.inPlace && !args.output) {
    args.output = 'optimized-assets';
  }

  return args;
}

function* walkFiles(dir) {
  if (!fs.existsSync(dir)) return;
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const it of items) {
    const full = path.join(dir, it.name);
    if (it.isDirectory()) {
      yield* walkFiles(full);
    } else if (it.isFile()) {
      yield full;
    }
  }
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function bytes(n) {
  const kb = n / 1024;
  const mb = kb / 1024;
  if (mb >= 1) return `${mb.toFixed(2)} MB`;
  if (kb >= 1) return `${kb.toFixed(1)} KB`;
  return `${n} B`;
}

function pickMaxWidth(filePath, defaultMaxWidth) {
  const base = path.basename(filePath).toLowerCase();
  if (base.includes('favicon') || base.includes('logo')) return Math.min(512, defaultMaxWidth);
  if (filePath.replace(/\\/g, '/').includes('/public/books/')) return Math.min(900, defaultMaxWidth);
  return defaultMaxWidth;
}

async function optimizeOne(srcPath, dstPath, opts) {
  const ext = path.extname(srcPath).toLowerCase();
  const maxW = pickMaxWidth(srcPath, opts.maxWidth);

  let img = sharp(srcPath, { failOn: 'none' });
  const meta = await img.metadata();

  if (meta && meta.width && meta.width > maxW) {
    img = img.resize({ width: maxW, withoutEnlargement: true });
  }

  if (ext === '.jpg' || ext === '.jpeg') {
    img = img.jpeg({ quality: 75, progressive: true, mozjpeg: true });
  } else if (ext === '.png') {
    img = img.png({ compressionLevel: 9, palette: true });
  }

  const tmp = `${dstPath}.tmp`;
  await img.toFile(tmp);

  // atomic-ish replace
  try {
    if (fs.existsSync(dstPath)) fs.unlinkSync(dstPath);
  } catch (e) {}
  fs.renameSync(tmp, dstPath);
}

async function main() {
  const opts = parseArgs(process.argv);
  console.log('Image optimization');
  console.log(`- Mode: ${opts.inPlace ? 'in-place' : 'copy'}`);
  if (!opts.inPlace) console.log(`- Output: ${opts.output}`);
  console.log(`- Dirs: ${opts.dirs.join(', ')}`);
  console.log(`- Max width: ${opts.maxWidth}px (auto-lower for favicon/logo/books)`);
  console.log(`- Skip smaller than: ${bytes(opts.minBytes)}`);
  if (opts.dryRun) console.log('- Dry run: yes');
  console.log('');

  const root = process.cwd();
  const outRoot = opts.inPlace ? '' : path.resolve(root, opts.output);
  if (!opts.inPlace) ensureDir(outRoot);

  let totalBefore = 0;
  let totalAfter = 0;
  let processed = 0;
  let skipped = 0;

  const allFiles = [];
  for (const d of opts.dirs) {
    const abs = path.resolve(root, d);
    for (const f of walkFiles(abs)) allFiles.push(f);
  }

  for (const absSrc of allFiles) {
    const ext = path.extname(absSrc).toLowerCase();
    if (!SUPPORTED_EXT.has(ext)) continue;

    const st = fs.statSync(absSrc);
    if (!st.isFile()) continue;
    if (st.size < opts.minBytes) {
      skipped++;
      continue;
    }

    const rel = path.relative(root, absSrc);
    const absDst = opts.inPlace ? absSrc : path.resolve(outRoot, rel);
    if (!opts.inPlace) ensureDir(path.dirname(absDst));

    totalBefore += st.size;
    if (opts.dryRun) {
      processed++;
      continue;
    }

    await optimizeOne(absSrc, absDst, opts);
    const stAfter = fs.statSync(absDst);
    totalAfter += stAfter.size;
    processed++;

    if (processed % 10 === 0) {
      console.log(`Processed ${processed}...`);
    }
  }

  console.log('');
  console.log(`Processed: ${processed}`);
  console.log(`Skipped (small): ${skipped}`);
  if (!opts.dryRun) {
    const saved = totalBefore - totalAfter;
    const pct = totalBefore > 0 ? (1 - totalAfter / totalBefore) * 100 : 0;
    console.log(`Before: ${bytes(totalBefore)}`);
    console.log(`After:  ${bytes(totalAfter)}`);
    console.log(`Saved:  ${bytes(saved)} (${pct.toFixed(1)}%)`);
  }
}

main().catch((e) => {
  console.error('Error optimizing images:', e);
  process.exitCode = 1;
});
