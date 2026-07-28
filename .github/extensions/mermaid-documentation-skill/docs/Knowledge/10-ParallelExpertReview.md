# 10 - Parallel Expert Review

## Objective
Challenge generated documentation using independent review perspectives before final quality verification.

Reviewers work independently and do not see other reviewer findings until consolidation.

## Multi-Model Requirement

To ensure genuine independence and reduce single-model blind spots, the parallel review phase **must use at least two distinct AI models** from different model families. Reviewers must be distributed across models so that no single model's biases dominate the findings.

### Minimum Configuration
- **At least 2 different model families** (e.g., Claude + GPT, Claude + Gemini, GPT + Gemini).
- **Each model family must handle at least 2 reviewer roles** to provide meaningful coverage.
- The same prompt, context, and review instructions are provided to each model — only the underlying model differs.

### Rationale
A single model reviewing its own output (even in different "roles") shares the same training biases, hallucination patterns, and blind spots. Multi-model review catches:
- Model-specific hallucinations that one family accepts but another flags.
- Structural assumptions one model makes that another challenges.
- Evidence gaps one model overlooks due to its reasoning style.

### Recommended Distribution

| Model Family A (e.g., Claude Opus) | Model Family B (e.g., GPT Codex) |
|---|---|
| Architecture Reviewer | Flow Reviewer |
| Evidence Reviewer | Test Coverage Reviewer |
| Diagram Portfolio Reviewer | Mermaid Standards Reviewer |

The exact assignment may vary based on available models, but the constraint is:
- No single model family handles more than 4 of the 6 reviewers.
- At least 2 reviewers run on a different model family from the generation model.

### Execution Pattern
Launch reviewers in parallel using different model instances:

```text
Agent 1 — Model Family A (high reasoning effort):
  Roles: Architecture, Evidence, Diagram Portfolio
  Input: full generated documentation + evidence tables + code context

Agent 2 — Model Family B (high reasoning effort):
  Roles: Flow, Test Coverage, Mermaid Standards
  Input: same full context as Agent 1
```

Both agents receive identical context and return findings independently. Findings are consolidated only after both complete.

### Fallback
If only one model family is available (e.g., environment constraints), the agent must:
1. Document the limitation in the audit trail as `SINGLE_MODEL_REVIEW`.
2. Run reviewers in **two separate, isolated passes** with different system prompts emphasizing adversarial vs. constructive perspectives.
3. Flag in the PR description that multi-model review was unavailable.

## Required Reviewers

### Architecture Reviewer
Focus on:
- Solution and deployment boundaries.
- Project and component responsibilities.
- Layering and dependency direction.
- Missing or unsupported components and integrations.
- Architectural risks and contradictions.
- Architecture diagram accuracy.

### Flow Reviewer
Focus on:
- Trigger-to-completion behavior.
- Processing stages and branches.
- Ordering.
- Error, retry, and recovery paths.
- State transitions.
- Data movement.

### Evidence Reviewer
Focus on:
- Unsupported or overbroad claims.
- Missing direct evidence.
- Invalid file or line references.
- Evidence that does not prove arrow semantics.
- Hallucinated implementation details.
- Negative claims without reproducible search scope.

### Test Coverage Reviewer
Focus on:
- Test inventory completeness.
- Test-to-source mappings.
- Unsupported coverage claims.
- Missing failure, retry, recovery, state, and integration tests.
- Coverage collection failures not documented.

### Mermaid Standards Reviewer
Focus on:
- Mermaid syntax.
- `flowchart TB` compliance.
- `stateDiagram-v2` compliance.
- Unique node identifiers.
- Required text contrast.
- No style directives inside state diagrams.
- Legibility and diagram size.

### Diagram Portfolio Reviewer
Load `Knowledge/17-DiagramPortfolioReview.md` and focus on:
- Named purpose and audience for every diagram.
- Appropriate abstraction level.
- Pairwise semantic overlap.
- Distinct engineering insight.
- Wrong diagram types.
- Candidates to merge, split, redesign, or remove.
- Whether omitted diagrams are supported by evidence-based selection decisions.

## Finding Format

```yaml
FindingId: PORT-001
Reviewer: Diagram Portfolio Reviewer
Category: Diagram Redundancy
Severity: High
Confidence: 96
Diagram: Flows/07-IntegrationFlow.md
ComparedWith: Flows/04-ArchitectureDiagram.md
Evidence:
  - file: path/to/source.cs
    line: 142
    snippet: "direct source evidence"
Finding: "The integration diagram repeats architecture edges without contract semantics."
Recommendation: "Merge the proven integration annotations into the architecture diagram and remove the separate view."
UniquenessStatus: REDUNDANT
AutoFixEligibility: true
```

## Proof Enforcement
A reviewer may identify a suspicion without direct proof, but the finding must be marked ambiguous and cannot authorize an automatic change. Reviewer consensus does not replace source evidence.
