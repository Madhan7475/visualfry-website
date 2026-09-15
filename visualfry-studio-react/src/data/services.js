import {
  Film, Clapperboard, Sparkles, Plane, Image, Palette,
  BarChart3, Home, Armchair, Box, Smartphone, Globe, Mic,
  Layout, Laptop, Layers, ShoppingBag, Search, Send, Server, Mail
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
  layout: Layout,
  laptop: Laptop,
  layers: Layers,
  'shopping-bag': ShoppingBag,
  search: Search,
  send: Send,
  server: Server,
  mail: Mail,
};

export const SERVICES_DATA = [
  {
    category: "Web & App Development",
    services: [
      {
        id: "web-development",
        num: "01",
        title: "Web Development",
        desc: "High-performance, scalable websites that turn visitors into loyal customers.",
        icon: "layout",
        content: "We build modern, responsive websites that blend cutting-edge technology with intuitive user experiences. From enterprise-grade platforms to sleek landing pages, our development process focuses on speed, SEO, and conversion. We use a contemporary tech stack to ensure your site is secure, scalable, and lightning-fast across all devices, providing a seamless journey for your users.",
        gallery: { images: [], videos: [] }
      },
      {
        id: "app-development",
        num: "02",
        title: "App Development",
        desc: "Intuitive mobile and web applications built for scale and performance.",
        icon: "laptop",
        content: "From conceptualization to deployment, we create applications that solve real-world problems. We specialize in cross-platform development, ensuring your app delivers a native-like experience on both iOS and Android. Our focus is on clean architecture, robust APIs, and user-centric design, ensuring your application can grow as your user base expands.",
        gallery: { images: [], videos: [] }
      },
      {
        id: "ui-ux-design",
        num: "03",
        title: "UI/UX Design",
        desc: "User-first design systems that prioritize clarity, accessibility, and aesthetics.",
        icon: "layers",
        content: "Great software is invisible—it just works. Our UI/UX design process starts with deep user research and wireframing to map out the most efficient user journeys. We then layer on a polished visual skin that aligns with your brand identity. By prioritizing accessibility and intuitive navigation, we reduce friction and increase user satisfaction across every digital touchpoint.",
        gallery: { images: [], videos: [] }
      },
      {
        id: "ecommerce-development",
        num: "04",
        title: "E-Commerce Development",
        desc: "High-converting online stores designed to maximize sales and customer retention.",
        icon: "shopping-bag",
        content: "Selling online requires more than just a catalog; it requires a frictionless shopping experience. We build secure, scalable e-commerce platforms that optimize every step of the buyer's journey, from product discovery to checkout. With integrated payment gateways, inventory management, and mobile-first design, we help you scale your digital storefront and increase your average order value.",
        gallery: { images: [], videos: [] }
      },
    ]
  },
  {
    category: "Motion & Film",
    services: [
      {
        id: "video-editing",
        num: "05",
        title: "Video Editing",
        banner: "/videoediting.png",
        desc: "The craft that turns raw footage into something that actually moves people.",
        icon: "film",
        content: "Professional video editing is more than just cutting clips; it's about storytelling, pacing, and emotional resonance. At Visualfry Studio, we specialize in cinematic post-production, seamless transitions, and high-impact storytelling. Whether it's a commercial, a brand documentary, or a corporate presentation, we optimize your footage for engagement and conversion. Our process includes advanced color grading, sound design, and rhythmic editing to ensure your message lands perfectly with your target audience.",
        gallery: {
          images: ["/assets/video-editing-1.jpg", "/assets/video-editing-2.jpg"],
          videos: ["https://www.youtube.com/embed/example1", "https://www.youtube.com/embed/example2"]
        }
      },
      {
        id: "motion-graphics",
        num: "06",
        title: "Motion Graphics",
        banner: "/motiongraphics.png",
        desc: "Your ideas, animated into graphics with a professional voice behind them.",
        icon: "clapperboard",
        content: "Motion graphics bridge the gap between static design and cinema. We create high-end 2D and 3D animations that simplify complex ideas and make them visually stunning. From explainer videos and logo animations to dynamic social media assets, we bring your brand to life with fluid movement and bold typography. Our motion design services are designed to stop the scroll and leave a lasting impression on your viewers.",
        gallery: { images: [], videos: [] }
      },
      {
        id: "visual-effects",
        num: "07",
        title: "Visual Effects",
        banner: "/visualeffects.png",
        desc: "If you can dream the shot, our team can build it, frame by frame.",
        icon: "sparkles",
        content: "VFX allows you to transcend the limits of reality. We provide a full suite of visual effects services, including seamless compositing, CGI integration, and green-screen removal. Whether you need to create an impossible environment or add subtle cinematic enhancements, our frame-by-frame precision ensures a photorealistic result. We help brands create 'impossible' visuals that capture attention and elevate production value.",
        gallery: { images: [], videos: [] }
      },
      {
        id: "drone-video",
        num: "08",
        title: "Drone Video Solutions",
        desc: "Sky-high footage, professionally edited and color graded for impact.",
        icon: "plane",
        content: "Elevate your perspective with our professional drone cinematography. We provide stunning 4K aerial footage that adds a sense of scale and grandeur to any project. From sweeping landscapes and urban architecture to event coverage and real estate showcases, our certified pilots capture the perfect angle. Every shot is professionally color-graded to ensure a consistent, cinematic look that emphasizes the beauty and scope of your location.",
        gallery: { images: [], videos: [] }
      },
    ]
  },
  {
    category: "Photography & Design",
    services: [
      {
        id: "photo-editing",
        num: "09",
        title: "Photo Editing",
        desc: "The shutter is only step one — the edit is where the image is really made.",
        icon: "image",
        content: "Post-processing is where a good photo becomes a great one. We offer expert high-end retouching, advanced color correction, and creative manipulation. Whether it's product photography for e-commerce or architectural shots for a portfolio, we ensure clarity, mood, and perfection. Our editing process removes distractions and enhances lighting to create a polished, professional image that aligns with your brand identity.",
        gallery: { images: [], videos: [] }
      },
      {
        id: "graphic-design",
        num: "10",
        title: "Graphic Design",
        desc: "Design isn't what you see, it's what you make everyone else see.",
        icon: "palette",
        content: "Visual identity is the silent ambassador of your brand. Our graphic design services focus on creating a cohesive and compelling visual language. From iconic logo design and brand guidelines to marketing brochures and digital assets, we blend strategy with creativity. We don't just make things look 'pretty'—we design for communication, ensuring your brand's values are instantly recognizable and professional.",
        gallery: { images: [], videos: [] }
      },
      {
        id: "info-graphics",
        num: "11",
        title: "Info Graphics",
        desc: "Data that reads like a story — because people feel what they can see.",
        icon: "bar-chart-3",
        content: "In an age of information overload, clarity is power. Our infographic services transform complex data, statistics, and processes into intuitive visual stories. We combine data analysis with graphic design to make information accessible and shareable. Perfect for corporate reports, educational content, and social media, our infographics ensure your audience understands the 'why' and the 'how' of your data at a single glance.",
        gallery: { images: [], videos: [] }
      },
    ]
  },
  {
    category: "Digital Growth",
    services: [
      {
        id: "seo",
        num: "12",
        title: "Search Engine Optimisation",
        desc: "Dominating search results to bring high-intent traffic to your digital doors.",
        icon: "search",
        content: "Visibility is the currency of the web. Our SEO services go beyond keywords—we focus on technical optimization, high-authority backlinking, and content strategy that search engines love. By improving your organic ranking, we ensure that when your potential customers search for a solution, your brand is the first one they find. We provide transparent reporting and continuous optimization to keep you ahead of the competition.",
        gallery: { images: [], videos: [] }
      },
      {
        id: "whatsapp-marketing",
        num: "13",
        title: "Bulk WhatsApp Marketing",
        desc: "Direct-to-customer engagement that cuts through the noise with 98% open rates.",
        icon: "send",
        content: "WhatsApp is where your customers live. We help you leverage this direct channel for high-conversion marketing campaigns, automated customer support, and personalized outreach. From bulk broadcasting to interactive chatbots, we ensure your communication is non-intrusive yet impactful, driving immediate action and fostering deeper customer relationships.",
        gallery: { images: [], videos: [] }
      },
      {
        id: "sms-marketing",
        num: "14",
        title: "Bulk SMS Marketing",
        desc: "Instant, high-reach communication for time-sensitive offers and alerts.",
        icon: "send",
        content: "SMS remains the fastest way to reach an audience. We provide scalable bulk SMS solutions for promotional offers, appointment reminders, and critical updates. Our delivery systems are optimized for high throughput and reliability, ensuring your message reaches the target device instantly, regardless of internet connectivity.",
        gallery: { images: [], videos: [] }
      },
    ]
  },
  {
    category: "IT Infrastructure",
    services: [
      {
        id: "hosting-vps",
        num: "15",
        title: "Hosting & VPS Solutions",
        desc: "Rock-solid stability and speed for your digital assets with Linux & VPS experts.",
        icon: "server",
        content: "A beautiful website is useless if it's slow or offline. We provide high-performance hosting and VPS management tailored to your specific traffic needs. From Linux server hardening to automated backups and load balancing, we ensure your infrastructure is a fortress. Our proactive monitoring means we solve bottlenecks before they affect your users, guaranteeing 99.9% uptime.",
        gallery: { images: [], videos: [] }
      },
      {
        id: "business-email",
        num: "16",
        title: "Business Email Solutions",
        desc: "Professional communication powered by G Suite, Zoho, and Microsoft 365.",
        icon: "mail",
        content: "Your email address is your digital handshake. We handle the complex setup and migration of professional business email suites. Whether you prefer the ecosystem of Google Workspace, the flexibility of Zoho, or the corporate power of Microsoft 365, we ensure seamless integration, secure authentication, and zero downtime during the transition.",
        gallery: { images: [], videos: [] }
      },
    ]
  },
  {
    category: "Content & Social",
    services: [
      {
        id: "social-media-editing",
        num: "17",
        title: "Social Media Video Editing",
        desc: "Scroll-stopping edits built to grow followers and engagement.",
        icon: "smartphone",
        content: "The digital attention span is shorter than ever. We specialize in 'scroll-stopping' content optimized for TikTok, Instagram Reels, and YouTube Shorts. By using fast-paced editing, dynamic captions, and trending audio, we maximize retention and engagement. We help creators and brands turn raw clips into viral assets that grow followers and drive traffic to their main platforms.",
        gallery: { images: [], videos: [] }
      },
      {
        id: "travel-editing",
        num: "18",
        title: "Travel Video Editing",
        desc: "Your best adventures, cut together with a cinematic touch.",
        icon: "globe",
        content: "Travel is about the feeling of a place. We turn raw vacation or promotional travel footage into cinematic journeys. Our focus is on atmosphere, color grading that reflects the locale, and music synchronization that evokes emotion. Whether it's a personal travelogue or a tourism board commercial, we create a visual experience that inspires wanderlust and captures the spirit of adventure.",
        gallery: { images: [], videos: [] }
      },
      {
        id: "podcast-editing",
        num: "19",
        title: "Podcast Editing",
        desc: "Clean, noise-free audio so the right words land at the right time.",
        icon: "mic",
        content: "Great content can be ruined by poor audio. We provide professional podcast post-production, including noise reduction, filler-word removal, and leveling. We ensure your voice sounds crisp, professional, and consistent. From basic cleanup to full episode structuring and intro/outro integration, we handle the technical side so you can focus on the conversation.",
        gallery: { images: [], videos: [] }
      },
    ]
  },
  {
    category: "Real Estate & Spaces",
    services: [
      {
        id: "real-estate-editing",
        num: "20",
        title: "Real Estate Video Editing",
        desc: "Polished property films built to move listings faster.",
        icon: "home",
        content: "Real estate is about emotion and aspiration. We create cinematic property tours that emphasize flow, luxury, and space. By using strategic cuts and smooth transitions, we guide potential buyers through a property in a way that feels natural and inviting. Our editing focuses on high-conversion hooks and polished finishes, helping agents and developers sell listings faster and for higher values.",
        gallery: { images: [], videos: [] }
      },
      {
        id: "virtual-staging",
        num: "21",
        title: "Virtual Staging",
        desc: "Buyers can't picture what isn't there — we furnish empty rooms virtually.",
        icon: "armchair",
        content: "Virtual staging is the most cost-effective way to increase the appeal of an empty property. We use high-end 3D rendering to place modern, photorealistic furniture and decor into your property photos. By showing the full potential of a room, we help buyers overcome the 'empty room' hurdle and visualize themselves living in the space, significantly increasing engagement on listing sites.",
        gallery: { images: [], videos: [] }
      },
      {
        id: "matterport-3d",
        num: "22",
        title: "Matterport 3D",
        desc: "Turn any property into an interactive, walkable 3D space.",
        icon: "box",
        content: "Experience the future of property viewing with Matterport 3D tours. We create a complete, millimeter-accurate digital twin of your space, allowing users to walk through the property from anywhere in the world. This immersive experience builds trust, reduces unnecessary site visits, and provides a comprehensive understanding of the layout. It's the gold standard for high-end real estate and commercial spaces.",
        gallery: { images: [], videos: [] }
      },
    ]
  }
];
