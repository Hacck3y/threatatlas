// Removed Pro/Premium entitlement checks - all features available

export async function checkEntitlement() {
  return true;
}

export function getRequiredTier() {
  return 0; // no tier requirement
}
