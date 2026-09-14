"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export interface WhoWeAreBadge {
    /** e.g. "Founded in" */
    label: string;
    /** e.g. "2013" */
    value: string;
}

export interface WhoWeAreSectionProps {
    heading: string;
    /** One paragraph of body copy per array entry */
    paragraphs: string[];
    image: string;
    imageAlt?: string;
    /** Small overlapping card at the bottom-right of the image. Omit to hide it. */
    badge?: WhoWeAreBadge;
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

const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85, y: 16 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 260, damping: 20, delay: 0.5 },
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

const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({
    heading,
    paragraphs,
    image,
    imageAlt = "",
    badge,
    className = "",
}) => {
    return (
        <section className={`w-full bg-[#F2F1EE] py-14 sm:py-16 md:py-20 ${className}`}>
            <div className="max-w-[1340px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
                <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
                    {/* Image + badge */}
                    <div className="relative w-full lg:w-[46%] shrink-0">
                        <motion.div
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden"
                        >
                            <Image
                                src={image}
                                alt={imageAlt}
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {badge && (
                            <motion.div
                                variants={badgeVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                className="absolute bottom-0 right-0 translate-x-0  bg-[#F2F1EE] px-6 sm:px-8 py-5 sm:py-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] max-w-[200px] sm:max-w-[220px]"
                            >
                                <p className="text-[11px] sm:text-[12px] tracking-[0.08em] uppercase text-gray-500 font-medium mb-1.5">
                                    {badge.label}
                                </p>
                                <p className="text-[32px] sm:text-[38px] font-bold text-gray-900 leading-none">
                                    {badge.value}
                                </p>
                            </motion.div>
                        )}
                    </div>

                    {/* Text */}
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
            </div>
        </section>
    );
};

export default WhoWeAreSection;