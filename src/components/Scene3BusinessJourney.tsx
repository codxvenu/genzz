import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export default function Scene3BusinessJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const scrollOffset = -rect.top;
      const calculatedProgress = Math.max(0, Math.min(scrollOffset / (elementHeight - window.innerHeight), 1));
      setScrollProgress(calculatedProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Growth-stage nodes representing capability emerging naturally during expansion
  const growthNodes = [
    { label: 'Branding', desc: 'Brand Design', x: -150, y: -90, activeThreshold: 0.15 },
    { label: 'Content', desc: 'Video & Imagery', x: 155, y: -80, activeThreshold: 0.30 },
    { label: 'Recruitment', desc: 'Hiring Vetted Talent', x: -160, y: 70, activeThreshold: 0.45 },
    { label: 'Automation', desc: 'Customer CRM Systems', x: 170, y: 80, activeThreshold: 0.60 },
    { label: 'Ads Campaigns', desc: 'Paid & Search Leadoffs', x: -80, y: -180, activeThreshold: 0.70 },
    { label: 'Strategy', desc: 'Actionable Roadmaps', x: 80, y: 180, activeThreshold: 0.80 },
  ];

  return (
    <div
      ref={containerRef}
      id="scene-business-journey"
      className="relative h-[250vh] bg-black select-none"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-8 md:justify-center items-center overflow-hidden bg-black px-4">
        
        {/* Subtle radial background glow */}
        <div className="absolute inset-0 pointer-events-none transition-all duration-1000 ease-out z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.04)_0%,rgba(0,0,0,1)_85%)]" />

        {/* Minimal Subtle Grid Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#555_1px,transparent_1px),linear-gradient(to_bottom,#555_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Cinematic Header Text */}
        <div className="text-center space-y-2.5 z-10 max-w-xl px-4 flex flex-col items-center md:absolute md:top-12 lg:top-16">
          <span className="font-sans text-[9px] tracking-[0.3em] text-purple-400 font-bold uppercase">
            STAGE 02 // EXPONENTIAL NEEDS
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            How Your Growth Needs Multiply
          </h3>
          <div className="w-12 h-px bg-zinc-900" />
        </div>

        {/* Network Ecosystem Container */}
        <div className="relative w-[500px] h-[500px] flex items-center justify-center z-10 scale-[0.55] xs:scale-[0.65] sm:scale-75 md:scale-95 lg:scale-100 my-auto md:my-0 origin-center">
          
          {/* SVG connective threads branching outwards */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            {growthNodes.map((node, i) => {
              if (scrollProgress < node.activeThreshold) return null;
              
              const centerX = 250;
              const centerY = 250;
              const nodeX = centerX + node.x;
              const nodeY = centerY + node.y;

              return (
                <g key={i}>
                  <motion.line
                    x1={centerX}
                    y1={centerY}
                    x2={nodeX}
                    y2={nodeY}
                    stroke="rgba(168, 85, 247, 0.25)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                  {/* High-precision trajectory crosshairs */}
                  <circle cx={nodeX} cy={nodeY} r="1.5" fill="#A855F7" className="animate-ping" />
                </g>
              );
            })}
          </svg>

          {/* Central Enterprise Origin Node */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full flex flex-col justify-center items-center text-center p-4 bg-zinc-950 text-white shadow-[0_0_40px_rgba(168,85,247,0.05)] relative z-10 select-none">
            <span className="font-sans text-[8px] uppercase tracking-widest text-zinc-500 font-bold mb-1">
              YOUR BRAND
            </span>
            <span className="font-serif text-sm sm:text-base font-normal tracking-tight">
              Business Core
            </span>
            
            {/* Spinning target grid overlay */}
            <div className="absolute inset-1 border border-zinc-800/40 rounded-full animate-spin" style={{ animationDuration: '24s' }} />
          </div>

          {/* Sequential Capability Nodes emerging */}
          {growthNodes.map((node, i) => {
            const isVisible = scrollProgress > node.activeThreshold;
            if (!isVisible) return null;

            return (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0.85, x: 0, y: 0 }}
                animate={{ 
                  opacity: 0.95, 
                  scale: 1,
                  x: node.x,
                  y: node.y
                }}
                transition={{ type: 'spring', stiffness: 85, damping: 14 }}
                className="absolute px-4 py-2 rounded-lg bg-zinc-950 text-left font-sans tracking-wide shadow-lg flex flex-col min-w-[120px]"
              >
                <div className="flex items-center space-x-1.5">
                  <span className="w-1 h-1 bg-purple-500 rounded-full animate-pulse" />
                  <span className="text-[11px] text-white font-bold uppercase">{node.label}</span>
                </div>
                <span className="text-[8px] text-zinc-500 uppercase mt-0.5">{node.desc}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Narrative sub-indicator explaining the scene realization */}
        <div className="max-w-lg text-center px-6 space-y-2 z-10 md:absolute md:bottom-12 lg:bottom-16">
          <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light tracking-wide leading-relaxed">
            As your business expands, execution needs naturally multiply. 
            Fresh design materials, ad campaigns, automations, and hiring open slots emerge all at once.
          </p>
          <p className="font-sans text-[8.5px] text-zinc-600 uppercase tracking-widest font-semibold">
            SCROLL TO ENCOUNTER GROWING COMPLEXITY SILOS
          </p>
        </div>

      </div>
    </div>
  );
}
