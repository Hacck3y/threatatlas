import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { getVariantForHostname, getVariantFromSearch, getVariantHref } from '../src/config/variant.ts';

describe('variant routing helpers', () => {
  it('reads supported variants from query params', () => {
    assert.equal(getVariantFromSearch('?variant=tech'), 'tech');
    assert.equal(getVariantFromSearch('?variant=commodity'), 'commodity');
    assert.equal(getVariantFromSearch('?variant=unknown'), null);
  });

  it('maps known subdomains to variants', () => {
    assert.equal(getVariantForHostname('tech.threatatlas.app'), 'tech');
    assert.equal(getVariantForHostname('finance.threatatlas.app'), 'finance');
    assert.equal(getVariantForHostname('commodity.threatatlas.app'), 'commodity');
    assert.equal(getVariantForHostname('happy.threatatlas.app'), 'happy');
    assert.equal(getVariantForHostname('threatatlas.vercel.app'), 'full');
  });

  it('builds same-origin variant links', () => {
    assert.equal(
      getVariantHref('tech', 'https://threatatlas.vercel.app/?foo=1'),
      'https://threatatlas.vercel.app/?foo=1&variant=tech',
    );
    assert.equal(
      getVariantHref('full', 'https://threatatlas.vercel.app/?foo=1&variant=tech'),
      'https://threatatlas.vercel.app/?foo=1',
    );
  });
});
