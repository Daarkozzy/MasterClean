import React, { useState, useEffect } from 'react';
import './ResultsCarousel.css';

const results = [
  {
    id: 1,
    before: '/results/result1-before.jpg',
    after: '/results/result1-after.jpg',
    title: 'Limpeza de Sofá',
  },
  {
    id: 2,
    before: '/results/result2-before.jpg',
    after: '/results/result2-after.jpg',
    title: 'Limpeza de Sofá',
  },
  {
    id: 3,
    before: '/results/result3-before.jpg',
    after: '/results/result3-after.jpg',
    title: 'Limpeza de Carpete',
  },
];

export default function ResultsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play a cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % results.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="results-carousel">
      <div className="results-carousel__container">
        <div className="results-carousel__slide">
          <div className="results-carousel__item">
            <div className="results-carousel__before">
              <img 
                src={results[currentIndex].before} 
                alt={`${results[currentIndex].title} - Antes`} 
              />
              <span className="results-carousel__badge results-carousel__badge--before">ANTES</span>
            </div>
            <div className="results-carousel__after">
              <img 
                src={results[currentIndex].after} 
                alt={`${results[currentIndex].title} - Depois`} 
              />
              <span className="results-carousel__badge results-carousel__badge--after">DEPOIS</span>
            </div>
          </div>
        </div>
      </div>

      <div className="results-carousel__indicators">
        {results.map((_, index) => (
          <button
            key={index}
            className={`results-carousel__indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Resultado ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
