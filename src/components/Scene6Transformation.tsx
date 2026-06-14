import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Scene6Transformation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  // Auto-slide effect on mouse hover if not dragging
  const handleContainerMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section 
      id="scene-transformation" 
      className="py-32 bg-black relative overflow-hidden select-none"
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Upper Token */}
        <div className="flex justify-center mb-8">
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#A1A1AA] uppercase font-bold border border-white/10 bg-white/5 px-4 py-1.5 rounded-full">
            REALITY TRANSMUTATION SHIELD
          </span>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 flex flex-col items-center">
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white font-normal tracking-tight leading-none">
            An Unfair <br />
            <span className="text-gradient-purple italic font-normal">Transmutation.</span>
          </h2>
          <div className="w-16 h-[1px] bg-zinc-800 my-4" />
          <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
            Drag or glide your cursor across the operational system below to witness fragmented agency chaos transmuted into GBA&apos;s clean, unified trajectory.
          </p>
        </div>

        {/* IMMERSIVE COMPARATIVE SLIDER CANVAS */}
        <div 
          ref={containerRef}
          onMouseMove={handleContainerMouseMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          className="relative h-[550px] md:h-[650px] w-full rounded-[30px] border border-white/10 bg-zinc-950 overflow-hidden cursor-ew-resize group"
          id="reality-slider-stage"
        >
          {/* BACKGROUND SYSTEM LAYER 1: CHAOTIC RED SILO REALITY */}
          <div 
            className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-300"
            style={{ opacity: 1 - sliderPos / 100 }}
          />

          {/* LEFT CONTENT: THE TRADITIONAL CHAOTIC SILO */}
          <div className="absolute inset-0 w-full h-full flex flex-col justify-between p-8 md:p-16 text-left">
            <div className="max-w-md space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-950/20 border border-red-500/20 rounded-full">
                <AlertCircle className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                <span className="font-mono text-[9px] uppercase tracking-wider text-red-400 font-bold">CHAOTIC SILOS (YOUR CURRENT STATE)</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-red-100 font-normal leading-tight">
                Bleeding Revenue <br />
                In Broken Departments.
              </h3>
              <p className="font-sans text-xs sm:text-sm text-zinc-500 font-light leading-relaxed max-w-sm">
                Disconnected freelancers, slow recruitment cycles, missing brand systems, and marketing channels that don&apos;t align. You pay multiple coordinator overheads to lead zero unified strategy.
              </p>
            </div>

            {/* Red Pulsing Fragmented Network Visual */}
            <div className="w-full max-w-lg h-44 relative mt-6 opacity-45">
              <svg className="w-full h-full" viewBox="0 0 400 150">
                {/* Red disjointed nodes */}
                <circle cx="80" cy="40" r="12" fill="none" stroke="#ef4444" strokeWidth="2" className="animate-pulse" />
                <circle cx="280" cy="110" r="16" fill="none" stroke="#ef4444" strokeWidth="1.5" />
                <circle cx="150" cy="120" r="9" fill="none" stroke="#ef4444" strokeWidth="2.5" />
                <circle cx="320" cy="30" r="11" fill="none" stroke="#ef4444" strokeWidth="2" />
                
                {/* Broken lines showing isolation */}
                <line x1="80" y1="40" x2="130" y2="100" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 8" className="opacity-40" />
                <line x1="150" y1="120" x2="230" y2="110" stroke="#ef4444" strokeWidth="1" strokeDasharray="6 6" className="opacity-30" />
                <line x1="320" y1="30" x2="280" y2="80" stroke="#ef4444" strokeWidth="1" strokeDasharray="5 5" className="opacity-30" />

                {/* Micro Glitched Text Labels */}
                <text x="75" y="16" fill="#f87171" className="font-mono text-[7px] uppercase font-bold tracking-widest">Silo A (Overbid Advertising)</text>
                <text x="210" y="142" fill="#f87171" className="font-mono text-[7px] uppercase font-bold tracking-widest">Silo B (Ghosted Leads)</text>
                <text x="290" y="16" fill="#f87171" className="font-mono text-[7px] uppercase font-bold tracking-widest">Silo C (Friction Staffing)</text>
              </svg>
            </div>
          </div>

          {/* RIGHT CONTENT: THE UNIFIED SYSTEM (CLIPPED BASED ON SLIDER) */}
          <div 
            className="absolute inset-y-0 right-0 overflow-hidden bg-gradient-to-br from-purple-950/30 via-zinc-950 to-black transition-all ease-out duration-75"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Inline inner viewport matching the exact outer resolution to keep content aligned */}
            <div 
              className="absolute inset-y-0 right-0 p-8 md:p-16 flex flex-col justify-between text-right items-end"
              style={{ width: containerRef.current?.getBoundingClientRect().width || '100%' }}
            >
              <div className="max-w-md space-y-6 flex flex-col items-end">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-purple-950/40 border border-purple-500/35 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 animate-bounce" />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-purple-300 font-bold">GBA COHERENCE LAYER (UNIFIED STAGE)</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight">
                  One Unified Engine. Full <br />
                  Operational Sovereign.
                </h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
                  We consolidate all departments into an elite self-reinforced feedback loop. Narrative brand architecture, predictive acquisition pipelines, embedded operators, and macro tactical guidance working in perfect synchronization.
                </p>
              </div>

              {/* Serene Purple Flowing Perfect Network Visual */}
              <div className="w-full max-w-lg h-44 relative mt-6 opacity-80 self-end">
                <svg className="w-full h-full" viewBox="0 0 400 150">
                  {/* Glowing core orbital lines */}
                  <path d="M 50,75 Q 200,-10 350,75" fill="none" stroke="rgba(124, 58, 237, 0.15)" strokeWidth="3" />
                  <path d="M 50,75 Q 200,160 350,75" fill="none" stroke="rgba(124, 58, 237, 0.15)" strokeWidth="3" />

                  {/* Flowing solid lines */}
                  <path d="M 50,75 Q 200,30 350,75" fill="none" stroke="url(#purpleGlowGrad)" strokeWidth="2.5" />
                  <path d="M 50,75 Q 200,120 350,75" fill="none" stroke="url(#purpleGlowGrad)" strokeWidth="2.5" />

                  {/* Unified, glowing clean nodes */}
                  <circle cx="50" cy="75" r="10" fill="#7C3AED" className="animate-pulse" />
                  <circle cx="130" cy="51" r="7" fill="#A855F7" />
                  <circle cx="200" cy="75" r="12" fill="#6D28D9" />
                  <circle cx="270" cy="99" r="7" fill="#C084FC" />
                  <circle cx="350" cy="75" r="10" fill="#7C3AED" className="animate-pulse" />

                  {/* Flowing light dot along paths */}
                  <motion.circle 
                    r="4" 
                    fill="#ffffff" 
                    animate={{
                      cx: [50, 130, 200, 270, 350],
                      cy: [75, 51, 75, 99, 75]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="purpleGlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="50%" stopColor="#A855F7" />
                      <stop offset="100%" stopColor="#6D28D9" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

            </div>
          </div>

          {/* DYNAMIC PARTITION HANDLE */}
          <div 
            className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-purple-500 via-white to-red-500 cursor-ew-resize z-20 shadow-[0_0_20px_rgba(168,85,247,0.5)] flex items-center justify-center"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Elegant visual ring around handle */}
            <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/20 shadow-2xl flex items-center justify-center text-white/80 scale-100 hover:scale-110 active:scale-95 transition-transform">
              <svg className="w-5 h-5 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 9l-4 4 4 4m8 0l4-4-4-4" />
              </svg>
            </div>
            {/* Helper drag indicator tooltips */}
            <span className="absolute -top-10 font-mono text-[8px] uppercase tracking-[0.25em] bg-red-950/45 px-2 py-1 rounded text-red-400 border border-red-500/10 pointer-events-none -translate-x-[50px] opacity-0 group-hover:opacity-100 transition-opacity">
              Chaos
            </span>
            <span className="absolute -top-10 font-mono text-[8px] uppercase tracking-[0.25em] bg-purple-950/45 px-2 py-1 rounded text-purple-400 border border-purple-500/10 pointer-events-none translate-x-[50px] opacity-0 group-hover:opacity-100 transition-opacity">
              Coherence
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
