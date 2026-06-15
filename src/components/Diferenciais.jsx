import React from 'react';
import { Lightning, Leaf, Users, MapPin, Gift, CheckCircle, Star } from '@phosphor-icons/react';
import './Diferenciais.css';

const diferenciais = [
  { 
    icon: <Lightning size={32} weight="fill" />, 
    title: 'Atendimento Rápido',
    desc: 'Agendamos com agilidade e chegamos no horário'
  },
  { 
    icon: <Leaf size={32} weight="fill" />, 
    title: 'Produtos Profissionais',
    desc: 'Usamos os melhores produtos biodegradáveis do mercado'
  },
  { 
    icon: <Users size={32} weight="fill" />, 
    title: 'Equipe Qualificada',
    desc: 'Profissionais treinados e experientes em cada detalhe'
  },
  { 
    icon: <MapPin size={32} weight="fill" />, 
    title: 'Vamos até você',
    desc: 'Atendimento em domicílio para sua comodidade'
  },
  { 
    icon: <Gift size={32} weight="fill" />, 
    title: 'Orçamento Grátis',
    desc: 'Sem compromisso. Saiba o valor antes de contratar'
  },
  { 
    icon: <CheckCircle size={32} weight="fill" />, 
    title: 'Garantia Total',
    desc: 'Satisfação garantida ou sua grana de volta'
  }
];

export default function Diferenciais() {
  return (
    <section className="diferenciais section-padding" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <header className="section-header-center">
          <span className="section-eyebrow"><Star size={16} weight="fill" style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} /> Vantagens</span>
          <h2 className="section-title">Diferenciais da <span className="blue">Masterclean</span></h2>
          <div className="section-title-underline" />
        </header>

        <div className="diferenciais__grid">
          {diferenciais.map((item, index) => (
            <div key={index} className="diferenciais__card">
              <div className="diferenciais__icon">
                {item.icon}
              </div>
              <h3 className="diferenciais__title">{item.title}</h3>
              <p className="diferenciais__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
