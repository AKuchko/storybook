import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import DefineOptions from 'unplugin-vue-define-options/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({entryRoot: './src'}),
    cssInjectedByJsPlugin(),
    DefineOptions(),
  ],

  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ak-elements',
      fileName: (format) => `ak-elements.${format}.js`,
    },

    rollupOptions: {
      external: ['vue'],
      input: './src/index.ts',
      output: {
        globals: { vue: 'Vue' },
      }
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
