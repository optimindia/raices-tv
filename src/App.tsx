import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Stats from './components/Stats';
import BentoGrid from './components/BentoGrid';
import TechEngine from './components/TechEngine';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Revert logic is handled in individual components
  }, []);

  return (
    <div ref={appRef} className="min-h-screen relative overflow-hidden bg-obsidian text-ivory">
      {/* Background ambient light - Dominican Flag Colors */}
      <div className="fixed top-[-10%] left-[-10%] w-[60vw] h-[60vh] bg-dominican-blue/12 blur-[180px] rounded-full pointer-events-none z-[-1]" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vh] bg-dominican-red/12 blur-[180px] rounded-full pointer-events-none z-[-1]" />
      <div className="fixed top-[40%] left-[50%] -translate-x-1/2 w-[40vw] h-[30vh] bg-champagne/3 blur-[200px] rounded-full pointer-events-none z-[-1]" />
      
      {/* Subtle Tropical Texture overlay */}
      <div 
        className="fixed inset-0 opacity-[0.02] mix-blend-screen pointer-events-none z-[-1]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1596541530962-d24b6113b2c2?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) contrast(200%)'
        }}
      />

      <Navbar />
      
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <SocialProof />
        <Stats />
        <BentoGrid />
        <TechEngine />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}

export default App;
