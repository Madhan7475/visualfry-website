import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div className="reveal">
          <span className="eyebrow">Who we are</span>
          <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', margin: '16px 0 20px' }}>Part of the visual world, built for yours.</h2>
          <p>Visualfry Studio provides creative outsourcing for brands around the globe — we create, edit, and transform digital content for every visual need a growing business runs into.</p>
          <p>Based in Bangalore, we work as an extension of your team: briefed like an in-house department, billed like an agency, and available whenever the next deadline lands.</p>
          <a href="#contact" className="btn-ghost">Talk to the studio</a>
        </div>
        <div className="about-visual reveal">
          <img src="/who we are.png" alt="Visualfry Studio Logo" style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }} />
        </div>
      </div>
    </section>
  );
};

export default About;
