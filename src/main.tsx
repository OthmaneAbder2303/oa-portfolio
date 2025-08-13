import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Set dark mode by default for first-time visitors
const setDefaultTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (!savedTheme) {
    // First-time visitor: default to dark mode
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    // Apply saved theme
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }
};

// Run theme setup before rendering
setDefaultTheme();

createRoot(document.getElementById('root')!).render(<App />);