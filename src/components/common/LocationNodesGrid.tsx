"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export interface LocationNodeItem {
    /** e.g. "NODE 01 — EAST" */
    label: string;
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
    href?: string;
}

export interface LocationNodesGridProps {
    heading: string;
    description: string;
    items: LocationNodeItem[];
    /** Columns at the widest breakpoint. Default 3. */
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

const LocationNodesGrid: React.FC<LocationNodesGridProps> = ({
    heading,
    description,
    items,
    columns = 3,
    className = "",
}) => {
    const lgColsClass =
        columns === 2 ? "lg:grid-cols-2" : columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

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

                {/* Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className={`grid grid-cols-1 sm:grid-cols-2 ${lgColsClass} gap-6 md:gap-8`}
                >
                    {items.map((item) => {
                        const cardInner = (
                            <>
                                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                                    <Image
                                        src={item.image}
                                        alt={item.imageAlt ?? item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="border-t border-gray-100 px-6 sm:px-7 py-6 sm:py-7">
                                    <p className="text-[12px] sm:text-[13px] font-medium tracking-[0.06em] uppercase text-gray-500 mb-3">
                                        {item.label}
                                    </p>
                                    <h3 className="text-[22px] sm:text-[24px] font-bold text-gray-900 mb-3 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </>
                        );

                        return (
                            <motion.div
                                key={item.label}
                                variants={cardVariants}
                                className="group bg-white flex flex-col"
                            >
                                {item.href ? (
                                    <Link href={item.href} className="flex flex-col h-full">
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

export default LocationNodesGrid;