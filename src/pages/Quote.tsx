
import HeroSection from "@/components/common/HeroSection";
import PageTitleBanner from "@/components/common/PageTitleBanner";
import QuoteFormSection from "@/components/common/QuoteFormSection";
import type { QuoteFormValues } from "@/components/common/QuoteFormSection";
 
async function handleQuoteSubmit(data: QuoteFormValues) {
    "use server";
    // Wire this up to your email service / API route, e.g.:
    // await fetch("/api/quote", { method: "POST", body: JSON.stringify(data) });
    console.log("New lane quote request:", data);
}

export default function Quote() {
    return (
        <>
            
            <PageTitleBanner heading="Start a lane quote" backgroundColor="#2B6BFF" />

            <QuoteFormSection
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
                    {
                        city: "USA",
                        address: "Suite#304 1560 Wall St, Naperville, IL 60563",
                    },
                ]}
                email="info@ktrfreight.com"
                phone="+91 9289773486"
                formHeading="Start a lane quote"
                submitLabel="Request a quote"
                onSubmit={handleQuoteSubmit}
            />

            <HeroSection
                image="/images/truck-1.png"
                imageAlt="Semi truck driving on a highway at sunset"
                heading={"Send us the lane. We'll\nsend back the landed\nnumber."}
                description="Origin, commodity, dimensions, weight, destination and the date it has to be on site. That's enough for us to come back with a routing and a delivered price."
                primaryCta={{ label: "Contact Us", href: "/contact" }}
                secondaryCta={{ label: "info@ktrfreight.com", href: "mailto:info@ktrfreight.com" }}
            />

        </>
    );
}