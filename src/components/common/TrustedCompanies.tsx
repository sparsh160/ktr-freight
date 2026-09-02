"use client";

import React, { useId } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export interface LogoItem {
    src: string;
    alt: string;
    /** Optional: makes the logo cell a link */
    href?: string;
}

export interface TrustedCompaniesProps {
    heading?: string;
    logos: LogoItem[];
    /** Columns on large screens. Grid auto-wraps below that. Default: 5 */
    columns?: number;
    className?: string;
}

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
};

const cellVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const TrustedCompanies: React.FC<TrustedCompaniesProps> = ({
    heading = "Trusted companies across industries",
    logos,
    columns = 5,
    className = "",
}) => {
    const gridId = useId().replace(/:/g, "");
    const gridClass = `tc-grid-${gridId}`;

    return (
        <section className={`w-full bg-[#F2F1EE] py-12 sm:py-16 md:py-20 ${className}`}>
            <style>{`
                .${gridClass} {
                    grid-template-columns: repeat(2, 1fr);
                }
                @media (min-width: 640px) {
                    .${gridClass} { grid-template-columns: repeat(3, 1fr); }
                }
                @media (min-width: 768px) {
                    .${gridClass} { grid-template-columns: repeat(4, 1fr); }
                }
                @media (min-width: 1024px) {
                    .${gridClass} { grid-template-columns: repeat(${columns}, 1fr); }
                }
            `}</style>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-[11px] sm:text-[13px] font-medium tracking-[0.1em] uppercase text-gray-500 mb-6 sm:mb-8"
                >
                    {heading}
                </motion.p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className={`grid border-t border-l border-gray-200 ${gridClass}`}
                >
                    {logos.map((logo, idx) => {
                        const cell = (
                            <motion.div
                                key={`${logo.alt}-${idx}`}
                                variants={cellVariants}
                                whileHover={{ scale: 1.04 }}
                                className="flex items-center justify-center h-[90px] sm:h-[110px] md:h-[110px] border-r border-b border-gray-200 bg-[#F2F1EE] transition-colors hover:bg-white"
                            >
                                <div className="relative w-[100px] h-[28px] sm:w-[130px] sm:h-[36px] md:w-[150px] md:h-[40px]">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </motion.div>
                        );

                        return logo.href ? (
                            <a
                                key={`${logo.alt}-${idx}-link`}
                                href={logo.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contents"
                            >
                                {cell}
                            </a>
                        ) : (
                            cell
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default TrustedCompanies;