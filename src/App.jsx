import { lazy, Suspense } from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import NauticHighlight from './components/sections/NauticHighlight';
import Services from './components/sections/Services';
import Diferenciais from './components/sections/Diferenciais';
import About from './components/sections/About';
import FAQ from './components/sections/FAQ';
import Reviews from './components/sections/Reviews';
import ResultsCarousel from './components/sections/ResultsCarousel';

// Carregamento lazy de componentes abaixo da dobra
const PriceEstimator = lazy(() => import('./components/sections/PriceEstimator'));
const ContactMap = lazy(() => import('./components/sections/ContactMap'));
const Footer = lazy(() => import('./components/common/Footer'));

// Fallback de carregamento simples
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
        <section id="home"><Hero /></section>
        <NauticHighlight />
        <section id="services"><Services /></section>
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

        <section id="reviews"><Reviews /></section>

        <Suspense fallback={<SectionLoader />}>
          <PriceEstimator />
        </Suspense>

        <section id="faq"><FAQ /></section>
        <section id="about"><About /></section>

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
