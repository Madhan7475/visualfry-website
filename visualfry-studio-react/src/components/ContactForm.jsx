import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Video Editing',
    budget: 'Under ₹10,000',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project brief from ${formData.name} — ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nProject details:\n${formData.message}`
    );
    window.location.href = `mailto:contact@visualfry.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-form-section" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info reveal">
          <span className="eyebrow">Get in touch</span>
          <h2>Let's start your project.</h2>
          <p>Tell us what you need and we'll come back with a quote and a team match — usually within a few hours.</p>

          <div className="contact-detail">
            <div className="dot"></div>
            <div><h4>Email</h4><p>contact@visualfry.com</p></div>
          </div>
          <div className="contact-detail">
            <div className="dot"></div>
            <div><h4>Phone</h4><p>+91 991-656-6592</p></div>
          </div>
          <div className="contact-detail">
            <div className="dot"></div>
            <div><h4>Studio</h4><p>Bangalore – 560091, Karnataka, India</p></div>
          </div>
        </div>

        <form className="contact-form reveal" id="contactForm" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="cf-name">Full name</label>
              <input
                type="text"
                id="cf-name"
                name="name"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="cf-email">Email</label>
              <input
                type="email"
                id="cf-email"
                name="email"
                required
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="cf-service">Service</label>
              <select id="cf-service" name="service" value={formData.service} onChange={handleChange}>
                <option>Video Editing</option>
                <option>Photo Editing</option>
                <option>Graphic Design</option>
                <option>Motion Graphics</option>
                <option>Info Graphics</option>
                <option>Virtual Staging</option>
                <option>Matterport 3D</option>
                <option>Visual Effects</option>
                <option>Real Estate Video Editing</option>
                <option>Social Media Video Editing</option>
                <option>Travel Video Editing</option>
                <option>Drone Video Solutions</option>
                <option>Podcast Editing</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="cf-budget">Budget range</label>
              <select id="cf-budget" name="budget" value={formData.budget} onChange={handleChange}>
                <option>Under ₹10,000</option>
                <option>₹10,000 – ₹50,000</option>
                <option>₹50,000 – ₹1,50,000</option>
                <option>₹1,50,000+</option>
                <option>Not sure yet</option>
              </select>
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="cf-message">Project details</label>
            <textarea
              id="cf-message"
              name="message"
              required
              placeholder="Tell us about your footage, timeline, and what you need delivered."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="form-submit">Send project brief</button>
          <p className="form-note">Sending opens your email client, addressed to contact@visualfry.com.</p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
