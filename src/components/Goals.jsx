import { motion } from 'framer-motion';
import { Target, CheckCircle, ArrowRight, Sparkles, Flag } from 'lucide-react';

export default function Goals() {
  const goals = [
    {
      step: '01',
      title: 'Become an active contributor to the college club.',
      context: 'Engaging proactively with society activities, participating in discussions, and assisting in initiatives.',
      tag: 'Community',
      color: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
    },
    {
      step: '02',
      title: 'Gain practical experience through club projects and events.',
      context: 'Translating theoretical knowledge into actual real-world student projects and organized campus events.',
      tag: 'Practical Experience',
      color: 'border-violet-500/40 text-violet-400 bg-violet-500/10',
    },
    {
      step: '03',
      title: 'Improve communication and teamwork skills.',
      context: 'Refining public speaking, team coordination, active listening, and collective execution.',
      tag: 'Interpersonal',
      color: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
    },
    {
      step: '04',
      title: 'Learn from seniors and fellow club members.',
      context: 'Seeking mentorship, understanding best practices, and absorbing valuable guidance from peers.',
      tag: 'Mentorship',
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
    },
    {
      step: '05',
      title: 'Explore new technical and creative opportunities.',
      context: 'Pushing boundaries by exploring emerging tech stacks, design systems, and creative problem-solving venues.',
      tag: 'Exploration',
      color: 'border-pink-500/40 text-pink-400 bg-pink-500/10',
    },
  ];

  return (
    <section id="goals" className="py-24 relative z-10">
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
            <Target className="w-3.5 h-3.5" />
            <span>Future Roadmap</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Where I Want to Grow
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto"
          >
            A clear roadmap of aspirations as I immerse myself in the USICT campus and tech community.
          </motion.p>
        </div>

        {/* Vertical Roadmap Container */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Glowing Guide Line */}
          <div className="absolute left-6 sm:left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-accent-blue via-accent-violet to-accent-cyan opacity-30" />

          {/* Steps List */}
          <div className="space-y-6 sm:space-y-8">
            {goals.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-14 sm:pl-20 group"
              >
                {/* Step Circle Indicator */}
                <div className="absolute left-2.5 sm:left-4 top-4 -translate-x-1/2 w-8 h-8 rounded-xl bg-dark-900 border border-white/20 group-hover:border-accent-blue flex items-center justify-center font-mono font-bold text-xs text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                  <span className="text-gradient-accent">{item.step}</span>
                </div>

                {/* Card Content */}
                <div className="rounded-2xl glass-card border border-white/10 p-5 sm:p-6 hover:border-white/20 transition-all duration-300 group-hover:bg-dark-850/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className={`self-start px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${item.color}`}>
                      {item.tag}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">Objective {item.step}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-accent-blue transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.context}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
