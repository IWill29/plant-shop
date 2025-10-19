// Importē Vite konfigurācijas funkciju un React spraudni
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Eksportē Vite konfigurāciju
export default defineConfig({
  plugins: [react()], // Ieslēdz React spraudni, lai apstrādātu JSX
  base: '/plant-shop/', // Bāzes ceļš izvietošanai, piemēram, GitHub Pages
});