import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {VitePWA} from 'vite-plugin-pwa';
export default defineConfig({base:'./',plugins:[react(),VitePWA({registerType:'autoUpdate',includeAssets:['icon.svg'],manifest:{name:'규찬 지민 오사카 여행 ❤️',short_name:'오사카 여행 ❤️',description:'규찬과 지민의 2026 오사카 여행 일정과 동선',theme_color:'#fff9f7',background_color:'#fff9f7',display:'standalone',start_url:'./',scope:'./',icons:[{src:'icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any'}]},workbox:{globPatterns:['**/*.{js,css,html,svg,png,webp}'],navigateFallback:'index.html'}})]});
