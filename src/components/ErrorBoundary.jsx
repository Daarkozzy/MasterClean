import React from 'react';

/**
 * Error Boundary Component
 * Captura erros de componentes filhos e exibe fallback UI
 * Previne que a aplicação inteira quebre
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log para serviço de erro (Sentry, LogRocket, etc)
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px 20px',
          textAlign: 'center',
          backgroundColor: '#fef2f2',
          borderRadius: '8px',
          margin: '20px',
          border: '1px solid #fecaca'
        }}>
          <h2 style={{ color: '#991b1b', marginBottom: '10px' }}>
            ⚠️ Algo deu errado
          </h2>
          <p style={{ color: '#7f1d1d', marginBottom: '16px' }}>
            Desculpe, encontramos um erro. Tente recarregar a página.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              backgroundColor: '#dc2626',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600'
            }}
          >
            Recarregar Página
          </button>
          {process.env.NODE_ENV === 'development' && (
            <details style={{ marginTop: '20px', textAlign: 'left' }}>
              <summary style={{ cursor: 'pointer', color: '#991b1b', fontWeight: 'bold' }}>
                Detalhes do Erro
              </summary>
              <pre style={{
                backgroundColor: '#fecaca',
                padding: '10px',
                borderRadius: '4px',
                overflow: 'auto',
                fontSize: '0.8rem'
              }}>
                {this.state.error?.toString()}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
