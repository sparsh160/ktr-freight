
import HeroSection from "@/components/common/HeroSection";
import Hero from "@/components/common/Hero";
import WhoWeAreSection from "@/components/common/WhoWeAre";
import ContactSection from "@/components/common/ContactSection";
import ImageStatsSection from "@/components/common/ImageStatsSection";
import type { ContactFormValues } from "@/components/common/ContactSection";
import CoverageMap from "@/components/common/CoverageMap";
import LeadershipSection from "@/components/common/LeadershipSection";
 
const LOCATIONS = "LAX / LGB, NY / NJ, Savannah, Houston, Norfolk, Seattle–Tacoma, Charleston, Oakland";
const TAGLINE = "Drayage, transload and free-time management";

async function handleContactSubmit(data: ContactFormValues) {
    "use server";
    // Wire this up to your email service / API route, e.g.:
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
    console.log("New contact submission:", data);
}

export default function Contact() {
    return (
        <>
            <Hero
                backgroundImage="/images/industries-banner.png"
                
                heading={"Deliberately narrow.  \nOperationally heavy."}
                description="KTR Freight is an Asia–US 4PL. One team designs the lane, holds the schedule, files the documents and answers for the landed cost — from a factory floor in Asia to an energised job site in America."

            />         
            <WhoWeAreSection
                heading="Who We Are"
                image="/images/about-truck.png"
                imageAlt="Blue shipping containers on a flatbed trailer, backlit by the sun"
                badge={{ label: "Founded in", value: "2013" }}
                paragraphs={[
                    "The people behind KTR have been running Asia–US freight since 2013 — first inside forwarders and brokerages, learning where the lane actually breaks. KTR Freight Pvt Ltd was incorporated in 2022 to run it differently: a company that owns the whole outcome, not a leg of it.",
                    "Today that is a team of around thirty across Gurugram and Mumbai — veterans with ten-plus years each in US drayage, over-the-road trucking and customs — working desks that are awake while US ports are closed.",
                ]}
            />          
            <ImageStatsSection
                heading="Why the weight sits in the US"
                image="/images/warehouse-truck.png"
                imageAlt="Blue semi truck parked outside a warehouse under a cloudy sky"
                backgroundColor="#E7ECF3"
                paragraphs={[
                    "Anyone can book a vessel. Most Asia-origin shippers lose money after the container lands — on demurrage, a rejected FBA appointment, a permit that took nine days, a duty bill nobody modelled. Closing that gap is what KTR was built for, which is why we operate our own warehouse floors in New Jersey, Chicago and Los Angeles and vet every carrier against FMCSA records before a truck is dispatched.",
                    "We are deliberately narrow. Energy infrastructure — transformers, beams, coils, insulators, solar modules, semiconductors and data centre equipment — is where a decade of lane knowledge compounds.",
                ]}
                stats={[
                    { value: "3", label: "Company-operated US warehouses — NJ, Chicago, LA" },
                    { value: "24/7", label: "India-hours desks covering the US night shift" },
                    { value: "10 yrs+", label: "Per-person experience in US drayage, OTR and customs" },
                    { value: "2013", label: "Team operating Asia–US lanes · KTR Freight Pvt Ltd est. 2022" },
                ]}
            />
            <CoverageMap
                heading="How we work"
                description="Every shipment runs through six checkpoints — origin control, lane build, transit watch, clearance, gateway to floor, delivered. Each checkpoint has a named owner, a document and a deadline. That is the whole method, and it is why our cost files close instead of drifting."
                columns={3}
                items={[
                    { title: "One contract", locations: "Ten capabilities sold separately or stitched into a single 4PL programme. Where you have incumbent forwarders you want to keep, we manage them rather than replace them.",},
                    { title: "One number", locations: "The whole chain — including duty — priced as one landed figure before you commit. Section 301 and ADD/CVD modelled up front.",  },
                    { title: "One accountable team", locations: "When something breaks there is no hand-off argument between three vendors. Milestone visibility, weekly exception review, photo POD.",  },
                ]}
            />
 
            {/* Bottom: new LeadershipSection */}
            <LeadershipSection
                image="/images/leadership-teamwork.png"
                imageAlt="Four people connecting puzzle pieces together"
                heading1="Leadership"
                paragraph="KTR Freight is led by Rohit Dahiya, Director, who also runs a US freight brokerage agency book — which is why FMCSA authority checks, broker–carrier agreements and carrier safety records are treated as operating discipline here, not paperwork."
                heading2="Company record"
                items={[
                    "KTR Freight Pvt Ltd",
                    "CIN: U60230HR2022PTC106411",
                    "Registered MSME, India",
                    "info@ktrfreight.com",
                ]}
            />
            <ContactSection
                heading="Where to find us"
                description="We usually respond within 24 hours. Alternatively, you're welcome to call our offices."
                image="/images/office-location.png"
                imageAlt="Aerial view of an office park"
                offices={[
                    {
                        city: "Gurugram — Head office",
                        address: "1103-05, 11th Floor, JMD Megapolis, Sohna Road, Gurugram, Haryana 122018",
                    },
                    {
                        city: "Mumbai",
                        address:
                            "1013, 1st Floor, Aerocity Corporate Park, Andheri–Shivaji Nagar, Jarimari, Saki Naka, Mumbai 400072",
                    },
                ]}
                email="info@ktrfreight.com"
                phone="(225) 555-0118"
                formHeading="Information Request"
                formDescription="For more information and how we can meet your needs, please fill out the form below, and someone from our team will be in touch."
                submitLabel="Send a message"
                onSubmit={handleContactSubmit}
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