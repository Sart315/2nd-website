// Robust image asset resolver for Vite
// Works seamlessly in dev, preview, and production/live deployments

const imageModules = import.meta.glob<{ default: string }>(
  '../assets/images/*.{jpg,jpeg,png,webp,svg}',
  { eager: true }
);

/**
 * Resolves any image path or filename to a guaranteed production asset URL.
 * Handles paths like:
 * - "/src/assets/images/foo.jpg"
 * - "/images/foo.jpg"
 * - "foo.jpg"
 */
export function getImageUrl(pathOrFilename: string): string {
  if (!pathOrFilename) return '';

  // Extract clean filename
  const cleanFilename = pathOrFilename.split('/').pop() || pathOrFilename;

  // 1. Check Vite bundled assets from import.meta.glob
  for (const key in imageModules) {
    if (key.endsWith('/' + cleanFilename) || key.endsWith(cleanFilename)) {
      const mod = imageModules[key];
      if (mod && mod.default) {
        return mod.default;
      }
    }
  }

  // 2. Direct public path fallback
  return `/images/${cleanFilename}`;
}

/**
 * Safe image onError handler to cycle through fallbacks if any CDN or path issue occurs.
 */
export function handleImageFallback(
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackPath?: string
) {
  const target = e.currentTarget;
  const currentSrc = target.src;
  const filename = currentSrc.split('/').pop()?.split('?')[0] || '';

  const step = target.getAttribute('data-fallback-step') || '0';

  if (step === '0') {
    target.setAttribute('data-fallback-step', '1');
    target.src = fallbackPath || `/images/${filename}`;
  } else if (step === '1') {
    target.setAttribute('data-fallback-step', '2');
    target.src = `./images/${filename}`;
  } else if (step === '2') {
    target.setAttribute('data-fallback-step', '3');
    target.src = `/src/assets/images/${filename}`;
  }
}
