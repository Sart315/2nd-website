import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider } from './context/RouterContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <RouterProvider>
      <App />
    </RouterProvider>
  </ThemeProvider>
);

