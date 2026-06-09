import React from 'react';
import { WhatsappLogo } from '@phosphor-icons/react';
import './Footer.css';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
};

const navLinks = [
  { label: 'Quem Somos', id: 'home', type: 'scroll' },
  { label: 'Serviços', id: 'services', type: 'scroll' },
  { label: 'Estofados', id: 'services', type: 'scroll' },
  { label: 'Veículos', id: 'services', type: 'scroll' },
  { label: 'Ônibus', id: 'services', type: 'scroll' },
  { label: 'Náuticos', id: 'services', type: 'scroll' },
  { label: 'Antes & Depois', id: 'before-after', type: 'scroll' },
  { label: 'Simular Preço', id: 'price-estimator', type: 'scroll' },
];

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/oficialmasterclean_?igsh=MWd2a3JmNGw1ODI3dQ==',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="17" cy="7" r="1" fill="currentColor"/></svg>,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1BMUPn7N15/',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5521992457714',
    icon: <WhatsappLogo size={20} weight="fill" />,
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* Gold top accent line */}
      <div className="footer__gold-line" />

      <div className="container footer__container">

        {/* Brand column */}
        <div className="footer__brand">
          <div className="footer__logo">
            <div>
              <span className="footer__logo-name">
                <span className="footer__logo-master">Master</span>
                <span className="footer__logo-clean">Clean</span>
              </span>
              <p className="footer__logo-sub">Higienização Profissional</p>
            </div>
          </div>
          <p className="footer__brand-desc">
            Sofás • Colchões • Carpetes • Tapetes • Estofados • Veículos • Ônibus • Náuticos
          </p>
          <div className="footer__socials">
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="footer__social-btn">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="footer__nav">
          <span className="footer__nav-title">Navegação</span>
          <ul className="footer__nav-list">
            {navLinks.map(l => (
              <li key={l.label}>
                <a href={`#${l.id}`} onClick={e => { e.preventDefault(); scrollTo(l.id); }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div className="footer__contact">
          <span className="footer__nav-title">Contato</span>
          <ul className="footer__contact-list">
            <li>
              <WhatsappLogo size={18} weight="fill" />
              (21) 99245-7714
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              mastercleanwork01@gmail.com
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              CNPJ: 64.805.811/0001-42
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} MasterClean Higienização Profissional. Todos os direitos reservados.</p>
          <p>Rio de Janeiro, RJ — Brasil</p>
        </div>
      </div>
    </footer>
  );
}
