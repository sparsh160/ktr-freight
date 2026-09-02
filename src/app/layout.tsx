import type { Metadata } from "next";
import { Bebas_Neue, Onest } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const bebasNeue = Bebas_Neue({
    variable: "--font-heading-raw",
    subsets: ["latin"],
    weight: "400",
});

const onest = Onest({
    variable: "--font-body-raw",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "KTR Freight",
    description: "4PL freight forwarding — Asia to United States",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${bebasNeue.variable} ${onest.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col font-body">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}