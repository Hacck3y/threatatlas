#!/usr/bin/env node
/**
 * Submit all threatatlas.app URLs to IndexNow after deploy.
 * Run once after deploying the IndexNow key file:
 *   node scripts/seo-indexnow-submit.mjs
 *
 * IndexNow requires all URLs in one request to share the same host.
 * Submits separate batches per subdomain.
 */

const KEY = 'a7f3e9d1b2c44e8f9a0b1c2d3e4f5a6b';

const BATCHES = [
  {
    host: 'www.threatatlas.app',
    urls: [
      'https://www.threatatlas.app/',
      'https://www.threatatlas.app/pro',
      'https://www.threatatlas.app/blog/',
      'https://www.threatatlas.app/blog/posts/what-is-worldmonitor-real-time-global-intelligence/',
      'https://www.threatatlas.app/blog/posts/five-dashboards-one-platform-worldmonitor-variants/',
      'https://www.threatatlas.app/blog/posts/track-global-conflicts-in-real-time/',
      'https://www.threatatlas.app/blog/posts/cyber-threat-intelligence-for-security-teams/',
      'https://www.threatatlas.app/blog/posts/osint-for-everyone-open-source-intelligence-democratized/',
      'https://www.threatatlas.app/blog/posts/natural-disaster-monitoring-earthquakes-fires-volcanoes/',
      'https://www.threatatlas.app/blog/posts/real-time-market-intelligence-for-traders-and-analysts/',
      'https://www.threatatlas.app/blog/posts/monitor-global-supply-chains-and-commodity-disruptions/',
      'https://www.threatatlas.app/blog/posts/satellite-imagery-orbital-surveillance/',
      'https://www.threatatlas.app/blog/posts/live-webcams-from-geopolitical-hotspots/',
      'https://www.threatatlas.app/blog/posts/prediction-markets-ai-forecasting-geopolitics/',
      'https://www.threatatlas.app/blog/posts/command-palette-search-everything-instantly/',
      'https://www.threatatlas.app/blog/posts/worldmonitor-in-21-languages-global-intelligence-for-everyone/',
      'https://www.threatatlas.app/blog/posts/ai-powered-intelligence-without-the-cloud/',
      'https://www.threatatlas.app/blog/posts/build-on-worldmonitor-developer-api-open-source/',
      'https://www.threatatlas.app/blog/posts/worldmonitor-vs-traditional-intelligence-tools/',
      'https://www.threatatlas.app/blog/posts/tracking-global-trade-routes-chokepoints-freight-costs/',
    ],
  },
  { host: 'tech.threatatlas.app', urls: ['https://tech.threatatlas.app/'] },
  { host: 'finance.threatatlas.app', urls: ['https://finance.threatatlas.app/'] },
  { host: 'happy.threatatlas.app', urls: ['https://happy.threatatlas.app/'] },
];

const ENDPOINTS = [
  'https://api.indexnow.org/IndexNow',
  'https://www.bing.com/IndexNow',
  'https://searchadvisor.naver.com/indexnow',
  'https://search.seznam.cz/indexnow',
  'https://yandex.com/indexnow',
];

async function submit(endpoint, host, urlList) {
  const keyLocation = `https://${host}/${KEY}.txt`;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host, key: KEY, keyLocation, urlList }),
  });
  return { endpoint, host, status: res.status, ok: res.ok };
}

for (const { host, urls } of BATCHES) {
  console.log(`\n[${host}] (${urls.length} URLs)`);
  const results = await Promise.allSettled(ENDPOINTS.map(ep => submit(ep, host, urls)));
  for (const r of results) {
    if (r.status === 'fulfilled') {
      console.log(`  ${r.value.ok ? '✓' : '✗'} ${r.value.endpoint.replace('https://', '')} → ${r.value.status}`);
    } else {
      console.log(`  ✗ error: ${r.reason}`);
    }
  }
}
