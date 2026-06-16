import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NauticHighlight from './components/NauticHighlight';
import Services from './components/Services';
import Diferenciais from './components/Diferenciais';
import About from './components/About';
import FAQ from './components/FAQ';
import Reviews from './components/Reviews';
import ResultsCarousel from './components/ResultsCarousel';

// Lazy load componentes abaixo da fold
const PriceEstimator = lazy(() => import('./components/PriceEstimator'));
const ContactMap = lazy(() => import('./components/ContactMap'));
const Footer = lazy(() => import('./components/Footer'));
const BeforeAfterSlider = lazy(() => import('./components/BeforeAfterSlider'));

// Loading fallback simples
const SectionLoader = () => (
  <div style={{ padding: '80px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>
    Carregando...
  </div>
);

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main id="main-content">
        <Hero />
        <NauticHighlight />
        <Services />
        <Diferenciais />
        
        <Suspense fallback={<SectionLoader />}>
          <section id="before-after" className="section-padding" style={{ background: 'var(--blue-900)', color: 'var(--white)', overflow: 'hidden' }}>
            <div className="container">
              <header className="section-header-center">
                <span className="section-eyebrow" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--brand-gold)', borderColor: 'rgba(249,184,0,0.3)' }}>Resultados Reais</span>
                <h2 className="section-title" style={{ color: 'var(--white)', marginBottom: '24px' }}>O Poder da <span className="gold">Higienização</span></h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', marginBottom: '48px', lineHeight: '1.7' }}>
                  Veja a diferença brutal entre um estofado contaminado e um renovado pela nossa equipe. Mais do que estética, é saúde para seu lar.
                </p>
              </header>
              <ResultsCarousel />
            </div>
          </section>
        </Suspense>

        <Reviews />

        <Suspense fallback={<SectionLoader />}>
          <PriceEstimator />
        </Suspense>

        <FAQ />
        <About />

        <Suspense fallback={<SectionLoader />}>
          <ContactMap />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
