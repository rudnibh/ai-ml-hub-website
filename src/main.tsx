import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp, faDiscord } from '@fortawesome/free-brands-svg-icons';
import App from './App.tsx';
import './index.css';

// Add Font Awesome icons to the library
library.add(faWhatsapp, faDiscord);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);