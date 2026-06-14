import { motion } from 'motion/react';
import { Compass, MessageSquare, Play, Flame, Cpu, Users } from 'lucide-react';

export default function Scene8GenZAdvantage() {
  const collageItems = [
    { title: 'Algorithms', desc: 'Decoding modern recommendations.', position: 'sm:col-span-4 sm:row-span-1 border-zinc-200 bg-white text-zinc-800 shadow-soft', icon: Compass },
    { title: 'Digital Culture', desc: 'Where memes evolve into sales pipelines.', position: 'sm:col-span-8 sm:row-span-1 bg-white text-zinc-900 border-purple-100 shadow-premium', icon: MessageSquare },
    { title: 'Creators', desc: 'Real native visual authority.', position: 'sm:col-span-7 sm:row-span-1 border-zinc-200 bg-white text-zinc-800 shadow-soft', icon: Play },
    { title: 'Attention Arbitrage', desc: 'Capturing split-second digital interest.', position: 'sm:col-span-12 md:col-span-5 sm:row-span-2 bg-gradient-to-br from-purple-50/50 to-white border-purple-200 text-zinc-900 shadow-soft', icon: Flame },
    { title: 'Technology Layer', desc: 'Sprinting inside automated processes.', position: 'sm:col-span-7 md:col-span-4 sm:row-span-1 border-purple-200 bg-purple-50/70 text-[#7C3AED] shadow-soft', icon: Cpu },
    { title: 'Modern Communities', desc: 'Built where organic traffic nests.', position: 'sm:col-span-12 md:col-span-8 sm:row-span-1 border-zinc-200 bg-white text-zinc-800 shadow-soft', icon: Users }
  ];

  return (
    <section 
      id="scene-genz-edge" 
      className="py-32 bg-[#FAF9F6] relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[25%] left-[-5%] w-[450px] h-[450px] bg-purple-200/20 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Upper Token */}
        <div className="flex justify-center mb-8">
          <span className="font-mono text-[9px] tracking-[0.25em] text-zinc-600 uppercase font-bold border border-black/10 bg-black/5 px-4 py-1.5 rounded-full">
            THE ATTENTION COEFFICIENT
          </span>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20 flex flex-col items-center">
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-zinc-900 font-normal tracking-tight leading-none">
            We Understand <br />
            <span className="text-gradient-purple italic font-normal">Attention.</span>
          </h2>
          <div className="w-16 h-[1px] bg-zinc-200 my-4" />
          <p className="font-sans text-xs sm:text-sm text-zinc-600 font-light tracking-wide max-w-md mx-auto leading-relaxed">
            Because we grew up where attention lives.
          </p>
        </div>

        {/* Bento Grid Collage */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 max-w-5xl mx-auto auto-rows-[130px] sm:auto-rows-[150px] items-stretch">
          {collageItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 0.95, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                whileHover={{ y: -5, opacity: 1, borderColor: '#7C3AED', transition: { duration: 0.2 } }}
                className={`p-8 rounded-[20px] border flex flex-col justify-between transition-all duration-300 pointer-events-auto select-none ${item.position}`}
              >
                <div className="flex justify-between items-center">
                  <Icon className="w-5 h-5 text-[#7C3AED] opacity-90 shrink-0" />
                  <span className="font-mono text-[8px] text-zinc-500 font-bold uppercase tracking-wider">TAG 0{idx+1}</span>
                </div>

                <div className="space-y-1.5 mt-auto">
                  <h3 className="font-serif text-lg sm:text-xl font-normal tracking-tight text-zinc-900">{item.title}</h3>
                  <p className="font-sans text-xs text-zinc-600 font-light leading-snug">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
