
import React, { useEffect } from 'react';
import { X, ZoomIn, Download, Share2, Map as MapIcon, Landmark, Trophy, Settings, GraduationCap, Microscope, HardHat, Zap, CheckCircle, Activity, Globe } from 'lucide-react';

interface EcosystemMapModalProps {
  onClose: () => void;
}

const EcosystemMapModal: React.FC<EcosystemMapModalProps> = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0A192F]/98 backdrop-blur-xl animate-in fade-in duration-500"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full h-full md:w-[98%] md:h-[95%] glass-card flex flex-col md:rounded-[4rem] overflow-hidden border-[#3881FC]/30 animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 shadow-[0_0_100px_rgba(0,0,0,0.9)]">
        
        {/* Modal Header */}
        <div className="p-6 md:px-12 md:py-8 border-b border-white/10 bg-[#0A192F]/50 flex items-center justify-between z-20">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-[#3881FC]/20 flex items-center justify-center text-[#3881FC]">
              <MapIcon size={24} />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-none mb-1">
                National <span className="gold-text">Ecosystem Strategy</span>
              </h2>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">KSA Integrated Blueprint v4.5 • Vision 2030 Aligned</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all border border-white/5"
          >
            <X size={20} />
          </button>
        </div>

        {/* The Visual Tree Area */}
        <div className="flex-1 bg-[#050B15] relative overflow-y-auto overflow-x-hidden p-8 md:p-12 scrollbar-thin">
           <div className="relative max-w-5xl mx-auto flex flex-col items-center pt-8 pb-32">
              
              {/* Central Trunk Vertical Connector (Background) */}
              <div className="absolute top-48 left-1/2 -translate-x-1/2 w-0.5 h-[80%] bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/20 to-transparent opacity-30 -z-10"></div>

              {/* Root Node: ALTIPEAK INTERNATIONAL */}
              <div className="relative z-10 w-full max-w-2xl mb-16">
                <div className="p-8 rounded-3xl border-2 border-[#D4AF37] bg-[#0A192F] shadow-[0_0_40px_rgba(212,175,55,0.2)] text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent"></div>
                  <h3 className="text-4xl font-black gold-text mb-2 tracking-tighter uppercase">Altipeak™ International</h3>
                  <p className="text-[#3881FC] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Global IP Owner</p>
                  <div className="flex flex-wrap justify-center gap-3 text-slate-300 text-[10px] font-bold uppercase tracking-wider">
                    <span>CE + ISO Certification</span>
                    <span className="text-[#D4AF37]">|</span>
                    <span>15 Years R&D</span>
                    <span className="text-[#D4AF37]">|</span>
                    <span>Full Engineering & Manufacturing Control</span>
                  </div>
                </div>
                {/* SVG Branching Lines from Root to Tier 1 */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-full h-16">
                  <svg className="w-full h-full" viewBox="0 0 400 64" fill="none" preserveAspectRatio="none">
                    <path d="M200 0 C200 40 50 20 50 64" stroke="#D4AF37" strokeWidth="2" strokeOpacity="0.5" />
                    <path d="M200 0 C200 40 350 20 350 64" stroke="#D4AF37" strokeWidth="2" strokeOpacity="0.5" />
                  </svg>
                </div>
              </div>

              {/* TIER 1: Upper Branches */}
              <div className="w-full mb-20">
                <p className="text-center text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em] mb-10 opacity-60">Tier 1 - Upper Branches</p>
                <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                  {/* National Systems */}
                  <div className="p-8 rounded-[2rem] border border-[#D4AF37]/40 bg-[#0A192F]/60 relative group hover:border-[#D4AF37] transition-all flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#3881FC]/10 flex items-center justify-center text-[#3881FC]">
                        <Landmark size={24} />
                      </div>
                      <h4 className="text-lg font-black text-white uppercase tracking-tight leading-tight">National Human <br/> Performance Systems</h4>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {["Ministry of Sport", "Saudi Olympic & Paralympic Committee", "Ministry of Defence / National Guard", "NEOM / Qiddiya"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-[11px] font-bold text-slate-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50" /> {item}
                        </li>
                      ))}
                    </ul>
                    <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/5 text-[9px] font-bold text-slate-500 leading-relaxed uppercase tracking-widest">
                      Existing service pathways through Sullair engineering teams already operating in KSA government facilities.
                    </div>
                  </div>

                  {/* Franchise Centers */}
                  <div className="p-8 rounded-[2rem] border border-[#D4AF37]/40 bg-[#0A192F]/60 relative group hover:border-[#D4AF37] transition-all flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                        <Globe size={24} />
                      </div>
                      <h4 className="text-lg font-black text-white uppercase tracking-tight leading-tight">Altipeak™ <br/> Performance Centres</h4>
                    </div>
                    <p className="text-[10px] text-[#3881FC] font-black uppercase mb-4 tracking-widest">(Franchise Model)</p>
                    <ul className="space-y-3">
                      {["Saudi investor partners", "10-50 locations nationwide", "7% Operational royalties"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-[11px] font-bold text-slate-400">
                          <CheckCircle size={12} className="text-[#3881FC]" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* TIER 2: Lower Branches */}
              <div className="w-full mb-20 relative">
                <p className="text-center text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em] mb-10 opacity-60">Tier 2 - Lower Branches</p>
                
                {/* Visual Branching SVG for Tier 2 */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full h-12 pointer-events-none -z-10">
                  <svg className="w-full h-full" viewBox="0 0 800 48" fill="none" preserveAspectRatio="none">
                    <path d="M400 0 C400 20 200 20 200 48" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.3" />
                    <path d="M400 0 C400 20 600 20 600 48" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.3" />
                  </svg>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                  {/* Specialist Labs */}
                  <div className="p-8 rounded-[2rem] border border-[#D4AF37]/40 bg-[#0A192F]/60 relative group hover:border-[#D4AF37] transition-all">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-[#3881FC]/10 flex items-center justify-center text-[#3881FC]">
                        <Microscope size={24} />
                      </div>
                      <h4 className="text-lg font-black text-white uppercase tracking-tight leading-tight">Specialist <br/> Performance Labs</h4>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { name: "TRI LAB™", icon: Activity },
                        { name: "BIKE LAB™", icon: Trophy },
                        { name: "RUN LAB™", icon: Zap }
                      ].map((lab, i) => (
                        <div key={i} className="flex flex-col items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 group/lab hover:bg-white/10 transition-all">
                           <lab.icon size={24} className="text-[#D4AF37] group-hover/lab:scale-110 transition-transform" />
                           <span className="text-[9px] font-black text-white uppercase tracking-tighter text-center">{lab.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Environmental Systems & Sullair */}
                  <div className="flex flex-col gap-6">
                    <div className="p-8 rounded-[2rem] border border-[#D4AF37]/40 bg-[#0A192F]/60 relative group hover:border-[#D4AF37] transition-all">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                          <Settings size={24} />
                        </div>
                        <h4 className="text-lg font-black text-white uppercase tracking-tight leading-tight">Altitude & <br/> Environmental Systems</h4>
                      </div>
                      <ul className="space-y-3">
                        {["Hypoxic generators", "Advanced Environmental Control", "CE/ISO aligned quality"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-[11px] font-bold text-slate-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#3881FC]" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Sullair Sub-Node (Specific to Environmental Systems Engineering) */}
                    <div className="p-5 rounded-2xl bg-slate-900/90 border border-[#D4AF37]/30 flex items-center gap-5 group/sullair relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/sullair:translate-x-full transition-transform duration-1000"></div>
                      <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                        <HardHat size={24} />
                      </div>
                      <div className="relative z-10">
                        <p className="text-[10px] font-black text-white uppercase tracking-tight">Sullair – Strategic Technical Support Partner</p>
                        <p className="text-[9px] text-[#D4AF37] font-bold uppercase tracking-widest mt-0.5">(Service & Maintenance Only)</p>
                        <p className="text-[8px] text-slate-500 font-bold uppercase mt-1 tracking-wider">On-ground engineering support for KSA hubs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TIER 3: Bottom Center Branches */}
              <div className="w-full flex flex-col items-center mt-4">
                <p className="text-center text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em] mb-10 opacity-60">Tier 3 - Bottom Center Branches</p>
                <div className="w-full max-w-lg p-10 rounded-3xl border-2 border-[#D4AF37]/60 bg-[#0A192F] relative shadow-[0_0_50px_rgba(0,0,0,0.6)] overflow-hidden group hover:border-[#D4AF37]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-50"></div>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-8 group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-all duration-700">
                      <GraduationCap size={40} />
                    </div>
                    <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-6">Altipeak™ Academy</h4>
                    <div className="flex flex-col items-center gap-3">
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-widest flex items-center gap-3">
                        <CheckCircle size={14} className="text-[#3881FC]" /> Coach Certification
                      </span>
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-widest flex items-center gap-3">
                        <CheckCircle size={14} className="text-[#3881FC]" /> Technical Engineering Training
                      </span>
                    </div>
                  </div>
                </div>
              </div>

           </div>

           {/* Sticky Bottom Context Banner */}
           <div className="fixed bottom-12 left-1/2 -translate-x-1/2 w-full max-w-4xl px-8 z-30 pointer-events-none">
             <div className="py-4 rounded-2xl gold-gradient flex items-center justify-center text-center shadow-2xl border-t border-white/20">
                <p className="text-[10px] md:text-xs font-black text-slate-950 uppercase tracking-[0.25em]">
                  Aligned with Vision 2030: Health, Sport, Human Capability, Innovation, and National Infrastructure
                </p>
             </div>
           </div>
        </div>

        {/* Modal Toolbar Overlay */}
        <div className="absolute top-1/2 right-12 -translate-y-1/2 flex flex-col gap-4 z-40 hidden xl:flex">
          <button className="p-4 rounded-full bg-[#0A192F]/60 backdrop-blur-md border border-white/10 text-white hover:bg-[#3881FC] transition-all shadow-xl group" title="Zoom In">
            <ZoomIn size={22}/>
          </button>
          <button className="p-4 rounded-full bg-[#0A192F]/60 backdrop-blur-md border border-white/10 text-white hover:bg-[#D4AF37] hover:text-slate-950 transition-all shadow-xl group" title="Download Blueprint">
            <Download size={22}/>
          </button>
          <button className="p-4 rounded-full bg-[#0A192F]/60 backdrop-blur-md border border-white/10 text-white hover:bg-[#3881FC] transition-all shadow-xl group" title="Share Access">
            <Share2 size={22}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EcosystemMapModal;
