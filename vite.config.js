import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/js/index.js'),
      name: 'StoneWick',
      fileName: (format) => {
        if (format === 'es') return 'stonewick.esm.js';
        if (format === 'umd') return 'stonewick.js';
        return `stonewick.${format}.js`;
      },
      formats: ['es', 'umd']
    },
    outDir: 'dist',
    emptyOutDir: false, // CSS build runs first
    rollupOptions: {
      external: ['bootstrap'],
      output: {
        globals: {
          bootstrap: 'bootstrap'
        },
        assetFileNames: '[name][extname]'
      }
    },
    minify: 'terser',
    sourcemap: true,
    terserOptions: {
      compress: {
        drop_console: true
      }
    }
  },
  // Dev server for testing
  server: {
    port: 3000,
    open: '/kitchen-sink.html'
  }
});
