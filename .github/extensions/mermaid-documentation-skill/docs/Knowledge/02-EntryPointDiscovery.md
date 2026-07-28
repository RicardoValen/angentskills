# 02 - Entry Point Discovery

## Goal
Identify executable entry points and triggers with direct source evidence.

## Required Searches
Search framework-appropriate patterns, including:
- Azure Functions: `HttpTrigger`, `TimerTrigger`, `QueueTrigger`, `ServiceBusTrigger`, `BlobTrigger`, `EventHubTrigger`, `EventGridTrigger`, `CosmosDBTrigger`, `OrchestrationTrigger`, `ActivityTrigger`, `DurableClient`.
- Web APIs: controllers, route attributes, endpoint mappings, middleware, GraphQL resolvers, and RPC handlers.
- Workers: hosted services, background loops, consumers, schedulers, and job handlers.
- Messaging: queue, topic, event, webhook, and stream consumers.
- CLI and desktop: `Main`, commands, handlers, startup/bootstrap code.

## Required Evidence
For every entry point record:
- File and line.
- Framework or runtime.
- Trigger or route.
- Input type.
- Called handler or service.
- Output or completion behavior.

## Validation Gate
Every discovered entry point has direct evidence. Projects with no executable entry point are identified as libraries or recorded through a negative-search decision.
