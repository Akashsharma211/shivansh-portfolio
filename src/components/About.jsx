import { motion } from 'framer-motion';
import { Cpu, Users, Sparkles, BookOpen, MapPin, GraduationCap, Compass } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Cpu,
      title: 'Technology Enthusiast',
      description: 'Driven by curiosity for how modern digital systems, programming, and software function.',
      accent: 'from-blue-500/20 to-cyan-500/20',
      border: 'border-blue-500/30',
      iconColor: 'text-accent-blue',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Thrives in collaborative environments, enjoying shared milestones and collective problem-solving.',
      accent: 'from-violet-500/20 to-purple-500/20',
      border: 'border-violet-500/30',
      iconColor: 'text-accent-violet',
    },
    {
      icon: BookOpen,
      title: 'Always Learning',
      description: 'Consistently seeking new skills, fresh perspectives, and practical hands-on experiences.',
      accent: 'from-emerald-500/20 to-teal-500/20',
      border: 'border-emerald-500/30',
      iconColor: 'text-emerald-400',
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
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
            <Compass className="w-3.5 h-3.5" />
            <span>Discover Shivansh</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            A Little About Me
          </motion.h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Modern Profile Avatar Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan rounded-3xl opacity-30 blur-xl animate-pulse-slow" />
              
              <div className="relative rounded-2xl glass-card border border-white/10 p-6 sm:p-8 overflow-hidden">
                {/* Decorative background grid inside card */}
                <div className="absolute inset-0 tech-dots-pattern opacity-10 pointer-events-none" />

                {/* Modern Portrait Frame with Shivansh's Photograph */}
                <div className="relative mx-auto w-40 h-40 sm:w-44 sm:h-44 rounded-2xl bg-gradient-to-tr from-accent-blue via-accent-violet to-accent-cyan p-[2px] shadow-2xl mb-6 group">
                  <div className="relative w-full h-full rounded-[14px] bg-dark-900 overflow-hidden">
                    <img
                      src="/shivansh.png"
                      alt="Shivansh - B.Tech IT Student at USICT Delhi"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 via-transparent to-transparent opacity-60 pointer-events-none" />
                    <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-widest text-slate-200 uppercase bg-dark-950/80 px-2 py-0.5 rounded-full border border-white/10 backdrop-blur-sm whitespace-nowrap">
                      Shivansh
                    </span>
                  </div>
                </div>

                {/* Profile Meta info */}
                <div className="text-center space-y-2 mb-6">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Shivansh
                  </h3>
                  <p className="text-xs font-mono text-accent-blue flex items-center justify-center gap-1.5">
                    <GraduationCap className="w-4 h-4" />
                    B.Tech Information Technology
                  </p>
                  <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                    <span>Executive @ Indiebox Productions</span>
                  </div>
                  <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5 pt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    USICT, Delhi
                  </p>
                </div>

                {/* Card Stats / Micro badges */}
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/10 text-center font-mono">
                  <div className="bg-dark-950/60 rounded-xl p-2.5 border border-white/5">
                    <p className="text-[10px] text-slate-400 uppercase">Focus</p>
                    <p className="text-xs font-semibold text-slate-200">Tech & Systems</p>
                  </div>
                  <div className="bg-dark-950/60 rounded-xl p-2.5 border border-white/5">
                    <p className="text-[10px] text-slate-400 uppercase">Mindset</p>
                    <p className="text-xs font-semibold text-accent-cyan">Growth & Impact</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative + 3 Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            {/* Story Paragraphs */}
            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                I am Shivansh, a B.Tech Information Technology student at USICT, Delhi. I am interested in technology, college activities, teamwork, and learning new skills.
              </p>
              <p className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                I enjoy working with people, taking part in new experiences, and contributing ideas to projects and events. I am looking forward to becoming an active member of the college community and developing my technical, creative, communication, and leadership skills.
              </p>
            </div>

            {/* Three Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 * index }}
                    className={`rounded-2xl p-4.5 bg-gradient-to-b ${item.accent} glass-card ${item.border} hover:scale-[1.02] transition-transform duration-300 flex flex-col`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-dark-900/80 border border-white/10 flex items-center justify-center mb-3">
                      <IconComponent className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
