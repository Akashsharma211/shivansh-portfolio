import { motion } from 'framer-motion';
import { ArrowDown, Mail, ArrowUpRight, GraduationCap, Sparkles } from 'lucide-react';
import HeroOrb from './HeroOrb';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Small Label Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-xs font-mono uppercase tracking-wider mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>B.TECH IT STUDENT · USICT DELHI</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.12]">
              Hey, I'm <span className="text-gradient-accent">Shivansh</span>.
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl font-medium text-slate-300 mb-6 tracking-tight">
              Exploring Technology. Building Connections. <span className="text-slate-100 font-semibold underline decoration-accent-blue decoration-2 underline-offset-4">Growing Every Day.</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
              I'm a B.Tech Information Technology student at USICT, Delhi, passionate about technology, teamwork, creative ideas, and exploring new opportunities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('about')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-indigo text-white font-medium text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-accent-blue/25 hover:shadow-accent-blue/40 border border-white/20 transition-all cursor-pointer group"
              >
                <span>Explore My Portfolio</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('contact')}
                className="px-6 py-3.5 rounded-xl bg-dark-850/80 hover:bg-dark-800 text-slate-200 font-medium text-sm flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 backdrop-blur-md transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-accent-violet" />
                <span>Let's Connect</span>
              </motion.button>
            </div>

            {/* Micro Highlights Pill */}
            <div className="mt-10 pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-blue" />
                <span>University School of Information, Comm. & Tech</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-violet" />
                <span>Delhi, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Visual Element */}
          <motion.div
            className="lg:col-span-5 flex items-center justify-center w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroOrb />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
