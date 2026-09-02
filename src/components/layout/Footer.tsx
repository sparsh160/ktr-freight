"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

// ----------------------------------------------------------------------------
// Data
// ----------------------------------------------------------------------------

const servicesLinks = [
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact us", href: "/contact" },
];

const companyLinks = [
  { label: "Industries", href: "/industries" },
  { label: "Expertises", href: "/expertise" },
  { label: "Network", href: "/network" },
  { label: "Contact", href: "/contact" },
];

const offices = [
  {
    title: "Gurugram — Head office",
    address:
      "1103-05, 11th Floor, JMD Megapolis, Sohna Road, Gurugram, Haryana 122018",
  },
  {
    title: "Mumbai",
    address:
      "1013, 1st Floor, Aerocity Corporate Park, Andheri-Shivaji Nagar, Jarimari, Saki Naka, Mumbai 400072",
  },
];

// ----------------------------------------------------------------------------
// Motion variants
// ----------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const columnStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

// ----------------------------------------------------------------------------
// Icons (inline SVG so they render pixel-exact without an icon dependency)
// ----------------------------------------------------------------------------

function ArrowUpRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 4L20 20M20 4L4 20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="9" width="3.5" height="11" rx="0.5" fill="currentColor" />
      <circle cx="4.75" cy="4.5" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M10.5 20V9h3.3v1.6c.6-1 1.8-1.9 3.5-1.9 2.6 0 4.2 1.7 4.2 5V20h-3.5v-4.8c0-1.6-.6-2.6-2-2.6-1.1 0-1.8.8-2.1 1.5-.1.3-.1.6-.1 1V20h-3.3Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

// ----------------------------------------------------------------------------
// Footer
// ----------------------------------------------------------------------------

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#3247F5] text-white">
      <div className="mx-auto max-w-[1240px] px-6 pt-20 pb-14 sm:px-10 lg:px-16">
        {/* ---------------------------------------------------------------- */}
        {/* CTA row                                                         */}
        {/* ---------------------------------------------------------------- */}
        <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-2xl"
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-[32px] font-medium leading-[1.15] tracking-tight sm:text-[40px] lg:text-[44px]"
            >
              Looking to expand your long-term
              <br className="hidden sm:block" /> rental business?
            </motion.h2>

            <motion.div variants={fadeUp} custom={1} className="mt-10">
              <motion.a
                href="#get-a-quote"
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group inline-flex items-center gap-3 bg-[#E1ECDE] px-7 py-4 text-[13px] font-medium uppercase tracking-[0.08em] text-[#161616]"
              >
                <span>Get a lane quote</span>
                <motion.span
                  variants={{
                    rest: { x: 0, y: 0 },
                    hover: { x: 3, y: -3 },
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="inline-flex"
                >
                  <ArrowUpRightIcon />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Building illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none w-[220px] shrink-0 self-end sm:w-[200px] lg:w-[200px]"
          >
            <Image
              src="/images/city-illustration.png"
              alt=""
              width={300}
              height={300}
              className="h-auto w-full select-none"
              priority
            />
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="my-16 h-px w-full origin-left bg-white/25"
        />

        {/* ---------------------------------------------------------------- */}
        {/* Link columns                                                    */}
        {/* ---------------------------------------------------------------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={columnStagger}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {/* Brand column */}
          <motion.div variants={fadeUp} className="max-w-xs">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/images/white-logo.png"
                alt="KTR Freight"
                width={172}
                height={60}
                className="h-10 w-auto"
              />
            </Link>

            <p className="mt-6 text-[15px] leading-relaxed text-white/85">
              Expert Construction Services for Residential, Commercial, and
              Industrial Projects.
            </p>

            <div className="mt-8 flex items-center gap-5">
              {[
                { icon: <XIcon />, label: "X", href: "#" },
                { icon: <LinkedInIcon />, label: "LinkedIn", href: "#" },
                { icon: <InstagramIcon />, label: "Instagram", href: "#" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -2, opacity: 0.75 }}
                  transition={{ duration: 0.15 }}
                  className="text-white"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services column */}
          <motion.div variants={fadeUp}>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/55">
              Services
            </p>
            <ul className="mt-6 space-y-4">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company column */}
          <motion.div variants={fadeUp}>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/55">
              Company
            </p>
            <ul className="mt-6 space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact column */}
          <motion.div variants={fadeUp}>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/55">
              Contact info
            </p>
            <div className="mt-6 space-y-6">
              {offices.map((office) => (
                <div key={office.title}>
                  <p className="text-[15px] font-medium text-white">
                    {office.title}
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/70">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="group inline-flex items-center text-[15px] text-white">
      <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.15, ease: "easeOut" }}>
        {children}
      </motion.span>
    </Link>
  );
}