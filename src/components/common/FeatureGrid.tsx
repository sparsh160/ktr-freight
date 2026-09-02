"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export interface FeatureItem {
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
    /** Relative width within its row. Default 1 (equal split with siblings). */
    weight?: number;
    /** Tailwind classes controlling the image's absolutely-positioned box
     *  (size + offset) inside the card. Defaults to a small inset bottom-right box. */
    imageBoxClassName?: string;
    /** Minimum card height. Defaults to a sensible responsive value. */
    minHeightClassName?: string;
}

export interface FeatureGridProps {
    /** Bold, dark part of the heading */
    headingBold: string;
    /** Lighter/gray continuation of the heading */
    headingLight: string;
    description: string;
    /** Each inner array is one row. Row 1 can have 2 unevenly-weighted cards,
     *  row 2 can have 3 equal cards, etc — entirely up to what you pass in. */
    rows: FeatureItem[][];
    className?: string;
}

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const FeatureCard: React.FC<{ item: FeatureItem }> = ({ item }) => (
    <motion.div
        variants={cardVariants}
        style={{ flexGrow: item.weight ?? 1, flexBasis: 0 }}
        className={`relative bg-white  shadow-sm overflow-hidden p-6 sm:p-7 md:p-8 flex flex-col ${
            item.minHeightClassName ?? "min-h-[240px] sm:min-h-[260px] md:min-h-[280px]"
        }`}
    >
        <h3 className="text-[17px] sm:text-[19px] md:text-[21px] font-semibold text-gray-900 mb-3 max-w-[80%]">
            {item.title}
        </h3>
        <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed max-w-sm">
            {item.description}
        </p>

        <div
            className={
                item.imageBoxClassName ??
                "absolute bottom-5 right-5 sm:bottom-6 sm:right-6 w-[26%] sm:w-[24%] h-[32%] sm:h-[34%]"
            }
        >
            <Image
                src={item.image}
                alt={item.imageAlt ?? ""}
                fill
                className="object-contain object-right-bottom"
            />
        </div>
    </motion.div>
);

const FeatureGrid: React.FC<FeatureGridProps> = ({
    headingBold,
    headingLight,
    description,
    rows,
    className = "",
}) => {
    return (
        <section className={`w-full bg-[#F2F1EE] py-14 sm:py-16 md:py-20 ${className}`}>
            <div className="max-w-[1340px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
                {/* Heading row */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10 md:mb-14">
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
                        className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed max-w-md lg:text-left shrink-0"
                    >
                        {description}
                    </motion.p>
                </div>

                {/* Rows */}
                <div className="flex flex-col gap-4 sm:gap-5">
                    {rows.map((row, rowIdx) => (
                        <motion.div
                            key={rowIdx}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            className="flex flex-col sm:flex-row gap-4 sm:gap-5"
                        >
                            {row.map((item) => (
                                <FeatureCard key={item.title} item={item} />
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;