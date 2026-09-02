import Hero from "@/components/common/Hero";
import ServiceDetailBlock from "@/components/common/ServiceDetailBlock";
import AudienceCardGrid from "@/components/common/AudienceCardGrid";
import FaqSection from "@/components/common/FaqSection";
import HeroSection from "@/components/common/HeroSection";
import ServiceCardsGrid from "@/components/common/ServiceCardGrid";
import PrinciplesSection from "@/components/common/PrinciplesSection";
import LocationNodesGrid from "@/components/common/LocationNodesGrid";
import CoverageMap from "@/components/common/CoverageMap";

const PRINCIPLES = [
    {
        number: "01",
        title: "Owned floors, not borrowed space",
        description:
            "Storage and prep run on our schedule.",
    },
    {
        number: "02",
        title: "Gateway balance.",
        description:
            "East, inland and West coverage means a lane can be re-routed when a port congests instead of waiting it out.",
    },
    {
        number: "03",
        title: "Managed carrier bench",
        description:
            "Vetted capacity we control, rather than whatever the load board offers on the day.",
    },
    {
        number: "04",
        title: "One corridor, deeply",
        description:
            "We would rather be excellent on Asia–US than average everywhere.",
    },

];

const LOCATIONS = "LAX / LGB, NY / NJ, Savannah, Houston, Norfolk, Seattle–Tacoma, Charleston, Oakland";
const TAGLINE = "Drayage, transload and free-time management";
 
const COVERAGE_ITEMS = [
    { title: "Ocean gateways", locations: "LAX / LGB, NY / NJ, Savannah, Houston, Norfolk, Seattle–Tacoma, Charleston, Oakland", tagline: "Drayage, transload and free-time management" },
    { title: "Rail ramps", locations: "Chicago, Dallas, Kansas City, Memphis, Atlanta", tagline: "IPI pulls and inland deconsolidation" },
    { title: "OTR", locations: "Lower 48, plus cross-border Canada and Mexico", tagline: "Van, flatbed, step-deck, RGN, expedited team" },
    { title: "Heavy haul", locations: "Nationwide via permitted specialist partners", tagline: "Route survey, escorts, multi-axle, superload" },
    { title: "Warehousing", locations: "New Jersey, Chicago, Los Angeles", tagline: "Company operated" },
    { title: "Origin control", locations: "India, China, Vietnam, Thailand, Malaysia, Indonesia, Korea, Taiwan, Japan", tagline: "Pickup, inspection, consolidation, export docs" },
    { title: "Air", locations: "Major Asia–US pairs", tagline: "Expedited semiconductor, spares and AOG-style moves" },
    { title: "Control tower", locations: "Gurugram, Mumbai", tagline: "24/7 shifts with written handover" },
];

const NODE_DESCRIPTION = "Serving the Port of New York and New Jersey and the Northeast corridor. Deconsolidation for East Coast distribution, project staging for Mid-Atlantic and New England sites, and Amazon prep for East Coast fulfilment centres.";

const FAQS = [
    {
        question: "What does a 4PL do that a freight forwarder does not?",
        answer:
            "You can track shipments using our real time tracking system that provides live updates, location details, and delivery status throughout the entire transportation process.",
    },
    {
        question: "Do you handle DDP shipments into the United States?",
        answer:
            "Yes — we manage duty, customs and delivery under a single DDP contract so there's one point of accountability from origin to final mile.",
    },
    {
        question: "Can you move transformers, coils and other oversize energy cargo?",
        answer:
            "Yes — heavy and oversize energy equipment is a core lane for us, with the permits, equipment and route planning already in place.",
    },
    {
        question: "Where are your US warehouses and what can they do?",
        answer:
            "We operate owned floors in New Jersey, Chicago and Los Angeles for cross-dock, transload, short-term storage and drayage staging.",
    },
];
export default function Network() {
    return (
        <>
            <Hero
                backgroundImage="/images/network-banner.png"
                
                heading={"The United States is the hard \npart. That's why it's our moat."}
                description="Take any one of these on its own, or hand us the whole lane and hold one team to the delivery date and the landed cost. Most clients start with the leg that hurts and expand from there."


            />
            <LocationNodesGrid
                heading="US warehouse nodes"
                description="Company-operated space, chosen for gateway proximity rather than cheap rent. Each floor handles deconsolidation, storage, prep, inspection and staged release."
                columns={3}
                items={[
                    {
                        label: "NODE 01 — EAST",
                        title: "New Jersey",
                        description: NODE_DESCRIPTION,
                        image: "/images/design-build.png",
                        imageAlt: "Two workers overlooking a construction site from a glass tower",
                        href: "/network/new-jersey",
                    },
                    {
                        label: "NODE 02 — INLAND",
                        title: "Chicago",
                        description: "The inland rail hub. Ramp pulls off West Coast IPI moves, Midwest distribution, transloading to 53ft domestic equipment, and staging for utility and data centre projects across the Midwest.",
                        image: "/images/structural-engineering.png",
                        imageAlt: "Worker reviewing plans at a large drafting table in a workshop",
                        href: "/network/chicago",
                    },
                    {
                        label: "NODE 03 — WEST",
                        title: "Los Angeles",
                        description: "First landing for most Asia-origin freight. Fast pulls out of LA and Long Beach, transload to domestic equipment, West Coast distribution and Amazon prep close to the port complex.",
                        image: "/images/foundation-construction.png",
                        imageAlt: "Two workers examining materials on a lab countertop",
                        href: "/network/los-angeles",
                    },
                ]}
            />
            <CoverageMap
                heading="Coverage map"
                description="Where we pull containers, where we truck, and where we control cargo at origin."
                items={COVERAGE_ITEMS}
                columns={4}
            />
            <PrinciplesSection
                heading={"Origin knowledge is common. \nUS capacity is not."}
                description="Plenty of Indian and Asian forwarders can arrange a booking. Very few can pull the container the day it's available, hold it on their own floor, clear it under DDP and put it on a permitted trailer to a substation. That combination is the whole reason KTR exists."
                items={PRINCIPLES}
                backgroundColor="#F2F1EE"
            />

            <HeroSection
                image="/images/truck-1.png"
                imageAlt="Semi truck driving on a highway at sunset"
                heading={"Need a US arm without \nbuilding one?"}
                description="Customs, warehousing, trucking and delivery under one contract — with your name on the delivery, not ours."
                primaryCta={{ label: "TALK TO THE DESK", href: "/contact" }}
                secondaryCta={{ label: "SEE SERVICES", href: "/services" }}
            />
        </>
    );
}