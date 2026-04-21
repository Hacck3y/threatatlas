// Removed Pro/Premium panel gating - all panels now available

export enum PanelGateReason {
  NONE = 'NONE',
  FREE_TIER = 'FREE_TIER',
  ANONYMOUS = 'ANONYMOUS',
}

export function getPanelGateReason(..._args: unknown[]) {
  return PanelGateReason.NONE;
}

export function hasPremiumAccess(..._args: unknown[]): boolean {
  return true;
}
