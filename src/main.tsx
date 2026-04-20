import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Signal to the prerenderer (vite build) that the app has rendered.
// Wait for next paint so react-helmet has injected meta tags into <head>.
if (typeof window !== 'undefined') {
  // Wait for the page to settle before signaling the prerenderer.
  // Some pages (Index, About, ReputationManagement) have helmet titles equal to
  // the static fallback, so we can't poll for a title change. Instead, give a
  // generous fixed delay so react-helmet, react-router, and react-query all
  // flush their effects to the DOM.
  setTimeout(() => {
    // Make sure the <title> text node mirrors document.title (helmet writes to
    // both, but in headless tabs the textContent mutation can lag).
    const titleEl = document.querySelector('title');
    if (titleEl && document.title && titleEl.textContent !== document.title) {
      titleEl.textContent = document.title;
    }
    document.dispatchEvent(new Event('render-event'));
  }, 2500);
}
