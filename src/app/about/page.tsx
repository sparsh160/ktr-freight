import type { Metadata } from "next";
import About from "@/pages/About";

export const metadata: Metadata = {
    title: "About | Get a Lane Quote — Asia to US Freight ",
    description:
        "Drayage, OTR trucking, first mile, final mile, customs, DDP and US warehousing — take any one on its own or hand KTR Freight the whole lane.",
};

export default function Page() {
    return <About />;
}