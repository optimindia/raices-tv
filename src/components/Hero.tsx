import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Calculate normalized position (-1 to 1)
    const xPos = (clientX / innerWidth) * 2 - 1;
    const yPos = (clientY / innerHeight) * 2 - 1;

    // Apply subtle parallax to typography
    gsap.to('.hero-reveal', {
      x: xPos * 10,
      y: yPos * 10,
      duration: 1,
      ease: 'power2.out'
    });

    // Apply more pronounced parallax to 3D Mockup
    gsap.to(mockupRef.current, {
      x: xPos * -30, // Move opposite to mouse
      y: yPos * -30,
      rotationY: xPos * 5,
      duration: 1.5,
      ease: 'power3.out'
    });

    // Animate floating images
    gsap.to('.hero-floating', {
      x: xPos * 40,
      y: yPos * 40,
      rotation: xPos * 10,
      duration: 2,
      ease: 'power2.out'
    });

    gsap.to('.hero-floating-reverse', {
      x: xPos * -60,
      y: yPos * -60,
      rotation: yPos * -15,
      duration: 2.5,
      ease: 'power2.out'
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Aggressive Text Splitting / Scaling Reveal for more impact
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

      // 3D Mockup Entrance with extreme perspective initially
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
             // Continuous floating effect after entrance
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

      // ScrollTrigger to flatten mockup on scroll (overrides active animations gracefully if setup right, or we just keep the float subtle)
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
      {/* Floating Epic Flag Background */}
      <img 
        src="/images/rd_flag_epic.png" 
        alt="Dominican Flag Epic"
        className="hero-floating absolute -top-20 -left-32 w-[600px] h-[600px] object-contain opacity-25 mix-blend-screen pointer-events-none z-0"
        style={{ 
          maskImage: 'radial-gradient(circle, black 30%, transparent 60%)', 
          WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 60%)' 
        }}
      />
      
      {/* Floating Abstract Neon Background */}
      <img 
        src="/images/rd_abstract_neon.png" 
        alt="Dominican Abstract Neon"
        className="hero-floating-reverse absolute top-40 -right-40 w-[700px] h-[700px] object-contain opacity-30 mix-blend-screen pointer-events-none z-0 rotate-12"
        style={{ 
          maskImage: 'radial-gradient(circle, black 25%, transparent 65%)', 
          WebkitMaskImage: 'radial-gradient(circle, black 25%, transparent 65%)' 
        }}
      />

      <div ref={textRef} className="max-w-5xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        <div className="hero-reveal inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-dominican-blue animate-pulse" />
          <span className="text-xs font-mono text-white/70 uppercase tracking-widest">🇩🇴 KLK MI GENTE - CERO BULTO, ESTAMOS EN VIVO</span>
        </div>

        <h1 className="hero-reveal text-5xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tight mb-6 leading-tight text-balance">
          El Sistema Que Está, <br />
          <span className="text-gradient-dominican font-serif italic font-extrabold uppercase tracking-tighter">Rompiendo La Calle.</span>
        </h1>

        <p className="hero-reveal text-lg md:text-xl text-white/50 max-w-2xl mb-10 font-sans leading-relaxed text-balance">
          Televisión dominicana premium sin el mareo de los otros. Hecho pa' los tigres de la diáspora que exigen calidad, sin frizeo y a millón.
        </p>

        <div className="hero-reveal flex flex-col sm:flex-row items-center gap-4 mt-10">
          <button onClick={() => scrollTo('pricing')} className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white text-obsidian rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] relative overflow-hidden">
             <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <span className="relative z-10">¡Mete Mano Ya!</span>
          </button>
          
          <button onClick={() => scrollTo('features')} className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-slate text-white border border-white/10 rounded-2xl font-semibold hover:bg-slate/80 hover:border-white/20 transition-all hover:scale-105 active:scale-95">
            <Play size={18} className="text-white/60 group-hover:text-white transition-colors" />
            Ver el Mangueo 🇩🇴
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
          {/* Mockup UI Inner Structure */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          
          {/* Header Mockup */}
          <div className="w-full h-12 border-b border-white/5 flex items-center px-6 gap-2 bg-black/20">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-dominican-red/30" />
              <div className="w-3 h-3 rounded-full bg-champagne/30" />
              <div className="w-3 h-3 rounded-full bg-dominican-blue/30" />
            </div>
          </div>

          {/* Video Player Skeleton layout */}
          <div className="p-6 flex gap-6 h-[calc(100%-3rem)]">
             {/* Main View Area */}
             <div className="flex-1 rounded-xl bg-gradient-to-br from-obsidian/80 to-black overflow-hidden relative border border-white/5">
                {/* Simulated Content Loading Image */}
                <div 
                  className="absolute inset-0 opacity-40 mix-blend-screen"
                  style={{
                    backgroundImage: 'url("/images/rd_santo_domingo_neon.png")', // Epic Dominican AI Generatad Image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                {/* UI Overlay on player */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 text-white/80">
                   <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                     <Play size={16} className="text-white fill-white ml-0.5" />
                   </div>
                   <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                     <div className="w-1/3 h-full bg-dominican-red rounded-full shadow-[0_0_10px_rgba(225,29,72,0.8)]" />
                   </div>
                   <span className="text-xs font-mono">EN VIVO</span>
                </div>
             </div>

             {/* Sidebar Channels List */}
             <div className="w-64 hidden lg:flex flex-col gap-3">
               <div className="h-16 rounded-xl bg-white/5 border border-white/5 flex items-center px-4 gap-4">
                  <div className="w-10 h-10 rounded-md bg-white/10" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2 bg-white/20 rounded-full w-3/4" />
                    <div className="h-2 bg-white/10 rounded-full w-1/2" />
                  </div>
               </div>
               <div className="h-16 rounded-xl bg-dominican-blue/10 border border-dominican-blue/20 flex items-center px-4 gap-4 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-dominican-blue" />
                  <div className="w-10 h-10 rounded-md bg-white/20 shadow-[0_0_15px_rgba(29,78,216,0.3)]" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2 bg-white/40 rounded-full w-full" />
                    <div className="h-2 bg-white/20 rounded-full w-2/3" />
                  </div>
               </div>
               <div className="h-16 rounded-xl bg-white/5 border border-white/5 flex items-center px-4 gap-4 opacity-50">
                  <div className="w-10 h-10 rounded-md bg-white/10" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2 bg-white/20 rounded-full w-4/5" />
                    <div className="h-2 bg-white/10 rounded-full w-1/3" />
                  </div>
               </div>
             </div>
          </div>
        </div>

        {/* Dynamic Glow Behind Mockup */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-dominican-blue/30 blur-[150px] -z-10" />
      </div>
    </section>
  );
}
