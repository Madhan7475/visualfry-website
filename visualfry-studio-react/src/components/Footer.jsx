import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <a href="/" className="brand" style={{ marginBottom: '14px' }}>
              <img src="/logo.png" alt="Visualfry Studio Logo" />
            </a>
            <p><MapPin size={14} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Express gateway for design & media outsourcing. Bangalore – 560091, Karnataka, India.</p>
            <p><Phone size={14} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> +91 991-656-6592</p>
            <p><Mail size={14} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> contact@visualfry.com</p>
          </div>
          <div>
            <h4>Studio</h4>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#process">How it works</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h4>Services</h4>
            <a href="#services">Video Editing</a>
            <a href="#services">Graphic Design</a>
            <a href="#services">Virtual Staging</a>
            <a href="#services">Matterport 3D</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Visualfry Studio. All rights reserved.</span>
          <span>We visualize. You realize.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
