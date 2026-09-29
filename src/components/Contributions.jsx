import { motion } from 'framer-motion';
import { Users2, Lightbulb, Compass, Award, HeartHandshake } from 'lucide-react';

export default function Contributions() {
  const contributions = [
    {
      title: 'Teamwork',
      description: 'I enjoy collaborating with different people and contributing towards common goals.',
      icon: Users2,
      accent: 'from-blue-500/20 via-blue-500/5 to-transparent',
      borderColor: 'group-hover:border-blue-500/50',
      iconBg: 'bg-blue-500/10 text-blue-400',
      glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]',
    },
    {
      title: 'Ideas & Creativity',
      description: 'I am open to sharing new ideas and exploring creative approaches to projects and events.',
      icon: Lightbulb,
      accent: 'from-violet-500/20 via-violet-500/5 to-transparent',
      borderColor: 'group-hover:border-violet-500/50',
      iconBg: 'bg-violet-500/10 text-violet-400',
      glow: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]',
    },
    {
      title: 'Learning',
      description: 'I am always interested in learning new technologies, skills, and practical experiences.',
      icon: Compass,
      accent: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
      borderColor: 'group-hover:border-cyan-500/50',
      iconBg: 'bg-cyan-500/10 text-cyan-400',
      glow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]',
    },
    {
      title: 'Responsibility',
      description: 'I take assigned tasks seriously and aim to complete them properly and on time.',
      icon: Award,
      accent: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
      borderColor: 'group-hover:border-emerald-500/50',
      iconBg: 'bg-emerald-500/10 text-emerald-400',
      glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]',
    },
  ];

  return (
    <section id="contributions" className="py-24 relative z-10">
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
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Collaboration & Value</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            What I Bring to the Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto"
          >
            A dedicated student ready to pitch in, share creative ideas, and collaborate reliably.
          </motion.p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contributions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-3xl glass-card border border-white/10 p-6 sm:p-7 transition-all duration-300 ${item.borderColor} ${item.glow} flex flex-col justify-between overflow-hidden`}
              >
                {/* Background top-down subtle gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${item.accent} opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl ${item.iconBg} border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-slate-100 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    "{item.description}"
                  </p>
                </div>

                {/* Subtle bottom decorative line */}
                <div className="relative z-10 pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-accent-blue transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
