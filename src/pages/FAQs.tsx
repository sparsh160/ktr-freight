
import HeroSection from "@/components/common/HeroSection";
import FaqSection from "@/components/common/FaqSection";
import PageTitleBanner from "@/components/common/PageTitleBanner";

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

    {
        question: "What documentation do I need for international shipments?",
        answer:
            "Typical requirements include a commercial invoice, packing list, bill of lading, and any applicable certificates of origin. Our team can advise on the exact set needed for your shipment.",
    },
    {
        question: "How do you handle shipment delays or exceptions?",
        answer:
            "Our operations team monitors every shipment in real time and proactively communicates any delays, along with recovery options, so you're never caught off guard.",
    },
    {
        question: "What industries do you primarily serve?",
        answer:
            "We work extensively with energy, industrial equipment, and manufacturing clients, though our network supports a wide range of freight types and volumes.",
    },
];
export default function FAQs() {
    return (
        <>
            
            <PageTitleBanner heading="FAQ's" backgroundColor="#2B6BFF" />

            <FaqSection
                headingBold="Straight answers"
                description="The four questions every new shipper asks us in the first call."
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
                heading={"Send us the lane. We'll\nsend back the landed\nnumber."}
                description="Origin, commodity, dimensions, weight, destination and the date it has to be on site. That's enough for us to come back with a routing and a delivered price."
                primaryCta={{ label: "Start a lane quote", href: "/quote" }}
                secondaryCta={{ label: "info@ktrfreight.com", href: "mailto:info@ktrfreight.com" }}
            />

        </>
    );
}