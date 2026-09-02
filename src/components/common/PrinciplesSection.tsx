"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export interface PrincipleItem {
    /** e.g. "01" — rendered as "#01" */
    number: string;
    title: string;
    description: string;
}

export interface PrinciplesSectionProps {
    /** Line breaks in the string become <br /> */
    heading: string;
    description: string;
    items: PrincipleItem[];
    /** Any valid CSS color (hex, rgb, named). Default matches the reference: "#E7ECF3" */
    backgroundColor?: string;
    className?: string;
}

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const rowVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const PrinciplesSection: React.FC<PrinciplesSectionProps> = ({
    heading,
    description,
    items,
    backgroundColor = "#E7ECF3",
    className = "",
}) => {
    const headingLines = heading.split("\n");

    return (
        <section
            className={`w-full py-14 sm:py-16 md:py-20 ${className}`}
            style={{ backgroundColor }}
        >
            <div className="max-w-[1340px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-40">
                    {/* Left: sticky heading + description */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                        className="w-full lg:w-[36%] lg:sticky lg:top-28 self-start"
                    >
                        <h2 className="font-heading text-[26px] sm:text-[32px] md:text-[32px] uppercase leading-tight text-gray-900 mb-6">
                            {headingLines.map((line, idx) => (
                                <React.Fragment key={idx}>
                                    {line}
                                    {idx < headingLines.length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </h2>
                        <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed max-w-md">
                            {description}
                        </p>
                    </motion.div>

                    {/* Right: scrollable numbered list */}
                    <div className="w-full lg:w-[64%]">
                        {items.map((item, idx) => (
                            <motion.div
                                key={item.number}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={rowVariants}
                                className={`grid grid-cols-1 sm:grid-cols-[64px_1fr_1.3fr] gap-x-6 gap-y-1.5 py-6 sm:py-7 ${
                                    idx !== 0 ? "border-t border-gray-400/25" : ""
                                }`}
                            >
                                <span className="font-medium text-gray-900 text-[14px] sm:text-[15px]">
                                    #{item.number}
                                </span>
                                <h3
                                    style={{
                                        fontFamily: "inherit",
                                        textTransform: "none",
                                        letterSpacing: "normal",
                                    }}
                                    className="font-semibold text-gray-900 text-[16px] sm:text-[18px] leading-snug"
                                >
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-[13.5px] sm:text-[15px] leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrinciplesSection;