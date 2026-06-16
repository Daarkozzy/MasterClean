import React from 'react';
import { Boat } from '@phosphor-icons/react';
import './NauticHighlight.css';

export default function NauticHighlight() {
  return (
    <section className="nautic-highlight">
      <div className="nautic-highlight__container">
        <div className="nautic-highlight__header">
          <span className="nautic-highlight__badge">
            <Boat size={16} weight="fill" /> Especialidade Náutica
          </span>
          
          <h2 className="nautic-highlight__title">
            Limpeza Profunda para <span className="nautic-highlight__highlight">Estofados Náuticos</span>
          </h2>

          <p className="nautic-highlight__description">
            Higienização completa de embarcações com produtos e técnicas especializadas para remover os efeitos nocivos da maresia.
          </p>
        </div>

        <div className="nautic-highlight__content">
          {/* Coluna esquerda - Problemas */}
          <div className="nautic-highlight__column">
            <h3 className="nautic-highlight__column-title">
              <span className="nautic-highlight__icon nautic-highlight__icon--danger">!</span>
              Desafios da Maresia
            </h3>
            <ul className="nautic-highlight__list">
              <li>Manchas permanentes e descoloração</li>
              <li>Acúmulo de mofo prejudicial à saúde</li>
              <li>Odores fortes e persistentes</li>
              <li>Deterioração acelerada dos tecidos</li>
            </ul>
          </div>

          {/* Coluna direita - Soluções */}
          <div className="nautic-highlight__column">
            <h3 className="nautic-highlight__column-title">
              <span className="nautic-highlight__icon nautic-highlight__icon--success">✓</span>
              Nossas Soluções
            </h3>
            <ul className="nautic-highlight__list">
              <li>Remoção completa de sal e maresia</li>
              <li>Eliminação de mofo e bactérias</li>
              <li>Neutralização de odores persistentes</li>
              <li>Proteção duradoura dos tecidos</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
