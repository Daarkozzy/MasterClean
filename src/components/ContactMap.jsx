import React, { useState } from 'react';
import './ContactMap.css';

const contactInfo = [
  {
    id: 'whatsapp',
    href: 'https://wa.me/5521992457714',
    label: '(21) 99245-7714',
    sublabel: 'WhatsApp — clique para chamar',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 2.54.95 4.87 2.5 6.6L2 22l5.74-1.57C9.29 21.73 10.61 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.25 11.25c-.26.65-.74 1.27-1.46 1.75-.72.48-1.67.72-2.84.72-1.68 0-3.26-.45-4.63-1.27l-.43-.26-3.2.84.84-3.2-.26-.43c-.82-1.37-1.27-2.95-1.27-4.63 0-1.17.24-2.12.72-2.84.48-.72 1.1-1.2 1.75-1.46.65-.26 1.37-.39 2.15-.39 1.68 0 3.26.45 4.63 1.27l.43.26 3.2-.84-.84 3.2.26.43c.82 1.37 1.27 2.95 1.27 4.63 0 .78-.13 1.5-.39 2.15z"/>
      </svg>
    ),
    colorClass: 'contact-info-item--green',
  },
  {
    id: 'email',
    href: 'mailto:mastercleanwork01@gmail.com',
    label: 'mastercleanwork01@gmail.com',
    sublabel: 'E-mail profissional',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    colorClass: 'contact-info-item--blue',
  },
  {
    id: 'cnpj',
    href: null,
    label: 'CNPJ: 64.805.811/0001-42',
    sublabel: 'Empresa registrada',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-8-6z"/>
      </svg>
    ),
    colorClass: 'contact-info-item--gold',
  },
];

export default function ContactMap() {
  const [form, setForm]   = useState({ nome: '', email: '', assunto: '', mensagem: '' });
  const [sent, setSent]   = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [focus, setFocus] = useState('');

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!form.email.trim()) newErrors.email = 'E-mail é obrigatório';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'E-mail inválido';
    if (!form.assunto.trim()) newErrors.assunto = 'Assunto é obrigatório';
    if (!form.mensagem.trim()) newErrors.mensagem = 'Mensagem é obrigatória';
    if (form.mensagem.trim().length < 10) newErrors.mensagem = 'Mensagem deve ter pelo menos 10 caracteres';
    
    return newErrors;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    
    try {
      // Construir mensagem formatada para WhatsApp
      const message = `*Novo Orçamento - MasterClean*%0A%0A` +
        `*Nome:* ${encodeURIComponent(form.nome)}%0A` +
        `*E-mail:* ${encodeURIComponent(form.email)}%0A` +
        `*Assunto:* ${encodeURIComponent(form.assunto)}%0A` +
        `*Mensagem:* ${encodeURIComponent(form.mensagem)}`;
      
      // Abrir WhatsApp com a mensagem pré-formatada
      const whatsappURL = `https://wa.me/5521992457714?text=${message}`;
      
      // Simular delay antes de redirecionar
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Abrir WhatsApp em nova aba
      window.open(whatsappURL, '_blank');
      
      setSent(true);
      setForm({ nome: '', email: '', assunto: '', mensagem: '' });
      setErrors({});
      
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      setErrors({ submit: 'Erro ao enviar mensagem. Tente novamente.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">

        {/* Header */}
        <div className="section-header-center" style={{ marginBottom: 52 }}>
          <span className="section-eyebrow">Fale Conosco</span>
          <h2 className="section-title">Entre em Contato</h2>
          <div className="section-title-underline" />
          <p className="section-subtitle" style={{ marginTop: 16, marginBottom: 0 }}>
            Solicite seu orçamento, tire dúvidas ou agende uma visita. Respondemos rapidamente!
          </p>
        </div>

        {/* ── Top grid: form + map ── */}
        <div className="contact__grid">

          {/* Form */}
          <div className="contact__form-wrapper card">
            <h3>Envie uma mensagem</h3>
            {errors.submit && <div style={{ color: '#ff4757', marginBottom: '16px', fontSize: '0.9rem' }}>⚠ {errors.submit}</div>}
            {sent && <div style={{ color: '#2ed573', marginBottom: '16px', fontSize: '0.9rem', fontWeight: 500 }}>✓ Mensagem enviada com sucesso! Entraremos em contato em breve.</div>}
            <form onSubmit={handleSubmit} className="contact__form">
              {[
                { name: 'nome',    type: 'text',  placeholder: 'Seu Nome' },
                { name: 'email',   type: 'email', placeholder: 'Seu E-mail' },
                { name: 'assunto', type: 'text',  placeholder: 'Assunto' },
              ].map(f => (
                <div key={f.name} className={`contact__field-wrapper ${focus === f.name ? 'focused' : ''} ${errors[f.name] ? 'error' : ''}`}>
                  <input
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    value={form[f.name]}
                    onChange={handleChange}
                    onFocus={() => setFocus(f.name)}
                    onBlur={() => setFocus('')}
                    required
                    disabled={loading}
                    className="contact__input"
                    aria-label={f.placeholder}
                    aria-invalid={!!errors[f.name]}
                  />
                  {errors[f.name] && <span className="contact__error-text" role="alert">{errors[f.name]}</span>}
                </div>
              ))}

              <div className={`contact__field-wrapper ${focus === 'mensagem' ? 'focused' : ''} ${errors.mensagem ? 'error' : ''}`}>
                <textarea
                  name="mensagem"
                  placeholder="Sua mensagem..."
                  rows="5"
                  value={form.mensagem}
                  onChange={handleChange}
                  onFocus={() => setFocus('mensagem')}
                  onBlur={() => setFocus('')}
                  required
                  disabled={loading}
                  className="contact__textarea"
                  aria-label="Sua mensagem"
                  aria-invalid={!!errors.mensagem}
                />
                <div className="contact__char-count">{form.mensagem.length}/500</div>
                {errors.mensagem && <span className="contact__error-text" role="alert">{errors.mensagem}</span>}
              </div>

              <button 
                type="submit" 
                className={`btn-primary contact__submit ${sent ? 'contact__submit--sent' : ''}`}
                disabled={loading || sent}
                aria-busy={loading}
              >
                {loading ? '⏳ Enviando...' : sent ? '✓ Mensagem enviada!' : 'Enviar Mensagem →'}
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="contact__map-wrapper card">
            <iframe
              title="Localização MasterClean"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235042.98022568685!2d-43.43388774736327!3d-22.91117388462038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1717800000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="contact__iframe"
            />
          </div>
        </div>

        {/* ── Contact info strip ── */}
        <div className="contact__info-strip">
          {contactInfo.map(item => {
            const Wrapper = item.href ? 'a' : 'div';
            return (
              <Wrapper
                key={item.id}
                href={item.href}
                target={item.href ? '_blank' : undefined}
                rel={item.href ? 'noopener noreferrer' : undefined}
                className={`contact-info-item card ${item.colorClass}`}
              >
                <div className="contact-info-item__icon">{item.icon}</div>
                <div className="contact-info-item__text">
                  <strong>{item.label}</strong>
                  <span>{item.sublabel}</span>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
