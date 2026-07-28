# 16 - Evidence-Based Diagram Selection

## Objective
Select the smallest set of diagrams that proves and communicates the repository's architecture and behavior without duplication.

## Selection Record
For each candidate, record:

```yaml
Candidate: Integration Flow
EngineeringQuestion: "How does the system communicate across external boundaries?"
Audience: "Developers and operators"
AbstractionLevel: "System integration"
TriggerEvidence:
  - file: path/to/client.cs
    line: 42
    snippet: "direct evidence"
ClosestOverlap: Architecture Diagram
UniqueInsightExpected: "Protocol, operation, direction, authentication, and async contract"
Decision: GENERATE
Reason: "Three distinct external contracts would clutter the architecture view."
```

## Candidate Rules

### Context or Overview Diagram
Generate only when actors, system boundary, and major responsibilities provide stakeholder insight not already clear from prose and architecture.

### Architecture Diagram
Generate when there are multiple components, layers, projects, deployable units, infrastructure resources, or meaningful static dependencies. Omit for a trivial single-unit library when prose is clearer.

### High-Level Process Flow
Generate only when source evidence supports business or operational stages distinct from internal execution. Prefer a concise section in `Overview.md` for a simple linear process.

### Processing Flow
Generate when an executable entry point has multiple meaningful stages, branches, loops, or outcomes.

### Sequence Diagram
Generate only when temporal ordering across participants is a principal insight, such as asynchronous messaging, callbacks, orchestration, transaction boundaries, or a representative cross-component scenario. Do not generate for a simple linear method chain already shown by processing flow.

### Data-Flow Diagram
Generate when named data moves, transforms, persists, crosses trust boundaries, or changes ownership. Generic service calls do not qualify.

### State Diagram
Generate only for explicit lifecycle states and transitions.

### Error Handling and Recovery Diagram
Generate only for non-trivial recovery behavior. Merge local exception handling into processing documentation.

### Integration Flow
Generate when external contracts have enough protocol, operation, message, authentication, or asynchronous detail to require a dedicated view. For one or two simple dependencies, annotate the architecture diagram instead.

## Default Removal Candidates
The following are not default artifacts in v3.2:
1. **High-Level Process Flow** — merge into `Overview.md` unless it proves distinct business stages.
2. **Sequence Diagram** — omit unless time-ordered collaboration is essential.
3. **Integration Flow** — merge into architecture unless contract detail would clutter or obscure it.
4. **Error Handling and Recovery** — merge into processing unless recovery is non-trivial.
5. **Data Flow** — omit unless named data semantics are proven.
6. **State Diagram** — omit unless explicit lifecycle states are proven.

## Evidence for Omission
An omission decision must include:
- Search scope.
- Search patterns or inspected constructs.
- Relevant findings or zero-result statement.
- Closest retained artifact.
- Why a new diagram would be unsupported or redundant.

## Prohibited Selection Logic
Do not generate a diagram because:
- A template exists.
- A previous version required it.
- A file count is expected.
- The same components can be rearranged into another Mermaid syntax.
- The architecture would ideally contain a pattern that the code does not implement.
