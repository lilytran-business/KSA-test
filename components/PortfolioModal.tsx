
import React, { useEffect, useState } from 'react';
import { X, Trophy, Shield, HeartPulse, PlayCircle, Download, Calendar, Globe, CheckCircle, Users, Activity, ArrowRight } from 'lucide-react';

interface PortfolioModalProps {
  onClose: () => void;
}

const categories = [
  { id: 'sport', label: 'Olympic & Elite Sport', icon: Trophy },
  { id: 'military', label: 'Tactical & Military', icon: Shield },
  { id: 'medical', label: 'Medical & Clinical', icon: HeartPulse },
];

const projects = {
  sport: [
    { title: "French Olympic Base", location: "Font-Romeu, France", stat: "5,000m Simulation", img: "https://images.unsplash.com/photo-1599330919241-11910526012e?auto=format&fit=crop&q=80&w=500" },
    { title: "Irish National Hub", location: "Dublin, Ireland", stat: "Multi-Climate Wing", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=500" },
    { title: "Aspire Academy", location: "Doha, Qatar", stat: "Elite Performance Lab", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=500" },
    { title: "Thai Olympic Center", location: "Bangkok, Thailand", stat: "Climate Adaptation", img: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=500" },
  ],
  military: [
    { title: "Special Forces Hub", location: "Classified", stat: "Rapid Adaptation Sims", img: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80&w=500" },
    { title: "UK Defence Academy", location: "Shrivenham, UK", stat: "Environmental Stress Lab", img: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=500" },
    { title: "KSA Pilot Facility", location: "Riyadh, Saudi Arabia", stat: "Giga-Project Prototype", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=500" },
    { title: "Maritime Command", location: "Norway", stat: "Extreme Humidity Sim", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=500" },
  ],
  medical: [
    { title: "Dr. Sulaiman Alhabib", location: "Riyadh, KSA", stat: "Clinical Altitude Rehab", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=500" },
    { title: "Fakeeh Medical", location: "Jeddah, KSA", stat: "Post-Surgical Recovery", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500" },
    { title: "Emory Research Lab", location: "Atlanta, USA", stat: "Metabolic Pathway Study", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500" },
    { title: "Zurich Heart Center", location: "Zurich, Switzerland", stat: "Cardiovascular Stress", img: "https://images.unsplash.com/photo-1538108197017-c1b46ad81123?auto=format&fit=crop&q=80&w=500" },
  ],
};

const PortfolioModal: React.FC<PortfolioModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('sport');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0A192F]/95 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full h-full md:w-[95%] md:h-[90%] bg-slate-50 overflow-hidden flex flex-col md:rounded-[3rem] animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 shadow-2xl">
        
        {/* White Header Section */}
        <div className="p-8 md:p-12 border-b border-slate-200 bg-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-2">
              Altipeak™ <span className="text-[#3881FC]">Global Presence</span>
            </h2>
            <p className="text-slate-500 font-bold text-lg max-w-2xl">
              Engineering the Future of Human Performance across Elite Sport, Military, and Healthcare sectors.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 transition-all shadow-sm"
          >
            <X size={24} />
          </button>
        </div>

        {/* Impact Stats Row */}
        <div className="bg-white px-8 md:px-12 py-8 grid grid-cols-2 lg:grid-cols-4 gap-8 border-b border-slate-100">
          {[
            { label: "Countries Covered", val: "25+", icon: Globe },
            { label: "Global Installations", val: "500+", icon: Activity },
            { label: "Safety Record (ISO)", val: "100%", icon: CheckCircle },
            { label: "Remote Support", val: "24/7", icon: Users },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#3881FC] shadow-sm">
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">{stat.val}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-slate-50 p-8 md:p-12">
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-sm ${
                  activeTab === cat.id 
                  ? 'bg-[#3881FC] text-white' 
                  : 'bg-white text-slate-500 hover:bg-slate-100'
                }`}
              >
                <cat.icon size={18} />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 animate-in fade-in slide-in-from-left-4 duration-500">
            {projects[activeTab as keyof typeof projects].map((project, idx) => (
              <div key={idx} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#3881FC]/10 transition-all duration-500 border border-slate-100 hover:-translate-y-2">
                <div className="h-48 overflow-hidden relative">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black text-[#3881FC] uppercase tracking-widest shadow-sm">
                    {project.stat}
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{project.location}</p>
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-4">{project.title}</h4>
                  <div className="flex items-center gap-2 text-[#3881FC] text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                    Technical Profile <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-8 flex items-center gap-3">
              <PlayCircle className="text-[#3881FC]" />
              Hear from our Global Partners
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Irish Olympic Project", speaker: "Noel O'Brien", duration: "4:20" },
                { title: "Defense Modernization", speaker: "Maj. Gen. (Ret.) R. Smith", duration: "3:15" },
                { title: "Clinical Breakthroughs", speaker: "Dr. Elena Vargas", duration: "5:45" },
              ].map((video, i) => (
                <div key={i} className="group relative rounded-[2rem] overflow-hidden bg-slate-200 h-56 shadow-sm border border-slate-100">
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform">
                      <PlayCircle size={32} />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs text-white/70 font-bold uppercase tracking-widest mb-1">{video.speaker}</p>
                    <h5 className="text-lg font-black text-white uppercase tracking-tight">{video.title}</h5>
                  </div>
                  <div className="absolute top-4 right-4 px-2 py-1 bg-black/50 text-[10px] text-white font-bold rounded">
                    {video.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Bottom Bar */}
        <div className="p-6 md:p-8 bg-white border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                <Download size={20} />
             </div>
             <div>
                <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Interested in a specific sector?</p>
                <p className="text-xs text-slate-400 font-bold">Download our 2024 Technical Specifications.</p>
             </div>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-8 py-4 rounded-xl border-2 border-slate-200 text-slate-600 font-black uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all">
               Request Site Visit
            </button>
            <button className="flex-1 md:flex-none px-8 py-4 rounded-xl bg-[#3881FC] text-white font-black uppercase tracking-widest text-[10px] hover:bg-[#2563EB] transition-all shadow-lg shadow-[#3881FC]/20">
               Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
