import React from 'react';
import { Landmark, Trophy, HeartPulse, Settings, Globe, Microscope, Map, ShieldCheck, Award, Zap, HardHat } from 'lucide-react';

interface BranchProps {
  icon: React.ElementType;
  title: string;
  focus: string;
  items: string[];
  delay: string;
  isEngineering?: boolean;
}

const Branch: React.FC<BranchProps> = ({ icon: Icon, title, focus, items, delay, isEngineering }) => (
  <div className={`group relative p-8 rounded-[2.5rem] glass-card border-white/5 hover:border-[#D4AF37]/50 transition-all duration-700 hover:-translate-y-2 flex flex-col h-full ${delay}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-transparent to-[#3881FC]/0 group-hover:from-[#D4AF37]/5 group-hover:to-[#3881FC]/10 transition-all duration-700 rounded-[2.5rem]"></div>
    
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-all duration-500 shadow-xl">
        <Icon size={28} />
      </div>
      
      <h4 className="text-xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-[#D4AF37] transition-colors">{title}</h4>
      <p className="text-[#3881FC] text-[10px] font-black uppercase tracking-[0.2em] mb-4 border-l-2 border-[#D4AF37] pl-3">{focus}</p>
      
      <ul className="space-y-2 mb-6">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-xs text-slate-400 font-medium">
            <Zap size={10} className="mt-1 text-[#D4AF37] opacity-50" />
            {item}
          </li>
        ))}
      </ul>

      {isEngineering && (
        <div className="mt-auto pt-6 border-t border-white/10">
          <div className="p-5 rounded-2xl bg-slate-950/50 border border-[#D4AF37]/20 flex items-center gap-4 group/sullair">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
              <HardHat size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black text-white uppercase tracking-tight">Sullair Partnership</p>
              <p className="text-[9px] text-slate-500 font-bold leading-tight mt-1">
                Strategic Technical Support Partner <br/>
                <span className="text-[#D4AF37]/80">(Service & Maintenance Only)</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);

const Ecosystem: React.FC<{ id: string; onOpenMap: () => void }> = ({ id, onOpenMap }) => {
  const branches = [
    {
      icon: Landmark,
      title: "National Strategic Systems",
      focus: "Government & Vision 2030",
      items: ["Ministry of Sport & Defence Directives", "National Health & Fitness Initiatives", "Military & Police Performance Ecosystems", "Direct Giga-Project Alignment (NEOM/Qiddiya)"],
      delay: "delay-100"
    },
    {
      icon: Trophy,
      title: "Elite High Performance",
      focus: "Olympic & Professional Sport",
      items: ["Saudi Olympic & Paralympic Committee (SOPC)", "National Team Conditioning Protocols", "Elite Sport Academies Infrastructure", "Specialized Bio-Feedback Performance Labs"],
      delay: "delay-200"
    },
    {
      icon: HeartPulse,
      title: "Medical & Longevity",
      focus: "Clinical Healthcare & Rehab",
      items: ["Tier-1 Hospital Integration (Alhabib/Fakeeh)", "Post-Surgical & Spinal Recovery Units", "Preventive Population Health Programs", "Metabolic Health & Longevity Research"],
      delay: "delay-300"
    },
    {
      icon: Settings,
      title: "Engineering & Machinery",
      focus: "Global IP & Technical Compliance",
      items: ["Global IP Ownership (15+ Years R&D)", "Industrial-Grade Precision Simulation", "Bespoke Environmental Control Logic", "CE Certified & ISO Aligned Manufacturing"],
      delay: "delay-400",
      isEngineering: true
    },
    {
      icon: Globe,
      title: "Commercial Scale",
      focus: "Franchise & Urban Deployment",
      items: ["Altipeak™ Performance Centres (Franchise)", "High-End Commercial Gym Ecosystems", "Corporate Wellness & Vitality Hubs", "Scalable National Rollout Modules"],
      delay: "delay-500"
    },
    {
      icon: Microscope,
      title: "Science & Academy",
      focus: "Research & Knowledge Transfer",
      items: ["University Research Partnerships (Emory/KSA)", "Environmental Physiology Innovation", "Altipeak™ Academy Coach Certification", "Knowledge Transfer to Saudi Nationals"],
      delay: "delay-700"
    }
  ];

  return (
    <section id={id} className="section-reveal relative py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl bg-[#3881FC]/5 blur-[200px] rounded-full -z-10 animate-pulse"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h3 className="text-[#3881FC] font-black uppercase tracking-[0.4em] text-xs mb-6">Strategic Architecture</h3>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            National Human Performance <br/>
            <span className="gold-text">Ecosystem Tree</span>
          </h2>
          <p className="text-slate-400 text-xl font-medium leading-relaxed">
            A 6-pillar strategic framework transitioning from simple technology to a comprehensive, integrated national capability ecosystem for the Kingdom.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="hidden lg:block absolute inset-0 -z-10">
            <svg className="w-full h-full opacity-20" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M600 0V800" stroke="#D4AF37" strokeWidth="2" strokeDasharray="10 10" />
              <path d="M200 150H600H1000" stroke="#D4AF37" strokeWidth="1" />
              <path d="M200 450H600H1000" stroke="#D4AF37" strokeWidth="1" />
              <path d="M200 750H600H1000" stroke="#D4AF37" strokeWidth="1" />
            </svg>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {branches.map((branch, idx) => (
              <Branch key={idx} {...branch} />
            ))}
          </div>
        </div>

        <div className="mt-24 pt-16 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-12">
            <div className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-all group">
               <ShieldCheck size={40} className="text-[#D4AF37] group-hover:scale-110 transition-transform" />
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">CE Certified</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-all group">
               <Award size={40} className="text-[#3881FC] group-hover:scale-110 transition-transform" />
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">ISO Aligned</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="text-center sm:text-right hidden sm:block">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] mb-1">Ecosystem Intelligence</p>
              <p className="text-xs text-slate-500 font-bold uppercase">KSA Strategic Integration v4.2</p>
            </div>
            <button 
              onClick={onOpenMap}
              className="group flex items-center gap-4 bg-[#3881FC] hover:bg-[#2563EB] px-10 py-5 rounded-full transition-all duration-500 shadow-xl shadow-[#3881FC]/20 active:scale-95"
            >
              <Map size={24} className="group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-black uppercase tracking-widest text-white">Full Ecosystem Map</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;