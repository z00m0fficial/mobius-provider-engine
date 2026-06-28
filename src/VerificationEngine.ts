import type { ExecutionResult, TaskEnvelope } from "./types.js";

export function verifyExecution(task: TaskEnvelope, result: Omit<ExecutionResult, "verified" | "verificationNotes">): ExecutionResult {
  const notes: string[] = [];

  if (!result.output.trim()) {
    notes.push("Provider output is empty.");
  }

  if (result.confidence < 0.7) {
    notes.push("Provider confidence is below Enterprise Alpha threshold.");
  }

  if (task.acceptanceCriteria.length === 0) {
    notes.push("Task has no acceptance criteria.");
  }

  const verified = result.status === "completed" && result.output.trim().length > 0 && result.confidence >= 0.7;

  if (verified) {
    notes.push("Execution passed baseline verification.");
  }

  return {
    ...result,
    verified,
    verificationNotes: notes
  };
}
