import StyleDictionary from 'style-dictionary';
import { readdir } from 'node:fs/promises';

const BRANDS_DIR = 'tokens/brands';
const THEMES = ['light', 'dark'];

async function discoverBrands() {
  const entries = await readdir(BRANDS_DIR, { withFileTypes: true });
  return entries.filter((e) => e.isDirectory()).map((e) => e.name);
}

function getConfig(brand, theme) {
  const isDefaultTheme = theme === 'light';

  return {
    include: ['tokens/base/**/*.json', 'tokens/semantic/**/*.json'],
    source: [
      `tokens/brands/${brand}/color.json`,
      `tokens/brands/${brand}/overrides.json`,
      `tokens/brands/${brand}/themes/${theme}.json`,
    ],
    expand: {
      include: ['typography', 'border', 'shadow'],
    },
    platforms: {
      css: {
        transformGroup: 'css',
        prefix: 'ds',
        buildPath: `build/${brand}/css/`,
        files: [
          {
            destination: `${theme}.css`,
            format: 'css/variables',
            filter: (token) => !token.path.includes('breakpoint'),
            options: {
              selector: isDefaultTheme
                ? `:root, [data-brand="${brand}"][data-theme="light"]`
                : `[data-brand="${brand}"][data-theme="dark"]`,
              outputReferences: true,
            },
          },
        ],
      },
      scss: {
        transformGroup: 'scss',
        prefix: 'ds',
        buildPath: `build/${brand}/scss/`,
        files: [
          {
            destination: `_variables-${theme}.scss`,
            format: 'scss/variables',
          },
          {
            destination: `_map-${theme}.scss`,
            format: 'scss/map-deep',
            options: { mapName: `ds-tokens-${theme}` },
          },
        ],
      },
      js: {
        transformGroup: 'js',
        buildPath: `build/${brand}/js/`,
        files: [
          {
            destination: `tokens-${theme}.js`,
            format: 'javascript/es6',
          },
          {
            destination: `tokens-${theme}.d.ts`,
            format: 'typescript/es6-declarations',
          },
        ],
      },
    },
  };
}

async function build() {
  const brands = await discoverBrands();
  console.log(`Building tokens for brands: ${brands.join(', ')}`);

  for (const brand of brands) {
    for (const theme of THEMES) {
      console.log(`  → ${brand}/${theme}`);
      const sd = new StyleDictionary(getConfig(brand, theme));
      await sd.buildAllPlatforms();
    }
  }

  console.log('Done.');
}

build();
