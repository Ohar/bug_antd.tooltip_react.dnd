import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
export default defineConfig(function () { return ({
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler'
            }
        }
    },
    plugins: [react()],
    server: {
        port: 3000
    }
}); });
