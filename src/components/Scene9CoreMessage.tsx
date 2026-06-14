import { motion } from 'motion/react';

export default function Scene9CoreMessage() {
  return (
    <section 
      id="scene-core-message" 
      className="py-44 bg-black relative overflow-hidden select-none"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {/* Subtle grid line intersections */}
        <div className="absolute left-[20%] top-0 bottom-0 w-[0.5px] bg-white/5" />
        <div className="absolute left-[80%] top-0 bottom-0 w-[0.5px] bg-white/5" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center">
        
        {/* Upper Token */}
        <div className="flex justify-center mb-10">
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#A1A1AA] uppercase font-bold border border-white/5 bg-white/5 px-4 py-1.5 rounded-full">
            REALITY DECISION INDEX
          </span>
        </div>

        {/* Sophisticated editorial display copy */}
        <div className="max-w-4xl text-center space-y-12">
          
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal tracking-tight leading-[1.05]">
            The Safe Path of <br />
            <span className="text-gradient-purple italic font-normal">Mediocrity is Exhausting.</span>
          </h2>

          <div className="w-16 h-[0.75px] bg-zinc-800 mx-auto" />

          <p className="font-sans text-xs sm:text-sm md:text-base text-zinc-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            You can continue managing disconnected agencies, paying multiple high-agency coordination overheads, and relying on traditional cold systems. Or you can embed a singular, unified operations engine to systemize your enterprise.
          </p>

          {/* Micro layout coordinates */}
          <div className="flex justify-center items-center space-x-2 pt-6 font-mono text-[8px] tracking-[0.25em] text-zinc-650 uppercase">
            <span>Sovereign Output</span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-550 animate-pulse" />
            <span>Constant Growth</span>
          </div>

        </div>

      </div>
    </section>
  );
}
