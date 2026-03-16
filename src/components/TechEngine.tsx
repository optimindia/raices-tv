import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Server, Globe, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function TechEngine() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Desktop nodes
      const desktopNodes = gsap.utils.toArray<HTMLElement>('.tech-node-desktop');
      desktopNodes.forEach((node, i) => {
        gsap.fromTo(node,
          { scale: 0.5, opacity: 0, y: 40 },
          {
            scale: 1, opacity: 1, y: 0,
            duration: 1,
            delay: i * 0.2,
            ease: 'elastic.out(1, 0.75)',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            }
          }
        );
      });

      // Mobile nodes
      const mobileNodes = gsap.utils.toArray<HTMLElement>('.tech-node-mobile');
      mobileNodes.forEach((node, i) => {
        gsap.fromTo(node,
          { x: -30, opacity: 0 },
          {
            x: 0, opacity: 1,
            duration: 0.7,
            delay: i * 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        );
      });
      
      gsap.fromTo('.connection-line', 
        { strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 2.5, ease: 'none', repeat: -1 }
      );

      gsap.to('.core-glow', {
        scale: 1.2,
        opacity: 0.8,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="stability" ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-4">
          Infraestructura <span className="text-dominican-blue font-serif italic text-4xl">Dedicada.</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          No somos revendedores. Usamos servidores optimizados y túneles paralelos exclusivos para conectar la costa este de EE.UU. directamente con los nodos caribeños.
        </p>
      </div>

      {/* MOBILE: Vertical card layout */}
      <div className="md:hidden max-w-sm mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-4">
          <div className="tech-node-mobile flex items-center gap-4 w-full glass-card p-5 border-dominican-blue/20">
            <div className="w-14 h-14 rounded-xl bg-dominican-blue/15 flex items-center justify-center shrink-0 border border-dominican-blue/20">
              <Globe size={26} className="text-dominican-blue" />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">US-EAST-1</span>
              <div className="font-semibold text-white text-lg">New York</div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-0.5">
            <div className="w-0.5 h-6 bg-gradient-to-b from-dominican-blue to-transparent rounded-full" />
            <div className="w-3 h-3 rounded-full bg-white animate-bounce shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            <div className="w-0.5 h-6 bg-gradient-to-b from-transparent to-champagne rounded-full" />
          </div>

          <div className="tech-node-mobile flex items-center gap-4 w-full glass-card p-5 border-champagne/20 relative overflow-hidden">
            <div className="core-glow absolute inset-0 bg-champagne/5 blur-xl pointer-events-none" />
            <div className="w-14 h-14 rounded-full bg-obsidian border border-white/20 flex items-center justify-center shrink-0 relative z-10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              <Zap size={26} className="text-white" />
            </div>
            <div className="relative z-10">
              <span className="font-mono text-[10px] uppercase tracking-widest text-champagne">PROCESAMIENTO</span>
              <div className="font-semibold text-white text-lg">Raíces Core</div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-0.5">
            <div className="w-0.5 h-6 bg-gradient-to-b from-champagne to-transparent rounded-full" />
            <div className="w-3 h-3 rounded-full bg-white animate-bounce shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ animationDelay: '0.3s' }} />
            <div className="w-0.5 h-6 bg-gradient-to-b from-transparent to-dominican-red rounded-full" />
          </div>

          <div className="tech-node-mobile flex items-center gap-4 w-full glass-card p-5 border-dominican-red/20">
            <div className="w-14 h-14 rounded-xl bg-dominican-red/15 flex items-center justify-center shrink-0 border border-dominican-red/20">
              <Server size={26} className="text-dominican-red" />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">DO-SDQ-1</span>
              <div className="font-semibold text-white text-lg">Santo Domingo</div>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP: SVG Animation */}
      <div className="hidden md:block relative max-w-5xl mx-auto h-96 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1000 400">
          <defs>
            <linearGradient id="conn-blue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#002D62" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#002D62" stopOpacity="1" />
              <stop offset="100%" stopColor="#CE1126" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="conn-red" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#CE1126" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#CE1126" stopOpacity="1" />
              <stop offset="100%" stopColor="#002D62" stopOpacity="0.3" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <path className="connection-line" d="M150 200 C300 100, 700 100, 850 200" fill="none" stroke="url(#conn-blue)" strokeWidth="3" strokeDasharray="10 15" filter="url(#glow)" />
          <path className="connection-line" d="M150 200 C300 300, 700 300, 850 200" fill="none" stroke="url(#conn-red)" strokeWidth="3" strokeDasharray="10 15" filter="url(#glow)" />
          <path className="connection-line" d="M150 200 L500 200 L850 200" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="5 5" />
          
          <circle r="4" fill="#fff" filter="url(#glow)">
            <animateMotion dur="3s" repeatCount="indefinite" path="M150 200 C300 100, 700 100, 850 200" />
          </circle>
          <circle r="4" fill="#fff" filter="url(#glow)">
            <animateMotion dur="4s" repeatCount="indefinite" path="M150 200 C300 300, 700 300, 850 200" />
          </circle>
          <circle r="3" fill="#002D62" filter="url(#glow)">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M150 200 L500 200 L850 200" />
          </circle>
        </svg>

        <div className="absolute inset-0 flex items-center justify-between px-10 md:px-20 z-10 w-full">
          <div className="tech-node-desktop flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl glass-panel flex items-center justify-center p-0 mb-4 border-dominican-blue/30 shadow-[0_0_30px_rgba(0,45,98,0.2)]">
              <Globe size={32} className="text-dominican-blue" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-white/60">US-EAST-1</span>
            <span className="text-sm font-semibold text-white">New York</span>
          </div>

          <div className="tech-node-desktop flex flex-col items-center mt-[-4rem]">
            <div className="w-24 h-24 rounded-full bg-obsidian border border-white/20 flex items-center justify-center mb-4 relative z-10 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
              <div className="core-glow absolute inset-0 rounded-full bg-champagne/10 blur-xl pointer-events-none" />
              <div className="absolute inset-0 rounded-full border border-white/10 animate-[ping_3s_ease-out_infinite]" />
              <Zap size={40} className="text-white" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-champagne">Raíces Core</span>
          </div>

          <div className="tech-node-desktop flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl glass-panel flex items-center justify-center p-0 mb-4 border-dominican-red/30 shadow-[0_0_30px_rgba(206,17,38,0.2)]">
              <Server size={32} className="text-dominican-red" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-white/60">DO-SDQ-1</span>
            <span className="text-sm font-semibold text-white">Santo Domingo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
