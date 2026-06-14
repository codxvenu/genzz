import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Scene6Transformation() {
  const [activeChannelIdx, setActiveChannelIdx] = useState(0);

  const coordinationRecords = [
    {
      id: '01',
      metric: 'Fully Modern',
      subMetric: 'Brand Identity Setup',
      title: 'Brand & Position Setup',
      niche: 'First Impression Security',
      case: 'We define your visual story and design high-end assets from scratch. By the time we launch, your business looks established, polished, and highly professional—making it simple to build immediate trust with premium corporate clients.',
      deliverables: ['Custom Brand Style Guides', 'Established High-End Assets', 'Founder Storytelling Maps'],
      duration: 'Weeks 1 to 4'
    },
    {
      id: '02',
      metric: 'Active Leads',
      subMetric: 'Campaign Launch & Copy',
      title: 'Ads & Social Campaigns',
      niche: 'Predictable Client Flow',
      case: 'We take over your entire marketing engine—launching high-performing paid ads and distributing engaging organic short-form video. We direct qualified corporate customers straight to your sales team.',
      deliverables: ['Paid Social & Google Ads', 'Engaging Short-Form Video', 'Performance Tracking Suite'],
      duration: 'Weeks 3 to 8'
    },
    {
      id: '03',
      metric: 'Vetted Pros',
      subMetric: 'Direct Team Sourcing',
      title: 'Dedicated Team Sourcing',
      niche: 'Eliminate Expensive Agencies',
      case: 'Skip the expensive recruiting companies. GBA sources, interviews, and places vetted specialists (marketing coordinates, account managers, or sales reps) directly on your salary, building your long-term in-house team.',
      deliverables: ['Custom Role Profiles', 'Multi-Stage Interviews', 'Direct Workflow Placement'],
      duration: 'Weeks 4 to 10'
    },
    {
      id: '04',
      metric: 'Zero Friction',
      subMetric: 'Automated Workspace Sync',
      title: 'Automations & CRM Setup',
      niche: 'Operational Workflows',
      case: 'We set up your entire backend workspace—integrating modern lead tracking CRM software, launching automated email flows, and compiling simple operation playbooks so your teams execute without communication gaps.',
      deliverables: ['Interactive CRM Customization', 'Automated Email Sequences', 'Functional Standard Playbooks'],
      duration: 'Weeks 4 to 12'
    }
  ];

  const activeRecord = coordinationRecords[activeChannelIdx];

  return (
    <section 
      id="scene-transformation" 
      className="py-36 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Upper Token */}
        <div className="flex justify-center mb-8">
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#A1A1AA] uppercase font-bold border border-white/10 bg-white/5 px-4 py-1.5 rounded-full">
            INTEGRATED EXECUTION CHANNELS
          </span>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-24 flex flex-col items-center">
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white font-normal tracking-tight leading-none text-center">
            Executing & Coordinating.
          </h2>
          <div className="w-16 h-[1px] bg-zinc-800 my-4" />
          <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light tracking-wide max-w-md mx-auto leading-relaxed">
            How GBA aligns core marketing assets, ad placements, and team recruiting in a single, predictable operation.
          </p>
        </div>

        {/* INTERACTIVE TIMELINE CHANGER AND DISPLAY (BOX-FREE LINETOP PATTERN) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Execution Channels Menu and Description */}
          <div className="lg:col-span-7 space-y-10 text-left">
            
            {/* Interactive Timeline Tabs */}
            <div className="flex flex-wrap gap-x-6 gap-y-4 border-b border-white/5 pb-4">
              {coordinationRecords.map((channel, i) => {
                const isActive = activeChannelIdx === i;
                return (
                  <button
                    key={channel.id}
                    onClick={() => setActiveChannelIdx(i)}
                    className="flex flex-col items-start space-y-1 text-left cursor-pointer group pb-3 relative"
                  >
                    <span className="font-mono text-[8px] text-zinc-500 tracking-widest font-bold group-hover:text-purple-400 transition-colors">
                      CHANNEL_0{channel.id}
                    </span>
                    <span className={`font-serif text-lg tracking-tight transition-all ${
                      isActive ? 'text-white font-normal' : 'text-zinc-500 group-hover:text-zinc-300'
                    }`}>
                      {channel.title}
                    </span>
                    {isActive && (
                      <motion.div 
                        layoutId="activeChannelUnderline"
                        className="absolute bottom-[-1px] left-0 right-0 h-[1.5px] bg-[#7C3AED]"
                        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Main Channel presentation container */}
            <div className="min-h-[260px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChannelIdx}
                  initial={{ opacity: 0, x: -15, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: 15, filter: 'blur(6px)' }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#7C3AED] font-bold block">
                      OUTCOME ORIENTATION // {activeRecord.niche}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight">
                      {activeRecord.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-xl">
                    {activeRecord.case}
                  </p>

                  <div className="w-12 h-[1px] bg-zinc-805" />

                  {/* Programmatic deliverables list (Clean and typographic) */}
                  <div className="space-y-2">
                    <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#A1A1AA] font-bold block">
                      DELIVERABLES COMPLETED FOR YOUR COMPANY:
                    </span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {activeRecord.deliverables.map((item, id) => (
                        <span 
                          key={id} 
                          className="font-mono text-[9px] uppercase tracking-wider text-zinc-450 bg-white/5 border border-white/5 px-2.5 py-1 rounded font-medium"
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
                key={activeChannelIdx}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                {/* Metric Display 1 */}
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-purple-400 font-bold block">
                    OPERATIONAL RESULT
                  </span>
                  <div className="flex items-baseline space-x-2">
                    <span className="font-serif text-5xl sm:text-6xl font-normal text-white tracking-tighter">
                      {activeRecord.metric}
                    </span>
                    <ArrowRight className="w-5 h-5 text-purple-400 animate-pulse" />
                  </div>
                  <span className="font-sans text-xs text-zinc-500 font-light tracking-wide block">
                    {activeRecord.subMetric}
                  </span>
                </div>

                <div className="w-full h-[1px] bg-zinc-800/40" />

                {/* Audit specifications specs */}
                <div className="grid grid-cols-2 gap-4 font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                  <div className="space-y-1">
                    <span className="text-[#71717A] text-[8px] font-bold font-mono block">START TIMELINE</span>
                    <span className="text-white font-medium">{activeRecord.duration}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[#71717A] text-[8px] font-bold font-mono block">WORKFLOW STATUS</span>
                    <span className="text-purple-300 font-medium flex items-center space-x-1.5">
                      <Sparkles className="w-3 h-3 text-purple-400 animate-spin" style={{ animationDuration: '4s' }} />
                      <span>ONGOING INTEGRITY</span>
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
