import { motion } from 'framer-motion';
import {
  Users,
  MessageSquare,
  Clock,
  Zap,
  Code2,
  Monitor,
  Lightbulb,
  CalendarCheck,
  CheckCircle2,
  Layers
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Personal Skills',
      description: 'Strengths in interpersonal collaboration and self-driven growth',
      badgeColor: 'text-accent-blue bg-accent-blue/10 border-accent-blue/30',
      skills: [
        {
          name: 'Teamwork',
          icon: Users,
          description: 'Working harmoniously with peers towards shared objectives and project milestones.',
        },
        {
          name: 'Communication',
          icon: MessageSquare,
          description: 'Articulating thoughts clearly and listening actively in team discussions.',
        },
        {
          name: 'Time Management',
          icon: Clock,
          description: 'Organizing tasks effectively to meet commitments and project deadlines.',
        },
        {
          name: 'Quick Learning',
          icon: Zap,
          description: 'Rapidly absorbing new concepts, tools, and technical paradigms with curiosity.',
        },
      ],
    },
    {
      category: 'Technical Skills',
      description: 'Core competencies in engineering and digital computing systems',
      badgeColor: 'text-accent-violet bg-accent-violet/10 border-accent-violet/30',
      skills: [
        {
          name: 'Basic Programming',
          icon: Code2,
          description: 'Understanding computational logic, foundational code structures, and algorithms.',
        },
        {
          name: 'Computer & IT Skills',
          icon: Monitor,
          description: 'Knowledge of software environments, operating systems, and technological tools.',
        },
        {
          name: 'Problem Solving',
          icon: Lightbulb,
          description: 'Breaking down complex challenges into structured, logical solution steps.',
        },
      ],
    },
    {
      category: 'Activities',
      description: 'Active involvement in extracurricular and university initiatives',
      badgeColor: 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/30',
      skills: [
        {
          name: 'Event Participation',
          icon: CalendarCheck,
          description: 'Engaging enthusiastically in college workshops, events, hackathons, and gatherings.',
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/30 text-accent-violet text-xs font-mono tracking-wider uppercase mb-3"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Capabilities & Mindset</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Skills & Strengths
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto"
          >
            A balanced foundation of interpersonal qualities, computing basics, and dynamic event participation.
          </motion.p>
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {skillCategories.map((cat, catIdx) => (
            <div key={cat.category} className="space-y-5">
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-lg text-xs font-mono font-medium border ${cat.badgeColor}`}>
                    {cat.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                    {cat.skills.length} {cat.skills.length === 1 ? 'skill' : 'skills'}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono">{cat.description}</p>
              </div>

              {/* Skills Grid */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 ${cat.skills.length >= 3 ? 'lg:grid-cols-3 xl:grid-cols-4' : 'lg:grid-cols-2 max-w-2xl'} gap-4`}>
                {cat.skills.map((skill, skillIdx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.08 * skillIdx }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="group relative rounded-2xl glass-card border border-white/10 p-5 hover:border-accent-blue/40 transition-all duration-300 shadow-lg flex flex-col justify-between"
                    >
                      {/* Subtle hover gradient */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-blue/5 via-accent-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center group-hover:border-accent-blue/40 group-hover:bg-accent-blue/10 transition-colors">
                            <Icon className="w-5 h-5 text-slate-300 group-hover:text-accent-blue transition-colors" />
                          </div>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400/60 group-hover:text-emerald-400 transition-colors" />
                        </div>

                        <h4 className="text-base font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">
                          {skill.name}
                        </h4>

                        <p className="text-xs text-slate-400 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
