import { motion } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';

interface Scene10FinalCtaProps {
  onOpenBooking: () => void;
}

export default function Scene10FinalCta({ onOpenBooking }: Scene10FinalCtaProps) {
  return (
    <section 
      id="scene-final-cta" 
      className="py-40 bg-zinc-950 relative overflow-hidden"
    >
      {/* Decorative vertical lines and glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute left-[10%] top-0 bottom-0 w-[0.5px] bg-white/5" />
        <div className="absolute right-[10%] top-0 bottom-0 w-[0.5px] bg-white/5" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-900/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center">
        
        {/* Upper Token */}
        <div className="flex justify-center mb-8">
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#A1A1AA] uppercase font-bold border border-white/10 bg-white/5 px-4 py-1.5 rounded-full">
            SYSTEM CORE INITIATED // ENTRANCE_POINT
          </span>
        </div>

        {/* Closing conversion layout */}
        <div className="max-w-3xl space-y-8 flex flex-col items-center">
          
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white font-normal tracking-tight leading-none">
            Scale Coherently. <br />
            <span className="text-gradient-purple italic font-normal">Connect The System.</span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light tracking-wide max-w-md mx-auto leading-relaxed">
            Stop sacrificing margin on divided agencies. Partner with GBA's singular operations engine. Let&apos;s build your custom growth blueprint together.
          </p>

          <div className="w-16 h-[1px] bg-zinc-800 my-4" />

          {/* Unified dynamic action trigger */}
          <div className="pt-4 flex flex-col items-center space-y-4">
            <button
              onClick={onOpenBooking}
              className="px-10 py-5 bg-white text-black hover:bg-[#7C3AED] hover:text-white font-mono text-xs tracking-widest uppercase rounded-full transition-all duration-500 shadow-2xl flex items-center space-x-3 cursor-pointer group"
            >
              <span>INITIATE GROWTH AUDIT</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex items-center space-x-2 font-mono text-[8px] text-zinc-550 uppercase tracking-widest">
              <Terminal className="w-3.5 h-3.5 text-zinc-650" />
              <span>Free Consultation Assessment Router Matching Active</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
