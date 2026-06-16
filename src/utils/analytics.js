/**
 * Google Analytics - Rastreamento de eventos
 */

/**
 * Inicializar Google Analytics
 * Chame isso no main.jsx
 */
export function initGoogleAnalytics() {
  // Placeholder - substitua GA_ID pelas variáveis de env
  const gaId = import.meta.env.VITE_GA_ID;
  
  if (!gaId) {
    console.warn('Google Analytics ID não configurado');
    return;
  }

  // Google Analytics já carregado no index.html
  // Apenas confirmar que está ativo
  if (window.gtag) {
    window.gtag('config', gaId, {
      page_path: window.location.pathname,
    });
  }
}

/**
 * Rastrear clique em CTA
 * @param {string} buttonName - Nome do botão (ex: "Orçamento Grátis Hero")
 * @param {string} section - Seção onde está (ex: "Hero", "Services")
 */
export function trackCTAClick(buttonName, section) {
  if (!window.gtag) return;

  window.gtag('event', 'cta_click', {
    button_name: buttonName,
    section: section,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Rastrear visualização de seção
 * @param {string} sectionName - Nome da seção
 */
export function trackSectionView(sectionName) {
  if (!window.gtag) return;

  window.gtag('event', 'section_view', {
    section_name: sectionName,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Rastrear simulação de orçamento
 * @param {string} category - Categoria (estofados, veículos, etc)
 * @param {number} estimatedPrice - Preço estimado
 */
export function trackPriceEstimate(category, estimatedPrice) {
  if (!window.gtag) return;

  window.gtag('event', 'price_estimate', {
    service_category: category,
    estimated_price: estimatedPrice,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Rastrear abertura do WhatsApp
 * @param {string} source - De onde veio (ex: "Hero", "Services", "Simulator")
 * @param {string} message - Tipo de mensagem
 */
export function trackWhatsAppClick(source, message = '') {
  if (!window.gtag) return;

  window.gtag('event', 'whatsapp_click', {
    source: source,
    message_type: message,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Rastrear envio de formulário de contato
 * @param {string} status - 'success' ou 'error'
 */
export function trackContactForm(status) {
  if (!window.gtag) return;

  window.gtag('event', 'contact_form', {
    form_status: status,
    timestamp: new Date().toISOString(),
  });
}

export default {
  initGoogleAnalytics,
  trackCTAClick,
  trackSectionView,
  trackPriceEstimate,
  trackWhatsAppClick,
  trackContactForm,
};
