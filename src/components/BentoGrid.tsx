import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Tv, Signal, Smartphone, Monitor, Laptop } from 'lucide-react';

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
          ¿Por Qué Elegir <span className="text-gradient-dominican font-serif italic font-bold">Raíces TV?</span>
        </h2>
        <p className="text-lg text-white/70 leading-relaxed font-sans max-w-xl mx-auto">
          Todo lo que necesitas para disfrutar la televisión dominicana como si estuvieras allá. Sin complicaciones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Bento Card 1: Canales */}
        <div className="bento-item md:col-span-2 glass-card p-8 sm:p-12 relative overflow-hidden group border-white/10 hover:border-dominican-blue/30 transition-all duration-500 hover:-translate-y-1">
          <div className="absolute top-0 right-0 w-96 h-96 bg-dominican-blue/10 blur-[100px] rounded-full group-hover:bg-dominican-blue/20 transition-colors" />
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-12 h-12 rounded-xl bg-dominican-blue/20 text-dominican-blue flex items-center justify-center mb-8 border border-dominican-blue/10">
              <Tv size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Tus Canales Favoritos en Vivo</h3>
            <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
              Telemicro, Color Visión, CDN 37, Teleantillas, Antena 7, Coral 39, RNN y más de 100 canales dominicanos. Noticias, novelas, deportes y entretenimiento 24/7.
            </p>

            {/* Channel Grid */}
            <div className="mt-auto grid grid-cols-4 gap-2">
              {['Telemicro', 'Color Visión', 'CDN 37', 'Teleantillas', 'Antena 7', 'RNN', 'Coral 39', 'Telesistema'].map((ch, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-center group-hover:bg-white/10 transition-colors">
                  <span className="text-[10px] font-mono text-white/70 block">{ch}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Card 2: Estabilidad */}
        <div className="bento-item glass-card p-8 relative overflow-hidden group border-white/10 hover:border-dominican-red/30 transition-all duration-500 hover:-translate-y-1">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-dominican-red/10 blur-[80px] rounded-full group-hover:bg-dominican-red/20 transition-colors" />
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-12 h-12 rounded-xl bg-dominican-red/20 text-dominican-red flex items-center justify-center mb-6 border border-dominican-red/10">
              <Signal size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Cero Cortes. Cero Frizeo.</h3>
            <p className="text-white/70 mb-8 text-sm leading-relaxed">
              Señal estable las 24 horas. Servidores optimizados para Estados Unidos con 99.8% de disponibilidad. Ni en Super Bowl se te cae.
            </p>

            {/* Signal strength visual */}
            <div className="mt-auto flex items-end gap-1.5 h-24">
              {[40, 55, 45, 70, 60, 85, 75, 95, 80, 100].map((height, i) => (
                <div 
                  key={i}
                  className="flex-1 bg-gradient-to-t from-emerald-500/30 to-emerald-500/80 rounded-t-sm transition-all duration-500 hover:to-emerald-400 border-t border-emerald-400/50 cursor-default"
                  style={{ 
                    height: `${height}%`,
                    animation: `pulse ${2 + i * 0.2}s infinite alternate` 
                  }}
                />
              ))}
            </div>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400">Señal estable — 99.8%</span>
            </div>
          </div>
        </div>

        {/* Bento Card 3: Multi-Pantalla */}
        <div className="bento-item md:col-span-3 glass-card p-8 sm:p-12 relative overflow-hidden group border-white/10 hover:border-champagne/30 transition-all duration-500 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-champagne/5 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="w-12 h-12 rounded-xl bg-champagne/20 text-champagne flex items-center justify-center mb-6 border border-champagne/10">
                <Monitor size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Toda La Familia Conectada</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Hasta 4 pantallas al mismo tiempo. Mamá ve novelas, papá ve noticias, los muchachos ven lo suyo. Una sola cuenta, cero conflictos.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-champagne/10 text-champagne font-mono text-sm border border-champagne/10">
                <span>Hasta 4 pantallas simultáneas</span>
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
                  <Tv size={40} className="text-white" />
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
