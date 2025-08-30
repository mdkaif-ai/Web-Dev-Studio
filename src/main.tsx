import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element not found. Make sure there's a div with id='root' in your HTML.");
  }
  createRoot(rootElement).render(<App />);
} catch (error) {
  console.error('Failed to initialize React app:', error);
  document.body.innerHTML = '<div style="color: red; padding: 20px;">Failed to load application. Please refresh the page.</div>';
}
