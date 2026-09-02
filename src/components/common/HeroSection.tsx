"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export interface HeroCta {
    label: string;
    href: string;
}

export interface HeroSectionProps {
    /** Heading rendered in bold uppercase. Line breaks are preserved as written. */
    heading: string;
    description: string;
    image: string;
    imageAlt?: string;
    primaryCta?: HeroCta;
    /** Rendered as a light "pill" — pass an email as `mailto:` href for a contact CTA. */
    secondaryCta?: HeroCta;
    className?: string;
}

const container: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroSection: React.FC<HeroSectionProps> = ({
    heading,
    description,
    image,
    imageAlt = "",
    primaryCta,
    secondaryCta,
    className = "",
}) => {
    return (
        <section className={`w-full bg-[#F2F1EE] py-6 sm:py-8 md:py-10 ${className}`}>
            <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] md:aspect-[21/9] lg:aspect-[21/8] min-h-[420px] sm:min-h-[440px] overflow-hidden">
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    priority
                    className="object-cover"
                />

                {/* Dark gradient so text stays legible over the photo */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-20 max-w-3xl"
                >
                    <motion.h2
                        variants={fadeUp}
                        className="font-heading text-[30px] sm:text-[40px] md:text-[52px] lg:text-[58px] uppercase leading-[1.08] text-white mb-5 sm:mb-6"
                    >
                        {heading}
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="mt-5 sm:mt-6 text-[15px] sm:text-[17px] md:text-[18px] text-gray-100/90 leading-relaxed max-w-xl"
                    >
                        {description}
                    </motion.p>

                    {(primaryCta || secondaryCta) && (
                        <motion.div
                            variants={fadeUp}
                            className="mt-7 sm:mt-8 flex flex-wrap items-stretch gap-3 sm:gap-4"
                        >
                            {primaryCta && (
                                <Link
                                    href={primaryCta.href}
                                    className="inline-flex items-center justify-center bg-[#4338EC] hover:bg-[#372FC4] transition-colors text-white text-[15px] sm:text-[16px] font-medium px-6 sm:px-7 py-3.5 sm:py-4"
                                >
                                    {primaryCta.label}
                                </Link>
                            )}

                            {secondaryCta && (
                                <Link
                                    href={secondaryCta.href}
                                    className="inline-flex items-center justify-center bg-white hover:bg-gray-100 transition-colors text-[#4338EC] text-[15px] sm:text-[16px] font-medium px-6 sm:px-7 py-3.5 sm:py-4"
                                >
                                    {secondaryCta.label}
                                </Link>
                            )}
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;