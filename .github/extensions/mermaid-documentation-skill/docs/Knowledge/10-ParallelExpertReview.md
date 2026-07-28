# 10 - Parallel Expert Review

## Objective
Challenge generated documentation using independent review perspectives before final quality verification.

Reviewers work independently and do not see other reviewer findings until consolidation.

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
