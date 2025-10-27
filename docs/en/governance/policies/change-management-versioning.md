# TODS Versioning and Change Management Policy

!!! tip

    When capitalized in this document, the words “MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and "OPTIONAL" refer to their respective definitions in [RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119).

## Definitions

!!! tip

    Definitions of various roles such as [TODS Board][board], [TODS Manager][manager], and [TODS Contributors][contributors] refer to their respective definitions in the [TODS Governance][governance].

The following definitions build on the overall [TODS Governance][governance] definitions and exist within the purpose of the TODS Versioning and Change Management Policy.

### TODS Release

An official version of the [TODS Specification][tods-spec] which can be referenced in perpetuity by a version number. The process by which a new release is made and determination of a version number is discussed below.

Each change to normative content in the main branch of the TODS Repository MUST be considered a new release and assigned a version number.

### Normative Content

Normative Content is the prescriptive part of a standard. It sets the rules to be followed in order to be evaluated as compliant with the standard, and from which no deviation is permitted.

### Non-Normative Content

Non-normative content is the non-prescriptive, or ‘descriptive’, part of a standard. This may include analogies, synonyms, explanations, illustrations, context, and examples. In the event non-normative content contradicts normative content, the normative content is to be followed.

### Issue Working Group

Tasked by the [TODS Manager][manager] with resolving a specific issue with respect to the [TODS Specification][tods-spec].

### Urgent Needs

Urgent needs MUST pose significant risks to security, compliance, or the operational integrity of stakeholder systems. These MAY include necessary revisions due to legal mandates, critical security vulnerabilities, or severe technical inaccuracies that directly impair system functionalities. Urgent needs SHOULD necessitate an implementation timeline which is inconsistent with the normal change-making process.

## Change-Making Process

