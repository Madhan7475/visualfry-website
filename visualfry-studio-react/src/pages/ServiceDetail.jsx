import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES_DATA, ICON_MAP } from '../data/services';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  // Find the service in the nested data structure
  let service = null;
  for (const cat of SERVICES_DATA) {
    const found = cat.services.find(s => s.id === serviceId);
    if (found) {
      service = found;
      break;
    }
  }

  if (!service) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Service Not Found</h1>
        <Link to="/" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '20px' }}>
          Return Home
        </Link>
      </div>
    );
  }

  const IconComponent = ICON_MAP[service.icon];

  return (
    <div className="page-layout" style={{ padding: '120px 20px 60px' }}>
      <div className="wrap">
        <Link to="/" style={{ textDecoration: 'none', color: 'var(--violet)', fontSize: '14px', marginBottom: '20px', display: 'block' }}>
          ← Back to Home
        </Link>

        <div className="service-detail-header reveal" style={{ marginBottom: '40px' }}>
          {IconComponent && <IconComponent size={48} style={{ color: 'var(--violet)', marginBottom: '20px' }} />}
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', lineHeight: '1.1', marginBottom: '20px' }}>{service.title}</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '600px', lineHeight: '1.6' }}>{service.desc}</p>
        </div>

        <div className="service-content reveal" style={{
          backgroundColor: 'rgba(255,255,255,0.03)',
          padding: '40px',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.1)',
          maxWidth: '800px'
        }}>
          <h2 style={{ marginBottom: '20px', color: 'var(--violet)' }}>About the Service</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.9 }}>{service.content}</p>

          <div style={{ marginTop: '40px' }}>
            <Link to="/#contact" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Get a Quote for {service.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
