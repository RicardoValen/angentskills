# 17 - Diagram Portfolio Review

## Objective
Review the complete diagram set as one architecture product. Ensure every diagram is proven, answers a distinct engineering question, and enables a reader decision not already enabled by another artifact.

## Diagram Purpose Record
For every diagram record:
- Diagram name.
- Engineering question.
- Intended audience.
- Abstraction level.
- Primary entities.
- Relationship semantics.
- Unique information introduced.
- Information intentionally excluded.
- Closest overlapping diagram.
- Reason both are needed.
- Final uniqueness result.

## Uniqueness Results
- `UNIQUE`: answers a distinct engineering question.
- `COMPLEMENTARY`: shares components but communicates different semantics.
- `PARTIALLY REDUNDANT`: useful unique content exists, but duplication is excessive.
- `REDUNDANT`: no meaningful additional insight.
- `WRONG DIAGRAM TYPE`: content belongs in another view.
- `NOT APPLICABLE`: no proven pattern justifies the view.

## Pairwise Comparison
At minimum compare:
- Overview/context versus architecture.
- Architecture versus integration.
- Architecture versus data flow.
- High-level process versus processing flow.
- High-level process versus sequence.
- Processing flow versus sequence.
- Processing flow versus error handling.
- Data flow versus state.
- Integration flow versus sequence.

Compare:
1. Engineering question.
2. Audience and abstraction.
3. Node/concept overlap.
4. Edge semantic overlap.
5. Ordering or concurrency insight.
6. Data semantics.
7. State semantics.
8. Failure and recovery semantics.
9. Boundary and contract insight.
10. Reader decision enabled.

## Overlap Guidance
- More than 70% equivalent concepts **and equivalent edge meaning**: presume `REDUNDANT`.
- 40-70% equivalent content: require explicit justification and identify unique insight.
- Less than 40%: generally acceptable when purpose is clear.

These percentages guide review; semantic judgment is controlling.

## Relationship Semantics
The following are not duplicates even when they connect the same components:
- `API depends on OrderService` — static architecture.
- `API sends CreateOrderCommand to OrderService` — temporal interaction.
- `OrderPayload moves from API to OrderService` — data movement.
- `API retries OrderService after timeout` — recovery behavior.

## Removal Decision
Recommend removal when:
- The diagram's main conclusion is available from another retained artifact.
- Arrow semantics are equivalent, not merely component names.
- No distinct audience or decision-support need exists.
- Unique valid claims can be preserved elsewhere.

## Final Diagram Decisions
Assign one:
- `ACCEPT`.
- `ACCEPT WITH MINOR CHANGES`.
- `REVISE`.
- `MERGE WITH ANOTHER DIAGRAM`.
- `SPLIT INTO FOCUSED DIAGRAMS`.
- `REMOVE AS REDUNDANT`.
- `REQUIRES HUMAN REVIEW`.

## Portfolio Exit Gate
Every retained diagram must be `UNIQUE` or `COMPLEMENTARY`. Partially redundant diagrams require an accepted correction plan. Redundant or wrong-type diagrams must be merged, redesigned, or removed.
