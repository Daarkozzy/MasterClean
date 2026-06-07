import React, { useState, useEffect, useRef } from 'react';

/**
 * LazyImage Component
 * Carrega imagens apenas quando estão próximas ao viewport (intersection observer)
 * Melhora performance e velocidade de carregamento da página
 */
export default function LazyImage({ src, alt, className, placeholder, ...props }) {
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = new Image();
            img.onload = () => {
              setImageSrc(src);
              setIsLoaded(true);
            };
            img.onerror = () => {
              console.error(`Erro ao carregar imagem: ${src}`);
            };
            img.src = src;
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '50px' } // Começa a carregar 50px antes de entrar no viewport
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
      loading="lazy"
      {...props}
    />
  );
}
