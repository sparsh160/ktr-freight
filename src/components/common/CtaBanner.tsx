"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export interface CtaBannerCta {
    label: string;
    href: string;
}

export interface CtaBannerProps {
    backgroundImage: string;
    backgroundImageAlt?: string;
    /** Line breaks in the source string become <br /> */
    heading: string;
    description: string;
    primaryCta: CtaBannerCta;
    /** Typically a mailto: link, rendered as a white pill button */
    secondaryCta?: CtaBannerCta;
    className?: string;
}

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CtaBanner: React.FC<CtaBannerProps> = ({
    backgroundImage,
    backgroundImageAlt = "",
    heading,
    description,
    primaryCta,
    secondaryCta,
    className = "",
}) => {
    const headingLines = heading.split("\n");

    return (
        <section
            className={`relative w-full min-h-[420px] sm:min-h-[480px] md:min-h-[560px] flex items-center overflow-hidden bg-black ${className}`}
        >
            <Image
                src={backgroundImage}
                alt={backgroundImageAlt}
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative z-10 w-full px-5 sm:px-6 md:px-10 lg:px-14 py-16 sm:py-20"
            >
                <div className="max-w-[1440px] mx-auto">
                    <div className="max-w-2xl">
                        <motion.h2
                            variants={fadeUp}
                            className="font-heading text-[30px] sm:text-[40px] md:text-[52px] lg:text-[58px] uppercase leading-[1.08] text-white mb-5 sm:mb-6"
                        >
                            {headingLines.map((line, idx) => (
                                <React.Fragment key={idx}>
                                    {line}
                                    {idx < headingLines.length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="text-gray-300 text-[14px] sm:text-[16px] leading-relaxed mb-7 sm:mb-8 max-w-xl"
                        >
                            {description}
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 sm:gap-4">
                            <Link href={primaryCta.href}>
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 sm:px-7 py-3 sm:py-3.5 text-[14px] sm:text-[15px] font-medium transition-colors"
                                >
                                    {primaryCta.label}
                                </motion.button>
                            </Link>

                            {secondaryCta && (
                                <Link href={secondaryCta.href}>
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="bg-white hover:bg-gray-100 text-blue-600 rounded-md px-6 sm:px-7 py-3 sm:py-3.5 text-[14px] sm:text-[15px] font-medium transition-colors"
                                    >
                                        {secondaryCta.label}
                                    </motion.button>
                                </Link>
                            )}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CtaBanner;