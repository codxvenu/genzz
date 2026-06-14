import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Megaphone, 
  Users, 
  UserPlus, 
  Workflow, 
  Cpu, 
  Orbit 
} from 'lucide-react';

export default function Scene4GbaeEnters() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const scrollOffset = -rect.top;
      const calcProgress = Math.min(Math.max(scrollOffset / (elementHeight - window.innerHeight), 0), 1);
      setProgress(calcProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine active stages and corresponding narrative
  const getStageContent = () => {
    if (progress < 0.25) {
      return {
        tag: "THE OBSERVATION",
        narrative: "Businesses do not struggle because they lack effort. They struggle because growth creates complexity.",
        subNarrative: "More effort gets divided across wider cracks in the organization."
      };
    } else if (progress < 0.50) {
      return {
        tag: "THE ANALYSIS",
        narrative: "Complexity creates disconnection. Disconnection slows momentum.",
        subNarrative: "Separate operators solve isolated issues while ignoring the broader flow."
      };
    } else if (progress < 0.75) {
      return {
        tag: "THE PRINCIPLE",
        narrative: "The strongest businesses are not the ones with the most resources. They are the ones where every part works together.",
        subNarrative: "True synergy occurs when all components are native parts of a singular system."
      };
    } else {
      return {
        tag: "THE CONNECTED UNIVERSE",
        narrative: "Growth is not a collection of services. It is a connected system.",
        subNarrative: "Gen-Z Business Agency exists to help businesses build, connect, and scale that system."
      };
    }
  };

  const stage = getStageContent();

  // Nodes involved in the elegant realignment
  const activeNodes = [
    { id: 'branding', label: 'Branding', icon: Sparkles },
    { id: 'marketing', label: 'Marketing', icon: Megaphone },
    { id: 'acquisition', label: 'Acquisition', icon: Users },
    { id: 'hiring', label: 'Hiring', icon: UserPlus },
    { id: 'operations', label: 'Operations', icon: Workflow },
    { id: 'systems', label: 'Systems', icon: Cpu }
  ];

  // Dynamic interpolation function to morph nodes from messy clutter to symmetrical order
  const getNodeCoordinates = (nodeId: string) => {
    const messy: Record<string, { x: number; y: number }> = {
      branding: { x: -130, y: -90 },
      marketing: { x: 130, y: -90 },
      acquisition: { x: 150, y: 25 },
      hiring: { x: -150, y: 25 },
      operations: { x: -90, y: 130 },
      systems: { x: 90, y: 130 }
    };

    // Perfect mathematical alignment (Circle Radius R = 155)
    const aligned: Record<string, { x: number; y: number }> = {
      branding: { x: 0, y: -155 },
      marketing: { x: 134, y: -78 },
      acquisition: { x: 134, y: 78 },
      hiring: { x: 0, y: 155 },
      operations: { x: -134, y: 78 },
      systems: { x: -134, y: -78 }
    };

    const start = messy[nodeId] || { x: 0, y: 0 };
    const end = aligned[nodeId] || { x: 0, y: 0 };

    // Morphing transition begins at progress = 0.40 and finishes completely at progress = 0.72
    if (progress < 0.40) return start;
    if (progress > 0.72) return end;

    const t = (progress - 0.40) / 0.32;
    // Elegant easing function (Cubic In Out)
    const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    return {
      x: start.x + (end.x - start.x) * ease,
      y: start.y + (end.y - start.y) * ease
    };
  };

  // Center coordinates on our 540x540 canvas is 270, 270
  const cx = 270;
  const cy = 270;

  // Let GBA center hub appear and grow from progress 0.40 onwards
  const showGbaHub = progress > 0.40;
  
  // Outer pathways connecting them all in a circular ring (grows at progress > 0.65)
  const showOuterBoundaryRing = progress > 0.65;

  return (
    <div
      ref={containerRef}
      id="scene-gba-enters"
      className="relative h-[300vh] bg-[#FAF9F6] select-none"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#FAF9F6] px-6 sm:px-8">
        
        {/* Soft background ambient rings representing orbits */}
        <div className="absolute inset-0 pointer-events-none opacity-30 select-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-purple-200/40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full border border-purple-200/30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[310px] rounded-full border border-purple-100/40" />
        </div>

        {/* Ambient background glow of connected unity */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/4 blur-[120px] transition-all duration-1000 z-0 mix-blend-multiply"
          style={{
            transform: `translate(-50%, -50%) scale(${showGbaHub ? 1.25 : 0.6})`,
            opacity: showGbaHub ? 0.95 : 0
          }}
        />

        {/* Dynamic Chapter Token */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-20 w-full">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-black/5 border border-black/10 rounded-full font-bold">
            <Orbit className="w-3.5 h-3.5 text-[#7C3AED] animate-spin" style={{ animationDuration: '8s' }} />
            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-700">
              THE EVOLUTION OF A BUSINESS &bull; CHAPTER II
            </span>
          </div>
        </div>

        {/* Interactive Responsive Network Canvas */}
        <div className="relative w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] flex items-center justify-center z-10">
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            {/* Elegant Circle Boundary Unifying all nodes at Stage 3 */}
            {showOuterBoundaryRing && (
              <motion.circle
                cx={cx}
                cy={cy}
                r="155"
                fill="none"
                stroke="rgba(124, 58, 237, 0.15)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="animate-[spin_40s_linear_infinite]"
              />
            )}

            {/* Glowing lines connecting from GBA Hub to the elegant nodes */}
            {activeNodes.map((node) => {
              const currentPos = getNodeCoordinates(node.id);
              
              let lineStroke = "rgba(24, 24, 27, 0.1)";
              let lineDash = "";
              let lineWidth = "1";

              if (progress > 0.60) {
                lineStroke = "rgba(124, 58, 237, 0.35)";
                lineWidth = "1.5";
              }

              return (
                <line
                  key={`gba-line-${node.id}`}
                  x1={cx}
                  y1={cy}
                  x2={cx + currentPos.x}
                  y2={cy + currentPos.y}
                  stroke={lineStroke}
                  strokeWidth={lineWidth}
                  strokeDasharray={lineDash}
                  className="transition-all duration-300"
                />
              );
            })}

            {/* In-ring cross connection paths showing integration */}
            {progress > 0.70 && (
              <>
                <motion.line
                  x1={cx + getNodeCoordinates('branding').x}
                  y1={cy + getNodeCoordinates('branding').y}
                  x2={cx + getNodeCoordinates('marketing').x}
                  y2={cy + getNodeCoordinates('marketing').y}
                  stroke="rgba(124, 58, 237, 0.25)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
                <motion.line
                  x1={cx + getNodeCoordinates('marketing').x}
                  y1={cy + getNodeCoordinates('marketing').y}
                  x2={cx + getNodeCoordinates('acquisition').x}
                  y2={cy + getNodeCoordinates('acquisition').y}
                  stroke="rgba(124, 58, 237, 0.25)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
                <motion.line
                  x1={cx + getNodeCoordinates('acquisition').x}
                  y1={cy + getNodeCoordinates('acquisition').y}
                  x2={cx + getNodeCoordinates('systems').x}
                  y2={cy + getNodeCoordinates('systems').y}
                  stroke="rgba(124, 58, 237, 0.25)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
                <motion.line
                  x1={cx + getNodeCoordinates('systems').x}
                  y1={cy + getNodeCoordinates('systems').y}
                  x2={cx + getNodeCoordinates('operations').x}
                  y2={cy + getNodeCoordinates('operations').y}
                  stroke="rgba(124, 58, 237, 0.25)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
                <motion.line
                  x1={cx + getNodeCoordinates('operations').x}
                  y1={cy + getNodeCoordinates('operations').y}
                  x2={cx + getNodeCoordinates('hiring').x}
                  y2={cy + getNodeCoordinates('hiring').y}
                  stroke="rgba(124, 58, 237, 0.25)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
                <motion.line
                  x1={cx + getNodeCoordinates('hiring').x}
                  y1={cy + getNodeCoordinates('hiring').y}
                  x2={cx + getNodeCoordinates('branding').x}
                  y2={cy + getNodeCoordinates('branding').y}
                  stroke="rgba(124, 58, 237, 0.25)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              </>
            )}
          </svg>

          {/* Central Connective GBA Hub (The Unifier) */}
          <AnimatePresence>
            {showGbaHub && (
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', damping: 20, stiffness: 85 }}
                className="absolute w-28 h-28 sm:w-34 sm:h-34 rounded-full bg-white border border-purple-200 text-zinc-900 flex flex-col justify-center items-center shadow-[0_10px_35px_rgba(124,58,237,0.06)] z-20"
              >
                {/* Thin circulating secondary ring */}
                <div 
                  className="absolute inset-[3px] border border-purple-200/50 rounded-full animate-spin" 
                  style={{ animationDuration: '14s' }} 
                />
                
                <h4 className="font-serif text-2xl sm:text-3xl font-normal tracking-wide text-zinc-900">
                  GBA
                </h4>
                <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#7C3AED] mt-1.5 font-bold text-center leading-none">
                  INTEGRATED LAYER
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Symmetrical/Morphed Outer Pathway Nodes */}
          {activeNodes.map((node) => {
            const currentCoord = getNodeCoordinates(node.id);
            const isAligned = progress > 0.65;

            return (
              <motion.div
                key={node.id}
                animate={{
                  x: currentCoord.x,
                  y: currentCoord.y,
                  scale: isAligned ? 1.02 : 0.95
                }}
                transition={{ type: 'spring', damping: 22, stiffness: 90 }}
                className={`absolute px-4 py-2 rounded-full border bg-white flex items-center space-x-1.5 transition-all duration-300 ${
                  isAligned 
                    ? 'border-purple-200 text-zinc-900 shadow-soft font-bold' 
                    : 'border-zinc-200 text-zinc-600'
                }`}
              >
                <node.icon className={`w-3.5 h-3.5 ${isAligned ? 'text-[#7C3AED]' : 'text-zinc-500'}`} />
                <span className="font-mono text-[9px] sm:text-[10px] tracking-widest uppercase">
                  {node.label}
                </span>
              </motion.div>
            );
          })}

        </div>

        {/* Narrative and Poetic Sub-narrative Frame */}
        <div className="absolute bottom-12 w-full max-w-xl text-center px-4 space-y-3 z-25 min-h-[140px] flex flex-col justify-center items-center">
          <span className="font-mono text-[8px] uppercase tracking-widest text-[#7C3AED] font-bold block mb-1">
            {stage.tag}
          </span>
          <p className="font-serif text-lg sm:text-xl lg:text-2xl text-zinc-900 font-normal leading-relaxed tracking-tight transition-all duration-300">
            &ldquo;{stage.narrative}&rdquo;
          </p>
          <p className="font-sans text-xs text-zinc-500 font-light tracking-wide leading-relaxed">
            {stage.subNarrative}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 opacity-45 pointer-events-none">
          <span className="font-mono text-[7px] text-zinc-500 uppercase tracking-widest font-extrabold animate-pulse">
            {progress < 0.9 ? 'Continue Scrolling' : 'The System Complete'}
          </span>
        </div>

      </div>
    </div>
  );
}
