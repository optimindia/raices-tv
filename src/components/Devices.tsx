import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Tv, Smartphone, Tablet, Monitor, Download, Link2, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const DEVICES = [
  {
    name: 'Android TV',
    icon: Tv,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=400&q=80',
    install: 'Downloader',
    tag: 'Más popular',
    popular: true,
  },
  {
    name: 'Roku',
    icon: Monitor,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=400&q=80',
    install: 'Link directo',
    tag: null,
    popular: false,
  },
  {
    name: 'TV Box',
    icon: Tv,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=400&q=80',
    install: 'Downloader',
    tag: null,
    popular: false,
  },
  {
    name: 'Google TV',
    icon: Monitor,
    image: 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?auto=format&fit=crop&w=400&q=80',
    install: 'Downloader',
    tag: null,
    popular: false,
  },
  {
    name: 'Celular',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80',
    install: 'Link directo',
    tag: null,
    popular: false,
  },
  {
    name: 'Tablet',
    icon: Tablet,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80',
    install: 'Link directo',
    tag: null,
    popular: false,
  },
];

export default function Devices() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.device-card');
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const openWhatsApp = () => {
    const msg = encodeURIComponent('¡Hola! Quiero instalar Raíces TV. ¿Me pueden guiar?');
    window.open(`https://wa.me/18095551234?text=${msg}`, '_blank');
  };

  return (
    <section id="dispositivos" ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1615986201152-7686a4867f30?auto=format&fit=crop&w=1920&q=80"
          alt="Living room setup"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/95 to-obsidian" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-4">
            Disponible en <span className="text-gradient-dominican font-serif italic">Todos Tus Dispositivos.</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Android TV, Roku, TV Box, Google TV, celulares y tablets. Instalación rápida por Downloader o link directo.
          </p>
        </div>

        {/* Installation Methods */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <div className="glass-card p-6 flex items-center gap-4 flex-1 max-w-sm">
            <div className="w-14 h-14 rounded-2xl bg-dominican-blue/20 text-dominican-blue flex items-center justify-center shrink-0 border border-dominican-blue/10">
              <Download size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">Para Smart TVs</h4>
              <p className="text-white/60 text-sm">Instala vía la app <span className="text-dominican-blue font-semibold">Downloader</span> en tu Android TV, TV Box o Google TV.</p>
            </div>
          </div>
          <div className="glass-card p-6 flex items-center gap-4 flex-1 max-w-sm">
            <div className="w-14 h-14 rounded-2xl bg-champagne/20 text-champagne flex items-center justify-center shrink-0 border border-champagne/10">
              <Link2 size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">Para Celulares & Tablets</h4>
              <p className="text-white/60 text-sm">Te enviamos un <span className="text-champagne font-semibold">link directo</span> por WhatsApp. Un toque y listo.</p>
            </div>
          </div>
        </div>

        {/* Device Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {DEVICES.map((device, i) => {
            const Icon = device.icon;
            return (
              <div key={i} className={`device-card group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-2 cursor-default ${device.popular ? 'border-dominican-blue/30 shadow-[0_0_30px_rgba(0,45,98,0.2)]' : 'border-white/10 hover:border-white/20'}`}>
                {/* Background image */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={device.image} 
                    alt={device.name}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent" />
                  
                  {/* Tag */}
                  {device.tag && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-dominican-blue/80 text-white text-[10px] font-bold uppercase tracking-wider">
                      {device.tag}
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center mb-3 group-hover:bg-white/20 transition-colors">
                      <Icon size={20} className="text-white" />
                    </div>
                    <h4 className="text-white font-bold text-sm mb-1">{device.name}</h4>
                    <div className="flex items-center gap-1.5">
                      {device.install === 'Downloader' ? (
                        <Download size={12} className="text-dominican-blue" />
                      ) : (
                        <Link2 size={12} className="text-champagne" />
                      )}
                      <span className={`text-xs font-mono ${device.install === 'Downloader' ? 'text-dominican-blue' : 'text-champagne'}`}>
                        {device.install}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help CTA */}
        <div className="text-center mt-12">
          <p className="text-white/50 text-sm mb-4">¿No sabes cómo instalar? Te guiamos paso a paso.</p>
          <button 
            onClick={openWhatsApp}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle size={16} />
            Pedir Ayuda por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
