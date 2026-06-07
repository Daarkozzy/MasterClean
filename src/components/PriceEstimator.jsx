import React, { useState, useEffect } from 'react';
import { WhatsappLogo, SealCheck, Clock } from '@phosphor-icons/react';
import './PriceEstimator.css';

const PRICES = {
  sofaSeat: 30,
  colchao: { none: 0, single: 120, double: 180, king: 220 },
  carpeteM2: 15,
  tapeteM2: 25,
  poltrona: 80,
  vehicle: { small: 220, medium: 280, large: 350 },
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
  const [total, setTotal]                 = useState(0);

  useEffect(() => {
    let p = 0;
    if (category === 'estofados') {
      p += sofaSeats * PRICES.sofaSeat;
      p += PRICES.colchao[colchaoType];
      p += carpeteSize * PRICES.carpeteM2;
      p += tapeteSize * PRICES.tapeteM2;
      p += poltronas * PRICES.poltrona;
    } else {
      p += PRICES.vehicle[vehicleType];
      if (withPlastic) p += PRICES.plastic;
    }
    setTotal(p);
  }, [category, sofaSeats, colchaoType, carpeteSize, tapeteSize, poltronas, vehicleType, withPlastic]);

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
    } else {
      const vLabels = { small: 'Pequeno (Hatch)', medium: 'Médio (Sedan/SUV)', large: 'Grande (SUV 7L/Van)' };
      msg += `*Tipo:* Higienização Veicular\n`;
      msg += `- Veículo: ${vLabels[vehicleType]}\n`;
      msg += `- Revitalização de plásticos: ${withPlastic ? 'Sim' : 'Não'}\n`;
    }
    msg += `\n*Estimativa:* R$ ${total},00\n\nGostaria de confirmar disponibilidade!`;
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

        <div className="estimator__card card">

          {/* ── Inputs Column ── */}
          <div className="estimator__inputs">

            {/* Category toggle */}
            <div className="estimator__group">
              <label className="estimator__label">Tipo de Serviço</label>
              <div className="estimator__toggle">
                {['estofados','veiculos'].map(c => (
                  <button
                    key={c}
                    type="button"
                    className={`estimator__toggle-btn ${category === c ? 'estimator__toggle-btn--active' : ''}`}
                    onClick={() => setCategory(c)}
                  >
                    {c === 'estofados' ? '🛋️ Estofados' : '🚗 Veículos'}
                  </button>
                ))}
              </div>
            </div>

            {category === 'estofados' ? (
              <>
                {/* Sofá slider */}
                <div className="estimator__group">
                  <label className="estimator__label-flex">
                    <span>Sofá (lugares)</span>
                    <span className="estimator__value-chip">{sofaSeats} assentos</span>
                  </label>
                  <input type="range" min="0" max="10" value={sofaSeats}
                    onChange={e => setSofaSeats(+e.target.value)}
                    className="estimator__range" />
                  <div className="estimator__range-labels"><span>0</span><span>5</span><span>10</span></div>
                </div>

                {/* Colchão */}
                <div className="estimator__group">
                  <label className="estimator__label">Colchão</label>
                  <select value={colchaoType} onChange={e => setColchaoType(e.target.value)} className="estimator__select">
                    <option value="none">Sem colchão</option>
                    <option value="single">Solteiro</option>
                    <option value="double">Casal</option>
                    <option value="king">King / Queen</option>
                  </select>
                </div>

                {/* Poltronas counter */}
                <div className="estimator__group">
                  <label className="estimator__label">Poltronas</label>
                  <div className="estimator__counter">
                    <button type="button" onClick={() => setPoltronas(Math.max(0, poltronas - 1))}>−</button>
                    <span>{poltronas}</span>
                    <button type="button" onClick={() => setPoltronas(poltronas + 1)}>+</button>
                  </div>
                </div>

                {/* Carpete + Tapete */}
                <div className="estimator__group-row">
                  <div className="estimator__group">
                    <label className="estimator__label">Carpete (m²)</label>
                    <input type="number" min="0" value={carpeteSize}
                      onChange={e => setCarpeteSize(Math.max(0, +e.target.value || 0))}
                      className="estimator__input" />
                  </div>
                  <div className="estimator__group">
                    <label className="estimator__label">Tapete (m²)</label>
                    <input type="number" min="0" value={tapeteSize}
                      onChange={e => setTapeteSize(Math.max(0, +e.target.value || 0))}
                      className="estimator__input" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="estimator__group">
                  <label className="estimator__label">Porte do Veículo</label>
                  <select value={vehicleType} onChange={e => setVehicleType(e.target.value)} className="estimator__select">
                    <option value="small">Pequeno — Hatch (HB20, Onix…)</option>
                    <option value="medium">Médio — Sedan/SUV (Corolla, Compass…)</option>
                    <option value="large">Grande — SUV 7L / Van / Caminhonete</option>
                  </select>
                </div>

                <div className="estimator__group">
                  <label className="estimator__checkbox">
                    <input type="checkbox" checked={withPlastic} onChange={e => setWithPlastic(e.target.checked)} />
                    <span className="estimator__checkmark" />
                    <div>
                      <strong>Revitalização de Plásticos</strong>
                      <p>Restaura cor e brilho dos plásticos internos (+R$ 50)</p>
                    </div>
                  </label>
                </div>
              </>
            )}
          </div>

          {/* ── Price Display Column ── */}
          <div className="estimator__display">
            <div className="estimator__display-inner">
              <div className="estimator__receipt-header">
                <span className="estimator__display-label">Resumo do Orçamento</span>
                <div className="estimator__receipt-line" />
              </div>

              <div className="estimator__price">
                <span className="estimator__currency">R$</span>
                <span className="estimator__amount">{total}</span>
                <span className="estimator__cents">,00</span>
              </div>

              <div className="estimator__features-list">
                <div className="estimator__feature-item">
                  <SealCheck size={18} weight="fill" /> 
                  <span>Produtos Biodegradáveis</span>
                </div>
                <div className="estimator__feature-item">
                  <Clock size={18} weight="fill" />
                  <span>Secagem Rápida</span>
                </div>
              </div>

              <p className="estimator__disclaimer">
                *Preço sujeito a alteração após vistoria técnica no local.
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
