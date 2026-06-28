import type { ProviderAdapter } from "./types.js";

export class ProviderRegistry {
  private readonly providers = new Map<string, ProviderAdapter>();

  register(provider: ProviderAdapter): void {
    this.providers.set(provider.id, provider);
  }

  get(providerId: string): ProviderAdapter {
    const provider = this.providers.get(providerId);

    if (!provider) {
      throw new Error(`Provider not registered: ${providerId}`);
    }

    return provider;
  }

  list(): ProviderAdapter[] {
    return [...this.providers.values()];
  }
}
