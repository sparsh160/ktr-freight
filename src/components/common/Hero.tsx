"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export interface HeroStat {
    value: string;
    label: string;
}

export interface HeroCta {
    label: string;
    href: string;
}

export interface HeroProps {
    /** Path (public/) or remote URL for the background image. Also used as the
     *  <video> poster/fallback when backgroundVideo is provided. */
    backgroundImage: string;
    /** Optional path (public/) or remote URL for a background video (mp4/webm).
     *  When set, this renders instead of the static image, autoplaying muted + looped. */
    backgroundVideo?: string;
    /** Small uppercase eyebrow line, e.g. "4PL · ASIA ⇄ UNITED STATES · SINCE 2013".
     *  If omitted/empty, the badge row (including its leading dot) is not rendered. */
    badgeText?: string;
    /** Big headline. Line breaks in the source string become <br /> */
    heading: string;
    description: string;
    /** Optional now — omit if you don't want any primary CTA button. */
    primaryCta?: HeroCta;
    secondaryCta?: HeroCta;
    stats?: HeroStat[];
    /** Optional: tweak overlay darkness (0-1). Defaults to a strong left-to-right fade. */
    overlayOpacity?: number;
}

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero: React.FC<HeroProps> = ({
    backgroundImage,
    backgroundVideo,
    badgeText,
    heading,
    description,
    primaryCta,
    secondaryCta,
    stats,
}) => {
    const headingLines = (heading ?? "").split("\n");
    const hasStats = Boolean(stats && stats.length > 0);
    const hasBadge = Boolean(badgeText && badgeText.trim().length > 0);
    const hasAnyCta = Boolean(primaryCta || secondaryCta);

    return (
        <section
            className={`relative w-full flex items-end overflow-hidden bg-black ${
                hasStats
                    ? "min-h-screen"
                    : "min-h-[520px] sm:min-h-[570px] md:min-h-[610px]"
            }`}
        >
            {/* Background */}
            {backgroundVideo ? (
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={backgroundVideo}
                    poster={backgroundImage}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                />
            ) : (
                <Image
                    src={backgroundImage}
                    alt=""
                    fill
                    priority
                    className="object-cover"
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={`relative z-10 w-full px-6 md:px-10 lg:px-14 pb-14 lg:pb-16 ${
                    hasStats ? "pt-[140px]" : "pt-[110px] sm:pt-[120px]"
                }`}
            >
                <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                    <div className="max-w-2xl">
                        {hasBadge && (
                            <motion.div
                                variants={fadeUp}
                                className="flex items-center gap-2 text-white/80 text-[13px] font-medium tracking-[0.08em] uppercase mb-6"
                            >
                                <span className="w-2 h-2 bg-white/80 inline-block" />
                                {badgeText}
                            </motion.div>
                        )}

                        <motion.h1
                            variants={fadeUp}
                            className="font-heading text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold uppercase leading-[1.08] text-white mb-6"
                            style={{ textShadow: "0 2px 14px rgba(0,0,0,0.65)" }}
                        >
                            {headingLines.map((line, idx) => (
                                <React.Fragment key={idx}>
                                    {line}
                                    {idx < headingLines.length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="text-gray-200 text-[16px] leading-relaxed mb-8 max-w-xl"
                        >
                            {description}
                        </motion.p>

                        {hasAnyCta && (
                            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
                                {primaryCta && (
                                    <Link href={primaryCta.href}>
                                        <motion.button
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-7 py-3.5 text-[15px] font-medium transition-colors"
                                        >
                                            {primaryCta.label}
                                        </motion.button>
                                    </Link>
                                )}
                                {secondaryCta && (
                                    <Link href={secondaryCta.href}>
                                        <motion.button
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="bg-white hover:bg-gray-100 text-blue-600 rounded-md px-7 py-3.5 text-[15px] font-medium transition-colors"
                                        >
                                            {secondaryCta.label}
                                        </motion.button>
                                    </Link>
                                )}
                            </motion.div>
                        )}
                    </div>

                    {stats && stats.length > 0 && (
                        <motion.div
                            variants={fadeUp}
                            className="grid grid-cols-2 gap-[1px] bg-white/10 rounded-xl overflow-hidden backdrop-blur-md w-full max-w-[420px] shrink-0"
                        >
                            {stats.map((stat, idx) => {
                                const isLastFullWidth =
                                    stats.length % 2 !== 0 && idx === stats.length - 1;
                                return (
                                    <div
                                        key={stat.label}
                                        className={`bg-black/40 px-6 py-6 text-center ${
                                            isLastFullWidth ? "col-span-2" : ""
                                        }`}
                                    >
                                        <div className="text-white text-[28px] font-bold mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-gray-300 text-[12px] leading-snug">
                                            {stat.label}
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;