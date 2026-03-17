import { Tv, CheckCircle2, ArrowRight, MessageCircle, ExternalLink } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative pt-32 pb-8 border-t border-white/5 bg-obsidian overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-dominican-blue/10 blur-[200px] rounded-full pointer-events-none" />

      {/* Final CTA Card */}
      <div className="max-w-5xl mx-auto px-6 mb-32 relative z-10">
        <div className="glass-panel p-12 md:p-16 rounded-[2.5rem] text-center border-white/10 relative overflow-hidden group">
          
          {/* Animated Glow within CTA on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-dominican-blue/30 via-transparent to-dominican-red/30 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-1000 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-6 text-white text-balance">
              ¡Dímelo!, ¿listo pa' meterte <br className="hidden md:block"/> en <span className="font-serif italic text-dominican-blue">el bolsillo la mejor TV?</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto text-balance">
              Déjate de adivinar. Únete al corillo que ya está gozando su televisión RD VIP sin coger pique.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => scrollTo('pricing')} 
                className="group/btn relative overflow-hidden w-full sm:w-auto px-8 py-4 bg-white text-obsidian rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out" />
                <span className="relative z-10 text-lg">Coronar Un Plan 🇩🇴</span>
                <ArrowRight size={20} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollTo('features')} 
                className="group/btn2 w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white hover:bg-white/5 transition-all text-lg rounded-2xl flex items-center justify-center font-medium hover:scale-105 active:scale-95"
              >
                Saber Más
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER COLUMNS */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16 relative z-10">
        
        {/* Brand Column */}
        <div className="col-span-2 md:col-span-1">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 text-white font-serif font-bold text-2xl mb-4 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-dominican-blue to-dominican-red flex items-center justify-center">
              <Tv size={18} className="text-white" />
            </div>
            <span>Raíces TV</span>
          </button>
          <p className="text-white/40 text-sm mb-6 leading-relaxed">
            La conexión definitiva con la República Dominicana. Pensado y diseñado para latinos viviendo en Estados Unidos.
          </p>
          {/* Server Status */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-white/60">Todos los sistemas operacionales</span>
          </div>
        </div>

        {/* Producto */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-white/90 mb-2">Producto</h4>
          <button onClick={() => scrollTo('pricing')} className="text-white/40 hover:text-white text-sm transition-colors text-left hover:translate-x-1 transform duration-200">Planes</button>
          <button onClick={() => scrollTo('features')} className="text-white/40 hover:text-white text-sm transition-colors text-left hover:translate-x-1 transform duration-200">Características</button>
          <button onClick={() => scrollTo('features')} className="text-white/40 hover:text-white text-sm transition-colors text-left hover:translate-x-1 transform duration-200">Dispositivos Compatibles</button>
          <button onClick={() => scrollTo('stability')} className="text-white/40 hover:text-white text-sm transition-colors text-left hover:translate-x-1 transform duration-200">Infraestructura</button>
        </div>

        {/* Soporte */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-white/90 mb-2">Soporte</h4>
          <button onClick={() => scrollTo('pricing')} className="text-white/40 hover:text-white text-sm transition-colors text-left hover:translate-x-1 transform duration-200">Centro de Ayuda</button>
          <button onClick={() => scrollTo('features')} className="text-white/40 hover:text-white text-sm transition-colors text-left hover:translate-x-1 transform duration-200">Guías de Instalación</button>
          <a href="https://wa.me/18095551234" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white text-sm transition-colors text-left hover:translate-x-1 transform duration-200 flex items-center gap-1.5">
            <MessageCircle size={12} /> Contacto WhatsApp
            <ExternalLink size={10} className="opacity-50" />
          </a>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-white/90 mb-2">Legal</h4>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/40 hover:text-white text-sm transition-colors text-left hover:translate-x-1 transform duration-200">Términos de Servicio</button>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/40 hover:text-white text-sm transition-colors text-left hover:translate-x-1 transform duration-200">Privacidad</button>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/40 hover:text-white text-sm transition-colors text-left hover:translate-x-1 transform duration-200">Políticas de Reembolso</button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-white/30 text-xs relative z-10">
        <span>© 2026 Raíces TV. Todos los derechos reservados.</span>
        <span className="mt-2 md:mt-0 flex items-center gap-1 text-white/50">
          Hecho con orgullo desde el patio 🇩🇴 <CheckCircle2 size={12} className="text-dominican-blue ml-1"/>
        </span>
      </div>
    </footer>
  );
}
