import React from 'react';
import SEO from '../components/SEO';
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Visualfry Studio",
    "image": "https://visualfry.com/logo.png",
    "url": "https://visualfry.com",
    "telephone": "Contact via website",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "description": "Premium creative studio specializing in high-end video editing, motion graphics, VFX, and digital growth strategies.",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <main>
      <SEO
        title="Premium Creative Studio | Video Editing & Motion Design"
        description="Visualfry Studio is a high-end creative agency specializing in cinematic video editing, 3D motion graphics, and digital growth for brands that demand perfection."
        keywords="video editing, motion graphics, VFX, creative studio, digital marketing, web development, Visualfry Studio"
      />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
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
