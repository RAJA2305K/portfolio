import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import BentoGrid from './components/BentoGrid';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import ProjectModal from './components/ProjectModal';
import SocialNotch from './components/SocialNotch';
import PageLoader from './components/PageLoader';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load - you can adjust this timing
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Show loader for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={{ position: 'relative' }}>
      <PageLoader isLoading={isLoading} />
      <ScrollProgress />
      <div className="mesh-gradient" />
      <CustomCursor />
      <Navbar />
      <SocialNotch />
      
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
