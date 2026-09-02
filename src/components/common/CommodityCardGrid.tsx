"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface CommodityCardData {
    image: string;
    imageAlt?: string;
    title: string;
    description: string;
    tags: string[];
}

export interface CommodityCardGridProps {
    cards: CommodityCardData[];
    /** Number of columns at the lg breakpoint and up. Default 2. */
    columns?: 1 | 2 | 3;
    className?: string;
}

/* ------------------------------------------------------------------ */
/* Animation variants                                                  */
/* ------------------------------------------------------------------ */

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeOut", delay: i * 0.12 },
    }),
};

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 1.04 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const contentContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const colClasses: Record<1 | 2 | 3, string> = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
};

/* ------------------------------------------------------------------ */
/* Single card                                                         */
/* ------------------------------------------------------------------ */

const CommodityCard: React.FC<{ card: CommodityCardData; index: number }> = ({ card, index }) => {
    return (
        <motion.article
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-200">
                <motion.div variants={imageVariants} className="absolute inset-0">
                    <Image
                        src={card.image}
                        alt={card.imageAlt ?? card.title}
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>

            <motion.div
                variants={contentContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="mt-6 sm:mt-7"
            >
                <motion.h2
                    variants={fadeUp}
                    className="font-heading uppercase text-[22px] sm:text-[26px] md:text-[28px]  text-gray-900 leading-tight"
                >
                    {card.title}
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    className="mt-4 text-gray-600 text-[15px] sm:text-[16px] leading-relaxed max-w-xl"
                >
                    {card.description}
                </motion.p>

                <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
                    {card.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="border border-gray-300 px-4 sm:px-5 py-2.5 sm:py-3 text-[13.5px] sm:text-[14px] text-gray-800 whitespace-nowrap"
                        >
                            {tag}
                        </span>
                    ))}
                </motion.div>
            </motion.div>
        </motion.article>
    );
};

/* ------------------------------------------------------------------ */
/* Grid                                                                 */
/* ------------------------------------------------------------------ */

const CommodityCardGrid: React.FC<CommodityCardGridProps> = ({ cards, columns = 2, className = "" }) => {
    return (
        <section className={`w-full bg-[#F2F1EE] py-14 sm:py-16 md:py-20 ${className}`}>
            <div className="max-w-[1340px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
                <div className={`grid grid-cols-1 ${colClasses[columns]} gap-x-12 lg:gap-x-16 gap-y-14 md:gap-y-16`}>
                    {cards.map((card, i) => (
                        <CommodityCard key={card.title + i} card={card} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommodityCardGrid;
export { CommodityCard };