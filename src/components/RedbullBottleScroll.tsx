"use client";

import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function RedbullBottleScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const frameCount = 200; // Redbull frames 1 to 200

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Preload images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = `/images/redbull/${i}.webp`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setImages(loadedImages);
                }
            };
            loadedImages.push(img);
        }
    }, []);

    // Draw on canvas based on scroll
    useEffect(() => {
        if (!canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const render = () => {
            const progress = scrollYProgress.get();
            // Calculate frame index
            let frameIndex = Math.floor(progress * (frameCount - 1));
            if (frameIndex < 0) frameIndex = 0;
            if (frameIndex >= frameCount) frameIndex = frameCount - 1;

            const img = images[frameIndex];
            if (img && img.complete) {
                // Clear canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Calculate 'contain' logic for epic massive scale
                // We scale it up higher so the can is large and centered
                // Redbull original images have #0D1112 background, our body is #0D1112, so it blends seamlessly.
                const hRatio = canvas.width / img.width;
                const vRatio = canvas.height / img.height;
                const ratio = Math.max(hRatio, vRatio); // Use max for 'cover' effect filling the screen, or min for 'contain'

                // We actually want a 'contain' but slightly zoomed or just standard contain
                const renderRatio = Math.min(hRatio, vRatio) * 1.5; // Scale up by 1.5x for impact

                const centerShiftX = (canvas.width - img.width * renderRatio) / 2;
                const centerShiftY = (canvas.height - img.height * renderRatio) / 2;

                ctx.drawImage(
                    img,
                    0, 0, img.width, img.height,
                    centerShiftX, centerShiftY, img.width * renderRatio, img.height * renderRatio
                );
            }
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [images, scrollYProgress]);

    // Handle canvas resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                const { innerWidth, innerHeight } = window;
                canvasRef.current.width = innerWidth;
                canvasRef.current.height = innerHeight;
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div ref={containerRef} className="relative h-[800vh] w-full bg-[#0D1112]">
            <div className="sticky top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-0">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                />
                {/* Adds a slight dark gradient at the bottom so text pops */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1112] via-transparent to-transparent opacity-80 pointer-events-none"></div>
            </div>
        </div>
    );
}
