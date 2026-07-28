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

## Phase 0: Pre-Flight Validation

Before any repository inspection or documentation work begins, the agent must validate execution feasibility.

### Required Checks
1. **Repository accessibility:** confirm the repository path exists and is readable.
2. **Non-empty repository:** at least one source file, configuration file, or project manifest exists. If the repository is empty or contains only a README, abort with status `ABORT: Empty Repository`.
3. **Scope feasibility:** identify the primary language(s) and confirm at least one recognizable project structure (solution, package.json, Cargo.toml, go.mod, pom.xml, .csproj, Makefile, etc.). If no recognizable structure exists, abort with status `ABORT: Unrecognizable Project Structure`.
4. **Existing documentation detection:** check whether a `MermaidDiagram/` or equivalent output directory already exists. If it does, operate in **incremental mode** — diff proposed changes against existing artifacts rather than overwriting. Record the prior state hash in the audit trail.
5. **Evidence scope estimation:** estimate the number of source files in scope. If the scope exceeds the agent's context capacity, partition into sub-scopes and document the partitioning decision.

### Abort Conditions
If any required check fails with an `ABORT` status, the agent must stop immediately, produce a structured error report (reason, evidence, suggested remedy), and exit. Do not proceed to Phase 1.

### Incremental Mode Rules
When existing documentation is detected:
- Load the current audit trail and diagram selection records.
- Identify which source files have changed since the last documented run (via git diff, timestamps, or hash comparison).
- Limit re-generation to affected diagrams and claims.
- Preserve unchanged, previously validated artifacts.
- Record the incremental scope decision in the audit trail.

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

## Phase 5: Multi-Model Parallel Expert Review
Load:
- `Knowledge/10-ParallelExpertReview.md`
- `Knowledge/17-DiagramPortfolioReview.md`

Launch two parallel review agents using **at least 2 different AI model families**:

```text
Review Agent A (e.g., Claude/Opus):       Review Agent B (e.g., GPT/Codex):
  • Architecture Reviewer                   • Flow Reviewer
  • Evidence Reviewer                       • Test Coverage Reviewer
  • Diagram Portfolio Reviewer              • Mermaid Standards Reviewer
```

Both agents receive identical context (generated documentation, evidence tables, source code) and produce findings independently. No agent sees the other's output until consolidation.

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

## Phase 5A: Confidence Scoring
Load `Knowledge/11-ConfidenceScoring.md`.

Confidence scale:
- `99%`: trivial fix (typo, missing null check, wrong flag, broken reference).
- `90-95%`: straightforward fix requiring some design thought.
- `70-80%`: complex fix, may need research or trade-off decisions.
- `<70%`: hard problem, might be intentional, or requires architectural context. Apply best-evidence recommendation, flag as `LOW_CONFIDENCE_APPLIED` for PR review.

Proof remains mandatory at every confidence level.

---

## Phase 5B: Conflict Resolution and Consolidation
Load `Knowledge/12-ReviewConsolidationAdjudication.md`.

Merge findings from both review agents into:
- Agreement findings (both agents flagged the same issue).
- Unique findings (one agent only).
- Conflicting findings (agents disagree on severity, recommendation, or validity).
- Rejected findings.
- Low-confidence items (flagged for PR review).
- Diagram redundancy clusters.

Deduplicate reviewer findings and separately identify duplicated diagram content. These are different operations.

### Cross-Model Conflict Rules
When Review Agent A and Review Agent B produce conflicting findings:
1. The finding with direct source evidence takes precedence.
2. If both cite direct evidence for contradictory conclusions, escalate to `LOW_CONFIDENCE_APPLIED` and include both perspectives in the PR description.
3. If neither has direct evidence, discard the finding.

---

## Phase 5C: Self-Correction Loop
For every accepted finding and failed validation:
1. Identify the discrepancy.
2. Locate source-of-truth evidence.
3. Correct, narrow, or remove the claim.
4. Regenerate the affected Mermaid diagram.
5. Rebuild evidence tables.
6. Re-run diagram-selection and overlap checks when the correction changes a diagram's purpose or value.
7. Revalidate and recalculate accuracy.

For each consolidated finding requiring remediation:
1. Locate direct source evidence.
2. Decide `Accepted`, `Rejected`, `Auto-Fixed`, `Deferred`, or `Low-Confidence Applied`.
3. Apply fixes only when proof and confidence rules pass.
4. For redundant diagrams, decide `Redesign`, `Merge`, `Remove`, or `Retain with Justification`.
5. Regenerate affected documentation.
6. Rebuild evidence and purpose matrices.
7. Revalidate accuracy and uniqueness.

Repeat until:

```text
Accuracy >= 95%
```

or no additional correction is possible from available evidence and all limitations are documented.

