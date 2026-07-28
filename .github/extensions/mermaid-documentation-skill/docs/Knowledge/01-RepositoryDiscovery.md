# 01 - Repository Discovery

## Goal
Identify repository structure, target solution, runtime boundaries, and the exact evidence scope before generating documentation.

## Required Actions
1. List solution, project, workspace, package, module, deployment, and infrastructure files.
2. Determine whether the repository is single-solution, multi-solution, or polyglot.
3. Select and document the target scope.
4. List all projects or modules in scope.
5. Classify executable, library, test, schema, deployment, and infrastructure units.
6. Identify generated code and third-party code that must be excluded or separately labeled.
7. Build the initial evidence inventory with file paths and line ranges.
8. Record search scope so negative findings can be reproduced.

## Proof Rules
- Do not classify a project from its name alone when project configuration or entry-point evidence is available.
- Do not claim a deployment boundary without deployment, hosting, project, or configuration evidence.
- Record ambiguous boundaries as `Requires Human Review`.

## Validation Gate
- Target scope identified.
- All in-scope units classified with evidence.
- Exclusions documented.
- Multi-solution repositories filtered to the selected scope.
- Discovery and search scope ready for the audit trail.
