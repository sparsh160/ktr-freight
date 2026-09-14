import type { Metadata } from "next";
import Network from "@/pages/Network";

export const metadata: Metadata = {
    title: "Network | US Warehouses: New Jersey, Chicago & Los Angeles ",
    description:
        "Drayage, OTR trucking, first mile, final mile, customs, DDP and US warehousing — take any one on its own or hand KTR Freight the whole lane.",
};

export default function Page() {
    return <Network />;
}