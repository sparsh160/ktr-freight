import Hero from "@/components/common/Hero";
import ServiceDetailBlock from "@/components/common/ServiceDetailBlock";
import HeroSection from "@/components/common/HeroSection";
import CommodityCardGrid from "@/components/common/CommodityCardGrid";
import AudienceCardGrid from "@/components/common/AudienceCardGrid";
import { Rocket } from "lucide-react";

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

export default function Industries() {
    return (
        <>
            <Hero
                backgroundImage="/images/industries-banner.png"
                
                heading={"We chose the hard freight \non purpose."}
                description="Energy infrastructure and the equipment that powers it: heavy, high-value, schedule-critical and unforgiving of a logistics partner who is learning on your cargo. A decade in these commodities is why our lanes hold."

            />

            <CommodityCardGrid
                columns={2}
                cards={[
                    {
                        image: "/images/power-transmission-industries.png",
                        imageAlt: "High-voltage transmission tower against the sky",
                        title: "Power transmission & distribution",
                        description:
                            "Power and distribution transformers, reactors, bushings, insulators, switchgear, conductor and structural beams for towers and substations. This is the freight the US grid is short of, and lead times mean a delivery slip is not recoverable by paying more later.We plan these moves backwards from the energisation date: route survey and permit lead times first, then inland equipment, then the vessel, then the factory. Impact recorders and nitrogen pressure are checked at handover points, crates are specified for a multi-modal journey, and the utility or EPC receives documentation in the format their commissioning team actually needs.",
                            
                        tags: [
                            "Transformers",
                            "Reactors",
                            "Bushings & insulators",
                            "Switchgear",
                            "Structural beams",
                            "Substation packages",
                            "EPC schedules",
                        ],
                    },
                    {
                        image: "/images/industry03.png",
                        imageAlt: "Pile of scrap metal in a container",
                        title: "Solar & renewables",
                        description:
                            "Modules, trackers, racking, inverters, combiner boxes and BESS containers into utility-scale and C&I sites. Solar punishes two things: documentation gaps at the border and uncoordinated site delivery. We handle origin-traceability paperwork carefully because a detained shipment on a construction schedule is far more expensive than the freight itself, and we stage modules through our warehouses so trucks arrive against the install sequence rather than all at once.",
                        tags: [
                            "PV modules",
                            "Trackers & racking",
                            "Inverters",
                            "BESS containers",
                            "Origin documentation",
                            "Site staging",
                            
                        ],
                    },
                ]}
            />

            <CommodityCardGrid
                columns={2}
                cards={[
                    {
                        image: "/images/industry-4.png",
                        imageAlt: "High-voltage transmission tower against the sky",
                        title: "Semiconductors & electronics",
                        description:
                            "Wafers, substrates, components, test equipment and fab tooling — high value, low tolerance, frequently expedited. Air-ride equipment, ESD-aware handling, temperature and shock awareness, sealed and security-screened transport, team drivers where dwell time is the risk, and controlled access at our warehouses.Where export controls or end-use restrictions apply, documentation and screening happen before booking, not at the airport.",
                        tags: [
                            "Wafers & substrates",
                            "Fab tooling",
                            "Test equipment",
                            "Air-ride",
                            "ESD handling",
                            "Team expedite",
                            "Export screening",
                        ],
                    },
                    {
                        image: "/images/industry-5.png",
                        imageAlt: "Pile of scrap metal in a container",
                        title: "Data centre logistics",
                        description:
                            "Racks, servers, PDUs, UPS systems, switchgear, chillers, cabling and modular units into live and under-construction facilities. Data centre freight is a delivery-window business: a truck outside a booked dock slot is a failed delivery regardless of transit performance.We run phased releases from our floors, coordinate with the general contractor and the commissioning schedule, handle liftgate and inside delivery, uncrate and remove packaging where the site requires it, and return damage evidence the same day so RMA clocks start immediately.",
                        tags: [
                            "Racks & servers",
                            "UPS & PDU",
                            "Chillers",
                            "Modular units",
                            "Phased release",
                            "Inside delivery",
                            "Uncrating",
                        ],
                    },
                ]}
            />

            <CommodityCardGrid
                columns={2}
                cards={[
                    {
                        image: "/images/industry-6.png",
                        imageAlt: "High-voltage transmission tower against the sky",
                        title: "Metals, coils & structural steel",
                        description:
                            "Copper and steel coils, plate, long products and fabricated sections. Dense freight with weight-distribution, securement and duty exposure all in play at once. We handle coil racks and purpose-built dunnage, overweight permits and axle-compliant inland routing, mill certificate handling, and classification review where antidumping and countervailing duty exposure changes the landed cost materially.",
                        tags: [
                            "Copper coils",
                            "Steel coils & plate",
                            "Long products",
                            "Coil racks",
                            "Overweight permits",
                            "Mill certificates",
                            "ADD / CVD review",
                        ],
                    },
                    {
                        image: "/images/industry-7.png",
                        imageAlt: "Pile of scrap metal in a container",
                        title: "Project cargo & heavy industry",
                        description:
                            "Turbine and boiler components, generator sets, pressure vessels, process skids, cranes and plant relocations. Multi-piece consignments arriving from several origins against a single erection sequence, moved on breakbulk, RORO or flat rack and delivered by multi-axle and escorted permit haul.Every project gets a written transport plan before the first booking: survey, permits, equipment, sequence, contingency.",
                        tags: [
                            "Turbines",
                            "Generator sets",
                            "Pressure vessels",
                            "Process skids",
                            "Plant relocation",
                            "Erection sequencing",
                        ],
                    },
                ]}
            />

            <CommodityCardGrid
                columns={2}
                cards={[
                    {
                        image: "/images/industry-8.png",
                        imageAlt: "High-voltage transmission tower against the sky",
                        title: "E-commerce & Amazon sellers",
                        description:
                            "Asia-manufactured consumer goods flowing into FBA, AWD and D2C fulfilment. We take the whole chain — supplier pickup, consolidation, ocean or air, customs and DDP so the seller never touches an entry, warehouse prep and labelling, then compliant delivery into fulfilment centres with booked appointments.Sellers scaling past a few containers a month usually need a US buffer more than they need a cheaper rate. Our floors give them one.",
                        tags: [
                            "FBA / AWD",
                            "DDP for sellers",
                            "Prep & labelling",
                            "ISA appointments",
                            "Buffer stock",
                            "D2C fulfilment",
                        ],
                    },
                    {
                        image: "/images/scrap-metal.png",
                        imageAlt: "Pile of scrap metal in a container",
                        title: "Scrap, recycling & commodities",
                        description:
                            "Ferrous, non-ferrous and e-scrap flows where documentation, weight compliance and yard scheduling decide whether the margin survives. Licence and permit verification, inspection support, container weight discipline, live-load drayage and export documentation matched to the destination's import regime.",
                        tags: [
                            "Ferrous",
                            "Non-ferrous",
                            "E-scrap",
                            "Yard scheduling",
                            "Weight compliance",
                            "Export documentation",
                        ],
                    },
                ]}
            />
            <AudienceCardGrid
                headingBold="Who we usually report to"
                description="Six checkpoints. Each one has a named owner, a document and a deadline — that's the whole method."
                cards={[
                    { icon: "rocket", title: "EPC & Project Teams", description:"Need equipment on site against an erection sequence, with permits and escorts already solved." },
                    { icon: "rocket", title: "Need transformer and grid hardware delivered against an energisation date that regulators are watching." },
                    { icon: "rocket", title: "Asian Manufacturers", description:"Need a US arm — customs, warehousing, delivery and DDP — without building one themselves." },
                    { icon: "rocket", title: "Sellers & Distributors", description:"Need inventory landed, prepped and accepted by Amazon or a retail DC without chargebacks." },
                ]}
            />
            <HeroSection
                image="/images/truck-1.png"
                imageAlt="Semi truck driving on a highway at sunset"
                heading={"Tell us what you're shipping and when it has to be there."}
                description="Dimensions, weight, origin, destination, in-service date. We'll come back with routing, equipment and a delivered price."
                primaryCta={{ label: "Start a lane quote", href: "/quote" }}
                secondaryCta={{ label: "SEE SERVICES", href: "/services" }}
            />
        </>
    );
}