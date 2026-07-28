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
Repository
    ↓
Pre-Flight Validation
    ↓
Repository Discovery + Evidence Inventory
    ↓
Diagram Selection
    ↓
┌─────────────────────────────────┐
│  Mermaid Documentation Agent    │
│  (Generation + Claim Extraction │
│   + Initial Verification)       │
└───────────────┬─────────────────┘
                ↓
    ┌───────────┴───────────┐
    ↓                       ↓
┌───────────────┐   ┌───────────────┐
│ Review Agent A│   │ Review Agent B│
│ (Claude/Opus) │   │ (GPT/Codex)  │
│               │   │               │
│ • Architecture│   │ • Flow        │
│ • Evidence    │   │ • Test Cov.   │
│ • Portfolio   │   │ • Mermaid Std │
└───────┬───────┘   └───────┬───────┘
        └───────────┬───────┘
                    ↓
        Conflict Resolution
        (Consolidation + Adjudication)
                    ↓
           Self-Correction
        (Evidence-driven fixes)
                    ↓
          Validation Loop
     (Render + Accuracy + Overlap)
                    ↓
        Final Documentation
     (Audit Trail + PR Output)
```

### Key Architecture Decisions
- **Two distinct AI model families** run the 6 reviewer roles in parallel to eliminate single-model bias.
- **Conflict resolution** merges, deduplicates, and adjudicates findings from both agents before any correction.
- **Self-correction** only applies after consolidated findings pass confidence and evidence rules.
- **Validation loop** re-checks render validity, accuracy ≥95%, and diagram uniqueness after corrections.
- **No human interaction** until the PR is created with full audit trail and diagrams for review.

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
