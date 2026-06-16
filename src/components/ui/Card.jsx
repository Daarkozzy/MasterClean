import './Card.css';

/**
 * Componente Card genérico para envolver conteúdo
 * @param {React.ReactNode} children - Conteúdo do card
 * @param {string} variant - Estilo: 'default', 'elevated', 'minimal'
 * @param {string} className - Classes CSS adicionais
 * @param {Object} props - Outras props do HTML div
 */
export default function Card({
  children,
  variant = 'default',
  className = '',
  ...props
}) {
  const baseClasses = `card card--${variant}`;
  const classes = `${baseClasses} ${className}`.trim();

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
