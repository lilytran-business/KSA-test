import React from 'react';
import { Trophy, Shield, Microscope, Settings, TrendingUp, CheckCircle2 } from 'lucide-react';

const trustTiles = [
  {
    icon: Trophy,
    title: "Olympic Partner",
    highlight: "Strategic Partner",
    desc: "France, Ireland, and Thailand National Councils.",
    delay: "delay-[100ms]"
  },
  {
    icon: Shield,
    title: "Military Elite",
    highlight: "Tier-1 Trusted",
    desc: "Operational in classified Special Forces hubs.",
    delay: "delay-[200ms]"
  },
  {
    icon: Microscope,
    title: "Clinical Validation",
    highlight: "University Validated",
    desc: "Metabolic study oversight by Emory University.",
    delay: "delay-[300ms]"
  },
  {
    icon: Settings,
    title: "Sullair® Tech",
    highlight: "Proprietary Power",
    desc: "Industrial-grade simulation compression tech.",
    delay: "delay-[400ms]"
  },
  {
    icon: TrendingUp,
    title: "Market Success",
    highlight: "94%+ Fill Rate",
    desc: "Proven commercial dominance in urban hubs.",
    delay: "delay-[500ms]"
  }
];

const galleryImages = [
  { 
    url: "https://images.unsplash.com/photo-1599330919241-11910526012e?auto=format&fit=crop&q=80&w=600", 
    caption: "Official Partnership: French Olympic Council",
    size: "col-span-2 row-span-2"
  },
  { 
    url: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80&w=600", 
    caption: "Military Readiness Certification v4.0",
    size: "col-span-1 row-span-1"
  },
  { 
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600", 
    caption: "Clinical Research Wing Deployment",
    size: "col-span-1 row-span-1"
  },
  { 
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600", 
    caption: "ISO Precision Engineering Audit",
    size: "col-span-2 row-span-1"
  }
];

const Proof: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="section-reveal relative py-32 overflow-hidden bg-[#0A192F]">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#3881FC]/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <h3 className="text-[#3881FC] font-black uppercase tracking-[0.5em] text-xs mb-6">Credential Portfolio</h3>
          <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-none mb-8">
            Global <br/>
            <span className="gold-text uppercase">Wall of Trust</span>
          </h2>
          <div className="w-32 h-1.5 gold-gradient rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            {trustTiles.map((tile, idx) => (
              <div 
                key={idx} 
                className={`group relative p-6 rounded-[2rem] glass-card border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] cursor-default animate-in slide-in-from-left-10 ${tile.delay}`}
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-all duration-500 shadow-lg">
                    <tile.icon size={28} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#3881FC] group-hover:text-[#D4AF37] transition-colors">{tile.highlight}</span>
                    <h4 className="text-xl font-black text-white uppercase tracking-tight">{tile.title}</h4>
                    <p className="text-slate-400 text-sm font-medium mt-1 leading-relaxed">{tile.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-12 p-10 bg-[#112240] rounded-[2.5rem] border-l-8 border-[#D4AF37] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none">
                <Trophy size={120} />
              </div>
              <p className="italic text-slate-200 text-xl font-medium leading-relaxed mb-8 relative z-10">
                "Altipeak's technology doesn't just simulate altitude; it replicates the physiological adaptations required 
                for elite operational success in any environment."
              </p>
              <div className="relative z-10">
                <p className="font-black gold-text uppercase tracking-widest text-sm mb-1">Official Endorsement</p>
                <p className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: 'serif', fontStyle: 'italic' }}>— Noel O'Brien</p>
                <p className="text-xs font-black text-[#3881FC] uppercase tracking-[0.2em] mt-1">Senior Performance Analyst, French Olympic Council</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-10 duration-1000">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx} 
                className={`${img.size} relative rounded-[2rem] overflow-hidden border border-[#D4AF37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group hover:-translate-y-2 transition-all duration-700`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%]">
                  <div className="bg-[#112240]/90 backdrop-blur-md border border-[#D4AF37]/30 px-4 py-2 rounded-lg text-center shadow-lg transform group-hover:scale-105 transition-transform">
                    <p className="text-[9px] font-black text-white uppercase tracking-widest truncate">
                      {img.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-span-2 p-8 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 group hover:bg-[#3881FC]/5 transition-all">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full gold-gradient p-0.5">
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                    <CheckCircle2 className="text-[#D4AF37]" size={32} />
                  </div>
                </div>
                <div>
                  <h5 className="text-white font-black uppercase tracking-tight text-lg leading-tight">Verified Engineering <br/> <span className="text-[#3881FC]">ISO 9001 Compliant</span></h5>
                </div>
              </div>
              <button className="px-8 py-4 rounded-full border border-white/10 text-white font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all">
                View Certificates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;