export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  accent: 'cyan' | 'orange' | 'yellow';
  description: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'weddings' | 'pre-weddings' | 'films' | 'portraits' | 'events';
  categoryLabel: string;
  image: string;
  location: string;
  year: string;
  aspect: 'landscape' | 'portrait' | 'wide';
  story: string;
  specs: string;
}

export interface EquipmentItem {
  id: string;
  category: string;
  name: string;
  brand: string;
  model: string;
  image?: string;
  specs: string;
  purpose: string;
  type: string;
  accent: string;
}

export interface TestimonialReview {
  id: string;
  stars: number;
  names: string;
  event: string;
  date: string;
  quote: string;
  verified: boolean;
}

export const STUDIO_INFO = {
  name: "CHANDRALOK STUDIO",
  hindiName: "चन्द्रलोक फोटो स्टूडियो",
  established: 1981,
  tagline: "Since 1981 — Capturing Moments. Creating Stories.",
  phone: "9997648550",
  phoneFormatted: "+91 99976 48550",
  whatsappNumber: "919997648550",
  instagramHandle: "@chandralokstudio.sirsaganj",
  instagramUrl: "https://www.instagram.com/chandralokstudio.sirsaganj/",
  youtubeName: "Chandralok Studio Sirsaganj",
  youtubeUrl: "https://www.youtube.com/@chandralokstudiosirsaganj",
  address: "Etawah Road, near Punjab National Bank",
  city: "Sirsaganj",
  region: "Uttar Pradesh",
  country: "India",
  fullAddress: "Sirsaganj, Etawah Road, near Punjab National Bank, Uttar Pradesh, India",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chandralok+Studio+Etawah+Road+Sirsaganj+Uttar+Pradesh",
  bio: "Estd. 1981 | Photographer & Filmmakers | Wedding | Pre-Wedding | Sirsaganj, Agra",
  instagramBioQuotes: "Estd. 1981 · Photographer & Filmmakers · Wedding | Pre-Wedding · DM us for more inquiries · Sirsaganj, Agra"
};

export const SOCIAL_CHANNELS = [
  {
    platform: "Instagram",
    handle: "@chandralokstudio.sirsaganj",
    description: "Daily royal wedding stories, bridal portraits & behind the scenes from Sirsaganj & Agra region.",
    action: "Follow On Instagram",
    url: "https://www.instagram.com/chandralokstudio.sirsaganj/",
    tag: "Primary Social Journal",
    accent: "from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"
  },
  {
    platform: "WhatsApp",
    handle: "+91 99976 48550",
    description: "Instant date availability check, wedding package quotations & direct chat with senior team.",
    action: "Chat On WhatsApp",
    url: "https://wa.me/919997648550?text=Hello%20Chandralok%20Studio%2C%20I%20would%20like%20to%20inquire%20regarding%20photography%20%26%20filmmaking%20services.",
    tag: "Instant Direct Inquiry",
    accent: "from-[#25D366] to-[#128C7E]"
  },
  {
    platform: "YouTube",
    handle: "Chandralok Studio Sirsaganj",
    description: "4K cinematic wedding teasers, grand royal highlight reels & full-length documentary films.",
    action: "Subscribe On YouTube",
    url: "https://www.youtube.com/@chandralokstudiosirsaganj",
    tag: "4K Cinema Showcase",
    accent: "from-[#FF0000] to-[#b30000]"
  },
  {
    platform: "Direct Call",
    handle: "+91 99976 48550",
    description: "Speak directly with our studio directors to schedule a private studio viewing in Sirsaganj.",
    action: "Call Studio Direct",
    url: "tel:9997648550",
    tag: "Studio Telephone",
    accent: "from-[#00e5ff] to-[#ff6b00]"
  }
];

