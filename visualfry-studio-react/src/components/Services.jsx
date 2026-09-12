import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA, ICON_MAP } from '../data/services';

const Services = () => {
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">What we do</span>
          <h2>Thirteen crafts. One studio.</h2>
          <p>From a single logo to a full drone-shot property film, every service below is delivered by a specialist team and reviewed before it reaches you.</p>
        </div>

        {SERVICES_DATA.map((cat, idx) => (
          <div key={idx} className="cat-block reveal">
            <div className="cat-label">{cat.category}</div>
            <div className="service-grid">
              {cat.services.map((service, sIdx) => {
                const IconComponent = ICON_MAP[service.icon];
                return (
                  <Link to={`/services/${service.id}`} className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <span className="num">{service.num}</span>
                    {IconComponent && <IconComponent size={24} style={{ display: 'block', marginBottom: '14px', color: 'var(--violet)' }} />}
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
