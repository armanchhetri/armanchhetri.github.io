import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Affiliations from './components/Affiliations';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div id="top">
        <Header />
      </div>
      <main className="pt-16"> {/* Add padding-top to account for fixed navigation */}
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="publications">
          <Publications />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="affiliations">
          <Affiliations />
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Arman Chhetri. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;