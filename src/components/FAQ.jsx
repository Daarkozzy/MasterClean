import React, { useState } from 'react';
import { CaretDown, Question } from '@phosphor-icons/react';
import './FAQ.css';

const faqs = [
  {
    question: 'Em quanto tempo seca?',
    answer: 'De 4 a 12 horas, dependendo do tecido e clima.'
  },
  {
    question: 'Vocês atendem em domicílio?',
    answer: 'Sim.'
  },
  {
    question: 'A higienização elimina mau cheiro?',
    answer: 'Sim, ajuda a remover odores causados por sujeira, suor, animais e umidade.'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section-padding">
      <div className="container">
        <header className="section-header-center">
          <span className="section-eyebrow"><Question size={16} weight="fill" style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} /> Dúvidas</span>
          <h2 className="section-title">Perguntas <span className="blue">Frequentes</span></h2>
          <div className="section-title-underline" />
        </header>

        <div className="faq__list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq__item ${activeIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq__question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <CaretDown
                  size={20}
                  weight="bold"
                  className="faq__icon"
                />
              </button>
              {activeIndex === index && (
                <div className="faq__answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
