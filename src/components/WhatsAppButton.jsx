import React from 'react';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const phoneNumber = '5521992457714';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-button"
      title="Fale conosco pelo WhatsApp"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <img src="/whatsapp.svg" alt="WhatsApp" className="whatsapp-icon" />
      <span>Fale conosco</span>
    </a>
  );
}
