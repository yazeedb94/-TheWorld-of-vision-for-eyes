import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/TheWorld-of-vision-for-eyes/',  // استبدل هذا باسم مستودع GitHub الخاص بك
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
