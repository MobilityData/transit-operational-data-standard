# TODS Implementation & Tooling Guide

This guide provides technical reference and implementation workflows for producers, consumers, and software vendors integrating the **Transit Operational Data Standard (TODS v2.1.0)**.

---

## 1. Architecture Overview

A complete TODS dataset operates as an operational layer over public GTFS, consisting of two complementary parts:

1. **Supplement Files (`*_supplement.txt`):** Overlays on standard GTFS files (`trips.txt`, `stops.txt`, `stop_times.txt`, `routes.txt`, `calendar.txt`, `calendar_dates.txt`) to add non-revenue operations, deadheads, internal depots, and crew calendars.
2. **TODS-Specific Files:** Standalone operational definitions for crew duties (`run_events.txt`), driver bid assignments (`employee_run_dates.txt`), rolling stock fleet rosters (`vehicles.txt`), and vehicle block assignments (`vehicle_assignments.txt`).

---

## 2. Supplement Evaluation Engine

When processing TODS feeds, consumers evaluate supplement files against their base GTFS counterparts using primary key joins:

- **Row Removal (`TODS_delete = 1`):** If a matching primary key exists in the base GTFS file and `TODS_delete` is `1`, the row is removed.
- **Field Patching:** If a matching primary key exists and `TODS_delete` is omitted or empty, all non-blank columns in the supplement overwrite the corresponding GTFS values. Unmentioned columns preserve their base GTFS values.
- **Row Insertion:** If the primary key does not exist in the base GTFS file, the row is added in its entirety.

---

## 3. Open-Source Tooling & Model Context Protocol (MCP)

### [`tods-mcp`](https://github.com/aminamos/tods-mcp)

An open-source Model Context Protocol server, automated validator, and CLI for TODS v2.1.0:

- **Automated Validation:** Checks primary key uniqueness, foreign key consistency against supplemented tables, time sequence integrity (`start_time <= end_time`), and operator non-overlapping trip rules.
- **Supplement Merge Engine:** Programmatically applies supplement files onto GTFS datasets and outputs detailed diff audit logs.
- **Crew Run Inspector:** Decodes `run_events.txt` into chronological duty timelines with duty hour calculations.
- **CLI & MCP Modes:** Use directly via command line or connect to AI coding agents (Antigravity, Claude Desktop, Cursor, Claude Code) via the Model Context Protocol stdio transport.

#### Quick CLI Usage
```bash
npx tods-mcp inspect ./path/to/tods-feed.zip
npx tods-mcp validate ./path/to/tods-feed.zip
npx tods-mcp runs ./path/to/tods-feed.zip --run Run101
```

---

## 4. AI Agent Skill (`SKILL.md`)

For teams utilizing LLMs and autonomous agents for schedule analysis, bid package verification, or feed validation, a dedicated agent skill is available in the repository at [`skills/tods/SKILL.md`](../../skills/tods/SKILL.md).

The skill equips agents with:
- Formal primary and composite key mappings.
- Operational duty rules (pieces of work, report/clear times, reliefs, mid-trip handoffs).
- Step-by-step troubleshooting workflows for scheduling discrepancies.
