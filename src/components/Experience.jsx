import { motion } from 'framer-motion';
import { Briefcase, Building, Calendar, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono tracking-wider uppercase mb-3"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional & Leadership Roles</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Experience & Roles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto"
          >
            Hands-on organizational experience driving creative initiatives and collaborative teamwork.
          </motion.p>
        </div>

        {/* Experience Showcase Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl glass-card border border-white/10 p-6 sm:p-9 hover:border-amber-500/40 transition-all duration-300 shadow-2xl overflow-hidden"
          >
            {/* Subtle warm orange / amber ambient glow for Indiebox */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-orange-500/15 via-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none group-hover:from-orange-500/25 transition-all duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
              
              {/* Organization Info + Logo */}
              <div className="flex items-start gap-4">
                {/* Indiebox Productions Logo */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2.5 shadow-lg border border-white/20 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/indiebox.png"
                    alt="Indiebox Productions Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Currently Active
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                      Executive Role
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                    Executive
                  </h3>

                  <p className="text-base sm:text-lg text-slate-200 font-medium flex items-center gap-2 mt-0.5">
                    <span>Indiebox Productions</span>
                  </p>
                </div>
              </div>

              {/* Status / Timing Badge */}
              <div className="flex md:flex-col items-start md:items-end justify-between gap-2 text-xs font-mono text-slate-400">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-dark-950/80 border border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Present</span>
                </div>
              </div>
            </div>

            {/* Description & Core Contributions */}
            <p className="relative z-10 text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Serving as an Executive at Indiebox Productions, contributing towards collaborative media projects, team coordination, event execution, and creative operational workflows.
            </p>

            {/* Key Responsibility Highlights */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2.5 text-xs text-slate-300 bg-white/[0.03] p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Executive Operations & Planning</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300 bg-white/[0.03] p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Creative Media & Production</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300 bg-white/[0.03] p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cross-Functional Team Collaboration</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300 bg-white/[0.03] p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Event & Project Coordination</span>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
