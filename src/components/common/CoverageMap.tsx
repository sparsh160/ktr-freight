"use client";

import React, { useId } from "react";
import { motion, Variants } from "framer-motion";

export interface CoverageItem {
    title: string;
    /** e.g. "LAX / LGB, NY / NJ, Savannah, Houston, Norfolk, Seattle–Tacoma, Charleston, Oakland" */
    locations: string;
    /** e.g. "Drayage, transload and free-time management" */
    tagline: string;
}

export interface CoverageMapProps {
    heading: string;
    description: string;
    items: CoverageItem[];
    /** Columns at the widest breakpoint. Default 4. */
    columns?: 2 | 3 | 4;
    className?: string;
}

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
};

const cellVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const CoverageMap: React.FC<CoverageMapProps> = ({
    heading,
    description,
    items,
    columns = 4,
    className = "",
}) => {
    const gridId = useId().replace(/:/g, "");
    const gridClass = `cm-grid-${gridId}`;

    return (
        <section className={`w-full bg-[#F2F1EE] py-14 sm:py-16 md:py-20 ${className}`}>
            <style>{`
                .${gridClass} {
                    grid-template-columns: 1fr;
                }
                @media (min-width: 640px) {
                    .${gridClass} { grid-template-columns: repeat(2, 1fr); }
                }
                @media (min-width: 1024px) {
                    .${gridClass} { grid-template-columns: repeat(${columns}, 1fr); }
                }
            `}</style>

            <div className="max-w-[1340px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
                {/* Heading row */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10 md:mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="font-heading text-[26px] sm:text-[32px] md:text-[38px] uppercase leading-tight text-gray-900"
                    >
                        {heading}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-xl lg:text-left"
                    >
                        {description}
                    </motion.p>
                </div>

                {/* Bordered grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className={`grid border-t border-l border-gray-300 ${gridClass}`}
                >
                    {items.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={cellVariants}
                            className="border-r border-b border-gray-300 p-6 sm:p-7"
                        >
                            <h3 className="text-[18px] sm:text-[19px]  text-gray-900 mb-4">
                                {item.title}
                            </h3>
                            <p className="text-[13.5px] sm:text-[14.5px] text-gray-500 leading-relaxed mb-3">
                                {item.locations}
                            </p>
                            <p className="text-[13.5px] sm:text-[14.5px] text-gray-500 leading-relaxed">
                                {item.tagline}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CoverageMap;