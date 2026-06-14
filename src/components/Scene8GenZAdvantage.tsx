import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Scene8GenZAdvantage() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const attentionPrinciples = [
    { 
      id: '01', 
      greek: '[λ-01]',
      title: 'Algorithm Decoding', 
      tagline: 'Systematic content feeds distribution mapping',
      desc: 'Decoding recommending patterns in real-time. We engineer organic hook sequences based on current system feeds, optimizing distribution depth before media bytes are even uploaded.',
      x: 180, y: 40,
      radius: 35
    },
    { 
      id: '02', 
      greek: '[μ-02]',
      title: 'Digital Culture Synthesis', 
      tagline: 'Memetic evolution mapped to buyer intent',
      desc: 'Culture shifts instantly. We bridge target client psychologies directly with native subcultures—transforming transient internet memes into high-velocity pipeline acceleration.',
      x: 320, y: 70,
      radius: 45
    },
    { 
      id: '03', 
      greek: '[θ-03]',
      title: 'Native Creator Networks', 
      tagline: 'Unfiltered sovereign attention vectors',
      desc: 'Traditional advertisements cause immediate visual exhaustion. We syndicate decentralized trust using actual native video creators communicating organic social narratives.',
      x: 290, y: 190,
      radius: 30
    },
    { 
      id: '04', 
      greek: '[α-04]',
      title: 'Attention Arbitrage Systems', 
      tagline: 'High volume lead extraction under current market costs',
      desc: 'We capture massive attention where ad platforms underprice it. Constant tactical tests discover modern under-leveraged audience pockets and lock them before cost trends adjust upward.',
      x: 180, y: 260,
      radius: 50
    },
    { 
      id: '05', 
      greek: '[τ-05]',
      title: 'Automated Operations Layer', 
      tagline: 'Modern automated setups connecting inbound sequences',
      desc: 'Bypass old manual entry structures. We build instant data syncing layers, custom visual workflows, and direct CRM pipelines that prevent organic prospect drops entirely.',
      x: 70, y: 190,
      radius: 38
    },
    { 
      id: '06', 
      greek: '[Ω-06]',
      title: 'Organic Density Pockets', 
      tagline: 'Aggregated community nests containing direct prospect leads',
      desc: 'Trafficking where buyers actually gather. We seed systems natively inside forums, niche groups, and aggregate networks to create self-sustaining compounding user funnels.',
      x: 70, y: 70,
      radius: 40
    }
  ];

  const activeIdx = hoveredIdx !== null ? hoveredIdx : 0;
  const activeItem = attentionPrinciples[activeIdx];

  return (
    <section 
      id="scene-genz-edge" 
      className="py-36 bg-black relative overflow-hidden select-none"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[35%] right-[-10%] w-[550px] h-[550px] bg-purple-900/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] left-[-15%] w-[450px] h-[450px] bg-purple-900/5 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Upper Token */}
        <div className="flex justify-center mb-8">
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#A1A1AA] uppercase font-bold border border-white/10 bg-white/5 px-4 py-1.5 rounded-full animate-pulse">
            THE ATTENTION COEFFICIENT CONSTANT
          </span>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-24 flex flex-col items-center">
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white font-normal tracking-tight leading-none">
            Deep Attention <br />
            <span className="text-gradient-purple italic font-normal">Sovereignty.</span>
          </h2>
          <div className="w-16 h-[1px] bg-zinc-850 my-4" />
          <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light tracking-wide max-w-md mx-auto leading-relaxed">
            We don&apos;t hope for attention. We map it, orchestrate its coordinates, and capture digital interest systematically.
          </p>
        </div>

        {/* CONTINUOUS CONSTELLATION STAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto px-4">
          
          {/* Left Block: Interactive SVG Vector Constellation Map */}
          <div className="lg:col-span-6 flex justify-center items-center relative h-[360px] sm:h-[420px] w-full">
            
            {/* Elegant Background Radar Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full border border-dashed border-zinc-800/60 animate-spin" style={{ animationDuration: '60s' }} />
              <div className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full border border-purple-500/5 animate-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />
              <div className="absolute w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] rounded-full border border-zinc-800/40" />
            </div>

            {/* SVG Interactive Geometry Mapping */}
            <svg 
              className="relative w-full max-w-[380px] h-full overflow-visible z-10" 
              viewBox="0 0 400 320"
            >
              <defs>
                <radialGradient id="purpleCoreGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#c084fc" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Central Glowing Engine core */}
              <circle cx="200" cy="150" r="80" fill="url(#purpleCoreGrad)" />
              <circle cx="200" cy="150" r="1.5" fill="#ffffff" />
              <circle cx="200" cy="150" r="8" fill="none" stroke="#7c3aed" strokeWidth="1" className="animate-ping" />

              {/* Constellation web connection lines */}
              {attentionPrinciples.map((node, i) => {
                const nextNode = attentionPrinciples[(i + 1) % attentionPrinciples.length];
                const isLineActive = hoveredIdx === i || hoveredIdx === ((i + 1) % attentionPrinciples.length);
                return (
                  <line
                    key={i}
                    x1={node.x}
                    y1={node.y}
                    x2={nextNode.x}
                    y2={nextNode.y}
                    stroke={isLineActive ? '#c084fc' : 'rgba(124, 58, 237, 0.15)'}
                    strokeWidth={isLineActive ? '1.5' : '1'}
                    strokeDasharray={isLineActive ? 'none' : '4 4'}
                    className="transition-all duration-500"
                  />
                );
              })}

              {/* Constellation Nodes */}
              {attentionPrinciples.map((node, i) => {
                const isHovered = hoveredIdx === i;
                const isSelected = activeIdx === i;
                return (
                  <g 
                    key={node.id} 
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    {/* Pulsing ring */}
                    {isSelected && (
                      <motion.circle
                        cx={node.x}
                        cy={node.y}
                        r={node.radius + 6}
                        fill="none"
                        stroke="#7C3AED"
                        strokeWidth="0.75"
                        strokeDasharray="3 3"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                      />
                    )}

                    {/* Outer hover limit circle */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={node.radius}
                      fill={isHovered ? 'rgba(124, 58, 237, 0.08)' : 'rgba(0, 0, 0, 0.35)'}
                      stroke={isSelected ? '#A855F7' : 'rgba(255,255,255,0.06)'}
                      strokeWidth="1"
                      className="transition-all duration-300"
                    />

                    {/* Glowing core dot */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="4"
                      fill={isSelected ? '#ffffff' : '#7C3AED'}
                      className="transition-all duration-300"
                    />

                    {/* Code label index labels inside the orbital space */}
                    <text
                      x={node.x}
                      y={node.y + 15}
                      textAnchor="middle"
                      fill={isSelected ? '#ffffff' : '#71717a'}
                      className="font-mono text-[7px] uppercase font-bold tracking-widest transition-colors duration-300"
                    >
                      {node.greek}
                    </text>
                  </g>
                );
              })}
            </svg>

          </div>

          {/* Right Block: Pure Editorial Text Reveal Stage */}
          <div className="lg:col-span-6 space-y-10 py-6">
            
            {/* Interactive Selector Header indicators */}
            <div className="flex flex-wrap gap-2 pb-6 border-b border-white/5">
              {attentionPrinciples.map((item, i) => {
                const isSelected = activeIdx === i;
                return (
                  <button
                    key={item.id}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    onClick={() => setHoveredIdx(i)}
                    className={`px-3 py-1 font-mono text-[9px] uppercase tracking-wider transition-all duration-300 cursor-pointer rounded-lg border ${
                      isSelected 
                        ? 'bg-[#7C3AED]/10 border-purple-500/40 text-purple-300 font-bold' 
                        : 'bg-transparent border-white/5 text-zinc-500 hover:border-white/15'
                    }`}
                  >
                    {item.greek} {item.title.split(' ')[0]}
                  </button>
                );
              })}
            </div>

            {/* Beautiful dynamic card-less content display */}
            <div className="min-h-[220px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-xs text-purple-400 font-bold">{activeItem.greek}</span>
                    <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#A1A1AA] font-bold">CORE COEFFICIENT DYNAMICS</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight leading-none">
                    {activeItem.title}
                  </h3>

                  <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-purple-400 font-bold">
                    {activeItem.tagline}
                  </p>

                  <div className="w-12 h-[1px] bg-zinc-800 my-2" />

                  <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-xl">
                    {activeItem.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
