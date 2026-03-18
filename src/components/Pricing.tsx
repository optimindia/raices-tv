import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, Star, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PLANS = [
  {
    name: 'El Menor',
    price: '$9.99',
    period: '/mes',
    description: 'Para empezar a disfrutar tus canales favoritos sin complicaciones.',
    features: [
      '1 Pantalla en HD',
      '4,000+ Canales en Vivo',
      '40,000+ Películas',
      'Soporte por WhatsApp'
    ],
    popular: false,
    cta: 'Empezar Ahora',
  },
  {
    name: 'El Tíguere',
    price: '$14.99',
    period: '/mes',
    description: 'El más popular. Ideal para familias que quieren verlo todo.',
    features: [
      '3 Pantallas simultáneas HD+',
      '4,000+ Canales + 40,000+ Películas',
      '5,000+ Series y Deportes en Vivo',
      'Cero frizeo garantizado',
      'Soporte Prioritario WhatsApp'
    ],
    popular: true,
    cta: 'Elegir Tíguere',
  },
  {
    name: 'El Patrón',
    price: '$24.99',
    period: '/mes',
    description: 'Todo en 4K Ultra HD. La experiencia completa sin límites.',
    features: [
      '4 Pantallas en 4K Ultra HD',
      '4,000+ Canales + Todo el Catálogo',
      'PPV + Series + Películas Premium',
      'Conexión prioritaria sin delay',
      'Soporte 24/7 dedicado'
    ],
    popular: false,
    cta: 'Elegir Patrón',
  }
];

export default function Pricing() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.pricing-card');
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 1,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
              toggleActions: 'play none none none',
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleSelectPlan = (planName: string) => {
    const msg = encodeURIComponent(`¡Klk! Me interesa el plan "${planName}" de Raíces TV. ¿Cómo me activo?`);
    window.open(`https://wa.me/18095551234?text=${msg}`, '_blank');
  };

  return (
    <section id="pricing" ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[50vh] bg-dominican-blue/8 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 relative z-10">
          {/* Free Trial Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-semibold text-emerald-400">🎁 Prueba 24 horas GRATIS — Sin tarjeta de crédito</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-4 text-balance">
            Elige Tu Plan. <span className="text-gradient-dominican font-serif italic text-4xl">Sin Contratos. Cancela Cuando Quieras.</span>
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Planes simples y claros. Paga mensual con tarjeta o Zelle. Sin costos ocultos ni letras chiquitas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card relative glass-panel rounded-3xl p-8 flex flex-col border transition-all duration-500 hover:-translate-y-2 ${plan.popular ? 'border-dominican-blue/50 md:scale-110 shadow-[0_0_50px_rgba(0,45,98,0.3)] z-10' : 'border-white/10 hover:border-white/20'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-dominican-blue to-dominican-red px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-[0_0_20px_rgba(206,17,38,0.5)] whitespace-nowrap text-white">
                  <Star size={12} className="fill-white" /> MÁS KLK (PREFERIDO)
                </div>
              )}
              
              {plan.popular && <div className="absolute inset-0 bg-gradient-to-b from-dominican-blue/10 to-transparent pointer-events-none rounded-3xl" />}

              <div className="mb-8 relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <p className="text-white/80 text-sm mb-6 h-10 line-clamp-2">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/80 font-medium">{plan.period}</span>
                </div>
              </div>

              <ul className="flex-1 flex flex-col gap-4 mb-8 relative z-10">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className={plan.popular ? 'text-dominican-blue mt-0.5 shrink-0' : 'text-white/40 mt-0.5 shrink-0'} />
                    <span className="text-sm text-white/80 leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleSelectPlan(plan.name)}
                className={`w-full py-4 rounded-xl transition-all relative overflow-hidden group/btn flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
                  plan.popular 
                    ? 'bg-white text-obsidian font-bold shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105' 
                    : 'bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/15 hover:scale-105'
                }`}
              >
                {plan.popular && <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out" />}
                <span className="relative z-10">{plan.cta}</span>
                <ArrowRight size={16} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
