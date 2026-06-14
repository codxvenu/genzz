import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Check, Sparkles, User, Briefcase, Mail } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Advisor {
  name: string;
  role: string;
  spec: string;
  avatar: string;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    bottleneck: '',
    stage: ''
  });

  const [matchedAdvisor, setMatchedAdvisor] = useState<Advisor | null>(null);

  const bottlenecksList = [
    'Missing Brand Narrative & Assets',
    'Low Inbound Qualified Leads',
    'Slow Recruitment & Hiring Operations',
    'Uncoordinated General Agencies',
    'General Strategic Friction'
  ];

  const stagesList = [
    { key: 'Idea', label: 'Early Concept / Seeding' },
    { key: 'Launched', label: 'Launched / Stable Base' },
    { key: 'Scaling', label: 'Scaling Rapidly' },
    { key: 'Enterprise', label: 'Corporate Enterprise / High Volume' }
  ];

  const handleNextStep = () => {
    if (step < 3) {
      setStep(prev => prev + 1);
    } else {
      // Calculate and execute Intelligent Match Routing Gate
      let matched: Advisor = {
        name: 'Sophia Sterling',
        role: 'Director of Growth Integration',
        spec: 'Omnichannel storytelling, content density syndication & full-funnel loops.',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300'
      };

      if (formData.stage === 'Idea') {
        matched = {
          name: 'Chloe Zhang',
          role: 'Partner, Brand Launch Division',
          spec: 'Early concepts, custom logotypes, typographic identities, and raw launch positioning.',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300'
        };
      } else if (formData.stage === 'Launched' && formData.bottleneck.includes('Recruitment')) {
        matched = {
          name: 'Marcus Vance',
          role: 'Head of Talent Systems Placements',
          spec: 'Technical workflow vetting, talent placements, and embedment of daily operation managers.',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300'
        };
      } else if (formData.stage === 'Scaling' || formData.stage === 'Enterprise') {
        matched = {
          name: 'Sebastian Mercer',
          role: 'Managing Director, Scale Strategies',
          spec: 'High-EBITDA structures, regional footprints, workflow automations, and macro tactical planning.',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300'
        };
      }

      setMatchedAdvisor(matched);
      setStep(4);
    }
  };

  const handleReset = () => {
    setStep(1);
    setFormData({
      name: '',
      email: '',
      company: '',
      bottleneck: '',
      stage: ''
    });
    setMatchedAdvisor(null);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center select-none overflow-y-auto bg-black/85 backdrop-blur-md p-4">
        
        {/* Modal container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-zinc-950 border border-white/10 rounded-[24px] overflow-hidden shadow-2xl p-6 sm:p-10 text-left"
        >
          {/* Close trigger */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-zinc-500 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/5"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Stepper counter indicator */}
          {step < 4 && (
            <div className="flex items-center space-x-2 font-mono text-[8px] tracking-[0.25em] text-zinc-500 uppercase mb-6 font-bold">
              <span className="text-[#C084FC]">STEP_0{step}</span>
              <span>// 03 SPECIFICATION DECK</span>
            </div>
          )}

          {/* Step content pages */}
          <div className="min-h-[280px] flex flex-col justify-center">
            {step === 1 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-tight">
                    Establish Corporate Profile.
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                    Identify your baseline metrics so we can calibrate GBA&apos;s matching engine.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 block font-bold">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-600" />
                      <input
                        type="text"
                        placeholder="e.g. Rachel Sterling"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-zinc-900 border border-white/5 rounded-xl py-3 pl-11 pr-4 text-xs text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-zinc-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 block font-bold">Corporate Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-600" />
                      <input
                        type="email"
                        placeholder="e.g. rachel@sterlingcapital.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-zinc-900 border border-white/5 rounded-xl py-3 pl-11 pr-4 text-xs text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-zinc-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 block font-bold">Company Name</label>
                    <div className="relative">
                      <Briefcase className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-600" />
                      <input
                        type="text"
                        placeholder="e.g. Sterling Capital Group"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-zinc-900 border border-white/5 rounded-xl py-3 pl-11 pr-4 text-xs text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-zinc-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-tight">
                    Primary Bottleneck.
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                    Select the exact operations vector causing friction in your scaling momentum.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  {bottlenecksList.map((item) => (
                    <button
                      key={item}
                      onClick={() => setFormData({ ...formData, bottleneck: item })}
                      className={`w-full p-4 rounded-xl text-left text-xs transition-all border flex items-center justify-between cursor-pointer ${
                        formData.bottleneck === item
                          ? 'bg-purple-950/20 border-purple-500/50 text-white'
                          : 'bg-zinc-900/50 border-white/5 text-zinc-400 hover:border-white/10 hover:text-white'
                      }`}
                    >
                      <span className="tracking-wide">{item}</span>
                      {formData.bottleneck === item && <Check className="w-4 h-4 text-purple-400" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-tight">
                    Current Growth Phase.
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                    Identify your current corporate phase to allow correct routing allocation.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  {stagesList.map((stage) => (
                    <button
                      key={stage.key}
                      onClick={() => setFormData({ ...formData, stage: stage.key })}
                      className={`w-full p-4 rounded-xl text-left text-xs transition-all border flex items-center justify-between cursor-pointer ${
                        formData.stage === stage.key
                          ? 'bg-purple-950/20 border-purple-500/50 text-white'
                          : 'bg-zinc-900/50 border-white/5 text-zinc-400 hover:border-white/10 hover:text-white'
                      }`}
                    >
                      <span className="tracking-wide">{stage.label}</span>
                      {formData.stage === stage.key && <Check className="w-4 h-4 text-purple-400" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && matchedAdvisor && (
              <div className="space-y-6 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-950/40 border border-purple-500/20 rounded-full flex items-center justify-center text-purple-400 animate-pulse mb-2">
                  <Sparkles className="w-5 h-5" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-tight">
                    Coherent Match Identified!
                  </h3>
                  <span className="font-mono text-[8px] uppercase tracking-widest text-purple-400 font-bold block">
                    GBA INTEGRATIVE ALGORITHM ROUTING GATE
                  </span>
                </div>

                <div className="w-24 h-[1px] bg-zinc-800 my-1" />

                {/* Advisor details readout */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 py-3 max-w-md bg-white/[0.02] border border-white/5 rounded-2xl p-5">
                  <img
                    src={matchedAdvisor.avatar}
                    alt={matchedAdvisor.name}
                    className="w-16 h-16 rounded-full object-cover border border-purple-550/30"
                    referrerPolicy="no-referrer"
                  />
                  <div className="space-y-1.5">
                    <h4 className="font-serif text-lg text-white font-normal leading-none my-1">
                      {matchedAdvisor.name}
                    </h4>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-purple-400 font-bold block">
                      {matchedAdvisor.role}
                    </span>
                    <p className="font-sans text-[11px] text-zinc-400 font-light leading-relaxed">
                      Specialist in: <span className="text-zinc-300">{matchedAdvisor.spec}</span>
                    </p>
                  </div>
                </div>

                <p className="font-sans text-[11px] text-zinc-550 font-light max-w-sm mt-2">
                  An integration spec file details have been compiled. {matchedAdvisor.name} will reach out directly within 24 hours at <span className="text-zinc-400 font-medium">{formData.email}</span>.
                </p>

                <div className="pt-4 flex space-x-3 w-full">
                  <button
                    onClick={handleReset}
                    className="flex-1 py-3 bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white rounded-full text-[11px] font-mono uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    Recalibrate Profile
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 py-3 bg-white text-black hover:bg-[#7C3AED] hover:text-white rounded-full text-[11px] font-mono uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    De-engaged Portal
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Actions layout for multi steps */}
          {step < 4 && (
            <div className="flex justify-between items-center mt-10 pt-6 border-t border-white/5">
              <button
                onClick={() => setStep(prev => Math.max(1, prev - 1))}
                disabled={step === 1}
                className="font-mono text-[10px] tracking-wider uppercase text-zinc-500 disabled:opacity-0 hover:text-white transition-all cursor-pointer"
              >
                Back
              </button>

              <button
                onClick={handleNextStep}
                disabled={
                  (step === 1 && (!formData.name || !formData.email || !formData.company)) ||
                  (step === 2 && !formData.bottleneck) ||
                  (step === 3 && !formData.stage)
                }
                className="font-mono text-[10px] tracking-widest uppercase text-white hover:text-purple-400 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center space-x-1.5 cursor-pointer"
              >
                <span>{step === 3 ? 'Match Advisor' : 'Next Stage'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