export const INSTAGRAM_HIGHLIGHTS = [
  {
    title: "Bridal Elegance",
    image: "/src/assets/images/royal_bridal_portrait_1791898990033.jpg",
    caption: "The regal crimson bride documented with master studio softboxes."
  },
  {
    title: "Sangeet Sparkle",
    image: "/src/assets/images/sangeet_celebration_lights_1791898991004.jpg",
    caption: "Dancing under chandeliers and golden bokeh lights."
  },
  {
    title: "Sacred Varmala",
    image: "/src/assets/images/wedding_story_varmala_1791896401614.jpg",
    caption: "Joyous laughter under thousands of glowing diyas."
  },
  {
    title: "Sunset Romance",
    image: "/src/assets/images/prewedding_cinematic_1791896401895.jpg",
    caption: "Windswept royal pre-wedding frames in classical pavilions."
  }
];

export const STUDIO_STORY_STEPS = [
  { step: "CAMERA", label: "Optical Vision", desc: "Full-frame cinema sensors capturing raw light and human nuance." },
  { step: "LIGHT", label: "Sculpted Ambiance", desc: "Studio softboxes, off-camera flashes and golden-hour rim lights." },
  { step: "FRAME", label: "Artistic Geometry", desc: "Composing the couple within heritage architecture and emotional space." },
  { step: "MOMENT", label: "Unscripted Truth", desc: "Capturing genuine tears, nervous smiles, and sacred vows." },
  { step: "EMOTION", label: "Felt Connection", desc: "Documenting generational blessings and familial tenderness." },
  { step: "FILM", label: "4K Motion Poetry", desc: "Anamorphic pacing, multi-angle drones, and 32-bit acoustic depth." },
  { step: "MEMORY", label: "Eternal Heirloom", desc: "Handcrafted archival albums that outlive generations." },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "wedding-photography",
    number: "01",
    title: "Wedding Photography",
    subtitle: "Real emotions. Beautiful frames.",
    category: "Signature Coverage",
    accent: "cyan",
    description: "Candid emotional captures, traditional royal portraits, and authentic ritual documentation rendered with rich skin tones.",
    features: ["Candid & Traditional Coverage", "High-Resolution Master Retouching", "Custom Handcrafted Coffee Table Album", "Complete Raw & Processed Digital Archive"]
  },
  {
    id: "wedding-films",
    number: "02",
    title: "Wedding Films",
    subtitle: "Shot like a feature film.",
    category: "Cinematography",
    accent: "orange",
    description: "Multi-camera 4K cinematic storytelling capturing real vows, spontaneous laughter, and the acoustic richness of your celebration.",
    features: ["Cinematic Wedding Teaser (3-5 mins)", "Extended Royal Documentary Feature Film", "Multi-Angle Drone Aerial Perspectives", "Bespoke Sound Design & Color Grading"]
  },
  {
    id: "pre-wedding-photography",
    number: "03",
    title: "Pre-Wedding Photography",
    subtitle: "Editorial romance in heritage light.",
    category: "Editorial Shoots",
    accent: "yellow",
    description: "Romantic, conceptual editorial sessions tailored to your love story in heritage palaces, sunset landscapes, or architectural pavilions.",
    features: ["Curated Concept & Outfit Consultation", "Golden-Hour Cinematic Compositions", "Artistic Poster Prints for Reception Entry", "Full Resolution Digital Master Gallery"]
  },
  {
    id: "pre-wedding-films",
    number: "04",
    title: "Pre-Wedding Films",
    subtitle: "Your personal love story on screen.",
    category: "Motion Art",
    accent: "cyan",
    description: "Narrative short films with voiceovers, personal soundtracks, and cinematic motion tracking to premiere at your sangeet.",
    features: ["Custom Scripted Concept Narrative", "4K Ultra-HD 60fps Slow Motion", "Professional Cinema Lens Character", "Optimized Instagram Reels & Teasers"]
  },
  {
    id: "cinematic-videography",
    number: "05",
    title: "Cinematic Videography",
    subtitle: "Precision motion & color science.",
    category: "Film Production",
    accent: "orange",
    description: "Industry-grade prime lenses and stabilization systems bringing feature-film production values to private celebrations.",
    features: ["Gimbal & Crane Steady Motion", "High Dynamic Range Cinema Sensors", "Natural Tone Skin Preservation", "Custom Master Video Output Files"]
  },
  {
    id: "event-photography",
    number: "06",
    title: "Event Photography",
    subtitle: "Energy, rituals and festivities.",
    category: "Celebrations",
    accent: "yellow",
    description: "Comprehensive photographic coverage for Sangeet nights, Haldi celebrations, Ring ceremonies, anniversaries, and family milestones.",
    features: ["Unobtrusive Candid Photojournalism", "Dynamic Stage & Family Portraits", "Same-Day Teaser Photos for Social Sharing", "Organized Cloud Deliverable Links"]
  },
  {
    id: "event-videography",
    number: "07",
    title: "Event Videography",
    subtitle: "Dynamic highlight reels.",
    category: "Celebrations",
    accent: "cyan",
    description: "Vibrant, high-tempo highlight reels and full-length multi-angle recordings capturing the energy of your festivities.",
    features: ["Full Ceremony Multi-Mic Audio", "Crisp High-Definition Stage Coverage", "Energetic Highlight Reel (Dance & Music)", "Fast Turnaround Digital Delivery"]
  },
  {
    id: "couple-portraits",
    number: "08",
    title: "Couple Portraits",
    subtitle: "Fine-art intimate portraiture.",
    category: "Fine Art",
    accent: "orange",
    description: "Quiet, intimate portraiture focused on subtle connection, dramatic light manipulation, and classic editorial framing.",
    features: ["Studio or On-Location Environment", "Delicate Natural Lighting Design", "Museum-Grade Archival Fine Art Prints", "Timeless Monochrome & Color Formats"]
  },
  {
    id: "commercial-events",
    number: "09",
    title: "Commercial & Special Events",
    subtitle: "Brand, executive & grand galas.",
    category: "Special Projects",
    accent: "yellow",
    description: "Professional high-definition coverage for corporate galas, fashion portfolios, brand launches, and institutional milestones.",
    features: ["Commercial Grade Studio Lighting", "High-Resolution Image Delivery", "Rapid Post-Production Turnaround", "Commercial License Deliverables"]
  }
];

