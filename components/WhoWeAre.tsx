import React from 'react';
import { ShieldCheck, Award, Globe2, Cog, ArrowRight } from 'lucide-react';

const badges = [
  { 
    icon: ShieldCheck, 
    title: "CE Certified", 
    desc: "Rigorous European safety standards meeting critical infrastructure demands.",
    delay: "delay-100"
  },
  { 
    icon: Award, 
    title: "ISO Aligned", 
    desc: "Global quality management excellence for precision manufacturing and ops.",
    delay: "delay-200"
  },
  { 
    icon: Globe2, 
    title: "Global Deployment", 
    desc: "Battle-tested systems operational in 25+ nations across five continents.",
    delay: "delay-300"
  },
  { 
    icon: Cog, 
    title: "Applied Engineering", 
    desc: "End-to-end bespoke environmental simulation designed for extreme load.",
    delay: "delay-400"
  },
];

const showcaseImages = [
  { url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600", caption: "Olympic Council Hub" },
  { url: "https://images.unsplash.com/photo-1599330919241-11910526012e?auto=format&fit=crop&q=80&w=600", caption: "Special Forces Room" },
  { url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600", caption: "Clinical Rehab Unit" },
  { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600", caption: "Elite Performance Lab" },
  { url: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=600", caption: "Altitude Training Pod" },
  { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600", caption: "Thermal Simulation" },
  { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600", caption: "Corporate Wellness Hub" },
  { url: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80&w=600", caption: "Military Readiness" },
  { url: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=600", caption: "Advanced Recovery" },
  { url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=600", caption: "Pro-Athlete Studio" },
];

interface WhoWeAreProps {
  id: string;
  onOpenPortfolio: () => void;
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({ id, onOpenPortfolio }) => {
  return (
    <section id={id} className="section-reveal relative py-32 world-map-bg bg-opacity-5 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A192F]/85 -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-20">
          <h3 className="text-[#3881FC] font-black uppercase tracking-[0.4em] text-xs mb-6">Foundations of Authority</h3>
          <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
            WHO WE ARE: <br/>
            <span className="gold-text">15+ Years of Engineering Mastery</span>
          </h2>
          <div className="w-24 h-2 gold-gradient rounded-full mb-10"></div>
          <p className="text-slate-400 text-xl leading-relaxed font-medium">
            Since 2008, Altipeak™ has pioneered the science of human capability through advanced environmental control. 
            We are not just a technology provider; we are architects of evolution, serving the world's most elite organizations 
            with ISO-certified precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {badges.map((badge, idx) => (
            <div 
              key={idx} 
              className={`group badge-pop glass-card p-10 rounded-[2.5rem] border-[#D4AF37]/10 flex flex-col items-center text-center transition-all ${badge.delay}`}
            >
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-[#D4AF37] blur-2xl opacity-10 group-hover:opacity-30 transition-opacity"></div>
                <badge.icon size={80} className="text-[#D4AF37] gold-glow-icon relative z-10" strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase tracking-tight text-white">{badge.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-semibold">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="relative group/album mb-12">
          <div className="flex overflow-x-auto scrollbar-hide gap-6 py-4 px-2 snap-x snap-mandatory">
            {showcaseImages.map((img, idx) => (
              <div 
                key={idx} 
                className="flex-none w-[280px] md:w-[350px] h-[400px] relative rounded-[2.5rem] overflow-hidden snap-start shadow-2xl border border-white/5 group-hover/album:grayscale transition-all duration-700 hover:!grayscale-0 hover:!scale-[1.02] hover:border-[#D4AF37]/40"
              >
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] mb-1">Deployment ID 0{idx + 1}</p>
                  <h4 className="text-xl font-black text-white uppercase tracking-tight">{img.caption}</h4>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A192F] to-transparent pointer-events-none z-10"></div>
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A192F] to-transparent pointer-events-none z-10"></div>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={onOpenPortfolio}
            className="group flex items-center gap-4 bg-white/5 hover:bg-[#3881FC]/10 border border-white/10 hover:border-[#3881FC]/40 px-10 py-5 rounded-full transition-all duration-500 shadow-xl"
          >
            <div className="flex flex-col items-start">
              <span className="text-[10px] text-[#D4AF37] font-black uppercase tracking-widest mb-1 text-left">Explore Full Portfolio</span>
              <span className="text-sm font-black uppercase tracking-widest text-white">View All Facilities & Projects</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#3881FC]/20 flex items-center justify-center text-[#3881FC] group-hover:bg-[#3881FC] group-hover:text-white transition-all duration-500">
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default WhoWeAre;