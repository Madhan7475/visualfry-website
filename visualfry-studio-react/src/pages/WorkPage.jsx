import React from 'react';
import Work from '../components/Work';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';

const WorkPage = () => {
  return (
    <div className="page-wrapper">
      <Work />
      <CTA />
      <ContactForm />
    </div>
  );
};

export default WorkPage;
