import React from 'react';
import { Layers, Microscope, GraduationCap, BarChart, Dumbbell, Zap, Waves, Bike, Activity, ArrowRight } from 'lucide-react';

const differentiators = [
  {
    icon: Layers,
    title: "Integrated Ecosystems",
    desc: "We transcend component sales, delivering harmonized Altitude, Climate, and Recovery modules controlled by a single intelligence layer.",
    delay: "0s"
  },
  {
    icon: Microscope,
    title: "Validated Science",
    desc: "Every installation is engineered against peer-reviewed metabolic and physiological data sets from global elite sport institutions.",
    delay: "0.1s"
  },
  {
    icon: GraduationCap,
    title: "KSA Localization",
    desc: "Establishment of the Altipeak™ Academy KSA to certify and empower the local Saudi workforce in environmental science.",
    delay: "0.2s"
  },
  {
    icon: BarChart,
    title: "Industrial Scalability",
    desc: "Proprietary high-volume compression tech designed for continuous high-load operations in Tier-1 Giga-Project hubs.",
    delay: "0.3s"
  }
];

const trainingConcepts = [
  {
    name: "Altibox™",
    tagline: "High-Intensity Boxing",
    desc: "Boxing + strength conditioning at altitude (up to 3,000m) or heat (30–40°C).",
    icon: Dumbbell,
    badge: "NEW: Coming 2025",
    img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "AltiHITT™",
    tagline: "Superior Conditioning",
    desc: "Advanced interval treadmill + strength training. The apex alternative to traditional studio models.",
    icon: Zap,
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "AltiRow™",
    tagline: "Elite Rowing Eco",
    desc: "Rowing-based conditioning for universities, military, and elite sport units.",
    icon: Waves,
    img: "https://images.unsplash.com/photo-1544606111-99a3809029a1?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "BIKE LAB™",
    tagline: "Performance Cycling",
    desc: "Lab-grade cycling environments simulating altitude + extreme heat variables.",
    icon: Bike,
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "RUN LAB™",
    tagline: "Gait & Stress Analysis",
    desc: "Performance running analysis in environmental extremes (Altitude/Humidity).",
    icon: Activity,
    img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=600"
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1599330919241-11910526012e?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=400",
];

const WhyDifferent: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="section-reveal relative py-32 overflow-hidden bg-[#0A192F] group">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to right, #3881FC 1px, transparent 1px), linear-gradient(to bottom, #3881FC 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="absolute bottom-10 left-0 w-full whitespace-nowrap pointer-events-none select-none z-0 opacity-[0.03] transform -translate-x-20">
        <h2 className="text-[20rem] font-black italic uppercase tracking-tighter text-white">
          Engineered for Dominance • Engineered for Dominance
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <h3 className="text-[#3881FC] font-black uppercase tracking-[0.5em] text-xs mb-6">The Altipeak™ Edge</h3>
          <h2 className="text-6xl md:text-8xl font-black mb-8 italic tracking-tighter leading-none">
            Human <br/>
            <span className="gold-text">Dominance</span>
          </h2>
          <div className="w-48 h-2 gold-gradient rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
          {differentiators.map((diff, idx) => (
            <div 
              key={idx} 
              className="group relative p-10 rounded-[3rem] glass-card border-white/5 hover:border-[#D4AF37]/60 transition-all duration-700 hover:-translate-y-4 animate-float shadow-2xl"
              style={{ animationDelay: diff.delay }}
            >
              <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/5 transition-colors duration-700 rounded-[3rem]"></div>
              
              <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-[#D4AF37]/30 mb-8 flex items-center justify-center text-[#D4AF37] shadow-xl group-hover:rotate-[360deg] transition-all duration-1000">
                <diff.icon size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase tracking-tight text-white group-hover:text-[#D4AF37] transition-colors">{diff.title}</h4>
              <p className="text-slate-400 text-lg leading-relaxed font-medium group-hover:text-slate-200 transition-colors">{diff.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-40">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h3 className="text-[#D4AF37] font-black uppercase tracking-[0.4em] text-xs mb-4">Market Deployment</h3>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                Scalable Training <br/> <span className="text-[#3881FC]">Ecosystems</span>
              </h2>
            </div>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs border-r-2 border-[#3881FC] pr-6 text-right">
              Optimized for National <br/> Rollouts & Franchise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingConcepts.map((concept, idx) => (
              <div 
                key={idx} 
                className="group relative h-[450px] rounded-[3rem] overflow-hidden border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-700 shadow-2xl"
              >
                <div className="absolute inset-0 z-0">
                  <img src={concept.img} alt={concept.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/60 to-transparent"></div>
                </div>

                <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <concept.icon size={28} />
                    </div>
                    {concept.badge && (
                      <span className="px-3 py-1 bg-[#3881FC] text-white text-[10px] font-black uppercase tracking-widest rounded-full animate-pulse">
                        {concept.badge}
                      </span>
                    )}
                  </div>
                  
                  <div>
                    <h5 className="text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-2">{concept.tagline}</h5>
                    <h4 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">{concept.name}</h4>
                    <p className="text-slate-300 text-sm font-medium leading-relaxed mb-6 group-hover:text-white transition-colors">{concept.desc}</p>
                    <div className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                      Explore Spec <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative -mx-6 md:-mx-12 lg:-mx-24 mb-16 group/scroller">
          <div className="flex overflow-hidden whitespace-nowrap">
            <div className="flex animate-scroll-fast gap-6 py-4 hover:[animation-play-state:paused]">
              {[...galleryImages, ...galleryImages].map((img, idx) => (
                <div 
                  key={idx} 
                  className="flex-none w-[300px] h-[400px] rounded-[2.5rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105 shadow-2xl"
                >
                  <img src={img} className="w-full h-full object-cover" alt={`Altipeak Showcase ${idx}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r from-[#0A192F] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-40 bg-gradient-to-l from-[#0A192F] to-transparent z-10 pointer-events-none"></div>
        </div>

        <div className="text-center">
          <p className="text-slate-500 font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Proprietary Engineering • ISO 9001 • CE Certified</p>
          <a href="#contact" className="inline-flex items-center gap-4 bg-[#3881FC]/10 hover:bg-[#3881FC]/20 border border-[#3881FC]/30 px-12 py-6 rounded-full transition-all duration-500 shadow-xl group">
             <span className="text-sm font-black uppercase tracking-widest text-white">Scale Your National Strategy</span>
             <ArrowRight className="text-[#D4AF37] group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes scroll-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-fast {
          animation: scroll-fast 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyDifferent;