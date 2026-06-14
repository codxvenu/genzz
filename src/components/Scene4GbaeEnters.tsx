import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Scene4GbaeEnters() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const scrollOffset = -rect.top;
      const calcProgress = Math.max(0, Math.min(scrollOffset / (elementHeight - window.innerHeight), 1));
      setScrollProgress(calcProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nodes = [
    { label: 'Branding', x: -140, y: -70, angle: 30 },
    { label: 'Content', x: 140, y: -70, angle: 150 },
    { label: 'Recruitment', x: -150, y: 70, angle: 90 },
    { label: 'Automation', x: 150, y: 70, angle: 270 },
    { label: 'Ads Campaigns', x: -40, y: -150, angle: 210 },
    { label: 'Strategy', x: 40, y: 155, angle: 330 }
  ];

  // Progression milestones within Scene 4
  const webFullyFormed = scrollProgress > 0.15;
  const alignmentActive = scrollProgress > 0.50;
  const synchronizedState = scrollProgress > 0.80;

  return (
    <div
      ref={containerRef}
      id="scene-gba-enters"
      className="relative h-[220vh] bg-black select-none"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-8 md:justify-center items-center overflow-hidden bg-black px-4">
        
        {/* Concentric high-end visual blueprint guidelines for alignment phase */}
        <div 
          className="absolute inset-0 pointer-events-none select-none z-0 flex items-center justify-center transition-all duration-700"
          style={{ opacity: alignmentActive ? 0.35 : 0.08 }}
        >
          {/* Scientific alignment ticks & outer degree lines */}
          <div className="absolute w-[680px] h-[680px] rounded-full border border-dashed border-purple-500/10 animate-spin" style={{ animationDuration: '60s' }} />
          <div className="absolute w-[500px] h-[500px] rounded-full border border-zinc-800/40" />
          <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-zinc-700/30" />
          {/* Layout grids representing architectural blueprint coordinates */}
          <div className="absolute w-[750px] h-px bg-zinc-800/10" />
          <div className="absolute h-[750px] w-px bg-zinc-800/10" />
        </div>

        {/* Ambient violet central glow, expanding during alignment */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#7C3AED]/5 blur-[140px] pointer-events-none transition-all duration-1000 z-0"
          style={{
            transform: `translate(-50%, -50%) scale(${alignmentActive ? 1.3 : 0.8})`,
            opacity: alignmentActive ? 0.9 : 0.4
          }}
        />

        {/* Dynamic header reflecting operational states */}
        <div className="text-center space-y-2 z-20 md:absolute md:top-12 lg:top-16">
          <span className="font-sans text-[9px] tracking-[0.3em] text-purple-400 font-bold uppercase block">
            STAGE 03 // THE UNIFIED APPROACH
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white">
            {alignmentActive ? "Integrated Growth" : "The Juggling Act"}
          </h3>
          <div className="w-12 h-px bg-zinc-900 mx-auto" />
        </div>

        {/* Interactive Coordinate Canvas */}
        <div className="relative w-[500px] h-[500px] flex items-center justify-center z-10 scale-[0.55] xs:scale-[0.65] sm:scale-75 md:scale-95 lg:scale-100 my-auto md:my-0 origin-center">
          
          {/* Dynamic Interactive Lines Panel */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            {/* 1. THE MESSY WEB (Multiplies dependencies across all combinations) */}
            {webFullyFormed && !synchronizedState && (
              <g className="transition-opacity duration-700" style={{ opacity: alignmentActive ? 0.15 : 0.55 }}>
                {nodes.map((source, i) => 
                  nodes.map((target, j) => {
                    if (i >= j) return null; // Avoid exact duplicates
                    const centerX = 250;
                    const centerY = 250;
                    const x1 = centerX + source.x;
                    const y1 = centerY + source.y;
                    const x2 = centerX + target.x;
                    const y2 = centerY + target.y;

                    return (
                      <line
                        key={`${i}-${j}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="rgba(244, 244, 245, 0.08)"
                        strokeWidth="0.8"
                        strokeDasharray="2 4"
                      />
                    );
                  })
                )}
              </g>
            )}

            {/* 2. THE ALIGNED STAR Blueprints (Organized coordinates linking directly to our unified core) */}
            {alignmentActive && (
              <g>
                {nodes.map((node, i) => {
                  const centerX = 250;
                  const centerY = 250;
                  
                  // Clean orbital coordinated positions
                  const orbitalRad = 160;
                  const orbitalX = Math.cos(node.angle * (Math.PI / 180)) * orbitalRad;
                  const orbitalY = Math.sin(node.angle * (Math.PI / 180)) * orbitalRad;

                  // Fluid transition coordinates
                  const mixFactor = Math.min((scrollProgress - 0.50) * 2.5, 1);
                  const currentX = centerX + (node.x * (1 - mixFactor) + orbitalX * mixFactor);
                  const currentY = centerY + (node.y * (1 - mixFactor) + orbitalY * mixFactor);

                  return (
                    <g key={i}>
                      <motion.line
                        x1={centerX}
                        y1={centerY}
                        x2={currentX}
                        y2={currentY}
                        stroke="#A855F7"
                        strokeWidth="1.2"
                        className="opacity-45"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6 }}
                      />
                    </g>
                  );
                })}
              </g>
            )}
          </svg>

          {/* Central Architectural Alignment Core */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-black text-white flex flex-col justify-center items-center shadow-[0_0_40px_rgba(124,58,237,0.08)] relative z-10 select-none">
            {/* Spinning orbital locator ring */}
            <div className="absolute inset-1.5 border border-dashed border-purple-500/10 rounded-full animate-spin" style={{ animationDuration: '15s' }} />
            
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight leading-none text-white">
              GBA
            </h2>
            <span className="font-sans text-[8px] uppercase tracking-[0.25em] text-purple-400 mt-2 font-semibold text-center">
              {alignmentActive ? "UNIFIED PARTNER" : "GROWTH HUB"}
            </span>
          </div>

          {/* Coordinate Nodes migrating into Balanced Orbits */}
          {nodes.map((node, i) => {
            const isVisible = scrollProgress > 0.08;
            if (!isVisible) return null;

            // Compute transition positions
            const centerX = 250;
            const centerY = 250;
            const orbitalRad = 160; // Concentric alignment radius
            const orbitalX = Math.cos(node.angle * (Math.PI / 180)) * orbitalRad;
            const orbitalY = Math.sin(node.angle * (Math.PI / 180)) * orbitalRad;

            const mixFactor = alignmentActive ? Math.min((scrollProgress - 0.50) * 2.5, 1) : 0;
            const currentX = node.x * (1 - mixFactor) + orbitalX * mixFactor;
            const currentY = node.y * (1 - mixFactor) + orbitalY * mixFactor;

            return (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ 
                  opacity: 0.95, 
                  scale: 1, 
                  x: currentX, 
                  y: currentY 
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 90 }}
                className={`absolute px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-sans tracking-widest uppercase shadow-2xl flex items-center space-x-1.5 transition-all duration-500 ${
                  alignmentActive
                    ? 'bg-zinc-900 text-purple-200'
                    : 'bg-zinc-950/85 text-zinc-400'
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${alignmentActive ? 'bg-purple-400' : 'bg-zinc-650'}`} />
                <span>{node.label}</span>
              </motion.div>
            );
          })}

        </div>

        {/* Balanced Technical Subtitle explaining structural complexity versus failure */}
        <div className="max-w-lg text-center px-4 space-y-3 z-20 md:absolute md:bottom-12 lg:bottom-16">
          <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light tracking-wide leading-relaxed">
            {alignmentActive 
              ? "GBA acts as your single point of cooperation. Instead of managing separate freelancers or agencies, we coordinate your design, outreach campaigns, databases, and staffing under one growth plan."
              : "As you scale, managing multiple separate agencies and tools leads to communication issues, disjointed design, and wasted budget. The problem isn't your product—it's the friction of separate silos."
            }
          </p>
          <p className="font-sans text-[8.5px] text-zinc-650 uppercase tracking-widest font-semibold">
            SCROLL TO EXPLORE THE CAPABILITY SYSTEM
          </p>
        </div>

      </div>
    </div>
  );
}
