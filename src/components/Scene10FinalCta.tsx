import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export default function Scene10FinalCta({ onOpenBooking }: FinalCtaProps) {
  return (
    <section 
      id="scene-final-cta" 
      className="py-32 bg-black relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[130px]" />
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[400px] bg-purple-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-12 relative z-10 select-none">
        
        {/* Subtle upper token */}
        <div className="flex justify-center">
          <div className="inline-flex items-center space-x-2 bg-zinc-900/60 px-4 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#A855F7] animate-pulse" />
            <span className="font-sans text-[9px] tracking-[0.25em] text-[#A1A1AA] uppercase font-bold">
              GET YOUR PLAN
            </span>
          </div>
        </div>

        {/* Large Statement */}
        <div className="space-y-4">
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal tracking-tight leading-[1.05]">
            Ready to Scale <br />
            <span className="text-gradient-purple italic font-normal">
              Your Business?
            </span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 font-light max-w-sm mx-auto leading-relaxed mt-2 tracking-wide uppercase">
            Let&apos;s talk about your branding, marketing, and recruitment goals.
          </p>
        </div>

        {/* Dynamic Launch Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            className="group flex items-center space-x-3 px-8 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-[11px] font-sans tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg shadow-purple-900/40 hover:scale-105 cursor-pointer font-bold"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Direct Contact Reference */}
        <div className="pt-8 border-t border-white/5 max-w-sm mx-auto space-y-3">
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#7C3AED] uppercase font-bold block">
            Direct Connection
          </span>
          <div className="space-y-0.5">
            <h4 className="text-white text-sm font-normal">Devanshu Sehgal</h4>
            <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Product Manager</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 text-xs font-mono pt-1">
            <a href="mailto:genzesofindia@gmail.com" className="text-zinc-400 hover:text-[#C084FC] transition-colors">
              genzesofindia@gmail.com
            </a>
            <span className="hidden sm:inline text-zinc-700">|</span>
            <a href="tel:7087614437" className="text-zinc-400 hover:text-[#C084FC] transition-colors">
              7087614437
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
