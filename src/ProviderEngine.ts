import { verifyExecution } from "./VerificationEngine.js";
import type { ExecutionResult, ProviderExecutedEvent, TaskEnvelope } from "./types.js";
import { ProviderRegistry } from "./ProviderRegistry.js";

export class ProviderEngine {
  constructor(private readonly registry: ProviderRegistry) {}

  async execute(providerId: string, task: TaskEnvelope): Promise<ExecutionResult> {
    const provider = this.registry.get(providerId);
    const result = await provider.execute(task);
    return verifyExecution(task, result);
  }

  async executeAsEvent(input: {
    providerId: string;
    task: TaskEnvelope;
    organizationId: string;
    correlationId: string;
  }): Promise<ProviderExecutedEvent> {
    const result = await this.execute(input.providerId, input.task);

    return {
      id: "evt-provider-" + input.task.id,
      name: "ProviderExecuted",
      version: "1.0",
      timestamp: new Date().toISOString(),
      source: "mobius-provider-engine",
      organizationId: input.organizationId,
      correlationId: input.correlationId,
      payload: result
    };
  }
}
