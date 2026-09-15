import Hero from "@/components/common/Hero";
import CaseStudyBlock from "@/components/common/CaseStudyBlock";
import CoverageMap from "@/components/common/CoverageMap";
import HeroSection from "@/components/common/HeroSection";



export default function Projects() {
    return (
        <>
            <Hero
                backgroundImage="/images/projects-banner.png"                
                heading={"The moves that prove \nthe method"}
                description="Representative engagements from the lanes we run — details generalised, clients unnamed, the operating pattern exactly as it happens. Your project gets its own file, its own owner and its own numbers."
            />
            
            <CaseStudyBlock
                title="A power transformer to a Midwest substation"
                jobDescription="A power transformer with its bushings and radiators, ex-works India, against a fixed energisation date. Out-of-gauge on every leg: breakbulk ocean, port heavy-lift, and a multi-state road move that lived or died on the route survey and permit sequence — with ADD/CVD exposure on the unit modelled before the purchase order."
                tags={["Route survey", "Breakbulk", "Port heavy-lift", "Permits & escorts", "Multi-axle", "DDP", "Impact recorders"]}
                outcomeDescription="Impact recorders logged at origin and checked at every handoff, so condition was evidenced leg by leg. The unit met its crane booking and was set on the pad inside the outage window, with duty settled exactly as quoted."
                image="/images/project-1.png"
                imageAlt="High-voltage substation equipment"
                imagePosition="right"
            />
 
            
            <CaseStudyBlock
                title="A utility-scale module tranche into Texas"
                jobDescription="Modules and trackers across multiple sailings for a utility-scale build — where the freight was routine and the risk was everything around it: UFLPA traceability documentation, a shifting duty stack, and a site that installs in block order, not arrival order."
                tags={["UFLPA file at origin", "201 / 301 / AD-CVD modelling", "Multi-sailing programme", "Warehouse staging", "Phased release", "Photo POD", ]}
                outcomeDescription="The traceability file was built and checked before stuffing, and the tranche cleared without a documentation detention. Cargo staged on our floors and fed the blocks in install order — no laydown-yard pile-up, no wrong-SKU deliveries."
                image="/images/project-2.png"
                imageAlt="Solar panel array with transmission tower in the background"
                imagePosition="left"
            />
            <CaseStudyBlock
                title="A fit-out into a live Northern Virginia facility"
                jobDescription="Racks, PDUs, UPS and switchgear consolidated from suppliers in Taiwan and Korea into a facility that was live, access-controlled and unable to store anything. Every delivery ran on clearance lists, escorts and dock windows."
                tags={["Multi-supplier consolidation", "NJ staging", "Install-sequence release", "White glove", "Uncrating & debris removal", "Photo POD", ]}
                outcomeDescription="The site received what it racked each week and nothing more. Every item photographed against the shipment record at sign-off, no refused gates, no trailers parked as improvised storage."
                image="/images/project-3.png"
                imageAlt="High-voltage substation equipment"
                imagePosition="right"
            />
 
            
            <CaseStudyBlock
                title="A recurring steel coil programme into Houston"
                jobDescription="Coils loaded near the container’s limit — over legal road weight on a standard chassis — on a repeating lane where the duty stack (Section 232, ADD/CVD by origin, 301 on top) decided whether the trade worked at all."
                tags={["Duty stack vs mill certs", "Overweight triaxle drayage", "Transloads", "Coil securement to spec", "Vetted flatbed bench", "Daily free-time control", ]}
                outcomeDescription="Weight was planned before loading instead of argued at the scale: no flagged boxes, securement to specification with photo documentation, and a landed number that held across the programme instead of drifting invoice by invoice."
                image="/images/project-4.png"
                imageAlt="Solar panel array with transmission tower in the background"
                imagePosition="left"
            />
            <CaseStudyBlock
                title="A seller rescue: China to national fulfilment centres"
                jobDescription="A seller arrived after the familiar spiral — rejected deliveries, a stranded container, stockouts on the listing. The fix was upstream: labelling rebuilt at origin, a buffer of stock on our Los Angeles floor, and appointment discipline into the FC network."
                tags={["FNSKU & plan compliance", "Origin labelling", "LA buffer stock", "ISA appointments", "SPD / LTL / FTL", "Shortage reconciliation", ]}
                outcomeDescription="Appointments stopped bouncing because cartons arrived to spec, and stockouts ended because replenishment released from the buffer in quantities Amazon would accept. Shortages were reconciled against Amazon’s receiving records line by line until shipped and received were the same number."
                image="/images/project-5.png"
                imageAlt="High-voltage substation equipment"
                imagePosition="right"
            />
 
            
            <CaseStudyBlock
                title="A line-critical tool expedite into Arizona"
                jobDescription="Fab tooling against a qual window that was booked months out and would not move. Cleanroom crating respected, shock and tilt monitoring applied, export screening done at booking — then the fastest clean routing the window allowed."
                tags={["Export screening", "Monitored handling", "Airfreight", "Team-driver US leg", "Rigging & site access", "Condition evidence file", ]}
                outcomeDescription="The tool met its window with monitors clean at delivery, photographed alongside the equipment. The condition file — indicators, handoff log, POD — closed the move with evidence instead of assumptions."
                image="/images/project-6.png"
                imageAlt="Solar panel array with transmission tower in the background"
                imagePosition="left"
            />
            <CoverageMap
                heading="What every one of these has in common"
                columns={3}
                items={[
                    {
                        title: "Decided before booking",
                        locations:
                            "Route, equipment, duty stack and site constraints settled up front — the quote is a plan, not a rate.",
                    },
                    {
                        title: "Evidence at every handoff",
                        locations:
                            "Recorders, monitors, photos and documents logged leg by leg, so a problem is caught in hours and claimed against the right party.",
                    },
                    {
                        title: "A cost file that closes",
                        locations:
                            "Free time controlled daily, duty settled as quoted, reconciliation until shipped and received are the same number.",
                    },
                ]}
            />
            <HeroSection
                image="/images/truck-1.png"
                imageAlt="Semi truck driving on a highway at sunset"
                heading={"Send us the lane. We'll send back the landed number."}
                description="Origin, commodity, dimensions, weight, destination and the date it has to be on site. That's enough for us to come back with a routing and a delivered price."
                primaryCta={{ label: "Start a lane quote", href: "/quote" }}
                secondaryCta={{ label: "info@ktrfreight.com", href: "mailto:info@ktrfreight.com" }}
            />
        </>
    );
}