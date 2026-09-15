"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// --- Validation schema -----------------------------------------------------

const quoteFormSchema = z.object({
    name: z.string().trim().min(2, "Name must be at least 2 characters").max(80, "Name is too long"),
    company: z.string().trim().min(1, "Company is required").max(120, "Company name is too long"),
    email: z.string().trim().min(1, "Email is required").email("Enter a valid email address"),
    phone: z
        .string()
        .trim()
        .min(7, "Enter a valid phone number")
        .max(20, "Phone number is too long")
        .regex(/^[0-9+\-\s()]*$/, "Phone number can only contain digits, spaces, and + - ( )"),
    origin: z.string().trim().min(2, "Enter an origin city or port"),
    destination: z.string().trim().min(2, "Enter a destination city or site"),
    commodity: z.string().trim().min(2, "Tell us what's moving"),
    dimensionsWeight: z.string().trim().min(2, "Enter dimensions and weight"),
    neededOnSiteBy: z.string().trim().min(2, "Enter a target date"),
    notes: z.string().trim().max(2000, "That's a bit long — please keep it under 2000 characters").optional(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

// --- Component types ---------------------------------------------------------

export interface OfficeLocation {
    city: string;
    address: string;
}

export interface QuoteFormSectionProps {
    /** Left panel — identical shape to ContactSection's left side */
    heading: string;
    description: string;
    image: string;
    imageAlt?: string;
    offices: OfficeLocation[];
    email: string;
    phone: string;

    /** Right panel */
    formHeading?: string;
    submitLabel?: string;
    /** Called with validated form values on submit. Defaults to a console.log
     *  stub — wire this up to your API route / email service. */
    onSubmit?: (data: QuoteFormValues) => void | Promise<void>;
    className?: string;
}

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const inputClass =
    "w-full bg-white border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-none px-4 py-3.5 text-[14px] sm:text-[15px] text-gray-900 placeholder:text-gray-400 transition-colors";

const QuoteFormSection: React.FC<QuoteFormSectionProps> = ({
    heading,
    description,
    image,
    imageAlt = "",
    offices,
    email,
    phone,
    formHeading = "Start a lane quote",
    submitLabel = "Request a quote",
    onSubmit,
    className = "",
}) => {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<QuoteFormValues>({
        resolver: zodResolver(quoteFormSchema),
    });

    const handleFormSubmit = async (data: QuoteFormValues) => {
        if (onSubmit) {
            await onSubmit(data);
        } else {
            // eslint-disable-next-line no-console
            console.log("Lane quote request submitted:", data);
        }
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section className={`w-full bg-[#F2F1EE] py-14 sm:py-16 md:py-20 ${className}`}>
            <div className="max-w-[1340px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
                    {/* Left: office info — same as ContactSection, unchanged */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        className="w-full lg:w-[42%]"
                    >
                        <h2 className="text-[28px] sm:text-[32px] font-bold text-gray-900 mb-3">
                            {heading}
                        </h2>
                        <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed mb-6 max-w-md">
                            {description}
                        </p>

                        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] mb-7 overflow-hidden">
                            <Image src={image} alt={imageAlt} fill className="object-cover" />
                        </div>

                        <p className="text-[11px] sm:text-[12px] tracking-[0.08em] uppercase text-gray-500 font-medium mb-3">
                            Address
                        </p>

                        <div className="space-y-5 mb-7">
                            {offices.map((office) => (
                                <div key={office.city}>
                                    <h3 className="text-[17px] sm:text-[19px] font-bold text-gray-900 mb-1">
                                        {office.city}
                                    </h3>
                                    <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                                        {office.address}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mb-6">
                            <p className="text-[11px] sm:text-[12px] tracking-[0.08em] uppercase text-gray-500 font-medium mb-2">
                                Email
                            </p>
                            <a
                                href={`mailto:${email}`}
                                className="text-[16px] sm:text-[17px] text-gray-800 hover:text-blue-600 transition-colors"
                            >
                                {email}
                            </a>
                        </div>

                        <div>
                            <p className="text-[11px] sm:text-[12px] tracking-[0.08em] uppercase text-gray-500 font-medium mb-2">
                                Phone
                            </p>
                            <a
                                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                                className="text-[16px] sm:text-[17px] text-gray-800 hover:text-blue-600 transition-colors"
                            >
                                {phone}
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: lane-quote form card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        className="w-full lg:w-[58%] bg-[#DCE4F0] border-t-4 border-blue-600 p-6 sm:p-8 md:p-10"
                    >
                        <h2 className="text-[26px] sm:text-[30px] font-bold text-gray-900 mb-6 sm:mb-8">
                            {formHeading}
                        </h2>

                        <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-5">
                                <div>
                                    <label htmlFor="quote-name" className="block text-[14px] text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input id="quote-name" type="text" className={inputClass} {...register("name")} />
                                    {errors.name && (
                                        <p className="mt-1.5 text-[13px] text-red-600">{errors.name.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="quote-company" className="block text-[14px] text-gray-700 mb-2">
                                        Company
                                    </label>
                                    <input
                                        id="quote-company"
                                        type="text"
                                        className={inputClass}
                                        {...register("company")}
                                    />
                                    {errors.company && (
                                        <p className="mt-1.5 text-[13px] text-red-600">{errors.company.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="quote-email" className="block text-[14px] text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        id="quote-email"
                                        type="email"
                                        className={inputClass}
                                        {...register("email")}
                                    />
                                    {errors.email && (
                                        <p className="mt-1.5 text-[13px] text-red-600">{errors.email.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="quote-phone" className="block text-[14px] text-gray-700 mb-2">
                                        Phone / WhatsApp
                                    </label>
                                    <input id="quote-phone" type="tel" className={inputClass} {...register("phone")} />
                                    {errors.phone && (
                                        <p className="mt-1.5 text-[13px] text-red-600">{errors.phone.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="quote-origin" className="block text-[14px] text-gray-700 mb-2">
                                        Origin (city / port)
                                    </label>
                                    <input
                                        id="quote-origin"
                                        type="text"
                                        className={inputClass}
                                        {...register("origin")}
                                    />
                                    {errors.origin && (
                                        <p className="mt-1.5 text-[13px] text-red-600">{errors.origin.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="quote-destination" className="block text-[14px] text-gray-700 mb-2">
                                        Destination (city / site)
                                    </label>
                                    <input
                                        id="quote-destination"
                                        type="text"
                                        className={inputClass}
                                        {...register("destination")}
                                    />
                                    {errors.destination && (
                                        <p className="mt-1.5 text-[13px] text-red-600">{errors.destination.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="mb-5">
                                <label htmlFor="quote-commodity" className="block text-[14px] text-gray-700 mb-2">
                                    Commodity
                                </label>
                                <input
                                    id="quote-commodity"
                                    type="text"
                                    className={inputClass}
                                    {...register("commodity")}
                                />
                                {errors.commodity && (
                                    <p className="mt-1.5 text-[13px] text-red-600">{errors.commodity.message}</p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-5">
                                <div>
                                    <label htmlFor="quote-dimensions" className="block text-[14px] text-gray-700 mb-2">
                                        Dimensions &amp; weight
                                    </label>
                                    <input
                                        id="quote-dimensions"
                                        type="text"
                                        className={inputClass}
                                        {...register("dimensionsWeight")}
                                    />
                                    {errors.dimensionsWeight && (
                                        <p className="mt-1.5 text-[13px] text-red-600">
                                            {errors.dimensionsWeight.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="quote-needed-by" className="block text-[14px] text-gray-700 mb-2">
                                        Needed on site by
                                    </label>
                                    <input
                                        id="quote-needed-by"
                                        type="text"
                                        placeholder="e.g. 15 Nov 2026"
                                        className={inputClass}
                                        {...register("neededOnSiteBy")}
                                    />
                                    {errors.neededOnSiteBy && (
                                        <p className="mt-1.5 text-[13px] text-red-600">
                                            {errors.neededOnSiteBy.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="mb-7">
                                <label htmlFor="quote-notes" className="block text-[14px] text-gray-700 mb-2">
                                    Anything breaking today? (demurrage, permits, duty, rejected appointments)
                                </label>
                                <textarea
                                    id="quote-notes"
                                    rows={5}
                                    className={`${inputClass} resize-none`}
                                    {...register("notes")}
                                />
                                {errors.notes && (
                                    <p className="mt-1.5 text-[13px] text-red-600">{errors.notes.message}</p>
                                )}
                            </div>

                            <div className="flex items-center gap-4">
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                                    className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-md px-7 py-3.5 text-[14px] sm:text-[15px] font-medium transition-colors"
                                >
                                    {isSubmitting ? "Sending..." : submitLabel}
                                </motion.button>

                                <AnimatePresence>
                                    {submitted && (
                                        <motion.span
                                            initial={{ opacity: 0, x: -8 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-2 text-[14px] text-green-700"
                                        >
                                            <CheckCircle2 size={18} />
                                            Request sent
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default QuoteFormSection;