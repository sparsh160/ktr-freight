"use client";

import React, { useId } from "react";
import {
    ArrowRight,
    LucideIcon,
    Rocket,
    Anchor,
    Plane,
    Shield,
    Truck,
    Warehouse,
    PackageCheck,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

/** Add more entries here as you need new icons in different usages of this component. */
const ICON_MAP = {
    rocket: Rocket,
    anchor: Anchor,
    plane: Plane,
    shield: Shield,
    truck: Truck,
    warehouse: Warehouse,
    packageCheck: PackageCheck,
} satisfies Record<string, LucideIcon>;

export type ProcessStepIcon = keyof typeof ICON_MAP;

export interface ProcessStep {
    number: string;
    title: string;
    description: string;
    /** String key, not a component reference — keeps this prop serializable
     *  when ProcessSteps is rendered from a Server Component. */
    icon: ProcessStepIcon;
}

export interface ProcessStepsProps {
    /** Bold, dark part of the heading, e.g. "One lane." */
    headingBold: string;
    /** Lighter/gray part of the heading, e.g. "Seven handoffs. We own all of them" */
    headingLight: string;
    steps: ProcessStep[];
    className?: string;
}

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const stepVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ProcessSteps: React.FC<ProcessStepsProps> = ({
    headingBold,
    headingLight,
    steps,
    className = "",
}) => {
    const gridId = useId().replace(/:/g, "");
    const gridClass = `ps-grid-${gridId}`;
    const desktopCols = steps.length;

    return (
        <section className={`w-full bg-[#F2F1EE] py-14 sm:py-16 md:py-20 ${className}`}>
            <style>{`
                .${gridClass} {
                    display: grid;
                    grid-template-columns: 1fr;
                    row-gap: 2.5rem;
                }
                .${gridClass} > div {
                    border-style: dashed;
                    border-color: #e5e7eb;
                    border-width: 0;
                }
                .${gridClass} > div:not(:first-child) {
                    border-top-width: 1px;
                    padding-top: 2rem;
                }
                @media (min-width: 640px) {
                    .${gridClass} {
                        grid-template-columns: repeat(2, 1fr);
                        column-gap: 2rem;
                    }
                    .${gridClass} > div {
                        border-top-width: 0;
                        padding-top: 0;
                        border-left-width: 0;
                        padding-left: 0;
                    }
                    .${gridClass} > div:nth-child(n+3) {
                        border-top-width: 1px;
                        padding-top: 2rem;
                    }
                    .${gridClass} > div:nth-child(2n) {
                        border-left-width: 1px;
                        padding-left: 2rem;
                    }
                }
                @media (min-width: 1024px) {
                    .${gridClass} {
                        grid-template-columns: repeat(${desktopCols}, 1fr);
                        row-gap: 0;
                    }
                    .${gridClass} > div {
                        border-top-width: 0 !important;
                        padding-top: 0 !important;
                        border-left-width: 0;
                        padding-left: 0;
                    }
                    .${gridClass} > div:not(:nth-child(${desktopCols}n+1)) {
                        border-left-width: 1px;
                        padding-left: 2rem;
                    }
                }
            `}</style>

            <div className="max-w-[1320px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="font-heading text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-extrabold uppercase leading-tight mb-10 sm:mb-12 md:mb-16"
                >
                    <span className="text-gray-900">{headingBold}</span>{" "}
                    <span className="text-gray-400">{headingLight}</span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className={gridClass}
                >
                    {steps.map((step) => {
                        const Icon = ICON_MAP[step.icon];

                        return (
                            <motion.div key={step.number} variants={stepVariants}>
                                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white text-[16px] sm:text-[18px] font-bold text-gray-900 mb-5 sm:mb-6 shadow-sm">
                                    {step.number}
                                </div>

                                <h3 className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wide text-gray-900 mb-3 sm:mb-4">
                                    {step.title}
                                </h3>

                                <div className="flex items-center gap-2 mb-4 sm:mb-5 pr-4">
                                    <Icon
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-gray-800 shrink-0 sm:w-[22px] sm:h-[22px]"
                                    />
                                    <div className="flex-1 border-t border-dashed border-gray-300" />
                                    <ArrowRight size={14} strokeWidth={1.5} className="text-gray-300 shrink-0" />
                                </div>

                                <p className="text-[12.5px] sm:text-[13px] text-gray-500 leading-relaxed max-w-[240px]">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ProcessSteps;