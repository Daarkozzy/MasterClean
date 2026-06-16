/**
 * Setup para testes com Vitest
 * Importar todas as dependências e configurações globais aqui
 */

import { expect, afterEach, beforeAll, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// Limpar após cada teste
afterEach(() => {
  cleanup();
});

// Mock de window.matchMedia para testes de responsividade
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock de IntersectionObserver para lazy loading
globalThis.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};

// Suprimir logs de console em testes (optional)
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render')
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});
