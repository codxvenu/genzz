import { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';

interface Scene1HeroProps {
  onOpenBooking: () => void;
  onStartJourney: () => void;
}

export default function Scene1Hero({ onOpenBooking, onStartJourney }: Scene1HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize coordinate offsets from -0.5 to 0.5
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Spring animations for a physics-based, premium drag feel
  const springConfig = { damping: 30, stiffness: 80, mass: 1 };
  const smoothX = useSpring(0, springConfig);
  const smoothY = useSpring(0, springConfig);

  useEffect(() => {
    smoothX.set(mousePosition.x);
    smoothY.set(mousePosition.y);
  }, [mousePosition, smoothX, smoothY]);

  // Transform coordinates to layout displacement values
  const textTranslateX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const textTranslateY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);
  
  const bgTranslateX = useTransform(smoothX, [-0.5, 0.5], [40, -40]);
  const bgTranslateY = useTransform(smoothY, [-0.5, 0.5], [40, -40]);

  return (
    <section 
      id="scene-hero" 
      className="relative min-h-screen w-full flex flex-col justify-between items-center bg-black overflow-hidden select-none px-6 md:px-12 py-16"
    >
      {/* Dynamic Parallax Star-field / Orbital Blueprint Background */}
      <motion.div 
        style={{ x: bgTranslateX, y: bgTranslateY }}
        className="absolute inset-0 pointer-events-none z-0 opacity-40 flex items-center justify-center scale-110"
      >
        <svg className="w-[120%] h-[120%]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="auroraGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.12" />
              <stop offset="60%" stopColor="#C084FC" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#auroraGlow)" />
          
          {/* Compass grid coordinates */}
          <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" strokeDasharray="5 15" />
          <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" strokeDasharray="5 15" />

          {/* Micro dots indicating spatial density */}
          <circle cx="25%" cy="30%" r="1" fill="#7C3AED" />
          <circle cx="75%" cy="25%" r="1" fill="#C084FC" />
          <circle cx="20%" cy="80%" r="1" fill="#C084FC" />
          <circle cx="80%" cy="75%" r="1.5" fill="#7C3AED" className="animate-pulse" />
        </svg>
      </motion.div>

      {/* Atmospheric Header Spec */}
      <div className="w-full flex justify-between items-center z-10 font-mono text-[9px] tracking-[0.25em] text-[#71717A] uppercase">
        <span>GBA_ORIGIN_SECTOR // v0.98</span>
        <span>LATENCY ACTIVE // 3000ms PORTAL</span>
      </div>

      {/* Main Editorial Content Group */}
      <motion.div 
        style={{ x: textTranslateX, y: textTranslateY }}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl space-y-12 my-auto"
      >
        <div className="space-y-4">
          <p className="font-mono text-[10px] tracking-[0.4em] text-purple-400 uppercase font-bold animate-pulse">
            A NEW STANDARD FOR OPERATION
          </p>
          
          <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl text-white font-normal leading-[0.95] tracking-tight">
            Growth Is Not <br />
            <span className="text-gradient-purple italic font-normal">An Accident.</span>
          </h1>
        </div>

        <div className="w-24 h-[1px] bg-zinc-800" />

        <p className="font-sans text-sm md:text-base text-zinc-400 font-light max-w-xl mx-auto leading-relaxed tracking-wide">
          We construct custom operational machinery, syndicate high-frequency content distributions, and embed elite operators directly into scaling systems.
        </p>

        {/* Cinematic Unified Action Pathway */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 bg-white text-black font-mono text-xs tracking-widest uppercase rounded-full hover:bg-[#7C3AED] hover:text-white transition-all duration-500 shadow-xl cursor-pointer"
          >
            JOIN THE SYSTEM
          </button>
          
          <button
            onClick={onStartJourney}
            className="px-6 py-4 border border-white/10 text-zinc-450 hover:text-white font-mono text-xs tracking-widest uppercase rounded-full hover:border-white/30 hover:bg-white/5 transition-all duration-500 flex items-center space-x-2 cursor-pointer"
          >
            <span>OBSERVE THE PATTERN</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>

      {/* Footer Spec Metadata */}
      <div className="w-full flex justify-between items-end z-10 font-mono text-[8px] text-[#52525B] tracking-widest uppercase">
        <div className="text-left space-y-1">
          <div>LOC: [44.31N, 12.02E]</div>
          <div>STAGE: INTRO_STAGE</div>
        </div>
        <div className="text-right space-y-1">
          <div>SCALE MATRIX active</div>
          <div>SCROLL DOWN TO INITIATE SEQUENCE</div>
        </div>
      </div>
    </section>
  );
}