This change-making process covers [all normative content changes](#normative-content) to the [TODS Specification][tods-spec] and occurs in the following stages:

| Stage | When | Who (led by) |
|-----|-----|-----|
| Need Identification | Anytime | Anyone |
| Need Prioritization | At least annually | Contributors ([TODS Manager][manager]) |
| Initial Proposal Development  | Prioritized quarter | Issue Working Group ([TODS Manager][manager]) |
| Contributor Review + Adoption | Pull request for proposed change submitted after consensus in the Working Group | Issue Working Group ([TODS Manager][manager]) |
| Implementation | When decision made to consensus achieved on proposal | Issue Working Group ([TODS Manager][manager]) |
| Released | Next release | [TODS Manager][manager] |

Each of these stages is discussed in more detail below.

### Need Identification

Initiated when Any TODS Contributor identifies a need that should be addressed in the [TODS Specification][tods-spec].

Actions:

* An TODS Contributor submits an issue to the TODS Repository which identifies the need that they would like addressed and a rough assessment of its addressable audience.
* An [TODS Manager][manager] triages issue and asks for more detail from the Contributor if needed.
* An [TODS Manager][manager] determines if issue resolution would require a normative change.

Resolution: [TODS Manager][manager] puts issue into consideration for next issue prioritization

### Prioritization

Initiated when the [TODS Manager][manager] starts a development cycle after or near the end of a quarterly release.

Actions:

* [TODS Manager][manager] to solicit feedback from TODS Contributors on which needs to prioritize.
* [TODS Manager][manager] to propose a set of needs that the community will focus on resolving based on feedback and available community capacity.
* [TODS Board][board] will approve a set of needs to focus on based on [TODS Manager][manager]’s proposal and TODS Contributors’ feedback.

Resolution: [TODS Manager][manager] will create a Milestone for the next release in the TODS Repository and fill it with the issues the [TODS Board][board] prioritized.

### Initial Proposal Development

Initiated [for each need] when [TODS Manager][manager], in consultation with the [TODS Board][board] and [TODS Contributors][contributors], convenes an Issue Working Group to address a prioritized issue or set of interrelated issues.

Actions:

* [TODS Manager][manager] convenes an Issue Working Group to develop a resolution to the issue.
Working Group members document discussion points about approach in the relevant github issue.
* While consensus will be sought, if the Issue Working Group members cannot come to a unanimous agreement about the solution, the [TODS Manager][manager] may ask the [TODS Board][board] to make a decision after hearing feedback from various perspectives.
* Issue Working Group members update the schema and documentation according to the proposal on a feature branch.

Resolution: Issue Working Group submits a pull request to the develop branch.

### Contributor  Review + Adoption

Initiated [for each need] when: [TODS Manager][manager] invites TODS Stakeholders outside of the Working Group to review and comment on the proposal

Actions:

* The [TODS Manager][manager] MUST invite people outside of the Working Group to review and comment on the proposal for a minimum of two weeks, making sure [TODS Contributors][contributors] with different roles and backgrounds have had a chance to consider it.
* The [TODS Manager][manager] MUST review the proposal for consistency with the [Open Standards](https://www.interoperablemobility.org/definitions) definition maintained by the [Mobility Data Interoperability Principles](https://interoperablemobility.org).
* The [TODS Manager][manager] MUST offer tools, services and assistance to any [TODS Contributor][contributors] who is unable to fluidly interact with the tooling used in the review process.
* A minimum of three [TODS Contributors][contributors] outside the Working Group MUST publicly comment on each proposal for it to move forward and indicate a score of:
    * Accepted;
    * Accepted with minor changes; or
    * Substantially revised.
* If 100% of reviewers accept, the proposal is adopted without need for further discussion.
* If any reviewer accepts with minor changes, the suggested change must be considered by the Working Group.
* If the Working Group decides to incorporate the edited proposal will be re-circulated for some period time greater than 72 hours and previous reviewers notified. If nobody objects to the change in that time, it is adopted.
* If the Working Group does not agree with the suggested change, they may appeal to the [TODS Board][board] to make a final decision about its necessity.
* If any reviewer requests substantial changes, they must also agree to work with the working group on developing an alternative solution to the need.
* If the working group believes the substantial change request is invalid or without merit, they may appeal to the [TODS Board][board] to make a final decision about if revisions are necessary.

Resolution: Change as represented in the pull request from the feature branch is approved and merged into the develop branch.

### Full Implementation

Initiated [for each need](#need-identification) when: Final change proposal is approved - although initial work can begin ahead of this.

Actions:

* [TODS Manager][manager] MUST ensure the relevant accompanying documentation fleshed out.
* [TODS Manager][manager] MUST ensure Changelog fully documented.
* [TODS Manager][manager] MUST ensure sample datasets updated or added that support the new feature.
* [TODS Manager][manager] MUST ensure any relevant updates to continuous integration and testing are completed.
* [TODS Manager][manager] MAY make any number of [pre-release(s)](#pre-releases).
* [TODS Manager][manager] MUST identify and ensure resolution of relevant conflicts among proposals as overseen by the [TODS Board][board] or their designee.

Resolution: Requirements for [release](#releases) are met.

### Release

Initiated: On a schedule maintained by the [TODS Manager][manager], at least annually.

Actions:  See [Release Management](#releases).

## Expedited Change Management

This section outlines an expedited process for implementing changes in response to urgent needs which are critical to maintaining the security, compliance, or operational functionality of [TODS Specification][tods-spec] balancing rapid response with informed, transparent decision-making.

### Process

1. **Identification**: Stakeholders SHOULD promptly report urgent needs to the [TODS Manager][manager], detailing the problem and its potential impact.
2. **Rapid Evaluation**: The [TODS Manager][manager] MUST convene a group of at least 2 TODS Contributors of their choosing to swiftly assess the issue's urgency and validity.
    * If it meets their threshold for an urgent need, they forward a list of their proposed Urgent Working Group Members to the [TODS Board][board].
    * The Urgent Working Group Members SHOULD contain representatives of TODS Contributors affected stakeholder groups.
    * The Urgent Working Group size SHOULD be at least three and reflect the scale of the problem and also need for agile decision making.  
    * The [TODS Board][board] MAY object to their characterization of the need as urgent.
    * The [TODS Board][board] MAY make changes to the Urgent Working Group members.
    * If the [TODS Board][board] fails to respond within 48 hours, the Urgent Working Group MAY proceed with their implicit approval.
3. **Solution Identification**: The Urgent Working Group, managed by the [TODS Manager][manager], MUST identify a solution that meets the urgent need and document it as a PR to the `main` branch of the TODS Repository – outside the normal release cycle.  
4. **Decision-Making**: A supermajority (two-thirds) of the Urgent Working Group members MUST approve the proposed change to meet the urgent need. If the decision is deadlocked, the decision is escalated to the [TODS Board][board].
5. **Implementation**: The rest of the implementation and release cycle mirrors the main change-making process.

## Versions and Release Management

### Releases

Each change to normative content in the main branch of the TODS Repository MUST be considered a new release and assigned a version number.

* Each release MUST contain one or more changes to normative content which have been approved through the change-making process.
* Each release MUST be reviewed and approved in the TODS Repository by 2+ members of the [TODS Board][board], or their designees, for accuracy and consistency with the intent of the change.
* Each release MUST be tagged with its version number.
* Each release MUST have documentation available.
* Each release MUST have an entry in `CHANGELOG.md`.
* Each release MUST be specified as a release on Github.
* Each release MUST be noticed to any TODS mailing lists or discussion groups.
* Each release SHOULD have sample datasets (real or exemplary) which cover the normative changes in the release.

#### Pre-releases

Each approved change to normative content in the develop branch of the TODS Repository MAY be considered a pre-release and assigned a pre-release version number.

* Pre-releases MAY be made in order to evaluate and work on incrementally-approved changes.
* Each pre-release MUST contain one or more changes to normative content which have been approved through the change-making process.
* Each pre-release MUST be reviewed and approved in GitHub by 1+ members of the [TODS Board][board], or their designees, for accuracy and consistency with the changes’ intent.
* Pre-releases MUST be tagged with an appropriate pre-release version number:
   * Pre-releases that have incorporated all the normative changes for the target-release MUST have a beta version number;
   * otherwise, they MUST receive an alpha version number.
* Each pre-release MUST have documentation available.
* Each pre-release MUST have an entry in `CHANGELOG.md`.
* Each pre-release MAY be specified as a pre-release on Github.

### Release Schedule

Barring significant unexpected events:

* Major releases SHOULD be limited to no more than once per year;
* Minor releases MAY be expected at least annually.

### Version Numbering

TODS Releases MUST be reflected by an incremental version number based on a semantic versioning policy as detailed below.

* Release versions MUST be named with incremental increases to the format `<MAJOR>.<MINOR>` where:
   * Major versions reflect backwards-incompatible changes
   * Minor versions change the normative content in a way that is backwards-compatible

Pre-release versions MUST be named with the `<MAJOR>.<MINOR>` of their target release name and appended with either:
`-alpha.<NUMBER>` where NUMBER starts at 1 and increases by 1 for each alpha release of that target release.
`-beta.<NUMBER>` where NUMBER starts at 1 and increases by 1 for each beta release of that target release.

Non-normative changes MUST NOT increment the TODS Version Number even though they are represented by updates in the `main` branch of the [TODS Repository][repository].

[governance]: ../governance.md
[tods-spec]: ../governance.md#tods-specification
[repository]: ../governance.md#tods-repository
[manager]: ../governance.md#tods-manager
[board]: ../governance.md#tods-board-of-directors
[contributors]: ../governance.md#tods-contributor
