# 08 - Error Handling and Recovery

## Goal
Generate an error-handling and recovery diagram only when failure behavior forms a meaningful path beyond the normal processing flow.

## Required Discovery
Search exception handling, result/error types, retry policies, timeouts, circuit breakers, fallbacks, dead-letter behavior, poison-message handling, compensating actions, idempotency, alerts, telemetry, and manual recovery operations.

## Generation Trigger
Generate `06-ErrorHandlingRecovery.md` when direct evidence proves one or more non-trivial recovery mechanisms, such as:
- Bounded retries or backoff.
- Circuit breaker, fallback, or timeout coordination.
- Dead-letter or poison-message routing.
- Compensation or rollback.
- Persisted recovery state.
- Automated or manual reprocessing.

## Merge/Omit Rule
- Merge simple local exception handling into the processing-flow documentation.
- Omit the separate diagram when there is only catch/log/rethrow behavior.
- Never invent recovery because robust handling would be desirable.

## Effectiveness Assessment
Rate only from proven behavior and mapped tests:
- `GOOD`: critical paths have demonstrated recovery and test coverage.
- `ADEQUATE`: partial recovery or material untested paths.
- `NEEDS IMPROVEMENT`: critical external failures have no demonstrated handling.
