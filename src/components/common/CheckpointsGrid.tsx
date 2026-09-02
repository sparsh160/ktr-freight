"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export interface CheckpointItem {
    step: string;
    title: string;
    description: string;
}

export interface CheckpointsGridProps {
    headingBold: string;
    headingLight: string;
    description: string;
    items: CheckpointItem[];
    columns?: 2 | 3;
    className?: string;
}

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const CheckpointsGrid: React.FC<CheckpointsGridProps> = ({
    headingBold,
    headingLight,
    description,
    items,
    columns = 3,
    className = "",
}) => {
    const lgColsClass = columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";

    return (
        <section className={`w-full bg-[#F2F1EE] py-14 sm:py-16 md:py-20 ${className}`}>
            <div className="max-w-[1340px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
                {/* Heading row */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="font-heading text-[26px] sm:text-[32px] md:text-[38px] uppercase leading-tight"
                    >
                        <span className="text-gray-900">{headingBold}</span>{" "}
                        <span className="text-gray-400">{headingLight}</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-md lg:text-left shrink-0"
                    >
                        {description}
                    </motion.p>
                </div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className={`grid grid-cols-1 sm:grid-cols-2 ${lgColsClass} gap-x-8 gap-y-10 md:gap-x-10 md:gap-y-12`}
                >
                    {items.map((item) => (
                        <motion.div key={item.step} variants={itemVariants} className="flex items-stretch">
                            {/* Step badge + connector line — centered against full card height */}
                            <div className="flex items-center shrink-0">
                                <span className="bg-black text-white text-[12px] sm:text-[13px] font-medium px-3.5 sm:px-4 py-2 sm:py-2.5 whitespace-nowrap">
                                    {item.step}
                                </span>
                                <span className="w-6 sm:w-9 h-px bg-gray-400" />
                            </div>

                            {/* Dashed card */}
                            <div className="flex-1 min-w-0 border border-dashed border-gray-300 p-5 sm:p-6">
                                <h3
                                    style={{
                                        fontFamily: "inherit",
                                        textTransform: "none",
                                        letterSpacing: "normal",
                                    }}
                                    className="text-[17px] sm:text-[19px] font-semibold text-gray-900 mb-2"
                                >
                                    {item.title}
                                </h3>
                                <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CheckpointsGrid;