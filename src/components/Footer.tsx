interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer 
      id="main-applet-footer"
      className="site-footer"
    >
      {/* Animated dots border strip */}
      <div className="footer-dots" aria-hidden="true">
        <div className="footer-dots__line" />
      </div>

      {/* Footer Inner Section Grid */}
      <div className="site-footer__inner font-sans">
        {/* Top Grid details */}
        <div className="site-footer__top">
          <h2 className="font-sans font-light tracking-tight text-white leading-none">
            The complete outsourced growth department <br />
            <span className="text-[#B388FF] font-serif italic">behind modern businesses.</span>
          </h2>
          
          <nav className="site-footer__nav" aria-label="Services Links">
            <span className="font-sans text-[9px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Capabilities</span>
            <button className="text-left bg-transparent border-0 p-0 text-zinc-400 hover:text-white cursor-pointer" onClick={() => document.getElementById('engine-component-branding')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>Branding & Positioning</button>
            <button className="text-left bg-transparent border-0 p-0 text-zinc-400 hover:text-white cursor-pointer" onClick={() => document.getElementById('engine-component-marketing')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>Lead Attraction</button>
            <button className="text-left bg-transparent border-0 p-0 text-zinc-400 hover:text-white cursor-pointer" onClick={() => document.getElementById('engine-component-staffing')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>Staffing Support</button>
            <button className="text-left bg-transparent border-0 p-0 text-zinc-400 hover:text-white cursor-pointer" onClick={() => document.getElementById('engine-component-acquisition')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>CRM Workflows</button>
            <button className="text-left bg-transparent border-0 p-0 text-zinc-400 hover:text-white cursor-pointer" onClick={() => document.getElementById('engine-component-consulting')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>Hand-Off Playbooks</button>
          </nav>

          <nav className="site-footer__nav" aria-label="About Company links">
            <span className="font-sans text-[9px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Explore</span>
            <button className="text-left bg-transparent border-0 p-0 text-zinc-400 hover:text-white cursor-pointer" onClick={() => document.getElementById('scene-scroll-story')?.scrollIntoView({ behavior: 'smooth' })}>The Challenge</button>
            <button className="text-left bg-transparent border-0 p-0 text-zinc-400 hover:text-white cursor-pointer" onClick={() => document.getElementById('scene-gba-enters')?.scrollIntoView({ behavior: 'smooth' })}>Our Method</button>
            <button className="text-left bg-transparent border-0 p-0 text-zinc-400 hover:text-white cursor-pointer" onClick={() => document.getElementById('scene-sticky-storytelling')?.scrollIntoView({ behavior: 'smooth' })}>Capabilities</button>
            <button className="text-left bg-transparent border-0 p-0 text-zinc-400 hover:text-white cursor-pointer" onClick={() => document.getElementById('scene-transformation')?.scrollIntoView({ behavior: 'smooth' })}>Coordination</button>
            <button className="text-left bg-transparent border-0 p-0 text-zinc-400 hover:text-white cursor-pointer" onClick={(e) => {
              e.preventDefault();
              onOpenBooking();
            }}>Book a Call</button>
          </nav>

          <nav className="site-footer__nav" aria-label="Social links">
            <span className="font-sans text-[9px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Connect</span>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://x.com" target="_blank" rel="noreferrer">Follow Us on X</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </nav>

          <nav className="site-footer__nav" aria-label="Direct Contact">
            <span className="font-sans text-[9px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Direct Contact</span>
            <div>
              <span className="text-white text-xs block leading-tight font-normal">Devanshu Sehgal</span>
              <span className="text-[8px] text-zinc-500 uppercase tracking-wider block font-mono">Product Manager</span>
            </div>
            <a href="mailto:genzesofindia@gmail.com" className="text-zinc-400 hover:text-white font-mono text-xs mt-1">genzesofindia@gmail.com</a>
            <a href="tel:7087614437" className="text-zinc-400 hover:text-white font-mono text-xs">7087614437</a>
          </nav>
        </div>

        {/* Brand Row - GBA Wordmark */}
        <div className="site-footer__brand-row">
          <a href="/" className="site-footer__brand" aria-label="GBA home">
            <span className="site-footer__mark" aria-hidden="true" />
            <span>GBA</span>
          </a>
        </div>

        {/* Legal Line */}
        <div className="site-footer__legal">
          <p>© 2026 Gen-Z Business Agency (GBA). All rights reserved.</p>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms and Services</a>
        </div>
      </div>
    </footer>
  );
}
