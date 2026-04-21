// Removed Pro/Premium checkout system - no payments

export function capturePendingCheckoutIntentFromUrl() {
  return null;
}

export function startCheckout(..._args: unknown[]): Promise<void> {
  return Promise.resolve();
}

export function resumePendingCheckout(..._args: unknown[]): Promise<void> {
  return Promise.resolve();
}

export function initCheckoutOverlay(..._args: unknown[]): void {}

export function destroyCheckoutOverlay() {}

export function showCheckoutSuccess() {}

export function consumePostCheckoutFlag() {
  return false;
}
