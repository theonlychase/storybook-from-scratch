import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import postcss from './postcss.config.js';
import tsconfigPaths from 'vite-tsconfig-paths';
import AutoImport from 'unplugin-auto-import/vite';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';

export default defineConfig({
  css: {
    postcss,
  },
  plugins: [
    AutoImport({
      dirs: ['./src/components/', './src/layouts/**', './src/pages/**'],
      eslintrc: {
        enabled: true,
        filepath: fileURLToPath(new URL('./eslintGlobals.mjs', import.meta.url)),
      },
      imports: ['vue', 'vue-router', '@vueuse/core'],
      resolvers: [
        PrimeVueResolver({
          components: {
            prefix: 'Prime',
          },
        }),
      ],
    }),
    dts({
      entryRoot: './src',
      staticImport: true,
      include: ['src/**/*.vue'],
    }),
    tsconfigPaths({
      root: fileURLToPath(new URL('./', import.meta.url)),
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
