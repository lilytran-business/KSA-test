
import React, { useEffect, useState, useRef } from 'react';
import { X, ChevronRight, Activity, Zap, Shield, TrendingUp, Download, PlayCircle, FileText, CheckCircle2 } from 'lucide-react';
import { PillarData } from '../types';

interface PillarModalProps {
  pillar: PillarData;
  onClose: () => void;
}

const StatCounter: React.FC<{ value: string; unit: string; color: string }> = ({ value, unit, color }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const isNumber = !isNaN(target) && /^\d+$/.test(value.replace(/[^0-9]/g, ''));

  useEffect(() => {
    if (!isNumber) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [target, isNumber]);

  return (
    <div className="flex flex-col items-start">
      <div className="flex items-baseline gap-1">
        <span className="text-4xl md:text-5xl font-black italic tracking-tighter" style={{ color }}>
          {isNumber ? count : value}
        </span>
        <span className="text-lg font-black uppercase tracking-tighter text-slate-500">
          {unit}
        </span>
      </div>
    </div>
  );
};

const PillarModal: React.FC<PillarModalProps> = ({ pillar, onClose }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  const galleryImages = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1599330919241-11910526012e?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600"
  ];

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-0 md:p-6 lg:p-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0A192F]/98 backdrop-blur-3xl transition-opacity animate-in fade-in duration-700"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full h-full max-w-7xl glass-card md:rounded-[4rem] overflow-hidden flex flex-col shadow-[0_0_120px_rgba(0,0,0,1)] border-white/10 animate-in zoom-in-95 slide-in-from-bottom-10 duration-700">
        
        {/* Header Section (Non-scrolling part if we want, but let's make it part of scroll) */}
        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin">
          
          {/* Cinematic Header */}
          <div className="relative h-[45vh] md:h-[55vh] overflow-hidden">
            <img 
              src={pillar.visualUrl} 
              alt={pillar.title} 
              className="w-full h-full object-cover" 
            />
            {/* Ambient Lighting Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-transparent to-transparent"></div>
            
            <div className="absolute inset-0 p-8 md:p-20 flex flex-col justify-end items-start">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37] text-slate-950 text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-2xl">
                <Shield size={12} /> Strategic Asset Brief
              </div>
              <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
                 <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] gold-gradient flex items-center justify-center shadow-[0_0_60px_rgba(212,175,55,0.3)] text-slate-950">
                  <pillar.icon size={56} strokeWidth={2.5} />
                </div>
                <div>
                  <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.85] mb-4">
                    {pillar.title}
                  </h2>
                  <p className="text-[#3881FC] text-sm md:text-lg font-black uppercase tracking-[0.4em]">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="absolute top-10 right-10 p-5 rounded-full bg-white/5 hover:bg-[#D4AF37] transition-all text-white hover:text-slate-950 z-20 backdrop-blur-xl border border-white/10"
            >
              <X size={28} />
            </button>
          </div>

          {/* Grid Content: Operational Metrics */}
          <div className="p-8 md:p-20">
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
              <div className="max-w-xl">
                <h4 className="text-[#3881FC] font-black uppercase tracking-[0.4em] text-xs mb-4">Tactical Intelligence</h4>
                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Operational <br/><span className="gold-text">Performance Metrics</span></h3>
              </div>
              <div className="hidden md:block h-1 w-32 gold-gradient rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillar.details.map((detail, idx) => (
                <div 
                  key={idx} 
                  className="group relative p-10 rounded-[3rem] bg-[#112240]/40 border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-700 shadow-2xl overflow-hidden"
                >
                  {/* Ambient Glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 blur-[60px] transition-opacity duration-700 opacity-0 group-hover:opacity-40" 
                       style={{ backgroundColor: detail.statColor }}></div>
                  
                  <div className="relative z-10">
                    <div className="mb-8">
                      <StatCounter value={detail.statValue || "0"} unit={detail.statUnit || ""} color={detail.statColor || "#D4AF37"} />
                    </div>
                    <h3 className="text-lg font-black text-white uppercase tracking-tight mb-4 group-hover:text-[#D4AF37] transition-colors">{detail.label}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium group-hover:text-slate-200 transition-colors">
                      {detail.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* NEW: Proof in Action Media Gallery */}
            <div className="mt-40">
              <div className="flex items-center gap-6 mb-16">
                <PlayCircle className="text-[#D4AF37]" size={40} />
                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Proof In <span className="text-[#3881FC]">Action</span></h3>
              </div>
              
              <div className="grid lg:grid-cols-12 gap-10">
                {/* Case Study Video Area */}
                <div className="lg:col-span-7 aspect-video rounded-[3rem] bg-slate-900 overflow-hidden relative group cursor-pointer border border-white/5">
                  <img src={pillar.visualUrl} className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-all">
                      <PlayCircle size={48} className="animate-pulse" />
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                    <p className="text-[10px] font-black gold-text uppercase tracking-widest mb-1">Confidential Asset 04-B</p>
                    <h5 className="text-lg font-bold text-white uppercase tracking-tight">Technical Case Study: Global Performance Deployment</h5>
                  </div>
                </div>

                {/* Installation Carousel */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  {galleryImages.map((img, i) => (
                    <div key={i} className="flex items-center gap-6 p-4 rounded-[2rem] bg-white/5 border border-white/5 hover:border-[#3881FC]/30 transition-all group overflow-hidden">
                       <div className="w-24 h-24 rounded-2xl overflow-hidden flex-none">
                        <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       </div>
                       <div>
                        <p className="text-[9px] font-black text-[#D4AF37] uppercase tracking-widest mb-1">Ref ID #{i+102}</p>
                        <h6 className="text-sm font-black text-white uppercase">Operational Hub</h6>
                        <p className="text-[10px] text-slate-500 font-bold uppercase mt-1">ISO 9001 Compliance Verified</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-40"></div> {/* Spacer for bottom bar */}
          </div>
        </div>

        {/* Executive Resource Center (Bottom Sticky Bar) */}
        <div className="p-8 md:px-20 md:py-10 bg-[#112240] border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 z-50">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <CheckCircle2 size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">Security Status</span>
                <span className="text-sm font-bold text-white uppercase tracking-tight">B2B Authorized Access</span>
              </div>
            </div>
            <div className="w-px h-10 bg-white/10 hidden md:block"></div>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Saudi_Vision_2030_logo.svg/1200px-Saudi_Vision_2030_logo.svg.png" 
              alt="Vision 2030" 
              className="h-10 md:h-12 invert opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            <button 
              className="flex-1 md:flex-none flex items-center justify-center gap-4 gold-gradient text-slate-950 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-[1.02] transition-all shadow-[0_10px_30px_rgba(212,175,55,0.3)] group"
            >
              <FileText size={18} /> Download {pillar.title} Strategic Brief
            </button>
            <button 
              onClick={onClose}
              className="px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all"
            >
              Exit Brief
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PillarModal;
