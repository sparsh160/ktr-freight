import Hero from "@/components/common/Hero";
import ServiceDetailBlock from "@/components/common/ServiceDetailBlock";
import AudienceCardGrid from "@/components/common/AudienceCardGrid";
import FaqSection from "@/components/common/FaqSection";
import HeroSection from "@/components/common/HeroSection";
import ServiceCardsGrid from "@/components/common/ServiceCardGrid";
import PrinciplesSection from "@/components/common/PrinciplesSection";

const PRINCIPLES = [
    {
        number: "01",
        title: "Plan backwards from the site date.",
        description:
            "Permits and surveys have longer lead times than ocean space. The schedule starts at the receiver, not the shipper.",
    },
    {
        number: "02",
        title: "Fix problems at origin",
        description:
            "A wrong description or a weak crate costs minutes in Asia and days in America.",
    },
    {
        number: "03",
        title: "One owner per shipment",
        description:
            "Named, reachable, with a shift handover — never a shared inbox.",
    },
    {
        number: "04",
        title: "Model duty before the PO",
        description:
            "Tariff exposure changes sourcing decisions; finding out at entry summary is too late.",
    },
    {
        number: "05",
        title: "Report exposure daily",
        description:
            "Free time, per diem and storage are visible while they can still be acted on.",
    },
    {
        number: "06",
        title: "Close the cost file",
        description:
            "Final invoice reconciled against quote, with variances explained line by line.",
    },
];

