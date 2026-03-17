
const CHANNELS = [
  "Color Visión",
  "Telemicro",
  "Telesistema",
  "Teleantillas",
  "CDN 37",
  "Antena 7",
  "RNN",
  "Coral 39"
];

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-white/5 bg-black/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-dominican-blue to-dominican-red font-mono tracking-widest uppercase">
          MÁS DE 100 CANALES DOMINICANOS EN VIVO 🇩🇴
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex w-full overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...CHANNELS, ...CHANNELS, ...CHANNELS].map((channel, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center mx-8 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default"
            >
              <span className="text-xl md:text-2xl font-sans font-semibold text-white">
                {channel}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
