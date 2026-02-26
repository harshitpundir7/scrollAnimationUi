"use client";

import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function RedbullBottleScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loadProgress, setLoadProgress] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const frameCount = 200;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Preload images with progress tracking
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = Array(frameCount);
        let loadedCount = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = `/images/redbull/${i}.webp`;
            const idx = i - 1;
            img.onload = () => {
                loadedImages[idx] = img;
                loadedCount++;
                setLoadProgress(Math.round((loadedCount / frameCount) * 100));
                if (loadedCount === frameCount) {
                    setImages([...loadedImages]);
                    setLoaded(true);
                }
            };
            img.onerror = () => {
                // Handle missing frames gracefully
                loadedCount++;
                if (loadedCount === frameCount) {
                    setImages([...loadedImages.filter(Boolean)]);
                    setLoaded(true);
                }
            };
        }
    }, []);

    // Draw frame on canvas based on scroll
    useEffect(() => {
        if (!canvasRef.current || images.length === 0) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let animationFrameId: number;

        const render = () => {
            const progress = scrollYProgress.get();
            const frameIndex = Math.min(
                Math.max(Math.floor(progress * (images.length - 1)), 0),
                images.length - 1
            );
            const img = images[frameIndex];

            if (img && img.complete) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                const hRatio = canvas.width / img.width;
                const vRatio = canvas.height / img.height;
                const renderRatio = Math.min(hRatio, vRatio) * 1.5;
                const cx = (canvas.width - img.width * renderRatio) / 2;
                const cy = (canvas.height - img.height * renderRatio) / 2;

                ctx.drawImage(img, 0, 0, img.width, img.height, cx, cy, img.width * renderRatio, img.height * renderRatio);
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();
        return () => cancelAnimationFrame(animationFrameId);
    }, [images, scrollYProgress]);

    // Canvas resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div ref={containerRef} className="relative h-[800vh] w-full bg-[#08090a]">
            {/* Sticky viewport */}
            <div className="sticky top-0 left-0 w-full h-screen overflow-hidden z-0">
                {/* Main canvas — bottle frames */}
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

                {/* Radial ambient glow that subtly pulses */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse 60% 70% at 50% 60%, rgba(232,16,46,0.06) 0%, transparent 70%)",
                    }}
                />

                {/* Vignette */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(8,9,10,0.7) 100%)",
                    }}
                />

                {/* Bottom gradient fade into next section */}
                <div className="absolute bottom-0 left-0 right-0 h-[35vh] bg-gradient-to-t from-[#08090a] via-[#08090a]/60 to-transparent pointer-events-none" />

                {/* Top gradient fade from navbar */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#08090a] to-transparent pointer-events-none" />

                {/* Loading overlay */}
                {!loaded && (
                    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#08090a]">
                        {/* Logo */}
                        <div className="mb-10 opacity-80">
                            <svg viewBox="0 0 40 40" fill="none" className="w-16 h-16 mx-auto mb-4">
                                <circle cx="20" cy="20" r="20" fill="#E8102E" />
                                <path d="M8 24c0-3 2-5 5-5s4 2 6 2 3-2 6-2 5 2 5 5H8z" fill="white" opacity="0.9" />
                                <ellipse cx="13" cy="18" rx="3.5" ry="4.5" fill="white" opacity="0.9" />
                                <ellipse cx="27" cy="18" rx="3.5" ry="4.5" fill="white" opacity="0.9" />
                                <circle cx="20" cy="12" r="2.5" fill="#FFD700" />
                            </svg>
                            <p
                                className="text-white/70 text-sm tracking-[0.4em] uppercase text-center"
                                style={{ fontFamily: "var(--font-barlow)" }}
                            >
                                Red Bull
                            </p>
                        </div>

                        {/* Progress bar */}
                        <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mb-4 relative">
                            <div
                                className="h-full bg-gradient-to-r from-[#E8102E] to-[#ff4a63] transition-all duration-150 ease-out rounded-full"
                                style={{ width: `${loadProgress}%` }}
                            />
                            <div
                                className="absolute top-0 h-full w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                style={{
                                    left: `${loadProgress - 8}%`,
                                    transition: "left 0.15s ease-out",
                                }}
                            />
                        </div>

                        <p
                            className="text-white/30 text-xs tracking-[0.3em]"
                            style={{ fontFamily: "var(--font-inter-tight)" }}
                        >
                            Loading {loadProgress}%
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
