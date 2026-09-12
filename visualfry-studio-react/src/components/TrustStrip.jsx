import React from 'react';

const TrustStrip = () => {
  const items = [
    { title: "Every budget covered", text: "Hourly or project-based pricing that scales with you." },
    { title: "Fast turnarounds", text: "The right team starts working within minutes, not days." },
    { title: "Protected payments", text: "Funds release only once your project is complete." },
    { title: "24/7 support", text: "A team on call around the clock, wherever you are." },
  ];

  return (
    <div className="trust">
      <div className="wrap">
        {items.map((item, idx) => (
          <div key={idx}>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustStrip;
