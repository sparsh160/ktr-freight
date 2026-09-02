import type { Metadata } from "next";
import Blog from "@/pages/Blog";

export const metadata: Metadata = {
    title: "Blog | KTR Freight — Ten Capabilities, One Accountable Owner",
    description:
        "Drayage, OTR trucking, first mile, final mile, customs, DDP and US warehousing — take any one on its own or hand KTR Freight the whole lane.",
};

export default function Page() {
    return <Blog />;
}