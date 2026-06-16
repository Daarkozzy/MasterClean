import React, { useState, useEffect } from 'react';
import { CaretRight, CaretLeft } from '@phosphor-icons/react';
import './ResultsCarousel.css';

const results = [
  {
    id: 1,
    image: '/results/sofapreto.jpg',
    alt: 'Resultado 1 - Sofá Preto',
  },
  {
    id: 2,
    image: '/results/sofabranco.jpg',
    alt: 'Resultado 2 - Sofá Branco',
  },
  {
    id: 3,
    image: '/results/sofabranco2.jpg',
    alt: 'Resultado 3 - Sofá Branco 2',
  },
];

export default function ResultsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % results.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % results.length);
  };

  return (
    <div className="results-carousel">
      <div className="results-carousel__container">
        <div className="results-carousel__slide">
          <img 
            src={results[currentIndex].image} 
            alt={results[currentIndex].alt} 
            className="results-carousel__image"
          />
        </div>

        <button className="results-carousel__arrow results-carousel__arrow--left" onClick={goToPrevious} aria-label="Anterior">
          <CaretLeft size={24} weight="fill" />
        </button>

        <button className="results-carousel__arrow results-carousel__arrow--right" onClick={goToNext} aria-label="Próximo">
          <CaretRight size={24} weight="fill" />
        </button>
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
