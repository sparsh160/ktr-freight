"use client";

import React from "react";
import { motion } from "framer-motion";

export interface PageTitleBannerProps {
    /** Rendered as an <h1> */
    heading: string;
    /** Any valid CSS color (hex, rgb, named). Default matches the reference blue. */
    backgroundColor?: string;
    /** Large, faint decorative text in the background (e.g. repeating the heading
     *  or a related word), matching the ghosted typography in the reference. */
    decorativeText?: string;
    minHeightClassName?: string;
    className?: string;
}

const PageTitleBanner: React.FC<PageTitleBannerProps> = ({
    heading,
    backgroundColor = "#4169F0",
    decorativeText,
    minHeightClassName = "min-h-[320px] sm:min-h-[360px] md:min-h-[420px]",
    className = "",
}) => {
    return (
        <section
            className={`relative w-full flex items-center overflow-hidden pt-[110px] sm:pt-[120px] ${minHeightClassName} ${className}`}
            style={{ backgroundColor }}
        >
            {decorativeText && (
                <span
                    aria-hidden="true"
                    className="font-heading absolute right-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-[140px] sm:text-[200px] md:text-[260px] uppercase leading-none text-white/10 select-none pointer-events-none"
                >
                    {decorativeText}
                </span>
            )}

            <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="font-heading text-[42px] sm:text-[56px] md:text-[68px] uppercase leading-none text-white"
                >
                    {heading}
                </motion.h1>
            </div>
        </section>
    );
};

export default PageTitleBanner;