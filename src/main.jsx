import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { AIHighlightProvider } from './context/AIHighlightContext';
import { HeroIntroProvider } from './context/HeroIntroContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <LanguageProvider>
          <AIHighlightProvider>
            <HeroIntroProvider>
              <App />
            </HeroIntroProvider>
          </AIHighlightProvider>
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
