# 09 - Proof-Based Claim Validation

## Goal
Validate every documentation claim against source evidence, narrow overbroad claims, and remove unsupported content.

## Validation Record
Each record must include:
- Artifact and diagram element ID.
- Exact claim.
- Claim type: node, edge, state, branch, protocol, data, test mapping, or prose.
- Expected proof.
- Evidence strength: `DIRECT`, `CORROBORATING`, `NEGATIVE SEARCH`, or `AMBIGUOUS`.
- Source file and line.
- Evidence snippet.
- Status.
- Correction or removal decision.

## Proof Checks
1. **Existence:** Does the referenced source exist?
2. **Exactness:** Does the snippet prove the exact claim?
3. **Scope:** Is the claim no broader than the evidence?
4. **Direction:** Does evidence prove the arrow direction?
5. **Semantics:** Does evidence prove what the arrow label says?
6. **Ordering:** For sequence claims, is order explicit or unavoidable from control flow?
7. **Negative claims:** Is the searched scope and pattern set recorded?
8. **Alternative interpretation:** Could the evidence reasonably mean something else?

## Accuracy

```text
Accuracy = Verified Claims / Total Claims * 100
```

Only `PASS` records count as verified. Reviewer agreement and confidence do not convert ambiguous evidence into proof.

## Correction Rule
When a claim fails, update or remove the prose and Mermaid element, update the evidence table, re-run overlap analysis if the diagram loses unique content, and revalidate.
