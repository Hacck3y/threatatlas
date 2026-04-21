export interface EntitlementFeatures {
  tier: number;
  apiAccess: boolean;
  apiRateLimit: number;
  maxDashboards: number;
  prioritySupport: boolean;
  exportFormats: string[];
}

export interface Entitlements {
  planKey: string;
  features: EntitlementFeatures;
  validUntil: number;
}

const OPEN_ACCESS_ENTITLEMENTS: Entitlements = {
  planKey: 'open_access',
  features: {
    tier: 2,
    apiAccess: true,
    apiRateLimit: Number.POSITIVE_INFINITY,
    maxDashboards: Number.POSITIVE_INFINITY,
    prioritySupport: false,
    exportFormats: ['json', 'csv', 'pdf'],
  },
  validUntil: Number.POSITIVE_INFINITY,
};

export async function getEntitlements(_userId?: string | null): Promise<Entitlements> {
  return OPEN_ACCESS_ENTITLEMENTS;
}

export function getRequiredTier(_pathname?: string | null): number | null {
  return null;
}

export async function checkEntitlement(
  _request?: Request,
  _pathname?: string | null,
  _corsHeaders?: Record<string, string>,
): Promise<Response | null> {
  return null;
}
