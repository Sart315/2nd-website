# Implementation Plan: Full 5-Page Studio Architecture (Home, Gallery, Services, About, Booking)

Comprehensive architectural blueprint to expand the Chandralok Studio website into a complete 5-page multi-page website where all 5 main navigation sections operate as standalone, dedicated URL routes with luxury darkroom editorial presentation, progressive image loading, and instant cross-page navigation.

---

## 1. Overview & Core Concept

- **Core Goal**: Transform the website so that all 5 primary sections shown in the navigation menu operate as full, dedicated standalone pages:
  1. **Home Page (`#/` or `/`)**: Cinematic hero, flagship story trailer, curated highlights teaser, and direct conversion portals.
  2. **Gallery Page (`#/gallery`)**: Asymmetrical masonry archive with category filters (Weddings, Pre-Weddings, Portraits, Cinema, Events), keyword search, progressive shimmer loading, and high-res lightbox zoom.
  3. **Services Page (`#/services`)**: Comprehensive catalog covering all 9 studio disciplines (Wedding Photography, Wedding Films, Pre-Wedding Photography, Pre-Wedding Films, Cinematic Videography, Event Photography, Event Videography, Couple Portraits, Commercial & Special Events), detailed deliverable lists, pricing guidance, and direct one-click inquiry routing.
  4. **About Page (`#/about`)**: Dedicated heritage and studio chronicle detailing the 1981 Sirsaganj establishment, master filmmaker craft philosophy, the full studio equipment fleet (cameras, prime cinema lenses, lighting setups, drones), client trust metrics, and physical landmark studio details.
  5. **Booking Page (`#/booking`)**: Dedicated reservation desk with date availability check, event-type selector, package tier comparison, and direct WhatsApp dispatch (+91 99976 48550).

---

## 2. Key Product Decisions & Confirmed Answers

> [!IMPORTANT]
> The following architectural decisions incorporate your confirmed answers:
> 
> - **Dedicated Services Page**: Built as a comprehensive catalog with all 9 studio disciplines, complete deliverables breakdowns (deliverables, raw footage, photo counts, turnaround times), and direct "Inquire for This Discipline" links that route to the Booking page with the selected service pre-filled.
> - **Dedicated About Page**: Built around the 1981 Sirsaganj heritage story, our team's craft philosophy (visual ethics, unscripted candid approach), and an authentic studio equipment fleet showcase featuring cinema cameras (Sony FX3, Canon Cine, Nikon Z8, Fujifilm GFX), master lighting rigs, and drone optics.
> - **URL Hash Router (`RouterContext.tsx`)**: Extended to support all 5 dedicated routes (`'home' | 'gallery' | 'services' | 'about' | 'booking'`) with parameters, browser back/forward history, and automatic scroll-to-top.
> - **Progressive Image Loading**: Consistent throughout all 5 pages using `ProgressiveImage` with the dark aperture breathing pulse and champagne shimmer skeleton.

---

## 3. User Experience & 5-Page Architecture

```
                                  ┌──────────────────────────────────────────┐
                                  │            GLOBAL TOP NAVBAR             │
                                  │  Logo • Home • Gallery • Services •      │
                                  │  About • Booking • Dark/Light Mode       │
                                  └─────────────────────┬────────────────────┘
                                                        │
         ┌───────────────────┬──────────────────────────┼──────────────────────────┬───────────────────┐
         │                   │                          │                          │                   │
         ▼                   ▼                          ▼                          ▼                   ▼
┌─────────────────┐ ┌─────────────────┐  ┌─────────────────────────────┐ ┌───────────────────┐ ┌─────────────────┐
│    HOME PAGE    │ │  GALLERY PAGE   │  │        SERVICES PAGE        │ │    ABOUT PAGE     │ │  BOOKING PAGE   │
│ • Cinematic Hero│ │ • Masonry Grid  │  │ • 9 Curated Disciplines     │ │ • 1981 Heritage   │ │ • Date Checker  │
│ • Film Trailer  │ │ • Filter Tabs   │  │ • Deliverables Breakdown    │ │ • Philosophy      │ │ • Package Tiers │
│ • Highlights    │ │ • Live Search   │  │ • Photo/Cinema Specs        │ │ • Gear Fleet      │ │ • WhatsApp Form │
│ • Quick Teasers │ │ • Lightbox Zoom │  │ • Direct Booking Triggers   │ │ • Studio Landmark │ │ • Landmark Map  │
└─────────────────┘ └─────────────────┘  └─────────────────────────────┘ └───────────────────┘ └─────────────────┘
                                                        │
                                  ┌─────────────────────▼────────────────────┐
                                  │           GLOBAL EDITORIAL FOOTER        │
                                  │   Links to all 5 pages • WhatsApp • Map  │
                                  └──────────────────────────────────────────┘
```

