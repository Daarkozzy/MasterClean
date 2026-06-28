import React from 'react';
import {
  Drop, Snowflake, Wind, Scissors,
  Sparkle, ShieldCheck, Anchor,
  Compass, Boat
} from '@phosphor-icons/react';
import './NauticHighlight.css';

// Importação do banner final
import imageBanner from '../../assets/nautic-banner.jpg';

const challenges = [
  { icon: <Drop size={24} weight="thin" />, text: 'Manchas permanentes e descoloração por salinidade' },
  { icon: <Snowflake size={24} weight="thin" />, text: 'Acúmulo de mofo e microrganismos prejudiciais' },
  { icon: <Wind size={24} weight="thin" />, text: 'Odores fortes, persistentes e ambiente abafado' },
  { icon: <Scissors size={24} weight="thin" />, text: 'Deterioração acelerada dos tecidos e estofamentos' },
];

const solutions = [
  {
    icon: <Sparkle size={20} weight="thin" />,
    title: 'Limpeza Profunda',
    desc: 'Remoção completa de sal e resíduos de maresia.',
  },
  {
    icon: <ShieldCheck size={20} weight="thin" />,
    title: 'Sanitização',
    desc: 'Eliminação de mofo, bactérias e odores.',
  },
  {
    icon: <Anchor size={20} weight="thin" />,
    title: 'Blindagem Têxtil',
    desc: 'Proteção duradoura para estofados e tecidos.',
  },
];

export default function NauticHighlight() {
  const handleVerMais = (e) => {
    e.preventDefault();
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const btn = document.querySelector('[data-tab="nauticos"]');
        if (btn) btn.click();
      }, 600);
    }
  };

  return (
    <section className="nh" aria-labelledby="nh-title">

      {/* ── Intro textual ── */}
      <div className="nh__intro-wrap">
        <div className="nh__intro">
          <span className="nh__eyebrow">Maresia &amp; Proteção</span>
          <h2 id="nh-title" className="nh__intro-title">
            Preserve a Excelência<br />da sua Embarcação
          </h2>
          <p className="nh__intro-desc">
            Higienização completa de embarcações com produtos e técnicas
            especializadas para remover os efeitos nocivos da maresia.
          </p>
        </div>
        {/* Bússola decorativa em marca d'água */}
        <div className="nh__compass-wrap" aria-hidden="true">
          <Compass size={280} weight="thin" className="nh__compass-icon" />
        </div>
      </div>

      {/* ── Cards Simétricos Sem Imagem ── */}
      <div className="nh__cards-wrap">
        <div className="nh__cards">

          {/* Card da Esquerda (Desafios - Escuro) */}
          <div className="nh__card nh__card--dark">
            <h3 className="nh__card-title nh__card-title--serif">Desafios da Maresia</h3>
            <div className="nh__challenges-grid">
              {challenges.map((c, i) => (
                <div key={i} className="nh__challenge-item">
                  <span className="nh__challenge-icon">{c.icon}</span>
                  <p className="nh__challenge-text">{c.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card da Direita (Soluções - Claro) */}
          <div className="nh__card nh__card--light">
            <div className="nh__card-header">
              <span className="nh__card-icon-tag nh__card-icon-tag--success">
                <Boat size={20} weight="duotone" />
              </span>
              <h3 className="nh__card-heading">Nossas Soluções</h3>
            </div>

            <ul className="nh__solutions-list">
              {solutions.map((s, i) => (
                <li key={i} className="nh__solution-item">
                  <span className="nh__solution-icon">{s.icon}</span>
                  <div>
                    <strong className="nh__solution-name">{s.title}</strong>
                    <p className="nh__solution-desc">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Banner Foto no Final ── */}
      <div className="nh__banner" aria-label="Ver serviço náutico">
        <div 
          className="nh__banner-bg" 
          style={{ backgroundImage: `url(${imageBanner})` }}
          aria-hidden="true" 
        />
        <div className="nh__banner-overlay" aria-hidden="true" />
        <div className="nh__banner-content">
          <h3 className="nh__banner-title">Cuidado Superior para Náuticos</h3>
          <p className="nh__banner-desc">
            A excelência técnica que sua embarcação merece, protegendo seu patrimônio dos rigores do oceano.
          </p>
          <a
            href="#services"
            className="nh__banner-btn"
            onClick={handleVerMais}
            aria-label="Ver serviço de higienização náutica"
          >
            Ver serviço náutico
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

    </section>
  );
}
