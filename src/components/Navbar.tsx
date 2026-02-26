"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const navLinks = [
    { label: "Energy Drink", href: "#" },
    { label: "Athletes", href: "#" },
    { label: "Events", href: "#" },
    { label: "Wings Store", href: "#" },
];

export default function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        setScrolled(latest > 60);
        setHidden(latest > 200 && latest > previous);
    });

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: hidden ? -100 : 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-[#08090a]/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.6)]"
                    : "bg-transparent"
                }`}
        >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E8102E] to-transparent opacity-80" />

            <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#"
                    className="flex items-center gap-3 group select-none"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                    {/* Red Bull logo mark */}
                    <div className="relative w-10 h-10 flex-shrink-0">
                        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                            <circle cx="20" cy="20" r="20" fill="#E8102E" />
                            {/* Two bulls silhouette — simplified premium mark */}
                            <path
                                d="M8 24c0-3 2-5 5-5s4 2 6 2 3-2 6-2 5 2 5 5H8z"
                                fill="white"
                                opacity="0.9"
                            />
                            <ellipse cx="13" cy="18" rx="3.5" ry="4.5" fill="white" opacity="0.9" />
                            <ellipse cx="27" cy="18" rx="3.5" ry="4.5" fill="white" opacity="0.9" />
                            <circle cx="20" cy="12" r="2.5" fill="#FFD700" />
                        </svg>
                        {/* Glow */}
                        <div className="absolute inset-0 rounded-full bg-[#E8102E] blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-125" />
                    </div>

                    <div className="flex flex-col leading-none">
                        <span
                            className="font-black text-2xl uppercase italic tracking-tight text-white"
                            style={{ fontFamily: "var(--font-barlow)" }}
                        >
                            Red Bull
                        </span>
                        <span
                            className="text-[9px] tracking-[0.35em] text-[#E8102E] uppercase font-bold"
                            style={{ fontFamily: "var(--font-inter-tight)" }}
                        >
                            Gives You Wings
                        </span>
                    </div>
                </motion.a>

                {/* Nav Links */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink key={link.label} {...link} />
                    ))}
                </div>

                {/* CTA */}
                <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-primary hidden sm:flex items-center gap-2 px-7 py-3 text-sm rounded-sm"
                    style={{ fontFamily: "var(--font-barlow)" }}
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                    </svg>
                    Get Wings
                </motion.button>
            </div>
        </motion.nav>
    );
}

function NavLink({ label, href }: { label: string; href: string }) {
    return (
        <a
            href={href}
            className="relative group text-[0.8rem] font-semibold tracking-[0.18em] uppercase text-white/55 hover:text-white transition-colors duration-300"
            style={{ fontFamily: "var(--font-inter-tight)" }}
        >
            {label}
            <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#E8102E] group-hover:w-full transition-all duration-300 ease-out rounded-full" />
        </a>
    );
}
