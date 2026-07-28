# 12 - Review Consolidation and Adjudication

## Objective
Merge parallel reviewer findings, resolve conflicts, separate duplicate findings from duplicate diagrams, and decide which corrections or removals are proven.

## Consolidation Categories
- Agreement Findings.
- Unique Findings.
- Conflicting Findings.
- Rejected Findings.
- Human Review Candidates.
- Diagram Redundancy Clusters.

## Important Distinction
- **Duplicate finding:** multiple reviewers reported the same defect.
- **Duplicate diagram:** multiple artifacts communicate substantially equivalent engineering meaning.

Do not treat these as the same consolidation task.

## Adjudication Process
For each consolidated finding:
1. Locate direct source evidence.
2. Verify that evidence proves the exact finding.
3. Determine validity.
4. Apply the evidence ceiling and voting adjustment.
5. Decide `Accepted`, `Rejected`, `Auto-Fixed`, `Deferred`, or `Requires Human Review`.
6. If accepted, correct, narrow, merge, redesign, or remove the affected artifact.
7. Rebuild evidence, diagram-purpose, and overlap matrices.
8. Revalidate and update the audit trail.

## Diagram Removal Tests
A diagram can be removed when all are true:
- It is `REDUNDANT` or `WRONG DIAGRAM TYPE`.
- Its valid claims are preserved by another retained artifact or are not decision-relevant.
- Removal does not hide a distinct audience need.
- The proof and final confidence satisfy auto-fix rules.

## Remediation Rules
- Final confidence `>=90%`: auto-fix with direct evidence and clear recommendation.
- `70-89%`: adjudicated change with independent validation.
- `<70%`: no automatic architectural change.

## Audit Requirement
Record accepted, rejected, fixed, merged, removed, deferred, and human-review findings in `Maintenance/Audit-Trail.md`.
