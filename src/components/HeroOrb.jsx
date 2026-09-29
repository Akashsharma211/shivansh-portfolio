import { useState } from 'react';
import { Sparkles, Terminal, Cpu, Network, Compass } from 'lucide-react';

export default function HeroOrb() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[460px] aspect-square flex items-center justify-center select-none"
      style={{
        perspective: '1000px',
      }}
    >
      {/* 3D Tilted Container */}
      <div
        className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Deep Aura Glows */}
        <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-accent-blue/30 via-accent-violet/30 to-accent-cyan/20 blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute w-44 h-44 rounded-full bg-accent-violet/25 blur-2xl pointer-events-none" />

        {/* Outer Tech Ring (Counter-Clockwise) */}
        <div className="absolute w-[360px] h-[360px] sm:w-[400px] sm:h-[400px] rounded-full border border-dashed border-accent-blue/25 animate-spin-slow [animation-direction:reverse] pointer-events-none">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-blue/40 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_10px_#06b6d4]" />
          </div>
        </div>

        {/* Middle Angled Orbital Ring */}
        <div
          className="absolute w-[300px] h-[300px] sm:w-[330px] sm:h-[330px] rounded-full border border-accent-violet/40 animate-spin-slow pointer-events-none"
          style={{ transform: 'rotateX(55deg) rotateY(20deg)' }}
        >
          <div className="absolute -bottom-2 right-1/4 w-3.5 h-3.5 rounded-full bg-accent-violet/60 shadow-[0_0_12px_#8b5cf6]" />
        </div>

        {/* Second Elliptic Ring */}
        <div
          className="absolute w-[300px] h-[300px] sm:w-[330px] sm:h-[330px] rounded-full border border-accent-cyan/30 animate-spin-slow [animation-duration:14s] pointer-events-none"
          style={{ transform: 'rotateX(-55deg) rotateY(-30deg)' }}
        >
          <div className="absolute -top-1.5 left-1/3 w-3 h-3 rounded-full bg-accent-cyan/70 shadow-[0_0_10px_#06b6d4]" />
        </div>

        {/* Core Futuristic Central Orb with Shivansh's Portrait */}
        <div className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-full p-[2px] bg-gradient-to-tr from-accent-blue via-accent-violet to-accent-cyan shadow-2xl shadow-accent-violet/35 animate-float group">
          <div className="w-full h-full rounded-full bg-dark-900/90 backdrop-blur-xl flex flex-col items-center justify-center border border-white/10 relative overflow-hidden">
            {/* Shivansh's Portrait */}
            <img
              src="/shivansh.png"
              alt="Shivansh"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            />

            {/* Glowing HUD Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/85 via-dark-950/20 to-transparent pointer-events-none" />

            {/* Micro HUD Tag in Center Core */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none">
              <span className="text-[10px] font-mono tracking-wider text-slate-200 uppercase px-2.5 py-0.5 rounded-full bg-dark-950/90 border border-accent-blue/40 shadow-sm backdrop-blur-md">
                Shivansh · IT
              </span>
            </div>

            {/* Subtle inner grid lines */}
            <div className="absolute inset-0 tech-grid-pattern opacity-25 pointer-events-none" />
          </div>
        </div>

        {/* Floating Futuristic Badges (Parallax layer) */}
        {/* Top-Right Badge */}
        <div
          className="absolute -top-2 -right-4 sm:right-2 z-20 glass-card px-3 py-2 rounded-xl border border-white/15 shadow-xl flex items-center gap-2.5 animate-float"
          style={{ animationDelay: '1s' }}
        >
          <div className="w-7 h-7 rounded-lg bg-accent-blue/20 text-accent-blue flex items-center justify-center">
            <Cpu className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="text-[10px] text-slate-400 font-mono">B.Tech IT</p>
            <p className="text-xs font-semibold text-white">USICT Delhi</p>
          </div>
        </div>

        {/* Bottom-Left Badge */}
        <div
          className="absolute -bottom-4 -left-4 sm:left-2 z-20 glass-card px-3 py-2 rounded-xl border border-white/15 shadow-xl flex items-center gap-2.5 animate-float-reverse"
          style={{ animationDelay: '2.5s' }}
        >
          <div className="w-7 h-7 rounded-lg bg-accent-violet/20 text-accent-violet flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="text-[10px] text-slate-400 font-mono">Status</p>
            <p className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Active Explorer
            </p>
          </div>
        </div>

        {/* Bottom-Right Badge */}
        <div
          className="hidden sm:flex absolute bottom-8 -right-8 z-20 glass-card px-3 py-1.5 rounded-xl border border-white/15 shadow-xl items-center gap-2 animate-float"
          style={{ animationDelay: '3.5s' }}
        >
          <Network className="w-3.5 h-3.5 text-accent-cyan" />
          <span className="text-[11px] font-mono text-slate-300">Curious Mind</span>
        </div>
      </div>
    </div>
  );
}
