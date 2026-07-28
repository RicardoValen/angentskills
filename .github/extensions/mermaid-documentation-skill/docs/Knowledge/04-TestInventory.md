# 04 - Test Inventory

## Goal
Produce an evidence-based test inventory and map tests to source behaviors and documented flows.

## Test Discovery
Search framework-appropriate test attributes, test base classes, fixtures, test projects, integration-test hosts, contract tests, and end-to-end suites.

## Coverage
Run coverage collection when possible, for example:

```bash
dotnet test [TestProjectPath] --collect:"XPlat Code Coverage" --results-directory ./TestResults
```

If coverage fails, document the command, failure reason, and method-level or test-to-source fallback.

## Required Outputs
1. Concrete test cases by class and method.
2. Source methods, entry points, or behaviors directly exercised.
3. Flow scenario matrix: `HappyPath`, `ValidationFailure`, `DependencyFailure`, `UnexpectedError`, `Retry`, and `Recovery`.
4. Unproven coverage claims and gaps.

## Proof Rules
- A test method name is not proof that a behavior is asserted.
- A mocked call proves interaction expectations only when the assertion is visible.
- Do not claim end-to-end coverage from unit tests.
