import { motion } from 'framer-motion';
import { Sparkles, Cpu, Laptop, Calendar, Palette, Users, GraduationCap } from 'lucide-react';

export default function Interests() {
  const interests = [
    { name: 'Technology', icon: Cpu, color: 'hover:border-blue-500/60 hover:shadow-blue-500/20 text-blue-400' },
    { name: 'IT', icon: Laptop, color: 'hover:border-cyan-500/60 hover:shadow-cyan-500/20 text-cyan-400' },
    { name: 'Events', icon: Calendar, color: 'hover:border-violet-500/60 hover:shadow-violet-500/20 text-violet-400' },
    { name: 'Creative Activities', icon: Palette, color: 'hover:border-pink-500/60 hover:shadow-pink-500/20 text-pink-400' },
    { name: 'Team Projects', icon: Users, color: 'hover:border-indigo-500/60 hover:shadow-indigo-500/20 text-indigo-400' },
    { name: 'College Activities', icon: GraduationCap, color: 'hover:border-emerald-500/60 hover:shadow-emerald-500/20 text-emerald-400' },
  ];

  return (
    <section id="interests" className="py-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/30 text-accent-violet text-xs font-mono tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Passions & Pursuits</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Things That Excite Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto"
          >
            Domains where I love dedicating time, collaborating with peers, and building momentum.
          </motion.p>
        </div>

        {/* Floating Pill Badges Container */}
        <div className="relative max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 glass-card border border-white/10 overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 tech-dots-pattern opacity-30" />
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent-blue/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent-violet/15 rounded-full blur-3xl pointer-events-none" />

          {/* Interactive Badges Cloud */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {interests.map((interest, idx) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.07, y: -4 }}
                  whileTap={{ scale: 0.96 }}
                  className={`cursor-pointer px-6 py-3.5 rounded-full bg-dark-900/80 backdrop-blur-md border border-white/10 ${interest.color} transition-all duration-300 shadow-lg flex items-center gap-3 group`}
                >
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base text-slate-200 group-hover:text-white transition-colors">
                    {interest.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
