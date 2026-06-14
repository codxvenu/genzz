import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface DivisionItem {
  roman: string;
  num: string;
  title: string;
  tagline: string;
  desc: string;
  image: string;
  blueprintSymbol: string;
}

export default function Scene5StickyStorytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const divisions: DivisionItem[] = [
    {
      roman: 'I',
      num: '01',
      title: 'Narrative Authority',
      tagline: 'BRAND ARCHITECTURE DEVELOPMENT',
      desc: 'We sketch and formulate absolute brand identities. We craft distinct typographies, custom logotype systems, digital style architectures, and core marketing blueprints paired meticulously to build instant customer trust.',
      image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=1200',
      blueprintSymbol: 'M-11 / COMPOSITION'
    },
    {
      roman: 'II',
      num: '02',
      title: 'Attention Synclines',
      tagline: 'MULTICHANNEL DISTRIBUTION LOOPS',
      desc: 'Active attention capture on the digital frontlines. GBA structures custom distribution campaigns, organic algorithm tests, and creator-led visual hooks to keep your business top-of-mind.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200',
      blueprintSymbol: 'K-24 / KINETIC FOCUS'
    },
    {
      roman: 'III',
      num: '03',
      title: 'Operational Elite',
      tagline: 'NATIVE WORKFLOW OPERATOR PLACEMENTS',
      desc: 'Bypass expensive recruitment middlemen. GBA thoroughly vets, verifies, and embeds modern technical operators and growth managers natively into your actual daily processes for continuous momentum.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
      blueprintSymbol: 'V-88 / INTEGRATED FORCE'
    },
    {
      roman: 'IV',
      num: '04',
      title: 'Lead Pipeline Turbines',
      tagline: 'PREDICTABLE ACQUISITION ENGINES',
      desc: 'We engineer automated lead pipelines. No more cold-outbound exhaustion—we deploy targeted target sequences, proprietary landing funnels, and real sales validation models systematically.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200',
      blueprintSymbol: 'A-04 / REVENUE PRESSURE'
    },
    {
      roman: 'V',
      num: '05',
      title: 'Tactical Blueprints',
      tagline: 'MACRO ENTERPRISE CONSULTING',
      desc: 'We audit the entire machine to locate operational friction. Our partners provide clear operating sheets, systemic plans, and step-by-step milestones to prepare your organization for macro-scale expansion.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
      blueprintSymbol: 'B-10 / SYSTEM Blue'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const scrollOffset = -rect.top;
      
      // Calculate fraction relative to scroll height minus sticky frame viewport
      const progress = Math.min(Math.max(scrollOffset / (elementHeight - window.innerHeight), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine active slice based on progress divided strictly by fraction brackets
  const activeIdx = Math.min(Math.floor(scrollProgress * (divisions.length + 0.1)), divisions.length - 1);
  const activeDivision = divisions[activeIdx] || divisions[0];

  return (
    <div
      ref={containerRef}
      id="scene-sticky-storytelling"
      className="relative h-[480vh] bg-black select-none"
    >
      {/* Sticky viewports frame */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center bg-black overflow-hidden z-10 px-6 sm:px-12 lg:px-24">
        
        {/* Parallax Background Structural Coordinates Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="exhibitionGrid" width="60" h="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#exhibitionGrid)" />
            
            {/* Subtle atmospheric blueprint rotating circles */}
            <motion.circle 
              cx="80%" 
              cy="30%" 
              r="220" 
              fill="none" 
              stroke="rgba(124, 58, 237, 0.04)" 
              strokeWidth="0.75" 
              strokeDasharray="6 12" 
              animate={{ rotate: 360 }}
              transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
            />
            <motion.circle 
              cx="10%" 
              cy="80%" 
              r="180" 
              fill="none" 
              stroke="rgba(124, 58, 237, 0.03)" 
              strokeWidth="1" 
              strokeDasharray="4 8" 
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            />
          </svg>
        </div>

        {/* Ambient glow backing */}
        <div className="absolute top-[30%] left-[45%] -translate-x-1/2 w-[600px] h-[600px] bg-[#7C3AED]/4 rounded-full blur-[160px] pointer-events-none" />

        {/* Dynamic Display Indicators */}
        <div className="absolute top-12 left-12 right-12 flex justify-between items-center z-20 border-b border-white/5 pb-4">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-purple-550 rounded-full animate-ping" />
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#A1A1AA] font-bold">
              PORTAL II &bull; INTEGRATED DIVISIONS
            </span>
          </div>
          <span className="font-mono text-[9px] text-[#7C3AED] uppercase tracking-[0.25em] font-bold">
            PROGRESS INDEX: {Math.round(scrollProgress * 100)}%
          </span>
        </div>

        {/* Split Ambient Projection Screen */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center h-full max-w-7xl mx-auto pt-12">
          
          {/* LEFT: IMMERSIVE EDITORIAL LAYOUT — Floating dynamically with no bounding cards */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8 text-left">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: 20, filter: 'blur(8px)' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                {/* Large Elegant Index identifier */}
                <div className="flex items-baseline space-x-4">
                  <span className="font-serif text-[42px] font-normal leading-none text-[#7C3AED] italic tracking-tight">
                    {activeDivision.roman}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 font-bold">
                    SYSTEMS SEGMENT 0{activeDivision.num}
                  </span>
                </div>

                {/* Majestic Header */}
                <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-tight">
                  {activeDivision.title}
                </h3>

                {/* Technical dynamic tagline value */}
                <div className="flex items-center space-x-3">
                  <div className="h-[1px] w-6 bg-[#7C3AED]" />
                  <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#C084FC] uppercase font-bold">
                    {activeDivision.tagline}
                  </span>
                </div>

                {/* Core Descriptive Text */}
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-xl">
                  {activeDivision.desc}
                </p>

                {/* Architectural Blueprint details row */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between font-mono text-[8px] text-zinc-500 tracking-wider">
                  <span>VECTOR: {activeDivision.blueprintSymbol}</span>
                  <span>COORDINATES // SCALE ACTIVE</span>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* RIGHT: PORTRAIT ASYMMETRICAL PROJECTION SPACE */}
          <div className="lg:col-span-6 flex items-center justify-center relative w-full h-[320px] sm:h-[450px] lg:h-[500px]">
            
            {/* Elegant Background Line Coordinates framing the picture */}
            <div className="absolute -inset-4 border border-zinc-900 pointer-events-none" />
            <div className="absolute -top-4 -bottom-4 left-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
            <div className="absolute -left-4 -right-4 top-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            {/* Picture Stage with mask-fade filter - No outer cards */}
            <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, scale: 1.08, filter: 'brightness(0.3) blur(6px)' }}
                  animate={{ opacity: 0.65, scale: 1, filter: 'brightness(0.5) blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.94, filter: 'brightness(0.2) blur(8px)' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={activeDivision.image}
                    alt={activeDivision.title}
                    className="w-full h-full object-cover filter grayscale"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Dynamic Coordinate Target overlays */}
              <div className="absolute inset-x-6 top-6 flex justify-between font-mono text-[7px] text-zinc-400 font-bold">
                <span>PROJECT_REVEAL_L2_A</span>
                <span>COORD_GRID_ACTIVE</span>
              </div>

              {/* Glowing horizontal laser sweep line across active portrait */}
              <motion.div 
                animate={{ y: ['0%', '100%', '0%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-40 mix-blend-screen pointer-events-none"
              />
            </div>

          </div>

        </div>

        {/* Global Mini Interactive Scroller Progress Bar */}
        <div className="absolute bottom-12 left-12 right-12 flex items-center justify-between z-20">
          <div className="flex space-x-1.5 items-center">
            {divisions.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (containerRef.current) {
                    const totalHeight = containerRef.current.scrollHeight;
                    const targetScrollTop = (totalHeight / divisions.length) * i + containerRef.current.offsetTop;
                    window.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
                  }
                }}
                className={`text-[9px] font-mono font-bold transition-all px-2.5 py-1 rounded cursor-pointer ${
                  i === activeIdx 
                    ? 'text-white bg-purple-950/40 border border-purple-500/30' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {divisions[i].roman}
              </button>
            ))}
          </div>
          <span className="font-mono text-[8px] text-zinc-550 uppercase tracking-widest font-extrabold hidden sm:block">
            STRETCHED LANDSCAPE SYSTEM CONFIG
          </span>
        </div>

      </div>
    </div>
  );
}
