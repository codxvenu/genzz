import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  AlertTriangle, 
  Zap, 
  Activity, 
  Layers, 
  TrendingUp, 
  Users, 
  Award, 
  Cpu, 
  ArrowUpRight 
} from 'lucide-react';

interface NodeData {
  id: string;
  label: string;
  tag: string;
  cx: number;
  cy: number;
  failTitle: string;
  failImpact: string;
  flowImpact: string;
  restoredTitle: string;
  gbaFix: string;
  restoredDetail: string;
  metric: string;
  metricLabel: string;
}

const NODES_DATA: NodeData[] = [
  {
    id: 'brand',
    label: 'Brand & Positioning',
    tag: 'SYSTEM CORE 01',
    cx: 240,
    cy: 160,
    failTitle: 'Siloed Brand Dilution',
    failImpact: 'Without a cohesive narrative, your marketplace positioning decays into price commoditization. Trust signals fragment, CAC spikes by 38%, and outbound sequences fall on deaf ears.',
    flowImpact: 'Price erosion, high CAC, narrative friction.',
    restoredTitle: 'Narrative Gravity Engine',
    gbaFix: 'GBA re-engineers your core narrative to position your company as the category authority. This authority creates pull dynamics, transforming cold outbounds into premium warm inbound pipelines.',
    restoredDetail: 'Market dominance re-secured. Organic conversion velocity elevated by 45%.',
    metric: '-38%',
    metricLabel: 'Outbound Friction'
  },
  {
    id: 'marketing',
    label: 'Attention Pipeline',
    tag: 'SYSTEM CORE 02',
    cx: 140,
    cy: 280,
    failTitle: 'Stagnant Demand capture',
    failImpact: 'Growth capital is wasted on legacy advertising, optimized for shallow vanity metrics. Inbound funnels run cold as buyer attention shifts entirely onto high-density modern content layers.',
    flowImpact: 'Wasted ad capital, cold funnels, stale brand presence.',
    restoredTitle: 'Hyper-Attention Machinery',
    gbaFix: 'We deploy omni-channel attention engines configured specifically for high-engagement, modern formats, driving consistent pipeline flow with precise organic attribution tracking.',
    restoredDetail: 'Buyer engagement optimized. Paid CAC dropped by 52% with brand-focused hooks.',
    metric: '3.4x',
    metricLabel: 'Pipeline Flow'
  },
  {
    id: 'sales',
    label: 'Commercial Engine',
    tag: 'SYSTEM CORE 03',
    cx: 320,
    cy: 350,
    failTitle: 'Slipped Deal Velocity',
    failImpact: 'High pipeline volume stagnates due to slow-moving manual qualification. Deals wither in friction-heavy pipelines, lengthening sales cycles and leaking net profit to competitors.',
    flowImpact: 'Stalled sales cycles, low close rates, high calendar bloat.',
    restoredTitle: 'Automated Revenue Conduit',
    gbaFix: 'We inject smart real-time response bridges, customized interactive ROI projections, and zero-friction commercial steps that double close speeds and increase total contract values.',
    restoredDetail: 'Friction points eradicated. Deal-closing timeframe compressed from months to 11 days.',
    metric: '2.8x',
    metricLabel: 'Closing Velocity'
  },
  {
    id: 'hiring',
    label: 'Specialized Talent',
    tag: 'SYSTEM CORE 04',
    cx: 500,
    cy: 250,
    failTitle: 'Talent Misalignment & Churn',
    failImpact: 'Traditional recruitment produces slow-moving, legacy specialists who struggle with speed and contemporary toolsets. Delayed onboarding drains productivity, leaking up to 150% in salary costs.',
    flowImpact: 'Project lag, skill misalignment, compounding recruiting tax.',
    restoredTitle: 'Elite Operator Injection',
    gbaFix: 'We bypass legacy corporate placement models to directly insert hyper-trained Gen-Z operators, platform engineers, and performance designers directly into your tactical units.',
    restoredDetail: 'Placement friction reduced to zero. Talent matching completed in under 10 days.',
    metric: '14d',
    metricLabel: 'Time-To-Value'
  },
  {
    id: 'operations',
    label: 'Systems & Automation',
    tag: 'SYSTEM CORE 05',
    cx: 680,
    cy: 150,
    failTitle: 'Manual Scaling Bottlenecks',
    failImpact: 'Highly skilled teams are trapped in repetitive overhead, handling simple data syncing and file flows. Operating costs scale linearly with revenue, stalling net margin growth.',
    flowImpact: 'Margin decay, repetitive overhead, high task latency.',
    restoredTitle: 'Autonomous Systems Hub',
    gbaFix: 'We architect specialized, background AI pipelines and systems integrations that run administrative workflows autonomously, redirecting focus to high-leverage activities.',
    restoredDetail: 'Custom automation routines deployed. Operational overhead capped permanently.',
    metric: '80%',
    metricLabel: 'Task Automation'
  },
  {
    id: 'scale',
    label: 'Compounding Footprint',
    tag: 'SYSTEM CORE 06',
    cx: 820,
    cy: 300,
    failTitle: 'The Growth Trap Ceiling',
    failImpact: 'The enterprise hits a structural growth ceiling. Expanding ARR requires exponential team expansion. Systems break because actions are disconnected, flattening the scale curve.',
    flowImpact: 'Flatlining ARR, operational silos, fragmented focus.',
    restoredTitle: 'Cohesive Scale Matrix',
    gbaFix: 'We unify Brand, Attention, Commercials, Talent, and Operations into a single self-correcting loop, turning static company silos into an autonomous compounding asset.',
    restoredDetail: 'Cohesion threshold secured. Continuous compounding enabled across geographical channels.',
    metric: '92%',
    metricLabel: 'Synergy Coef.'
  }
];

