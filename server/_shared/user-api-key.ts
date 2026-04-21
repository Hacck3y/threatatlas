export interface UserApiKeyValidationResult {
  userId: string;
}

export async function validateUserApiKey(_apiKey?: string | null): Promise<UserApiKeyValidationResult | null> {
  return null;
}
