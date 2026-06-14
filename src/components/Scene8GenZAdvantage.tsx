import { motion } from 'motion/react';
import { Compass, Zap, Workflow, Share2, Globe, Users } from 'lucide-react';

export default function Scene8GenZAdvantage() {
  const operatingPrinciples = [
    { 
      title: 'Rapid Execution', 
      desc: 'We move fast, launching campaigns and recruiting talent without weeks of unnecessary meetings.', 
      position: 'sm:col-span-4 sm:row-span-1 bg-zinc-950/40 text-zinc-350', 
      icon: Zap 
    },
    { 
      title: 'Connected Systems', 
      desc: 'We link your design materials, advertising channels, automated systems, and recruitment pipelines in sync.', 
      position: 'sm:col-span-8 sm:row-span-1 bg-zinc-900/40 text-white shadow-[0_0_30px_rgba(124,58,237,0.03)]', 
      icon: Workflow 
    },
    { 
      title: 'Organic & Paid Reach', 
      desc: 'We build high-quality search engine rankings and targeted paid ad campaigns to lower your overall cost per lead.', 
      position: 'sm:col-span-7 sm:row-span-1 bg-zinc-950/40 text-zinc-300', 
      icon: Share2 
    },
    { 
      title: 'Direct, Convincing Copy', 
      desc: 'We write simple, persuasive words and design clean layouts that appeal directly to real corporate buyers.', 
      position: 'sm:col-span-12 md:col-span-5 sm:row-span-2 bg-gradient-to-br from-purple-950/10 to-black text-white', 
      icon: Globe 
    },
    { 
      title: 'Fluid Campaign Sprints', 
      desc: 'We test multiple creative angles quickly and shift marketing budgets based on real revenue and sales outcomes.', 
      position: 'sm:col-span-7 md:col-span-4 sm:row-span-1 bg-purple-500/5 text-purple-300', 
      icon: Compass 
    },
    { 
      title: 'True Team Autonomy', 
      desc: 'We document clear handbooks and onboard your personnel so you are never locked into long agency retainer contracts.', 
      position: 'sm:col-span-12 md:col-span-8 sm:row-span-1 bg-zinc-950/40 text-zinc-300', 
      icon: Users 
    }
  ];

  return (
    <section 
      id="scene-enterprise-principles" 
      className="py-32 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-850 to-transparent" />
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[35%] left-[-5%] w-[450px] h-[450px] bg-purple-900/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Exhibition Accent Token */}
        <div className="flex justify-center mb-8">
          <span className="font-sans text-[9px] tracking-[0.25em] text-zinc-400 uppercase font-bold bg-zinc-950/40 px-4 py-1.5 rounded-full">
            OUR METHOD // HOW WE DELIVER VALUE
          </span>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20 flex flex-col items-center">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-none text-center">
            Modern Business <br />
            <span className="text-gradient-purple italic font-normal">Operating Principles.</span>
          </h2>
          <div className="w-16 h-[1px] bg-zinc-900 my-4 text-center" />
          <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light tracking-wide max-w-md mx-auto leading-relaxed">
            We prioritize speed, clear structure, and measurable revenue growth over slow processes and complicated agency reports.
          </p>
        </div>

        {/* Bento Grid Collage */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 max-w-5xl mx-auto auto-rows-[130px] sm:auto-rows-[150px] items-stretch">
          {operatingPrinciples.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 0.9, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -5, opacity: 1, transition: { duration: 0.2 } }}
                className={`p-8 rounded-[20px] flex flex-col justify-between transition-all duration-300 pointer-events-auto select-none ${item.position}`}
              >
                <div className="flex justify-between items-center">
                  <Icon className="w-5 h-5 text-purple-400 opacity-80 shrink-0" />
                  <span className="font-sans text-[8px] text-zinc-500 font-bold uppercase tracking-wider">PRINCIPLE 0{idx+1}</span>
                </div>

                <div className="space-y-1.5 mt-auto text-left">
                  <h3 className="font-serif text-lg sm:text-xl font-normal tracking-tight text-white">{item.title}</h3>
                  <p className="font-sans text-[11px] text-zinc-400 font-light leading-snug">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
