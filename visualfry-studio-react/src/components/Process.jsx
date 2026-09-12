import React from 'react';

const PROCESS_STEPS = [
  {
    step: "Step 01",
    title: "Tell us the brief",
    desc: "Share your footage, brand assets, or a rough idea — we scope the right service and team for it."
  },
  {
    step: "Step 02",
    title: "We create, you review",
    desc: "A dedicated specialist works your project with drafts along the way, not just a final drop."
  },
  {
    step: "Step 03",
    title: "Approve and launch",
    desc: "Payment releases only once you're happy — then your asset is ready to publish."
  }
];

const Process = () => {
  return (
    <section id="process">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">How it works</span>
          <h2>Three steps from brief to delivery.</h2>
        </div>
        <div className="process-grid reveal">
          {PROCESS_STEPS.map((item, idx) => (
            <div key={idx} className="process-card">
              <div className="step">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
