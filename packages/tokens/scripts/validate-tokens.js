import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const BUILD_DIR = 'build';
const THEMES = ['light', 'dark'];

function extractCustomProperties(css) {
  const props = new Set();
  const regex = /--([\w-]+):/g;
  let match;
  while ((match = regex.exec(css)) !== null) {
    props.add(`--${match[1]}`);
  }
  return props;
}

async function validate() {
  const entries = await readdir(BUILD_DIR, { withFileTypes: true });
  const brands = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  if (brands.length < 2) {
    console.log('Only one brand found, skipping cross-brand validation.');
    return;
  }

  let hasErrors = false;

  for (const theme of THEMES) {
    const brandTokens = new Map();

    for (const brand of brands) {
      const cssPath = join(BUILD_DIR, brand, 'css', `${theme}.css`);
      const css = await readFile(cssPath, 'utf-8');
      brandTokens.set(brand, extractCustomProperties(css));
    }

    const allTokens = new Set();
    for (const tokens of brandTokens.values()) {
      for (const token of tokens) allTokens.add(token);
    }

    for (const brand of brands) {
      const tokens = brandTokens.get(brand);
      const missing = [...allTokens].filter((t) => !tokens.has(t));

      if (missing.length > 0) {
        hasErrors = true;
        console.error(`\n❌ [${theme}] Brand "${brand}" is missing tokens:`);
        for (const token of missing) {
          console.error(`   - ${token}`);
        }
      }
    }
  }

  if (hasErrors) {
    console.error('\nToken validation failed.');
    process.exit(1);
  }

  console.log('✅ All brands define the same token set.');
}

validate();
