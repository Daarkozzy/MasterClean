import React, { useState, useEffect, useRef } from 'react';
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
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % results.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length);
    startTimer();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % results.length);
    startTimer();
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
    startTimer();
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
            onClick={() => handleIndicatorClick(index)}
            aria-label={`Resultado ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
