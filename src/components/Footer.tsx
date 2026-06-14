import { useEffect, useRef, useState } from 'react';
import { Terminal, Cpu, Radio, Shield } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentYear] = useState(() => new Date().getFullYear());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{ x: number; y: number; size: number; speedX: number; opacity: number }> = [];

    // Resize observer to set canvas sizes safely
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = 300;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.min(60, Math.floor(canvas.width / 20));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: Math.random() * 0.4 + 0.1, // Left to right drift
          opacity: Math.random() * 0.4 + 0.1
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      
      // Draw standard coordinate lines
      ctx.strokeStyle = 'rgba(124, 58, 237, 0.04)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < canvas.width; x += 100) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(192, 132, 252, ${p.opacity})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Move particle horizontally
        p.x += p.speedX;
        if (p.x > canvas.width) {
          p.x = 0;
          p.y = Math.random() * canvas.height;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();

    window.addEventListener('resize', resizeCanvas);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden py-16 text-zinc-500">
      
      {/* Immersive interactive coordinate matrix canvas */}
      <div className="absolute inset-x-0 bottom-0 top-0 h-full pointer-events-none z-0">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Upper Column rows */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/5 pb-16">
          
          <div className="md:col-span-5 space-y-6 text-left">
            <div className="flex items-center space-x-2 text-white">
              <span className="font-serif text-2xl font-normal tracking-tight">GBA.</span>
              <span className="font-mono text-[7px] tracking-[0.3em] text-purple-400 font-extrabold uppercase bg-purple-950/20 px-2 py-0.5 rounded border border-purple-500/10">COHERENT_PORTAL</span>
            </div>
            
            <p className="font-sans text-xs font-light max-w-sm leading-relaxed text-zinc-400">
              A cinema-grade operational partnership constructing custom growth machinery, embedding elite talent, and syndicating raw social narratives for scaling enterprise units.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-left text-xs font-sans">
            
            <div className="space-y-4">
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#A1A1AA] font-bold block">SYSTEM VECTORS</span>
              <ul className="space-y-2 font-light text-zinc-400">
                <li><button onClick={onOpenBooking} className="hover:text-purple-400 transition-colors cursor-pointer text-left">Brand Narrative</button></li>
                <li><button onClick={onOpenBooking} className="hover:text-purple-400 transition-colors cursor-pointer text-left">Organic Loops</button></li>
                <li><button onClick={onOpenBooking} className="hover:text-purple-400 transition-colors cursor-pointer text-left">Elite Recruits</button></li>
                <li><button onClick={onOpenBooking} className="hover:text-purple-400 transition-colors cursor-pointer text-left">Workflow Sync</button></li>
              </ul>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#A1A1AA] font-bold block">COORDINATION</span>
              <ul className="space-y-2 font-light text-zinc-400">
                <li><a href="#path-to-growth-section" className="hover:text-purple-400 transition-colors">Growth Path</a></li>
                <li><a href="#scene-sticky-storytelling" className="hover:text-purple-400 transition-colors">Exhibition Suites</a></li>
                <li><a href="#scene-transformation" className="hover:text-purple-400 transition-colors">Coherence Layer</a></li>
                <li><a href="#calculator-section" className="hover:text-purple-400 transition-colors">Usage Modeler</a></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1 space-y-4">
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#A1A1AA] font-bold block">SPECIFICATIONS</span>
              <ul className="space-y-2 font-light text-zinc-400">
                <li className="flex items-center space-x-1.5 leading-none">
                  <Cpu className="w-3.5 h-3.5 text-purple-450" />
                  <span>LATENCY: [3.4ms]</span>
                </li>
                <li className="flex items-center space-x-1.5 leading-none">
                  <Radio className="w-3.5 h-3.5 text-purple-450" />
                  <span>SIGNAL: FULL_FLOW</span>
                </li>
                <li className="flex items-center space-x-1.5 leading-none">
                  <Shield className="w-3.5 h-3.5 text-purple-450" />
                  <span>SECURE BLUEPRINT</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Lower credit rows */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-650">
          <div className="flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-zinc-700" />
            <span>&copy; {currentYear} GBA COHERENCE PARTNERS. ALL SECURED BLUEPRINTS PROTECTED.</span>
          </div>
          
          <div className="flex space-x-4">
            <span className="text-purple-300 font-bold">TERMS: STIFF_BLUEPRINT_REG</span>
            <span>SPEC: GBA_V1_OPERATIVE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
