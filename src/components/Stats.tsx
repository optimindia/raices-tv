import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Wifi, Clock, Headphones, Tv, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { icon: Tv, value: '100+', label: 'Canales RD', color: 'text-dominican-blue', bg: 'bg-dominican-blue/15', border: 'border-dominican-blue/20' },
  { icon: Shield, value: '99.8%', label: 'Sin Cortes', color: 'text-emerald-400', bg: 'bg-emerald-400/15', border: 'border-emerald-400/20' },
  { icon: Wifi, value: '4K UHD', label: 'Calidad', color: 'text-champagne', bg: 'bg-champagne/15', border: 'border-champagne/20' },
  { icon: Clock, value: '24/7', label: 'Soporte', color: 'text-dominican-red', bg: 'bg-dominican-red/15', border: 'border-dominican-red/20' },
  { icon: Headphones, value: '5 min', label: 'Activación', color: 'text-violet-400', bg: 'bg-violet-400/15', border: 'border-violet-400/20' },
  { icon: Users, value: '2,500+', label: 'Familias', color: 'text-amber-400', bg: 'bg-amber-400/15', border: 'border-amber-400/20' },
];

export default function Stats() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.stat-item');
      items.forEach((item, i) => {
        gsap.fromTo(item,
          { y: 20, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 0.5,
            delay: i * 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
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
    <section ref={containerRef} className="py-16 relative overflow-hidden border-y border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className={`stat-item flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white/[0.03] border ${stat.border} hover:bg-white/[0.06] transition-all duration-300 group`}>
                <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={18} className={stat.color} />
                </div>
                <div className="flex flex-col">
                  <span className={`text-lg font-bold ${stat.color} leading-tight`}>{stat.value}</span>
                  <span className="text-[11px] text-white/50 font-medium uppercase tracking-wider leading-tight">{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
