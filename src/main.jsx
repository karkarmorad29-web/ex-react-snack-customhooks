import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Inject runtime CSS to ensure cursor is hidden even if styles are overridden or cached
const _injectedCursorStyle = (() => {
  try {
    const css = `html, body, #root, *, *::before, *::after, a, button, input, textarea, select, summary, label, [role], [role] * { cursor: none !important; } svg, canvas { cursor: none !important; }`;
    const style = document.createElement('style');
    style.setAttribute('data-custom-cursor', 'true');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
    return style;
  } catch (e) {
    return null;
  }
})();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
