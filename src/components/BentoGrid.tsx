import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Activity, Monitor, Smartphone, Tv as TvIcon, Laptop } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function BentoGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.bento-item');
      items.forEach((item, i) => {
        gsap.fromTo(item,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1,
            duration: 1,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              toggleActions: 'play none none none',
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={containerRef} className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4">
          Diseñado <span className="text-champagne font-serif italic font-normal">Pa' Que No Falle.</span>
        </h2>
        <p className="text-lg text-white/70 leading-relaxed font-sans max-w-xl mx-auto">
          Un sistema nítido que garantiza tu conexión con la República Dominicana con la mayor estabilidad del mercado, cero mortificaciones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Bento Card 1: Emocional */}
        <div className="bento-item md:col-span-2 glass-card p-8 sm:p-12 relative overflow-hidden group border-white/10 hover:border-dominican-blue/30 transition-all duration-500 hover:-translate-y-1">
          <div className="absolute top-0 right-0 w-96 h-96 bg-dominican-blue/10 blur-[100px] rounded-full group-hover:bg-dominican-blue/20 transition-colors" />
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-12 h-12 rounded-xl bg-dominican-blue/20 text-dominican-blue flex items-center justify-center mb-8 border border-dominican-blue/10">
              <Heart size={24} className="fill-dominican-blue/30" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Volver a sentirte en tu tierra</h3>
            <p className="text-white/70 mb-10 max-w-sm leading-relaxed">
              La nostalgia se combate con imágenes claras. Disfruta de todos los programas dominicanos en calidad 4K/FHD sin cortes.
            </p>

            <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
              <div className="flex flex-col">
                <span className="text-xs text-white/50 font-mono mb-1">USA</span>
                <span className="font-semibold text-lg text-white">New York</span>
              </div>
              
              <div className="relative flex-1 mx-6 flex items-center justify-center group-hover:px-4 transition-all duration-700">
                <div className="h-0.5 w-full bg-gradient-to-r from-white/10 via-dominican-blue/50 to-white/10 relative">
                   <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 rounded-full bg-dominican-blue shadow-[0_0_15px_rgba(0,45,98,0.8)] animate-[ping_2s_ease-in-out_infinite]" />
                   <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-white transition-all duration-1000 group-hover:left-[calc(100%-8px)]" />
                </div>
              </div>

              <div className="flex flex-col text-right">
                <span className="text-xs text-white/50 font-mono mb-1">DOM</span>
                <span className="font-semibold text-lg text-white">Santo Domingo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Card 2: Estabilidad */}
        <div className="bento-item glass-card p-8 relative overflow-hidden group border-white/10 hover:border-dominican-red/30 transition-all duration-500 hover:-translate-y-1">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-dominican-red/10 blur-[80px] rounded-full group-hover:bg-dominican-red/20 transition-colors" />
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-12 h-12 rounded-xl bg-dominican-red/20 text-dominican-red flex items-center justify-center mb-6 border border-dominican-red/10">
              <Activity size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Cero frizeo garantizado</h3>
            <p className="text-white/70 mb-8 text-sm leading-relaxed">
              Infraestructura anti-buffer con servidores dedicados para el tráfico Norteamérica-Caribe. Nítido siempre.
            </p>

            <div className="mt-auto h-32 flex items-end gap-1.5">
              {[40, 65, 45, 80, 50, 90, 60, 100, 70, 85].map((height, i) => (
                <div 
                  key={i}
                  className="flex-1 bg-gradient-to-t from-dominican-red/20 to-dominican-red/60 rounded-t-sm transition-all duration-500 hover:from-dominican-red/60 hover:to-dominican-red border-t border-dominican-red/50 cursor-default"
                  style={{ 
                    height: `${height}%`,
                    animation: `pulse ${2 + i * 0.2}s infinite alternate` 
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bento Card 3: Screens */}
        <div className="bento-item md:col-span-3 glass-card p-8 sm:p-12 relative overflow-hidden group border-white/10 hover:border-champagne/30 transition-all duration-500 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-champagne/5 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="w-12 h-12 rounded-xl bg-champagne/20 text-champagne flex items-center justify-center mb-6 border border-champagne/10">
                <Monitor size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">4 Pantallas Simultáneas</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                En el plan máximo, comparte con tu familia. Funciona en Smart TV, móviles, laptops y tablets al mismo tiempo.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-champagne/10 text-champagne font-mono text-sm border border-champagne/10">
                <span>PLAN EL JEFE</span>
              </div>
            </div>

            <div className="md:w-2/3 flex items-center justify-center gap-6 sm:gap-12 relative">
              <div className="flex flex-col items-center gap-3 z-10 transform transition-transform group-hover:-translate-y-2 duration-500">
                <div className="w-16 h-16 rounded-2xl bg-slate/60 border border-white/10 flex items-center justify-center shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-champagne/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                  <Smartphone size={28} className="text-white/80" />
                </div>
                <span className="text-xs text-white/60 font-mono">Celular</span>
              </div>

              <div className="flex flex-col items-center gap-3 z-10 transform transition-transform group-hover:-translate-y-4 duration-500">
                <div className="w-24 h-24 rounded-2xl bg-slate/60 border border-white/15 flex items-center justify-center shadow-2xl relative overflow-hidden group-hover:border-champagne/30 transition-colors">
                   <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-champagne/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <TvIcon size={40} className="text-white" />
                </div>
                <span className="text-xs text-champagne font-mono font-medium">Smart TV</span>
              </div>

              <div className="flex flex-col items-center gap-3 z-10 transform transition-transform group-hover:-translate-y-2 duration-500">
                <div className="w-16 h-16 rounded-2xl bg-slate/60 border border-white/10 flex items-center justify-center shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-champagne/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                  <Laptop size={28} className="text-white/80" />
                </div>
                <span className="text-xs text-white/60 font-mono">Laptop</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