export const BRAND_CAMERAS: EquipmentItem[] = [
  {
    id: "cam-sony-fx3",
    category: "SONY CINEMA",
    name: "Sony FX3 / FX6 Full-Frame Cinema Line",
    brand: "Sony",
    model: "ILME-FX3 4K Cinema Camera",
    image: "/src/assets/images/camera_sony_fx3_cine_1791960491755.jpg",
    specs: "15+ Stops Dynamic Range · 4K 120fps · 10-Bit 4:2:2 All-Intra · S-Cinetone",
    purpose: "Flagship cinema body capturing dimly-lit mandap rituals, high-tempo sangeet dances, and cinematic slow-motion with cinema grade fidelity.",
    type: "Full-Frame Cinema Camera",
    accent: "#00e5ff"
  },
  {
    id: "cam-sony-a7s-rig",
    category: "SONY CINEMA",
    name: "Sony Alpha A7S III Carbon Cinema Cage Rig",
    brand: "Sony / Tilta",
    model: "Alpha A7S III + Tilta Top Handle & Matte Box",
    image: "/src/assets/images/sony_a7s_cine_rig_1791960673477.jpg",
    specs: "Dual Native ISO 800/12800 · G-Master 50mm f/1.2 Glass · Directional Shotgun Mic",
    purpose: "Heavy handheld cinema workhorse for energetic wedding processions, pheras, and candid couple cinematic interactions.",
    type: "Cinema Rigged Workhorse",
    accent: "#00e5ff"
  },
  {
    id: "cam-canon-cine",
    category: "CANON CINEMA",
    name: "Canon Cinema EOS C-Series & C70",
    brand: "Canon",
    model: "Cinema EOS C70 / C-Series 4K DGO",
    image: "/src/assets/images/camera_canon_r_cine_1791960492825.jpg",
    specs: "Dual Pixel CMOS AF II · DGO Sensor · Canon Log 2/3 · 16+ Stops Dynamic Range",
    purpose: "Celebrated for iconic warm, natural bridal skin tones and flawless color separation in Indian bridal silks and gold jewelry.",
    type: "Flagship Production Cinema",
    accent: "#ff6b00"
  },
  {
    id: "cam-canon-r5-portrait",
    category: "CANON CINEMA",
    name: "Canon Cinema Production & 8K Sensor Rig",
    brand: "Canon",
    model: "Cinema EOS System & Prime Cine Glass",
    image: "/src/assets/images/camera_canon_r_cine_1791960492825.jpg",
    specs: "45MP High-Resolution · 8K RAW · Dual Pixel Intelligent AF · Warm Color Science",
    purpose: "The definitive portrait master: renders royalty-grade bridal portraits with creamy out-of-focus background bokeh and pinpoint eye sharpness.",
    type: "Cinema Production Body",
    accent: "#ff6b00"
  },
  {
    id: "cam-fujifilm-gfx",
    category: "FUJIFILM SYSTEM",
    name: "Fujifilm GFX 100 II Large Format Medium Format",
    brand: "Fujifilm",
    model: "GFX 100 II 102MP Large Format Sensor",
    image: "/src/assets/images/camera_fujifilm_gfx_1791960492780.jpg",
    specs: "Medium Format 102MP Sensor · 16-Bit RAW · Film Simulation Profiles · Tactile Dials",
    purpose: "Delivers unmatched micro-contrast, organic film simulation grain, and magazine-cover bridal and groom royal portraiture.",
    type: "Medium Format Camera",
    accent: "#ffb703"
  },
  {
    id: "cam-fujifilm-tactile-retro",
    category: "FUJIFILM SYSTEM",
    name: "Fujifilm Large-Format Color Science Rig",
    brand: "Fujifilm",
    model: "GFX Cinema System · Color Simulation",
    image: "/src/assets/images/camera_fujifilm_gfx_1791960492780.jpg",
    specs: "40.2MP X-Trans CMOS 5 HR · Classic Chrome & Nostalgic Neg · Analog Film Grain",
    purpose: "Tactile, discreet documentary system for silent rituals, intimate family embraces, and timeless monochrome stills.",
    type: "Large-Format Film Science",
    accent: "#ffb703"
  },
  {
    id: "cam-dji-aerial-rig",
    category: "DRONES",
    name: "DJI Inspire 3 & 4K HDR Cinema Drone Fleet",
    brand: "DJI Aerial Cinema",
    model: "Inspire 3 Cinema Drone & Ronin 4D 3-Axis Stabilizer",
    image: "/src/assets/images/dji_drone_cinema_gimbal_1791960674905.jpg",
    specs: "Full-Frame 8K ProRes RAW · Centimeter-Level RTK Waypoint Pro · LiDAR Focus",
    purpose: "Sweeping cinematic aerial overheads of grand palace venues, baraat entries, firework spectacles, and flowing processions.",
    type: "Aerial Cinema Drone",
    accent: "#00e5ff"
  },
  {
    id: "cam-studio-lighting-rig",
    category: "STUDIO LIGHTING",
    name: "Profoto & Continuous Softboxes on Heavy C-Stands",
    brand: "Profoto / Arri / Godox",
    model: "High-CRI Octabox Softboxes & Stainless Steel C-Stands",
    image: "/src/assets/images/studio_lighting_c_stand_1791960700678.jpg",
    specs: "98+ CRI / TLCI Rating · 120cm Octagonal Diffusers · Heavy Boom Arms with Sandbags",
    purpose: "Studio-grade key, fill, and hair rim illumination sculpting three-dimensional light around the bride and groom.",
    type: "Professional Filming Light Stands",
    accent: "#ffb703"
  }
];

