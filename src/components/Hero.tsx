import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, ArrowRight, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const xPos = (clientX / innerWidth) * 2 - 1;
    const yPos = (clientY / innerHeight) * 2 - 1;

    gsap.to('.hero-reveal', {
      x: xPos * 10,
      y: yPos * 10,
      duration: 1,
      ease: 'power2.out'
    });

    gsap.to(mockupRef.current, {
      x: xPos * -30,
      y: yPos * -30,
      rotationY: xPos * 5,
      duration: 1.5,
      ease: 'power3.out'
    });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent('¡Hola! Quiero activar mi prueba gratis de 24 horas de Raíces TV.');
    window.open(`https://wa.me/18095551234?text=${msg}`, '_blank');
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-reveal',
        { scale: 1.2, y: 80, opacity: 0 },
        {
          scale: 1, y: 0, opacity: 1,
          duration: 1.5,
          stagger: 0.15,
          ease: 'expo.out',
          delay: 0.2
        }
      );

      gsap.fromTo(mockupRef.current, 
        { 
          y: 150, 
          opacity: 0, 
          rotationX: 45, 
          rotationY: -10,
          scale: 0.8 
        },
        { 
          y: 0, 
          opacity: 1, 
          rotationX: 10,
          rotationY: 0, 
          scale: 1, 
          duration: 2, 
          ease: 'power4.out',
          delay: 0.5,
          onComplete: () => {
             gsap.to(mockupRef.current, {
               y: "-=15",
               rotationX: "+=2",
               duration: 3,
               yoyo: true,
               repeat: -1,
               ease: "sine.inOut"
             });
          }
        }
      );

      gsap.to(mockupRef.current, {
        rotationX: 0,
        scale: 1.05,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1.5,
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative pt-40 pb-20 min-h-screen flex flex-col items-center justify-start perspective-[1200px] overflow-hidden"
    >

      <div ref={textRef} className="max-w-5xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        {/* Social Proof Badge */}
        <div className="hero-reveal inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-dominican-blue/20 bg-dominican-blue/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono text-white/80 uppercase tracking-widest">🇩🇴 +2,500 familias dominicanas ya conectadas</span>
        </div>

        <h1 className="hero-reveal text-5xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tight mb-6 leading-tight text-balance">
          Toda La TV Dominicana <br />
          <span className="text-gradient-dominican font-serif italic font-extrabold">En Tu Casa. Desde $9.99/mes.</span>
        </h1>

        <p className="hero-reveal text-lg md:text-xl text-white/70 max-w-2xl mb-4 font-sans leading-relaxed text-balance">
          +4,000 canales en vivo, +40,000 películas y +5,000 series. Para Android TV, Roku, celulares, tablets y más. Sin contratos, sin frizeo.
        </p>

        {/* Urgency line */}
        <div className="hero-reveal flex items-center gap-2 mb-10">
          <Zap size={16} className="text-champagne" />
          <span className="text-sm text-champagne font-semibold">Prueba GRATIS 24 horas — Sin tarjeta de crédito</span>
        </div>

        <div className="hero-reveal flex flex-col sm:flex-row items-center gap-4">
          <button onClick={openWhatsApp} className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white text-obsidian rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] relative overflow-hidden text-lg">
             <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <span className="relative z-10">Prueba Gratis 24h</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button onClick={() => scrollTo('pricing')} className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-slate text-white border border-white/10 rounded-2xl font-semibold hover:bg-slate/80 hover:border-white/20 transition-all hover:scale-105 active:scale-95">
            <Play size={18} className="text-white/60 group-hover:text-white transition-colors" />
            Ver Planes y Precios
          </button>
        </div>
      </div>

      {/* 3D Dashboard Mockup */}
      <div className="relative mt-20 w-full max-w-6xl px-6 z-20 perspective-[2000px]">
        <div 
          ref={mockupRef}
          className="relative w-full aspect-video rounded-2xl md:rounded-[2rem] border border-white/10 overflow-hidden shadow-[0_30px_100px_-15px_rgba(0,0,0,0.8)] bg-slate/50 backdrop-blur-xl transform-gpu ring-1 ring-white/5"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          
          {/* Header Mockup */}
          <div className="w-full h-12 border-b border-white/5 flex items-center px-6 gap-2 bg-black/20">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-dominican-red/30" />
              <div className="w-3 h-3 rounded-full bg-champagne/30" />
              <div className="w-3 h-3 rounded-full bg-dominican-blue/30" />
            </div>
            <div className="ml-4 text-xs font-mono text-white/30">Raíces TV — Tu TV Dominicana en Vivo</div>
          </div>

          {/* Video Player Skeleton layout */}
          <div className="p-6 flex gap-6 h-[calc(100%-3rem)]">
             {/* Main View Area with real image */}
             <div className="flex-1 rounded-xl bg-gradient-to-br from-obsidian/80 to-black overflow-hidden relative border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1200&q=80" 
                  alt="Family watching TV"
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                {/* UI Overlay on player */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 text-white/80">
                   <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                     <Play size={16} className="text-white fill-white ml-0.5" />
                   </div>
                   <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                     <div className="w-1/3 h-full bg-dominican-red rounded-full shadow-[0_0_10px_rgba(225,29,72,0.8)]" />
                   </div>
                   <span className="text-xs font-mono bg-dominican-red/80 px-2 py-0.5 rounded">EN VIVO</span>
                </div>
             </div>

             {/* Sidebar Channels List */}
             <div className="w-64 hidden lg:flex flex-col gap-3">
               <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">Canales Populares</div>
               {['Telemicro', 'Color Visión', 'CDN 37', 'Teleantillas'].map((ch, i) => (
                 <div key={i} className={`h-14 rounded-xl ${i === 1 ? 'bg-dominican-blue/10 border-dominican-blue/20' : 'bg-white/5 border-white/5'} border flex items-center px-4 gap-3 relative overflow-hidden`}>
                   {i === 1 && <div className="absolute left-0 top-0 bottom-0 w-1 bg-dominican-blue" />}
                   <div className={`w-8 h-8 rounded-md ${i === 1 ? 'bg-white/20 shadow-[0_0_15px_rgba(29,78,216,0.3)]' : 'bg-white/10'}`} />
                   <div className="flex-1">
                     <div className={`text-sm font-medium ${i === 1 ? 'text-white' : 'text-white/60'}`}>{ch}</div>
                     <div className="text-[10px] text-white/30 font-mono">EN VIVO</div>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Dynamic Glow Behind Mockup */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-dominican-blue/30 blur-[150px] -z-10" />
      </div>
    </section>
  );
}
