import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Layers, Database, Cpu, HardDrive, ShieldAlert } from 'lucide-react';

interface VisId {
  id: string;
  title: string;
  tagline: string;
  num: string;
}

export default function Scene5StickyStorytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('branding');

  const engineComponents: VisId[] = [
    { id: 'branding', title: 'Brand Positioning & Visuals', tagline: 'Capability 01 // Define Your Story & Style', num: '01' },
    { id: 'marketing', title: 'Lead Attraction Systems', tagline: 'Capability 02 // Capture High-Value Contacts', num: '02' },
    { id: 'staffing', title: 'Recruitment & Staffing Integration', tagline: 'Capability 03 // Hire Vetted Professionals', num: '03' },
    { id: 'acquisition', title: 'Systems & CRM Workflows', tagline: 'Capability 04 // Link Databases & Booking Apps', num: '04' },
    { id: 'consulting', title: 'Hand-Off Playbooks & Documentation', tagline: 'Capability 05 // Own Your Systems Completely', num: '05' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = engineComponents.map(s => document.getElementById(`engine-component-${s.id}`));
      const viewportHeight = window.innerHeight;

      let closestId = 'branding';
      let closestDistance = Infinity;

      elements.forEach(el => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - viewportHeight / 2);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = el.id.replace('engine-component-', '');
        }
      });

      setActiveTab(closestId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      id="scene-sticky-storytelling"
      className="relative bg-black py-32 select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Sticky Layout Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Panel (Sticky Title Box) */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 space-y-10 py-6">

            <div className="space-y-6">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-extrabold block">
                OUR FIVE SPECIALTIES
              </span>
              
              <div className="space-y-4">
                {engineComponents.map(component => {
                  const isActive = activeTab === component.id;
                  return (
                    <div
                      key={component.id}
                      className={`transition-all duration-500 ease-out flex items-center space-x-4 ${
                        isActive 
                          ? 'opacity-100 translate-x-1' 
                          : 'opacity-15 translate-x-0'
                      }`}
                    >
                      <span className="font-sans text-xs text-purple-400 font-bold">{component.num}</span>
                      <div className="flex flex-col">
                        <h4 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-tight">
                          {component.title}
                        </h4>
                        {isActive && (
                          <motion.p 
                            layoutId="tagline-active"
                            className="font-sans text-[9px] sm:text-[10px] tracking-wider text-purple-400/80 uppercase font-bold mt-1"
                          >
                            {component.tagline}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Micro visual bar selectors */}
            <div className="hidden lg:flex items-center space-x-3 pt-8">
              {engineComponents.map(s => {
                const isActive = activeTab === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      const el = document.getElementById(`engine-component-${s.id}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={`h-[2px] flex-1 transition-all duration-300 cursor-pointer ${
                      isActive ? 'bg-purple-500' : 'bg-zinc-850'
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Right Panel (Scrolling Blueprint Artifacts of the Machine) */}
          <div className="lg:col-span-7 space-y-36 py-12 lg:py-16">
            
            {/* COMPONENT 01 - BRAND POSITIONING & VISUALS */}
            <div 
              id="engine-component-branding"
              className="relative overflow-hidden rounded-[24px] bg-zinc-950/60 p-8 sm:p-12 min-h-[520px] flex flex-col justify-between shadow-2xl transition-all duration-300 group hover:bg-zinc-900/40"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="text-purple-400">
                    <Layers className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="font-sans text-[9px] tracking-[0.25em] text-zinc-400 uppercase font-bold">01 // BRAND DESIGN</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight leading-tight">Brand Positioning & Visuals</h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  The visual foundation of your growth. We design clean, high-impact styles, modern logos, and custom color palettes. This establishes clear visual rules used in all ad templates, landing pages, and marketing platforms.
                </p>
              </div>

              {/* Graphic Experience */}
              <div className="mt-8 relative overflow-hidden rounded-xl h-64 bg-black flex items-center justify-center">
                {/* Clean Blueprint Drafting overlay with layout guide alignment metrics */}
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                
                <div className="relative w-48 h-48 flex items-center justify-center border border-zinc-900/40 rounded-full">
                  {/* Real Drafting Lines */}
                  <div className="absolute left-0 right-0 h-px bg-purple-500/15" />
                  <div className="absolute top-0 bottom-0 w-px bg-purple-500/15" />
                  <div className="absolute inset-4 border border-[#7C3AED]/20 rounded-full animate-pulse" />
                  <div className="absolute inset-10 border border-dashed border-zinc-800 rounded-full animate-spin" style={{ animationDuration: '30s' }} />
                  
                  {/* Minimal Brand Core Symbol */}
                  <div className="w-16 h-16 bg-zinc-950 border border-purple-500/30 rounded-full flex items-center justify-center font-serif text-xl font-normal text-white shadow-lg shadow-purple-950/20 z-10">
                    &Phi;
                  </div>
                  
                  {/* Blueprint Specifications Stamp */}
                  <div className="absolute bottom-2 right-2 border border-purple-500/25 text-purple-400/80 rounded px-1.5 py-0.5 text-[7px] font-mono tracking-widest font-bold bg-black/60 shadow-md">
                    COMPLETED BLUEPRINT // BRAND ASSETS
                  </div>
                </div>
              </div>
            </div>

            {/* COMPONENT 02 - LEAD ATTRACTION SYSTEMS */}
            <div 
              id="engine-component-marketing"
              className="relative overflow-hidden rounded-[24px] border border-zinc-900 bg-zinc-950/60 p-8 sm:p-12 min-h-[520px] flex flex-col justify-between shadow-2xl transition-all duration-300 group hover:border-purple-500/10"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="text-purple-400">
                    <Database className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="font-sans text-[9px] tracking-[0.25em] text-zinc-400 uppercase font-bold">02 // AD CAMPAIGNS</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight leading-tight">Lead Attraction Systems</h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  Built to consistently capture interest from potential buyers. We setup direct organic loops and high-converting paid search ads to bring ideal customers right to your service page.
                </p>
              </div>

              {/* Graphic Experience */}
              <div className="mt-8 relative overflow-hidden rounded-xl h-64 bg-black flex flex-col justify-center items-center px-6">
                <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                
                {/* System intake vectors */}
                <div className="w-full max-w-sm space-y-3 relative z-10 font-sans text-[8px] text-zinc-500">
                  <div className="flex justify-between text-zinc-400 font-bold border-b border-zinc-900 pb-1.5">
                    <span>MARKETING CHANNEL</span>
                    <span>MONTHLY REACH</span>
                    <span>CONVERSION VALUE</span>
                  </div>
                  <div className="flex justify-between items-center bg-zinc-950/60 p-2 rounded border border-zinc-900/50">
                    <span className="text-zinc-300">Paid Search & Ads Campaigns</span>
                    <span className="text-purple-400 font-bold">145,000</span>
                    <span className="text-purple-400">3.2x Average ROI</span>
                  </div>
                  <div className="flex justify-between items-center bg-zinc-950/60 p-2 rounded border border-zinc-900/50">
                    <span className="text-zinc-300">Organic Social & Imagery Funnels</span>
                    <span className="text-purple-400 font-bold">92,000</span>
                    <span className="text-purple-300">Inbound Bookings</span>
                  </div>
                </div>
              </div>
            </div>

            {/* COMPONENT 03 - RECRUITMENT & STAFFING INTEGRATION */}
            <div 
              id="engine-component-staffing"
              className="relative overflow-hidden rounded-[24px] border border-zinc-900 bg-zinc-950/60 p-8 sm:p-12 min-h-[520px] flex flex-col justify-between shadow-2xl transition-all duration-300 group hover:border-purple-500/10"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="text-purple-400">
                    <Cpu className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="font-sans text-[9px] tracking-[0.25em] text-zinc-400 uppercase font-bold">03 // TEAM PLACEMENT</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight leading-tight">Recruitment & Staffing Integration</h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  We lay operational talent right inside your workspace. We search, vet, interview, and short-list reliable professionals so your internal team has the right people to sustain growth.
                </p>
              </div>

              {/* Graphic Experience */}
              <div className="mt-8 relative overflow-hidden rounded-xl h-64 bg-black flex items-center justify-center">
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#777_1px,transparent_1px)] bg-[size:10px] pointer-events-none" />
                
                {/* Structural coordination chart lines */}
                <div className="flex space-x-3 items-center z-10 font-sans text-[9px] bg-zinc-950/80 p-5 rounded-lg border border-zinc-900">
                  <div className="flex flex-col items-center">
                    <span className="text-zinc-400 mb-1">VETTED CANDIDATE</span>
                    <div className="h-2.5 w-16 bg-purple-500/40 rounded border border-purple-400/30 animate-pulse" />
                  </div>
                  <span className="text-zinc-500">&harr;</span>
                  <div className="flex flex-col items-center">
                    <span className="text-zinc-400 mb-1">YOUR TEAM OPENING</span>
                    <div className="h-2.5 w-16 bg-zinc-850 rounded border border-zinc-800" />
                  </div>
                </div>
              </div>
            </div>

            {/* COMPONENT 04 - SYSTEMS & CRM WORKFLOWS */}
            <div 
              id="engine-component-acquisition"
              className="relative overflow-hidden rounded-[24px] border border-zinc-900 bg-zinc-950/60 p-8 sm:p-12 min-h-[520px] flex flex-col justify-between shadow-2xl transition-all duration-300 group hover:border-purple-500/10"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="text-purple-400">
                    <HardDrive className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="font-sans text-[9px] tracking-[0.25em] text-zinc-400 uppercase font-bold">04 // SYSTEMS INTEGRATION</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight leading-tight">Systems & CRM Workflows</h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  Connecting your marketing tools with your customer database. We build reliable booking pages, email reminder flows, and notification automations so that leads turn into sales appointments without manual friction.
                </p>
              </div>

              {/* Graphic Experience */}
              <div className="mt-8 relative overflow-hidden rounded-xl h-64 bg-black flex items-center justify-center">
                <div className="w-[85%] space-y-2 bg-zinc-950 p-4 rounded-lg border border-zinc-900 z-10">
                  <div className="h-6 bg-purple-950/20 border border-purple-500/20 rounded flex items-center justify-between px-3 text-[8.5px] font-sans text-purple-300">
                    <span>1. LEAD INFLOW</span>
                    <span>100% CAPTURED</span>
                  </div>
                  <div className="w-[80%] mx-auto h-6 bg-purple-950/25 border border-purple-500/20 rounded flex items-center justify-between px-2.5 text-[8.5px] font-sans text-purple-300">
                    <span>2. PROFILE AUTOMATICALLY ENRICHED</span>
                    <span>100% DONE</span>
                  </div>
                  <div className="w-[60%] mx-auto h-6 bg-purple-900/35 border border-purple-500/35 rounded flex items-center justify-between px-2 text-[8.5px] font-sans text-white">
                    <span>3. CALENDAR MEETING</span>
                    <span>82% BOOKED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* COMPONENT 05 - HAND-OFF PLAYBOOKS & DOCUMENTATION */}
            <div 
              id="engine-component-consulting"
              className="relative overflow-hidden rounded-[24px] border border-zinc-900 bg-zinc-950/60 p-8 sm:p-12 min-h-[520px] flex flex-col justify-between shadow-2xl transition-all duration-300 group hover:border-purple-500/10"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="text-purple-400">
                    <ShieldAlert className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="font-sans text-[9px] tracking-[0.25em] text-zinc-400 uppercase font-bold">05 // HANDBOOK DEPLOYMENT</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight leading-tight">Hand-Off Playbooks & Documentation</h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  We don&apos;t keep your passwords or keys hostage. When the system is running smoothly, we guide your internal team, deliver clear handbook docs, and transition all system elements completely over to you so you can operate on your own.
                </p>
              </div>

              {/* Graphic Experience */}
              <div className="mt-8 relative overflow-hidden rounded-xl h-64 bg-black flex items-center justify-center">
                <div className="relative text-center font-sans p-5 z-10 bg-zinc-950 rounded border border-zinc-900">
                  <div className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-1">&Phi; FULL HAND-OFF COMPLETE</div>
                  <div className="text-[7.5px] text-zinc-500 uppercase">SYSTEMS ENTIRELY TRANSFERRED TO YOUR INTERNAL TEAM</div>
                  <div className="mt-4 inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/40 text-purple-400 rounded text-[7px] font-bold tracking-widest uppercase">
                    DEPLOYMENT COMPLETE
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
