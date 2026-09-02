"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Plus, Minus, Headphones } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqSectionProps {
    headingBold: string;
    description: string;
    image: string;
    imageAlt?: string;
    needHelp?: {
        title: string;
        email: string;
    };
    faqs: FaqItem[];
    /** Index of the FAQ open by default. Default 0. Pass -1 for none open. */
    defaultOpenIndex?: number;
    className?: string;
}

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const FaqSection: React.FC<FaqSectionProps> = ({
    headingBold,
    description,
    image,
    imageAlt = "",
    needHelp,
    faqs,
    defaultOpenIndex = 0,
    className = "",
}) => {
    const [openIndex, setOpenIndex] = useState<number>(defaultOpenIndex);
    const rightColRef = useRef<HTMLDivElement>(null);
    const [stickyHeight, setStickyHeight] = useState<number | undefined>(undefined);
    const [isLgUp, setIsLgUp] = useState(false);

    const toggle = (idx: number) => {
        setOpenIndex((prev) => (prev === idx ? -1 : idx));
    };

    // Measure the height of the first 4 FAQ rows (incl. gaps) so the
    // image column matches that height, then sticks while the rest
    // of the (longer) FAQ list scrolls past with the page.
    const calculateHeight = useCallback(() => {
        if (!rightColRef.current) return;

        const children = Array.from(rightColRef.current.children) as HTMLElement[];
        const firstFour = children.slice(0, 4);
        if (firstFour.length === 0) return;

        const style = window.getComputedStyle(rightColRef.current);
        const gapValue = parseFloat(style.rowGap || style.gap || "0") || 0;

        const total =
            firstFour.reduce((sum, el) => sum + el.offsetHeight, 0) +
            gapValue * (firstFour.length - 1);

        setStickyHeight(total);
    }, []);

    useEffect(() => {
        const mql = window.matchMedia("(min-width: 1024px)");
        const updateIsLgUp = () => setIsLgUp(mql.matches);
        updateIsLgUp();
        mql.addEventListener("change", updateIsLgUp);

        calculateHeight();
        window.addEventListener("resize", calculateHeight);

        return () => {
            mql.removeEventListener("change", updateIsLgUp);
            window.removeEventListener("resize", calculateHeight);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [faqs, calculateHeight]);

    // Re-measure whenever an accordion item opens/closes, since that
    // changes row heights (only matters if it's within the first 4).
    useEffect(() => {
        calculateHeight();
    }, [openIndex, calculateHeight]);

    const lockedHeight = isLgUp && stickyHeight ? stickyHeight : undefined;

    return (
        <section className={`w-full bg-[#F2F1EE] py-14 sm:py-16 md:py-20 ${className}`}>
            <div className="max-w-[1340px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
                {/* Heading row */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10 md:mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="font-heading text-[26px] sm:text-[32px] md:text-[38px] uppercase leading-tight text-gray-900"
                    >
                        {headingBold}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-md lg:text-left"
                    >
                        {description}
                    </motion.p>
                </div>

                {/* Main panel */}
                <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6 lg:items-start">
                    {/* Left: image + need-help card. Height locked to first 4 FAQ rows,
                        then sticky so it stays in view while the remaining FAQs scroll past. */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        style={lockedHeight ? { height: lockedHeight } : undefined}
                        className="relative w-full lg:w-[38%] aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:sticky lg:top-24"
                    >
                        <Image src={image} alt={imageAlt} fill className="object-cover" />

                        {needHelp && (
                            <div className="absolute bottom-5 left-5 right-5   bg-white flex items-center gap-4 px-6 py-5 shadow-sm">
                                <span className="shrink-0 w-9 h-9 flex items-center justify-center">
                                    <Headphones size={26} strokeWidth={1.5} className="text-gray-900" />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-[15px] sm:text-[16px] font-semibold text-gray-900 leading-snug">
                                        {needHelp.title}
                                    </p>
                                    <p className="text-[13px] sm:text-[14px] text-gray-500 leading-snug truncate">
                                        {needHelp.email}
                                    </p>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Right: accordion. Normal document flow — it just grows taller than
                        the image, so the sticky image stays pinned until this column ends,
                        then scrolls away with the rest of the page. No internal scrollbar. */}
                    <div
                        ref={rightColRef}
                        className="w-full lg:w-[62%] flex flex-col gap-2 sm:gap-3"
                    >
                        {faqs.map((faq, idx) => {
                            const isOpen = idx === openIndex;

                            return (
                                <div key={idx} className="bg-white">
                                    <button
                                        type="button"
                                        onClick={() => toggle(idx)}
                                        className="w-full flex items-center justify-between gap-6 px-6 sm:px-8 py-6 sm:py-7 text-left hover:bg-gray-50/60 transition-colors"
                                    >
                                        <span className="text-[14px] sm:text-[16px] md:text-[17px] font-bold uppercase tracking-wide text-gray-900">
                                            {faq.question}
                                        </span>
                                        <span className="shrink-0 text-gray-700">
                                            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                                        </span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <p className="px-6 sm:px-8 pb-6 sm:pb-7  text-[13.5px] sm:text-[15px] text-gray-500 leading-relaxed max-w-2xl">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;