import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-dark-950/80 backdrop-blur-md py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg overflow-hidden border border-white/15 shadow-sm">
                <img
                  src="/shivansh.png"
                  alt="Shivansh"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-white tracking-tight">Shivansh</span>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Designed with curiosity by Shivansh.
            </p>
          </div>

          {/* Copyright & Meta */}
          <div className="text-center sm:text-right text-xs text-slate-500 font-mono flex flex-col items-center sm:items-end gap-1">
            <p>© 2026 Shivansh. All rights reserved.</p>
            <p className="text-slate-600 text-[11px]">USICT · Information Technology</p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-dark-900 border border-white/10 text-slate-400 hover:text-white hover:border-accent-blue/50 hover:bg-accent-blue/10 transition-all duration-300 shadow-md group cursor-pointer"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </footer>
  );
}
