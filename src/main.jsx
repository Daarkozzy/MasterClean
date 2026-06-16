import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/common/ErrorBoundary'
import { initGoogleAnalytics } from './utils/analytics'
import { injectSchemaMarkup, getOrganizationSchema, getLocalBusinessSchema } from './utils/seo'

// Inicializar Google Analytics
initGoogleAnalytics();

// Injetar Schema.org para SEO
injectSchemaMarkup(getOrganizationSchema());
injectSchemaMarkup(getLocalBusinessSchema());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
