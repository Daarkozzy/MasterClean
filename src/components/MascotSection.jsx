import React from 'react';
import { motion } from 'framer-motion';
import { Bug, Virus, Biohazard, Wind, ShieldCheck, Star } from '@phosphor-icons/react';
import './MascotSection.css';

const eliminados = [
  { name: 'Ácaros', desc: 'Causadores de alergias', icon: <Bug size={28} /> },
  { name: 'Fungos', desc: 'Proliferam no úmido', icon: <Virus size={28} /> },
  { name: 'Bactérias', desc: 'Infeções de pele', icon: <Biohazard size={28} /> },
  { name: 'Mau Cheiro', desc: 'Suor e líquidos', icon: <Wind size={28} /> },
];

export default function MascotSection() {
  return (
    <section className="mascot section-padding">
      <div className="container">
        <div className="mascot__card-full card">
          {/* Left: Threats */}
          <div className="mascot__threats">
            <span className="section-eyebrow">Saúde da Família</span>
            <h2 className="mascot__title">O que <span className="blue">Eliminamos</span></h2>
            <p className="mascot__subtitle">Sua casa livre de agentes nocivos invisíveis a olho nu.</p>
            
            <div className="mascot__threats-grid">
              {eliminados.map((item, i) => (
                <div key={i} className="mascot__threat-item">
                  <div className="mascot__threat-icon">{item.icon}</div>
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Specialist & Seal */}
          <div className="mascot__hero">
            <div className="mascot__img-box">
              <img src="/images/logo_circular.jpg" alt="MasterClean Specialist" className="mascot__img" />
              <div className="mascot__seal-premium">
                <Star size={24} weight="fill" />
                <span>QUALIDADE<br/>GARANTIDA</span>
              </div>
            </div>
            
            <div className="mascot__guarantee">
              <div className="mascot__guarantee-item">
                <ShieldCheck size={32} weight="duotone" className="gold" />
                <div>
                  <h3>Proteção Total</h3>
                  <p>Barreira protetora que prolonga a limpeza por muito mais tempo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
