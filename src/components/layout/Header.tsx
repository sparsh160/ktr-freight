"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface NavLink {
    label: string;
    href: string;
}

const NAV_LINKS: NavLink[] = [
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Expertise", href: "/expertise" },
    { label: "Network", href: "/network" },
];

const SCROLL_THRESHOLD = 24;

const navContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.06, delayChildren: 0.25 },
    },
};

const navItemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    // Solid (white bar, blue logo) once scrolled or while the mobile drawer is open.
    // Otherwise: translucent olive bar over the hero, white logo.
    const isSolid = isScrolled || mobileMenuOpen;

    // Matches the link's own page and any nested route under it (e.g. /services/drayage)
    const isActiveLink = (href: string) =>
        pathname === href || pathname?.startsWith(`${href}/`);

    return (
        <motion.header
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed z-50 top-4 sm:top-6 inset-x-4 sm:inset-x-6 lg:inset-x-10  overflow-hidden border transition-colors duration-300 ${
                isSolid
                    ? "bg-white border-gray-100/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                    : "bg-white/10 border-white/10 backdrop-blur-[51.7px]"
            }`}
        >
            <div className="flex items-stretch h-[64px] ">
                {/* Logo cell */}
                <Link
                    href="/"
                    className="flex items-center pl-5 sm:pl-6 pr-6 sm:pr-8 shrink-0 select-none"
                >
                    <div className="relative w-[130px] h-[34px] sm:w-[150px] sm:h-[40px]">
                        {/* ktr-logo-dark.png = blue logo (shown once header goes solid/white)
                            ktr-logo.png = white logo (shown on the transparent/dark hero state) */}
                        <Image
                            src={isSolid ? "/images/ktr-logo-dark.png" : "/images/white-logo.png"}
                            alt="KTR Freight"
                            fill
                            priority
                            className="object-contain object-left transition-opacity duration-300"
                        />
                    </div>
                </Link>

                {/* Desktop nav */}
                <div className="hidden lg:flex flex-1 items-center justify-end pr-8">
                    <div
                        className={`flex items-center h-full border-l pl-8 transition-colors duration-300 ${
                            isSolid ? "border-gray-100" : "border-white/15"
                        }`}
                    >
                        <motion.nav
                            variants={navContainerVariants}
                            initial="hidden"
                            animate="visible"
                            className={`flex items-center gap-10 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-300 ${
                                isSolid ? "text-gray-800" : "text-white"
                            }`}
                        >
                            {NAV_LINKS.map((link) => {
                                const isActive = isActiveLink(link.href);

                                return (
                                    <motion.div key={link.href} variants={navItemVariants}>
                                        <Link
                                            href={link.href}
                                            aria-current={isActive ? "page" : undefined}
                                            className={`transition-colors ${
                                                isActive
                                                    ? "text-blue-600"
                                                    : isSolid
                                                    ? "hover:text-blue-600"
                                                    : "hover:text-white/70"
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </motion.nav>
                    </div>
                </div>

                {/* Mobile: nav fills remaining space, toggle sits on the right */}
                <div className="flex lg:hidden flex-1 items-center justify-end pr-4">
                    <button
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileMenuOpen}
                        className={`p-2 rounded-md transition-colors ${
                            isSolid ? "text-gray-800" : "text-white"
                        }`}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Contact Us cell — full height, flush right, matches outer rounded corner */}
                <Link href="/contact" className="hidden lg:flex shrink-0">
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        whileHover={{ backgroundColor: "#1d4ed8" }}
                        className="h-full bg-blue-600 text-white text-[13px] font-semibold tracking-[0.06em] uppercase px-8 transition-colors"
                    >
                        Contact Us
                    </motion.button>
                </Link>
            </div>

            {/* Mobile drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden bg-white overflow-hidden border-t border-gray-100"
                    >
                        <nav className="flex flex-col gap-1 p-6 text-gray-800 font-semibold text-[14px] uppercase tracking-wide">
                            {NAV_LINKS.map((link) => {
                                const isActive = isActiveLink(link.href);

                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        aria-current={isActive ? "page" : undefined}
                                        className={`py-3 border-b border-gray-50 transition-colors ${
                                            isActive ? "text-blue-600" : "hover:text-blue-600"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-4">
                                <button className="w-full bg-blue-600 text-white rounded-md px-6 py-3 text-[13px] font-semibold tracking-wide uppercase">
                                    Contact Us
                                </button>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;