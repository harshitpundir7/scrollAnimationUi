"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-[#0D1112] text-white pt-32 pb-12 px-6 border-t border-white/5 relative z-10 overflow-hidden">
            {/* Ambient Footer Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[200px] bg-[#ED1A3A] rounded-full mix-blend-overlay filter blur-[150px] opacity-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 relative z-10">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-5xl font-black tracking-tighter mb-6 uppercase italic flex items-center gap-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        Red Bull <span className="text-[#ED1A3A] text-5xl">®</span>
                    </h3>
                    <p className="text-gray-400 max-w-md text-lg font-light leading-relaxed">
                        <span className="font-bold text-gray-300">VITALIZES BODY AND MIND.®</span> <br />
                        Red Bull Energy Drink is appreciated worldwide by top athletes, busy professionals, university students and travelers on long journeys.
                    </p>
                </div>

                <div className="group/col">
                    <h4 className="font-black text-xs tracking-[0.2em] uppercase text-white mb-8 flex items-center gap-4">
                        <span className="w-8 h-[2px] bg-[#ED1A3A] group-hover/col:w-12 transition-all duration-300"></span> Products
                    </h4>
                    <ul className="space-y-4 text-gray-500 font-medium text-sm">
                        <li><a href="#" className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">Energy Drink</a></li>
                        <li><a href="#" className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">Sugarfree</a></li>
                        <li><a href="#" className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">Zero</a></li>
                        <li><a href="#" className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">Editions</a></li>
                    </ul>
                </div>

                <div className="group/col">
                    <h4 className="font-black text-xs tracking-[0.2em] uppercase text-white mb-8 flex items-center gap-4">
                        <span className="w-8 h-[2px] bg-[#ED1A3A] group-hover/col:w-12 transition-all duration-300"></span> Company
                    </h4>
                    <ul className="space-y-4 text-gray-500 font-medium text-sm">
                        <li><a href="#" className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">Contact Us</a></li>
                        <li><a href="#" className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">Media</a></li>
                        <li><a href="#" className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">Jobs</a></li>
                        <li><a href="#" className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">Terms of Use</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-gray-600 font-medium text-xs tracking-wider relative z-10">
                <p>&copy; {new Date().getFullYear()} Red Bull Company. All rights reserved.</p>
                <div className="flex gap-8 mt-6 md:mt-0 font-bold uppercase tracking-[0.2em]">
                    <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">YouTube</a>
                </div>
            </div>
        </footer>
    );
}