const FAQS = [
    {
        question: "How do you vet US trucking capacity?",
        answer:
            "Active FMCSA operating authority and MC status, insurance certificates with correct named parties and adequate cargo limits, safety and inspection history, equipment suitability, and a signed broker–carrier agreement — all confirmed before a load is tendered. Records are re-checked on a schedule, and a carrier that lapses comes off the bench automatically.",
    },
    {
        question: "What makes DDP risky, and how do you control it?",
        answer:
            "DDP fails when duty is estimated rather than modelled. We review classification, origin and valuation up front, price Section 301 and any antidumping or countervailing exposure into the quote, confirm the importer-of-record structure and bond capacity before the cargo ships, and keep the document set so the entry stands up to review later.",
    },
    {
        question: "Why does a 24/7 desk actually change outcomes?",
        answer:
            "Because US exceptions happen in India's working hours. A rejected FBA appointment, a rolled booking or a customs query raised at 4pm Los Angeles time is being worked by our team immediately instead of waiting for the next US morning. On a tight project schedule, that recovered shift is often the difference between on-time and re-planned.",
    },

];
export default function Expertise() {
    return (
        <>
            <Hero
                backgroundImage="/images/expertise-banner.png"
                
                heading={"The United States is the hard part. That's why it's our moat."}
                description="Anyone with a rate sheet can get a container to a US port. What separates a working lane from an expensive one is everything that happens after the vessel berths — and that is where our decade of operating experience sits."


            />
            <ServiceCardsGrid
                columns={3}
                items={[
                    {
                        number: "1",
                        title: "FMCSA-literate carrier control",
                        description:
                            "Operating authority, MC status, insurance certificates, cargo limits, safety and inspection history and signed agreements are checked before dispatch. Vetting is a gate, not an investigation you run after a claim.",
                        image: "/images/design-build.png",
                        imageAlt: "Two workers overlooking a construction site from a glass tower",
                        href: "/services/design-build",
                    },
                    {
                        number: "2",
                        title: "Customs depth",
                        description:
                            "Classification, valuation, origin, ISF timing, bonds and PGA requirements handled with the entry in mind from day one — including the tariff exposure that decides whether a purchase order still makes sense.",
                        image: "/images/structural-engineering.png",
                        imageAlt: "Engineer reviewing plans at a large drafting table in a workshop",
                        href: "/services/structural-engineering",
                    },
                    {
                        number: "3",
                        title: "DDP that survives audit",
                        description:
                            "Importer-of-record structure, duty settlement and document retention arranged so the delivered price holds and the compliance file stands up later.",
                        image: "/images/foundation-construction.png",
                        imageAlt: "Two workers examining materials on a lab countertop",
                        href: "/services/foundation-construction",
                    },
                    {
                        number: "4",
                        title: "Permit & escort planning",
                        description:
                            "Route surveys, state and municipal permits, curfews, pilot cars and police escorts, bridge and overhead clearance, utility coordination — sequenced against lead times that are often longer than the ocean leg.",
                        image: "/images/design-build.png",
                        imageAlt: "Two workers overlooking a construction site from a glass tower",
                        href: "/services/design-build",
                    },
                    {
                        number: "5",
                        title: "Free-time economics",
                        description:
                            "Demurrage, detention, per diem, chassis and storage tracked daily per container. Most expensive lanes are cheap lanes with uncontrolled accessorials.",
                        image: "/images/structural-engineering.png",
                        imageAlt: "Engineer reviewing plans at a large drafting table in a workshop",
                        href: "/services/structural-engineering",
                    },
                    {
                        number: "6",
                        title: "Amazon compliance",
                        description:
                            "Labelling, shipment plans, ISA appointments, FC and IXD routing, prep at our own floors, and reconciliation when receiving counts don't match.",
                        image: "/images/foundation-construction.png",
                        imageAlt: "Two workers examining materials on a lab countertop",
                        href: "/services/foundation-construction",
                    },
                    {
                        number: "7",
                        title: "Own warehouse leverage",
                        description:
                            "NJ, Chicago and LA floors we operate, so pulls, prep, staging and storage happen on our schedule instead of an agent's calendar.",
                        image: "/images/design-build.png",
                        imageAlt: "Two workers overlooking a construction site from a glass tower",
                        href: "/services/design-build",
                    },
                    {
                        number: "8",
                        title: "24/7 exception desk",
                        description:
                            "India-time coverage of the US night. Roll-overs, rejected appointments and customs queries are worked overnight and closed before the US morning.",
                        image: "/images/structural-engineering.png",
                        imageAlt: "Engineer reviewing plans at a large drafting table in a workshop",
                        href: "/services/structural-engineering",
                    },
                    {
                        number: "9",
                        title: "Energy-cargo fluency",
                        description:
                            "Crating standards, impact recorders, coil securement, module handling and commissioning documentation — the details that separate a delivered transformer from a warranty dispute.",
                        image: "/images/foundation-construction.png",
                        imageAlt: "Two workers examining materials on a lab countertop",
                        href: "/services/foundation-construction",
                    },
                ]}
            />
            <PrinciplesSection
                heading={"Cheap freight is usually expensive\nfreight with a delay on the invoice"}
                description="We quote what a lane actually costs to run properly and then hold it. The savings we can prove come from removing failure — not from shaving a rate and rebuilding the loss in accessorials."
                items={PRINCIPLES}
                backgroundColor="#DDE8ED"
            />
            <AudienceCardGrid
                headingBold="Who you're actually hiring"
                description="KTR Freight is run by operators with more than a decade in US-facing logistics — people who have sat on the drayage desk at 2am, argued a classification, and stood at a site gate waiting on an escort."
                cards={[
                    { icon: "rocket", title: "US operations", description:"Drayage, OTR, warehousing and final mile, staffed against US business hours and terminal cut-offs." },
                    { icon: "rocket", title: "Compliance & customs", description:"Entry preparation, classification support, DDP settlement and document control with licensed brokerage partners." },
                    { icon: "rocket", title: "Project engineering", description:"Route surveys, transport plans, lifting and securement methodology for cargo that needs an engineer, not a rate." },
                    { icon: "rocket", title: "Origin control — Asia", description:"Supplier follow-up, inspection, consolidation and export documentation across Indian and East Asian origins." },
                    { icon: "rocket", title: "Night desk", description:"Gurugram and Mumbai shifts covering the US overnight window, with a written handover every shift." },
                    { icon: "rocket", title: "Client reporting", description:"Milestone visibility, exception logs, weekly reviews and a cost file that reconciles to the quote." },

                ]}
            />
            <FaqSection
                headingBold="Questions we get asked in diligence"
                description="Procurement teams tend to ask the same three things before awarding a lane."
                image="/images/faq-support.png"
                imageAlt="Two colleagues reviewing a shipment on a computer screen"
                needHelp={{
                    title: "Need help?",
                    email: "testing@gmail.com",
                }}
                faqs={FAQS}
                defaultOpenIndex={0}
            />
            <HeroSection
                image="/images/truck-1.png"
                imageAlt="Semi truck driving on a highway at sunset"
                heading={"Put us on one hard lane and compare."}
                description="Most clients start with the shipment nobody else wants to own. That's the fastest way to see the difference in how it's run."
                primaryCta={{ label: "TALK TO THE DESK", href: "/contact" }}
                secondaryCta={{ label: "SEE THE NETWORK", href: "/network" }}
            />
        </>
    );
}