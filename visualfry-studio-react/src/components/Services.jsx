import React from 'react';
import {
  Film, Clapperboard, Sparkles, Plane, Image, Palette,
  BarChart3, Home, Armchair, Box, Smartphone, Globe, Mic
} from 'lucide-react';

const ICON_MAP = {
  film: Film,
  clapperboard: Clapperboard,
  sparkles: Sparkles,
  plane: Plane,
  image: Image,
  palette: Palette,
  'bar-chart-3': BarChart3,
  home: Home,
  armchair: Armchair,
  box: Box,
  smartphone: Smartphone,
  globe: Globe,
  mic: Mic,
};

const SERVICES_DATA = [
  {
    category: "Motion & Film",
    services: [
      { num: "01", title: "Video Editing", desc: "The craft that turns raw footage into something that actually moves people.", icon: "film" },
      { num: "02", title: "Motion Graphics", desc: "Your ideas, animated into graphics with a professional voice behind them.", icon: "clapperboard" },
      { num: "03", title: "Visual Effects", desc: "If you can dream the shot, our team can build it, frame by frame.", icon: "sparkles" },
      { num: "04", title: "Drone Video Solutions", desc: "Sky-high footage, professionally edited and color graded for impact.", icon: "plane" },
    ]
  },
  {
    category: "Photography & Design",
    services: [
      { num: "05", title: "Photo Editing", desc: "The shutter is only step one — the edit is where the image is really made.", icon: "image" },
      { num: "06", title: "Graphic Design", desc: "Design isn't what you see, it's what you make everyone else see.", icon: "palette" },
      { num: "07", title: "Info Graphics", desc: "Data that reads like a story — because people feel what they can see.", icon: "bar-chart-3" },
    ]
  },
  {
    category: "Real Estate & Spaces",
    services: [
      { num: "08", title: "Real Estate Video Editing", desc: "Polished property films built to move listings faster.", icon: "home" },
      { num: "09", title: "Virtual Staging", desc: "Buyers can't picture what isn't there — we furnish empty rooms virtually.", icon: "armchair" },
      { num: "10", title: "Matterport 3D", desc: "Turn any property into an interactive, walkable 3D space.", icon: "box" },
    ]
  },
  {
    category: "Content & Social",
    services: [
      { num: "11", title: "Social Media Video Editing", desc: "Scroll-stopping edits built to grow followers and engagement.", icon: "smartphone" },
      { num: "12", title: "Travel Video Editing", desc: "Your best adventures, cut together with a cinematic touch.", icon: "globe" },
      { num: "13", title: "Podcast Editing", desc: "Clean, noise-free audio so the right words land at the right time.", icon: "mic" },
    ]
  }
];

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
                  <div key={sIdx} className="service-card">
                    <span className="num">{service.num}</span>
                    {IconComponent && <IconComponent size={24} style={{ display: 'block', marginBottom: '14px', color: 'var(--violet)' }} />}
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
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
