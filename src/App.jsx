import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-text-primary selection:bg-accent/30 selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
