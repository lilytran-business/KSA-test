import React, { useEffect, useRef, useState } from 'react';
import { Flag, Activity, Rocket, ChevronRight } from 'lucide-react';

const roadmap = [
  {
    phase: "Phase 1",
    title: "Pilot Installation",
    icon: Flag,
    color: "#D4AF37",
    desc: "Deploy Pilot Installations for the Government to validate tactical performance outcomes.",
    items: ["Site Analysis", "Modular Tech Assembly", "Baseline Physiological Testing"],
    animation: "slide-in-left"
  },
  {
    phase: "Phase 2",
    title: "Regional Demo Hubs",
    icon: Activity,
    color: "#3881FC",
    desc: "Establish world-class Demonstration Centres in Riyadh and Jeddah for stakeholder engagement.",
    items: ["Stakeholder Showcases", "Local Staff Training", "Protocol Validation"],
    animation: "slide-in-right"
  },
  {
    phase: "Phase 3",
    title: "National Expansion",
    icon: Rocket,
    color: "#D4AF37",
    desc: "Long-term strategic partnership and nationwide franchise expansion across Giga-Projects.",
    items: ["Military Integration", "NEOM Hub Launch", "Academy Certification"],
    animation: "slide-in-bottom"
  }
];

const Timeline: React.FC<{ id: string }> = ({ id }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the section is through the viewport
      const totalDist = rect.height + windowHeight;
      const progress = Math.max(0, Math.min(100, ((windowHeight - rect.top) / totalDist) * 120));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id={id} ref={sectionRef} className="relative py-40 px-6 md:px-12 overflow-hidden bg-[#0A192F]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#3881FC]/5 blur-[200px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto text-center mb-32 relative z-10">
        <h3 className="text-[#3881FC] font-black uppercase tracking-[0.6em] text-[10px] mb-6">Future Trajectory</h3>
        <h2 className="text-5xl md:text-8xl font-black mb-8 italic tracking-tighter uppercase">
          Strategic <span className="gold-text">Roadmap</span>
        </h2>
        <div className="flex flex-col items-center gap-4">
           <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
             Our phased engineering approach ensures maximum knowledge transfer and operational stability for Saudi national partners.
           </p>
           {/* Vision 2030 Alignment Progress Bar */}
           <div className="mt-8 w-full max-w-md h-1 bg-white/5 rounded-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent animate-shimmer"></div>
              <div className="h-full gold-gradient transition-all duration-700 ease-out" style={{ width: `${Math.min(100, scrollProgress)}%` }}></div>
              <div className="absolute -top-6 left-0 w-full flex justify-between px-2">
                <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Baseline</span>
                <span className="text-[8px] font-black gold-text uppercase tracking-widest">Vision 2030 Target</span>
              </div>
           </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative">
        {/* The Active Pulse Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 hidden md:block rounded-full">
           <div 
             className="absolute top-0 left-0 w-full gold-gradient rounded-full transition-all duration-300 ease-out shadow-[0_0_20px_#D4AF37]"
             style={{ height: `${scrollProgress}%` }}
           >
              {/* Pulse head */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_30px_#FFF] animate-pulse"></div>
           </div>
        </div>

        <div className="space-y-32 relative z-10">
          {roadmap.map((step, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col md:flex-row items-center gap-12 group ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Content Card Wrapper with Entrance Animation */}
              <div className={`flex-1 w-full opacity-0 ${step.animation}`}>
                <div 
                  className={`relative p-10 md:p-14 glass-card rounded-[4rem] border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] group/card shadow-2xl`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-[#3881FC]/0 group-hover/card:from-[#D4AF37]/5 group-hover/card:to-[#3881FC]/10 transition-all duration-700 rounded-[4rem]"></div>

                  <div className={`flex flex-col ${idx % 2 === 1 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900 border border-white/10 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] mb-8 group-hover/card:border-[#D4AF37]/40 transition-colors">
                      <step.icon size={14} className="group-hover/card:animate-bounce" />
                      {step.phase}
                    </div>
                    
                    <h4 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 group-hover/card:text-[#D4AF37] transition-colors">{step.title}</h4>
                    <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium group-hover/card:text-slate-200 transition-colors">
                      {step.desc}
                    </p>
                    
                    <ul className={`grid gap-4 w-full ${idx % 2 === 1 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {step.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-center gap-4 text-sm text-slate-300 font-bold uppercase tracking-tight group/item">
                          <div className={`w-3 h-3 rounded-full gold-gradient group-hover/item:scale-150 transition-transform ${idx % 2 === 1 ? 'order-last ml-2' : ''}`}></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* The Central Node */}
              <div className="relative flex items-center justify-center shrink-0">
                 <div className="w-24 h-24 rounded-[2rem] bg-slate-950 border-4 border-slate-900 shadow-2xl z-20 flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-[1.5s] ease-in-out group-hover:border-[#D4AF37]">
                    <step.icon size={32} className="text-[#D4AF37]" />
                 </div>
                 <div className="md:hidden absolute top-full h-32 w-0.5 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
              </div>

              {/* Decorative Spacer for Desktop */}
              <div className="flex-1 hidden md:block">
                 <div className={`flex flex-col gap-6 ${idx % 2 === 1 ? 'items-start' : 'items-end'}`}>
                    <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
                    <div className="w-48 h-px bg-gradient-to-r from-transparent via-[#3881FC]/20 to-transparent opacity-50"></div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-40 text-center">
        <p className="text-slate-500 font-black uppercase tracking-[0.5em] text-[10px] mb-12">Vision 2030 Deployment Milestone Strategy</p>
        <a 
          href="#vision" 
          className="inline-flex items-center gap-4 px-12 py-6 rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:bg-white/10 text-white transition-all duration-500 group"
        >
          <span className="text-sm font-black uppercase tracking-widest">Review Engagement Strategy</span>
          <ChevronRight className="text-[#D4AF37] group-hover:translate-x-2 transition-transform" />
        </a>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite linear;
        }
        
        .visible .slide-in-left {
          animation: slideInLeft 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .visible .slide-in-right {
          animation: slideInRight 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .visible .slide-in-bottom {
          animation: slideInBottom 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInBottom {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Timeline;