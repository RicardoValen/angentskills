# 15 - Troubleshooting

## Parallel Review Skipped
Problem: Documentation was generated without all six independent reviewers.

Fix: Run Architecture, Flow, Evidence, Test Coverage, Mermaid Standards, and Diagram Portfolio reviewers.

## Confidence Missing
Problem: Findings lack confidence or evidence strength.

Fix: Score every finding and apply the evidence ceiling.

## Consensus Used as Proof
Problem: A claim was accepted because reviewers agreed, but no direct source evidence exists.

Fix: Cap confidence below the auto-fix threshold and mark the claim `Requires Human Review` or remove it.

## Low-Confidence Auto-Fix Applied
Problem: An architectural change was applied below 70% confidence.

Fix: Revert the change unless required to remove an unsupported factual statement.

## Review Findings Not Consolidated
Problem: Findings were listed without deduplication or adjudication.

Fix: Run consolidation while separating duplicate findings from duplicate diagrams.

## Checklist Diagrams Generated
Problem: Every historical diagram file was generated even when source evidence did not justify it.

Fix: Run Diagram Selection. Remove empty or artificial diagrams and record `OMIT` decisions in the audit trail.

## High-Level Process Duplicates Processing Flow
Problem: Both diagrams show the same trigger, stages, branches, and outcome.

Fix: Keep the processing flow. Merge any stakeholder-level summary into `Overview.md`, then remove the high-level process diagram unless a distinct business-stage view is proven.

## Integration Flow Duplicates Architecture
Problem: The integration diagram repeats external nodes and dependency arrows without protocol, operation, message, authentication, or boundary insight.

Fix: Merge proven integration annotations into the architecture diagram and remove the separate integration view.

## Sequence Diagram Duplicates Processing Flow
Problem: The sequence diagram contains the same steps but adds no meaningful ordering, concurrency, callback, or cross-component interaction insight.

Fix: Remove the sequence diagram or redesign it around a named scenario where temporal interaction matters.

## Error Diagram Repeats Happy Path
Problem: The error diagram copies the processing flow and adds a generic failure node.

Fix: Merge local handling into the processing flow. Retain a separate recovery diagram only for non-trivial retry, dead-letter, compensation, fallback, or reprocessing behavior.

## Data Flow Uses Generic Calls
Problem: The data-flow diagram labels arrows `uses`, `calls`, or `processes` and mirrors architecture.

Fix: Name proven data objects and transformations or remove the diagram.

## Artificial State Diagram
Problem: Sequential methods were converted into states without persisted or explicit lifecycle evidence.

Fix: Remove the state diagram and document the behavior as a processing flow.
