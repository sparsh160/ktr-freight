"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    ChevronRight,
    ChevronDown,
    Truck,
    Navigation,
    LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const ICON_MAP = {
    truck: Truck,
    navigation: Navigation,
} satisfies Record<string, LucideIcon>;

export type ServiceIcon = keyof typeof ICON_MAP;

export interface ServiceItem {
    id: string;
    icon: ServiceIcon;
    title: string;
    shortDescription: string;
    /** Full-bleed background image for the right panel (e.g. the truck photo). */
    image: string;
    /**
     * Optional overlay graphic/card rendered on top of `image` (e.g. the
     * dark "Drayage Services" detail card). If omitted, only `image` shows.
     */
    cardImage?: string;
    /** Alt text for the card overlay image. */
    cardImageAlt?: string;
}

export interface ServicesShowcaseProps {
    headingBold: string;
    description: string;
    services: ServiceItem[];
    ctaLabel?: string;
    ctaHref?: string;
    className?: string;
}

const imageVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
};

const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
    headingBold,
    description,
    services,
    ctaLabel = "View Service Details",
    ctaHref = "#",
    className = "",
}) => {
    const [activeId, setActiveId] = useState<string>(services[0]?.id);
    const activeService = services.find((s) => s.id === activeId) ?? services[0];

    if (!activeService) return null;

    return (
        <section className={`w-full bg-[#F2F1EE] py-14 sm:py-16 md:py-20 ${className}`}>
            <div className="max-w-[1340px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
                {/* Top heading row */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10 md:mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="font-heading text-[28px] sm:text-[34px] md:text-[40px] uppercase leading-tight text-gray-900"
                    >
                        {headingBold}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-[15px] sm:text-[17px] text-gray-600 leading-relaxed max-w-md lg:text-left"
                    >
                        {description}
                    </motion.p>
                </div>

                {/* Main panel */}
                <div className="flex flex-col lg:flex-row w-full overflow-hidden rounded-xl lg:rounded-none">
                    {/* Left: service list — its content height now drives the row's height */}
                    <div className="w-full lg:w-[46%] bg-white flex flex-col">
                        <div>
                            {services.map((service) => {
                                const Icon = ICON_MAP[service.icon];
                                const isActive = service.id === activeService.id;

                                return (
                                    <div key={service.id} className="border-b border-gray-100">
                                        <button
                                            type="button"
                                            onClick={() => setActiveId(service.id)}
                                            className="w-full flex items-center justify-between gap-4 px-6 sm:px-8 py-6 sm:py-7 text-left hover:bg-gray-50/60 transition-colors"
                                        >
                                            <span className="flex items-center gap-4">
                                                <Icon
                                                    size={22}
                                                    strokeWidth={1.5}
                                                    className={isActive ? "text-gray-900" : "text-gray-500"}
                                                />
                                                <span
                                                    className={`text-[18px] sm:text-[20px] ${
                                                        isActive
                                                            ? "text-gray-900 font-medium"
                                                            : "text-gray-800"
                                                    }`}
                                                >
                                                    {service.title}
                                                </span>
                                            </span>
                                            {isActive ? (
                                                <ChevronDown size={20} className="text-gray-400 shrink-0" />
                                            ) : (
                                                <ChevronRight size={20} className="text-gray-400 shrink-0" />
                                            )}
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="px-6 sm:px-8 pb-6 sm:pb-7  pr-8 text-[14px] sm:text-[15px] text-gray-500 leading-relaxed">
                                                        {service.shortDescription}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                        <a
                        
                            href={ctaHref}
                            className="flex items-center justify-between px-6 sm:px-8 py-6 sm:py-7 bg-[#3B74BD] hover:bg-blue-700 text-white transition-colors"
                        >
                            <span className="text-[16px] sm:text-[18px] font-medium">{ctaLabel}</span>
                            <ChevronRight size={20} />
                        </a>
                    </div>

                    {/* Right: background image, with an optional overlay "card" image layered on top.
                        Stretches to match left column's height on lg, has its own min-height on mobile
                        where it's stacked. */}
                    <div className="relative w-full lg:w-[54%] min-h-[480px] sm:min-h-[560px] lg:min-h-0 bg-black overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService.id}
                                variants={imageVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="absolute inset-0"
                            >
                                {/* Background layer */}
                                <Image
                                    src={activeService.image}
                                    alt={`${activeService.title} services`}
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Overlay card layer (optional, e.g. the service detail card) */}
                                {activeService.cardImage && (
                                    <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-8 lg:p-10">
                                        <div className="relative w-full max-w-[420px] aspect-[3/4] sm:aspect-[4/5]">
                                            <Image
                                                src={activeService.cardImage}
                                                alt={
                                                    activeService.cardImageAlt ??
                                                    `${activeService.title} details`
                                                }
                                                fill
                                                className="object-contain drop-shadow-2xl"
                                            />
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesShowcase;