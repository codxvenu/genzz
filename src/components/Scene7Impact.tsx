import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function Scene7Impact() {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  const evidenceRecords = [
    {
      id: '01',
      metric: '8.3x ROI',
      subMetric: 'Growth on marketing investment',
      partner: 'Mercer Logistics Group',
      niche: 'Global supply chain enterprise',
      case: 'Complete visual and branding rewrite. GBA placed expert content coordinators, set up targeted Google Search campaigns, and captured high-intent business inquiries.',
      deliverables: ['Custom Brand Style Guides', 'High-Converting Organic Content', 'Focused Search Campaign Ads'],
      duration: '12 Months'
    },
    {
      id: '02',
      metric: '+340%',
      subMetric: 'Increase in organic client leads',
      partner: 'Zenith FinTech Systems',
      niche: 'Financial placement platform',
      case: 'Replaced outdated graphics with modern organic video storytelling. Managed custom content programs and established simple ad channels to generate highly qualified applications without wasting budget.',
      deliverables: ['Sleek Short-form Video Assets', 'Video Distribution Playbooks', 'Brand Design Integration'],
      duration: '6 Months'
    },
    {
      id: '03',
      metric: '2.4M',
      subMetric: 'Campaign impressions generated',
      partner: 'Vapor Retail Co.',
      niche: 'Lifestyle consumer brand',
      case: 'Replaced disconnected freelance agencies. Set up streamlined workflows and introduced automated CRM lead-matching models, cutting customer acquisition costs in half.',
      deliverables: ['Interactive Regional Ad Units', 'Operational CRM Workflows', 'Staffing Onboarding Playbooks'],
      duration: '8 Months'
    }
  ];

  const activeRecord = evidenceRecords[activeStoryIdx];

  return (
    <section 
      id="scene-impact" 
      className="py-36 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Upper Token */}
        <div className="flex justify-center mb-8">
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#A1A1AA] uppercase font-bold border border-white/10 bg-white/5 px-4 py-1.5 rounded-full">
            REAL PERFORMANCE EVIDENCE
          </span>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-24 flex flex-col items-center">
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white font-normal tracking-tight leading-none text-center">
            The Evidence Layer.
          </h2>
          <div className="w-16 h-[1px] bg-zinc-805 my-4" />
          <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light tracking-wide max-w-md mx-auto leading-relaxed">
            Real client results verified directly. Clear outcomes established by unified branding, advertising, and workflow setups.
          </p>
        </div>

        {/* CHRONOLOGICAL TIMELINE CHANGER AND DISPLAY (BOX-FREE) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Performance Readout Matrix (The "Evidence Registry") */}
          <div className="lg:col-span-7 space-y-10 text-left">
            
            {/* Interactive Timeline Tabs */}
            <div className="flex space-x-6 border-b border-white/5 pb-4">
              {evidenceRecords.map((story, i) => {
                const isActive = activeStoryIdx === i;
                return (
                  <button
                    key={story.id}
                    onClick={() => setActiveStoryIdx(i)}
                    className="flex flex-col items-start space-y-1 text-left cursor-pointer group pb-3 relative"
                  >
                    <span className="font-mono text-[8px] text-zinc-500 tracking-widest font-extrabold group-hover:text-purple-400 transition-colors">
                      CASE_0{story.id}
                    </span>
                    <span className={`font-serif text-lg tracking-tight transition-all ${
                      isActive ? 'text-white font-normal' : 'text-zinc-500 group-hover:text-zinc-330'
                    }`}>
                      {story.partner}
                    </span>
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabUnderline"
                        className="absolute bottom-[-1px] left-0 right-0 h-[1.5px] bg-[#7C3AED]"
                        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Main Story presentation container */}
            <div className="min-h-[260px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStoryIdx}
                  initial={{ opacity: 0, x: -15, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: 15, filter: 'blur(6px)' }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#7C3AED] font-bold block">
                      PARTNER FOCUS AREA // {activeRecord.niche}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight">
                      {activeRecord.partner}
                    </h3>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-xl">
                    {activeRecord.case}
                  </p>

                  <div className="w-12 h-[1px] bg-zinc-800" />

                  {/* Programmatic deliverables list (Clean and typographic) */}
                  <div className="space-y-2">
                    <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#A1A1AA] font-bold block">
                      CAMPAIGNS IMPLEMENTED:
                    </span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {activeRecord.deliverables.map((item, id) => (
                        <span 
                          key={id} 
                          className="font-mono text-[9px] uppercase tracking-wider text-zinc-450 bg-white/5 border border-white/5 px-2.5 py-1 rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Right: Massive Kinetic Output displays */}
          <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-16 space-y-10 flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStoryIdx}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                {/* Metric Display 1 */}
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-purple-400 font-bold block">
                    GBA ACCELERATION FACTOR
                  </span>
                  <div className="flex items-baseline space-x-2">
                    <span className="font-serif text-6xl sm:text-7xl font-normal text-white tracking-tighter">
                      {activeRecord.metric}
                    </span>
                    <ArrowUpRight className="w-6 h-6 text-purple-400 animate-pulse" />
                  </div>
                  <span className="font-sans text-xs text-zinc-500 font-light tracking-wide block">
                    {activeRecord.subMetric}
                  </span>
                </div>

                <div className="w-full h-[1px] bg-zinc-800/40" />

                {/* Audit specifications specs */}
                <div className="grid grid-cols-2 gap-4 font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                  <div className="space-y-1">
                    <span className="text-[#71717A] text-[8px] font-extrabold font-mono block">RUN TIMELINE</span>
                    <span className="text-white font-medium">{activeRecord.duration} active</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[#71717A] text-[8px] font-extrabold font-mono block">STATUS</span>
                    <span className="text-purple-300 font-medium flex items-center space-x-1.5 font-bold">
                      <Sparkles className="w-3 h-3 text-purple-400 animate-spin" style={{ animationDuration: '4s' }} />
                      <span>PERMANENT FLOW</span>
                    </span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
