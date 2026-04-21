// Removed Pro/Premium checks - all callers are premium

export async function isCallerPremium(_req?: Request) {
  return true;
}

export async function checkPremiumTier(_userId?: string) {
  return true;
}

