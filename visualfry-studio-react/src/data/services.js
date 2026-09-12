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
      {
        id: "video-editing",
        num: "01",
        title: "Video Editing",
        desc: "The craft that turns raw footage into something that actually moves people.",
        icon: "film",
        content: "Professional video editing is more than just cutting clips; it's about storytelling, pacing, and emotional resonance. At Visualfry Studio, we specialize in cinematic post-production, seamless transitions, and high-impact storytelling. Whether it's a commercial, a brand documentary, or a corporate presentation, we optimize your footage for engagement and conversion. Our process includes advanced color grading, sound design, and rhythmic editing to ensure your message lands perfectly with your target audience."
      },
      {
        id: "motion-graphics",
        num: "02",
        title: "Motion Graphics",
        desc: "Your ideas, animated into graphics with a professional voice behind them.",
        icon: "clapperboard",
        content: "Motion graphics bridge the gap between static design and cinema. We create high-end 2D and 3D animations that simplify complex ideas and make them visually stunning. From explainer videos and logo animations to dynamic social media assets, we bring your brand to life with fluid movement and bold typography. Our motion design services are designed to stop the scroll and leave a lasting impression on your viewers."
      },
      {
        id: "visual-effects",
        num: "03",
        title: "Visual Effects",
        desc: "If you can dream the shot, our team can build it, frame by frame.",
        icon: "sparkles",
        content: "VFX allows you to transcend the limits of reality. We provide a full suite of visual effects services, including seamless compositing, CGI integration, and green-screen removal. Whether you need to create an impossible environment or add subtle cinematic enhancements, our frame-by-frame precision ensures a photorealistic result. We help brands create 'impossible' visuals that capture attention and elevate production value."
      },
      {
        id: "drone-video",
        num: "04",
        title: "Drone Video Solutions",
        desc: "Sky-high footage, professionally edited and color graded for impact.",
        icon: "plane",
        content: "Elevate your perspective with our professional drone cinematography. We provide stunning 4K aerial footage that adds a sense of scale and grandeur to any project. From sweeping landscapes and urban architecture to event coverage and real estate showcases, our certified pilots capture the perfect angle. Every shot is professionally color-graded to ensure a consistent, cinematic look that emphasizes the beauty and scope of your location."
      },
    ]
  },
  {
    category: "Photography & Design",
    services: [
      {
        id: "photo-editing",
        num: "05",
        title: "Photo Editing",
        desc: "The shutter is only step one — the edit is where the image is really made.",
        icon: "image",
        content: "Post-processing is where a good photo becomes a great one. We offer expert high-end retouching, advanced color correction, and creative manipulation. Whether it's product photography for e-commerce or architectural shots for a portfolio, we ensure clarity, mood, and perfection. Our editing process removes distractions and enhances lighting to create a polished, professional image that aligns with your brand identity."
      },
      {
        id: "graphic-design",
        num: "06",
        title: "Graphic Design",
        desc: "Design isn't what you see, it's what you make everyone else see.",
        icon: "palette",
        content: "Visual identity is the silent ambassador of your brand. Our graphic design services focus on creating a cohesive and compelling visual language. From iconic logo design and brand guidelines to marketing brochures and digital assets, we blend strategy with creativity. We don't just make things look 'pretty'—we design for communication, ensuring your brand's values are instantly recognizable and professional."
      },
      {
        id: "info-graphics",
        num: "07",
        title: "Info Graphics",
        desc: "Data that reads like a story — because people feel what they can see.",
        icon: "bar-chart-3",
        content: "In an age of information overload, clarity is power. Our infographic services transform complex data, statistics, and processes into intuitive visual stories. We combine data analysis with graphic design to make information accessible and shareable. Perfect for corporate reports, educational content, and social media, our infographics ensure your audience understands the 'why' and the 'how' of your data at a single glance."
      },
    ]
  },
  {
    category: "Real Estate & Spaces",
    services: [
      {
        id: "real-estate-editing",
        num: "08",
        title: "Real Estate Video Editing",
        desc: "Polished property films built to move listings faster.",
        icon: "home",
        content: "Real estate is about emotion and aspiration. We create cinematic property tours that emphasize flow, luxury, and space. By using strategic cuts and smooth transitions, we guide potential buyers through a property in a way that feels natural and inviting. Our editing focuses on high-conversion hooks and polished finishes, helping agents and developers sell listings faster and for higher values."
      },
      {
        id: "virtual-staging",
        num: "09",
        title: "Virtual Staging",
        desc: "Buyers can't picture what isn't there — we furnish empty rooms virtually.",
        icon: "armchair",
        content: "Virtual staging is the most cost-effective way to increase the appeal of an empty property. We use high-end 3D rendering to place modern, photorealistic furniture and decor into your property photos. By showing the full potential of a room, we help buyers overcome the 'empty room' hurdle and visualize themselves living in the space, significantly increasing engagement on listing sites."
      },
      {
        id: "matterport-3d",
        num: "10",
        title: "Matterport 3D",
        desc: "Turn any property into an interactive, walkable 3D space.",
        icon: "box",
        content: "Experience the future of property viewing with Matterport 3D tours. We create a complete, millimeter-accurate digital twin of your space, allowing users to walk through the property from anywhere in the world. This immersive experience builds trust, reduces unnecessary site visits, and provides a comprehensive understanding of the layout. It's the gold standard for high-end real estate and commercial spaces."
      },
    ]
  },
  {
    category: "Content & Social",
    services: [
      {
        id: "social-media-editing",
        num: "11",
        title: "Social Media Video Editing",
        desc: "Scroll-stopping edits built to grow followers and engagement.",
        icon: "smartphone",
        content: "The digital attention span is shorter than ever. We specialize in 'scroll-stopping' content optimized for TikTok, Instagram Reels, and YouTube Shorts. By using fast-paced editing, dynamic captions, and trending audio, we maximize retention and engagement. We help creators and brands turn raw clips into viral assets that grow followers and drive traffic to their main platforms."
      },
      {
        id: "travel-editing",
        num: "12",
        title: "Travel Video Editing",
        desc: "Your best adventures, cut together with a cinematic touch.",
        icon: "globe",
        content: "Travel is about the feeling of a place. We turn raw vacation or promotional travel footage into cinematic journeys. Our focus is on atmosphere, color grading that reflects the locale, and music synchronization that evokes emotion. Whether it's a personal travelogue or a tourism board commercial, we create a visual experience that inspires wanderlust and captures the spirit of adventure."
      },
      {
        id: "podcast-editing",
        num: "13",
        title: "Podcast Editing",
        desc: "Clean, noise-free audio so the right words land at the right time.",
        icon: "mic",
        content: "Great content can be ruined by poor audio. We provide professional podcast post-production, including noise reduction, filler-word removal, and leveling. We ensure your voice sounds crisp, professional, and consistent. From basic cleanup to full episode structuring and intro/outro integration, we handle the technical side so you can focus on the conversation."
      },
    ]
  }
];
