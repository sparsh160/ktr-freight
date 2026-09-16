"use client";

import React, { useId } from "react";
import Image from "next/image";

export interface LogoItem {
    src: string;
    alt: string;
    /** Optional: makes the logo cell a link */
    href?: string;
}

export interface TrustedCompaniesProps {
    heading?: string;
    logos: LogoItem[];
    /** Seconds for one full loop. Lower = faster. Default: 30 */
    speed?: number;
    /** Reverse scroll direction */
    reverse?: boolean;
    className?: string;
}

const TrustedCompanies: React.FC<TrustedCompaniesProps> = ({
    heading = "Trusted companies across industries",
    logos,
    speed = 30,
    reverse = false,
    className = "",
}) => {
    const rawId = useId().replace(/:/g, "");
    const animName = `tc-scroll-${rawId}`;

    // Duplicate the list so the track can loop seamlessly at -50%
    const track = [...logos, ...logos];

    return (
        <section className={`w-full bg-[#F2F1EE] pt-12 pb-6 sm:pt-16 sm:pb-8 md:pt-20 md:pb-5 overflow-hidden ${className}`}>
            <style>{`
                @keyframes ${animName} {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .${animName}-track {
                    animation: ${animName} ${speed}s linear infinite;
                    animation-direction: ${reverse ? "reverse" : "normal"};
                }
                .${animName}-wrapper:hover .${animName}-track {
                    animation-play-state: paused;
                }
                @media (prefers-reduced-motion: reduce) {
                    .${animName}-track {
                        animation: none;
                    }
                }
            `}</style>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
                <p className="text-center text-[11px] sm:text-[13px] font-medium tracking-[0.1em] uppercase text-gray-500 mb-6 sm:mb-8">
                    {heading}
                </p>

                <div
                    className={`relative ${animName}-wrapper`}
                    style={{
                        maskImage:
                            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                        WebkitMaskImage:
                            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                    }}
                >
                    <div className={`flex w-max ${animName}-track`}>
                        {track.map((logo, idx) => {
                            const cell = (
                                <div
                                    key={`${logo.alt}-${idx}`}
                                    className="flex items-center justify-center h-[90px] sm:h-[110px] md:h-[110px] w-[160px] sm:w-[200px] md:w-[220px] shrink-0 px-4"
                                >
                                    <div className="relative w-[100px] h-[28px] sm:w-[130px] sm:h-[36px] md:w-[150px] md:h-[40px] hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedCompanies;