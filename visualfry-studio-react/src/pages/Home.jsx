import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import FullWidthVideo from '../components/FullWidthVideo';
import Services from '../components/Services';
import Work from '../components/Work';
import Clients from '../components/Clients';
import About from '../components/About';
import Process from '../components/Process';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <FullWidthVideo />
      <Services />
      <Work />
      <Clients />
      <About />
      <Process />
      <CTA />
      <ContactForm />
    </main>
  );
};

export default Home;
