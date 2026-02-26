"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

// -------------------------------------------------------
// Section data
// -------------------------------------------------------
const sections = [
    {
        eyebrow: "Formula",
        title: "VITALIZES",
        subtitle: "BODY & MIND.",
        body: "A unique blend of premium ingredients — taurine, B-vitamins, caffeine and real sugars — precision crafted to unlock your peak potential.",
        stat: { value: "80mg", label: "Caffeine per can" },
        position: "left",
        range: [0.02, 0.1, 0.2] as [number, number, number],
        accent: true,
    },
    {
        eyebrow: "Momentum",
        title: "WINGS WHEN",
        subtitle: "YOU NEED THEM.",
        body: "Whether you're chasing a summit, a deadline, or a podium — Red Bull delivers the sustained energy to carry you further.",
        stat: { value: "12.7B", label: "Cans sold in 2023" },
        position: "right",
        range: [0.25, 0.35, 0.45] as [number, number, number],
        accent: false,
    },
    {
        eyebrow: "Excellence",
        title: "PERFORMANCE",
        subtitle: "UNLEASHED.",
        body: "From Formula 1 circuits to freefall from space — Red Bull powers the moments that redefine what's humanly possible.",
        stat: { value: "600+", label: "Athletes sponsored" },
        position: "center",
        range: [0.52, 0.63, 0.73] as [number, number, number],
        accent: true,
    },
    {
        eyebrow: "Vision",
        title: "THE FUTURE",
        subtitle: "OF ENERGY.",
        body: "Innovation never stops. Red Bull continuously pushes boundaries in science, sport, and sustainability — for a world without limits.",
        stat: { value: "175+", label: "Countries worldwide" },
        position: "center",
        range: [0.8, 0.9, 1.0] as [number, number, number],
        accent: false,
    },
];

// -------------------------------------------------------
// Main component
// -------------------------------------------------------
export default function RedbullTextOverlays() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <div ref={containerRef} className="absolute inset-0 h-[800vh] w-full pointer-events-none z-10">
            {sections.map((section, idx) => (
                <TextOverlay key={idx} {...section} progress={scrollYProgress} />
            ))}
        </div>
    );
}

// -------------------------------------------------------
// Single text overlay
// -------------------------------------------------------
interface OverlayProps {
    eyebrow: string;
    title: string;
    subtitle: string;
    body: string;
    stat: { value: string; label: string };
    position: string;
    range: [number, number, number];
    progress: MotionValue<number>;
    accent: boolean;
}

function TextOverlay({ eyebrow, title, subtitle, body, stat, position, range, progress, accent }: OverlayProps) {
    const [start, peak, end] = range;

    const opacity = useTransform(
        progress,
        [start, start + 0.05, peak, end - 0.06, end],
        [0, 1, 1, 1, 0]
    );
    const y = useTransform(progress, [start, peak, end], [80, 0, -60]);
    const scale = useTransform(progress, [start, peak, end], [0.92, 1, 1.06]);

    let outerClass = "fixed inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-24";
    let innerClass = "max-w-lg";
    if (position === "right") {
        outerClass += " items-end";
        innerClass += " text-right";
    } else if (position === "center") {
        outerClass += " items-center text-center";
        innerClass += " text-center";
    } else {
        outerClass += " items-start";
    }

    return (
        <motion.div style={{ opacity, y, scale }} className={outerClass}>
            <div className={innerClass}>
                {/* Eyebrow */}
                <motion.p
                    className="text-[0.65rem] tracking-[0.45em] uppercase font-bold text-[#E8102E] mb-4"
                    style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                    — {eyebrow}
                </motion.p>

                {/* Main title (hollow stroke) */}
                <h2
                    className="font-black uppercase italic leading-[0.82] mb-1"
                    style={{
                        fontFamily: "var(--font-barlow)",
                        fontSize: "clamp(3.5rem, 10vw, 10rem)",
                        WebkitTextStroke: "2px rgba(255,255,255,1)",
                        color: "rgba(255, 255, 255, 0.4)",
                        filter: "drop-shadow(0 0 15px rgba(255,255,255,0.2))"
                    }}
                >
                    {title}
                </h2>

                {/* Subtitle (red gradient fill) */}
                <h2
                    className="font-black uppercase italic leading-[0.82] mb-8 relative"
                    style={{
                        fontFamily: "var(--font-barlow)",
                        fontSize: "clamp(3.5rem, 10vw, 10rem)",
                    }}
                >
                    {/* Red gradient */}
                    <span
                        className="relative z-10"
                        style={{
                            background: accent
                                ? "linear-gradient(135deg, #E8102E 0%, #ff4a63 50%, #c00020 100%)"
                                : "linear-gradient(135deg, #ffffff 0%, #cccccc 100%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            filter: accent ? "drop-shadow(0 0 30px rgba(232,16,46,0.45))" : "none",
                        }}
                    >
                        {subtitle}
                    </span>
                    {/* Blur glow layer */}
                    {accent && (
                        <span
                            aria-hidden
                            className="absolute inset-0 font-black uppercase italic leading-[0.82] text-[#E8102E] blur-2xl opacity-40 select-none"
                            style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(3.5rem, 10vw, 10rem)" }}
                        >
                            {subtitle}
                        </span>
                    )}
                </h2>

                {/* Body text */}
                <p
                    className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs"
                    style={{ fontFamily: "var(--font-inter-tight)", ...(position === "center" && { margin: "0 auto 2rem" }) }}
                >
                    {body}
                </p>

                {/* Stat chip */}
                <div
                    className={`inline-flex items-center gap-4 glass-card px-5 py-3 ${position === "center" ? "mx-auto" : ""}`}
                >
                    <span
                        className="text-3xl font-black text-[#E8102E] leading-none"
                        style={{ fontFamily: "var(--font-barlow)" }}
                    >
                        {stat.value}
                    </span>
                    <span
                        className="text-[10px] tracking-[0.25em] uppercase text-white/40 leading-tight"
                        style={{ fontFamily: "var(--font-inter-tight)" }}
                    >
                        {stat.label}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
