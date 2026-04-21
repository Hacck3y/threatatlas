// Removed Pro/Premium billing system - no subscription management needed

export function initSubscriptionWatch(..._args: unknown[]): Promise<void> {
  return Promise.resolve();
}
export function destroySubscriptionWatch() {}

export function getSubscription() {
  return { status: 'active', planKey: 'free' };
}

export function openBillingPortal() {}

export function onSubscriptionChange(_callback: (sub: SubscriptionInfo | null) => void) {
  return () => {};
}

export type SubscriptionInfo = {
  status: 'active' | 'on_hold' | 'cancelled' | 'expired';
  planKey: string;
};
