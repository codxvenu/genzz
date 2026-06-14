import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onStartJourney: () => void;
}

export default function Scene1Hero({ onOpenBooking, onStartJourney }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left - rect.width / 2) * 0.02,
        y: (e.clientY - rect.top - rect.height / 2) * 0.02,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="scene-hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden px-4 sm:px-6 lg:px-8 select-none"
    >
      {/* Background Subtle Atmospheric Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[160px] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#555_1px,transparent_1px),linear-gradient(to_bottom,#555_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      </div>

      {/* METAPHOR: A Single Point Representing Ambition */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.div
          animate={{
            x: mousePos.x * 0.5,
            y: mousePos.y * 0.5,
          }}
          className="relative flex items-center justify-center"
        >
          {/* Concentric high-precision museum alignment rings */}
          <div className="absolute w-[280px] h-[280px] rounded-full border border-zinc-800/20" />
          <div className="absolute w-[180px] h-[180px] rounded-full border border-purple-500/10 animate-pulse" />
          <div className="absolute w-[80px] h-[80px] rounded-full border border-zinc-700/10" />
          
          {/* Precise horizontal/vertical crosshairs */}
          <div className="absolute w-[400px] h-px bg-zinc-800/15" />
          <div className="absolute h-[400px] w-px bg-zinc-800/15" />

          {/* THE SINGLE POINT OF AMBITION */}
          <motion.div 
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_30px_#A855F7] relative z-20 flex items-center justify-center"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Content Area */}
      <div className="relative z-20 text-center max-w-5xl mx-auto flex flex-col items-center justify-center space-y-10 px-4 mt-24">

        {/* Massive Serif Editorial Headline */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[42px] sm:text-7xl md:text-8xl lg:text-[100px] text-white font-normal tracking-tight leading-[0.95]"
          >
            Complete Growth <br />
            <span className="text-gradient-purple italic font-normal text-[38px] sm:text-[62px] md:text-[76px] lg:text-[95px]">
              Under One Partner.
            </span>
          </motion.h1>
        </div>

        {/* Minimal Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-xs sm:text-sm md:text-base text-zinc-400 font-light max-w-md tracking-wider leading-relaxed"
        >
          GBA helps businesses scale smoothly. We bring your branding, full-funnel marketing, team recruitment, and workflow systems under a single coordinated team, saving you from managing multiple disjointed agencies.
        </motion.p>

        {/* Minimal CTA Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pt-4 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={onOpenBooking}
            className="group flex items-center space-x-3 px-8 py-4 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-white text-[11px] font-sans tracking-widest uppercase rounded-full transition-all duration-300 shadow-xl cursor-pointer hover:border-purple-500/30 font-bold"
          >
            <span>Get Your Growth Plan</span>
            <ArrowRight className="w-4 h-4 text-purple-500 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </motion.div>
      </div>



      {/* Scroll indicator */}
      <div 
        className="absolute bottom-6 right-6 flex flex-col items-end space-y-2 cursor-pointer z-20"
        onClick={onStartJourney}
      >
        <span className="font-sans text-[8px] tracking-[0.3em] text-zinc-500 uppercase font-bold hover:text-white transition-colors">
          SCROLL TO EXPLORE
        </span>
        <div className="w-16 h-px bg-zinc-800" />
      </div>
    </section>
  );
}

