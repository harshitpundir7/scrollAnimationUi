"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Zap, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedbullBottleScroll from "@/components/RedbullBottleScroll";
import RedbullTextOverlays from "@/components/RedbullTextOverlays";

export default function Home() {
  return (
    <main className="min-h-[100vh] bg-[#0D1112] text-white relative selection:bg-[#ED1A3A] selection:text-white">
      {/* Subtle Noise Texture Overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <Navbar />

      {/* Hero Scroll Experience */}
      <div className="relative w-full z-10">
        <RedbullBottleScroll />
        <RedbullTextOverlays />
      </div>

      {/* Action / Buy Section underneath the scroll */}
      <section className="relative z-20 bg-[#0D1112] py-40 px-6 border-t border-white/5 shadow-[0_-30px_50px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Ambient Glowing Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#ED1A3A] rounded-full mix-blend-screen mix-blend-overlay filter blur-[150px] opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-full max-w-2xl h-[400px] bg-blue-500 rounded-full mix-blend-screen mix-blend-overlay filter blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center w-full"
          >
            <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-8 backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(237,26,58,0.2)]">
              <Zap className="w-8 h-8 text-[#ED1A3A] animate-pulse drop-shadow-[0_0_10px_rgba(237,26,58,0.8)]" />
            </div>

            <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-black mb-6 uppercase italic tracking-tighter leading-none drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ED1A3A] to-[#800a1b] drop-shadow-[0_0_20px_rgba(237,26,58,0.3)]">Fly?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Experience the uncompromising energy that fuels world champions, extreme athletes, and visionaries. Get your wings delivered straight to your door.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 w-full">
              <button className="w-full sm:w-auto px-14 py-6 bg-[#ED1A3A] hover:bg-[#ff2042] text-white font-black text-xl uppercase tracking-[0.2em] rounded-none transition-all duration-500 flex items-center justify-center gap-4 shadow-[0_0_30px_rgba(237,26,58,0.3)] hover:shadow-[0_0_50px_rgba(237,26,58,0.6)] hover:-translate-y-1 relative overflow-hidden group">
                <span className="relative z-10 flex items-center gap-3"><ShoppingBag className="w-6 h-6" /> Order 24-Pack</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
              </button>
              <button className="w-full sm:w-auto px-14 py-6 bg-transparent border border-white/20 hover:border-white/60 hover:bg-white/5 font-bold text-xl uppercase tracking-[0.2em] rounded-none transition-all duration-500 text-white flex items-center justify-center backdrop-blur-sm">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {[
                { title: "Fast Delivery", desc: "Next day priority shipping on all 24-pack orders nationwide." },
                { title: "100% Recyclable", desc: "Every can is infinitely recyclable. Drink and recycle forever." },
                { title: "Premium Quality", desc: "Highest quality ingredients crafted to absolute perfection." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center group bg-white/[0.02] border border-white/5 backdrop-blur-xl p-10 rounded-2xl hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ED1A3A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <ShieldCheck className="w-10 h-10 text-gray-600 group-hover:text-[#ED1A3A] transition-colors duration-500 mb-6" />
                  <h4 className="font-bold text-lg uppercase tracking-widest mb-3 text-gray-200 group-hover:text-white transition-colors">{item.title}</h4>
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
