"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export interface IndustryItem {
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
    href?: string;
}

export interface IndustriesGridProps {
    /** Bold heading, e.g. "The freight we know cold" */
    headingBold: string;
    description: string;
    ctaLabel?: string;
    ctaHref?: string;
    industries: IndustryItem[];
    /** Columns at the widest breakpoint. Default 4. */
    columns?: 2 | 3 | 4;
    className?: string;
}

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const IndustriesGrid: React.FC<IndustriesGridProps> = ({
    headingBold,
    description,
    ctaLabel = "View all Industries",
    ctaHref = "#",
    industries,
    columns = 4,
    className = "",
}) => {
    const lgColsClass =
        columns === 2
            ? "lg:grid-cols-2"
            : columns === 3
            ? "lg:grid-cols-3"
            : "lg:grid-cols-4";

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
                        className="font-heading text-[26px] sm:text-[32px] md:text-[38px] uppercase leading-tight text-gray-900"
                    >
                        {headingBold}
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="max-w-md lg:text-left"
                    >
                        <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed mb-5">
                            {description}
                        </p>
                        <Link href={ctaHref}>
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-blue-600 hover:bg-blue-700 text-white text-[14px] sm:text-[15px] font-medium rounded-md px-6 py-3 transition-colors"
                            >
                                {ctaLabel}
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className={`grid grid-cols-1 sm:grid-cols-2 ${lgColsClass} gap-x-6 gap-y-10`}
                >
                    {industries.map((item) => {
                        const cardInner = (
                            <>
                                <div className="relative w-full aspect-square overflow-hidden mb-5 bg-gray-100">
                                    <Image
                                        src={item.image}
                                        alt={item.imageAlt ?? item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-[16px] sm:text-[24px]  uppercase leading-snug text-gray-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-[13px] sm:text-[13.5px] text-gray-500 leading-relaxed line-clamp-2">
                                    {item.description}
                                </p>
                            </>
                        );

                        return (
                            <motion.div key={item.title} variants={cardVariants} className="group">
                                {item.href ? (
                                    <Link href={item.href} className="block">
                                        {cardInner}
                                    </Link>
                                ) : (
                                    cardInner
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default IndustriesGrid;