import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Copy,
  Check,
  Send,
  MessageSquareCode,
  User,
  ExternalLink
} from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const contactData = {
    name: 'Shivansh',
    degree: 'B.Tech IT, USICT',
    location: 'Delhi',
    phone: '9868730552',
    email: 'shivansh8851514064@gmail.com',
  };

  // Configurable social links - kept null/empty so they remain hidden until user provides URLs
  const socialLinks = [
    // { name: 'GitHub', url: '' },
    // { name: 'LinkedIn', url: '' }
  ].filter(link => link.url && link.url.trim() !== '');

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
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
            <MessageSquareCode className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Let's Connect!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed"
          >
            Have an idea, an event, or an opportunity to collaborate? I'd love to connect and learn something new.
          </motion.p>
        </div>

        {/* Contact Showcase Cards */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl glass-card border border-white/10 p-6 sm:p-10 overflow-hidden shadow-2xl"
          >
            {/* Ambient Background Glows inside contact box */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent-blue/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent-violet/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Card 1: Primary Identity Details */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl p-[1px] bg-gradient-to-tr from-accent-blue to-accent-violet shrink-0 overflow-hidden shadow-md">
                    <img
                      src="/shivansh.png"
                      alt="Shivansh"
                      className="w-full h-full object-cover rounded-[11px]"
                    />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Name</p>
                    <p className="text-base font-bold text-white mt-0.5">{contactData.name}</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center text-accent-violet shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Degree & Campus</p>
                    <p className="text-base font-semibold text-white mt-0.5">{contactData.degree}</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Location</p>
                    <p className="text-base font-semibold text-white mt-0.5">{contactData.location}</p>
                  </div>
                </div>
              </div>

              {/* Card 2: Interactive Communication Channels */}
              <div className="flex flex-col justify-between space-y-4">
                {/* Phone Card (Clickable tel:) */}
                <a
                  href={`tel:${contactData.phone}`}
                  className="p-4 rounded-2xl bg-dark-950/60 border border-white/5 hover:border-emerald-500/40 hover:bg-dark-900 transition-all duration-200 flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Phone</p>
                      <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 opacity-80 group-hover:opacity-100">
                        Tap to Call <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                    <p className="text-base font-bold text-white mt-0.5 tracking-wider font-mono group-hover:text-emerald-300 transition-colors">
                      {contactData.phone}
                    </p>
                  </div>
                </a>

                {/* Email Card (Clickable mailto:) */}
                <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/5 hover:border-accent-blue/40 transition-all duration-200 flex flex-col gap-3">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Email Address</p>
                      <a
                        href={`mailto:${contactData.email}`}
                        className="text-sm sm:text-base font-semibold text-white mt-0.5 block hover:text-accent-blue transition-colors truncate font-mono"
                        title={contactData.email}
                      >
                        {contactData.email}
                      </a>
                    </div>
                  </div>

                  {/* Copy Email Button */}
                  <button
                    onClick={copyEmailToClipboard}
                    className="w-full mt-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Email Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-400" />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Action CTA: Direct Mailto Button */}
                <a
                  href={`mailto:${contactData.email}?subject=Hello%20Shivansh%20-%20Opportunity%20/%20Collaboration`}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-accent-blue via-accent-violet to-accent-indigo text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-accent-blue/20 hover:shadow-accent-blue/30 border border-white/15 transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Contact Me Directly</span>
                </a>
              </div>

            </div>

            {/* Configurable Social Links (Hidden if none configured) */}
            {socialLinks.length > 0 && (
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
