import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [activeHash, setActiveHash] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      setActiveHash(location.hash);
    } else if (location.pathname === '/') {
      setActiveHash('');
    }
  }, [location]);

  // Handle smooth scroll for home page
  const handleScroll = (e, id) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
        setActiveHash(`#${id}`);
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0b]/85 backdrop-blur-[12px] border-b border-border h-14 flex items-center">
      <div className="w-full max-w-[1126px] mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="font-mono text-text-primary text-sm font-semibold tracking-tight tracking-wider uppercase">
         ADEKEYE OLUWATOBI
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          <a href="/#about" onClick={(e) => handleScroll(e, 'about')} className={`nav-link font-sans ${activeHash === '#about' ? 'active' : ''}`}>About</a>
          <a href="/#projects" onClick={(e) => handleScroll(e, 'projects')} className={`nav-link font-sans ${activeHash === '#projects' ? 'active' : ''}`}>Projects</a>
          <a href="/#stack" onClick={(e) => handleScroll(e, 'stack')} className={`nav-link font-sans ${activeHash === '#stack' ? 'active' : ''}`}>Stack</a>
          <a href="/#contact" onClick={(e) => handleScroll(e, 'contact')} className={`nav-link font-sans ${activeHash === '#contact' ? 'active' : ''}`}>Contact</a>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="nav-link font-sans">CV</a>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-text-secondary hover:text-text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-surface border-b border-border p-4 flex flex-col space-y-4 md:hidden">
          <a href="/#about" onClick={(e) => handleScroll(e, 'about')} className="text-text-primary font-sans">About</a>
          <a href="/#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-text-primary font-sans">Projects</a>
          <a href="/#stack" onClick={(e) => handleScroll(e, 'stack')} className="text-text-primary font-sans">Stack</a>
          <a href="/#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-text-primary font-sans">Contact</a>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="text-text-primary font-sans">CV</a>
        </div>
      )}
    </nav>
  );
}
