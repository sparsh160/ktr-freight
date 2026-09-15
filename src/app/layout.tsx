import type { Metadata } from "next";
import { Bebas_Neue, Onest } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const bebasNeue = Bebas_Neue({
    variable: "--font-heading-raw",
    subsets: ["latin"],
    weight: "400",
});

const onest = Onest({
    variable: "--font-body-raw",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "KTR Freight | Asia to US 4PL — DDP, Drayage & Heavy Haul",
    description: "Asia–US 4PL freight: drayage, OTR trucking, customs clearance, DDP and company-operated warehouses in New Jersey, Chicago and Los Angeles. One contract, one landed cost.",
};

const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://ktrfreight.com/#org",
    name: "KTR Freight Pvt Ltd",
    alternateName: "KTR Freight",
    url: "https://ktrfreight.com",
    logo: "https://ktrfreight.com/images/white-logo.png",
    email: "info@ktrfreight.com",
    description: "Asia–US 4PL logistics company: drayage, OTR trucking, customs clearance, DDP, project cargo and heavy haul, with company-operated warehouses in New Jersey, Chicago and Los Angeles.",
    foundingDate: "2022",
    address: [
        { "@type": "PostalAddress", streetAddress: "1103-05, 11th Floor, JMD Megapolis, Sohna Road", addressLocality: "Gurugram", addressRegion: "Haryana", postalCode: "122018", addressCountry: "IN" },
        { "@type": "PostalAddress", streetAddress: "1013, 1st Floor, Aerocity Corporate Park, Andheri-Shivaji Nagar, Saki Naka", addressLocality: "Mumbai", addressRegion: "Maharashtra", postalCode: "400072", addressCountry: "IN" }
    ],
    areaServed: ["US", "IN", "CN", "VN", "KR", "TW"],
    knowsAbout: ["freight forwarding", "4PL logistics", "drayage", "DDP shipping", "customs clearance", "Section 301 tariffs", "project cargo", "heavy haul", "power transformer transport", "Amazon FBA logistics", "solar logistics", "data center logistics"],
    sameAs: ["https://www.linkedin.com/company/ktr-freight"]
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${bebasNeue.variable} ${onest.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col font-body">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}