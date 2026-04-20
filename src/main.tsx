import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Signal to the prerenderer (vite build) that the app has rendered.
// Wait for next paint so react-helmet has injected meta tags into <head>.
if (typeof window !== 'undefined') {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.dispatchEvent(new Event('render-event'));
    });
  });
}
