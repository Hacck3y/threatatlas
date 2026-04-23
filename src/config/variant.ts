const buildVariant = (() => {
  try {
    return import.meta.env?.VITE_VARIANT || 'full';
  } catch {
    return 'full';
  }
})();

export const VARIANT_KEYS = ['full', 'tech', 'finance', 'commodity', 'happy'] as const;
export type VariantKey = typeof VARIANT_KEYS[number];

export function normalizeVariant(value: string | null | undefined): VariantKey | null {
  return VARIANT_KEYS.includes(value as VariantKey) ? (value as VariantKey) : null;
}

export function getVariantFromSearch(search: string): VariantKey | null {
  return normalizeVariant(new URLSearchParams(search).get('variant'));
}

export function getVariantForHostname(hostname: string): VariantKey {
  if (hostname.startsWith('tech.')) return 'tech';
  if (hostname.startsWith('finance.')) return 'finance';
  if (hostname.startsWith('happy.')) return 'happy';
  if (hostname.startsWith('commodity.')) return 'commodity';
  return 'full';
}

export function getVariantHref(variant: VariantKey, currentUrl: string): string {
  const url = new URL(currentUrl);
  if (variant === 'full') {
    url.searchParams.delete('variant');
  } else {
    url.searchParams.set('variant', variant);
  }
  return url.toString();
}

export const SITE_VARIANT: string = (() => {
  const buildResolved = normalizeVariant(buildVariant) ?? 'full';
  if (typeof window === 'undefined') return buildResolved;

  const isTauri = '__TAURI_INTERNALS__' in window || '__TAURI__' in window;
  if (isTauri) {
    return normalizeVariant(localStorage.getItem('threatatlas-variant')) ?? buildResolved;
  }

  const searchVariant = getVariantFromSearch(window.location.search);
  if (searchVariant) return searchVariant;

  const hostVariant = getVariantForHostname(location.hostname);
  if (hostVariant !== 'full') return hostVariant;

  const h = location.hostname;
  if (h === 'localhost' || h === '127.0.0.1') {
    return normalizeVariant(localStorage.getItem('threatatlas-variant')) ?? buildResolved;
  }

  return 'full';
})();
