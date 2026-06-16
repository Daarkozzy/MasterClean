import React, { useState, useEffect } from 'react';
import { WhatsappLogo, SealCheck, Clock, Armchair, Car, Bus, Boat } from '@phosphor-icons/react';
import './PriceEstimator.css';

const PRICES = {
  sofaSeat: 30,
  colchao: { none: 0, single: 120, double: 180, king: 220 },
  carpeteM2: 15,
  tapeteM2: 25,
  poltrona: 80,
  vehicle: { small: 220, medium: 280, large: 350 },
  onibus: { base: 500 },
  nauticos: { base: 400 },
  plastic: 50,
};

export default function PriceEstimator() {
  const [category, setCategory]           = useState('estofados');
  const [sofaSeats, setSofaSeats]         = useState(3);
  const [colchaoType, setColchaoType]     = useState('double');
  const [carpeteSize, setCarpeteSize]     = useState(10);
  const [tapeteSize, setTapeteSize]       = useState(5);
  const [poltronas, setPoltronas]         = useState(1);
  const [vehicleType, setVehicleType]     = useState('medium');
  const [withPlastic, setWithPlastic]     = useState(true);
  const [onibusType, setOnibusType]       = useState('medio');
  const [nauticoType, setNauticoType]     = useState('pequeno');
  const [withPetCleaning, setWithPetCleaning] = useState(false);
  const [total, setTotal]                 = useState(0);

  useEffect(() => {
    let p = 0;
    if (category === 'estofados') {
      p += sofaSeats * PRICES.sofaSeat;
      p += PRICES.colchao[colchaoType];
      p += carpeteSize * PRICES.carpeteM2;
      p += tapeteSize * PRICES.tapeteM2;
      p += poltronas * PRICES.poltrona;
    } else if (category === 'veiculos') {
      p += PRICES.vehicle[vehicleType];
      if (withPlastic) p += PRICES.plastic;
    } else if (category === 'onibus') {
      p += PRICES.onibus.base;
    } else if (category === 'nauticos') {
      p += PRICES.nauticos.base;
    }
    setTotal(p);
  }, [category, sofaSeats, colchaoType, carpeteSize, tapeteSize, poltronas, vehicleType, withPlastic, onibusType, nauticoType]);

  const sendWhatsApp = () => {
    let msg = 'Olá MasterClean! Simulei um orçamento:\n\n';
    if (category === 'estofados') {
      msg += `*Tipo:* Higienização de Estofados\n`;
      if (sofaSeats > 0) msg += `- Sofá: ${sofaSeats} assentos\n`;
      const colLabels = { single: 'Solteiro', double: 'Casal', king: 'King Size' };
      if (colchaoType !== 'none') msg += `- Colchão: ${colLabels[colchaoType]}\n`;
      if (carpeteSize > 0) msg += `- Carpete: ${carpeteSize}m²\n`;
      if (tapeteSize > 0) msg += `- Tapete: ${tapeteSize}m²\n`;
      if (poltronas > 0) msg += `- Poltronas: ${poltronas}x\n`;
    } else if (category === 'veiculos') {
      const vLabels = { small: 'Pequeno (Hatch)', medium: 'Médio (Sedan/SUV)', large: 'Grande (SUV 7L/Van)' };
      msg += `*Tipo:* Higienização Veicular\n`;
      msg += `- Veículo: ${vLabels[vehicleType]}\n`;
      msg += `- Revitalização de plásticos: ${withPlastic ? 'Sim' : 'Não'}\n`;
    } else if (category === 'onibus') {
      msg += `*Tipo:* Higienização de Ônibus\n`;
      msg += `- Tamanho: ${onibusType}\n`;
    } else if (category === 'nauticos') {
      msg += `*Tipo:* Higienização de Náuticos\n`;
      msg += `- Tamanho: ${nauticoType}\n`;
    }
    if (withPetCleaning) {
      msg += `\n✓ *Limpeza Pet Adicional:* Sim\n`;
    }
    msg += `\nGostaria de receber um orçamento personalizado!`;
    window.open(`https://wa.me/5521992457714?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="price-estimator" className="estimator section-padding">
      <div className="container">

        <div className="section-header-center" style={{ marginBottom: 52 }}>
          <span className="section-eyebrow">Calcule agora</span>
          <h2 className="section-title">Simulador de Orçamento</h2>
          <div className="section-title-underline" />
          <p className="section-subtitle" style={{ marginTop: 16, marginBottom: 0 }}>
            Selecione os serviços e receba uma estimativa em segundos. Confirme diretamente pelo WhatsApp!
          </p>
        </div>

        {/* Abas de serviço no mobile */}
        <div className="estimator__tabs-container">
          <button 
            className={`estimator__tab-btn ${category === 'estofados' ? 'active' : ''}`}
            onClick={() => setCategory('estofados')}
          >
            <Armchair size={18} weight="fill" />
            Estofados
          </button>
          <button 
            className={`estimator__tab-btn ${category === 'veiculos' ? 'active' : ''}`}
            onClick={() => setCategory('veiculos')}
          >
            <Car size={18} weight="fill" />
            Veículos
          </button>
          <button 
            className={`estimator__tab-btn ${category === 'onibus' ? 'active' : ''}`}
            onClick={() => setCategory('onibus')}
          >
            <Bus size={18} weight="fill" />
            Ônibus
          </button>
          <button 
            className={`estimator__tab-btn ${category === 'nauticos' ? 'active' : ''}`}
            onClick={() => setCategory('nauticos')}
          >
            <Boat size={18} weight="fill" />
            Náuticos
          </button>
        </div>

        <div className="estimator__card card">

          {/* ── Coluna de Inputs ── */}
          <div className="estimator__inputs">

            {category === 'estofados' ? (
              <>
                {/* Sofá slider */}
                <div className="estimator__group">
                  <label className="estimator__checkbox">
                    <input type="checkbox" checked={sofaSeats > 0} onChange={e => setSofaSeats(e.target.checked ? 3 : 0)} />
                    <span className="estimator__checkmark" />
                    <label className="estimator__label-flex" style={{ margin: 0 }}>
                      <span>Sofá (lugares)</span>
                      <span className="estimator__value-chip">{sofaSeats} assentos</span>
                    </label>
                  </label>
                  {sofaSeats > 0 && (
                    <div className="estimator__seats-grid">
                      {Array.from({ length: 11 }, (_, i) => i + 2).map(num => (
                        <button
                          key={num}
                          type="button"
                          className={`estimator__seat-btn ${sofaSeats === num ? 'active' : ''}`}
                          onClick={() => setSofaSeats(num)}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Colchão */}
                <div className="estimator__group">
                  <label className="estimator__checkbox">
                    <input type="checkbox" checked={colchaoType !== 'none'} onChange={e => setColchaoType(e.target.checked ? 'double' : 'none')} />
                    <span className="estimator__checkmark" />
                    <div>
                      <strong>Colchão</strong>
                    </div>
                  </label>
                  {colchaoType !== 'none' && (
                    <select value={colchaoType} onChange={e => setColchaoType(e.target.value)} className="estimator__select">
                      <option value="single">Solteiro</option>
                      <option value="double">Casal</option>
                      <option value="king">King / Queen</option>
                    </select>
                  )}
                </div>

                {/* Poltronas counter */}
                <div className="estimator__group">
                  <label className="estimator__checkbox">
                    <input type="checkbox" checked={poltronas > 0} onChange={e => setPoltronas(e.target.checked ? 1 : 0)} />
                    <span className="estimator__checkmark" />
                    <div>
                      <strong>Poltronas</strong>
                    </div>
                  </label>
                  {poltronas > 0 && (
                    <div className="estimator__counter">
                      <button type="button" onClick={() => setPoltronas(Math.max(0, poltronas - 1))}>−</button>
                      <span>{poltronas}</span>
                      <button type="button" onClick={() => setPoltronas(poltronas + 1)}>+</button>
                    </div>
                  )}
                </div>

                {/* Carpete + Tapete */}
                <div className="estimator__group">
                  <label className="estimator__checkbox">
                    <input type="checkbox" checked={carpeteSize > 0} onChange={e => setCarpeteSize(e.target.checked ? 10 : 0)} />
                    <span className="estimator__checkmark" />
                    <div>
                      <strong>Carpete (m²)</strong>
                    </div>
                  </label>
                  {carpeteSize > 0 && (
                    <input type="number" min="0" value={carpeteSize}
                      onChange={e => setCarpeteSize(Math.max(0, +e.target.value || 0))}
                      className="estimator__input" />
                  )}
                </div>

                <div className="estimator__group">
                  <label className="estimator__checkbox">
                    <input type="checkbox" checked={tapeteSize > 0} onChange={e => setTapeteSize(e.target.checked ? 5 : 0)} />
                    <span className="estimator__checkmark" />
                    <div>
                      <strong>Tapete (m²)</strong>
                    </div>
                  </label>
                  {tapeteSize > 0 && (
                    <input type="number" min="0" value={tapeteSize}
                      onChange={e => setTapeteSize(Math.max(0, +e.target.value || 0))}
                      className="estimator__input" />
                  )}
                </div>
              </>
            ) : category === 'veiculos' ? (
              <>
                <div className="estimator__group">
                  <label className="estimator__label">Porte do Veículo</label>
                  <select value={vehicleType} onChange={e => setVehicleType(e.target.value)} className="estimator__select">
                    <option value="small">Pequeno (Hatch)</option>
                    <option value="medium">Médio (Sedan/SUV)</option>
                    <option value="large">Grande (SUV/Van)</option>
                  </select>
                </div>

                <div className="estimator__group">
                  <label className="estimator__checkbox">
                    <input type="checkbox" checked={withPlastic} onChange={e => setWithPlastic(e.target.checked)} />
                    <span className="estimator__checkmark" />
                    <div>
                      <strong>Revitalização de Plásticos</strong>
                      <p>Restaura cor e brilho dos plásticos internos</p>
                    </div>
                  </label>
                </div>
              </>
            ) : category === 'onibus' ? (
              <>
                <div className="estimator__group">
                  <label className="estimator__label">Tamanho do Ônibus</label>
                  <select value={onibusType} onChange={e => setOnibusType(e.target.value)} className="estimator__select">
                    <option value="pequeno">Pequeno (Micro-ônibus)</option>
                    <option value="medio">Médio (Ônibus Padrão)</option>
                    <option value="grande">Grande (Ônibus Duplo)</option>
                  </select>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 8 }}>
                  Higienização completa de bancos e interiores com equipe profissional.
                </p>
              </>
            ) : category === 'nauticos' ? (
              <>
                <div className="estimator__group">
                  <label className="estimator__label">Tamanho da Embarcação</label>
                  <select value={nauticoType} onChange={e => setNauticoType(e.target.value)} className="estimator__select">
                    <option value="pequeno">Pequeno (até 20 pés)</option>
                    <option value="medio">Médio (20 a 30 pés)</option>
                    <option value="grande">Grande (acima de 30 pés)</option>
                  </select>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 8 }}>
                  Higienização de poltronas, estofados e interiores náuticos com proteção especial.
                </p>
              </>
            ) : null}

            {/* Serviço Adicional: Limpeza Pet */}
            <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--gray-100)' }}>
              <label className="estimator__checkbox">
                <input type="checkbox" checked={withPetCleaning} onChange={e => setWithPetCleaning(e.target.checked)} />
                <span className="estimator__checkmark" />
                <div>
                  <strong>Limpeza Pet</strong>
                  <p>Remove pelos, odores e bactérias deixadas por animais de estimação</p>
                </div>
              </label>
            </div>

          </div>

          {/* ── Coluna de Exibição de Preço ── */}
          <div className="estimator__display">
            <div className="estimator__display-inner">
              <div className="estimator__receipt-header">
                <span className="estimator__display-label">Envie sua Simulação</span>
                <div className="estimator__receipt-line" />
              </div>

              <div className="estimator__features-list" style={{ marginBottom: '32px' }}>
                <div className="estimator__feature-item">
                  <SealCheck size={18} weight="fill" /> 
                  <span>Produtos Biodegradáveis</span>
                </div>
                <div className="estimator__feature-item">
                  <Clock size={18} weight="fill" />
                  <span>Secagem Rápida</span>
                </div>
              </div>

              <p className="estimator__disclaimer" style={{ marginBottom: '24px' }}>
                Preencha os campos acima e envie pelo WhatsApp para receber um orçamento personalizado!
              </p>

              <button type="button" className="btn-gold estimator__cta" onClick={sendWhatsApp}>
                <WhatsappLogo size={22} weight="fill" />
                Confirmar via WhatsApp
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
