"use client";

import React from "react";
import Link from "next/link";
import { Truck, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface NotFoundPageProps {
    /** Big background numeral. Default "404". */
    code?: string;
    eyebrow?: string;
    heading?: string;
    subtext?: string;
    homeLabel?: string;
    homeHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    className?: string;
}

/* ------------------------------------------------------------------ */
/* Animation variants                                                  */
/* ------------------------------------------------------------------ */

const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const codeReveal: Variants = {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

const NotFoundPage: React.FC<NotFoundPageProps> = ({
    code = "404",
    eyebrow = "Error 404",
    heading = "This lane doesn't exist.",
    subtext = "The page you're after got rerouted, renamed, or never left the yard. Let's get you back on the road.",
    homeLabel = "Back to homepage",
    homeHref = "/",
    secondaryLabel = "Contact support",
    secondaryHref = "mailto:info@ktrfreight.com",
    className = "",
}) => {
    return (
        <section
            className={`relative w-full min-h-screen bg-[#F2F1EE] flex items-center justify-center overflow-hidden px-6 ${className}`}
        >
            {/* Ghost numeral background */}
            <motion.span
                variants={codeReveal}
                initial="hidden"
                animate="visible"
                aria-hidden="true"
                className="pointer-events-none select-none absolute inset-0 flex items-center justify-center font-heading font-extrabold text-[34vw] sm:text-[28vw] lg:text-[24vw] leading-none text-gray-900/[0.05] tracking-tight"
            >
                {code}
            </motion.span>

            {/* Content */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex flex-col items-center text-center max-w-xl"
            >
                <motion.span
                    variants={fadeUp}
                    className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-semibold text-[#4338EC] mb-5"
                >
                    {eyebrow}
                </motion.span>

                <motion.h1
                    variants={fadeUp}
                    className="font-heading uppercase text-[32px] sm:text-[42px] md:text-[48px] font-bold leading-[1.05] text-gray-900 mb-5"
                >
                    {heading}
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    className="text-gray-600 text-[15px] sm:text-[16px] leading-relaxed mb-9 max-w-md"
                >
                    {subtext}
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
                    <Link
                        href={homeHref}
                        className="group inline-flex items-center gap-2 bg-[#4338EC] hover:bg-[#372FC4] transition-colors text-white text-[15px] font-medium px-6 sm:px-7 py-3.5"
                    >
                        {homeLabel}
                        <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-0.5"
                        />
                    </Link>

                    <Link
                        href={secondaryHref}
                        className="inline-flex items-center justify-center bg-white hover:bg-gray-100 transition-colors border border-gray-300 text-gray-800 text-[15px] font-medium px-6 sm:px-7 py-3.5"
                    >
                        {secondaryLabel}
                    </Link>
                </motion.div>

                {/* Road + driving truck */}
                <motion.div variants={fadeUp} className="relative w-full max-w-sm h-14">
                    <div className="absolute left-0 right-0 top-1/2 h-[3px] bg-gray-300/70 -translate-y-1/2" />
                    <motion.div
                        aria-hidden="true"
                        className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 [background-image:repeating-linear-gradient(to_right,theme(colors.gray.500)_0px,theme(colors.gray.500)_16px,transparent_16px,transparent_32px)]"
                        animate={{ backgroundPositionX: [0, -32] }}
                        transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute top-1/2"
                        style={{ translateY: "-68%" }}
                        animate={{ x: ["-10%", "340%"] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
                    >
                        <motion.div
                            animate={{ y: [0, -2, 0] }}
                            transition={{ duration: 0.35, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Truck size={30} strokeWidth={1.75} className="text-gray-900" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default NotFoundPage;