// SVG bezier paths between nodes forming the symmetric infinity loop
const BEZIER_SEGMENTS = [
  { id: 0, d: "M 240 160 Q 180 190, 140 280", from: 0, to: 1 },
  { id: 1, d: "M 140 280 Q 200 360, 320 350", from: 1, to: 2 },
  { id: 2, d: "M 320 350 Q 430 340, 500 250", from: 2, to: 3 },
  { id: 3, d: "M 500 250 Q 570 160, 680 150", from: 3, to: 4 },
  { id: 4, d: "M 680 150 Q 760 190, 820 300", from: 4, to: 5 },
  // Completion path that winds around the bottom, returning the flow to make the complete loop
  { id: 5, d: "M 820 300 Q 740 400, 500 250 Q 300 110, 240 160", from: 5, to: 0 }
];

export default function PathToGrowth() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const scrollOffset = -rect.top;
      const viewportHeight = window.innerHeight;
      
      // Compute progress cleanly between top entering and bottom exiting
      const calculatedProgress = Math.min(
        Math.max(scrollOffset / (elementHeight - viewportHeight), 0),
        1
      );
      setProgress(calculatedProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute active step (0 to 6)
  // Step 0 to 5 on individual nodes.
  // Step 6: Final Zoom out and revealing the entire unified system
  const activeStepIndex = Math.min(6, Math.floor(progress / 0.14));
  const isAtFinalReveal = activeStepIndex === 6;
  const activeNodeIndex = isAtFinalReveal ? 5 : activeStepIndex;

  const stepStart = activeStepIndex * 0.14;
  const stepEnd = (activeStepIndex + 1) * 0.14;
  const localProgress = isAtFinalReveal 
    ? 1 
    : Math.min(1, Math.max(0, (progress - stepStart) / (stepEnd - stepStart)));

  // Define storytelling sub-phases of the active node
  let activePhaseType: 'healthy' | 'failed' | 'impact' | 'restoring' | 'restored' = 'healthy';
  if (isAtFinalReveal) {
    activePhaseType = 'restored';
  } else {
    if (localProgress < 0.20) {
      activePhaseType = 'healthy';
    } else if (localProgress >= 0.20 && localProgress < 0.45) {
      activePhaseType = 'failed';
    } else if (localProgress >= 0.45 && localProgress < 0.68) {
      activePhaseType = 'impact';
    } else if (localProgress >= 0.68 && localProgress < 0.88) {
      activePhaseType = 'restoring';
    } else {
      activePhaseType = 'restored';
    }
  }

  // Active node data
  const activeNode = NODES_DATA[activeNodeIndex];

  // Camera tracking coordinates
  let camera = { cx: 500, cy: 250, scale: 0.95 };
  if (isAtFinalReveal) {
    // Zoom out completely to center
    camera = { cx: 480, cy: 250, scale: 0.85 };
  } else {
    // Zoom in on the active node
    camera = { cx: activeNode.cx, cy: activeNode.cy, scale: 2.1 };
  }

  // Determine status of any node index (0 to 5)
  const getNodeStatus = (idx: number) => {
    if (isAtFinalReveal) return 'restored';
    if (idx < activeStepIndex) return 'restored';
    if (idx > activeStepIndex) return 'inactive';
    return activePhaseType;
  };

  // Determine lines status
  const getSegmentStatus = (idx: number) => {
    if (isAtFinalReveal) return 'restored';
    if (idx < activeStepIndex) return 'restored';
    if (idx > activeStepIndex) return 'inactive';
    // Active step segment behavior
    if (activePhaseType === 'healthy') return 'healthy';
    if (activePhaseType === 'failed' || activePhaseType === 'impact') return 'failed';
    if (activePhaseType === 'restoring') return 'restoring';
    return 'restored';
  };

  return (
    <div 
      ref={containerRef}
      id="path-to-growth-section"
      className="relative h-[780vh] bg-black select-none"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row overflow-hidden bg-black z-10">
        
        {/* Immersive Cinematic Atmosphere Gradient Map */}
        <div 
          className="absolute inset-0 pointer-events-none transition-all duration-[1200ms] cubic-bezier(0.2, 0.8, 0.2, 1) z-0"
          style={{
            background: isAtFinalReveal
              ? 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15) 0%, rgba(0, 0, 0, 1) 75%)'
              : activePhaseType === 'failed' || activePhaseType === 'impact'
              ? 'radial-gradient(circle at 40% 50%, rgba(239, 68, 68, 0.16) 0%, rgba(0, 0, 0, 1) 70%)'
              : activePhaseType === 'restoring'
              ? 'radial-gradient(circle at 40% 50%, rgba(192, 132, 252, 0.14) 0%, rgba(0, 0, 0, 1) 70%)'
              : 'radial-gradient(circle at 40% 50%, rgba(124, 58, 237, 0.08) 0%, rgba(0, 0, 0, 1) 75%)'
          }}
        />

        {/* Technical dotgrid system */}
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" />

        {/* 1. VISUAL SYSTEM VIEWPORT (LEFT / 3/5 WIDTH) */}
        <div className="relative w-full md:w-3/5 h-[45vh] md:h-full border-b md:border-b-0 md:border-r border-zinc-900 overflow-hidden flex items-center justify-center bg-black/60 z-10">
          
          {/* Header indicator overlay */}
          <div className="absolute top-6 left-6 z-20 flex items-center space-x-3 pointer-events-none">
            <span className="flex h-2 w-2 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                activePhaseType === 'failed' || activePhaseType === 'impact' 
                  ? 'bg-rose-500' 
                  : 'bg-violet-400'
              }`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${
                activePhaseType === 'failed' || activePhaseType === 'impact' 
                  ? 'bg-rose-500' 
                  : 'bg-violet-400'
              }`} />
            </span>
            <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase">
              {isAtFinalReveal ? 'SYSTEM COMPLETE: STABLE' : 'GROWTH PATHWAY HUD // ACTIVE ENGINE'}
            </span>
          </div>

          {/* Scale percentages HUD overlay */}
          <div className="absolute bottom-6 left-6 z-20 font-mono text-[10px] tracking-wider text-zinc-500 pointer-events-none space-y-1">
            <p>CAMERA RATIO: {camera.scale.toFixed(2)}x</p>
            <p>SECTOR LOCK: {isAtFinalReveal ? 'GLOBAL_VIEW' : activeNode.id.toUpperCase()}</p>
          </div>

          {/* THE SVG STAGE WITH CAMERA POSITIONER */}
          <div className="w-full h-full max-w-5xl aspect-[2/1] translate-y-2 md:translate-y-0">
            <svg 
              viewBox="0 0 1000 500" 
              className="w-full h-full overflow-visible transition-all duration-300 pointer-events-none"
            >
              {/* Glow filter definitions */}
              <defs>
                <filter id="glow-purple" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="glow-red" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="10" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="glow-gba" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="15" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* STAGE CONTAINER WITH SPRINGY PERSPECTIVE TRANSFORM */}
              <g 
                style={{
                  transform: `scale(${camera.scale}) translate(${(500 - camera.cx)}px, ${(250 - camera.cy)}px)`,
                  transformOrigin: '500px 250px',
                  transition: 'transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Background ambient stars */}
                <g className="opacity-40">
                  <circle cx="200" cy="80" r="1.5" fill="#C084FC" />
                  <circle cx="850" cy="110" r="1" fill="#C084FC" />
                  <circle cx="150" cy="380" r="2" fill="#7C3AED" />
                  <circle cx="780" cy="390" r="1.5" fill="#7C3AED" />
                  <circle cx="450" cy="100" r="1" fill="#ffffff" />
                  <circle cx="580" cy="370" r="1.5" fill="#ffffff" />
                </g>

                {/* 1. FAINT BASELINE Blueprint Path (Infinity shape outline) */}
                <path 
                  d="M 240 160 Q 180 190, 140 280 Q 200 360, 320 350 Q 430 340, 500 250 Q 570 160, 680 150 Q 760 190, 820 300 Q 740 400, 500 250 Q 300 110, 240 160"
                  fill="none" 
                  stroke="#27272a" 
                  strokeWidth="3" 
                  strokeDasharray="6,6"
                  className="transition-colors duration-500"
                />

                {/* 2. CONNECTION LINES (SEGMENTS) WITH PROGRESSIVE EMISSIVE GLOWS */}
                {BEZIER_SEGMENTS.map((seg) => {
                  const status = getSegmentStatus(seg.id);
                  let strokeColor = "#1f1f23";
                  let strokeWidth = "2.5";
                  let glowFilter = "";
                  let isGlowing = false;
                  let strokeDashArray = "0";
                  let dashOffsetAnimation = "";

                  if (status === 'restored') {
                    strokeColor = "#C084FC";
                    strokeWidth = "3.5";
                    glowFilter = "url(#glow-purple)";
                    isGlowing = true;
                  } else if (status === 'healthy') {
                    strokeColor = "#9333EA";
                    strokeWidth = "3";
                    glowFilter = "url(#glow-purple)";
                  } else if (status === 'failed') {
                    strokeColor = "#EF4444";
                    strokeWidth = "3";
                    glowFilter = "url(#glow-red)";
                    strokeDashArray = "5,5";
                  } else if (status === 'restoring') {
                    strokeColor = "#F472B6";
                    strokeWidth = "4";
                    glowFilter = "url(#glow-gba)";
                    strokeDashArray = "15,10";
                  }

                  return (
                    <g key={seg.id} className="transition-all duration-700">
                      {/* Outer blurry glow wrapper for restored lines */}
                      {isGlowing && (
                        <path 
                          d={seg.d} 
                          fill="none" 
                          stroke="#7C3AED" 
                          strokeWidth="8" 
                          strokeLinecap="round"
                          opacity="0.25"
                        />
                      )}
                      
                      <path 
                        d={seg.d} 
                        fill="none" 
                        stroke={strokeColor} 
                        strokeWidth={strokeWidth} 
                        strokeLinecap="round"
                        strokeDasharray={strokeDashArray !== "0" ? strokeDashArray : undefined}
                        filter={glowFilter || undefined}
                        className="transition-all duration-700 ease-out"
                      />
                    </g>
                  );
                })}

                {/* 3. FLUID ENERGY FLOW PARTICLES ON RESTORED SEGMENTS */}
                {BEZIER_SEGMENTS.map((seg) => {
                  const status = getSegmentStatus(seg.id);
                  if (status !== 'restored') return null;
                  return (
                    <path 
                      key={`flow-${seg.id}`}
                      d={seg.d}
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray="40 180"
                      className="opacity-90"
                      style={{
                        animation: 'footerDotsMove 3.5s linear infinite',
                        filter: 'drop-shadow(0 0 4px #C084FC)'
                      }}
                    />
                  );
                })}

                {/* 4. ACTIVE RESTORATION BEAM FROM LEFT (Emerges on "restoring" state) */}
                {activePhaseType === 'restoring' && !isAtFinalReveal && (
                  <line 
                    x1={0} 
                    y1={activeNode.cy} 
                    x2={activeNode.cx} 
                    y2={activeNode.cy}
                    stroke="url(#restoring-gradient)"
                    strokeWidth="3"
                    strokeDasharray="15 5"
                    className="animate-pulse"
                    filter="url(#glow-gba)"
                    style={{
                      animation: 'footerDotsMove 1s linear infinite'
                    }}
                  />
                )}

                {/* Defining SVG linear gradients */}
                <defs>
                  <linearGradient id="restoring-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.1" />
                    <stop offset="60%" stopColor="#C084FC" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
                  </linearGradient>
                </defs>

                {/* 5. INDIVIDUAL DYNAMIC NODE PLATFORMS */}
                {NODES_DATA.map((node, idx) => {
                  const status = getNodeStatus(idx);
                  const isActive = idx === activeNodeIndex && !isAtFinalReveal;
                  
                  // Styles based on status
                  let circleColor = "fill-zinc-950 stroke-zinc-800";
                  let coreColor = "bg-zinc-800";
                  let glowClass = "";
                  let showCrack = false;
                  let pulseScaleMultiplier = 1;

                  if (status === 'restored') {
                    circleColor = "fill-zinc-950 stroke-[#C084FC] stroke-[2.5px]";
                    coreColor = "bg-[#C084FC]";
                    glowClass = "shadow-[0_0_20px_rgba(192,132,252,0.6)]";
                  } else if (status === 'healthy') {
                    circleColor = "fill-zinc-950 stroke-violet-500 stroke-[2px]";
                    coreColor = "bg-violet-500";
                    glowClass = "shadow-[0_0_12px_rgba(124,58,237,0.4)]";
                  } else if (status === 'failed' || status === 'impact') {
                    circleColor = "fill-zinc-950 stroke-red-500 stroke-[2px]";
                    coreColor = "bg-red-500 animate-pulse";
                    glowClass = "shadow-[0_0_18px_rgba(239,68,68,0.73)]";
                    showCrack = true;
                    pulseScaleMultiplier = 1.05;
                  } else if (status === 'restoring') {
                    circleColor = "fill-zinc-950 stroke-fuchsia-400 stroke-[3px]";
                    coreColor = "bg-fuchsia-300 animate-ping";
                    glowClass = "shadow-[0_0_25px_rgba(232,121,249,0.8)]";
                  }

                  return (
                    <g 
                      key={node.id} 
                      className="transition-all duration-500"
                      style={{
                        transform: isActive ? `scale(${pulseScaleMultiplier})` : 'scale(1)',
                        transformOrigin: `${node.cx}px ${node.cy}px`
                      }}
                    >
                      {/* Active outward pulse ring */}
                      {isActive && (
                        <circle 
                          cx={node.cx} 
                          cy={node.cy} 
                          r={status === 'failed' || status === 'impact' ? "26" : "22"} 
                          fill="none" 
                          stroke={status === 'failed' || status === 'impact' ? "#EF4444" : "#7C3AED"}
                          strokeWidth="1.5"
                          opacity="0.4"
                          className="animate-ping"
                          style={{ animationDuration: '2s' }}
                        />
                      )}

                      {/* Behind platform plate for physical shadow depth */}
                      <circle 
                        cx={node.cx}
                        cy={node.cy} 
                        r="14" 
                        className={`${circleColor} transition-all duration-700`}
                        style={{
                          filter: status !== 'inactive' ? 'drop-shadow(0 0 6px rgba(124, 58, 237, 0.2))' : undefined
                        }}
                      />

                      {/* Inside electric hot core */}
                      <circle 
                        cx={node.cx} 
                        cy={node.cy} 
                        r={status === 'inactive' ? "4" : "5.5"} 
                        className={`transition-all duration-500`}
                        fill={
                          status === 'inactive' 
                            ? '#27272a' 
                            : status === 'failed' || status === 'impact'
                            ? '#ef4444' 
                            : status === 'restoring'
                            ? '#f472b6'
                            : '#ffffff'
                        }
                      />

                      {/* Cracked damage overlays on nodes undergoing local fault */}
                      {showCrack && (
                        <g opacity="0.85">
                          <line x1={node.cx - 10} y1={node.cy - 10} x2={node.cx + 2} y2={node.cy + 2} stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
                          <line x1={node.cx + 3} y1={node.cy - 7} x2={node.cx - 2} y2={node.cy + 3} stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" />
                        </g>
                      )}

                      {/* Little HUD Alert Sign above Failing Nodes */}
                      {(status === 'failed' || status === 'impact') && (
                        <g>
                          <rect x={node.cx - 10} y={node.cy - 30} width="20" height="12" rx="3" fill="#ef4444" opacity="0.9" />
                          <text x={node.cx} y={node.cy - 22} fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">FAIL</text>
                        </g>
                      )}

                      {/* Node Text Flag tags (hidden when zoomed out, unless finished loop) */}
                      <g 
                        className="transition-all duration-700"
                        opacity={isAtFinalReveal ? 1 : isActive ? 1 : 0.45}
                      >
                        <text 
                          x={node.cx} 
                          y={node.cy + 24} 
                          fill={status === 'inactive' ? '#52525b' : status === 'failed' || status === 'impact' ? '#f87171' : '#f2f2f2'} 
                          fontSize="9" 
                          fontWeight="600"
                          textAnchor="middle" 
                          fontFamily="monospace"
                          className="tracking-wider uppercase"
                        >
                          {node.label}
                        </text>
                      </g>
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>
        </div>

        {/* 2. CONTEXTUAL NARRATIVE PANEL SIDEBAR (RIGHT / 2/5 WIDTH) */}
        <div className="relative w-full md:w-2/5 h-[55vh] md:h-full flex flex-col justify-center px-6 md:px-12 py-8 md:py-16 bg-zinc-950/40 backdrop-blur-md z-10 overflow-y-auto">
          
          <AnimatePresence mode="wait">
            {!isAtFinalReveal ? (
              <motion.div 
                key={activeNode.id + activePhaseType}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6 flex flex-col h-full justify-between py-2 md:py-8"
              >
                {/* 1. TOP STATS HEADER */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#C084FC]/80 tracking-[0.25em] font-medium">
                      {activeNode.tag}
                    </span>
                    
                    {/* Dynamic state badges */}
                    <div className="flex items-center space-x-2">
                      {activePhaseType === 'healthy' && (
                        <div className="px-2 py-0.5 rounded bg-zinc-900 border border-violet-500/30 font-mono text-[9px] tracking-wider text-violet-400">
                          ● STATUS: ACTIVE
                        </div>
                      )}
                      
                      {(activePhaseType === 'failed' || activePhaseType === 'impact') && (
                        <div className="px-2 py-0.5 rounded bg-red-950/40 border border-red-500/40 font-mono text-[9px] tracking-wider text-red-400 flex items-center space-x-1 animate-pulse">
                          <AlertTriangle className="h-3 w-3 inline text-red-500" />
                          <span>▲ SYSTEM BREACHED</span>
                        </div>
                      )}

                      {activePhaseType === 'restoring' && (
                        <div className="px-2 py-0.5 rounded bg-pink-950/40 border border-[#F472B6]/40 font-mono text-[9px] tracking-wider text-[#F472B6] flex items-center space-x-1">
                          <Zap className="h-2.5 w-2.5 inline animate-bounce" />
                          <span>⚙ REBUILDING PILLAR</span>
                        </div>
                      )}

                      {activePhaseType === 'restored' && (
                        <div className="px-2 py-0.5 rounded bg-zinc-900 border border-emerald-500/30 font-mono text-[9px] tracking-wider text-emerald-400">
                          ✓ PILLAR STABLE
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Node Main Editorial Header */}
                  <h3 className="font-serif text-3xl md:text-4xl text-white tracking-tight leading-tight">
                    {activeNode.label}
                  </h3>
                </div>

                {/* 2. CHRONOLOGICAL PHASE CONTROLLER */}
                <div className="flex-grow flex flex-col justify-center py-4">
                  {/* HEALTHY STATE VIEW */}
                  {activePhaseType === 'healthy' && (
                    <div className="space-y-4">
                      <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                        [INITIAL PROFILE STATE: UNRELIENT COHERENCE]
                      </p>
                      <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                        Currently running under initial baseline performance. System elements appear integrated, but lack stress-tolerance. Flow channels are operational.
                      </p>
                      <div className="h-1 w-full bg-zinc-900/60 rounded overflow-hidden">
                        <div className="h-full bg-violet-600/50 w-[45%] rounded animate-pulse" />
                      </div>
                      <p className="font-mono text-[10px] text-zinc-500 tracking-wide">
                        *SYSTEM SCANNING: LOCAL VULNERABILITIES DETECTED IN UPPER PILLARS...
                      </p>
                    </div>
                  )}

                  {/* FAILED STATE VIEW */}
                  {activePhaseType === 'failed' && (
                    <div className="space-y-4">
                      <div className="p-3 bg-red-950/20 border border-red-500/20 rounded">
                        <p className="font-mono text-xs text-red-400 font-bold uppercase tracking-wider flex items-center space-x-2">
                          <AlertTriangle className="h-4 w-4" />
                          <span>DIAGNOSIS: {activeNode.failTitle.toUpperCase()}</span>
                        </p>
                      </div>
                      <p className="text-red-300/90 text-sm leading-relaxed border-l-2 border-red-500/60 pl-3 italic">
                        "The node experiences critical overload. Signal routes severed. System flow has stalled."
                      </p>
                      <p className="text-zinc-400 text-xs">
                        Without GBA's synchronized overlay, this channel breaks under baseline volume stress, choking next-stage downstream actions.
                      </p>
                    </div>
                  )}

                  {/* IMPACT STATE VIEW (CONCRETE METRIC IMPACT) */}
                  {activePhaseType === 'impact' && (
                    <div className="space-y-4">
                      <p className="font-mono text-xs text-red-400 uppercase tracking-widest font-semibold">
                        [EXECUTIVE DIAGNOSTIC IMPACT REPORT]
                      </p>
                      <p className="text-zinc-200 text-sm md:text-base leading-relaxed">
                        {activeNode.failImpact}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 pt-3 border-t border-zinc-900">
                        <div className="p-3 rounded bg-zinc-900/40 border border-red-500/10">
                          <p className="font-mono text-[10px] text-zinc-500 tracking-wider">CRITICAL BLOCKAGE</p>
                          <p className="text-zinc-300 font-mono text-xs mt-1 truncate">{activeNode.flowImpact}</p>
                        </div>
                        <div className="p-3 rounded bg-zinc-900/40 border border-red-500/10">
                          <p className="font-mono text-[10px] text-zinc-400 tracking-wider">ESTIMATED SEVERITY</p>
                          <p className="text-rose-500 font-bold font-mono text-sm mt-1 uppercase">HIGH CRITICAL</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* RESTORING STATE VIEW */}
                  {activePhaseType === 'restoring' && (
                    <div className="space-y-5">
                      <div className="flex items-center space-x-3 text-[#F472B6]">
                        <Zap className="h-5 w-5 animate-spin" />
                        <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold">
                          INITIATING GBA RECONSTRUCTION WAVE
                        </span>
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        {activeNode.gbaFix}
                      </p>
                      <div className="space-y-1">
                        <div className="h-1.5 w-full bg-zinc-900 rounded overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-pink-400 w-[78%] rounded animate-pulse" />
                        </div>
                        <div className="flex justify-between font-mono text-[9px] text-zinc-500">
                          <span>SYNAPSE ALIGNMENT: 78%</span>
                          <span>ACTIVE_INJECTION</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* RESTORED STATE VIEW */}
                  {activePhaseType === 'restored' && (
                    <div className="space-y-4">
                      <p className="font-mono text-xs text-[#C084FC] uppercase tracking-widest font-semibold">
                        [PILLAR INTEGRITY OPTIMIZED]
                      </p>
                      
                      <p className="text-zinc-300 text-sm font-medium">
                        {activeNode.restoredTitle}
                      </p>
                      
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        {activeNode.restoredDetail}
                      </p>

                      <div className="flex items-center space-x-4 p-3 rounded bg-purple-950/10 border border-purple-500/10 mt-3">
                        <div className="flex-grow">
                          <p className="font-mono text-[10px] text-zinc-400 tracking-wider">RESTORED EFFICIENCY</p>
                          <p className="text-white text-[13px] font-sans mt-0.5">Flow streaming stabilized. Next sector route unlocked.</p>
                        </div>
                        <div className="text-right">
                          <p className="font-mono text-[10px] text-zinc-400 tracking-wider">{activeNode.metricLabel}</p>
                          <p className="text-emerald-400 font-bold font-mono text-lg mt-0.5">{activeNode.metric}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. SCROLL METADATA METERS AT SIDEBAR FOOTER */}
                <div className="border-t border-zinc-900 pt-4 flex items-center justify-between font-mono text-[10px] text-zinc-500">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-3 w-3 text-zinc-500" />
                    <span>FLOW SECTOR: 0{activeNodeIndex + 1} / 06</span>
                  </div>
                  <div>
                    <span>SCROLL TO CYCLE</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              // STEP 7: DRAMATIC CLOSING FINAL REVEAL VIEWPORT (ZOCKED OUT)
              <motion.div 
                key="final_reveal"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8 flex flex-col justify-between py-12 h-full text-left"
              >
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-purple-950/30 border border-purple-500/20 text-xs font-mono text-[#C084FC] tracking-[0.25em] rounded">
                    THE CONNECTED ADVANTAGE
                  </span>
                  
                  <h3 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-[1.12]">
                    The Complete <br/>
                    <span className="italic text-gradient-purple">Growth Synapse</span>
                  </h3>
                </div>

                <div className="space-y-6">
                  <p className="text-zinc-200 text-lg font-serif italic border-l-2 border-[#C084FC] pl-4 leading-relaxed">
                    “Growth was never about fixing one problem. It was about connecting the entire system.”
                  </p>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Corporate failures occur when individual agencies execute steps in isolated vaults. 
                    GBA dissolves traditional silos—intertwining Brand, Marketing, Sales, Talent, Operations, and Scale into a single, high-frequency corporate organism designed to scale.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-zinc-900/40 rounded border border-zinc-800">
                      <p className="font-mono text-[10px] text-[#C084FC] tracking-wider">PILLAR CAPABILITY</p>
                      <p className="text-white text-base font-bold mt-1">6/6 Dynamic Nodes</p>
                    </div>
                    <div className="p-3 bg-zinc-900/40 rounded border border-zinc-800">
                      <p className="font-mono text-[10px] text-[#C084FC] tracking-wider">SYSTEM EFFICIENCY</p>
                      <p className="text-emerald-400 text-base font-bold mt-1">+240% Combined</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-zinc-900">
                  <p className="text-[10px] font-mono tracking-widest text-[#C084FC]">
                    *THE ALIGNMENT COMPLETED INDEFINITELY
                  </p>
                  <p className="text-xs text-zinc-500 font-sans">
                    Scroll further to deploy full economic projections.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
