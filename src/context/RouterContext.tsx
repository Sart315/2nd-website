import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type AppRoute = 'home' | 'gallery' | 'services' | 'about' | 'booking';

export interface RouteParams {
  service?: string;
  category?: string;
  photoId?: string;
  [key: string]: string | undefined;
}

interface RouterContextType {
  route: AppRoute;
  params: RouteParams;
  navigateTo: (targetRoute: AppRoute, newParams?: RouteParams) => void;
}

const RouterContext = createContext<RouterContextType>({
  route: 'home',
  params: {},
  navigateTo: () => {},
});

function parseHash(hash: string): { route: AppRoute; params: RouteParams } {
  // Strip leading '#/' or '#'
  const clean = hash.replace(/^#\/?/, '').trim();
  const [pathPart, queryPart] = clean.split('?');

  const params: RouteParams = {};
  if (queryPart) {
    const searchParams = new URLSearchParams(queryPart);
    searchParams.forEach((val, key) => {
      params[key] = val;
    });
  }

  const normalized = pathPart?.toLowerCase() || '';

  if (normalized === 'gallery' || normalized.startsWith('gallery/')) {
    return { route: 'gallery', params };
  }
  if (normalized === 'services' || normalized.startsWith('services/')) {
    return { route: 'services', params };
  }
  if (normalized === 'about' || normalized.startsWith('about/')) {
    return { route: 'about', params };
  }
  if (normalized === 'booking' || normalized.startsWith('booking/')) {
    return { route: 'booking', params };
  }
  return { route: 'home', params };
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [current, setCurrent] = useState<{ route: AppRoute; params: RouteParams }>(() => {
    if (typeof window !== 'undefined') {
      return parseHash(window.location.hash);
    }
    return { route: 'home', params: {} };
  });

  const handleHashChange = useCallback(() => {
    const parsed = parseHash(window.location.hash);
    setCurrent(parsed);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [handleHashChange]);

  const navigateTo = useCallback((targetRoute: AppRoute, newParams?: RouteParams) => {
    let hashTarget = '#/' + (targetRoute === 'home' ? '' : targetRoute);
    if (newParams && Object.keys(newParams).length > 0) {
      const searchParams = new URLSearchParams();
      Object.entries(newParams).forEach(([k, v]) => {
        if (v) searchParams.set(k, v);
      });
      const qs = searchParams.toString();
      if (qs) {
        hashTarget += '?' + qs;
      }
    }

    if (window.location.hash === hashTarget) {
      // Re-trigger parse if hash is same but state needs update
      setCurrent({ route: targetRoute, params: newParams || {} });
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } else {
      window.location.hash = hashTarget;
    }
  }, []);

  return (
    <RouterContext.Provider
      value={{
        route: current.route,
        params: current.params,
        navigateTo,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useAppRouter = () => useContext(RouterContext);
