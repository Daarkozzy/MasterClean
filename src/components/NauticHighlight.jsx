import React from 'react';
import { Boat, X, CheckCircle } from '@phosphor-icons/react';
import './NauticHighlight.css';

export default function NauticHighlight() {
  return (
    <section className="nautic-highlight">
      <div className="nautic-highlight__container">
        <div className="nautic-highlight__content">
          <div className="nautic-highlight__text">
            <span className="nautic-highlight__eyebrow">
              <Boat size={18} weight="fill" /> Especialidade Náutica
            </span>
            
            <h2 className="nautic-highlight__title">
              Limpeza Profunda para <span className="highlight-gold">Estofados Náuticos</span>
            </h2>

            <p className="nautic-highlight__description">
              Higienização completa de embarcações com produtos e técnicas especializadas para remover os efeitos nocivos da maresia.
            </p>

            <div className="nautic-highlight__block">
              <h3 className="nautic-highlight__subtitle">
                <X size={20} weight="bold" className="icon-danger" />
                Você sabia que a maresia causa:
              </h3>
              <ul className="nautic-highlight__list">
                <li>Manchas permanentes e descoloração</li>
                <li>Acúmulo de mofo prejudicial à saúde</li>
                <li>Odores fortes e persistentes</li>
                <li>Deterioração dos tecidos</li>
              </ul>
            </div>

            <div className="nautic-highlight__block">
              <h3 className="nautic-highlight__subtitle">
                <CheckCircle size={20} weight="fill" className="icon-success" />
                Com a MasterClean resolvemos isso!
              </h3>
              <ul className="nautic-highlight__list">
                <li>Remoção completa de sal e maresia</li>
                <li>Eliminação de mofo e bactérias</li>
                <li>Neutralização de odores</li>
                <li>Proteção duradoura</li>
              </ul>
            </div>
          </div>

          <div className="nautic-highlight__illustration">
            {/* Espaço para ilustração */}
          </div>
        </div>
      </div>
    </section>
  );
}
