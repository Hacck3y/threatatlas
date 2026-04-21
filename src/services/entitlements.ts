// Removed Pro/Premium entitlement system - all features now available to all users

export function initEntitlementSubscription(..._args: unknown[]): Promise<void> {
  return Promise.resolve();
}
export function destroyEntitlementSubscription() {}
export function resetEntitlementState() {}

export function isEntitled(..._args: unknown[]): boolean { return true; }
export function hasTier(..._args: unknown[]): boolean { return true; }
export function hasFeature(..._args: unknown[]): boolean { return true; }
export function getEntitlementState() {
  return {
    planKey: 'free',
    features: {
      tier: 1,
      apiAccess: true,
      apiRateLimit: Infinity,
      maxDashboards: Infinity,
      prioritySupport: false,
      exportFormats: ['json', 'csv'],
    },
    validUntil: Infinity,
  };
}

export function onEntitlementChange(_callback?: () => void) {
  return () => {};
}

export function shouldReloadOnEntitlementChange(..._args: unknown[]): boolean { return false; }
