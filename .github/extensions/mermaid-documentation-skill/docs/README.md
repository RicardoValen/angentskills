# Mermaid Documentation Skill v3.2

An evidence-first agentic skill package for generating, validating, reviewing, pruning, and maintaining Mermaid documentation for code repositories.

## What Changed in v3.2

1. **Proof-Based Checks** — every node, edge, branch, state, protocol, data object, and test mapping must be supported by direct evidence.
2. **Evidence-Based Diagram Selection** — diagram files are generated only when repository evidence justifies them.
3. **Diagram Portfolio Review** — a sixth independent reviewer checks purpose, overlap, and unique insight across the complete set.
4. **Diagram Pruning** — redundant views can be merged or removed instead of preserved as mandatory placeholders.
5. **Evidence Ceiling for Confidence** — reviewer agreement cannot raise an unsupported finding into an auto-fix.

## Default Diagram Policy
The skill no longer requires every historical diagram type.

Usually retained when proven:
- Architecture diagram.
- Focused processing flows.
- Test inventory.

Generated only when uniquely useful:
- High-level process flow.
- Sequence diagram.
- Data-flow diagram.
- State diagram.
- Error-handling and recovery diagram.
- Integration flow.

The strongest default removal candidates are high-level process, sequence, and integration diagrams because they frequently duplicate overview, processing, and architecture views. Their omission must still be justified through evidence and overlap review.

## Core Loop

```text
Repository Discovery
↓
Evidence Inventory
↓
Diagram Selection
↓
Documentation Generation
↓
Claim Extraction
↓
Proof-Based Verification
↓
Self-Correction
↓
Six-Way Parallel Expert Review
↓
Confidence Scoring with Evidence Ceiling
↓
Consolidation and Adjudication
↓
Diagram Merge/Removal/Redesign
↓
Quality Verification
↓
Audit Trail
↓
Exit Conditions
```

## Package Structure

```text
MermaidDocumentationSkillV32/
├── README.md
├── Skill.md
├── ExecutionLoop.md
├── manifest.json
├── Knowledge/
│   ├── 01-RepositoryDiscovery.md
│   ├── 02-EntryPointDiscovery.md
│   ├── 03-IntegrationDiscovery.md
│   ├── 04-TestInventory.md
│   ├── 05-DocumentationGeneration.md
│   ├── 06-ProcessingFlowGeneration.md
│   ├── 07-DataFlowGeneration.md
│   ├── 08-ErrorHandlingRecovery.md
│   ├── 09-ClaimValidation.md
│   ├── 10-ParallelExpertReview.md
│   ├── 11-ConfidenceScoring.md
│   ├── 12-ReviewConsolidationAdjudication.md
│   ├── 13-MermaidStandards.md
│   ├── 14-AuditTrail.md
│   ├── 15-Troubleshooting.md
│   ├── 16-DiagramSelectionEvidence.md
│   └── 17-DiagramPortfolioReview.md
├── Templates/
│   ├── CodeEvidenceTable.md
│   ├── DiagramPurposeMatrix.md
│   ├── DiagramSelectionRecord.md
│   ├── PairwiseOverlapMatrix.md
│   ├── ReviewerFindingTemplate.md
│   ├── ReviewConsolidationTemplate.md
│   └── AuditTrailTemplate.md
└── Examples/
    └── InvocationExamples.md
```

## Intended Usage
Use this package as a coding-agent instruction set. The agent must be able to inspect repository content, cite exact source evidence, create or update Markdown, validate Mermaid, and maintain an audit trail.
