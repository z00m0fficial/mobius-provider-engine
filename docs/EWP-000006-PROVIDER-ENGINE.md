# EWP-000006: Provider Engine

## Mission

Turn RouteSelected into provider execution while keeping Mobius model-agnostic.

## Input

- RouteSelected
- TaskEnvelope

## Output

- ProviderExecuted
- ExecutionResult

## Acceptance

- Providers implement a shared adapter contract.
- Provider Engine can execute a task envelope.
- Baseline verification runs before ProviderExecuted is emitted.
- Codex adapter exists as an Enterprise Alpha stub.
- Mock adapter exists for local tests.
