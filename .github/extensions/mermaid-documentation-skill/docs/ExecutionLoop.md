# Mermaid v3.2 Execution Loop Contract

## Objective
Generate and maintain a concise, evidence-proven Mermaid documentation portfolio. The repository is the source of truth. Documentation is complete only when every retained diagram is accurate, useful, non-redundant, and justified by source evidence.

## Core Principles

### 1. Code and Configuration First
Generate claims from inspected code, configuration, tests, deployment definitions, schemas, and infrastructure files. Do not infer business logic from naming alone.

### 2. Proof Required
Every claim must cite direct evidence:

```text
{file}:{line} - {evidence snippet}
```

A valid proof must support the exact scope of the claim. A nearby class name or generic method call is not proof of a broader architectural behavior.

When evidence is unavailable, use `Not Found`, `Requires Human Review`, or remove the unsupported claim. `Not Applicable` is used in the audit decision record, not as an empty generated diagram.

### 3. Evidence Strength
Classify evidence as:
- `DIRECT`: the implementation explicitly proves the claim.
- `CORROBORATING`: another source supports a directly proven claim.
- `NEGATIVE SEARCH`: a documented search across a defined scope found no matching implementation.
- `AMBIGUOUS`: evidence permits multiple interpretations.

Only `DIRECT` evidence can independently authorize an automatic architecture or behavioral correction. Corroborating evidence may strengthen but cannot replace direct evidence.

### 4. Diagram Selection Before Generation
Choose diagrams only after building an evidence inventory. Every candidate diagram requires:
- A named engineering question.
- A defined audience and abstraction level.
- Direct evidence for its principal content.
- At least one insight not adequately delivered by another retained diagram.

### 5. Unique Insight
Repeated components are allowed; repeated meaning is not. Two diagrams may show the same services only when their edges communicate materially different semantics such as dependency, time order, data movement, state transition, integration contract, or recovery behavior.

### 6. Continuous Validation and Self-Correction
Validate during generation. When a claim or diagram fails, correct or remove the affected content, rebuild evidence tables, repeat overlap review, and revalidate.

### 7. Independent Expert Challenge
Generated documentation must be challenged by independent architecture, flow, evidence, test, Mermaid, and diagram-portfolio reviewers before consolidation.

### 8. Confidence-Based Remediation
Score every finding. Confidence controls remediation only after proof requirements pass.

---

## Phase 1: Repository Discovery
Load:
- `Knowledge/01-RepositoryDiscovery.md`
- `Knowledge/02-EntryPointDiscovery.md`
- `Knowledge/03-IntegrationDiscovery.md`
- `Knowledge/04-TestInventory.md`

### Validation Gate
Do not continue until solution boundaries, projects, entry points, integrations, tests, persistence patterns, state indicators, recovery patterns, and evidence scope are documented or supported by a negative-search record.

---

## Phase 1A: Diagram Evidence and Selection
Load `Knowledge/16-DiagramSelectionEvidence.md`.

Create a Diagram Selection Record for every candidate diagram type. A record must contain:
- Candidate diagram.
- Engineering question.
- Trigger evidence.
- Closest overlapping view.
- Unique insight expected.
- Decision: `GENERATE`, `MERGE`, `OMIT`, or `REQUIRES HUMAN REVIEW`.
- Evidence references and search scope.

No Mermaid diagram may be generated before this gate passes.

---

## Phase 2: Documentation Generation
Load `Knowledge/05-DocumentationGeneration.md` and only the generation modules selected in Phase 1A.

### Always-Required Artifacts

#### Documentation
- `Documentation/Overview.md`
- `Documentation/README.md`

#### Verification
- `Flows/02-TestInventory.md`

#### Maintenance
- `Maintenance/README.md`
- `Maintenance/Audit-Trail.md`

These files may contain tables and prose without Mermaid when no diagram is justified.

### Evidence-Triggered Diagram Artifacts
Generate only when the corresponding selection record is `GENERATE`:
- `Documentation/SequenceDiagram.md`
- `Flows/01-HighLevelProcessFlow.md`
- `Flows/03-ProcessingFlow.md` and optional `03a`, `03b`, `03c`, etc.
- `Flows/04-ArchitectureDiagram.md`
- `Flows/05-DataFlowDiagram.md`
- `Flows/05a-StateDiagram.md`
- `Flows/06-ErrorHandlingRecovery.md`
- `Flows/07-IntegrationFlow.md`

Do not create empty placeholder diagram files. Record omitted or merged views in the audit trail.

---

## Phase 3: Claim Extraction
For every generated artifact, extract claims into a validation inventory.

Claim categories include:
- Components and responsibilities.
- Dependency direction.
- Entry points and routes.
- Calls, messages, and ordering.
- Protocols and operations.
- Data objects, transformations, and persistence.
- States and transition triggers.
- Retry, timeout, circuit-breaker, fallback, dead-letter, and recovery behavior.
- Test-to-behavior mappings.

Every Mermaid node and edge must map to at least one validation record.

---

## Phase 4: Proof-Based Code Verification
Load `Knowledge/09-ClaimValidation.md`.

For every claim:
1. Locate direct evidence.
2. Confirm that the snippet proves the exact claim.
3. Check whether the diagram broadens the evidence.
4. Compare documentation against implementation.
5. Mark `PASS`, `FAIL`, `NOT FOUND`, `AMBIGUOUS`, or `REQUIRES HUMAN REVIEW`.
6. Calculate claim accuracy.

