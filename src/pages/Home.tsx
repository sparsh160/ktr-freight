import Hero from "@/components/common/Hero";
import TrustedCompanies from "@/components/common/TrustedCompanies";
import ProcessSteps from "@/components/common/ProcessSteps";
import ServicesShowcase from "@/components/common/ServiceShowcase";
import FeatureGrid from "@/components/common/FeatureGrid";
import IndustriesGrid from "@/components/common/IndustriesGrid";
import CheckpointsGrid from "@/components/common/CheckpointsGrid";
import FaqSection from "@/components/common/FaqSection";
import HeroSection from "@/components/common/HeroSection";


const CHECKPOINTS = [
    {
        step: "Step 1",
        title: "Origin control",
        description:
            "Supplier readiness is verified before booking. Inspection, packing and lashing are supervised, and export documents are checked against the US entry requirement, not just the local one.",
    },
    {
        step: "Step 2",
        title: "Lane build",
        description:
            "We map origin, mode, gateway, equipment and site constraints against your in-service date, then price the whole chain — including duty — as one number.",
    },
    {
        step: "Step 3",
        title: "Transit watch",
        description:
            "The 24/7 desk tracks vessel roll-overs, transhipment risk and ETA drift, and re-plans inland capacity the moment the schedule moves.",
    },
    {
        step: "Step 4",
        title: "Clearance",
        description:
            "Entry is filed ahead of arrival. Duty, 301 and ADD/CVD exposure is settled the way it was quoted, with documents packaged for your compliance file.",
    },
    {
        step: "Step 5",
        title: "Gateway to floor",
        description:
            "Drayage is dispatched against free-time, not convenience. Cargo lands on our NJ, Chicago or LA floor for deconsolidation, prep or staging.",
    },
    {
        step: "Step 6",
        title: "Delivered",
        description:
            "Final mile runs to the site's window with permits, escorts and equipment pre-cleared. You get POD, photos and a closed cost file — no surprise invoices in month three.",
    },
];

const SERVICES = [
    {
        id: "drayage",
        icon: "truck",
        title: "Drayage",
        shortDescription:
            "Generate platform-ready images and short video concepts for launches, ads, reels, and daily content.",
        image: "/images/services-truck-bg.png",
        cardImage: "/images/service-card.webp",
    },
    {
        id: "otr-trucking",
        icon: "navigation",
        title: "OTR trucking",
        shortDescription: "Long-haul dry van and reefer capacity across the full US network.",
        image: "/images/services-truck-bg.png",
        cardImage: "/images/over-the-road.webp",
    },
    {
        id: "first-mile",
        icon: "navigation",
        title: "First mile",
        shortDescription: "Factory-to-port pickup with export documentation handled end to end.",
        image: "/images/services-truck-bg.png",
        cardImage: "/images/first-mile.webp",
    },
    {
        id: "final-mile",
        icon: "navigation",
        title: "Final mile",
        shortDescription: "White-glove delivery to energised job sites, appointment scheduled.",
        image: "/images/services-truck-bg.png",
        cardImage: "/images/final-mile.webp",
    },
];

const COMPANY_LOGOS = [
    { src: "/images/logoipsum-spiral.png", alt: "Logoipsum" },
    { src: "/images/sisyphus.png", alt: "Sisyphus" },
    { src: "/images/logoipsum-feather.png", alt: "Logoipsum" },
    { src: "/images/logoipsum-dots.png", alt: "Logoipsum" },
    { src: "/images/quotient.png", alt: "Quotient" },
    // Second row repeats the same 5 logos in a different order, matching the reference
    { src: "/images/logoipsum-dots.png", alt: "Logoipsum" },
    { src: "/images/logoipsum-feather.png", alt: "Logoipsum" },
    { src: "/images/sisyphus.png", alt: "Sisyphus" },
    { src: "/images/quotient.png", alt: "Quotient" },
    { src: "/images/logoipsum-spiral.png", alt: "Logoipsum" },
];

const FREIGHT_STEPS = [
    {
        number: "01",
        title: "Origin",
        description: "Factory pickup, inspection, lashing and export docs",
        icon: "rocket",
    },
    {
        number: "02",
        title: "Port",
        description: "Flat rack, open top, breakbulk or RORO booking",
        icon: "anchor",
    },
    {
        number: "03",
        title: "Ocean / Air",
        description: "Space held against the project schedule, not the spot market",
        icon: "plane",
    },
    {
        number: "04",
        title: "Customs",
        description: "Entry, duty, 301 / ADD-CVD exposure, DDP settlement",
        icon: "shield",
    },
    {
        number: "05",
        title: "Drayage",
        description: "Gateway pull, chassis, demurrage and per diem control",
        icon: "truck",
    },
    {
        number: "06",
        title: "Warehouse",
        description: "Our NJ / CHI / LAX floors: deconsolidation, prep, staging",
        icon: "warehouse",
    },
    {
        number: "07",
        title: "Final Mile",
        description: "OTR, step-deck, heavy haul with permits and escorts to site",
        icon: "packageCheck",
    },
];

