"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function RedbullTextOverlays() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const sections = [
        {
            title: "VITALIZES BODY",
            subtitle: "AND MIND.",
            position: "left",
            range: [0.03, 0.1, 0.2]
        },
        {
            title: "WINGS WHEN",
            subtitle: "YOU NEED THEM.",
            position: "right",
            range: [0.25, 0.35, 0.45]
        },
        {
            title: "PERFORMANCE",
            subtitle: "UNLEASHED.",
            position: "center",
            range: [0.55, 0.65, 0.75]
        },
        {
            title: "THE FUTURE OF",
            subtitle: "ENERGY.",
            position: "center",
            range: [0.8, 0.9, 1.0]
        },
    ];

    return (
        <div ref={containerRef} className="absolute inset-0 h-[800vh] w-full pointer-events-none z-10">
            {sections.map((section, idx) => {
                return (
                    <TextOverlay
                        key={idx}
                        title={section.title}
                        subtitle={section.subtitle}
                        position={section.position}
                        range={section.range}
                        progress={scrollYProgress}
                    />
                );
            })}
        </div>
    );
}

function TextOverlay({ title, subtitle, position, range, progress }: any) {
    const [start, peak, end] = range;

    const opacity = useTransform(
        progress,
        [start, start + 0.05, peak, end - 0.05, end],
        [0, 1, 1, 0, 0]
    );

    const y = useTransform(
        progress,
        [start, peak, end],
        [100, 0, -100]
    );

    const scale = useTransform(
        progress,
        [start, peak, end],
        [0.8, 1, 1.2]
    );

    let alignmentClass = "items-center text-center justify-center";
    if (position === "left") alignmentClass = "items-start text-left justify-center pl-8 md:pl-24";
    if (position === "right") alignmentClass = "items-end text-right justify-center pr-8 md:pr-24";

    return (
        <motion.div
            style={{ opacity, y, scale }}
            className={`fixed inset-0 flex flex-col ${alignmentClass}`}
        >
            <div className="relative group">
                <h2
                    className="text-6xl sm:text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tighter uppercase italic leading-[0.85] mix-blend-screen text-transparent"
                    style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}
                >
                    {title}
                </h2>
                {/* Glow behind the stroke */}
                <h2 className="absolute top-0 left-0 text-6xl sm:text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tighter uppercase italic leading-[0.85] blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-1000 text-white mix-blend-overlay">
                    {title}
                </h2>
            </div>

            {subtitle && (
                <div className="relative mt-2">
                    <h2 className="text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter uppercase italic leading-[0.85] text-transparent bg-clip-text bg-gradient-to-br from-[#ED1A3A] via-[#ff4a63] to-[#800a1b] drop-shadow-[0_20px_40px_rgba(237,26,58,0.4)] relative z-10">
                        {subtitle}
                    </h2>
                    {/* Intense Red Glow */}
                    <h2 className="absolute top-0 left-0 text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter uppercase italic leading-[0.85] text-[#ED1A3A] blur-3xl opacity-50 mix-blend-screen z-0">
                        {subtitle}
                    </h2>
                </div>
            )}
        </motion.div>
    );
}
