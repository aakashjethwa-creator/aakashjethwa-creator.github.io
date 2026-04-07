import { useState, useEffect } from 'react';
import { Instagram, Linkedin, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#hero">
          <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-red flex items-center justify-center font-bold text-xl font-display">A</div>
              <span className="font-display font-bold text-xl tracking-tighter uppercase">Akash Jethwa</span>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#work" className="hover:text-brand-red transition-colors">Work</a>
          <a href="#about" className="hover:text-brand-red transition-colors">About</a>
          <a href="#contact" className="hover:text-brand-red transition-colors">Contact</a>
          <div className="flex items-center gap-4 ml-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://in.linkedin.com/in/aakash-jethwa-ab02821ab" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full border-t border-white/10 bg-brand-black/95 backdrop-blur-md transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <div className="px-6 py-6 flex flex-col gap-5 text-xs font-bold uppercase tracking-[0.25em]">
          <a href="#work" onClick={handleCloseMenu} className="hover:text-brand-red transition-colors">Work</a>
          <a href="#about" onClick={handleCloseMenu} className="hover:text-brand-red transition-colors">About</a>
          <a href="#contact" onClick={handleCloseMenu} className="hover:text-brand-red transition-colors">Contact</a>
          <div className="flex items-center gap-5 pt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://in.linkedin.com/in/aakash-jethwa-ab02821ab" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
