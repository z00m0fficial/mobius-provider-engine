import type { ExecutionResult, ProviderAdapter, TaskEnvelope } from "../types.js";

export class MockAdapter implements ProviderAdapter {
  id = "mock";
  name = "Mock Provider";
  supportsStreaming = false;
  supportsVision = false;
  supportsVoice = false;
  supportsCode = true;

  async execute(task: TaskEnvelope): Promise<ExecutionResult> {
    const started = Date.now();

    return {
      taskId: task.id,
      providerId: this.id,
      status: "completed",
      summary: "Mock provider completed the requested task.",
      output: `Completed: ${task.title}`,
      confidence: 0.9,
      latencyMs: Date.now() - started,
      verified: false,
      verificationNotes: []
    };
  }
}
