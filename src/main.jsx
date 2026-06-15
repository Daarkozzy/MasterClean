import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)

// Renderizar WhatsApp button em um portal separado para garantir que fica fixo
createRoot(document.getElementById('whatsapp-portal')).render(
  <WhatsAppButton />
)

