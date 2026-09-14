import type { Metadata } from "next";
import Services from "@/pages/Services";

export const metadata: Metadata = {
    title: "Services | Drayage, OTR, DDP Customs & US Warehousing ",
    description:
        "Drayage, OTR trucking, first mile, final mile, customs, DDP and US warehousing — take any one on its own or hand KTR Freight the whole lane.",
};

export default function Page() {
    return <Services />;
}