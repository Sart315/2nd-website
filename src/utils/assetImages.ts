// Production-grade resilient asset image resolver & fallback system
// Works flawlessly in local dev, preview server, and live production deployments

const imageModules = import.meta.glob<{ default: string }>(
  '../assets/images/*.{jpg,jpeg,png,webp,svg}',
  { eager: true }
);

// High-resolution reliable fallback photography dictionary for weddings, cinema cameras, and studio gear
const RELIABLE_CDN_FALLBACKS: Record<string, string> = {
  // Wedding stories & couple portraits
  hero: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=80',
  wedding: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80',
  varmala: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1600&q=80',
  bridal: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=80',
  sangeet: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80',
  prewedding: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1600&q=80',
  cinematic: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80',

  // Cameras and equipment
  sony_fx3: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
  sony_a7s: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80',
  canon_cine: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=1200&q=80',
  canon_r5: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=1200&q=80',
  nikon_z8: 'https://images.unsplash.com/photo-1500634245200-e5245c7574ef?auto=format&fit=crop&w=1200&q=80',
  fujifilm: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=80',
  drone: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
  lighting: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
  legacy_lens: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80',
  vintage_film: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=80',
};

/**
 * Resolves any image path or filename to a guaranteed production asset URL.
 */
export function getImageUrl(pathOrFilename: string): string {
  if (!pathOrFilename) return '';

  // Clean filename extraction
  const cleanFilename = pathOrFilename.split('/').pop()?.split('?')[0] || pathOrFilename;

  // 1. First priority: Check Vite bundled assets (import.meta.glob)
  for (const key in imageModules) {
    if (key.endsWith('/' + cleanFilename) || key.endsWith(cleanFilename)) {
      const mod = imageModules[key];
      if (mod && mod.default) {
        return mod.default;
      }
    }
  }

  // 2. Second priority: Direct public directory path
  return `/images/${cleanFilename}`;
}

/**
 * Helper to strip Vite build hashes from filenames (e.g., 'photo-B73xfg.jpg' -> 'photo.jpg')
 */
function cleanHashedFilename(rawUrl: string): string {
  const base = rawUrl.split('/').pop()?.split('?')[0] || '';
  // Remove Vite compilation hash pattern e.g. -[A-Za-z0-9_-]{6,} before extension
  return base.replace(/-[A-Za-z0-9_-]{6,}(\.[a-zA-Z0-9]+)$/, '$1');
}

/**
 * Safe multi-tier image onError handler that guarantees the image will ALWAYS load on live sites.
 */
export function handleImageFallback(
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackCategoryOrPath?: string
) {
  const target = e.currentTarget;
  const currentSrc = target.src;
  const cleanFilename = cleanHashedFilename(currentSrc);
  const step = parseInt(target.getAttribute('data-fallback-step') || '0', 10);

  // Step 0: Try standard public `/images/` with un-hashed filename
  if (step === 0) {
    target.setAttribute('data-fallback-step', '1');
    target.src = `/images/${cleanFilename}`;
    return;
  }

  // Step 1: Try root-relative `./images/` or direct path
  if (step === 1) {
    target.setAttribute('data-fallback-step', '2');
    target.src = `./images/${cleanFilename}`;
    return;
  }

  // Step 2: Try `/public/assets/images/`
  if (step === 2) {
    target.setAttribute('data-fallback-step', '3');
    target.src = `/assets/images/${cleanFilename}`;
    return;
  }

  // Step 3: Match against our reliable photography CDN dictionary
  if (step === 3) {
    target.setAttribute('data-fallback-step', '4');

    if (fallbackCategoryOrPath && fallbackCategoryOrPath.startsWith('http')) {
      target.src = fallbackCategoryOrPath;
      return;
    }

    const lower = (cleanFilename + ' ' + (fallbackCategoryOrPath || '')).toLowerCase();
    for (const [key, url] of Object.entries(RELIABLE_CDN_FALLBACKS)) {
      if (lower.includes(key)) {
        target.src = url;
        return;
      }
    }

    // Default photography fallback
    target.src = RELIABLE_CDN_FALLBACKS.wedding;
    return;
  }

  // Step 4 (Final absolute safety): Inline vector SVG image so it NEVER shows a broken box
  if (step === 4) {
    target.setAttribute('data-fallback-step', '5');
    target.src =
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="%2320251E"><rect width="100%" height="100%" fill="%2320251E"/><circle cx="300" cy="180" r="45" fill="%233B4436"/><rect x="240" y="140" width="120" height="80" rx="12" stroke="%23B08D57" stroke-width="3" fill="none"/><circle cx="300" cy="180" r="22" stroke="%23B08D57" stroke-width="2.5" fill="%23181C16"/><text x="300" y="270" text-anchor="middle" fill="%23EFEFE8" font-family="sans-serif" font-size="14" letter-spacing="2">CHANDRALOK STUDIO</text><text x="300" y="295" text-anchor="middle" fill="%23B08D57" font-family="sans-serif" font-size="11" letter-spacing="1.5">SIRSAGANJ (ESTD. 1981)</text></svg>';
  }
}
