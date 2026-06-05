"use client"

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function GlobalBackgroundRings() {
  const { scrollY } = useScroll()

  // MOMENTUM TIMELINE: Mengikuti ritme transisi Hero (0-500px)
  const ringsScale = useTransform(scrollY, [0, 500], [1, 3.5])
  const ringsOpacity = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none w-full h-screen overflow-hidden flex items-center bg-transparent">
      
      {/* MATCHING MASTER GRID SYSTEM - Mengkloning total sasis Hero agar presisi gila */}
      <div 
        style={{ width: "94vw" }} 
        className="mx-auto grid grid-cols-1 lg:grid-cols-[46%_54%] min-w-0 h-full items-center pt-20 lg:pt-20"
      >
        
        {/* FIX UTAMA: INVISIBLE GUIDE SYSTEM (Khusus Mobile)
            Diberi kloning teks ber-opacity 0 agar tinggi pendorong vertikalnya 
            1:1 mutlak dengan boks teks Hero asli di HP. Sumbu Y dijamin auto-kunci presisi! */}
        <div className="flex flex-col items-start gap-4 text-left min-w-0 w-full opacity-0 pointer-events-none select-none lg:h-auto lg:gap-6">
          <div className="border border-white/10 px-4 py-1.5 rounded-full inline-flex"><span className="text-[9px] uppercase tracking-[0.45em]">S</span></div>
          <h1 className="font-serif font-light leading-[0.95] text-5xl md:text-7xl flex flex-col"><span>T</span><span>p</span></h1>
          <div className="w-16 h-[1px]" />
          <p className="text-xs lg:text-sm font-light">C</p>
          <div className="pt-1"><div className="px-8 py-3.5 text-[10px]">D</div></div>
          <div className="text-[8px] mt-2 lg:mt-8"><span>E</span><span>•</span><span>G</span></div>
        </div>
        
        {/* Kolom Kanan: Menampung lingkaran dekorasi (Sekarang posisinya auto-center 1:1 dengan Jam 3D) */}
        <div className="relative w-full h-[42vh] lg:h-[75vh] xl:h-[80vh] flex items-center justify-center min-w-0 max-w-full mt-4 lg:mt-0">
          
          <motion.div 
            style={{ 
              scale: ringsScale, 
              opacity: ringsOpacity,
            }}
            className="absolute w-[360px] h-[360px] lg:w-[650px] lg:h-[650px] flex items-center justify-center origin-center"
          >
            {/* TRIPLE PREMIUM RINGS */}
            <div className="absolute w-[160px] h-[160px] lg:w-[260px] lg:h-[260px] border border-[#D4AF37]/20 rounded-full spin-ring" />
            <div className="absolute w-[220px] h-[220px] lg:w-[380px] lg:h-[380px] border border-[#D4AF37]/12 rounded-full spin-ring-reverse" />
            <div className="absolute w-[280px] h-[280px] lg:w-[500px] lg:h-[500px] border border-[#D4AF37]/8 rounded-full spin-ring-slow" />
            
            {/* CORE GLOW CENTER */}
            <div className="absolute w-[180px] h-[180px] lg:w-[320px] lg:h-[320px] bg-radial from-[#D4AF37]/15 to-transparent blur-2xl lg:blur-3xl animate-[border-glow-pulse_4s_infinite]" />
          </motion.div>

        </div>

      </div>
    </div>
  )
}
