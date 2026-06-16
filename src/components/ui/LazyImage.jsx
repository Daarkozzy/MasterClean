import { useState, useEffect, useRef } from 'react';
import './LazyImage.css';

/**
 * Componente de imagem com lazy loading
 * Melhora performance carregando imagens apenas quando visíveis
 *
 * @param {string} src - URL da imagem
 * @param {string} alt - Texto alternativo
 * @param {string} placeholder - URL da imagem de placeholder (blur)
 * @param {string} className - Classes CSS adicionais
 * @param {string} width - Largura (opcional)
 * @param {string} height - Altura (opcional)
 */
export default function LazyImage({
  src,
  alt,
  placeholder,
  className = '',
  width,
  height,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder || src);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            setImageSrc(img.dataset.src);
            img.addEventListener('load', () => setIsLoaded(true));
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: '50px',
      }
    );

    if (imgRef.current) {
      imgRef.current.dataset.src = src;
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`lazy-image ${isLoaded ? 'lazy-image--loaded' : ''} ${className}`}
      width={width}
      height={height}
      {...props}
    />
  );
}
