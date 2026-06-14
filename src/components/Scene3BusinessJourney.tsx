import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Sparkles, 
  Megaphone, 
  Users, 
  UserPlus, 
  Workflow, 
  Cpu, 
  TrendingUp, 
  HelpCircle 
} from 'lucide-react';

export default function Scene3BusinessJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const scrollOffset = -rect.top;
      const calculatedProgress = Math.min(Math.max(scrollOffset / (elementHeight - window.innerHeight), 0), 1);
      setProgress(calculatedProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine current active sub-stage of evolution
  const getStageContent = () => {
    if (progress < 0.15) {
      return {
        title: "The Spark",
        narrative: "At the beginning, every decision is yours. A simple idea, represented by one glowing node in empty space.",
        subNarrative: "One perspective, infinite promise, complete accountability."
      };
    } else if (progress < 0.40) {
      return {
        title: "Earning Attention",
        narrative: "A business needs a story before it can earn attention. Then, attention must become customers.",
        subNarrative: "You craft the Brand, launch the Marketing, and hold close your first Customers."
      };
    } else if (progress < 0.65) {
      return {
        title: "Establishing Frameworks",
        narrative: "Customers create demand for better systems and better people.",
        subNarrative: "You must start Hiring, establishing Operations, and automating Systems to support Growth."
      };
    } else if (progress < 0.85) {
      return {
        title: "The Friction of Scale",
        narrative: "As demand increases, coordination becomes harder. More customers create more expectations. More opportunities create more distractions.",
        subNarrative: "Growth introduces complexity faster than most businesses can adapt. The network feels heavy."
      };
    } else {
      return {
        title: "The Fragile Response",
        narrative: "Most businesses respond by hiring separate agencies, consultants, recruiters, freelancers, and contractors.",
        subNarrative: "These disconnected paths increase noise rather than clarity. The visual ecosystem becomes fragmented and difficult to navigate."
      };
    }
  };

  const stage = getStageContent();

  // Primary business nodes
  const nodes = [
    { id: 'founder', label: 'Founder', icon: User, x: 0, y: 0, showAt: 0.0, desc: 'Every decision is yours' },
    
    // Stage 2
    { id: 'brand', label: 'Brand', icon: Sparkles, x: -130, y: -90, showAt: 0.15, desc: 'Establishing your story' },
    { id: 'marketing', label: 'Marketing', icon: Megaphone, x: 130, y: -90, showAt: 0.22, desc: 'Earning market attention' },
    { id: 'customers', label: 'Customers', icon: Users, x: 150, y: 25, showAt: 0.30, desc: 'Converting attention to value' },
    
    // Stage 3
    { id: 'hiring', label: 'Hiring', icon: UserPlus, x: -150, y: 25, showAt: 0.40, desc: 'Seeking talented peers' },
    { id: 'operations', label: 'Operations', icon: Workflow, x: -90, y: 130, showAt: 0.48, desc: 'Sustaining repetitive excellence' },
    { id: 'systems', label: 'Systems', icon: Cpu, x: 90, y: 130, showAt: 0.56, desc: 'Automating structural workflow' },
    { id: 'growth', label: 'Growth', icon: TrendingUp, x: 0, y: -160, showAt: 0.64, desc: 'Pursuing broader horizons' }
  ];

  // Disconnected Stage 5 nodes (represented as separate noise providers)
  const disconnectedNodes = [
    { id: 'freelancer', label: 'Solo Freelancer', x: -240, y: -130, showAt: 0.85 },
    { id: 'agency', label: 'Siloed Agency', x: 240, y: -130, showAt: 0.85 },
    { id: 'consultant', label: 'External Consultant', x: 240, y: 90, showAt: 0.85 },
    { id: 'recruiter', label: 'Outside Recruiter', x: -240, y: 90, showAt: 0.85 },
    { id: 'contractor', label: 'Contract Worker', x: 0, y: 210, showAt: 0.85 }
  ];

  // Connection lines mapping to Founder Node
  const coreConnections = [
    { target: 'brand', showAt: 0.15 },
    { target: 'marketing', showAt: 0.22 },
    { target: 'customers', showAt: 0.30 },
    { target: 'hiring', showAt: 0.40 },
    { target: 'operations', showAt: 0.48 },
    { target: 'systems', showAt: 0.56 },
    { target: 'growth', showAt: 0.64 }
  ];

  // Criss-cross complex lines that appear during Stage 4 & 5 to represent entanglement and complexity
  const complexityConnections = [
    { from: 'brand', to: 'marketing', showAt: 0.68 },
    { from: 'marketing', to: 'customers', showAt: 0.70 },
    { from: 'customers', to: 'systems', showAt: 0.72 },
    { from: 'systems', to: 'operations', showAt: 0.74 },
    { from: 'operations', to: 'hiring', showAt: 0.76 },
    { from: 'hiring', to: 'brand', showAt: 0.78 },
    { from: 'growth', to: 'marketing', showAt: 0.80 },
    { from: 'growth', to: 'operations', showAt: 0.82 },
    { from: 'growth', to: 'systems', showAt: 0.84 }
  ];

  // Redundant external connections that add noise (Stage 5)
  const disconnectedConnections = [
    { from: 'freelancer', to: 'brand', showAt: 0.85 },
    { from: 'agency', to: 'marketing', showAt: 0.85 },
    { from: 'consultant', to: 'systems', showAt: 0.85 },
    { from: 'recruiter', to: 'hiring', showAt: 0.85 },
    { from: 'contractor', to: 'operations', showAt: 0.85 }
  ];

  return (
    <div
      ref={containerRef}
      id="scene-business-journey"
      className="relative h-[320vh] bg-[#FAF9F6] select-none"
    >
      {/* Sticky screen container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#FAF9F6] px-6 sm:px-8">
        
        {/* Soft background glow */}
        <div 
          className="absolute inset-0 pointer-events-none transition-all duration-1000 ease-out z-0 opacity-40 mix-blend-multiply"
          style={{
            background: progress > 0.80
              ? 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.04) 0%, rgba(250, 249, 246, 1) 75%)'
              : 'radial-gradient(circle at 50% 50%, rgba(39, 39, 42, 0.02) 0%, rgba(250, 249, 246, 1) 85%)'
          }}
        />

        {/* Minimal grid lines in the background */}
        <div className="absolute inset-0 opacity-[0.2] bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        {/* Dynamic Chapter Header */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center w-full max-w-xl px-4 flex flex-col items-center z-20">
          <span className="font-mono text-[9px] tracking-[0.3em] text-zinc-500 uppercase font-bold">
            THE EVOLUTION OF A BUSINESS &bull; CHAPTER I
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-zinc-900 tracking-tight mt-2.5 transition-all duration-300">
            {stage.title}
          </h3>
          <div className="w-12 h-[1px] bg-zinc-300 mt-3" />
        </div>

        {/* Visualizing the Grid of Growing Nodes */}
        <div className="relative w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] flex items-center justify-center z-10">
          
          {/* Complete Vector Connector Overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            {/* 1. Core Connections to Founder */}
            {coreConnections.map((conn, i) => {
              const targetNode = nodes.find(n => n.id === conn.target);
              if (!targetNode || progress < conn.showAt) return null;

              // Center of coordinates is (270, 270) in 540x540 frame
              const cx = 270;
              const cy = 270;
              const tx = cx + targetNode.x;
              const ty = cy + targetNode.y;

              return (
                <motion.line
                  key={`core-${i}`}
                  x1={cx}
                  y1={cy}
                  x2={tx}
                  y2={ty}
                  stroke="rgba(24, 24, 27, 0.12)"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              );
            })}

            {/* 2. Complexity Connections (cross connections expressing sprawl) */}
            {complexityConnections.map((conn, i) => {
              if (progress < conn.showAt) return null;

              const fromNode = nodes.find(n => n.id === conn.from);
              const toNode = nodes.find(n => n.id === conn.to);
              if (!fromNode || !toNode) return null;

              const cx = 270;
              const cy = 270;
              const fX = cx + fromNode.x;
              const fY = cy + fromNode.y;
              const tX = cx + toNode.x;
              const tY = cy + toNode.y;

              // These connections represent growing complexity - styled as thin overlapping paths
              return (
                <motion.line
                  key={`complex-${i}`}
                  x1={fX}
                  y1={fY}
                  x2={tX}
                  y2={tY}
                  stroke="rgba(124, 58, 237, 0.15)"
                  strokeWidth="1"
                  strokeDasharray="2 3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
              );
            })}

            {/* 3. Disconnected fragmented paths mapping Stage 5 */}
            {disconnectedConnections.map((conn, i) => {
              if (progress < conn.showAt) return null;

              const fromNode = disconnectedNodes.find(n => n.id === conn.from);
              const toNode = nodes.find(n => n.id === conn.to);
              if (!fromNode || !toNode) return null;

              const cx = 270;
              const cy = 270;
              const fX = cx + fromNode.x;
              const fY = cy + fromNode.y;
              const tX = cx + toNode.x;
              const tY = cy + toNode.y;

              // Disconnected paths represented as isolated grey/loose line paths
              return (
                <motion.line
                  key={`disconnected-${i}`}
                  x1={fX}
                  y1={fY}
                  x2={tX}
                  y2={tY}
                  stroke="rgba(113, 113, 122, 0.25)"
                  strokeWidth="1.2"
                  strokeDasharray="4 6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />
              );
            })}
          </svg>

          {/* Business Core Nodes Render */}
          {nodes.map((node) => {
            const isVisible = progress >= node.showAt;
            if (!isVisible) return null;

            const isFounder = node.id === 'founder';
            
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ 
                  opacity: 1, 
                  scale: isFounder ? 1 : 0.95,
                  x: node.x,
                  y: node.y
                }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                className={`absolute flex flex-col items-center justify-center rounded-full transition-all duration-300 select-none ${
                  isFounder
                    ? 'w-24 h-24 bg-white border border-purple-200 shadow-soft text-zinc-900 z-10'
                    : 'w-12 h-12 sm:w-14 sm:h-14 bg-white border border-zinc-200 text-zinc-800 hover:border-[#7C3AED] hover:text-[#7C3AED] shadow-xs'
                }`}
              >
                {isFounder ? (
                  <div className="text-center p-2 flex flex-col items-center">
                    <node.icon className="w-5 h-5 text-[#7C3AED] mb-1" />
                    <span className="font-serif text-[11px] font-normal block leading-tight">Founder</span>
                    <span className="font-mono text-[7px] text-zinc-500 uppercase tracking-widest mt-0.5 font-bold">The Core</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center p-1 relative group">
                    <node.icon className="w-4 h-4 text-zinc-600 group-hover:text-[#7C3AED] transition-colors" />
                    <span className="font-mono text-[8px] uppercase tracking-wider text-zinc-500 font-bold mt-1 text-center truncate max-w-[50px]">
                      {node.label}
                    </span>

                    {/* Tooltip description of node */}
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block bg-zinc-900 text-white text-[8px] font-mono p-1.5 rounded shadow-lg whitespace-nowrap z-50 pointer-events-none">
                      {node.desc}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}

          {/* Disconnected outer paths rendering Stage 5 */}
          {disconnectedNodes.map((node) => {
            const isVisible = progress >= node.showAt;
            if (!isVisible) return null;

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 0.8,
                  scale: 0.9,
                  x: node.x,
                  y: node.y
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 80 }}
                className="absolute px-3 py-1.5 rounded-md border border-dashed border-zinc-300 bg-zinc-50/50 text-zinc-500 text-[8px] sm:text-[9px] font-mono tracking-widest uppercase flex items-center space-x-1"
              >
                <HelpCircle className="w-2.5 h-2.5 text-zinc-400" />
                <span>{node.label}</span>
              </motion.div>
            );
          })}

        </div>

        {/* Narrative and Poetic Sub-narrative Frame */}
        <div className="absolute bottom-12 w-full max-w-xl text-center px-4 space-y-3 z-20">
          <p className="font-serif text-lg sm:text-xl text-zinc-900 font-normal leading-relaxed tracking-tight transition-all duration-300">
            &ldquo;{stage.narrative}&rdquo;
          </p>
          <p className="font-sans text-xs text-zinc-500 font-light tracking-wide leading-relaxed">
            {stage.subNarrative}
          </p>
        </div>

        {/* Scrolling downward indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 opacity-45 pointer-events-none">
          <span className="font-mono text-[7px] text-zinc-500 uppercase tracking-widest font-extrabold animate-bounce">Scroll to Evolve</span>
        </div>

      </div>
    </div>
  );
}
