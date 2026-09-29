import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Building2, BookCheck, ShieldCheck } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-xs font-mono tracking-wider uppercase mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Pathway</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            My Education
          </motion.h2>
        </div>

        {/* Education Timeline / Showcase Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-accent-blue/30 space-y-8">
            
            {/* Timeline Glowing Node */}
            <div className="absolute -left-[17px] top-6 w-8 h-8 rounded-full bg-dark-900 border-2 border-accent-blue flex items-center justify-center shadow-[0_0_16px_rgba(59,130,246,0.6)]">
              <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse" />
            </div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group rounded-3xl glass-card border border-white/10 p-6 sm:p-8 hover:border-accent-blue/40 transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Subtle card ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none group-hover:bg-accent-blue/15 transition-colors" />
              
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 mb-3">
                    <Building2 className="w-3.5 h-3.5 text-accent-blue" />
                    <span>Premier Engineering University Campus</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-accent-blue transition-colors">
                    University School of Information, Communication & Technology (USICT)
                  </h3>
                  <p className="text-base sm:text-lg text-accent-cyan font-medium mt-1">
                    B.Tech — Information Technology
                  </p>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-dark-950/80 border border-white/5">
                    <MapPin className="w-3.5 h-3.5 text-accent-violet" />
                    Delhi
                  </span>
                </div>
              </div>

              {/* Institution Context & Key Pillars */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Pursuing an undergraduate engineering curriculum specializing in Information Technology at USICT, Delhi, with an emphasis on core computing principles, collaborative problem-solving, and exploring modern technological systems.
              </p>

              {/* Curriculum Key Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2.5 text-xs text-slate-300 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                  <BookCheck className="w-4 h-4 text-accent-blue shrink-0" />
                  <span>Information Technology</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-accent-violet shrink-0" />
                  <span>Computing Fundamentals</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                  <GraduationCap className="w-4 h-4 text-accent-cyan shrink-0" />
                  <span>Campus Community</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
