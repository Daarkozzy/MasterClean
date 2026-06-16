import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Início', id: 'home' },
    { label: 'Serviços', id: 'services' },
    { label: 'Antes & Depois', id: 'before-after' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} aria-label="Navegação principal">
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#home" className="navbar__logo" onClick={(e) => scrollTo(e, 'home')} aria-label="MasterClean - Voltar para início">
          <span className="navbar__logo-text" aria-hidden="true">
            <span className="navbar__logo-master">Master</span>
            <span className="navbar__logo-clean">Clean</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="navbar__links" role="menubar">
          {navLinks.map(l => (
            <li key={l.id} role="none">
              <a href={`#${l.id}`} onClick={(e) => scrollTo(e, l.id)} className="navbar__link" role="menuitem">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="https://wa.me/5521992457714?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20grátis."
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__cta btn-gold"
          aria-label="Solicitar orçamento grátis via WhatsApp"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.035c0 2.123.553 4.197 1.602 6.04L0 24l6.117-1.605a11.81 11.81 0 005.925 1.586h.005c6.635 0 12.032-5.396 12.035-12.037a11.85 11.85 0 00-3.535-8.482z"/>
          </svg>
          Orçamento Grátis
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu de navegação"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`} id="mobile-menu" role="region" aria-label="Menu mobile">
        <ul className="navbar__drawer-links" role="menu">
          {navLinks.map(l => (
            <li key={l.id} role="none">
              <a href={`#${l.id}`} onClick={(e) => scrollTo(e, l.id)} role="menuitem">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/5521992457714"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
          style={{ alignSelf: 'flex-start' }}
          aria-label="Solicitar orçamento grátis via WhatsApp"
        >
          Orçamento Grátis
        </a>
      </div>
    </nav>
  );
}