---

## 4. Technical Architecture & File Layout

```
src/
├── context/
│   ├── ThemeContext.tsx            ── Dark & light mode state & persistence
│   └── RouterContext.tsx           ── URL hash router supporting: 'home' | 'gallery' | 'services' | 'about' | 'booking'
├── pages/
│   ├── HomePage.tsx                ── Curated home overview & cinematic film trailers
│   ├── GalleryPage.tsx             ── Dedicated portfolio archive with masonry, filters, and lightbox
│   ├── ServicesPage.tsx            ── Dedicated 9-discipline catalog with detailed specs & deliverables
│   ├── AboutPage.tsx               ── Dedicated 1981 heritage story, craft philosophy & camera gear showcase
│   └── BookingPage.tsx             ── Dedicated reservation flow with date availability & WhatsApp dispatch
├── components/
│   ├── Navbar.tsx                  ── Sticky header with all 5 active page links + dark/light toggle
│   ├── Footer.tsx                  ── Editorial footer with navigation to all 5 dedicated pages
│   ├── ProgressiveImage.tsx        ── Reusable progressive loading component with aperture pulse
│   └── LightboxModal.tsx           ── Lightbox viewer for full-screen photo inspection
├── data/
│   ├── studioData.ts               ── Complete 9-service catalog, camera gear items, and testimonials
│   └── galleryData.ts              ── Full photo archive
└── App.tsx                         ── Page orchestrator rendering active page based on current route
```

---

## 5. Step-by-Step Implementation Sequence

1. **Step 1: Expand Router (`src/context/RouterContext.tsx`)**
   - Update `AppRoute` union to `'home' | 'gallery' | 'services' | 'about' | 'booking'`.
   - Update `parseHash` to correctly identify `#/services` and `#/about`.

2. **Step 2: Build Dedicated Services Page (`src/pages/ServicesPage.tsx`)**
   - Header: "CHANDRALOK STUDIO · CURATED DISCIPLINES" with craft introduction.
   - Comprehensive showcase of all 9 studio disciplines:
     1. Wedding Photography
     2. Wedding Films
     3. Pre-Wedding Photography
     4. Pre-Wedding Films
     5. Cinematic Videography
     6. Event Photography
     7. Event Videography
     8. Couple Portraits
     9. Commercial & Special Events
   - Each discipline presented with high-resolution progressive photography, deliverables checklist, camera optics, and a direct "Inquire For This Service" action that opens the Booking page with the service pre-filled.
   - Bottom consultation banner.

3. **Step 3: Build Dedicated About Page (`src/pages/AboutPage.tsx`)**
   - Header: "BEHIND THE LENS · FOUR DECADES OF HERITAGE (ESTD. 1981)".
   - Chronicle of Chandralok Studio's founding in Sirsaganj on Etawah Road.
   - Craft Philosophy & Ethics: The balance of reverence, unscripted emotion, and timeless color science.
   - The Studio Equipment Fleet: Interactive showcase of cinema cameras (Sony FX3, Canon Cinema EOS, Nikon Z8, Fujifilm GFX), master prime lenses, drone aerial systems, and studio lighting gear.
   - Physical Studio Landmark Card with interactive Google Maps link and visiting hours.

4. **Step 4: Update Navigation (`src/components/Navbar.tsx` & `src/components/Footer.tsx`)**
   - Update `Navbar.tsx` desktop and mobile menus so all 5 links (`HOME`, `GALLERY`, `SERVICES`, `ABOUT`, `BOOKING`) operate as standalone route navigators with active indicators.
   - Update `Footer.tsx` quick links to navigate seamlessly to each dedicated page.

5. **Step 5: Update Root Orchestrator (`src/App.tsx`)**
   - Mount `ServicesPage` and `AboutPage` inside the route view switcher alongside `HomePage`, `GalleryPage`, and `BookingPage`.

6. **Step 6: Verification & Compilation**
   - Run `lint_applet` and `compile_applet` to ensure zero compilation or type errors.
   - Test seamless page navigation, back/forward button behavior, dark/light theme switching, and progressive image loading.
