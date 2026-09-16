import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };
  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header>
      <nav className="wrap">
        <Link
          to="/"
          className="brand"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src="/logo.png" alt="Visualfry Studio Logo" />
        </Link>
        <div className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks">
          <a href="/#services" onClick={closeMenu}>Services</a>
          <Link to="/work" onClick={closeMenu}>Work</Link>
          <a href="/#about" onClick={closeMenu}>About</a>
          <a href="/#process" onClick={closeMenu}>How it works</a>
          <a href="/#contact" onClick={closeMenu}>Contact</a>
        </div>
        <div className="nav-right">
          <a href="https://wa.me/919916566592" className="nav-whatsapp" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>+91 9916566592</a>
          <a href="/#contact" className="nav-cta" onClick={closeMenu}>Start a project</a>
          <button
            className="nav-toggle"
            id="navToggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
