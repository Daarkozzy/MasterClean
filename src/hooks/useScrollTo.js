/**
 * Hook para scroll suave para elementos
 * Útil para navegação entre seções
 */

/**
 * Hook que fornece função para scroll suave
 * @returns {Object} { scrollTo: function }
 */
export function useScrollTo() {
  /**
   * Faz scroll suave até um elemento
   * @param {Event} e - Evento do click
   * @param {string} id - ID do elemento alvo
   */
  const scrollTo = (e, id) => {
    if (e) {
      e.preventDefault();
    }

    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Elemento com ID "${id}" não encontrado`);
      return;
    }

    // Se o navegador suportar scroll behavior
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return { scrollTo };
}

export default useScrollTo;
