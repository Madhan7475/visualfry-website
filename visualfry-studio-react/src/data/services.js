import {
  Film, Clapperboard, Sparkles, Plane, Image, Palette,
  BarChart3, Home, Armchair, Box, Smartphone, Globe, Mic
} from 'lucide-react';

export const ICON_MAP = {
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

export const SERVICES_DATA = [
  {
    category: "Motion & Film",
    services: [
      { id: "video-editing", num: "01", title: "Video Editing", desc: "The craft that turns raw footage into something that actually moves people.", icon: "film", content: "We provide industry-standard video editing that focuses on pacing, storytelling, and emotional impact. From rough cuts to final polish, we ensure your message is delivered clearly." },
      { id: "motion-graphics", num: "02", title: "Motion Graphics", desc: "Your ideas, animated into graphics with a professional voice behind them.", icon: "clapperboard", content: "Elevate your brand with high-end 2D and 3D animations. We specialize in explainer videos, logo animations, and dynamic social content." },
      { id: "visual-effects", num: "03", title: "Visual Effects", desc: "If you can dream the shot, our team can build it, frame by frame.", icon: "sparkles", content: "From seamless compositing to complex CGI, our VFX workflow adds a layer of cinematic magic to any production." },
      { id: "drone-video", num: "04", title: "Drone Video Solutions", desc: "Sky-high footage, professionally edited and color graded for impact.", icon: "plane", content: "Capture a new perspective with our certified drone pilots. We provide 4K aerial cinematography for real estate, events, and commercials." },
    ]
  },
  {
    category: "Photography & Design",
    services: [
      { id: "photo-editing", num: "05", title: "Photo Editing", desc: "The shutter is only step one — the edit is where the image is really made.", icon: "image", content: "Advanced color grading, retouching, and manipulation to make your images stand out. We ensure every pixel serves a purpose." },
      { id: "graphic-design", num: "06", title: "Graphic Design", desc: "Design isn't what you see, it's what you make everyone else see.", icon: "palette", content: "Visual identities that last. We create logos, brand guidelines, and marketing materials that communicate your brand's essence." },
      { id: "info-graphics", num: "07", title: "Info Graphics", desc: "Data that reads like a story — because people feel what they can see.", icon: "bar-chart-3", content: "Transform complex data into intuitive visual stories. We make information accessible and engaging through strategic design." },
    ]
  },
  {
    category: "Real Estate & Spaces",
    services: [
      { id: "real-estate-editing", num: "08", title: "Real Estate Video Editing", desc: "Polished property films built to move listings faster.", icon: "home", content: "High-conversion property tours. We focus on flow, lighting, and highlight reels that make buyers fall in love with the space." },
      { id: "virtual-staging", num: "09", title: "Virtual Staging", desc: "Buyers can't picture what isn't there — we furnish empty rooms virtually.", icon: "armchair", content: "Cost-effective room furnishing. We add modern, photorealistic furniture to empty spaces to help buyers visualize the potential." },
      { id: "matterport-3d", num: "10", title: "Matterport 3D", desc: "Turn any property into an interactive, walkable 3D space.", icon: "box", content: "The gold standard in virtual tours. We create a complete digital twin of your property for a truly immersive experience." },
    ]
  },
  {
    category: "Content & Social",
    services: [
      { id: "social-media-editing", num: "11", title: "Social Media Video Editing", desc: "Scroll-stopping edits built to grow followers and engagement.", icon: "smartphone", content: "Optimized for TikTok, Reels, and Shorts. We use fast-paced cuts, captions, and trends to keep your audience watching." },
      { id: "travel-editing", num: "12", title: "Travel Video Editing", desc: "Your best adventures, cut together with a cinematic touch.", icon: "globe", content: "Turning raw travel footage into cinematic journeys. We focus on atmosphere, music synchronization, and storytelling." },
      { id: "podcast-editing", num: "13", title: "Podcast Editing", desc: "Clean, noise-free audio so the right words land at the right time.", icon: "mic", content: "Professional audio cleanup and editing. We remove fillers, noise, and dead air to create a polished listening experience." },
    ]
  }
];
