"use client";

import React from "react";
import {
    Rocket,
    Truck,
    ShieldCheck,
    Users,
    Globe,
    Package,
    Clock,
    Building2,
    Factory,
    ClipboardCheck,
    FileText,
    Handshake,
    type LucideIcon,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

/* ------------------------------------------------------------------ */
/* Icon registry                                                       */
/*                                                                      */
/* AudienceCardGrid is a Client Component. Passing a component         */
/* reference (like a lucide icon) as a prop from a Server Component    */
/* isn't allowed — React can only serialize plain data across that     */
/* boundary. So `icon` is a string key looked up in this map, not a    */
/* component. Add more entries here as you need new icons.             */
/* ------------------------------------------------------------------ */

export const audienceCardIcons = {
    rocket: Rocket,
    truck: Truck,
    shield: ShieldCheck,
    users: Users,
    globe: Globe,
    package: Package,
    clock: Clock,
    building: Building2,
    factory: Factory,
    checklist: ClipboardCheck,
    document: FileText,
    handshake: Handshake,
} satisfies Record<string, LucideIcon>;

export type AudienceCardIconName = keyof typeof audienceCardIcons;

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface AudienceCardData {
    /** Key into `audienceCardIcons`, e.g. "rocket". */
    icon: AudienceCardIconName;
    title: string;
    description: string;
}

export interface AudienceCardGridProps {
    headingBold: string;
    description: string;
    cards: AudienceCardData[];
    className?: string;
}

/* ------------------------------------------------------------------ */
/* Animation variants                                                  */
/* ------------------------------------------------------------------ */

const headingFade: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const gridContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const iconVariants: Variants = {
    hidden: { opacity: 0, scale: 0.7, rotate: -8 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { duration: 0.45, ease: "easeOut", delay: 0.1 },
    },
};

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

const AudienceCardGrid: React.FC<AudienceCardGridProps> = ({
    headingBold,
    description,
    cards,
    className = "",
}) => {
    return (
        <section className={`w-full bg-[#F2F1EE] py-14 sm:py-16 md:py-20 ${className}`}>
            <div className="max-w-[1340px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
                {/* Heading row */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10 md:mb-14">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={headingFade}
                        className="font-heading text-[26px] sm:text-[32px] md:text-[38px] uppercase leading-tight text-gray-900"
                    >
                        {headingBold}
                    </motion.h2>

                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={headingFade}
                        transition={{ delay: 0.1 }}
                        className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-md lg:text-left"
                    >
                        {description}
                    </motion.p>
                </div>

                {/* Card grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={gridContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
                >
                    {cards.map((card, i) => {
                        const Icon = audienceCardIcons[card.icon] ?? Rocket;
                        return (
                            <motion.div
                                key={card.title + i}
                                variants={cardVariants}
                                className="bg-white p-7 sm:p-8"
                            >
                                <motion.div variants={iconVariants} className="mb-9 sm:mb-11">
                                    <Icon size={28} strokeWidth={1.5} className="text-gray-900" />
                                </motion.div>

                                <h3 className="font-heading uppercase text-[18px] sm:text-[21px]  text-gray-900 leading-snug mb-3">
                                    {card.title}
                                </h3>
                                <p className="text-gray-500 text-[14px] sm:text-[14.5px] leading-relaxed">
                                    {card.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default AudienceCardGrid;