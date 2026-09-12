import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <img className="hero-character" src="public/men.png" alt="Visualfry Studio" />
      <div className="wrap">
        <span className="eyebrow">Creative service from Bangalore</span>
        <h1>We visualize.<br/><span className="grad">You realize.</span></h1>
        <p className="sub">
          Visualfry Studio is your creative partner for video production, photography, graphic design, web & app development, and digital marketing—helping brands create, grow, and stand out with impactful creative solutions.
        </p>
        <div className="cta-row">
          <a href="#contact" className="btn-primary">Get a free quote</a>
          <a href="#services" className="btn-ghost">Explore services</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
