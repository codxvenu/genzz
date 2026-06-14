import { useState } from 'react';
import { Target, Receipt, ArrowRight } from 'lucide-react';

interface CalculatorProps {
  onOpenBooking: () => void;
}

export default function Calculator({ onOpenBooking }: CalculatorProps) {
  const [arrTarget, setArrTarget] = useState<number>(3); // ARR millions
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([
    'Branding & Positioning', 'Lead Generation & Ads'
  ]);

  const toggleNeed = (need: string) => {
    setSelectedNeeds(prev => 
      prev.includes(need) ? prev.filter(n => n !== need) : [...prev, need]
    );
  };

  const getCalculations = () => {
    const complexityFactor = selectedNeeds.length * 0.45 + (arrTarget * 0.15);
    const timelineWeeks = Math.max(8, Math.floor(6 + complexityFactor * 3.5));
    const suggestedHeadcount = Math.max(1, Math.floor(1.5 + arrTarget * 0.8));
    const estimatedRoi = (3.2 + (selectedNeeds.length * 0.4)).toFixed(1);

    return {
      timelineWeeks,
      suggestedHeadcount,
      estimatedRoi
    };
  };

  const calcs = getCalculations();

  const needsList = [
    { title: 'Branding & Positioning', index: '[01]' },
    { title: 'Ads & Social Campaigns', index: '[02]' },
    { title: 'Talent Recruitment', index: '[03]' },
    { title: 'Lead Generation & Ads', index: '[04]' },
    { title: 'Workflows & Automation', index: '[05]' },
    { title: 'Local Marketing', index: '[06]' }
  ];

  return (
    <section 
      id="calculator-section" 
      className="py-36 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] bg-purple-900/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Upper Token */}
        <div className="flex justify-center mb-8">
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#A1A1AA] uppercase font-bold border border-white/10 bg-white/5 px-4 py-1.5 rounded-full">
            GROWTH ESTIMATOR
          </span>
        </div>

        {/* Header Title */}
        <div className="space-y-4 mb-24 text-center max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white font-normal tracking-tight">
            Estimate Your Scale.
          </h2>
          <div className="w-16 h-[1px] bg-zinc-800 my-4" />
          <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light tracking-wide max-w-md mx-auto leading-relaxed">
            Select your yearly revenue goal and choose the services you need. Get immediate recommendations on staffing, launch times, and potential results.
          </p>
        </div>

        {/* BLUEPRINT WORKSPACE LAYOUT (NO BULKY CARDS) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch border-t border-b border-white/10 py-12">
          
          {/* Left Side: System Inputs with clean dividers */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-12 pr-0 lg:pr-8">
            
            {/* ARR Target Benchmark */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-purple-400" />
                  <span className="text-[10px] font-mono tracking-[0.3em] text-[#A1A1AA] uppercase font-bold">YEARLY REVENUE GOAL</span>
                </div>
                <div className="font-serif text-sm text-zinc-400">
                  Target ARR: <span className="text-white font-normal text-xl">${arrTarget}M/yr</span>
                </div>
              </div>
              
              <div className="relative pt-2">
                <input
                  id="arr-calculator-slider"
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={arrTarget}
                  onChange={(e) => setArrTarget(Number(e.target.value))}
                  className="w-full h-[1px] bg-zinc-800 appearance-none cursor-pointer accent-[#7C3AED] relative z-10"
                />
                <div className="flex items-center justify-between text-[8px] font-mono text-zinc-500 font-bold pt-4 uppercase tracking-widest">
                  <span>$1M (Early Stage)</span>
                  <span>$8M (Mid Market)</span>
                  <span>$15M+ (High Growth)</span>
                </div>
              </div>
            </div>

            {/* Checkboxes Editorial Rows */}
            <div className="space-y-6 pt-8 border-t border-white/5">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#A1A1AA] uppercase block font-bold">SERVICES YOU REQUIRE</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {needsList.map((need) => {
                  const isChecked = selectedNeeds.includes(need.title);
                  return (
                    <button
                      key={need.title}
                      onClick={() => toggleNeed(need.title)}
                      className={`flex items-center justify-between p-4 transition-all text-xs font-sans border-b cursor-pointer ${
                        isChecked 
                          ? 'border-purple-500/50 text-white font-normal bg-purple-950/5' 
                          : 'border-white/5 text-zinc-500 hover:text-zinc-300 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center space-x-3 text-left">
                        <span className="font-mono text-[8px] text-zinc-500 mr-1">{need.index}</span>
                        <span className="tracking-wide">{need.title}</span>
                      </div>
                      <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all ${
                        isChecked ? 'border-purple-500 bg-[#7C3AED] text-white' : 'border-zinc-800 bg-transparent'
                      }`}>
                        {isChecked && <span className="text-[7px] font-mono font-bold">✓</span>}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Side: Readouts with vertical line alignments */}
          <div className="lg:col-span-12 xl:col-span-5 lg:border-l lg:border-white/10 lg:pl-12 flex flex-col justify-between space-y-12">
            
            <div className="space-y-8">
              {/* Header Specifications */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center space-x-2">
                  <Receipt className="w-4 h-4 text-purple-400" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A1A1AA] font-bold">PLAN SPECIFICATION</span>
                </div>
                <span className="font-mono text-[8px] text-zinc-500 font-extrabold uppercase">OVERVIEW</span>
              </div>

              {/* Readouts Metrics */}
              <div className="space-y-8 py-4">
                
                {/* Metrics 1 */}
                <div className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-4">
                  <div className="space-y-0.5 text-left">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#71717a] font-bold block">ESTIMATED SETUP TIME</span>
                    <span className="text-xs text-zinc-400 font-light font-sans">Time to launch branding, ads, and workflows</span>
                  </div>
                  <span className="font-serif text-3xl text-white font-normal whitespace-nowrap pl-4">{calcs.timelineWeeks} Weeks</span>
                </div>

                {/* Metrics 2 */}
                <div className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-4">
                  <div className="space-y-0.5 text-left">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#71717a] font-bold block">RECOMMENDED HIRES</span>
                    <span className="text-xs text-zinc-400 font-light font-sans">Experienced specialists placed on your team</span>
                  </div>
                  <span className="font-serif text-3xl text-white font-normal whitespace-nowrap pl-4">{calcs.suggestedHeadcount} Pros</span>
                </div>

                {/* Metrics 3 */}
                <div className="flex justify-between items-baseline pb-2">
                  <div className="space-y-0.5 text-left">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-purple-400 font-bold block">PROJECTED ADVERTISING ROI</span>
                    <span className="text-xs text-zinc-400 font-light font-sans">Estimated gain on campaign performance</span>
                  </div>
                  <span className="font-serif text-4xl text-[#C084FC] font-semibold whitespace-nowrap pl-4">{calcs.estimatedRoi}x ROI</span>
                </div>

              </div>
            </div>

            {/* Action flow */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <button
                id="calculator-proposal-btn"
                onClick={onOpenBooking}
                className="w-full py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-[11px] font-mono tracking-widest uppercase rounded-full transition-all duration-300 shadow-md shadow-purple-900/40 flex items-center justify-center space-x-2 cursor-pointer font-bold"
              >
                <span>Request Custom Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <div className="flex justify-between font-mono text-[7px] text-zinc-500 uppercase tracking-wider">
                <span>GBA ESTIMATION ENGINE</span>
                <span>All calculations are estimates</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
