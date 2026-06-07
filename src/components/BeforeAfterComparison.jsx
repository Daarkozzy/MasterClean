import React from 'react';
import './BeforeAfterComparison.css';

export default function BeforeAfterComparison() {
  return (
    <div className="bac-container">
      {/* Before */}
      <div className="bac-item">
        <div className="bac-image-wrapper">
          <img 
            src="/images/upholstery_cleaning.jpg" 
            alt="Estofado sujo - Antes da higienização" 
            className="bac-image"
          />
          <span className="bac-badge bac-badge-before">ANTES</span>
        </div>
      </div>

      {/* After */}
      <div className="bac-item">
        <div className="bac-image-wrapper">
          <img 
            src="/images/car_cleaning.jpg" 
            alt="Estofado limpo - Depois da higienização" 
            className="bac-image"
          />
          <span className="bac-badge bac-badge-after">DEPOIS</span>
        </div>
      </div>
    </div>
  );
}
