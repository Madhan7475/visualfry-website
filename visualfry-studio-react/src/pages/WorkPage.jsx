import React from 'react';
import SEO from '../components/SEO';
import Work from '../components/Work';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';

const WorkPage = () => {
  return (
    <div className="page-wrapper">
      <SEO
        title="Portfolio | Our Creative Work"
        description="Explore the Visualfry Studio portfolio. From high-end cinematic films to precise digital designs, see how we transform raw materials into visual stories."
        keywords="portfolio, creative work, video editing examples, motion graphics portfolio, Visualfry Studio work"
        canonicalUrl="https://visualfry.com/work"
      />
      <Work />
      <CTA />
      <ContactForm />
    </div>
  );
};

export default WorkPage;
