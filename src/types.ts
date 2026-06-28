export interface TaskEnvelope {
  id: string;
  title: string;
  capability: string;
  objective: string;
  acceptanceCriteria: string[];
  validationCommands: string[];
  context: string[];
}

export interface ExecutionResult {
  taskId: string;
  providerId: string;
  status: "completed" | "failed";
  summary: string;
  output: string;
  confidence: number;
  latencyMs: number;
  verified: boolean;
  verificationNotes: string[];
}

export interface ProviderAdapter {
  id: string;
  name: string;
  supportsStreaming: boolean;
  supportsVision: boolean;
  supportsVoice: boolean;
  supportsCode: boolean;
  execute(task: TaskEnvelope): Promise<ExecutionResult>;
}

export interface ProviderExecutedEvent {
  id: string;
  name: "ProviderExecuted";
  version: "1.0";
  timestamp: string;
  source: "mobius-provider-engine";
  organizationId: string;
  correlationId: string;
  payload: ExecutionResult;
}
