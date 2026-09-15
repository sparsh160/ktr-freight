import type { Metadata } from "next";
import Expertise from "@/pages/Expertise";

export const metadata: Metadata = {
    title: "Expertise | Asia–US Lane Expertise: FMCSA, Section 301, DDP ",
    description:
        "FMCSA-vetted carriers, Section 301 and ADD/CVD duty modelling, audit-proof DDP and 24/7 India-hours exception coverage across the Asia–US lane.",
};

export default function Page() {
    return <Expertise />;
}