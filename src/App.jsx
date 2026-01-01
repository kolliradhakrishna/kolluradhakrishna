import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import ScrollLayout from './components/ScrollLayout';

import CustomCursor from './components/CustomCursor';

function App() {
  const [currentPage, setCurrentPage] = React.useState(0);

  return (
    <>
      <SEO
        title="Kollu Radha Krishna | AI Enthusiast"
        description="Official portfolio of Kollu Radha Krishna showcasing projects, technical skills, and professional journey in AI and Software Development."
      />

      <CustomCursor />

      <div className="bg-primary min-h-screen text-white selection:bg-accent-emerald selection:text-white">
        <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
        {/* Main Content wrapped in ScrollLayout */}
        <ScrollLayout currentPage={currentPage} onPageChange={setCurrentPage}>
          <div id="home" className="w-full h-full"><Hero /></div>
          <div id="skills" className="w-full h-full"><Skills /></div>
          <div id="experience" className="w-full h-full"><Education /></div>
          <div id="projects" className="w-full h-full"><Projects /></div>
          <div id="achievements" className="w-full h-full"><Achievements /></div>
          <div id="contact" className="w-full h-full flex flex-col justify-between">
            <Contact />
            <Footer />
          </div>
        </ScrollLayout>
      </div>
    </>
  );
}

export default App;
