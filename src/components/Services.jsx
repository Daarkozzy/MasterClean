import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Armchair, Car, Bus, Boat, WhatsappLogo, CheckCircle } from '@phosphor-icons/react';
import './Services.css';

const tabs = [
  {
    id: 'estofados',
    label: 'Estofados',
    icon: <Armchair size={24} weight="duotone" />,
    title: 'Higienização de Sofás, Colchões, Poltronas e Tapetes',
    description: 'Limpeza profissional completa de sofás, colchões, poltronas, tapetes e carpetes com equipamentos de alto desempenho.',
    checklist: ['Sofás e poltronas', 'Colchões (solteiro, casal, king)', 'Tapetes e carpetes', 'Remoção de ácaros e bactérias', 'Eliminação de odores', 'Secagem rápida controlada'],
    waMsg: 'estofados e sofás',
    image: '/images/estofado.jpeg'
  },
  {
    id: 'veiculos',
    label: 'Veículos',
    icon: <Car size={24} weight="duotone" />,
    title: 'Limpeza de Estofados Automotivos',
    description: 'Higienização completa do interior do seu veículo, com cuidado especial em bancos e estofados.',
    checklist: ['Limpeza dos bancos e tecidos', 'Higiene dos tapetes internos', 'Remoção de odores', 'Revitalização de plásticos'],
    waMsg: 'veículos',
    image: '/carro.svg'
  },
  {
    id: 'onibus',
    label: 'Ônibus',
    icon: <Bus size={24} weight="duotone" />,
    title: 'Higienização de Ônibus',
    description: 'Limpeza profissional completa de ônibus com técnicas especializadas para ambientes maiores.',
    checklist: ['Higienização de bancos', 'Limpeza de interiores', 'Remoção de sujeira acumulada', 'Eliminação de odores'],
    waMsg: 'ônibus',
    image: '/onibus.svg'
  },
  {
    id: 'nauticos',
    label: 'Náuticos',
    icon: <Boat size={24} weight="duotone" />,
    title: 'Higienização Náutica (Lanchas e Barcos)',
    description: 'Cuidamos do interior de embarcações com técnicas especializadas e produtos específicos para ambiente marítimo.',
    checklist: ['Higienização de poltronas náuticas', 'Limpeza de carpetes e tapetes', 'Higiene de estofados', 'Proteção contra maresia', 'Cuidado com acabamentos especiais'],
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
