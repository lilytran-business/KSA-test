import React, { useState } from 'react';
import { Send, User, Building, Mail, Phone, MessageSquare, Linkedin, MessageCircle, CheckCircle2 } from 'lucide-react';

const Contact: React.FC<{ id: string }> = ({ id }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id={id} className="section-reveal py-24 px-6 md:px-12 bg-slate-950 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {!isSubmitted ? (
          <div className="glass-card rounded-[3rem] overflow-hidden grid lg:grid-cols-2 shadow-2xl animate-in fade-in duration-700">
            {/* Left Column - Branding & Info */}
            <div className="p-10 md:p-16 gold-gradient flex flex-col justify-between text-slate-950 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
              
              <div className="relative z-10">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Saudi_Vision_2030_logo.svg/1200px-Saudi_Vision_2030_logo.svg.png" 
                     alt="Vision 2030" className="h-16 mb-12 opacity-90" />
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Ready to Support <br/>Saudi Arabia’s <br/>Vision 2030.
                </h2>
                <p className="text-slate-800 text-lg font-semibold max-w-sm mb-12">
                  Accelerate your national human performance strategy with Noel O'Brien and the Altipeak™ Global Engineering team.
                </p>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="p-6 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 flex items-center gap-6 animate-float-slow shadow-xl">
                  <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] overflow-hidden shrink-0 shadow-lg bg-slate-200">
                    <img 
                      src="https://res.cloudinary.com/dokxiosv2/image/upload/v1765544864/Noel-image_nzrrs8.jpg" 
                      alt="Noel O'Brien" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-900 mb-0.5">Direct Liaison</p>
                    <p className="text-2xl font-black text-slate-950 tracking-tight leading-none mb-1">Noel O'Brien</p>
                    <p className="text-xs font-bold text-slate-800/80 mb-3">CEO, Altipeak™ International</p>
                    
                    <div className="flex gap-4">
                      <a 
                        href="https://www.linkedin.com/in/noel-o-brien-786994134/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-900 hover:text-[#D4AF37] transition-all duration-300 transform hover:scale-125"
                        title="LinkedIn Profile"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a 
                        href="https://wa.me/353874568882" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-900 hover:text-[#D4AF37] transition-all duration-300 transform hover:scale-125"
                        title="WhatsApp Liaison"
                      >
                        <MessageCircle size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div id="contact-form" className="p-10 md:p-16 bg-slate-900">
              <h3 className="text-2xl font-bold mb-10 text-white">Schedule a Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input 
                      type="text" required
                      className="peer w-full bg-slate-800/50 border-b-2 border-slate-700 py-3 outline-none text-white focus:border-[#D4AF37] transition-all focus:shadow-[0_4px_15px_rgba(56,129,252,0.15)] px-1"
                      placeholder=" "
                    />
                    <label className="absolute top-3 left-1 text-slate-500 font-bold uppercase tracking-widest text-[10px] pointer-events-none transition-all peer-focus:-top-5 peer-focus:text-[#D4AF37] peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[#D4AF37]">
                      <span className="flex items-center gap-2"><User size={12}/> Full Name</span>
                    </label>
                  </div>

                  <div className="relative group">
                    <input 
                      type="text" required
                      className="peer w-full bg-slate-800/50 border-b-2 border-slate-700 py-3 outline-none text-white focus:border-[#D4AF37] transition-all focus:shadow-[0_4px_15px_rgba(56,129,252,0.15)] px-1"
                      placeholder=" "
                    />
                    <label className="absolute top-3 left-1 text-slate-500 font-bold uppercase tracking-widest text-[10px] pointer-events-none transition-all peer-focus:-top-5 peer-focus:text-[#D4AF37] peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[#D4AF37]">
                      <span className="flex items-center gap-2"><Building size={12}/> Ministry / Entity</span>
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input 
                      type="email" required
                      className="peer w-full bg-slate-800/50 border-b-2 border-slate-700 py-3 outline-none text-white focus:border-[#D4AF37] transition-all focus:shadow-[0_4px_15px_rgba(212,175,55,0.15)] px-1"
                      placeholder=" "
                    />
                    <label className="absolute top-3 left-1 text-slate-500 font-bold uppercase tracking-widest text-[10px] pointer-events-none transition-all peer-focus:-top-5 peer-focus:text-[#D4AF37] peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[#D4AF37]">
                      <span className="flex items-center gap-2"><Mail size={12}/> Work Email</span>
                    </label>
                  </div>

                  <div className="relative group">
                    <input 
                      type="tel" required
                      className="peer w-full bg-slate-800/50 border-b-2 border-slate-700 py-3 outline-none text-white focus:border-[#D4AF37] transition-all focus:shadow-[0_4px_15px_rgba(212,175,55,0.15)] px-1"
                      placeholder=" "
                    />
                    <label className="absolute top-3 left-1 text-slate-500 font-bold uppercase tracking-widest text-[10px] pointer-events-none transition-all peer-focus:-top-5 peer-focus:text-[#D4AF37] peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[#D4AF37]">
                      <span className="flex items-center gap-2"><Phone size={12}/> Direct Phone</span>
                    </label>
                  </div>
                </div>

                <div className="relative group">
                  <select className="peer w-full bg-slate-800/50 border-b-2 border-slate-700 py-3 outline-none text-white focus:border-[#D4AF37] transition-all appearance-none cursor-pointer">
                    <option className="bg-slate-900">National Sport Performance</option>
                    <option className="bg-slate-900">Military & Combat Readiness</option>
                    <option className="bg-slate-900">Clinical Healthcare & Rehab</option>
                    <option className="bg-slate-900">Urban Franchise Investment</option>
                    <option className="bg-slate-900">Giga-Project Infrastructure</option>
                  </select>
                  <label className="absolute -top-5 left-1 text-[#D4AF37] font-bold uppercase tracking-widest text-[10px]">
                    <span className="flex items-center gap-2"><MessageSquare size={12}/> Area of Interest</span>
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="relative w-full gold-gradient text-slate-950 font-black uppercase tracking-[0.2em] py-5 rounded-xl shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 overflow-hidden group hover:scale-[1.02] active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
                  
                  <span className="flex items-center justify-center gap-3 relative z-10">
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                    Request Strategic Meeting
                  </span>
                </button>
              </form>
              
              <p className="text-[10px] text-slate-500 text-center mt-10 uppercase tracking-widest font-bold">
                Secure B2B Portal • Private Consultation • NDA Protected
              </p>
            </div>
          </div>
        ) : (
          <div className="glass-card rounded-[3rem] p-16 md:p-24 bg-slate-900/50 backdrop-blur-3xl border-2 border-[#D4AF37] shadow-[0_0_80px_rgba(212,175,55,0.2)] text-center animate-in zoom-in-95 duration-700 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,#D4AF37,transparent)]"></div>
            
            <div className="relative w-32 h-32 mx-auto mb-10">
               <div className="absolute inset-0 gold-gradient rounded-full animate-ping opacity-20"></div>
               <div className="relative w-full h-full rounded-full gold-gradient flex items-center justify-center text-slate-950 shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                  <CheckCircle2 size={64} className="animate-in zoom-in-50 duration-700" />
               </div>
            </div>

            <h3 className="text-[#D4AF37] font-black uppercase tracking-[0.6em] text-xs mb-6">Security Clearance Granted</h3>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">Protocol Initiated</h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-lg mx-auto mb-12 font-medium">
              Your inquiry has been prioritized for the <span className="text-[#D4AF37] font-black">CEO's Office</span>. A strategic liaison will contact you within 12 standard operating hours.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="px-12 py-5 rounded-full border border-white/10 text-white font-black uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all"
            >
              Return to Briefing
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .group-hover\\:animate-shimmer {
          animation: shimmer 1s ease-in-out forwards;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }

        select::-webkit-scrollbar {
          width: 8px;
        }
        select::-webkit-scrollbar-track {
          background: #0A192F;
        }
        select::-webkit-scrollbar-thumb {
          background: #233554;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default Contact;