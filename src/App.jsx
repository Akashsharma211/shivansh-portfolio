import CursorGlow from './components/CursorGlow';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Contributions from './components/Contributions';
import Interests from './components/Interests';
import Goals from './components/Goals';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 selection:bg-accent-blue/30 selection:text-white">
      {/* Interactive Cursor Follower Glow */}
      <CursorGlow />

      {/* Atmospheric Ambient Lights, Grid & Canvas Constellation */}
      <AmbientBackground />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Contributions />
        <Interests />
        <Goals />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
