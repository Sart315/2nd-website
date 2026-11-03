import { getImageUrl } from '../utils/assetImages';

export interface GalleryPhoto {
  id: string;
  title: string;
  subtitle: string;
  category: 'weddings' | 'pre-weddings' | 'portraits' | 'films' | 'events';
  categoryLabel: string;
  image: string;
  location: string;
  year: string;
  aspect: 'portrait' | 'landscape' | 'wide' | 'square';
  story: string;
  specs: string;
  tags: string[];
}

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Works' },
  { id: 'weddings', label: 'Royal Weddings' },
  { id: 'pre-weddings', label: 'Pre-Weddings' },
  { id: 'portraits', label: 'Bridal Portraits' },
  { id: 'films', label: 'Cinematic Films' },
  { id: 'events', label: 'Festivities & Sangeet' },
] as const;

export type GalleryCategoryId = (typeof GALLERY_CATEGORIES)[number]['id'];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "The Regal Crimson Bride",
    subtitle: "Zardozi & Heritage Solah Shringar",
    category: "portraits",
    categoryLabel: "Bridal Portrait",
    image: getImageUrl("royal_bridal_portrait_1791898990033.jpg"),
    location: "Sirsaganj Studio & Heritage Mandap, UP",
    year: "2024",
    aspect: "portrait",
    story: "A masterwork bridal portrait celebrating royal crimson silks, handwoven zardozi embroidery, and timeless dignity before the evening pheras.",
    specs: "Canon 85mm f/1.2 L · Studio Filming Softbox · Natural Skin Retention",
    tags: ["Bridal", "Lehenga", "Jewelry", "Royal", "Portrait", "Sirsaganj"]
  },
  {
    id: "gal-2",
    title: "Royal Courtyard Union",
    subtitle: "Golden Hour Grandeur",
    category: "weddings",
    categoryLabel: "Royal Wedding",
    image: getImageUrl("hero_cinematic_couple_1791896401138.jpg"),
    location: "Heritage Palace Courtyard, UP",
    year: "2024",
    aspect: "wide",
    story: "Sandstone arches bathed in late afternoon golden light as the royal couple shares a quiet, reverent glance amidst the regal architecture.",
    specs: "Sony FX3 Cine · 35mm Prime T1.5 · 14-Stop Dynamic Range",
    tags: ["Couples", "Palace", "Golden Hour", "Royal", "Heritage", "Ceremony"]
  },
  {
    id: "gal-3",
    title: "The Sacred Varmala & Diya Glow",
    subtitle: "Spontaneous Laughter Under 1,000 Flames",
    category: "weddings",
    categoryLabel: "Ceremony Moments",
    image: getImageUrl("wedding_story_varmala_1791896401614.jpg"),
    location: "Sirsaganj Evening Celebration, Etawah Road",
    year: "2024",
    aspect: "landscape",
    story: "Unscripted tears and laughter as the floral garlands meet beneath hundreds of glowing brass diyas and showering rose petals.",
    specs: "50mm f/1.2 Cine Glass · Ambient Diya Illumination · 1/320s Candid",
    tags: ["Varmala", "Rituals", "Candid", "Emotions", "Sirsaganj", "Weddings"]
  },
  {
    id: "gal-4",
    title: "Pavilion Sunset Whisper",
    subtitle: "Windswept Editorial Romance",
    category: "pre-weddings",
    categoryLabel: "Pre-Wedding Editorial",
    image: getImageUrl("prewedding_cinematic_1791896401895.jpg"),
    location: "Chhatri Pavilion, Agra Outskirts",
    year: "2024",
    aspect: "portrait",
    story: "Framed against an amber horizon, the bride's cascading veil dances in the evening breeze in front of centuries-old Mughal stone chhatris.",
    specs: "85mm Portrait Prime · Natural Rim Sunlight · f/1.4",
    tags: ["Pre-Wedding", "Romantic", "Veil", "Sunset", "Agra", "Outdoor"]
  },
  {
    id: "gal-5",
    title: "Sangeet Under A Thousand Chandeliers",
    subtitle: "Electric Joy & Midnight Choreography",
    category: "events",
    categoryLabel: "Sangeet Celebration",
    image: getImageUrl("sangeet_celebration_lights_1791898991004.jpg"),
    location: "Grand Banquet Hall, Sirsaganj",
    year: "2024",
    aspect: "landscape",
    story: "Crystal chandeliers reflecting warm golden bokeh as the couple and family ignite the dance floor in full celebration.",
    specs: "24-70mm f/2.8 GM · Off-Camera TTL High Speed Sync · ISO 1600",
    tags: ["Sangeet", "Dance", "Chandeliers", "Family", "Celebration", "Lights"]
  },
  {
    id: "gal-6",
    title: "Anamorphic Evening Vows",
    subtitle: "Cinema Still from 4K Feature Film",
    category: "films",
    categoryLabel: "Cinematic Film Still",
    image: getImageUrl("cinematic_film_still_1791896403634.jpg"),
    location: "Historic Haveli Courtyard, Uttar Pradesh",
    year: "2024",
    aspect: "wide",
    story: "A dramatic 2.39:1 widescreen frame capturing the profound sanctity and whispered promises during the final seven steps (Saptapadi).",
    specs: "Anamorphic Cinema Prime 40mm · 2.39:1 Scope · 10-bit 4:2:2 DCI 4K",
    tags: ["Film Still", "Anamorphic", "Widescreen", "Vows", "Night", "Cinematic"]
  },
  {
    id: "gal-7",
    title: "Groom's Royal Sherwani & Safa",
    subtitle: "Regal Demeanor & Polki Brooch",
    category: "portraits",
    categoryLabel: "Groom Portrait",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=80",
    location: "Private Royal Suite, Agra",
    year: "2024",
    aspect: "portrait",
    story: "The groom captured in quiet anticipation before the procession, with intricately embroidered ivory raw silk and family heirloom sword.",
    specs: "85mm f/1.4 · Directional Window Scrim Light · Editorial Tone",
    tags: ["Groom", "Sherwani", "Safa", "Portrait", "Heritage", "Royal"]
  },
  {
    id: "gal-8",
    title: "The Golden Baraat Arrival",
    subtitle: "Dhol Beats, Fireworks & Royal Vintage Car",
    category: "events",
    categoryLabel: "Baraat Procession",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
    location: "Heritage Resort Gates, Etawah Road",
    year: "2024",
    aspect: "landscape",
    story: "A spectacular arrival illuminated by torchbearers and fireworks, as the groom's entourage dances with unmatched fervor.",
    specs: "Sony FX3 · 24mm Prime · Low-Light Dual Base ISO 12800",
    tags: ["Baraat", "Dhol", "Fireworks", "Festivities", "Procession", "Joy"]
  },
  {
    id: "gal-9",
    title: "Lakeside Sunset Serenade",
    subtitle: "Quiet Intimacy on the Water",
    category: "pre-weddings",
    categoryLabel: "Pre-Wedding Film Still",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1600&q=80",
    location: "Historic Ghats & Lake Pavilion",
    year: "2024",
    aspect: "wide",
    story: "Rowing gently across calm waters at twilight, capturing pure romance and unposed shared smiles in natural light.",
    specs: "DJI Ronin Gimbal · 50mm f/1.2 · 4K 60fps Slow Motion",
    tags: ["Pre-Wedding", "Lake", "Sunset", "Romance", "Film", "Couple"]
  },
  {
    id: "gal-10",
    title: "Sacred Sindoor & Phere",
    subtitle: "The Timeless Moment of Eternity",
    category: "weddings",
    categoryLabel: "Sacred Rituals",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1400&q=80",
    location: "Vedic Mandap, Sirsaganj",
    year: "2024",
    aspect: "portrait",
    story: "The emotional crescendo of the Vedic wedding as the vermilion is placed, witnessed by holy Agni and generational blessings.",
    specs: "Macro 100mm f/2.8 · Pure Amber Firelight · Candid Focus",
    tags: ["Sindoor", "Mandap", "Phere", "Vedic", "Emotion", "Sacred"]
  },
  {
    id: "gal-11",
    title: "Haldi Sunlight & Marigold Rites",
    subtitle: "Joyous Yellow Hues & Spontaneous Laughter",
    category: "events",
    categoryLabel: "Haldi Ceremony",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=80",
    location: "Open Courtyard Garden, Sirsaganj",
    year: "2024",
    aspect: "square",
    story: "Brimming brass urlis of turmeric paste and fresh orange marigolds showered on the couple amidst unstoppable family laughter.",
    specs: "35mm f/1.8 · Natural Direct Sunlight & Diffusion Scrim · 1/1000s",
    tags: ["Haldi", "Turmeric", "Marigold", "Yellow", "Family", "Candid"]
  },
  {
    id: "gal-12",
    title: "Cinematic Film Master Suite Reel",
    subtitle: "4K Color Graded Narrative Reel",
    category: "films",
    categoryLabel: "Cinematography Master",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80",
    location: "Palace Ballrooms & Ghats, Uttar Pradesh",
    year: "2024",
    aspect: "wide",
    story: "Highlights from our signature 3-day royal wedding documentary, featuring bespoke orchestral sound design and pristine cinema color curves.",
    specs: "Multi-Cam Sony FX3 / A7S III · Anamorphic 1.5x · ProRes 422 HQ",
    tags: ["Teaser", "Reel", "Color Grading", "Cinema", "Documentary"]
  }
];
