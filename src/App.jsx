import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PriceEstimator from './components/PriceEstimator';
import ContactMap from './components/ContactMap';
import Footer from './components/Footer';
import BeforeAfterSlider from './components/BeforeAfterSlider';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        
        <section id="before-after" className="section-padding" style={{ background: 'var(--blue-900)', color: 'var(--white)', overflow: 'hidden' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <div>
              <span className="section-eyebrow" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--brand-gold)', borderColor: 'rgba(249,184,0,0.3)' }}>Resultados Reais</span>
              <h2 className="section-title" style={{ color: 'var(--white)', marginBottom: '24px' }}>O Poder da <span className="gold">Higienização</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', marginBottom: '32px', lineHeight: '1.7' }}>
                Veja a diferença brutal entre um estofado contaminado e um renovado pela nossa equipe. Mais do que estética, é saúde para seu lar.
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '4px solid rgba(255,255,255,0.05)' }}>
                <BeforeAfterSlider 
                  beforeImage="/images/sujo.jpeg"
                  afterImage="/images/limpo.jpeg"
                  title="Deslize para comparar"
                />
              </div>
            </div>
          </div>
        </section>

        <PriceEstimator />
        <ContactMap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
