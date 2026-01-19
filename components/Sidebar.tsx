import React, { useState } from 'react';
import { ExternalLink, Menu, X, Home } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'capability', label: 'Who we are' },
  { id: 'ecosystem', label: 'Altipeak ecosystem' },
  { id: 'vision', label: 'Strategic Vision' },
  { id: 'scaling', label: 'Market Deployment' },
  { id: 'credibility', label: 'Our Global Proof' },
  { id: 'roadmap', label: 'Roadmap' },
];

const Sidebar: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* VERTICAL SIDEBAR NAVIGATION (Desktop) */}
      <nav id="side-nav" className="fixed right-0 top-0 h-screen z-50 hidden lg:flex flex-col justify-center pr-8 pointer-events-none">
        <div className="pointer-events-auto bg-[#0A192F]/40 backdrop-blur-xl border-l border-white/5 p-8 rounded-l-3xl shadow-2xl space-y-8">
          <div className="mb-4">
            <div className="text-xl font-extrabold tracking-tighter uppercase text-white border-b border-white/10 pb-2">
              ALTIPEAK<span className="text-[#D4AF37]">™</span>
            </div>
          </div>
          <ul className="flex flex-col gap-6 items-end">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link text-right text-[10px] uppercase tracking-[0.2em] transition-all duration-300 relative ${
                    activeSection === item.id ? 'text-[#D4AF37] font-black' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]"></div>
                  )}
                </button>
              </li>
            ))}
            <li className="mt-4 pt-4 border-t border-white/10">
              <a 
                href="https://www.altipeakinternational.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-right text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] hover:text-white transition-all duration-300"
              >
                Visit our Consumer Site <ExternalLink size={12} />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* MOBILE MENU BUTTON */}
      <div className="lg:hidden fixed top-6 right-6 z-50">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-[#D4AF37] text-[#0A192F] p-4 rounded-full shadow-2xl hover:bg-white transition-all active:scale-90"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 z-[60] bg-[#0A192F]/98 backdrop-blur-2xl flex flex-col items-center justify-center p-8 space-y-8 transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'
      }`}>
        {navItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-2xl font-bold uppercase tracking-widest transition-colors ${
              activeSection === item.id ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
            }`}
          >
            {item.label}
          </button>
        ))}
        
        <a 
          href="https://www.altipeakinternational.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xl font-bold text-[#D4AF37] uppercase tracking-widest hover:text-white flex items-center gap-3 pt-4 border-t border-white/10"
        >
          <Home size={24} /> Visit our Consumer Site
        </a>
        
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-white/50 hover:text-white p-4"
        >
          <X size={32} />
        </button>
      </div>
    </>
  );
};

export default Sidebar;