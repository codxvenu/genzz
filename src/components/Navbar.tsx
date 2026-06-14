import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import iconUrl from '@/icon.png';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Avoid trigger on rapid scroll bounce at the top of the page on iOS/Mac
      if (currentScrollY <= 50) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { label: 'THE CHALLENGE', target: 'scene-scroll-story' },
    { label: 'THE ROADMAP', target: 'scene-business-journey' },
    { label: 'OUR METHOD', target: 'scene-gba-enters' },
    { label: 'CAPABILITIES', target: 'scene-sticky-storytelling' },
    { label: 'COORDINATION', target: 'scene-transformation' },
    { label: 'OUTCOMES', target: 'scene-impact' }
  ];

  return (
    <nav
      id="main-navigation-bar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-none ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled 
          ? 'bg-black/75 backdrop-blur-md py-4 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand / Identity */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center cursor-pointer group select-none"
          >
            <img 
              src={iconUrl} 
              alt="GBA Logo" 
              className="h-8 sm:h-9 w-auto object-contain hover:scale-105 transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </div>
 
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <button 
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="text-[9px] font-sans text-zinc-400 hover:text-white transition-colors tracking-[0.2em] cursor-pointer font-semibold"
              >
                {link.label}
              </button>
            ))}
          </div>
 
          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenBooking}
              className="group flex items-center space-x-1.5 px-5 py-2 w-auto bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-[9px] font-sans rounded-full tracking-widest font-semibold uppercase transition-all shadow-md shadow-purple-900/40 cursor-pointer"
            >
              <span>Book Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
 
          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-4 py-1.5 text-[9px] font-sans text-zinc-300 hover:text-white border border-white/10 bg-white/5 rounded-full transition-all cursor-pointer font-semibold tracking-widest"
            >
              {mobileMenuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
 
        </div>
      </div>
 
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/5 py-8 px-6 space-y-6 animate-fade-in">
          <div className="flex flex-col space-y-5">
            {navLinks.map(link => (
              <button 
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="text-left py-1 text-[10px] font-sans text-zinc-400 hover:text-white transition-colors tracking-widest uppercase font-semibold"
              >
                {link.label}
              </button>
            ))}
            
            <div className="pt-6 border-t border-white/5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center space-x-1.5 py-3.5 bg-[#7C3AED] text-white text-[10px] font-sans rounded-full font-semibold tracking-widest uppercase transition-all cursor-pointer"
              >
                <span>BOOK STRATEGY CALL</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
