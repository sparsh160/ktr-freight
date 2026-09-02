"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export interface ServiceDetailBlockProps {
    title: string;
    paragraphs: string[];
    capabilityTags: string[];
    image: string;
    imageAlt?: string;
    imagePosition?: "left" | "right";
    cardImage: string;
    cardImageAlt?: string;
    className?: string;
}

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ServiceDetailBlock: React.FC<ServiceDetailBlockProps> = ({
    title,
    paragraphs,
    capabilityTags,
    image,
    imageAlt = "",
    imagePosition = "right",
    cardImage,
    cardImageAlt = "",
    className = "",
}) => {
    const isImageRight = imagePosition === "right";

    return (
        <section className={`w-full bg-[#F2F1EE] py-10 sm:py-12 md:py-16 ${className}`}>
            <div className="max-w-[1340px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
                <div
                    className={`flex flex-col ${
                        isImageRight ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                >
                    {/* Text column — its content height drives the image column's height on lg */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/2 bg-white p-8 sm:p-10 md:p-12 flex flex-col justify-center"
                    >
                        <h2
                            style={{ fontFamily: "inherit", textTransform: "none", letterSpacing: "normal" }}
                            className="text-[30px] sm:text-[36px] md:text-[24px] font-medium text-gray-900 mb-5 sm:mb-6"
                        >
                            {title}
                        </h2>

                        {paragraphs.map((p, idx) => (
                            <p
                                key={idx}
                                className="text-[14.5px] sm:text-[12px] text-gray-600 leading-relaxed mb-4 sm:mb-5 last:mb-6 sm:last:mb-8"
                            >
                                {p}
                            </p>
                        ))}

                        <div className="flex flex-wrap gap-2 sm:gap-2.5">
                            {capabilityTags.map((tag) => (
                                <span
                                    key={tag}
                                    className="border border-gray-300 rounded-md px-3.5 py-1.5 text-center text-[13px] sm:text-[13.5px] text-gray-800 whitespace-nowrap"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Photo + card column — height matches the text column via flex stretch on lg */}
                    <div className="relative w-full lg:w-1/2 min-h-[320px] sm:min-h-[360px] lg:min-h-0 bg-black overflow-hidden">
                        <Image src={image} alt={imageAlt} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

                        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                            {/* Card scales to fit whatever space is available — no fixed aspect box,
                                so it shrinks/grows in step with the container instead of clipping. */}
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                className="relative w-full h-full max-w-[440px]"
                            >
                                <Image
                                    src={cardImage}
                                    alt={cardImageAlt}
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetailBlock;