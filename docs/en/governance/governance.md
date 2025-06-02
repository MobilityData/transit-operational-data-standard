# TODS Governance

This page outlines the policies, procedures, and structures that guide the collaborative and transparent development of the Transit Operational Data Standard ("TODS"). The TODS is a critical framework enabling effective dispatching and operations management through a standardized data schema. This document is intended for all members of the TODS Community, including the TODS Board of Directors, TODS Managers, TODS Contributors, and TODS Stakeholders. By clearly defining the principles, roles, and policies, we aim to facilitate the efficient, fair, and responsible advancement of the TODS Project.

## Principles

The TODS Governance is designed with the following principles in mind:

**Merit**

- Changes should have a clear purpose.
- Consequences of a change should be evaluated from the perspective of different affected stakeholder groups.
- Changes should be prioritized by the community.

**Openness + Transparency**

- Discussion and decisions about changes should be publicly noticed and accessible.
- Change-making process should be straight-forward and easy to follow.
- Change proposals should have a reliable timeline for being decided on and incorporated.
- Each change (or bundled set of changes) should be identified by assigning a new version number.

**Efficiency**

- Change-making process should be simple for simple changes.
- Complex changes should be made with careful consideration.
- Streamlined, purpose-driven change management should be applied to maximize stakeholder efficiency.
- Changes should be straightforward to incorporate by existing TODS Stakeholders.
- Significant changes, especially those which are not backwards compatible with existing datasets, should be limited in number and in frequency in order to limit the number of times existing processes and tools need to be re-engineered.
- A significant change merits a new version number.

## Definitions

### TODS Project

The TODS Project encompasses:

- [TODS Specification](#tods-specification)
- [TODS Tools](#tods-tools)
- [TODS Repository](#tods-repository)
- [TODS Documentation](#tods-documentation)
- [TODS Governance](#tods-governance)

### TODS Governance

Who and how decisions are made about the scope and direction of the TODS Project, including but not limited to the approved [roles and responsibilities](#roles) and the following policies:

- [TODS Change Management and Versioning Policy](#tods-change-management--versioning-policy)
- [TODS Contributor Agreement](#tods-contributor-agreement)
- [TODS Code of Conduct](#tods-code-of-conduct)
- [TODS Use License](#tods-use-license)

### TODS Specification

The data schema documented on the [TODS Repository](#tods-repository) and [TODS Documentation](#tods-documentation) for the purposes of representing planned transit operations for use is dispatching and operations management software.

### TODS Community

The combined members of [TODS Board](#tods-board-of-directors), [TODS Manager](#tods-manager), [TODS Board Coordinator](#tods-board-coordinator), [TODS Contributors](#tods-contributor) and [TODS Stakeholders](#tods-stakeholder).

### TODS Contributor Agreement

Agreement contributors make when contributing to the [TODS Project](#tods-project) as documented at: [`CLA.md`](policies/CLA.md)

### TODS Code of Conduct

Agreement for behavior within the [TODS Community](#tods-community) which must be abided by by all of [TODS Board](#tods-board-of-directors), [TODS Contributors](#tods-contributor) and the [TODS Manager](#tods-manager) and its representatives as documented at [`code-of-conduct.md`](policies/code-of-conduct.md)

### TODS Change Management + Versioning Policy

How content of the [TODS Specification](#tods-specification) may be changed and released as an official [TODS version](policies/change-management-versioning.md#tods-release).

### TODS Documentation

The text and website (and supporting scripts) which describe the [TODS Specification](#tods-specification) and its purpose and usage located on the [TODS Repository](#tods-repository).

### TODS Repository

The version control repository containing the [TODS Specification](#tods-specification) located at:
<https://github.com/cal-itp/operational-data-standard>

### TODS Repository Organization

The version control organization which contains the [TODS Repository](#tods-repository).

!!! warning "To be migrated"

    The TODS Repository is currently located with the Cal-ITP GitHub organization but will be migrated as part of the process of transitioning management to MobilityData.

### TODS Tools

Any scripts or code released within the [TODS Repository Organization](#tods-repository-organization).

### TODS Use License

The [TODS Specification](#tods-specification) is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt) (code) and [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/) (sample data, specification, and documentation) as defined in [`LICENSES`](https://github.com/cal-itp/operational-data-standard/blob/main/LICENSES) file in the [GitHub repository](https://github.com/cal-itp/operational-data-standard).

## Roles

Responsibility for the governance of the TODS Project is divided among the following [roles](#roles) as defined here and fulfilled by the following individuals as noted:

| **Role** | **Who** |
| -------- | ----- |
| [TODS Board](#tods-board-of-directors) | <ul><li>[Joshua Fabian](https://www.linkedin.com/in/jfabi/), [Massachusetts Bay Transportation Authority (MBTA)](https://www.mbta.com/)</li><li>[Matthias Gruetzner](https://www.linkedin.com/in/matthias-gr%C3%BCtzner-6b469b187/), [INIT](https://www.initse.com/)</li><li>[Guilhem Hammel](https://www.linkedin.com/in/guilhemhammel/), [Giro](https://www.giro.ca/en-us/)</li><li>[Erik Jensen](https://www.linkedin.com/in/erik-jensen), [Chicago Transit Authority (CTA)](https://www.transitchicago.com/)</li><li>[Jeffrey Kessler](https://www.linkedin.com/in/jeffkess/), [Keolis Commuter Services](https://www.keolisna.com/)</li></ul> |
| [TODS Board Coordinator](#tods-board-coordinator) | [Scott Frazier](https://github.com/safrazier17) |
| [TODS Manager](#tods-manager) | [MobilityData](https://mobilitydata.org) |
| [TODS Program Manager](#tods-program-manager) | [Cristhian Hellion](https://github.com/Cristhian-HA), [MobilityData](https://mobilitydata.org) |
| [TODS Contributors](#tods-contributor) |  TBD |
| [TODS Stakeholders](#tods-stakeholder) | Anyone interested in or could be directly affected by the TODS Project. |

## TODS Owner

The TODS Project is collectively owned and overseen by the [TODS Board of Directors](#tods-board-of-directors).

## TODS Board of Directors

The TODS Board of Directors ("TODS Board") governs and collectively owns the [TODS Project](#tods-project).

- The Board MAY select an individual or organization to serve as the [TODS Manager](#tods-manager) to handle the day-to-day management of the [TODS Specification](#tods-specification) and [TODS Project](#tods-project).
- The [TODS Board](#tods-board-of-directors) MUST execute a memorandum of understanding with the [TODS Manager](#tods-manager) (if one is chosen) that outlines the roles, responsibilities, and limitations of the management role.
- The [TODS Board](#tods-board-of-directors) MAY change the [TODS Manager](#tods-manager) at any time for any reason.
- In the event that there is not an active agreement with an [TODS Manager](#tods-manager) the [TODS Board](#tods-board-of-directors) MUST assume the [TODS Manager](#tods-manager) responsibilities.
- The [TODS Board](#tods-board-of-directors) SHOULD ask the [TODS Manager](#tods-manager) to select a new [TODS Program Manager](#tods-program-manager) if there is continued failure to perform and meet expectations.
- [TODS Board](#tods-board-of-directors) membership MUST be determined by the [Board Composition Policy](policies/board-composition.md).
- [TODS Board](#tods-board-of-directors) decisionmaking should be consistent with the [Board Decisionmaking Policy](policies/board-decisionmaking.md).

TODS Board [meetings](board-meetings.md) and [actions](actions.md).

## TODS Board Coordinator

Chosen by the TODS Board, this individual is responsible for coordinating the actions and activities of the [TODS Board](#tods-board-of-directors).

- The Board Coordinator MUST schedule, agendize and arrange for Board meetings in consultation with the TODS Board Chair and [TODS Program Manager](#tods-program-manager).
- The Board Coordinator MUST conduct votes by the [TODS Board](#tods-board-of-directors) and document results.
- The Board Coordinator MUST communicate with the [TODS Manager](#tods-manager) / [TODS Program Manager](#tods-program-manager) as needed.

## TODS Manager

Responsible for the daily management of the TODS Project at the direction of the [TODS Board](#tods-board-of-directors) including the:

- [TODS Change Management Process](policies/change-management-versioning.md),
- [TODS Repository](#tods-repository),
- TODS Project resource management, and
- Internal and external project communications.

- The [TODS Manager](#tods-manager) MAY be an individual or organization.
- The [TODS Manager](#tods-manager) MUST assign an individual as the [TODS Program Manager](#tods-program-manager).
- The [TODS Manager](#tods-manager) MUST communicate the name of the [TODS Program Manager](#tods-program-manager) to the [TODS Board](#tods-board-of-directors) in writing and notify the Board of any change in this assignment in writing.
- The [TODS Manager](#tods-manager) SHOULD select a new [TODS Program Manager](#tods-program-manager) if asked to do so by the TODS Board.

## TODS Program Manager

Serves as the main contact between the [TODS Board](#tods-board-of-directors) and the [TODS Manager](#tods-manager).

## TODS Contributor

Individuals apply to become Contributors by acknowledging and agreeing to the [TODS Contributor Agreement](#tods-contributor-agreement) and [TODS Code of Conduct](#tods-code-of-conduct).

- An TODS Contributor MUST abide by the [TODS Code of Conduct](#tods-code-of-conduct) or face removal.
- An TODS Contributor MAY create issues, discussions, and pull requests in the [TODS Repository](#tods-repository).
- An TODS Contributor MAY vote in decisions on changes to the TODS spec and other aspects of TODS.

## TODS Stakeholder

Anyone interested in or could be directly affected by the TODS Project. Interested parties may register for the [TODS distribution list](https://groups.google.com/g/ods-working-group).

## Document History

### Initial Version

- Initial release of the TODS Governance document.
- Establishment of governance principles, roles, policies, and procedures.
