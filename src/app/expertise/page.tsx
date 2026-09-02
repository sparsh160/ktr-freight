import type { Metadata } from "next";
import Expertise from "@/pages/Expertise";

export const metadata: Metadata = {
    title: "Expertise | KTR Freight — Ten Capabilities, One Accountable Owner",
    description:
        "Drayage, OTR trucking, first mile, final mile, customs, DDP and US warehousing — take any one on its own or hand KTR Freight the whole lane.",
};

export default function Page() {
    return <Expertise />;
}