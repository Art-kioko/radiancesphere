import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
      mode === 'production' && prerender({
        routes: [
          '/',
          '/about',
          '/services',
          '/reputation-management',
          '/local-seo',
          '/ai-workflows',
          '/web-development',
          '/amenities',
          '/gallery',
          '/contact',
          '/consultation',
        ],
        renderer: '@prerenderer/renderer-puppeteer',
        rendererOptions: {
          renderAfterDocumentEvent: 'render-event',
          headless: 'new',
        },
        postProcess(renderedRoute: any) {
          // Ensure relative asset paths still work
          renderedRoute.html = renderedRoute.html.replace(
            /http:\/\/localhost:\d+/g,
            ''
          );
          return renderedRoute;
        },
      }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(env.VITE_SUPABASE_URL),
      'import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY': JSON.stringify(env.VITE_SUPABASE_PUBLISHABLE_KEY),
      'import.meta.env.VITE_SUPABASE_PROJECT_ID': JSON.stringify(env.VITE_SUPABASE_PROJECT_ID),
    },
  };
});
