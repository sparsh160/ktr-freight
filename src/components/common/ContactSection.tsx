"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// --- Validation schema -----------------------------------------------------

const contactFormSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters")
        .max(80, "Name is too long"),
    email: z
        .string()
        .trim()
        .min(1, "Email is required")
        .email("Enter a valid email address"),
    phone: z
        .string()
        .trim()
        .min(7, "Enter a valid phone number")
        .max(20, "Phone number is too long")
        .regex(/^[0-9+\-\s()]*$/, "Phone number can only contain digits, spaces, and + - ( )"),
    description: z
        .string()
        .trim()
        .min(10, "Please add a few more details (at least 10 characters)")
        .max(2000, "That's a bit long — please keep it under 2000 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// --- Component types ---------------------------------------------------------

export interface OfficeLocation {
    city: string;
    address: string;
}

export interface ContactSectionProps {
    heading: string;
    description: string;
    image: string;
    imageAlt?: string;
    offices: OfficeLocation[];
    email: string;
    phone: string;
    formHeading?: string;
    formDescription?: string;
    submitLabel?: string;
    /** Called with validated form values on submit. Defaults to a console.log
     *  stub — wire this up to your API route / email service. */
    onSubmit?: (data: ContactFormValues) => void | Promise<void>;
    className?: string;
}

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const inputClass =
    "w-full bg-white border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-none px-4 py-3.5 text-[14px] sm:text-[15px] text-gray-900 placeholder:text-gray-400 transition-colors";

const ContactSection: React.FC<ContactSectionProps> = ({
    heading,
    description,
    image,
    imageAlt = "",
    offices,
    email,
    phone,
    formHeading = "Information Request",
    formDescription = "For more information and how we can meet your needs, please fill out the form below, and someone from our team will be in touch.",
    submitLabel = "Send a message",
    onSubmit,
    className = "",
}) => {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
    });

    const handleFormSubmit = async (data: ContactFormValues) => {
        if (onSubmit) {
            await onSubmit(data);
        } else {
            // eslint-disable-next-line no-console
            console.log("Contact form submitted:", data);
        }
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section className={`w-full bg-[#F2F1EE] py-14 sm:py-16 md:py-20 ${className}`}>
            <div className="max-w-[1340px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
                    {/* Left: office info */}
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

                    {/* Right: form card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        className="w-full lg:w-[58%] bg-[#DCE4F0] border-t-4 border-blue-600 p-6 sm:p-8 md:p-10"
                    >
                        <h2 className="text-[26px] sm:text-[30px] font-bold text-gray-900 mb-3">
                            {formHeading}
                        </h2>
                        <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed mb-8 max-w-xl">
                            {formDescription}
                        </p>

                        <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
                            <div className="mb-5">
                                <label htmlFor="contact-name" className="block text-[14px] text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className={inputClass}
                                    {...register("name")}
                                />
                                {errors.name && (
                                    <p className="mt-1.5 text-[13px] text-red-600">{errors.name.message}</p>
                                )}
                            </div>

                            <div className="mb-5">
                                <label htmlFor="contact-email" className="block text-[14px] text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className={inputClass}
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p className="mt-1.5 text-[13px] text-red-600">{errors.email.message}</p>
                                )}
                            </div>

                            <div className="mb-5">
                                <label htmlFor="contact-phone" className="block text-[14px] text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    id="contact-phone"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className={inputClass}
                                    {...register("phone")}
                                />
                                {errors.phone && (
                                    <p className="mt-1.5 text-[13px] text-red-600">{errors.phone.message}</p>
                                )}
                            </div>

                            <div className="mb-7">
                                <label htmlFor="contact-description" className="block text-[14px] text-gray-700 mb-2">
                                    Description
                                </label>
                                <textarea
                                    id="contact-description"
                                    rows={5}
                                    placeholder="Tell us a bit about what you need"
                                    className={`${inputClass} resize-none`}
                                    {...register("description")}
                                />
                                {errors.description && (
                                    <p className="mt-1.5 text-[13px] text-red-600">{errors.description.message}</p>
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
                                            Message sent
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

export default ContactSection;