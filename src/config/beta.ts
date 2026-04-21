export const BETA_MODE = typeof window !== 'undefined'
  && localStorage.getItem('threatatlas-beta-mode') === 'true';
