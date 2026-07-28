# 03 - Integration Discovery

## Goal
Find external systems, infrastructure dependencies, and integration contracts with direct evidence.

## Required Searches
Search for HTTP/RPC clients, service buses, queues, topics, event streams, databases, object storage, caches, secrets, identity providers, telemetry, email, file transfer, third-party SDKs, and infrastructure definitions.

## Required Record
For each integration document:
- External system or infrastructure component.
- Type and ownership boundary.
- Protocol or transport.
- Operation, route, queue, topic, table, container, or resource name when proven.
- Authentication/configuration reference.
- Direction and sync/async behavior.
- File, line, and evidence snippet.

## Proof Rules
- Package references alone prove dependency availability, not runtime use.
- Configuration keys alone do not prove an integration is active.
- A generic HTTP client call does not prove the business identity of the destination without endpoint or typed-client evidence.

## Validation Gate
Every documented integration has direct source evidence. Categories with no results have a reproducible negative-search record.
