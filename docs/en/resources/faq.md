# Frequently Asked Questions

## What is "operational data?"

Operational data refers to everything a transit provider needs to know "behind the scenes" in order to provide service to riders. Operational data can include the following information:

* Vehicle blocking (which vehicles run which routes)
* Driver shift management (which vehicle operators work on which routes)
* Vehicle shift start/end time and location (when and where vehicles pull in and out of service)
* Nonrevenue vehicle service (deadheading)
* Service disruptions

## Why is a standard for operational data needed?

Operational data is critical for transit providers, but currently it exists primarily in proprietary formats created and maintained by various scheduling and CAD/AVL companies. The use of proprietary formats leads to wide disparities in the experiences that agencies have in trying to create a schedule and then utilizing that schedule in a CAD/AVL software. Agencies often find that their CAD/AVL and scheduling vendors prepare data in different formats, or they use different nomenclature to refer to route and stop names, which results in time-consuming manual processes to align incompatible data sources.

The availability of information in the GTFS standard format has not only resulted in better information being available to riders, but it has also led to innovation in features and functionality for use by transit providers themselves. Similarly, creating a standard format for operational data will help transit providers with easier, less expensive, and enhanced scheduling functionality.

## Isn’t operational data already covered by … GTFS?

Not entirely. GTFS provides what can be thought of as a rider-centric view of transit service. By that, we mean it is built around trip (or journey) planning and the information that riders need to know to complete a trip. While GTFS contains information about where vehicles should be at specified times, most transit agencies could not determine where a specific driver or operator should be at that time using a standard GTFS feed. Critical information for operators—for example, which driver is scheduled to serve a given trip, when and where to layover, or how deadheads should be completed—is not included in GTFS at present. But just because GTFS doesn’t get us all the way there, that doesn’t mean we are planning to start from scratch: TODS is intended to work with GTFS and could ultimately be developed as an extension to GTFS.

## Isn’t operational data already covered by … NeTEx/SIRI?

Yes. The Network Timetable Exchange, or NeTEx, does cover use cases that are being considered for use in TODS. However, because NeTEx has no foothold in the North American market, a major, coordinated about-face in the industry would be required to move toward the NeTEx/SIRI schema. While NeTEx is one way to represent the operational data that makes up transit schedules, it is neither the only nor even necessarily the easiest way to do so. GTFS is the dominant standard in use for defining transit trips in North America, and research by the California Integrated Travel Project (Cal-ITP) has found that vendors favor GTFS’s flexible and simpler approach to representing transit data. Given the shifts that would need to occur within the industry to move toward NeTEx, Cal-ITP is privileging compatibility with GTFS and taking a GTFS-like approach to developing TODS.

## Isn’t operational data already covered by … TCIP?

Yes. The Transit Communications Interface Profiles (TCIP) is a standard developed by the American Public Transportation Association approximately 20 years ago to serve as a standard interface between transit systems and the individual subsystems, like scheduling and CAD/AVL, that they rely on. TCIP has never achieved significant adoption in the United States or elsewhere and has been surpassed by the popularity of the simpler and more constrained GTFS family of standards. Without adoption, development of TCIP has not kept pace with extensions and proposed extensions of GTFS, nor with broader changes in the mobility landscape as a whole. Given the shifts that would need to occur within the industry to move toward TCIP, Cal-ITP is privileging compatibility with GTFS and taking a GTFS-like approach to developing TODS.

## What is Cal-ITP?

Cal-ITP is a statewide initiative of the California State Transportation Agency (CalSTA) and the California Department of Transportation (Caltrans) to simplify travel by increasing access to public transportation—including easier, faster payments via contactless credit/debit/prepaid cards and mobile wallets on smart devices, high-quality data standards, and seamless verification of eligibility for transit discounts. Learn more at [calitp.org](https://www.calitp.org/). And visit Cal-ITP's [CAMobilityMarketplace.org](https://www.camobilitymarketplace.org/) for a catalog of code-compliant products and services for transit agencies.

## What is the TODS Working Group?

The Transit Operational Data Standard working group was convened by staff from the California Integrated Travel Project (Cal-ITP) as part of its goal to provide complete, accurate, and up-to-date transit data to customers and respective agencies. Working group members include major transit agencies across the United States and many of the largest transit software companies in North America. Visit our [Working Group page](../resources/faq.md#what-is-the-tods-working-group) for a full list of members.

## Why is Cal-ITP leading this effort?

Cal-ITP developed the TODS initiative in response to feedback from local transit providers and vendors. As Cal-ITP has as its core a mission to improve the quality of mobility data and increase the efficiency of transportation service delivery in the state of California, we have conducted research and conversations with an eye toward identifying existing pain points. The gap that exists between scheduling software and CAD/AVL software was identified by respondents as a major source of friction. Even as GTFS has seen increasingly widespread adoption, operational data is subject to proprietary formats, overlapping use cases, and manual processes that inefficiently transfer data from one system to another. Cal-ITP’s conversations with partners have demonstrated that there is a clear desire among vendors and transit providers to come together around a standard representation of operational data built in the GTFS model.

## Have more questions?

For additional information, please email [hello@calitp.org Attn: Scott Frazier / TODS](mailto:hello@calitp.org?subject=Scott Frazier / TODS).