```text
Accuracy = Verified Claims / Total Claims * 100
```

Unsupported claims are not counted as verified because several reviewers agree with them.

---

## Phase 5: Self-Correction Loop
For every failed validation:
1. Identify the discrepancy.
2. Locate source-of-truth evidence.
3. Correct, narrow, or remove the claim.
4. Regenerate the affected Mermaid diagram.
5. Rebuild evidence tables.
6. Re-run diagram-selection and overlap checks when the correction changes a diagram's purpose or value.
7. Revalidate and recalculate accuracy.

Repeat until:

```text
Accuracy >= 95%
```

or no additional correction is possible from available evidence and all limitations are documented.

---

## Phase 5A: Parallel Expert Review
Load:
- `Knowledge/10-ParallelExpertReview.md`
- `Knowledge/17-DiagramPortfolioReview.md`

Required independent reviewers:
- Architecture Reviewer.
- Flow Reviewer.
- Evidence Reviewer.
- Test Coverage Reviewer.
- Mermaid Standards Reviewer.
- Diagram Portfolio Reviewer.

Reviewers evaluate the same generated documentation and evidence independently before consolidation.

Each finding must include:
- Finding ID.
- Reviewer.
- Category.
- Severity.
- Confidence.
- Evidence.
- Finding.
- Recommendation.
- Auto-fix eligibility.

Diagram Portfolio findings also include the compared diagram and uniqueness status.

---

## Phase 5B: Confidence Scoring
Load `Knowledge/11-ConfidenceScoring.md`.

Confidence scale:
- `99-100%`: trivial, directly proven correction.
- `90-98%`: straightforward, directly proven correction.
- `70-89%`: complex or ambiguous correction requiring adjudication.
- `<70%`: human review candidate; do not auto-fix.

Proof remains mandatory at every confidence level.

---

## Phase 5C: Review Consolidation
Load `Knowledge/12-ReviewConsolidationAdjudication.md`.

Consolidate findings into:
- Agreement findings.
- Unique findings.
- Conflicting findings.
- Rejected findings.
- Human review candidates.
- Diagram redundancy clusters.

Deduplicate reviewer findings and separately identify duplicated diagram content. These are different operations.

---

## Phase 5D: Adjudication, Remediation, and Pruning
For each consolidated finding:
1. Locate direct source evidence.
2. Decide `Accepted`, `Rejected`, `Auto-Fixed`, `Deferred`, or `Requires Human Review`.
3. Apply fixes only when proof and confidence rules pass.
4. For redundant diagrams, decide `Redesign`, `Merge`, `Remove`, or `Retain with Justification`.
5. Regenerate affected documentation.
6. Rebuild evidence and purpose matrices.
7. Revalidate accuracy and uniqueness.

### Auto-Fix Rules
- `>=90%`: auto-fix allowed only with direct evidence and an unambiguous recommendation.
- `70-89%`: conditional fix only after adjudication confirms direct evidence.
- `<70%`: no automatic modification.

### Removal Rule
A diagram may be removed automatically when:
- Its unique-insight result is `REDUNDANT`.
- All of its validated claims are already communicated by another retained artifact.
- Removal does not eliminate a required audience or decision-support need.
- The removal decision has direct documentation evidence and final confidence `>=90%`.

---

## Phase 6: Quality Verification
Load `Knowledge/13-MermaidStandards.md` and `Knowledge/17-DiagramPortfolioReview.md`.

Verify:
- Mermaid syntax and style.
- Evidence traceability.
- Cross-diagram consistency.
- Diagram purpose.
- Pairwise overlap.
- Unique insight.
- Reviewer adjudication.
- Audit completeness.

---

## Phase 7: Audit Trail Update
Load `Knowledge/14-AuditTrail.md`.

Record:
- Discovery and searches.
- Diagram-selection decisions.
- Generated, merged, omitted, and removed artifacts.
- Claim validation.
- Reviewer findings.
- Confidence distribution.
- Pairwise overlap results.
- Adjudication decisions.
- Corrections and pruning.
- Human review items.
- Final status.

---

## Exit Conditions
The agent may stop only when every condition is true:
- Always-required artifacts exist.
- Every generated diagram has a passed Diagram Selection Record.
- Every generated diagram answers a named engineering question.
- Every node and edge is traceable to evidence.
- Claim validation accuracy is at least 95%, or limitations are documented.
- Parallel expert review is complete.
- Confidence scoring and adjudication are complete.
- High-confidence issues are fixed and revalidated.
- Low-confidence items are marked for human review.
- Pairwise overlap review is complete.
- Every retained diagram is `UNIQUE` or `COMPLEMENTARY`.
- `PARTIALLY REDUNDANT` diagrams have approved justification and correction notes.
- `REDUNDANT` diagrams are merged, redesigned, or removed.
- Mermaid syntax and style rules pass.
- Audit trail is updated.

## Final Output Contract
The final response must include:
- Artifacts generated, updated, merged, omitted, or removed.
- Diagram-selection summary.
- Validation summary: total, verified, failed, ambiguous, and accuracy.
- Parallel review summary.
- Confidence distribution.
- Diagram overlap and uniqueness summary.
- Corrections and removals applied.
- Human review candidates.
- Final status: `Complete and Distinct`, `Complete with Documented Limitations`, or `Additional Evidence Required`.
