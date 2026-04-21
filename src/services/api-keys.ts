// Removed Pro/Premium API key system - no user API keys needed

export async function createApiKey() {
  return { key: '', createdAt: new Date() };
}

export async function listApiKeys() {
  return [];
}

export async function revokeApiKey() {}

export type ApiKeyInfo = {
  key: string;
  createdAt: Date;
};
