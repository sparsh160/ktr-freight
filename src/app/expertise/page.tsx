import type { Metadata } from "next";
import Expertise from "@/pages/Expertise";

export const metadata: Metadata = {
    title: "Expertise | Asia–US Lane Expertise: FMCSA, Section 301, DDP ",
    description:
        "Drayage, OTR trucking, first mile, final mile, customs, DDP and US warehousing — take any one on its own or hand KTR Freight the whole lane.",
};

export default function Page() {
    return <Expertise />;
}