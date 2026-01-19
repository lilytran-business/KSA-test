
import React, { useState, useEffect } from 'react';
import { ChevronDown, Shield, Settings, Globe, PlayCircle } from 'lucide-react';

const Hero: React.FC<{ id: string }> = ({ id }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id={id} className="relative min-h-screen flex items-center overflow-hidden bg-[#0A192F]">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 transition-transform duration-700 ease-out scale-110"
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        >
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-20"
            poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=1920"
          >
            <source src="https://player.vimeo.com/external/494252666.sd.mp4?s=bc463e230554f676993ef07a16062f8b50242279&profile_id=165" type="video/mp4" />
          </video>
        </div>
        
        {/* Cyber-Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #3881FC 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>

        {/* Dynamic Light Trail (Mouse Parallax) */}
        <div 
          className="absolute w-[600px] h-[600px] bg-[#3881FC]/10 blur-[120px] rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{ 
            left: `calc(50% + ${mousePos.x * 2}px)`, 
            top: `calc(50% + ${mousePos.y * 2}px)`,
            transform: 'translate(-50%, -50%)' 
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-transparent to-[#0A192F]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Content Hierarchy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#3881FC]/10 border border-[#3881FC]/30 text-[#3881FC] text-[10px] font-black tracking-[0.4em] uppercase mb-10 backdrop-blur-md animate-in fade-in slide-in-from-left-4 duration-700">
            <PlayCircle size={14} className="animate-pulse" />
            KSA Strategic Blueprint v5.0
          </div>

          <h1 className="text-4xl md:text-7xl xl:text-8xl font-light text-white uppercase leading-[0.9] tracking-tighter mb-8 animate-in fade-in slide-in-from-left-10 duration-1000">
            National Human <br/>
            <span className="font-black gold-text italic">Performance Ecosystem</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 font-medium tracking-tight mb-12 max-w-2xl animate-in fade-in slide-in-from-left-12 duration-1000 delay-200">
            Leading the World in Altitude, Climate, and Performance Engineering.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500">
            <a href="#strategic-framework" className="w-full sm:w-auto text-center gold-gradient text-slate-950 px-12 py-6 rounded-full font-black uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all group">
              Strategic Framework
            </a>
            <a href="#contact" className="w-full sm:w-auto text-center border-2 border-white/10 bg-white/5 backdrop-blur-md hover:border-[#3881FC] hover:bg-[#3881FC]/10 px-12 py-6 rounded-full font-black uppercase tracking-widest text-white transition-all">
              Engagement Portal
            </a>
          </div>
        </div>

        {/* Right Side: Visuals & Floating Tags */}
        <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end gap-6">
          
          {/* Vision 2030 Prestige Seal */}
          <div className="relative mb-12 animate-in zoom-in duration-1000 delay-300">
            <div className="absolute inset-0 bg-[#D4AF37] blur-[40px] opacity-20 animate-pulse"></div>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Saudi_Vision_2030_logo.svg/1200px-Saudi_Vision_2030_logo.svg.png" 
              alt="Vision 2030" 
              className="h-32 md:h-44 invert drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] relative z-10 animate-slow-rotate"
            />
          </div>

          {/* Power Trio Tech Tags */}
          <div className="flex flex-col gap-4 w-full max-w-xs lg:mr-8">
            {[
              { icon: Shield, text: "CE-Certified Systems", color: "#3881FC", delay: "delay-[700ms]" },
              { icon: Settings, text: "ISO-Aligned Engineering", color: "#D4AF37", delay: "delay-[850ms]" },
              { icon: Globe, text: "15+ Years Global R&D", color: "#3881FC", delay: "delay-[1000ms]" }
            ].map((tag, i) => (
              <div 
                key={i}
                className={`flex items-center gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all group cursor-default animate-in slide-in-from-right-10 ${tag.delay}`}
                style={{ transform: `translateX(${i * 15}px)` }}
              >
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg"
                  style={{ backgroundColor: `${tag.color}20`, border: `1px solid ${tag.color}40` }}
                >
                  <tag.icon size={20} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-xs font-black text-white uppercase tracking-widest">{tag.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20 animate-bounce cursor-pointer hover:opacity-100 transition-opacity">
        <ChevronDown size={32} className="text-white" />
      </div>

      <style>{`
        @keyframes slow-rotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(2deg) scale(1.05); }
          100% { transform: rotate(0deg) scale(1); }
        }
        .animate-slow-rotate {
          animation: slow-rotate 8s infinite ease-in-out;
        }
        
        h1 span {
          text-shadow: 0 0 30px rgba(212, 175, 55, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Hero;
