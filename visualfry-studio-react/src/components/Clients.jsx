import React from 'react';

const CLIENTS = [
  "Client Name One", "Client Name Two", "Client Name Three",
  "Client Name Four", "Client Name Five", "Client Name Six"
];

const Clients = () => {
  return (
    <section className="clients">
      <div className="wrap">
        <div className="section-head reveal" style={{ marginBottom: 0 }}>
          <span className="eyebrow">Trusted by</span>
          <h2 style={{ fontSize: 'clamp(24px,3vw,32px)', marginTop: '14px' }}>Brands we've worked alongside</h2>
        </div>
      </div>
      <div className="marquee reveal" style={{ marginTop: '34px' }}>
        <div className="marquee-track">
          {CLIENTS.map((name, idx) => (
            <span key={idx} className="client-logo">{name}</span>
          ))}
          {/* duplicated for seamless loop */}
          {CLIENTS.map((name, idx) => (
            <span key={`dup-${idx}`} className="client-logo" aria-hidden="true">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
