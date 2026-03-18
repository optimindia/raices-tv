import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CreditCard, MessageCircle, Tv, ArrowRight, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    icon: CreditCard,
    step: '01',
    title: 'Elige Tu Plan',
    description: 'Escoge entre 3 planes simples. Desde $9.99/mes. Sin contratos, sin letra chiquita. Cancela cuando quieras.',
    color: 'text-dominican-blue',
    bg: 'bg-dominican-blue/15',
    border: 'border-dominican-blue/20',
    glow: 'bg-dominican-blue/10',
  },
  {
    icon: MessageCircle,
    step: '02',
    title: 'Te Activamos por WhatsApp',
    description: 'Escríbenos y en menos de 5 minutos estás listo. Te guiamos paso a paso en la instalación. Cero estrés.',
    color: 'text-champagne',
    bg: 'bg-champagne/15',
    border: 'border-champagne/20',
    glow: 'bg-champagne/10',
  },
  {
    icon: Tv,
    step: '03',
    title: '¡A Gozar Tu TV!',
    description: 'Abre la app en tu Smart TV, celular o laptop y disfruta +4,000 canales en vivo. Así de fácil.',
    color: 'text-dominican-red',
    bg: 'bg-dominican-red/15',
    border: 'border-dominican-red/20',
    glow: 'bg-dominican-red/10',
  },
];

export default function TechEngine() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray<HTMLElement>('.step-card');
      nodes.forEach((node, i) => {
        gsap.fromTo(node,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1,
            duration: 1,
            delay: i * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const openWhatsApp = () => {
    const msg = encodeURIComponent('¡Hola! Quiero activar mi prueba gratis de 24 horas de Raíces TV.');
    window.open(`https://wa.me/18095551234?text=${msg}`, '_blank');
  };

  return (
    <section id="como-funciona" ref={containerRef} className="py-24 relative overflow-hidden bg-obsidian">
      {/* Subtle Neon Palms Background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-screen z-0"
        style={{
          backgroundImage: 'url("/images/rd_palms_neon.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian z-0" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-4">
            Actívate en <span className="text-gradient-dominican font-serif italic">3 Pasos.</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Sin instalaciones complicadas. Sin esperas. Desde tu sofá en 5 minutos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className={`step-card glass-card p-8 relative overflow-hidden group border-white/10 hover:${step.border} transition-all duration-500 hover:-translate-y-1`}>
                <div className={`absolute top-0 right-0 w-48 h-48 ${step.glow} blur-[80px] rounded-full group-hover:w-64 group-hover:h-64 transition-all`} />
                
                <div className="relative z-10">
                  <div className={`text-6xl font-bold ${step.color} opacity-20 font-mono mb-4`}>{step.step}</div>
                  <div className={`w-14 h-14 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-6 border ${step.border}`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Connector Arrow (hide on last and mobile) */}
                {i < 2 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <ArrowRight size={24} className="text-white/20" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mini CTA */}
        <div className="text-center">
          <button 
            onClick={openWhatsApp}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-dominican-blue to-dominican-red text-white rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(206,17,38,0.3)] hover:shadow-[0_0_50px_rgba(206,17,38,0.5)] text-lg"
          >
            <MessageCircle size={20} />
            Activar por WhatsApp
          </button>
          <div className="flex items-center justify-center gap-4 mt-4 text-white/40 text-sm">
            <div className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-500" /> Gratis 24h</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-500" /> Sin tarjeta</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-500" /> 5 min setup</div>
          </div>
        </div>
      </div>
    </section>
  );
}
