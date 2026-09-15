import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="wrap">
        <img className="hero-character" src="/banner.png" alt="Visualfry Studio" />
        <span className="eyebrow">Creative service from Bangalore</span>
        <h1 className="festive-font"><span className="grad">Crafting Visual Stories That Inspire</span></h1>
        <p className="sub">
          Part of the visual world, built for yours.
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
