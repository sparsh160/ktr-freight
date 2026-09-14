"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export interface StatItem {
    /** e.g. "24/7", "10 yrs+", "2013" */
    value: string;
    label: string;
}

export interface ImageStatsSectionProps {
    heading: string;
    /** One paragraph of body copy per array entry */
    paragraphs: string[];
    image: string;
    imageAlt?: string;
    stats: StatItem[];
    /** Any valid CSS color (hex, rgb, named). Default matches the reference: "#E7ECF3" */
    backgroundColor?: string;
    className?: string;
}

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 1.04 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

const textContainerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const statsContainerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const statItemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const ImageStatsSection: React.FC<ImageStatsSectionProps> = ({
    heading,
    paragraphs,
    image,
    imageAlt = "",
    stats,
    backgroundColor = "#E7ECF3",
    className = "",
}) => {
    return (
        <section
            className={`w-full py-14 sm:py-16 md:py-20 ${className}`}
            style={{ backgroundColor }}
        >
            <div className="max-w-[1340px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
                {/* Image + text */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 mb-14 sm:mb-16 md:mb-20">
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative w-full lg:w-[46%] shrink-0 aspect-[3/2] overflow-hidden"
                    >
                        <Image src={image} alt={imageAlt} fill className="object-cover" />
                    </motion.div>

                    <motion.div
                        variants={textContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="w-full lg:w-[54%]"
                    >
                        <motion.h2
                            variants={textItemVariants}
                            className="font-heading text-[28px] sm:text-[34px] md:text-[40px] uppercase leading-tight text-gray-900 mb-6"
                        >
                            {heading}
                        </motion.h2>

                        <div className="space-y-5 sm:space-y-6">
                            {paragraphs.map((p, idx) => (
                                <motion.p
                                    key={idx}
                                    variants={textItemVariants}
                                    className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-2xl"
                                >
                                    {p}
                                </motion.p>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Stats row */}
                <motion.div
                    variants={statsContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-y-8"
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            variants={statItemVariants}
                            className={`px-0 lg:px-6 first:lg:pl-0 ${
                                idx !== 0 ? "lg:border-l lg:border-gray-400/40" : ""
                            }`}
                        >
                            <p className="text-[34px] sm:text-[40px] md:text-[44px] font-bold text-gray-900 leading-none mb-2">
                                {stat.value}
                            </p>
                            <p className="text-[11px] sm:text-[12px] tracking-[0.06em] uppercase text-gray-500 font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ImageStatsSection;