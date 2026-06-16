/**
 * Hook para facilitar integração com WhatsApp
 * Centraliza lógica de links e mensagens
 */

import { WHATSAPP } from '../constants/config';

/**
 * Abre uma conversa do WhatsApp
 * @param {string} message - Mensagem personalizada
 * @param {Object} options - Opções adicionais
 */
export function useWhatsApp() {
  const openChat = (message = '') => {
    const link = WHATSAPP.getLink(message);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const createMessage = (items) => {
    if (typeof items === 'string') return items;
    
    // Se for array de strings, juntar com quebra de linha
    if (Array.isArray(items)) {
      return items.filter(Boolean).join('\n');
    }

    // Se for objeto, construir mensagem formatada
    if (typeof items === 'object') {
      const parts = [];
      Object.entries(items).forEach(([key, value]) => {
        if (value) parts.push(`*${key}:* ${value}`);
      });
      return parts.join('\n');
    }

    return WHATSAPP.message;
  };

  return {
    openChat,
    createMessage,
    whatsappNumber: WHATSAPP.number,
    whatsappLink: WHATSAPP.getLink(),
  };
}

export default useWhatsApp;
