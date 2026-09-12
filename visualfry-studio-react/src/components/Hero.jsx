import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="wrap">
        <img className="hero-character" src="/ganesha.png" alt="Visualfry Studio" />
        <span className="eyebrow">Creative service from Bangalore</span>
        <h1><span className="grad">Happy Ganesh Chaturthi!</span></h1>
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