export const EQUIPMENT_BENCHMARKS: EquipmentItem[] = [
  ...BRAND_CAMERAS,
  {
    id: "eq-lenses",
    category: "LENSES",
    name: "Master Cinema & Portrait Prime Optics",
    brand: "Sony G Master / Canon RF / Fujinon",
    model: "35mm T1.5 · 50mm f/1.2 · 85mm f/1.2 L",
    type: "High-Speed Prime Lenses",
    specs: "Ultra-Fast T1.5/f1.2 Aperture · Circular 11-Blade Iris · Nano Coating",
    purpose: "Separates the couple from bustling crowds with creamy, luminous depth-of-field and glowing highlights.",
    accent: "#00e5ff"
  },
  {
    id: "eq-flashes",
    category: "FLASH SYSTEMS",
    name: "High-Speed Sync Wireless Flashes",
    brand: "Godox / Profoto",
    model: "V1 Roundhead & AD200 / AD600 Pro",
    type: "TTL & Manual Wireless Strobes",
    specs: "1/8000s High-Speed Sync · 2.4GHz Wireless · Magnetic Light Modifiers",
    purpose: "Freezes energetic dance floor moves during baraat processions and sangeet night without harsh glare.",
    accent: "#ff6b00"
  },
  {
    id: "eq-audio",
    category: "AUDIO",
    name: "32-Bit Float Dual Wireless Mic System",
    brand: "DJI Mic 2 / RØDE Wireless PRO",
    model: "32-Bit Float Internal Recording",
    type: "Wireless Lapel Microphones",
    specs: "Zero Clipping Distortion · 250m Transmission · Dual Transmitter",
    purpose: "Preserves crystal-clear mantras, emotional wedding vows, and speeches without distortion.",
    accent: "#00e5ff"
  },
  {
    id: "eq-stabilization",
    category: "STABILIZATION",
    name: "3-Axis Motorized Cinema Gimbals",
    brand: "DJI Ronin / Zhiyun",
    model: "RS3 Pro / RS4 Pro Cinema Gimbal",
    type: "Motorized Stabilization",
    specs: "Carbon Fiber Arms · Automated Axis Locks · LiDAR Focusing",
    purpose: "Guarantees buttery-smooth tracking shots while walking alongside the procession.",
    accent: "#ff6b00"
  }
];

