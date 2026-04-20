import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Signal to the prerenderer (vite build) that the app has rendered.
// Wait for next paint so react-helmet has injected meta tags into <head>.
if (typeof window !== 'undefined') {
  // Give react-helmet time to mutate <head> after React mounts and routes resolve.
  // Poll for helmet to update document.title away from the static index.html title.
  const STATIC_TITLE = 'Radiance Sphere | AI-Powered Digital Marketing Agency in Kenya';
  let attempts = 0;
  const check = () => {
    attempts++;
    if (document.title !== STATIC_TITLE || attempts > 40) {
      // Sync the <title> element text in case helmet only updated document.title
      const titleEl = document.querySelector('title');
      if (titleEl && titleEl.textContent !== document.title) {
        titleEl.textContent = document.title;
      }
      document.dispatchEvent(new Event('render-event'));
    } else {
      setTimeout(check, 100);
    }
  };
  setTimeout(check, 300);
}