const FAQS = [
    {
        question: "What does a 4PL do that a freight forwarder does not?",
        answer:
            "A forwarder sells you a leg. A 4PL owns the outcome across every leg — origin pickup, ocean or air, US customs, drayage, warehousing, OTR and heavy haul, and final mile — on one contract, with one team accountable for the delivery date and the landed cost. When something breaks, there is no hand-off argument between three vendors.",
    },
    {
        question: "Do you handle DDP shipments into the United States?",
        answer:
            "Yes, and it is one of our strongest lanes. We structure the import, file the entry, pay duty including Section 301 and any antidumping or countervailing exposure, and deliver duty paid to the dock or site. The point of DDP is that the buyer sees one price and no customs paperwork — we quote it that way and hold it.",
    },
    {
        question: "Can you move transformers, coils and other oversize energy cargo?",
        answer:
            "That is our core. Power and distribution transformers, structural beams, copper and steel coils, insulators, solar modules and data centre equipment — flat rack, open top, breakbulk or RORO at sea, then step-deck, RGN, multi-axle and escorted permit moves inland, with route surveys done before the booking, not after.",
    },
    {
        question: "Where are your US warehouses and what can they do?",
        answer:
            "New Jersey, Chicago and Los Angeles — chosen to sit against the East Coast, inland rail and West Coast gateways. They handle container deconsolidation, short and long-term storage, kitting and labelling, Amazon FBA prep, damage inspection, and staged releases so a project site receives equipment in the order the crew installs it.",
    },
];

