import React, { useState, useEffect } from 'react';
import { Star } from '@phosphor-icons/react';
import './Reviews.css';

const reviews = [
  {
    id: 1,
    image: '/Avaliações/avaliaçao1.png',
    alt: 'Avaliação cliente 1',
  },
  {
    id: 2,
    image: '/Avaliações/avaliaçao2.jpg',
    alt: 'Avaliação cliente 2',
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play a cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="reviews section-padding">
      <div className="container">
        <header className="section-header-center">
          <span className="section-eyebrow"><Star size={16} weight="fill" style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} /> O que dizem</span>
          <h2 className="section-title">Avaliações de <span className="blue">Clientes</span></h2>
          <div className="section-title-underline" />
          <p className="section-subtitle" style={{ marginTop: 16, marginBottom: 0 }}>
            Confira o que nossos clientes falam sobre o trabalho da MasterClean
          </p>
        </header>

        <div className="reviews__carousel">
          <div className="reviews__carousel-container">
            <img 
              src={reviews[currentIndex].image} 
              alt={reviews[currentIndex].alt} 
              className="reviews__carousel-image"
            />
          </div>
        </div>

        <div className="reviews__indicators">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`reviews__indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
