import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, HelpCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FAQS = [
  {
    q: '¿Necesito una Smart TV para usar Raíces TV?',
    a: 'No es obligatorio. Raíces TV funciona en cualquier dispositivo: celulares Android/iOS, laptops, tablets, y Smart TV. También puedes conectar un Amazon Fire Stick o Chromecast a cualquier televisor y usarlo desde ahí.',
  },
  {
    q: '¿La señal se cae o se congela?',
    a: 'No. Usamos servidores dedicados con túneles directos entre la costa este de EE.UU. y República Dominicana. Nuestro uptime es de 99.8%. Si tienes internet estable (mínimo 10 Mbps), la imagen es nítida sin buffereo.',
  },
  {
    q: '¿Puedo compartir mi cuenta con mi familia?',
    a: 'Sí. El plan "El Tíguere" permite 3 pantallas simultáneas y "El Patrón" permite 4 pantallas en 4K. Cada miembro de la familia puede ver un canal diferente al mismo tiempo, en dispositivos diferentes.',
  },
  {
    q: '¿Qué canales dominicanos están incluidos?',
    a: 'Incluimos todos los principales: Telemicro, Color Visión, Teleantillas, CDN 37, Antena 7, RNN, Coral 39, Telesistema y muchos más. También tenemos deportes en vivo incluyendo Lidom, Series del Caribe y PPV exclusivos.',
  },
  {
    q: '¿Cómo funciona el pago y puedo cancelar?',
    a: 'El pago es mensual, sin contrato. Puedes pagar con tarjeta de crédito/débito o Zelle. Cancelas cuando quieras desde tu WhatsApp o directamente desde tu cuenta. Sin costos ocultos ni penalidades.',
  },
  {
    q: '¿Ofrecen prueba gratis?',
    a: '¡Sí! Ofrecemos una prueba de 24 horas totalmente gratis para que veas la calidad antes de decidirte. Solo escríbenos por WhatsApp y te activamos en minutos.',
  },
];

export default function FAQ() {
  const containerRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.faq-item');
      items.forEach((item, i) => {
        gsap.fromTo(item,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 0.6,
            delay: i * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
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
    <section id="faq" ref={containerRef} className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[40vw] h-[30vh] bg-dominican-blue/5 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-dominican-blue/20 bg-dominican-blue/5">
            <HelpCircle size={14} className="text-dominican-blue" />
            <span className="text-xs font-mono text-white/80 uppercase tracking-widest">Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-4 text-balance">
            Todo Claro Antes De <span className="font-serif italic text-dominican-blue">Decidirte.</span>
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Las dudas más comunes resueltas al instante. ¿Algo más? Escríbenos por WhatsApp.
          </p>
        </div>

        <div className="flex flex-col gap-3 relative z-10">
          {FAQS.map((faq, i) => (
            <div 
              key={i} 
              className={`faq-item glass-card overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-white/15' : 'hover:border-white/15'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left gap-4 group cursor-pointer"
              >
                <span className="font-semibold text-white group-hover:text-white transition-colors text-sm md:text-base">{faq.q}</span>
                <ChevronDown 
                  size={18} 
                  className={`text-white/50 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-champagne' : ''}`} 
                />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-out ${openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 text-white/70 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
