// ═══════════════════════════════════════════════════════════════
// Configurações e constantes da aplicação
// ═══════════════════════════════════════════════════════════════

export const WHATSAPP = {
  number: import.meta.env.VITE_WHATSAPP_NUMBER || '5521992457714',
  message: import.meta.env.VITE_WHATSAPP_MESSAGE || 'Olá! Gostaria de solicitar um orçamento grátis.',
  getLink: (text = '') => {
    const message = text || WHATSAPP.message;
    return `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(message)}`;
  },
};

// Cores do design system
export const COLORS = {
  white: '#ffffff',
  offWhite: '#f8faff',
  gray50: '#f1f5fb',
  gray100: '#e4ecf7',
  gray200: '#c8d9ef',
  gray400: '#8fa3c0',
  gray600: '#4a6080',
  gray800: '#1e3050',
  gray900: '#0d1f38',
  blue500: '#1a6ef5',
  blue600: '#0f59d4',
  gold400: '#f9b800',
  gold500: '#e8a800',
  brandBlue: '#0f59d4',
  brandGold: '#e8a800',
};

// Breakpoints de responsividade
export const BREAKPOINTS = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1440px',
};

// Transições e animações
export const TRANSITIONS = {
  fast: 'all 0.18s cubic-bezier(0.4, 0, 0.2, 1)',
  normal: 'all 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
  slow: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
};

// Sombras
export const SHADOWS = {
  xs: '0 1px 2px rgba(13, 31, 56, 0.05)',
  sm: '0 2px 8px rgba(13, 31, 56, 0.06)',
  md: '0 4px 16px rgba(13, 31, 56, 0.1)',
  lg: '0 8px 32px rgba(13, 31, 56, 0.15)',
  gold: '0 10px 20px -5px rgba(249, 184, 0, 0.4)',
};

// Raios de borda
export const BORDER_RADIUS = {
  sm: '8px',
  md: '14px',
  lg: '20px',
  xl: '28px',
  pill: '999px',
};

// URLs de navegação (IDs das seções)
export const NAV_SECTIONS = {
  home: 'home',
  services: 'services',
  about: 'about',
  diferenciais: 'diferenciais',
  reviews: 'reviews',
  priceEstimator: 'price-estimator',
  contact: 'contact',
  faq: 'faq',
};

// Metadados do site
export const SITE_META = {
  title: 'MasterClean - Limpeza e Higienização Premium em Itaguaí',
  description: 'Higienização profissional de estofados, veículos, ônibus e embarcações em Itaguaí e região com tecnologia de ponta.',
  keywords: 'limpeza, higienização, Itaguaí, estofados, veículos, ônibus, náuticos, MasterClean',
  author: 'MasterClean',
  url: 'https://master-clean-tawny.vercel.app',
  image: 'https://master-clean-tawny.vercel.app/og-image.jpg',
  twitterHandle: '@MasterClean',
};

export default {
  WHATSAPP,
  COLORS,
  BREAKPOINTS,
  TRANSITIONS,
  SHADOWS,
  BORDER_RADIUS,
  NAV_SECTIONS,
  SITE_META,
};
