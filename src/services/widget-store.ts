import { loadFromStorage, saveToStorage } from '@/utils';
import { sanitizeWidgetHtml } from '@/utils/widget-sanitizer';

const STORAGE_KEY = 'wm-custom-widgets';
const PANEL_SPANS_KEY = 'threatatlas-panel-spans';
const PANEL_COL_SPANS_KEY = 'threatatlas-panel-col-spans';
const MAX_WIDGETS = 10;
const MAX_HISTORY = 10;
const MAX_HTML_CHARS = 50_000;

export interface CustomWidgetSpec {
  id: string;
  title: string;
  html: string;
  prompt: string;
  tier: 'basic' | 'pro';
  accentColor: string | null;
  conversationHistory: Array<{ role: 'user' | 'assistant'; content: string }>;
  createdAt: number;
  updatedAt: number;
}

export function loadWidgets(): CustomWidgetSpec[] {
  const raw = loadFromStorage<CustomWidgetSpec[]>(STORAGE_KEY, []);
  return raw.map((w) => ({ ...w, tier: 'basic' }));
}

export function saveWidget(spec: CustomWidgetSpec): void {
  const trimmed: CustomWidgetSpec = {
    ...spec,
    tier: 'basic',
    html: sanitizeWidgetHtml(spec.html.slice(0, MAX_HTML_CHARS)),
    conversationHistory: spec.conversationHistory.slice(-MAX_HISTORY),
  };
  const existing = loadWidgets().filter(w => w.id !== trimmed.id);
  const updated = [...existing, trimmed].slice(-MAX_WIDGETS);
  saveToStorage(STORAGE_KEY, updated);
}

export function deleteWidget(id: string): void {
  const updated = loadFromStorage<CustomWidgetSpec[]>(STORAGE_KEY, []).filter(w => w.id !== id);
  saveToStorage(STORAGE_KEY, updated);
  cleanSpanEntry(PANEL_SPANS_KEY, id);
  cleanSpanEntry(PANEL_COL_SPANS_KEY, id);
}

export function getWidget(id: string): CustomWidgetSpec | null {
  return loadWidgets().find(w => w.id === id) ?? null;
}

// ── Cross-domain key helpers ──────────────────────────────────────────────
// Cookies with domain=.threatatlas.app are shared across ThreatAtlas variants.
// We still read legacy localStorage keys for migration compatibility.

const COOKIE_DOMAIN = '.threatatlas.app';
const KEY_MAX_AGE = 365 * 24 * 60 * 60;

function usesCookies(): boolean {
  return location.hostname.endsWith('threatatlas.app');
}

function getCookieValue(name: string): string {
  try {
    const match = document.cookie.split('; ').find((c) => c.startsWith(`${name}=`));
    return match ? match.slice(name.length + 1) : '';
  } catch {
    return '';
  }
}

function setDomainCookie(name: string, value: string): void {
  if (!usesCookies()) return;
  document.cookie = `${name}=${encodeURIComponent(value)}; domain=${COOKIE_DOMAIN}; path=/; max-age=${KEY_MAX_AGE}; SameSite=Lax; Secure`;
}

function getKey(name: string): string {
  const cookieVal = getCookieValue(name);
  if (cookieVal) return decodeURIComponent(cookieVal);
  try { return localStorage.getItem(name) ?? ''; } catch { return ''; }
}

export function setWidgetKey(key: string): void {
  setDomainCookie('wm-widget-key', key);
  try { localStorage.setItem('wm-widget-key', key); } catch { /* ignore */ }
}

export function setProKey(key: string): void {
  setDomainCookie('wm-pro-key', key);
  try { localStorage.setItem('wm-pro-key', key); } catch { /* ignore */ }
}

export function isWidgetFeatureEnabled(): boolean {
  return !!getKey('wm-widget-key');
}

export function getWidgetAgentKey(): string {
  return getKey('wm-widget-key');
}

export function getBrowserTesterKeys(): string[] {
  const keys = [getProWidgetKey(), getWidgetAgentKey()];
  const seen = new Set<string>();
  const result: string[] = [];
  for (const raw of keys) {
    const key = raw.trim();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    result.push(key);
  }
  return result;
}

export function getBrowserTesterKey(): string {
  return getBrowserTesterKeys()[0] ?? '';
}

export function isProWidgetEnabled(): boolean {
  return true;
}

export function isProUser(): boolean {
  return true;
}

export function getProWidgetKey(): string {
  return getKey('wm-pro-key');
}

function cleanSpanEntry(storageKey: string, panelId: string): void {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return;
    const spans = JSON.parse(raw) as Record<string, number>;
    if (!(panelId in spans)) return;
    delete spans[panelId];
    if (Object.keys(spans).length === 0) {
      localStorage.removeItem(storageKey);
    } else {
      localStorage.setItem(storageKey, JSON.stringify(spans));
    }
  } catch {
    // ignore
  }
}
