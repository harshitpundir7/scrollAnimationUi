"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Flame } from "lucide-react";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        // Background blur based on scroll position
        setScrolled(latest > 50);

        // Hide conditionally based on scroll direction
        if (latest > 150 && latest > previous) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: hidden ? -100 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled
                ? "bg-[#0D1112]/80 backdrop-blur-xl border-b border-white/5 shadow-sm"
                : "bg-transparent border-b border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="bg-[#ED1A3A] p-2 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(237,26,58,0.5)]">
                        <Flame className="text-white w-6 h-6" />
                    </div>
                    <span className="font-black text-3xl tracking-tighter text-white uppercase italic">
                        Red Bull
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-10 font-bold text-sm tracking-widest uppercase text-gray-300">
                    <a href="#" className="hover:text-white hover:text-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">Energy Drink</a>
                    <a href="#" className="hover:text-white hover:text-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">Athletes</a>
                    <a href="#" className="hover:text-white hover:text-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">Events</a>
                </div>

                <button className="relative px-8 py-3 rounded-none font-bold text-sm uppercase tracking-widest overflow-hidden group bg-transparent text-white border border-[#ED1A3A] hover:bg-[#ED1A3A] transition-all duration-300">
                    <span className="relative z-10">Get Wings</span>
                </button>
            </div>
        </motion.nav>
    );
}
