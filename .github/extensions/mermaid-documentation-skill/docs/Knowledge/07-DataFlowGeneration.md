# 07 - Data and State Flow Generation

## Goal
Generate data-flow or state diagrams only when source evidence proves data movement, transformation, persistence, or lifecycle transitions.

## Data-Flow Trigger
Generate `05-DataFlowDiagram.md` when evidence identifies:
- Named inputs or payloads.
- A transformation, mapping, enrichment, validation, or serialization step.
- A read/write boundary, data store, trust boundary, or external destination.
- Data-specific insight not conveyed by architecture relationships.

Arrows must name data, not generic actions such as `uses` or `calls`.

## State-Diagram Trigger
Generate `05a-StateDiagram.md` only when an entity or process has explicit states and event-driven transitions. Search enums, constants, persisted status fields, transition methods, guards, and workflow definitions.

Use `stateDiagram-v2` for actual state machines. Do not convert ordinary sequential code into artificial states. Do not use style directives in state diagrams.

## Omission Rule
Omit the data-flow or state diagram when evidence does not prove its distinct semantics. Record the negative-search scope in the audit trail.
