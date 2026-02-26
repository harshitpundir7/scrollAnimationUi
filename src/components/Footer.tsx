"use client";

import { motion } from "framer-motion";

const footerLinks = {
    Products: ["Energy Drink", "Sugarfree", "Zero Calories", "The Editions", "Organics"],
    Company: ["About Us", "Media", "Careers", "Sustainability", "Terms of Use"],
    Explore: ["Athletes", "Sports", "Music", "Gaming", "Adventure"],
};

const socials = [
    {
        label: "Instagram",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
    },
    {
        label: "X/Twitter",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: "YouTube",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    },
    {
        label: "TikTok",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.27a8.15 8.15 0 004.79 1.54V7.38a4.85 4.85 0 01-1.03-.69z" />
            </svg>
        ),
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Footer() {
    return (
        <footer className="relative bg-[#08090a] text-white overflow-hidden border-t border-white/[0.05]">
            {/* Gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8102E]/60 to-transparent" />

            {/* Ambient glows */}
            <div className="absolute -bottom-40 left-1/4 w-[600px] h-[600px] bg-[#E8102E] rounded-full opacity-[0.04] blur-[120px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600 rounded-full opacity-[0.03] blur-[120px] pointer-events-none" />

            {/* Newsletter / CTA band */}
            <div className="border-b border-white/[0.05] py-16 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <p
                            className="text-xs tracking-[0.35em] uppercase text-[#E8102E] mb-2 font-semibold"
                            style={{ fontFamily: "var(--font-inter-tight)" }}
                        >
                            Stay in the zone
                        </p>
                        <h3
                            className="text-4xl md:text-5xl font-black uppercase italic text-white leading-tight"
                            style={{ fontFamily: "var(--font-barlow)" }}
                        >
                            Join the{" "}
                            <span className="text-[#E8102E]">Wing</span>
                            squad
                        </h3>
                    </div>
                    <form className="flex gap-0 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 px-5 py-4 bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/30 text-sm outline-none focus:border-[#E8102E]/60 transition-colors duration-300"
                            style={{ fontFamily: "var(--font-inter-tight)" }}
                        />
                        <button
                            type="submit"
                            className="btn-primary px-7 py-4 text-xs"
                            style={{ fontFamily: "var(--font-barlow)" }}
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Main footer grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-2 md:grid-cols-5 gap-12 relative z-10"
            >
                {/* Brand block */}
                <motion.div variants={itemVariants} className="col-span-2">
                    {/* Logo */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="relative w-12 h-12">
                            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                                <circle cx="20" cy="20" r="20" fill="#E8102E" />
                                <path d="M8 24c0-3 2-5 5-5s4 2 6 2 3-2 6-2 5 2 5 5H8z" fill="white" opacity="0.9" />
                                <ellipse cx="13" cy="18" rx="3.5" ry="4.5" fill="white" opacity="0.9" />
                                <ellipse cx="27" cy="18" rx="3.5" ry="4.5" fill="white" opacity="0.9" />
                                <circle cx="20" cy="12" r="2.5" fill="#FFD700" />
                            </svg>
                            <div className="absolute inset-0 rounded-full bg-[#E8102E] blur-xl opacity-30 scale-150" />
                        </div>
                        <div>
                            <p
                                className="font-black text-3xl uppercase italic leading-tight"
                                style={{ fontFamily: "var(--font-barlow)" }}
                            >
                                Red Bull
                                <sup className="text-[#E8102E] text-base ml-0.5">®</sup>
                            </p>
                        </div>
                    </div>

                    <p
                        className="text-white/40 text-sm leading-relaxed max-w-xs mb-8"
                        style={{ fontFamily: "var(--font-inter-tight)" }}
                    >
                        <span className="text-white/70 font-semibold">VITALIZES BODY AND MIND.® </span>
                        Red Bull Energy Drink is appreciated worldwide by top athletes, busy professionals,
                        university students and travelers on long journeys.
                    </p>

                    {/* Social icons */}
                    <div className="flex items-center gap-3">
                        {socials.map((s) => (
                            <motion.a
                                key={s.label}
                                href={s.href}
                                aria-label={s.label}
                                whileHover={{ scale: 1.15, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-300"
                            >
                                {s.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Link columns */}
                {Object.entries(footerLinks).map(([category, links]) => (
                    <motion.div key={category} variants={itemVariants}>
                        <h4
                            className="text-[10px] tracking-[0.3em] uppercase text-[#E8102E] font-bold mb-6 flex items-center gap-3"
                            style={{ fontFamily: "var(--font-inter-tight)" }}
                        >
                            <span className="w-6 h-px bg-[#E8102E]" />
                            {category}
                        </h4>
                        <ul className="space-y-3">
                            {links.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-sm text-white/40 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"
                                        style={{ fontFamily: "var(--font-inter-tight)" }}
                                    >
                                        <span className="inline-block opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 mr-1 text-[#E8102E] transition-all duration-200">›</span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>

            {/* Bottom bar */}
            <div className="border-t border-white/[0.05] py-8 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p
                        className="text-white/25 text-xs tracking-wide"
                        style={{ fontFamily: "var(--font-inter-tight)" }}
                    >
                        © {new Date().getFullYear()} Red Bull GmbH. All rights reserved.
                    </p>
                    <div
                        className="flex items-center gap-6 text-white/25 text-xs tracking-widest uppercase"
                        style={{ fontFamily: "var(--font-inter-tight)" }}
                    >
                        {["Privacy", "Cookies", "Imprint", "Contact"].map((item) => (
                            <a key={item} href="#" className="hover:text-white transition-colors duration-300">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
