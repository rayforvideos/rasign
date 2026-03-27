import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [vue(), dts({ rollupTypes: true })],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'rasign-vue',
      cssFileName: 'style',
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    css: { modules: { classNameStrategy: 'non-scoped' } },
  },
});
