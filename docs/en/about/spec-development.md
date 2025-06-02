# History + Initial Specification Development Process

The California Integrated Travel Project (Cal-ITP) developed the TODS initiative in response to feedback from local transit providers and vendors. As Cal-ITP has as its core a mission to improve the quality of mobility data and increase the efficiency of transportation service delivery in the state of California, Cal-ITP conducted research and conversations with an eye toward identifying existing pain points.  Many tranit agencies identified the lack of a standard format between scheduling and CAD/AVL software as a major source of friction.

## Establishing Feasibility + Need

In 2020, Cal-ITP studied the feasibility and documented the product requirements of a data standard that would reduce the friction between scheduling and operating transit service.  The friction between these two activities was particuarlly acute during the height of the COVID Pandemic when transit agency schedules were in a constant state of change due to labor availability and safety precautions.

### Landscape Analysis

We analyzed the current landscape of systems and connections involved in transit operations. The primary focus was on the various interfaces and touchpoints between the Scheduling and CAD/AVL systems. The landscape analysis concluded that a data standard that connected scheduling and CAD-AVL systems was both feasible and not duplicative of any existing standardization efforts.

:material-chevron-right: [Data Flow Diagrams](https://docs.google.com/document/d/1nNnVgmk29ExZU7_bkoawkpvP_gtn3DSR9eV8BugUY14/edit?usp=sharing)

:material-chevron-right: [Field Mapping](https://docs.google.com/spreadsheets/d/1P7jLcp9BDx2Q-FVVR0fdc_eH5cEVxXjA1tdpID_uoTM/edit?usp=sharing)

### Document Product Requirements

The Product Requirements Document synthesized the landscape analysis into a realistic set of use cases with associated data model requirements.

:material-chevron-right: [Product Requirement Document](https://docs.google.com/document/d/1KFLoMAj-XmNrn0MbCVB_IwlK2bILvuVImkjxXrZ9AXk/edit?usp=sharing)

### Consulted organizations

The following organizations were consulted as a part of the feasibility analysis:

- LADOT
- Santa Barbara MTD
- Santa Rosa:
- Marin Transit
- Golden Empire Transit (GET Bus)
- Chicago Transit Authority
- Massachusetts Bay Transportation Authority
- IBI Group
- GMV Synchromatics
- Optibus
- Clever Devices
- Swiftly
- The Master Scheduler
- Trillium

## Initial Development

In 2021, Cal-ITP convened the [TODS Working Group](../resources/faq.md#what-is-the-tods-working-group), composed of stakeholders throughout the mobility industry, for the purpose of developing and adopting a first version of a Transit Operational Data Standard (TODS). These stakeholders included transit schedule firms, CAD/AVL firms, public transit providers, private transit providers, local governments and metropolitan planning organizations (MPOs), labor unions, and manufacturers of integrated on-vehicle hardware solutions (such as Automated Passenger Counting devices or LED signage).

Meetings began in Summer of 2021 and continued through the end of 2021, at which point a framework for v1.0.0 had been reached. After spending several months resolving minor issues with the framework, the TODS Working Group approved v1.0.0 on May 3rd, 2022.
For a full list of past meetings and videos, go to the [Contributor Meetings page](../governance/contributor-meetings.md).

## Implementation v1.0

2022 and 2023 saw the first implementations of TODS at agencies and vendors alike in the wild, including the first implementation by [WETA](https://weta.sanfranciscobayferry.com/) and [Swiftly](https://www.goswift.ly/).

## Continued Improvement

Implementation activities yielded a great deal of excitement about the TODS standard, but also a long wish-list for v2.0.  v2.0 is [currently in the works.](https://github.com/cal-itp/operational-data-standard/issues/49).

## Evolution of Management

Recognizing that a State DOT is not the ideal place to manage a data standard, in 2023 Cal-ITP looked outside its walls to identify:

1. an organization to assume day-to-day management of TODS; and
2. a governance and management model which would rest key decisions with the major TODS stakeholders.

In January 2024:

- the day-to-day management of the TODS standard will be assumed by [MobilityData](https://mobilitydata.org), the same organization that manages [GTFS](https://gtfs.org) (upon which TODS relies); and
- the ownership and key decisions about TODS will be transfered from Cal-ITP to an [independent board](../governance/governance.md#TODS-board-of-directors) composed of transit agencies, and both schedule and CAD/AVL vendors.
- future spec development will be governed by the [change management and versioning policy](../governance/policies/change-management-versioning.md)
