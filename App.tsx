import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Ecosystem from './components/Ecosystem';
import StrategicFramework from './components/StrategicFramework';
import WhyDifferent from './components/WhyDifferent';
import Proof from './components/Proof';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import PillarModal from './components/PillarModal';
import PortfolioModal from './components/PortfolioModal';
import EcosystemMapModal from './components/EcosystemMapModal';
import { PillarData } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPillar, setSelectedPillar] = useState<PillarData | null>(null);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isEcosystemMapOpen, setIsEcosystemMapOpen] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          entry.target.classList.add('visible');
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    // Observe all sections with IDs
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0A192F] text-slate-100 overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-white">
      <Sidebar activeSection={activeSection} />
      <main className="w-full">
        <Hero id="home" />
        <WhoWeAre id="capability" onOpenPortfolio={() => setIsPortfolioOpen(true)} />
        <Ecosystem id="ecosystem" onOpenMap={() => setIsEcosystemMapOpen(true)} />
        <StrategicFramework id="vision" onSelectPillar={setSelectedPillar} />
        <WhyDifferent id="scaling" />
        <Proof id="credibility" />
        <Timeline id="roadmap" />
        <Contact id="engagement" />
        
        <footer className="py-16 px-6 border-t border-slate-800/50 bg-[#0A192F] flex flex-col items-center gap-8">
          <div className="flex items-center gap-8 opacity-80">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Saudi_Vision_2030_logo.svg/1200px-Saudi_Vision_2030_logo.svg.png" 
                 alt="Saudi Vision 2030" className="h-16 w-auto invert" />
            <div className="w-px h-12 bg-slate-700"></div>
            <span className="text-2xl font-bold gold-text tracking-tighter">ALTIPEAK™</span>
          </div>
          <p className="text-slate-500 text-sm text-center max-w-lg leading-relaxed">
            © 2024 Altipeak™ International. Pioneering environmental simulation for human evolution. Aligned with Saudi Vision 2030 initiatives.
          </p>
        </footer>
      </main>
      
      {selectedPillar && <PillarModal pillar={selectedPillar} onClose={() => setSelectedPillar(null)} />}
      {isPortfolioOpen && <PortfolioModal onClose={() => setIsPortfolioOpen(false)} />}
      {isEcosystemMapOpen && <EcosystemMapModal onClose={() => setIsEcosystemMapOpen(false)} />}
    </div>
  );
};

export default App;