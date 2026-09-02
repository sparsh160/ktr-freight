import type { Metadata } from "next";
import Home from "@/pages/Home";

export const metadata: Metadata = {
    title: "KTR Freight | 4PL Freight Forwarding — Asia to United States",
    description:
        "KTR Freight controls the whole lane — factory floor in Asia to energised job site in America. Drayage, OTR trucking, customs, DDP and US warehousing under one 4PL programme.",
};

export default function Page() {
    return <Home />;
}