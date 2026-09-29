import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contributions', href: '#contributions' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'education', 'skills', 'contributions', 'interests', 'goals', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Shivansh Brand */}
          <a
            href="#home"
            onClick={(e) => scrollTo(e, '#home')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-blue via-accent-violet to-accent-cyan p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md">
              <div className="w-full h-full bg-dark-900 rounded-[10px] overflow-hidden flex items-center justify-center">
                <img
                  src="/shivansh.png"
                  alt="Shivansh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white text-lg group-hover:text-accent-blue transition-colors">
                Shivansh
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                USICT · Delhi
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-dark-900/60 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-accent-violet/20 border border-accent-blue/40 rounded-full -z-10 shadow-[0_0_12px_rgba(59,130,246,0.3)]" />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Availability Status Badge & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to learning & opportunities</span>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-medium sm:flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span>Open</span>
            </div>
            
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-dark-850/80 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 rounded-2xl bg-dark-900/95 border border-white/10 backdrop-blur-2xl p-4 shadow-2xl transition-all">
            <div className="mb-3 px-2 py-1.5 flex items-center justify-between text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open to learning & opportunities
              </span>
            </div>
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-accent-blue/15 text-accent-blue border border-accent-blue/30'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 opacity-50 ${isActive ? 'text-accent-blue opacity-100' : ''}`} />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
