import type { ExecutionResult, ProviderAdapter, TaskEnvelope } from "../types.js";

export class CodexAdapter implements ProviderAdapter {
  id = "codex";
  name = "Codex";
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
      summary: "Codex task envelope prepared for engineering implementation.",
      output: JSON.stringify(task, null, 2),
      confidence: 0.86,
      latencyMs: Date.now() - started,
      verified: false,
      verificationNotes: []
    };
  }
}
