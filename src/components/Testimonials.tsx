import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, MapPin, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    name: 'María Rodríguez',
    location: 'Washington Heights, NY',
    text: 'Ahora mi mamá ve sus novelas dominicanas sin pedirle a nadie. La calidad es de lo mío, nítida. ¡Bendiciones pa\' los que crearon esto!',
    rating: 5,
    plan: 'El Tíguere',
    avatar: 'MR',
  },
  {
    name: 'Carlos Peña',
    location: 'Lawrence, MA',
    text: 'Llevo 12 años fuera y por fin puedo ver los juegos de Lidom como si estuviera en el estadio. Cero frizeo, incluso con 3 pantallas a la vez.',
    rating: 5,
    plan: 'El Patrón',
    avatar: 'CP',
  },
  {
    name: 'Yolanda Santos',
    location: 'Paterson, NJ',
    text: 'Mi esposo y yo vemos noticias por la mañana y los muchachos ven caricaturas en el cuarto. Todo al mismo tiempo sin cortes. ¡Dique!',
    rating: 5,
    plan: 'El Tíguere',
    avatar: 'YS',
  },
  {
    name: 'José Miguel Díaz',
    location: 'Miami, FL',
    text: 'Probé como 4 servicios antes. Este es el único que no se cae los fines de semana cuando todo el mundo está conectado. Recomendado 100%.',
    rating: 5,
    plan: 'El Menor',
    avatar: 'JD',
  },
  {
    name: 'Luisa Taveras',
    location: 'The Bronx, NY',
    text: 'El soporte por WhatsApp es increíble. Tuve un problema a las 11pm y me respondieron en 5 minutos. Eso no se ve en ningún lado.',
    rating: 5,
    plan: 'El Patrón',
    avatar: 'LT',
  },
  {
    name: 'Pedro Almonte',
    location: 'Providence, RI',
    text: 'Lo instalé en la televisión de mi abuela en 10 minutos. Ella llorando de la emoción viendo Telemicro otra vez. No tiene precio.',
    rating: 5,
    plan: 'El Tíguere',
    avatar: 'PA',
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.testimonial-card');
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 0.8,
            delay: i * 0.1,
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

  return (
    <section id="testimonials" ref={containerRef} className="py-28 relative overflow-hidden bg-obsidian">
      {/* Dominican Family watching TV Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen z-0"
        style={{
          backgroundImage: 'url("/images/hero_dominican_tv.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent z-0" />

      <div className="absolute top-0 left-1/4 w-[50vw] h-[30vh] bg-champagne/5 blur-[200px] rounded-full pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-champagne/20 bg-champagne/5">
            <Quote size={14} className="text-champagne" />
            <span className="text-xs font-mono text-champagne uppercase tracking-widest">Lo que dice el corillo</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-4 text-balance">
            El pueblo entero ya, <span className="font-serif italic text-champagne">goza con Raíces.</span>
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Dominicanos reales de la diáspora que ya no cogen lucha. Sin filtros, cero muela.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={i} 
              className="testimonial-card glass-card p-6 md:p-7 flex flex-col gap-4 group hover:border-champagne/20 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={14} className="fill-champagne text-champagne" />
                ))}
              </div>

              <p className="text-white/80 text-sm leading-relaxed flex-1">"{t.text}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dominican-blue to-dominican-red flex items-center justify-center text-xs font-bold text-white shrink-0">
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm text-white truncate">{t.name}</div>
                  <div className="flex items-center gap-1 text-xs text-white/50">
                    <MapPin size={10} /> {t.location}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-champagne bg-champagne/10 px-2 py-1 rounded-md shrink-0 border border-champagne/10">
                  {t.plan}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