export const LIGHTING_COMPARISONS = [
  {
    phase: "01. AMBIENT NATURAL LIGHT",
    tag: "Camera Sensor Only",
    effect: "Harsh ceiling chandeliers, flat skin tones, deep eye-socket shadows.",
    color: "#94a3b8"
  },
  {
    phase: "02. PROFESSIONAL STUDIO LIGHTING",
    tag: "Softbox + C-Stands Active",
    effect: "Diffused wrap-around key light, soft natural skin graduation, dimensional separation.",
    color: "#ff6b00"
  },
  {
    phase: "03. CINEMATIC MASTER FRAME",
    tag: "Dual Rim Light + T1.5 Cine Glass",
    effect: "Warm golden hair rim, glowing jewelry sparkle, rich velvet background bokeh.",
    color: "#00e5ff"
  }
];

export const BEST_PHOTOS = [
  {
    id: "best-1",
    title: "The Regal Crimson Bride",
    category: "Royal Bridal Portrait",
    image: "/src/assets/images/royal_bridal_portrait_1791898990033.jpg",
    location: "Studio & Heritage Mandap, UP",
    accent: "#ff6b00",
    awards: "Masterwork Portrait",
    camera: "85mm f/1.2 L · Studio Filming Softbox · Zardozi Detail"
  },
  {
    id: "best-2",
    title: "Sangeet Under A Thousand Chandeliers",
    category: "Grand Celebration Night",
    image: "/src/assets/images/sangeet_celebration_lights_1791898991004.jpg",
    location: "Grand Banquet, Sirsaganj",
    accent: "#ffb703",
    awards: "High Energy Candid",
    camera: "35mm T1.5 Cine · Warm Fairy Illumination · 4K 60fps"
  },
  {
    id: "best-3",
    title: "Royal Courtyard Union",
    category: "Heritage Wedding",
    image: "/src/assets/images/hero_cinematic_couple_1791896401138.jpg",
    location: "Heritage Palace Courtyard",
    accent: "#00e5ff",
    awards: "Featured Story",
    camera: "35mm Prime · Golden Hour Rim · 14-Stop Dynamic Range"
  },
  {
    id: "best-4",
    title: "The Sacred Varmala & Diya Glow",
    category: "Ceremony Moments",
    image: "/src/assets/images/wedding_story_varmala_1791896401614.jpg",
    location: "Sirsaganj Evening Celebration",
    accent: "#ff6b00",
    awards: "Emotional Highlight",
    camera: "50mm f/1.2 · Diya Bokeh · Unscripted Smile"
  },
  {
    id: "best-5",
    title: "Pavilion Sunset Whisper",
    category: "Pre-Wedding Editorial",
    image: "/src/assets/images/prewedding_cinematic_1791896401895.jpg",
    location: "Royal Chhatri Pavilion",
    accent: "#00e5ff",
    awards: "Editorial Excellence",
    camera: "85mm Portrait Prime · Windswept Veil · Golden Sunset"
  },
  {
    id: "best-6",
    title: "Anamorphic Evening Vows",
    category: "Cinematic Film Still",
    image: "/src/assets/images/cinematic_film_still_1791896403634.jpg",
    location: "Evening Courtyard, Agra Region",
    accent: "#ffb703",
    awards: "2.39:1 Anamorphic",
    camera: "Anamorphic Cine Glass · Warm Candelabra Lighting"
  }
];

