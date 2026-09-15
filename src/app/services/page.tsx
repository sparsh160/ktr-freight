import type { Metadata } from "next";
import Services from "@/pages/Services";

export const metadata: Metadata = {
    title: "Services | Drayage, OTR, DDP Customs & US Warehousing ",
    description:
        "Ten freight capabilities from factory floor in Asia to job site in America — drayage, OTR, first/final mile, customs & DDP, project cargo, Amazon FBA and 4PL control tower.",
};

const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: { "@id": "https://ktrfreight.com/#org" },
    serviceType: "4PL Freight Logistics",
    areaServed: ["US", "IN"],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Freight Services",
        itemListElement: [
            "Drayage",
            "Over-the-road trucking",
            "First mile",
            "Final mile",
            "Customs clearance & DDP",
            "Warehousing & distribution",
            "Project cargo & heavy haul",
            "Amazon freight",
            "Scrap & recyclables",
            "4PL control tower",
        ].map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s },
        })),
    },
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
            />
            <Services />
        </>
    );
}