export default function Home() {
    return (
        <>
            <Hero
                backgroundImage="/images/hero-highway.jpg"
                backgroundVideo="/ktr.mp4"
                badgeText="4PL · Asia ⇄ United States · Since 2013"
                heading={"The cargo that keeps the grid\nand the cloud running rarely\nfits in a box"}
                description="KTR Freight controls the whole lane — factory floor in Asia to energised job site in America. Transformers, beams, coils, insulators, solar modules, semiconductors and data centre gear. One team, one contract, one set of milestones."
                primaryCta={{ label: "Contact us", href: "/contact" }}
                secondaryCta={{ label: "What we do", href: "/services" }}
                stats={[
                    { value: "3", label: "New Jersey · Chicago · Los Angeles" },
                    { value: "24/7", label: "India hours cover the US night shift" },
                    { value: "10 yrs+", label: "Veterans of US drayage, OTR and customs" },
                ]}
            />
            <TrustedCompanies
                heading="Trusted companies across industries"
                logos={COMPANY_LOGOS}
                columns={5}
            />
            <ProcessSteps
                headingBold="One lane."
                headingLight="Seven handoffs. We own all of them"
                steps={[...FREIGHT_STEPS]}
            />
            <ServicesShowcase
                headingBold="What We Run"
                description="Eight capabilities, sold separately or stitched into a single 4PL programme where we hold the schedule, the cost and the exceptions."
                services={[...SERVICES]}
                ctaLabel="View Service Details"
                ctaHref="/services"
            />
            <FeatureGrid
                headingBold="Anyone can book a vessel."
                headingLight="The United States is where lanes break"
                description="Most Asia-origin shippers lose money after the container lands — on demurrage, on a rejected FBA appointment, on a permit that took nine days, on a duty bill nobody modelled. That gap is what KTR was built to close, and it is why our operating weight sits in the US, not just at origin."
                rows={[
                    [
                        {
                            title: "Own warehouses, not agent space",
                            description:
                                "NJ, Chicago and LA floors we control, so a container can be pulled the day it's available instead of the day an agent has room.",
                            image: "/images/warehouse.png",
                            imageAlt: "Warehouse",
                            weight: 3,
                            imageBoxClassName: "absolute bottom-0 right-0 w-[62%] h-[62%]",
                        },
                        {
                            title: "FMCSA-literate carrier management.",
                            description:
                                "Authority, insurance certificates, safety scores and broker-carrier agreements checked before a truck is dispatched, not after a claim.",
                            image: "/images/truck.png",
                            imageAlt: "Truck in desert",
                            weight: 5,
                            imageBoxClassName: "absolute bottom-0 right-0 w-[85%] h-[52%]",
                        },
                    ],
                    [
                        {
                            title: "DDP that survives audit.",
                            description:
                                "Classification, valuation and duty exposure modelled up front, so the landed number you were quoted is the number you pay.",
                            image: "/images/contract.png",
                            imageAlt: "Signed contract",
                            imageBoxClassName: "absolute bottom-0 right-0 w-[42%] h-[52%]",
                        },
                        {
                            title: "Night-shift coverage by design",
                            description:
                                "The Gurugram and Mumbai desks are awake while US ports are closed — exceptions get worked overnight, not queued for morning.",
                            image: "/images/globe.png",
                            imageAlt: "Connected globe",
                            imageBoxClassName: "absolute bottom-0 right-0 w-[34%] h-[65%]",
                        },
                        {
                            title: "Energy-cargo fluency",
                            description:
                                "Teams who know what a bushing costs, why a coil rolls, and what happens if a transformer's impact recorder trips in transit.",
                            image: "/images/transformer.png",
                            imageAlt: "Electrical transformer",
                            imageBoxClassName: "absolute bottom-0 right-0 w-[34%] h-[70%]",
                        },
                    ],
                ]}
            />
            <IndustriesGrid
                headingBold="The freight we know cold"
                description="We are deliberately narrow. Energy infrastructure and the equipment that powers it is where a decade of lane knowledge actually compounds."
                ctaLabel="View all Industries"
                ctaHref="/industries"
                columns={4}
                industries={[
                    {
                        title: "Power Transmission & Distribution",
                        description: "Power and distribution transformers, reactors, bushings, insulators, switchgear, conductor and structural beams for tower...",
                        image: "/images/power-transmission.png",
                        imageAlt: "High-voltage transmission tower at sunset",
                        href: "/industries/power-transmission",
                    },
                    {
                        title: "Scrap, Recycling & Commodities",
                        description: "Ferrous, non-ferrous and e-scrap flows where documentation, weight compliance and yard scheduling decide whether the margin...",
                        image: "/images/scrap-recycling.png",
                        imageAlt: "Scrap metal in a dumpster",
                        href: "/industries/scrap-recycling",
                    },
                    {
                        title: "Solar & Renewables",
                        description: "Modules, trackers, racking, inverters, combiner boxes and BESS containers into utility-scale and C&I sites. Solar punishes two things...",
                        image: "/images/solar-renewables.png",
                        imageAlt: "Solar panels with city skyline",
                        href: "/industries/solar-renewables",
                    },
                    {
                        title: "Semiconductors & Electronics",
                        description: "Wafers, substrates, components, test equipment and fab tooling — high value, low tolerance, frequently expedited...",
                        image: "/images/semiconductors.png",
                        imageAlt: "Electronic waste in a bin",
                        href: "/industries/semiconductors",
                    },
                    {
                        title: "Data centre logistics",
                        description: "Racks, servers, PDUs, UPS systems, switchgear, chillers, cabling and modular units into live and under-construction facilities...",
                        image: "/images/data-centre.png",
                        imageAlt: "High-voltage transmission tower at sunset",
                        href: "/industries/power-transmission",
                    },
                    {
                        title: "Metals, coils & structural steel",
                        description: "Copper and steel coils, plate, long products and fabricated sections. Dense freight with weight-distribution, securement and duty...",
                        image: "/images/matal-coils.png",
                        imageAlt: "Scrap metal in a dumpster",
                        href: "/industries/scrap-recycling",
                    },
                    {
                        title: "Project cargo & heavy industry",
                        description: "Turbine and boiler components, generator sets, pressure vessels, process skids, cranes and plant relocations. Multi-piece consignments...",
                        image: "/images/project-cargo.png",
                        imageAlt: "Solar panels with city skyline",
                        href: "/industries/solar-renewables",
                    },
                    {
                        title: "E-commerce & Amazon sellers",
                        description: "Asia-manufactured consumer goods flowing into FBA, AWD and D2C fulfilment. We take the whole chain — supplier pickup...",
                        image: "/images/e-commerce.png",
                        imageAlt: "Electronic waste in a bin",
                        href: "/industries/semiconductors",
                    },
                ]}
            />
            <CheckpointsGrid
                headingBold="How a KTR shipment"
                headingLight="actually runs"
                description="Six checkpoints. Each one has a named owner, a document and a deadline — that's the whole method."
                items={CHECKPOINTS}
                columns={3}
            />
            <FaqSection
                headingBold="Straight answers"
                description="The four questions every new shipper asks us in the first call."
                image="/images/faq-support.png"
                imageAlt="Two colleagues reviewing a shipment on a computer screen"
                needHelp={{
                    title: "Need help?",
                    email: "info@ktrfreight.com",
                }}
                faqs={FAQS}
                defaultOpenIndex={0}
            />
            <HeroSection
                image="/images/truck-1.png"
                imageAlt="Semi truck driving on a highway at sunset"
                heading={"Send us the lane. We'll\nsend back the landed\nnumber."}
                description="Origin, commodity, dimensions, weight, destination and the date it has to be on site. That's enough for us to come back with a routing and a delivered price."
                primaryCta={{ label: "Start a lane quote", href: "/quote" }}
                secondaryCta={{ label: "info@ktrfreight.com", href: "mailto:info@ktrfreight.com" }}
            />

        
        </>
    );
}