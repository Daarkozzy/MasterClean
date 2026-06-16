import React, { useState } from 'react';
import './ContactMap.css';

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

        {/* Cabeçalho */}
        <div className="section-header-center" style={{ marginBottom: 52 }}>
          <span className="section-eyebrow">Fale Conosco</span>
          <h2 className="section-title">Entre em Contato</h2>
          <div className="section-title-underline" />
          <p className="section-subtitle" style={{ marginTop: 16, marginBottom: 0 }}>
            Solicite seu orçamento, tire dúvidas ou agende uma visita. Respondemos rapidamente!
          </p>
        </div>

        {/* Formulário Centralizado */}
        <div className="contact__form-container" style={{ maxWidth: '600px', margin: '0 auto', marginBottom: '40px' }}>
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
                {loading ? '⏳ Enviando...' : sent ? '✓ Mensagem enviada!' : 'Enviar via WhatsApp →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
