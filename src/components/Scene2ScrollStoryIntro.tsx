import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Scene2ScrollStoryIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  const milestones = [
    { word: 'The Spark.', tag: 'YOU START WITH A STRONG PRODUCT AND A SIGNIFICANT BRAND VISION.' },
    { word: 'The Hustle.', tag: 'SOON, MANAGING BOTH DESIGN, MARKETING ADS, AND RECRUITS CONSUMES YOUR ENTIRE DAY.' },
    { word: 'The Friction.', tag: 'COMMUNICATING WITH MULTIPLE DISCONECTED CONTRACTORS CREATES MASSIVE OVERHEAD AND DISJOINTED WORK.' },
    { word: 'The Partner.', tag: 'GBA UNFOLD YOUR TEAM ROADMAPS, BRINGING EVERYTHING TOGETHER TO SCALE SMOOTHLY.' }
  ];

  const activeIdx = Math.min(Math.floor(scrollProgress * (milestones.length + 0.15)), milestones.length - 1);
  const activeItem = milestones[activeIdx] || milestones[0];

  return (
    <div
      ref={containerRef}
      id="scene-scroll-story"
      className="relative h-[300vh] bg-black select-none pointer-events-none"
    >
      {/* Sticky content frame */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black px-4 sm:px-8">
        
        {/* METAPHOR: The Path Representing Progress */}
        {/* Drawing vertical vector path */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <div className="relative w-px h-full bg-zinc-900">
            {/* The descending path progress thread */}
            <div 
              className="absolute top-0 w-[2px] -left-[0.5px] bg-gradient-to-b from-purple-500 via-purple-300 to-transparent transition-all duration-300"
              style={{ height: `${scrollProgress * 100}%` }}
            />
            {/* Floating indicator travel particle */}
            <div 
              className="absolute w-2 h-2 rounded-full bg-purple-400 -left-[3px] shadow-[0_0_10px_#A855F7] transition-all duration-300"
              style={{ top: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>

        {/* Ambient violet atmospheric glow behind the words */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#7C3AED]/5 blur-[150px] mix-blend-screen pointer-events-none" />

        {/* Morphing Editorial Word block */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.word}
              initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)', y: 15 }}
              animate={{ opacity: 0.95, scale: 1, filter: 'blur(0px)', y: 0 }}
              exit={{ opacity: 0, scale: 1.02, filter: 'blur(12px)', y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center space-y-4"
            >
              <span className="font-sans text-[9px] tracking-[0.3em] text-purple-400/80 uppercase font-bold">
                STAGE 01 // THE SCALING DILEMMA
              </span>
              
              <h2 className="font-serif text-[50px] sm:text-[84px] md:text-[110px] lg:text-[140px] font-normal tracking-tight text-white leading-none">
                {activeItem.word.endsWith('.') ? (
                  <>
                    <span>{activeItem.word.slice(0, -1)}</span>
                    <span className="text-purple-500">.</span>
                  </>
                ) : (
                  activeItem.word
                )}
              </h2>
              
              <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.4em] text-zinc-500 uppercase font-bold max-w-xl leading-relaxed">
                {activeItem.tag}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>


      </div>
    </div>
  );
}

