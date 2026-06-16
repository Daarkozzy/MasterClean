import { useState } from 'react';
import './Button.css';

/**
 * Componente Button genérico e reutilizável
 * @param {string} variant - Estilo do botão: 'primary', 'gold', 'secondary', 'outline'
 * @param {string} size - Tamanho: 'sm', 'md', 'lg'
 * @param {boolean} disabled - Se desabilitado
 * @param {Function} onClick - Callback ao clicar
 * @param {React.ReactNode} children - Conteúdo do botão
 * @param {string} className - Classes CSS adicionais
 * @param {Object} props - Outras props do HTML button
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  children,
  className = '',
  ...props
}) {
  const baseClasses = `btn btn--${variant} btn--${size}`;
  const classes = `${baseClasses} ${className}`.trim();

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
