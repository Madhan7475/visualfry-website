import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <a href="/" className="brand" style={{ marginBottom: '14px' }}>
              <img src="/logo.png" alt="Visualfry Studio Logo" />
            </a>
            <p>Express gateway for design & media outsourcing. Bangalore – 560091, Karnataka, India.</p>
            <p>Phone: +91 991-656-6592</p>
            <p>Email: contact@visualfry.com</p>
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
