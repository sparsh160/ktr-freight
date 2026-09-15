import type { Metadata } from "next";
import Projects from "@/pages/Projects";

export const metadata: Metadata = {
    title: "Projects | US Warehouses: New Jersey, Chicago & Los Angeles ",
    description:
        "Company-operated warehouses in NJ, Chicago and LA plus offices in Gurugram and Mumbai — deconsolidation, cross-dock, FBA prep and staged release to site.",
};

export default function Page() {
    return <Projects />;
}