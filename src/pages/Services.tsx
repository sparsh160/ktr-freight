import Hero from "@/components/common/Hero";
import ServiceDetailBlock from "@/components/common/ServiceDetailBlock";
import HeroSection from "@/components/common/HeroSection";

const SERVICES = [
    {
        id: "drayage",
        icon: "truck",
        title: "Drayage",
        shortDescription:
            "Port and rail-ramp pulls at the gateways that matter, booked in advance with the right chassis and permits ready to go.",
        image: "/images/drayage.png",
    },
    {
        id: "otr-trucking",
        icon: "navigation",
        title: "OTR trucking",
        shortDescription: "Long-haul dry van and reefer capacity across the full US network.",
        image: "/images/services/otr.png",
    },
    {
        id: "first-mile",
        icon: "navigation",
        title: "First mile",
        shortDescription: "Factory-to-port pickup with export documentation handled end to end.",
        image: "/images/services/first-mile.png",
    },
    {
        id: "final-mile",
        icon: "navigation",
        title: "Final mile",
        shortDescription: "White-glove delivery to energised job sites, appointment scheduled.",
        image: "/images/services/final-mile.png",
    },
];

export default function Services() {
    return (
        <>
            <Hero
                backgroundImage="/images/service-banner.png"
                
                heading={"Ten capabilities. One\naccountable owner."}
                description="Take any one of these on its own, or hand us the whole lane and hold one team to the delivery date and the landed cost. Most clients start with the leg that hurts and expand from there."


            />
            {/* Image on the right */}
            <ServiceDetailBlock
                title="Drayage"
                paragraphs={[
                    "Port and rail-ramp pulls at the gateways that matter for Asia-origin freight — Los Angeles and Long Beach, New York and New Jersey, Savannah, Houston, Norfolk, Seattle–Tacoma and the Chicago rail complex. We run drayage against free time rather than convenience: appointments are booked the day availability posts, chassis are sourced before the container is released, and demurrage and per diem exposure is reported daily so nobody discovers a five-figure accessorial at month end.",
                    "Live-load, drop-and-pick, transloads to 53ft domestic equipment, triaxle and overweight permits for heavy FCL, and street-turn coordination to cut empty return cost.",
                ]}
                capabilityTags={[
                    "LAX / LGB",
                    "NY / NJ",
                    "Savannah",
                    "Houston",
                    "Norfolk",
                    "SEA / TAC",
                    "Chicago rail",
                    "Overweight permits",
                    "Transload",
                ]}
                image="/images/services-truck-bg.png"
                imageAlt="Truck driving at dusk"
                imagePosition="right"
                // This image already has the full "Drayage Services" card
                // composited into it — the component just displays it.
                cardImage="/images/service-card.webp"
                cardImageAlt="Drayage Services details card"
            />
 
            {/* Image on the left — needs its own composited card image */}
            <ServiceDetailBlock
                title="Over-the-road trucking"
                paragraphs={[
                    "Dry van, reefer, flatbed, step-deck and RGN across the lower 48 and into Canada and Mexico, moved on a carrier bench we vet and manage ourselves. Every carrier is checked on active FMCSA operating authority, insurance certificates naming the correct parties, safety and inspection history, and a signed broker–carrier agreement before a load is tendered — not after a claim lands.",
                    "For time-critical energy and semiconductor freight we run team drivers, expedited straight trucks and dedicated capacity on repeating lanes so a plant shutdown or an installation crew is never waiting on a truck board.",
                ]}
                capabilityTags={[
                    "Dry van",
                    "Flatbed",
                    "Step-deck",
                    "RGN",
                    "Team expedite",
                    "Dedicated lanes",
                    "Cross-border",

                ]}
                image="/images/services-truck-bg.png"
                imageAlt="Truck driving at dusk"
                imagePosition="left"
                cardImage="/images/over-the-road.webp"
                cardImageAlt="Over-the-road trucking details card"
            />
            {/* Image on the right */}
            <ServiceDetailBlock
                title="First mile"
                paragraphs={[
                    "Everything that happens before the vessel: purchase-order follow-up with your supplier, readiness verification, pre-shipment inspection, packing and crating standards suited to a US inland journey rather than just a port-to-port one, lashing and stuffing supervision, and multi-supplier consolidation into full containers.",
                    "We check export documents against the US entry requirement at origin, which is where a wrong description or a missing mill certificate costs hours instead of days.",
                ]}
                capabilityTags={[
                    "Factory pickup",
                    "Inspection",
                    "Crating standards",
                    "Lashing supervision",
                    "Consolidation",
                    "Export docs",

                ]}
                image="/images/services-truck-bg.png"
                imageAlt="Truck driving at dusk"
                imagePosition="right"
                // This image already has the full "Drayage Services" card
                // composited into it — the component just displays it.
                cardImage="/images/first-mile.webp"
                cardImageAlt="Drayage Services details card"
            />
 
            {/* Image on the left — needs its own composited card image */}
            <ServiceDetailBlock
                title="Final mile"
                paragraphs={[
                    "Delivery on the receiver's window, not ours. Liftgate and forklift-free sites, crane and rigging coordination for set-in-place, restricted-access and residential-grade deliveries, uncrating and debris removal for data centre and white-glove work, and photographic proof of delivery filed against the shipment record.",
                    "For construction sites we run phased releases — equipment arrives in the order the crew installs it, staged out of our warehouse rather than parked in a yard accruing storage.",
                ]}
                capabilityTags={[
                    "Site delivery",
                    "Liftgate",
                    "Crane coordination",
                    "White glove",
                    "Phased release",
                    "Photo POD",
                ]}
                image="/images/services-truck-bg.png"
                imageAlt="Truck driving at dusk"
                imagePosition="left"
                cardImage="/images/final-mile.webp"
                cardImageAlt="Over-the-road trucking details card"
            />
            {/* Image on the right */}
            <ServiceDetailBlock
                title="Customs clearance & DDP"
                paragraphs={[
                    "Entry filing through licensed brokerage partners, HTS classification review, valuation and country-of-origin support, continuous and single-transaction bonds, ISF filing on time, and Partner Government Agency requirements where they apply. Where duty exposure is material — Section 301, antidumping and countervailing duties on transformers, solar and steel-derived goods — we model it before you commit to the purchase order, not after the entry summary.",
                    "DDP is a headline capability rather than a checkbox: we structure the import, act as or appoint the importer of record where the arrangement allows, pay the duty, and deliver duty paid to your dock. Your buyer sees one price and handles no paperwork.",
                ]}
                capabilityTags={[
                    "DDP",
                    "DAP",
                    "IOR structuring",
                    "HTS classification",
                    "Section 301",
                    "ADD / CVD",
                    "ISF",
                    "Bonds",
                ]}
                image="/images/services-truck-bg.png"
                imageAlt="Truck driving at dusk"
                imagePosition="right"
                // This image already has the full "Drayage Services" card
                // composited into it — the component just displays it.
                cardImage="/images/custom-clearance.webp"
                cardImageAlt="Drayage Services details card"
            />
 
            {/* Image on the left — needs its own composited card image */}
            <ServiceDetailBlock
                title="Warehousing & distribution"
                paragraphs={[
                    "Company-operated space in New Jersey, Chicago and Los Angeles, positioned against the East Coast, inland rail and West Coast gateways. Container deconsolidation and cross-dock, short and long-term storage, kitting and labelling, damage inspection with photo reporting, pick-and-pack for D2C flows, and staged release to site or to Amazon fulfilment centres.",
                    "Because the space is ours, a container can be pulled when free time demands it, not when an agent has room — which is the single largest source of avoidable cost on the Asia–US lane.",
                ]}
                capabilityTags={[
                    "New Jersey",
                    "Chicago",
                    "Los Angeles",
                    "Deconsolidation",
                    "Cross-dock",
                    "Long-stay storage",
                    "Pick & pack",
                    "Kitting",

                ]}
                image="/images/services-truck-bg.png"
                imageAlt="Truck driving at dusk"
                imagePosition="left"
                cardImage="/images/warehousing-distribution.webp"
                cardImageAlt="Over-the-road trucking details card"
            />
            {/* Image on the right */}
            <ServiceDetailBlock
                title="Project cargo & heavy haul"
                paragraphs={[
                    "Cargo that no standard trailer will take. Route surveys with bridge, overhead and turning-radius clearance, state and municipal permits, pilot cars and police escorts, multi-axle and Schnabel-class equipment through specialist partners, port heavy-lift and breakbulk handling, and utility coordination where lines have to be lifted.",
                    "Typical moves: power transformers and reactors, generator sets, turbine and boiler components, pressure vessels, long structural sections and modular data centre units.",
                ]}
                capabilityTags={[
                    "Route survey",
                    "Permits",
                    "Escorts",
                    "Multi-axle",
                    "Superload",
                    "Breakbulk",
                    "RORO",
                    "Heavy lift",
                ]}
                image="/images/services-truck-bg.png"
                imageAlt="Truck driving at dusk"
                imagePosition="right"
                // This image already has the full "Drayage Services" card
                // composited into it — the component just displays it.
                cardImage="/images/project-cargo.webp"
                cardImageAlt="Drayage Services details card"
            />
 
            {/* Image on the left — needs its own composited card image */}
            <ServiceDetailBlock
                title="Amazon freight"
                paragraphs={[
                    "FBA, AWD and vendor-central flows executed to Amazon's rules rather than around them. Carton and pallet labelling, FNSKU and shipment-plan compliance, prep and relabelling at our warehouses, ISA appointment booking, FC and IXD routing, SPD, LTL and FTL tendering, and reconciliation of shortages and receiving discrepancies.",
                    "Sellers usually come to us after a rejected delivery or a stranded-inventory event. The fix is almost always upstream — labelling, appointment discipline and a US buffer of stock — and that is exactly what our floors are for.",
                ]}
                capabilityTags={[
                    "FBA",
                    "AWD",
                    "Vendor central",
                    "ISA appointments",
                    "Prep & relabel",
                    "SPD / LTL / FTL",
                    "Reconciliation",
                ]}
                image="/images/services-truck-bg.png"
                imageAlt="Truck driving at dusk"
                imagePosition="left"
                cardImage="/images/amazon-freight.webp"
                cardImageAlt="Over-the-road trucking details card"
            />
            {/* Image on the right */}
            <ServiceDetailBlock
                title="Scrap & recyclables"
                paragraphs={[
                    "Ferrous and non-ferrous scrap, e-scrap and recyclable material moved with the documentation and weight discipline the trade demands — licence and permit checks, inspection support, container weight compliance, live-load drayage at yards, and export paperwork aligned to the destination's import rules.",
                    "It is unglamorous, margin-thin freight that punishes sloppy operators. We treat the paperwork as the product.",
                ]}
                capabilityTags={[
                    "Ferrous",
                    "Non-ferrous",
                    "E-scrap",
                    "Weight compliance",
                    "Yard drayage",
                    "Export licensing",
                ]}
                image="/images/services-truck-bg.png"
                imageAlt="Truck driving at dusk"
                imagePosition="right"
                // This image already has the full "Drayage Services" card
                // composited into it — the component just displays it.
                cardImage="/images/scrap.webp"
                cardImageAlt="Drayage Services details card"
            />
 
            {/* Image on the left — needs its own composited card image */}
            <ServiceDetailBlock
                title="4PL control tower"
                paragraphs={[
                    "The wrapper around everything above. One team designs the lane, holds the schedule, manages the vendors, files the documents, tracks the exceptions and reports the cost. You get a single point of accountability, milestone-level visibility, weekly exception review, and a cost file that closes instead of drifting.",
                    "Where you already have incumbent forwarders or carriers you want to keep, we manage them rather than replace them. The value is control, not vendor churn.",
                ]}
                capabilityTags={[
                    "Lane design",
                    "Vendor management",
                    "Milestone visibility",
                    "Exception desk",
                    "Cost reconciliation",
                    "Quarterly review",
                ]}
                image="/images/services-truck-bg.png"
                imageAlt="Truck driving at dusk"
                imagePosition="left"
                cardImage="/images/control-tower.webp"
                cardImageAlt="Over-the-road trucking details card"
            />
            <HeroSection
                image="/images/truck-1.png"
                imageAlt="Semi truck driving on a highway at sunset"
                heading={"Which leg is costing you the most right now?"}
                description="Tell us where the lane breaks — demurrage, permits, duty surprises, rejected appointments — and we'll come back with what we'd change and what it would cost."
                primaryCta={{ label: "TALK TO THE DESK", href: "/contact" }}
                secondaryCta={{ label: "SEE OUR EXPERTISE", href: "/expertise" }}
            />
        </>
    );
}