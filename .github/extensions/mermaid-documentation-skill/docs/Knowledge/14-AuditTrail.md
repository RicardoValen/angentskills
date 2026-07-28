# 14 - Audit Trail

## Required Audit Sections

### Discovery Summary
Target scope, projects/modules, entry points, integrations, persistence, state indicators, recovery patterns, tests, exclusions, and search scope.

### Diagram Selection Summary

| Candidate | Engineering Question | Trigger Evidence | Decision | Reason |
|---|---|---|---|---|

Record `GENERATE`, `MERGE`, `OMIT`, or `REQUIRES HUMAN REVIEW`.

### Artifact Summary
Generated, updated, merged, omitted, and removed files. Do not represent omitted diagrams with empty placeholder files.

### Diagram Purpose Matrix

| Diagram | Audience | Abstraction | Relationship Semantics | Unique Insight | Result |
|---|---|---|---|---|---|

### Pairwise Overlap Matrix

| Diagram A | Diagram B | Node Overlap | Semantic Edge Overlap | Unique Difference | Decision |
|---|---|---:|---:|---|---|

### Claim Validation Summary
Total claims, verified claims, failed claims, ambiguous claims, missing evidence, and accuracy.

### Parallel Review Summary
Finding counts by reviewer, accepted/rejected counts, duplicate findings, conflicts, redundancy clusters, removals, and human-review candidates.

### Confidence Distribution

| Range | Count |
|---|---:|
| 99-100% | [N] |
| 90-98% | [N] |
| 70-89% | [N] |
| <70% | [N] |

### Correction and Pruning Summary
Files updated, claims corrected, diagrams redesigned, merged, or removed, and accuracy/uniqueness before and after.

### Human Review Candidates

| Finding ID | Confidence | Reason | Evidence |
|---|---:|---|---|

### Final Status
Use one of:
- `Complete and Distinct`
- `Complete with Documented Limitations`
- `Additional Evidence Required`
