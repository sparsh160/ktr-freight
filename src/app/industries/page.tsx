import type { Metadata } from "next";
import Industries from "@/pages/Industries";

export const metadata: Metadata = {
    title: "Industries | Energy, Solar, Semiconductor & Project Cargo Logistics",
    description:
        "Specialist Asia–US logistics for power transmission, solar, semiconductors, data centres, metals, scrap and Amazon sellers. Deliberately narrow, deeply known.",
};

export default function Page() {
    return <Industries />;
}