export const PORTFOLIO_STORIES: PortfolioItem[] = [
  {
    id: "story-1",
    title: "Royal Courtyard Union",
    category: "weddings",
    categoryLabel: "Wedding Story",
    image: "/src/assets/images/hero_cinematic_couple_1791896401138.jpg",
    location: "Heritage Palace, Uttar Pradesh",
    year: "2024",
    aspect: "wide",
    story: "A majestic golden-hour ceremony framed by sandstone jharokhas and rose petal pathways, immortalizing the poise and timeless bond of the couple.",
    specs: "35mm Cine Prime · Natural Golden Hour · 4K Color Grade"
  },
  {
    id: "story-2",
    title: "The Sacred Varmala & Diya Glow",
    category: "weddings",
    categoryLabel: "Ceremony Moments",
    image: "/src/assets/images/wedding_story_varmala_1791896401614.jpg",
    location: "Sirsaganj Evening Celebration",
    year: "2024",
    aspect: "landscape",
    story: "An unforgettable burst of joy under an archway of marigolds and thousands of warm oil diyas, capturing unscripted laughter between vows.",
    specs: "50mm f/1.2 Lens · Ambient Diya Illumination · Candid Capture"
  },
  {
    id: "story-3",
    title: "Pavilion Sunset Whisper",
    category: "pre-weddings",
    categoryLabel: "Pre-Wedding Film",
    image: "/src/assets/images/prewedding_cinematic_1791896401895.jpg",
    location: "Chhatri Pavilion, Agra Valley",
    year: "2024",
    aspect: "landscape",
    story: "Windswept veil and sun-drenched arches. A quiet romantic narrative celebrating the promise of a lifetime against classical heritage architecture.",
    specs: "85mm Portrait Prime · Golden Rim Backlight · 4K 60fps"
  },
  {
    id: "story-4",
    title: "Anamorphic Evening Vows",
    category: "films",
    categoryLabel: "Cinematic Film Still",
    image: "/src/assets/images/cinematic_film_still_1791896403634.jpg",
    location: "Grand Heritage Courtyard",
    year: "2024",
    aspect: "wide",
    story: "A widescreen 2.39:1 anamorphic still evoking classic Indian cinema romance, where glowing candelabras and deep gazes carry the story forward.",
    specs: "Anamorphic 2.39:1 · 35mm T2.0 · Filmic Warm Grade"
  },
  {
    id: "story-5",
    title: "Timeless Heritage Mandap Vows",
    category: "portraits",
    categoryLabel: "Studio Heritage",
    image: "/src/assets/images/hero_cinematic_couple_1791896401138.jpg",
    location: "Heritage Courtyard, Uttar Pradesh",
    year: "Est. 1981",
    aspect: "landscape",
    story: "Over four decades of photographic excellence: capturing timeless royal vows and generational heritage across Uttar Pradesh.",
    specs: "35mm Prime · Natural Golden Hour · 14-Stop Dynamic Range"
  },
  {
    id: "story-6",
    title: "The Regal Crimson Bride",
    category: "portraits",
    categoryLabel: "Bridal Portrait",
    image: "/src/assets/images/royal_bridal_portrait_1791898990033.jpg",
    location: "Sirsaganj Heritage Shoot",
    year: "2024",
    aspect: "portrait",
    story: "Intricate crimson zardozi work and royal heritage kundan jewelry illuminated with diffused studio softboxes and prime portrait optics.",
    specs: "85mm f/1.2 L · Studio Lighting · 8K Resolution"
  }
];

