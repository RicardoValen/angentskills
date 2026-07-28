# Mermaid Documentation Skill

## Version
3.2 - Evidence-first diagram portfolio edition.

## Purpose
Generate, validate, review, correct, and maintain Mermaid documentation for code repositories using source code, configuration, tests, and infrastructure definitions as the source of truth.

## Trigger Conditions
Use this skill when the user asks to:
- Generate Mermaid documentation for a code repository or solution.
- Validate existing Mermaid documentation against code.
- Create architecture, process, sequence, integration, data-flow, state, error-handling, or test-coverage views.
- Review whether a diagram portfolio is accurate, useful, and non-redundant.
- Maintain `MermaidDiagram/[SolutionName]` documentation after code changes.

## Primary Instruction
Always execute `ExecutionLoop.md` as the controlling behavior contract.

Generation, validation, diagram selection, parallel review, adjudication, correction, pruning, and audit updates are one loop. Do not stop after creating diagrams or finding issues. Continue until exit conditions pass or unresolved items are explicitly documented.

## Non-Negotiable Rules
- Code, configuration, tests, and infrastructure definitions are the source of truth.
- Every diagram node, edge, state, branch, protocol, data object, and behavioral claim requires direct evidence or an explicit unresolved status.
- A confidence score never substitutes for evidence.
- Diagram files are evidence-triggered, not checklist-triggered.
- Do not generate a diagram merely to preserve a fixed artifact count.
- Every generated diagram must answer a named engineering question and contribute a distinct insight.
- Redundant diagrams must be merged, redesigned, or removed.
- Absence of a diagram is recorded in the audit trail; do not create empty `Not Applicable` diagram files.
- Parallel review findings must be scored with confidence before remediation.
- Findings below 70% confidence are applied with best-evidence reasoning and flagged for PR review — they do not block execution.
- Mermaid flow diagrams use `flowchart TB`; actual state machines use `stateDiagram-v2`.
- Every Mermaid style directive with a light fill must include `color:#000`.
- Every generated Mermaid diagram must pass render validation (parseable without errors).
- The audit trail records discovery, evidence searches, diagram-selection decisions, claim validation, parallel review, overlap analysis, adjudication, corrections, removals, remaining gaps, and final status.
- **No human interaction during execution.** The skill runs fully autonomously. Human review happens at the PR level after completion.
- Pre-flight validation must pass before any repository analysis begins.
- Existing documentation must be detected and handled incrementally, not overwritten blindly.
