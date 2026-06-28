import { CodexAdapter } from "./adapters/CodexAdapter.js";
import { ProviderEngine } from "./ProviderEngine.js";
import { ProviderRegistry } from "./ProviderRegistry.js";

const registry = new ProviderRegistry();
registry.register(new CodexAdapter());

const engine = new ProviderEngine(registry);

const event = await engine.executeAsEvent({
  providerId: "codex",
  organizationId: "mobius-technologies",
  correlationId: "corr-demo",
  task: {
    id: "task-demo",
    title: "Create PCP for Founder Mode",
    capability: "mcms",
    objective: "Prepare a governed work package.",
    acceptanceCriteria: ["PCP created"],
    validationCommands: ["npm run build"],
    context: ["RouteSelected"]
  }
});

console.log(JSON.stringify(event, null, 2));
