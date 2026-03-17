import { useEffect, useRef, useState } from 'react';
import { Tv, Menu, X } from 'lucide-react';
import gsap from 'gsap';

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.75)',
        delay: 0.1
      });
    }, navRef);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const NAV_LINKS = [
    { label: 'Características', target: 'features', color: 'bg-dominican-blue' },
    { label: 'Red', target: 'stability', color: 'bg-dominican-red' },
    { label: 'Testimonios', target: 'testimonials', color: 'bg-champagne' },
    { label: 'Planes', target: 'pricing', color: 'bg-emerald-500' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none">
      <nav 
        ref={navRef}
        className={`pointer-events-auto transition-all duration-500 ease-out flex flex-col md:flex-row items-center justify-between glass-panel rounded-3xl md:rounded-full relative overflow-hidden group
          ${scrolled ? 'w-full md:w-[850px] bg-slate/70 backdrop-blur-xl border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]' : 'w-full md:w-[1000px] bg-slate/40 backdrop-blur-md border-white/5'}
        `}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full ease-in-out pointer-events-none" />

        <div className={`w-full px-6 flex items-center justify-between relative z-10 ${scrolled ? 'h-14' : 'h-18'} transition-all duration-500`}>
          <button onClick={() => { setMobileOpen(false); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="flex items-center gap-2.5 text-white font-serif font-bold text-xl md:text-2xl group/logo cursor-pointer">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-dominican-blue to-dominican-red shadow-[0_0_15px_rgba(0,45,98,0.3)] group-hover/logo:scale-110 group-hover/logo:shadow-[0_0_25px_rgba(206,17,38,0.5)] transition-all duration-300">
              <Tv size={16} className="text-white" />
            </div>
            <span className="tracking-tight">Raíces<span className="text-champagne">TV 🇩🇴</span></span>
          </button>

          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-white/60">
            {NAV_LINKS.map((link) => (
              <button key={link.target} onClick={() => scrollTo(link.target)} className="hover:text-white transition-all duration-300 relative group/link py-1">
                {link.label}
                <span className={`absolute -bottom-0.5 left-0 w-0 h-0.5 ${link.color} transition-all duration-300 group-hover/link:w-full rounded-full`} />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button onClick={() => scrollTo('pricing')} className="px-6 py-2.5 rounded-full bg-gradient-to-r from-dominican-blue to-dominican-red font-semibold text-sm hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(206,17,38,0.2)] hover:shadow-[0_0_30px_rgba(206,17,38,0.4)] relative overflow-hidden group/btn text-white">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out" />
              <span className="relative z-10">¡Entrar Ahora!</span>
            </button>
          </div>

          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="md:hidden text-white/80 p-2 hover:bg-white/10 rounded-full transition-colors active:scale-90"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className={`md:hidden w-full overflow-hidden transition-all duration-500 ease-out ${mobileOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 pt-2 flex flex-col gap-1 border-t border-white/10">
            {NAV_LINKS.map((link) => (
              <button 
                key={link.target} 
                onClick={() => scrollTo(link.target)} 
                className="text-left text-white/70 hover:text-white py-3 px-4 rounded-xl hover:bg-white/5 transition-all text-base font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-3">
              <button onClick={() => scrollTo('pricing')} className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-dominican-blue to-dominican-red text-white font-bold transition-all text-sm">
                ¡Entrar Ahora!
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
