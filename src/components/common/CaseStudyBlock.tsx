"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export interface CaseStudyBlockProps {
    title: string;

    jobLabel?: string;
    jobDescription: string;

    tagsLabel?: string;
    tags: string[];

    outcomeLabel?: string;
    outcomeDescription: string;

    image: string;
    imageAlt?: string;
    /** Which side the photo sits on. Default "right". */
    imagePosition?: "left" | "right";

    className?: string;
}

const textContainerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const blockVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const tagsContainerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

const tagVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 6 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
};

const CaseStudyBlock: React.FC<CaseStudyBlockProps> = ({
    title,
    jobLabel = "The job",
    jobDescription,
    tagsLabel = "What we ran",
    tags,
    outcomeLabel = "The outcome",
    outcomeDescription,
    image,
    imageAlt = "",
    imagePosition = "right",
    className = "",
}) => {
    const isImageRight = imagePosition === "right";

    return (
        <section className={`w-full bg-[#F2F1EE] py-8 sm:py-10 ${className}`}>
            <div className="max-w-[1240px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
                <div
                    className={`flex flex-col ${
                        isImageRight ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                >
                    {/* Text panel — dashed border wraps only this column */}
                    <motion.div
                        variants={textContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="w-full lg:w-1/2 border-2 border-dashed border-gray-800 p-5 sm:p-6 flex flex-col justify-center"
                    >
                        <motion.h3
                            variants={blockVariants}
                            className="text-[19px] sm:text-[21px]  text-gray-900 mb-3 sm:mb-4"
                        >
                            {title}
                        </motion.h3>

                        <motion.div variants={blockVariants} className="mb-3 sm:mb-4">
                            <h4 className="text-[13.5px] sm:text-[14.5px]  text-gray-900 mb-1 sm:mb-1.5">
                                {jobLabel}
                            </h4>
                            <p className="text-[12px] sm:text-[13px] text-gray-500 leading-snug">
                                {jobDescription}
                            </p>
                        </motion.div>

                        <motion.div variants={blockVariants} className="mb-3 sm:mb-4">
                            <h4 className="text-[13.5px] sm:text-[14.5px]  text-gray-900 mb-1.5 sm:mb-2">
                                {tagsLabel}
                            </h4>
                            <motion.div
                                variants={tagsContainerVariants}
                                className="flex flex-wrap gap-1.5 sm:gap-2"
                            >
                                {tags.map((tag, idx) => (
                                    <motion.span
                                        key={`${tag}-${idx}`}
                                        variants={tagVariants}
                                        className="border border-gray-300 rounded-md px-3 py-1.5 text-[11px] sm:text-[12px] text-gray-800"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div variants={blockVariants}>
                            <h4 className="text-[13.5px] sm:text-[14.5px]  text-gray-900 mb-1 sm:mb-1.5">
                                {outcomeLabel}
                            </h4>
                            <p className="text-[12px] sm:text-[13px] text-gray-500 leading-snug">
                                {outcomeDescription}
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Photo — flush against the text panel, no border of its own */}
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative w-full lg:w-1/2 aspect-[16/10] lg:aspect-auto lg:max-h-[439px] overflow-hidden"
                    >
                        <Image src={image} alt={imageAlt} fill className="object-cover" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyBlock;