import type { Metadata } from "next";
import Home from "@/pages/Home";

export const metadata: Metadata = {
    title: "KTR Freight | 4PL Freight Forwarding — Asia to United States",
    description:
        "Asia–US 4PL freight: drayage, OTR trucking, customs clearance, DDP and company-operated warehouses in New Jersey, Chicago and Los Angeles. One contract, one landed cost.",
};

export default function Page() {
    return <Home />;
}