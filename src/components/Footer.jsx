import React from 'react';
import './Footer.css';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
};

const navLinks = [
  { label: 'Quem Somos', id: 'home' },
  { label: 'Serviços', id: 'services' },
  { label: 'Antes & Depois', id: 'before-after' },
  { label: 'Simular Preço', id: 'price-estimator' },
  { label: 'Trabalhe Conosco', id: 'contact' },
  { label: 'Política de Privacidade', id: 'contact' },
];

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="17" cy="7" r="1" fill="currentColor"/></svg>,
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5521992457714',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 2.54.95 4.87 2.5 6.6L2 22l5.74-1.57C9.29 21.73 10.61 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.41 0-2.73-.36-3.88-.99l-.28-.15-2.89.8.8-2.88-.15-.28C4.36 14.73 4 13.41 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.3-12.3l-5.4 5.4-2.5-2.5c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l3 3c.3.3.8.3 1.1 0l6-6c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0z"/></svg>,
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
            <img src="/images/logo_circular.jpg" alt="MasterClean" className="footer__logo-img" />
            <div>
              <span className="footer__logo-name">
                <span className="footer__logo-master">Master</span>
                <span className="footer__logo-clean">Clean</span>
              </span>
              <p className="footer__logo-sub">Higienização Profissional</p>
            </div>
          </div>
          <p className="footer__brand-desc">
            Sofás • Colchões • Carpetes • Tapetes • Estofados • Veículos
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966C16.59 1.988 14.113.96 11.487.96c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.463 3.39 1.337 4.888L1.93 20.23l4.717-1.076zM17.72 14.51c-.34-.17-2.01-.99-2.32-1.1-.31-.11-.53-.17-.75.17-.22.34-.87 1.1-.1.17.65.65.65.17-.11.34.34-.17.68-.45.89-.66.22-.21.22-.34.33-.56.11-.22.06-.41-.03-.58-.09-.17-.75-1.8-1.03-2.48-.27-.66-.55-.57-.75-.58-.19-.01-.41-.01-.63-.01-.22 0-.58.08-.88.41-.3.33-1.15 1.13-1.15 2.75 0 1.62 1.18 3.19 1.35 3.42.17.22 2.33 3.56 5.65 4.99.79.34 1.4.54 1.88.7.8.25 1.52.22 2.1.13.64-.1 2.01-.82 2.29-1.58.28-.76.28-1.41.2-1.55-.08-.14-.3-.22-.64-.39z"/></svg>
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
