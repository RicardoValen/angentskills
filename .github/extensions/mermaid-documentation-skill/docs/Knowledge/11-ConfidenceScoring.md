# 11 - Confidence Scoring

## Objective
Assign fix confidence from 0-100% to every reviewer finding after evaluating evidence quality.

## Confidence Scale

| Confidence | Classification | Description |
|---|---|---|
| 99% | Trivial fix | Typo, missing null check, wrong flag, broken reference, exact duplicate, or other deterministic correction with direct evidence. |
| 90-95% | Straightforward fix | Clear implementation/documentation mismatch or redundant artifact with direct proof and one unambiguous remedy. Requires some design thought. |
| 70-80% | Complex fix | Multiple reasonable remedies, incomplete evidence, or architectural trade-off. May need research or trade-off decisions. |
| <70% | Hard problem | Might be intentional, requires architectural context, requirements are unclear, or proof is insufficient. Applied with best-evidence reasoning and flagged for PR review. |

## Evidence Ceiling
- No direct evidence: confidence cannot exceed 69%.
- Ambiguous evidence: confidence cannot exceed 79%, even with reviewer agreement.
- Negative-search evidence supports omission only when scope, patterns, and exclusions are documented.
- Confidence never converts corroborating evidence into direct proof.

## Enforcement Rules

### >=90%
Auto-fix allowed only when:
- Direct source evidence exists.
- Recommendation is unambiguous.
- The change does not invent business intent.
- For diagram removal, all unique claims are preserved elsewhere or proven unnecessary.

### 70-89%
Conditional fix only after adjudication and independent verification.

### <70%
Apply best-evidence recommendation. Mark the change with `LOW_CONFIDENCE_APPLIED` in the audit trail. Include the item in the PR description with full evidence context, alternative interpretations, and rationale for the chosen action. Human reviewers adjudicate at PR review time.

## Voting Adjustment
- 3+ reviewers agree: confidence may increase up to 10 points, capped by the evidence ceiling.
- 2 reviewers agree: confidence unchanged.
- 1 reviewer only: reduce 10 points unless direct evidence independently proves the issue.

## Required Fields
Every finding includes severity, initial confidence, evidence strength, voting adjustment, final confidence, recommendation, and auto-fix eligibility.
