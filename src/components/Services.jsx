import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Armchair, Car, Bus, Boat, WhatsappLogo, CheckCircle, ArrowRight } from '@phosphor-icons/react';
import './Services.css';

const tabs = [
  {
    id: 'estofados',
    label: 'Estofados',
    icon: <Armchair size={24} weight="duotone" />,
    title: 'Higienização Profunda de Estofados',
    description: 'Removemos ácaros, fungos e bactérias de sofás, colchões, carpetes e tapetes com equipamentos profissionais.',
    checklist: ['Eliminação de 99.9% de bactérias', 'Remoção de manchas e odores', 'Secagem rápida controlada', 'Aroma exclusivo MasterClean'],
    waMsg: 'estofados',
    image: '/images/estofado.jpeg'
  },
  {
    id: 'veiculos',
    label: 'Veículos',
    icon: <Car size={24} weight="duotone" />,
    title: 'Higienização Automotiva Premium',
    description: 'Cuidado completo para o interior do seu veículo, com revitalização de plásticos e tecidos.',
    checklist: ['Bancos, teto e carpetes', 'Revitalização de plásticos', 'Couro hidratado e protegido'],
    waMsg: 'veicular',
    image: '/carro.svg'
  },
  {
    id: 'onibus',
    label: 'Ônibus',
    icon: <Bus size={24} weight="duotone" />,
    title: 'Higienização Profissional de Bancos de Ônibus',
    description: 'Higienização profunda dos bancos com remoção de manchas, sujeiras e eliminação de odores desagradáveis para conforto máximo dos passageiros.',
    checklist: ['Higienização profunda dos bancos', 'Remoção de manchas e sujeiras', 'Eliminação de odores desagradáveis', 'Redução de ácaros e microrganismos', 'Secagem rápida', 'Atendimento no pátio da empresa', 'Horários flexíveis para não impactar a operação'],
    waMsg: 'ônibus',
    image: '/onibus.svg'
  },
  {
    id: 'nauticos',
    label: 'Náuticos',
    icon: <Boat size={24} weight="duotone" />,
    title: 'Higienização Profissional para Embarcações',
    description: 'Cuidamos de cada detalhe para proporcionar mais conforto, beleza e durabilidade para o interior de sua embarcação.',
    checklist: ['Higienização de poltronas', 'Higienização de carpetes e tapetes náuticos', 'Higienização de estofados gerais', 'Higienização de colchões náuticos', 'Higienização de estofados em geral'],
    waMsg: 'náuticos',
    image: '/nautico.svg'
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('estofados');
  const current = tabs.find(t => t.id === activeTab);

  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <header className="section-header-center">
          <span className="section-eyebrow">Nossas Soluções</span>
          <h2 className="section-title">O que <span className="blue">Fazemos</span></h2>
          <div className="section-title-underline" />
        </header>

        {/* Tab Selector */}
        <div className="services__tabs">
          {tabs.map(t => (
            <button
              key={t.id}
              className={`services__tab-trigger ${activeTab === t.id ? 'active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.icon}
              <span>{t.label}</span>
              {activeTab === t.id && (
                <motion.div layoutId="activeTab" className="services__tab-active-bg" />
              )}
            </button>
          ))}
        </div>

        {/* Active Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="services__detail-card card"
          >
            <div className="services__detail-content">
              <h3 className="services__detail-title">{current.title}</h3>
              <p className="services__detail-desc">{current.description}</p>
              
              <div className="services__checklist-grid">
                {current.checklist.map((item, i) => (
                  <div key={i} className="services__checklist-item">
                    <CheckCircle size={20} weight="fill" className="blue" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a 
                href={`https://wa.me/5521992457714?text=Olá! Gostaria de um orçamento para ${current.waMsg}.`}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento <WhatsappLogo size={20} weight="fill" />
              </a>
            </div>
            
            <div className="services__detail-visual">
              {/* Abstract decorative element for the visual side */}
              <div className="services__visual-blob" />
              {current.image && (
                <img src={current.image} alt={current.title} className="services__visual-image" />
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
