# 05 - Documentation Generation

## Required Output Structure

```text
MermaidDiagram/[SolutionName]/
├── Documentation/
│   ├── Overview.md
│   ├── README.md
│   └── SequenceDiagram.md          # conditional
├── Flows/
│   ├── 01-HighLevelProcessFlow.md  # conditional
│   ├── 02-TestInventory.md
│   ├── 03-ProcessingFlow.md        # conditional
│   ├── 04-ArchitectureDiagram.md   # conditional
│   ├── 05-DataFlowDiagram.md       # conditional
│   ├── 05a-StateDiagram.md         # conditional
│   ├── 06-ErrorHandlingRecovery.md # conditional
│   └── 07-IntegrationFlow.md       # conditional
└── Maintenance/
    ├── README.md
    └── Audit-Trail.md
```

## Always-Required Files
- `Documentation/Overview.md`
- `Documentation/README.md`
- `Flows/02-TestInventory.md`
- `Maintenance/README.md`
- `Maintenance/Audit-Trail.md`

## Rule
Conditional diagram files are created only when their Diagram Selection Record is `GENERATE`. Do not create empty diagram files or artificial diagrams to satisfy a file list. Record `OMIT` and `MERGE` decisions in the audit trail with evidence.

## Overview Rule
`Overview.md` is primarily prose and tables. A context diagram may be included only when it adds boundary and actor insight not already supplied by the architecture diagram.
