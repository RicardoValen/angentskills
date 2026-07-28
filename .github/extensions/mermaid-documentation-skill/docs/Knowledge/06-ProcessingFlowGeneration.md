# 06 - Processing Flow Generation

## Goal
Generate evidence-proven processing-flow diagrams for executable entry points or materially distinct pipelines.

## Generation Trigger
Generate when direct evidence shows:
- An executable entry point.
- At least two meaningful processing stages, or a material branch, loop, or outcome.
- Internal execution detail not adequately shown by the overview or architecture diagram.

## Complex Solution Rule
When 3+ entry points, more than 3 integrations, or multiple distinct flows exist, make `03-ProcessingFlow.md` an index and create focused `03a`, `03b`, `03c`, etc.

## Edge Proof
Every arrow must be supported by a call, branch, event publication, persistence operation, or explicit orchestration definition. Label arrows with the proven action.

## Merge Rule
Merge simple error handling into the processing flow when recovery is only local catch/log/rethrow behavior and does not form a separate operational lifecycle.

## Validation Gate
Every processing stage and branch has direct evidence, and the diagram contributes internal execution insight beyond the high-level process or sequence view.
