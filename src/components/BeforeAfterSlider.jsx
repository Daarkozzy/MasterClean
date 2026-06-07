import React, { useState } from 'react';
import './BeforeAfterSlider.css';

export default function BeforeAfterSlider({
  beforeImage = '/images/sofa_before_after.png',
  afterImage  = '/images/sofa_before_after.png',
  title = 'Arraste para comparar o resultado'
}) {
  const [pos, setPos] = useState(50);

  return (
    <div className="ba-wrapper">
      <div className="ba-container">
        {/* After (background) */}
        <div className="ba-image-after">
          <img src={afterImage} alt="Depois da higienização" />
          <span className="ba-badge ba-badge-after">DEPOIS</span>
        </div>

        {/* Before (clipped foreground) */}
        <div
          className="ba-image-before"
          style={{ clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)` }}
        >
          <img src={beforeImage} alt="Antes da higienização" />
          <span className="ba-badge ba-badge-before">ANTES</span>
        </div>

        {/* Handle */}
        <div className="ba-handle" style={{ left: `${pos}%` }}>
          <div className="ba-handle-btn">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M8 7l-5 5 5 5V7zm8 0v10l5-5-5-5z"/>
            </svg>
          </div>
        </div>

        <input
          type="range" min="0" max="100"
          value={pos}
          onChange={e => setPos(Number(e.target.value))}
          className="ba-input"
          aria-label="Comparar antes e depois"
        />
      </div>
      <p className="ba-instruction">{title}</p>
    </div>
  );
}
