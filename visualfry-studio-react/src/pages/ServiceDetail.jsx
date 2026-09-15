import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES_DATA, ICON_MAP } from '../data/services';
import ContactForm from '../components/ContactForm';

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
        <div className="service-banner reveal" style={{
          width: '100%',
          marginBottom: '60px',
          borderRadius: '24px',
          overflow: 'hidden',
          border: '1px solid var(--border)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
        }}>
          <img
            src="/banner.png"
            alt={service.title}
            style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '21/9', objectFit: 'cover' }}
          />
        </div>

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
          maxWidth: '800px',
          marginBottom: '60px'
        }}>
          <h2 style={{ marginBottom: '20px', color: 'var(--violet)' }}>About the Service</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.9 }}>{service.content}</p>
        </div>

        {/* Image Gallery Section */}
        <div className="gallery-section reveal" style={{ marginBottom: '60px' }}>
          <h2 style={{ marginBottom: '30px', fontSize: '2rem', color: 'var(--violet)' }}>Portfolio Gallery</h2>
          {service.gallery?.images && service.gallery.images.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              {service.gallery.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${service.title} sample ${idx + 1}`}
                  style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                />
              ))}
            </div>
          ) : (
            <div style={{
              padding: '40px',
              textAlign: 'center',
              borderRadius: '16px',
              border: '1px dashed rgba(255,255,255,0.2)',
              opacity: 0.5,
              fontSize: '1.1rem'
            }}>
              Portfolio items coming soon...
            </div>
          )}
        </div>

        {/* Video Gallery Section */}
        <div className="video-section reveal" style={{ marginBottom: '60px' }}>
          <h2 style={{ marginBottom: '30px', fontSize: '2rem', color: 'var(--violet)' }}>Featured Work</h2>
          {service.gallery?.videos && service.gallery.videos.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))',
              gap: '30px'
            }}>
              {service.gallery.videos.map((vid, idx) => (
                <div key={idx} style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <iframe
                    src={vid}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          ) : (
            <div style={{
              padding: '40px',
              textAlign: 'center',
              borderRadius: '16px',
              border: '1px dashed rgba(255,255,255,0.2)',
              opacity: 0.5,
              fontSize: '1.1rem'
            }}>
              Featured videos coming soon...
            </div>
          )}
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default ServiceDetail;
