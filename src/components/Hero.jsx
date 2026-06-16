import React from 'react';
import { motion } from 'framer-motion';
import { WhatsappLogo, ArrowRight } from '@phosphor-icons/react';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__pattern" aria-hidden="true" />
      
      <div className="container hero__container">
        {/* ── Content Side ── */}
        <motion.div 
          className="hero__content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span className="section-eyebrow hero__eyebrow" variants={itemVariants}>
            ✦ Higienização Profissional Premium
          </motion.span>

          <motion.h1 className="hero__title" variants={itemVariants}>
            Limpeza Profunda para <span className="hero__title--gold">Estofados</span>, <span className="hero__title--gold">Veículos</span>, <span className="hero__title--gold">Ônibus</span> e <span className="hero__title--gold">Náuticos</span>
          </motion.h1>

          <motion.p className="hero__description" variants={itemVariants}>
            Eliminamos ácaros, fungos e bactérias com tecnologia de ponta. Proporcione saúde e um ambiente renovado para sua família.
          </motion.p>

          <motion.div className="hero__actions" variants={itemVariants}>
            <button className="btn-gold hero__cta-main" onClick={() => scrollTo('contact')}>
              <WhatsappLogo size={20} weight="fill" />
              ORÇAMENTO GRÁTIS
            </button>

            <button className="btn-outline-white" onClick={() => scrollTo('services')}>
              Ver Serviços
              <ArrowRight size={18} weight="bold" />
            </button>
          </motion.div>
        </motion.div>

        {/* ── Image Side ── */}
        <motion.div 
          className="hero__image-box"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <img 
            src="/images/clean.png" 
            alt="Profissionais Master Clean" 
            className="hero__image"
          />
        </motion.div>
      </div>

      {/* Elegant Wave Divider */}
      <div className="hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,40 C320,100 1120,0 1440,60 L1440,100 L0,100 Z" fill="var(--bg-page)"/>
        </svg>
      </div>
    </section>
  );
}