### Auto-Fix Rules
- `>=90%`: auto-fix allowed only with direct evidence and an unambiguous recommendation.
- `70-89%`: conditional fix only after adjudication confirms direct evidence.
- `<70%`: apply best-evidence recommendation and flag for PR review.

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
- Mermaid render validation (parse every diagram with `mermaid.parse()` or equivalent; diagrams that fail to render are invalid regardless of syntax appearance).
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
- Pre-flight validation passed (Phase 0).
- Always-required artifacts exist.
- Every generated diagram has a passed Diagram Selection Record.
- Every generated diagram answers a named engineering question.
- Every node and edge is traceable to evidence.
- Claim validation accuracy is at least 95%, or limitations are documented.
- Parallel expert review is complete.
- Confidence scoring and adjudication are complete.
- High-confidence issues are fixed and revalidated.
- Low-confidence items are documented with evidence and recommendation (not deferred to mid-run human input).
- Pairwise overlap review is complete.
- Every retained diagram is `UNIQUE` or `COMPLEMENTARY`.
- `PARTIALLY REDUNDANT` diagrams have approved justification and correction notes.
- `REDUNDANT` diagrams are merged, redesigned, or removed.
- Mermaid syntax and style rules pass.
- Mermaid render validation passes for every diagram.
- Audit trail is updated.

---

## Execution Checkpoints

The agent must record a checkpoint after completing each phase boundary. A checkpoint includes:
- Phase completed.
- Artifacts generated or modified in this phase.
- Validation gate status (pass/fail with details).
- Cumulative accuracy at this point.
- Timestamp.

Checkpoints enable recovery: if execution is interrupted, resume from the last completed checkpoint rather than restarting from Phase 0. The audit trail must record the interruption and recovery.

---

## Human Interaction Policy

**No human interaction is required or expected during skill execution.** The skill runs autonomously from Phase 0 through Exit Conditions. All decisions — including diagram removal, merging, correction, and pruning — are made by the agent based on evidence and confidence rules.

Human review occurs exclusively at the **pull request level** after the skill completes:
- The PR contains all generated/updated documentation, the audit trail, evidence tables, and the diagram selection record.
- Reviewers inspect the final artifacts, proofs, and diagrams.
- Items previously marked `Requires Human Review` are surfaced in the PR description with their evidence and context so reviewers can adjudicate.
- The agent does not pause, prompt, or wait for human input at any point during execution.

### Low-Confidence Item Handling
Items below 70% confidence are **not blocked** — instead:
1. The agent applies its best-evidence recommendation.
2. The item is flagged in the audit trail with `LOW_CONFIDENCE_APPLIED` status.
3. The PR description lists all low-confidence decisions with evidence, alternative interpretations, and rationale.
4. Human reviewers accept or request changes at PR review time.

## Final Output Contract
The final response must include:
- Artifacts generated, updated, merged, omitted, or removed.
- Diagram-selection summary.
- Validation summary: total, verified, failed, ambiguous, and accuracy.
- Parallel review summary (including which model families were used).
- **Confidence distribution table** — every finding with its assigned confidence level:

```text
| Finding ID | Reviewer | Confidence | Classification | Action Taken |
|------------|----------|------------|----------------|--------------|
| ARCH-001   | Architecture (Agent A) | 99% | Trivial fix | Auto-fixed |
| FLOW-003   | Flow (Agent B) | 92% | Straightforward fix | Auto-fixed |
| EVID-007   | Evidence (Agent A) | 75% | Complex fix | Adjudicated + fixed |
| PORT-002   | Portfolio (Agent A) | 55% | Hard problem | Applied best-evidence, flagged for PR |
```

  Confidence classifications:
  - `99%` = trivial fix (typo, missing null check, wrong flag, broken reference).
  - `90-95%` = straightforward fix requiring some design thought.
  - `70-80%` = complex fix, may need research or trade-off decisions.
  - `<70%` = hard problem, might be intentional, or requires architectural context.

- Diagram overlap and uniqueness summary.
- Corrections and removals applied.
- Low-confidence decisions applied (with evidence and rationale for PR reviewers).
- Render validation results for every diagram.
- Incremental mode summary (if applicable): what changed, what was preserved.
- Final status: `Complete and Distinct`, `Complete with Documented Limitations`, or `Additional Evidence Required`.

## PR Description Contract
When the output is committed to a branch, the PR description must include:
- Summary of all generated/modified documentation.
- **Full confidence table** with every finding, its confidence level, classification, and action taken.
- List of all low-confidence decisions (`<70%`) with evidence, alternatives, and rationale.
- Render validation status for each diagram.
- Link to the audit trail file for full traceability.
- Any items that would benefit from human domain expertise, presented as reviewable decisions (not blockers).
