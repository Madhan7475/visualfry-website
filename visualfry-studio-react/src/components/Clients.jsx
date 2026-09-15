import React from 'react';

const CLIENTS = [
  { name: "Client One", logo: "https://placehold.co/200x80?text=Client+One" },
  { name: "Client Two", logo: "https://placehold.co/200x80?text=Client+Two" },
  { name: "Client Three", logo: "https://placehold.co/200x80?text=Client+Three" },
  { name: "Client Four", logo: "https://placehold.co/200x80?text=Client+Four" },
  { name: "Client Five", logo: "https://placehold.co/200x80?text=Client+Five" },
  { name: "Client Six", logo: "https://placehold.co/200x80?text=Client+Six" }
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
          {CLIENTS.map((client, idx) => (
            <img key={idx} src={client.logo} alt={client.name} className="client-logo" />
          ))}
          {/* duplicated for seamless loop */}
          {CLIENTS.map((client, idx) => (
            <img key={`dup-${idx}`} src={client.logo} alt={client.name} className="client-logo" aria-hidden="true" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
