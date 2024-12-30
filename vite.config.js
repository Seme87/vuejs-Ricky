import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // Configura l'alias @ per puntare a src
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Importa automaticamente il file SCSS globale in tutti i componenti
        additionalData: `
        @import "@/style/partials/variables";
        @import "@/style/partials/mixins";
      `,
      }
    }
  },

});
