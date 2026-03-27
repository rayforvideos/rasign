import { defineConfig } from 'vitest/config';
import angular from '@analogjs/vite-plugin-angular';

// Use Angular compiler plugin but exclude the vitest-specific sub-plugins that
// disable esbuild (which breaks vitest global injection).
const angularPlugins = angular({ tsconfig: 'tsconfig.spec.json' });
const filteredPlugins = angularPlugins.filter((p: any) => {
  return ![
    '@analogjs/vitest-angular-esm-plugin',
    '@analogjs/vitest-angular-esbuild-plugin',
    '@analogjs/vitest-angular-sourcemap-plugin',
  ].includes(p.name);
});

export default defineConfig({
  plugins: filteredPlugins,
  test: {
    globals: true,
    setupFiles: ['src/test-setup.ts'],
    environment: 'jsdom',
    include: ['src/**/*.spec.ts'],
  },
});
