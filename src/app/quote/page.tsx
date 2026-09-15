import type { Metadata } from "next";

import Quote from "@/pages/Quote";

export const metadata: Metadata = {
    title: "Quote | Get a Lane Quote — Asia to US Freight ",
    description:
        "Send origin, commodity, dimensions, weight and delivery date. KTR returns a routing and one delivered, duty-paid number. 24/7 desk: info@ktrfreight.com.",
};

export default function Page() {
    return <Quote />;
}