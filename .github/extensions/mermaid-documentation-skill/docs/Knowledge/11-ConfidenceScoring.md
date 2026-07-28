# 11 - Confidence Scoring

## Objective
Assign fix confidence from 0-100% to every reviewer finding after evaluating evidence quality.

## Confidence Scale

| Confidence | Classification | Description |
|---|---|---|
| 99-100% | Trivial proven fix | Syntax error, broken reference, exact duplicate, or other deterministic correction with direct evidence. |
| 90-98% | Straightforward proven fix | Clear implementation/documentation mismatch or redundant artifact with direct proof and one unambiguous remedy. |
| 70-89% | Complex or ambiguous fix | Multiple reasonable remedies, incomplete evidence, or architectural trade-off. |
| <70% | Human review candidate | Intentional behavior is possible, requirements are unclear, or proof is insufficient. |

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
No automatic modification. Preserve the current artifact and add `Requires Human Review`, unless removal is necessary to eliminate an unsupported factual claim.

## Voting Adjustment
- 3+ reviewers agree: confidence may increase up to 10 points, capped by the evidence ceiling.
- 2 reviewers agree: confidence unchanged.
- 1 reviewer only: reduce 10 points unless direct evidence independently proves the issue.

## Required Fields
Every finding includes severity, initial confidence, evidence strength, voting adjustment, final confidence, recommendation, and auto-fix eligibility.
