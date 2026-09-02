
import HeroSection from "@/components/common/HeroSection";
import PageTitleBanner from "@/components/common/PageTitleBanner";
import ContactSection from "@/components/common/ContactSection";
import type { ContactFormValues } from "@/components/common/ContactSection";

async function handleContactSubmit(data: ContactFormValues) {
    "use server";
    // Wire this up to your email service / API route, e.g.:
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
    console.log("New contact submission:", data);
}

export default function Contact() {
    return (
        <>
            
            <PageTitleBanner heading="Contact Us" backgroundColor="#2B6BFF" />

            <ContactSection
                heading="Office Locations"
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