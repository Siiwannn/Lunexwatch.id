"use client"

import React from "react"
import { motion } from "framer-motion"

const METRIC_CELLS = [
  { value: "150+", label: "Years of Heritage" },
  { value: "50", label: "Master Watchmakers" },
  { value: "400+", label: "Hours Per Piece" },
  { value: "18K", label: "Gold Purity" }
]

export default function Experience() {
  return (
    /* PERUBAHAN: bg-transparent & relative z-10 agar efek MEGA ZOOM OUT bisa pecah meledak di seksi LEGACY */
    <section id="experience" className="w-full max-w-full overflow-hidden py-20 lg:py-24 bg-transparent relative z-10 border-b border-[#D4AF37]/10">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="text-[9px] tracking-[0.45em] text-[#D4AF37]/60 block mb-3 uppercase font-medium">LEGACY</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">Crafted Through Time</h2>
        </div>

        {/* Grid boks angka dibuat transparan total agar ledakan ring di belakangnya terlihat super jelas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#D4AF37]/15 border border-[#D4AF37]/15">
          {METRIC_CELLS.map((cell, idx) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              key={cell.label}
              className="bg-[#050505]/20 backdrop-blur-sm p-6 md:p-8 lg:p-12 text-center group glass-hover transition-all duration-500"
            >
              <span className="font-serif text-3xl md:text-4xl lg:text-6xl font-light text-white tracking-tighter block">
                {cell.value}
              </span>
              <p className="text-[8px] tracking-[0.25em] text-white/35 mt-2.5 uppercase font-semibold">
                {cell.label}
              </p>
              <div className="w-4 h-[1px] bg-[#D4AF37]/30 mx-auto mt-3 transition-all duration-500 group-hover:w-10 group-hover:bg-[#D4AF37]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
