import { useState, useEffect } from 'react';
import { WhatsappLogo } from '@phosphor-icons/react';
import { useScrollTo } from '../../hooks/useScrollTo';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import { trackCTAClick } from '../../utils/analytics';
import { NAV_SECTIONS } from '../../constants/config';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollTo: scrollToElement } = useScrollTo();
  const { openChat } = useWhatsApp();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToElement(e, id);
  };

  const navLinks = [
    { label: 'Início', id: NAV_SECTIONS.home },
    { label: 'Serviços', id: NAV_SECTIONS.services },
    { label: 'Sobre', id: NAV_SECTIONS.about },
    { label: 'Avaliações', id: NAV_SECTIONS.reviews },
    { label: 'Contato', id: NAV_SECTIONS.contact },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} aria-label="Navegação principal">
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#home" className="navbar__logo" onClick={(e) => handleScroll(e, 'home')} aria-label="MasterClean - Voltar para início">
          <span className="navbar__logo-text" aria-hidden="true">
            <span className="navbar__logo-master">Master</span>
            <span className="navbar__logo-clean">Clean</span>
          </span>
        </a>

        {/* Links de navegação desktop */}
        <ul className="navbar__links" role="menubar">
          {navLinks.map(l => (
            <li key={l.id} role="none">
              <a href={`#${l.id}`} onClick={(e) => handleScroll(e, l.id)} className="navbar__link" role="menuitem">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão CTA */}
        <button
          onClick={() => { openChat(); trackCTAClick('Orçamento Grátis', 'Navbar'); }}
          className="navbar__cta btn-gold"
          aria-label="Solicitar orçamento grátis via WhatsApp"
        >
          <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
          Orçamento Grátis
        </button>

        {/* Menu hambúrguer */}
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

      {/* Menu móvel */}
      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`} id="mobile-menu" role="region" aria-label="Menu mobile">
        <ul className="navbar__drawer-links" role="menu">
          {navLinks.map(l => (
            <li key={l.id} role="none">
              <a href={`#${l.id}`} onClick={(e) => handleScroll(e, l.id)} role="menuitem">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => { openChat(); trackCTAClick('Orçamento Grátis', 'Navbar Mobile'); setMenuOpen(false); }}
          className="btn-gold"
          style={{ alignSelf: 'flex-start' }}
          aria-label="Solicitar orçamento grátis via WhatsApp"
        >
          <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
          Orçamento Grátis
        </button>
      </div>
    </nav>
  );
}
