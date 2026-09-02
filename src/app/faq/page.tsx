import type { Metadata } from "next";
import FAQs from "@/pages/FAQs";

export const metadata: Metadata = {
    title: "FAQs | KTR Freight — Ten Capabilities, One Accountable Owner",
    description:
        "Drayage, OTR trucking, first mile, final mile, customs, DDP and US warehousing — take any one on its own or hand KTR Freight the whole lane.",
};

export default function Page() {
    return <FAQs />;
}