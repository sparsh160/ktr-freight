"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export interface LeadershipSectionProps {
    image: string;
    imageAlt?: string;

    /** First block, e.g. "Leadership" */
    heading1: string;
    paragraph: string;

    /** Second block, e.g. "Company record" */
    heading2: string;
    /** Rendered as a bulleted list */
    items: string[];

    className?: string;
}

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const textContainerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const LeadershipSection: React.FC<LeadershipSectionProps> = ({
    image,
    imageAlt = "",
    heading1,
    paragraph,
    heading2,
    items,
    className = "",
}) => {
    return (
        <section className={`w-full bg-[#F2F1EE] ${className}`}>
            <div className="max-w-[1340px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14 py-4">
                <div className="flex flex-col lg:flex-row w-full">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.03 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full lg:w-[46%] aspect-[4/3] sm:aspect-[16/10]"
                    >
                        <Image src={image} alt={imageAlt} fill className="object-cover" />
                    </motion.div>

                    {/* Text panel */}
                    <motion.div
                        variants={textContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="w-full lg:w-[54%] bg-white p-8 sm:p-10 flex flex-col justify-center"
                    >
                        <motion.div variants={fadeUp} className="mb-8 sm:mb-10">
                            <h3 className="text-[26px] sm:text-[30px] font-bold text-gray-900 mb-4">
                                {heading1}
                            </h3>
                            <p className="text-[14.5px] sm:text-[16px] text-gray-600 leading-relaxed max-w-xl">
                                {paragraph}
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp}>
                            <h3 className="text-[26px] sm:text-[30px] font-bold text-gray-900 mb-4">
                                {heading2}
                            </h3>
                            <ul className="space-y-2">
                                {items.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 text-[14.5px] sm:text-[16px] text-gray-600 leading-relaxed"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LeadershipSection;