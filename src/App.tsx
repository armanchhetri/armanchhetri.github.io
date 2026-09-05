import Affiliations from './components/Affiliations';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="page-wrap">
        <div id="top">
          <Header />
        </div>
        <main id="main">
          <Publications />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Affiliations />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
