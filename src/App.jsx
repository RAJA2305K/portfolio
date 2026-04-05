import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import BentoGrid from './components/BentoGrid';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import ProjectModal from './components/ProjectModal';
import SocialLinks from './components/SocialLinks';
import SocialNotch from './components/SocialNotch';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main style={{ position: 'relative' }}>
      <div className="mesh-gradient" />
      <CustomCursor />
      <SocialLinks />
      <Navbar />
      
      <div className="section-wrapper">
        <Hero />
        <About />
        <Experience />
        <BentoGrid onProjectClick={setSelectedProject} />
        <Skills />
        <Contact />
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </main>
  );
}

export default App;