export const TESTIMONIAL_REVIEWS: TestimonialReview[] = [
  {
    id: "rev-1",
    stars: 5,
    quote: "Chandralok Studio captured our wedding with a depth and cinematic beauty that still brings tears to our eyes. Their heritage of 40+ years in Sirsaganj truly reflects in how respectful, artistic, and attentive they are to every ritual.",
    names: "Aarav & Meera Sharma",
    event: "Royal Wedding Celebration · Sirsaganj",
    date: "November 2024",
    verified: true
  },
  {
    id: "rev-2",
    stars: 5,
    quote: "The pre-wedding shoot was like an editorial fashion film! They guided our outfits, chose breathtaking sunset lighting with their cinema primes, and made us feel like royalty. The teaser video received thousands of views on Instagram.",
    names: "Rohit & Priya Yadav",
    event: "Pre-Wedding Cinema Story · Agra Heritage",
    date: "October 2024",
    verified: true
  },
  {
    id: "rev-3",
    stars: 5,
    quote: "True cinema quality right here in Sirsaganj. From the aerial 4K drone visuals of our grand baraat to the crystal clear sound recording of our vows, every single frame looks like a high-budget Bollywood movie. Highly recommended!",
    names: "Vikram & Ananya Rathore",
    event: "Grand Wedding & Reception · Etawah Road",
    date: "January 2024",
    verified: true
  },
  {
    id: "rev-4",
    stars: 5,
    quote: "Chandralok Studio also covered my parents' wedding decades ago, and having them film our wedding in 2024 was deeply emotional. The handcrafted photo album they delivered is an absolute family heirloom.",
    names: "Devendra & Shivani Gupta",
    event: "Traditional Vedic Wedding",
    date: "February 2024",
    verified: true
  }
];

export const WEDDING_STORYLINE = [
  {
    chapter: "Chapter 01",
    title: "The Anticipation & Heritage Details",
    description: "Delicate bridal jewelry placement, fragrant fresh gajras, quiet moments in mirrors, and the quiet breaths before stepping onto the stage."
  },
  {
    chapter: "Chapter 02",
    title: "The Sacred Vows & High Emotion",
    description: "The vibrant baraat procession, tearful varmala gaze, sacred pheras around holy fire, and the tender blessings of parents and elders."
  },
  {
    chapter: "Chapter 03",
    title: "The Grand Celebration & Eternal Memory",
    description: "Midnight sangeet dance floors, glittering celebratory fireworks, the poignant vidaai, and portraits designed to be cherished for generations."
  }
];

export const TRUST_PILLARS = [
  {
    title: "Since 1981",
    subtitle: "Four Decades of Heritage",
    description: "Established in 1981 in Sirsaganj. Over 40 years of continuous visual devotion documenting the families and weddings of Uttar Pradesh."
  },
  {
    title: "Dual Mastery",
    subtitle: "Photography + Filmmaking",
    description: "A cohesive creative vision where high-resolution fine-art photography and cinematic 4K motion films complement each other seamlessly."
  },
  {
    title: "Deep Regional Roots",
    subtitle: "Etawah Road, Sirsaganj",
    description: "Deep understanding of regional rituals, cultural rhythms, and lighting conditions across Sirsaganj, Agra, Etawah, and surrounding districts."
  },
  {
    title: "Unscripted Emotion",
    subtitle: "Personal Stories Over Poses",
    description: "We honor authentic feelings over forced poses. Your film and photographs will preserve the real tears, uninhibited smiles, and quiet intimacy."
  }
];
