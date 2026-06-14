import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Scene2ScrollStoryIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const stages = [
    { text: 'Imagine.', description: 'The absolute alignment of brand story with technical operations.' },
    { text: 'Create.', description: 'Decentralized creator networks syndicating unfiltered client attention.' },
    { text: 'Build.', description: 'Automated outbound turbines and CRM synchronizations working error-free.' },
    { text: 'Scale.', description: 'Embedding native talent directly inside core daily processes.' },
    { text: 'Lead.', description: 'Bypassing outdated, costly agency silos for real compounding yield.' },
    { text: 'Dominate.', description: 'The final, fully self-reinforced GBA sovereign feedback setup.' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const scrollOffset = -rect.top;
      
      const progress = Math.min(Math.max(scrollOffset / (elementHeight - window.innerHeight), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map progress to active stage index
  const activeIdx = Math.min(Math.floor(scrollProgress * stages.length), stages.length - 1);
  const activeStage = stages[activeIdx];

  return (
    <div 
      ref={containerRef}
      id="scene-scroll-story"
      className="relative h-[300vh] bg-black select-none"
    >
      {/* Sticky viewport content */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center bg-black overflow-hidden z-10 px-6 sm:px-12">
        
        {/* Subtle coordinate metrics tracking layer */}
        <div className="absolute top-12 left-12 right-12 flex justify-between items-center z-20 font-mono text-[9px] text-zinc-650 tracking-[0.2em] uppercase">
          <span>STORY_SCROLLER_ENGAGED // v1.2</span>
          <span>COMPUTED_OFFSET: {scrollProgress.toFixed(4)}</span>
        </div>

        {/* Ambient Pulsing Purple Ellipse */}
        <div className="absolute w-[500px] h-[500px] bg-purple-950/15 rounded-full blur-[160px] pointer-events-none" />

        {/* Morphing typography viewport */}
        <div className="relative flex flex-col justify-center items-center text-center max-w-4xl min-h-[300px]">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, scale: 0.96, y: 15, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.04, y: -15, filter: 'blur(10px)' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 flex flex-col items-center"
            >
              {/* Massive displaying typography */}
              <h2 className="font-serif text-7xl sm:text-8xl md:text-9xl text-white font-normal tracking-tight">
                {activeStage.text}
              </h2>

              <div className="w-12 h-[1px] bg-zinc-800" />

              {/* Sophisticated light editorial subtitle */}
              <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light tracking-wide max-w-md mx-auto leading-relaxed h-[40px]">
                {activeStage.description}
              </p>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Multi-step progress dash track */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-20">
          {stages.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 rounded-full transition-all duration-300 ${
                i === activeIdx 
                  ? 'w-10 bg-purple-500' 
                  : i < activeIdx 
                    ? 'w-2 bg-purple-950' 
                    : 'w-2 bg-zinc-850'
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
