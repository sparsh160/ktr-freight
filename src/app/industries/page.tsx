import type { Metadata } from "next";
import Industries from "@/pages/Industries";

export const metadata: Metadata = {
    title: "Industries | Energy, Solar, Semiconductor & Project Cargo Logistics",
    description:
        "Drayage, OTR trucking, first mile, final mile, customs, DDP and US warehousing — take any one on its own or hand KTR Freight the whole lane.",
};

export default function Page() {
    return <Industries />;
}