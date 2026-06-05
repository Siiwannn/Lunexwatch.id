"use client"

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function GlobalBackgroundRings() {
  const { scrollY } = useScroll()

  // MOMENTUM TIMELINE: Kecepatan zoom & pudar seirama 1:1 dengan transisi Hero (0-500px)
  const ringsScale = useTransform(scrollY, [0, 500], [1, 3.5])
  const ringsOpacity = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none w-full h-screen overflow-hidden flex items-center">
      
      {/* MATCHING MASTER GRID SYSTEM */}
      <div 
        style={{ width: "94vw" }} 
        className="mx-auto grid grid-cols-1 lg:grid-cols-[46%_54%] min-w-0 h-full items-center pt-24 lg:pt-20"
      >
        
        {/* Kolom Kiri (Penyeimbang Teks Hero) */}
        <div className="min-w-0 w-full" />
        
        {/* Kolom Kanan: Menampung lingkaran dekorasi */}
        <div className="relative w-full h-[60vh] lg:h-[75vh] xl:h-[80vh] flex items-center justify-center min-w-0 max-w-full mt-8 lg:mt-0">
          
          <motion.div 
            style={{ 
              scale: ringsScale, 
              opacity: ringsOpacity,
            }}
            
            className="absolute w-[400px] h-[400px] lg:w-[650px] lg:h-[650px] flex items-center justify-center origin-center -translate-y-25 lg:translate-y-0"
          >
            {/* RING 1 (Paling Dalam) */}
            <div className="absolute w-[180px] h-[180px] lg:w-[260px] lg:h-[260px] border border-[#D4AF37]/20 rounded-full spin-ring" />
            
            {/* RING 2 (Tengah) */}
            <div className="absolute w-[250px] h-[250px] lg:w-[380px] lg:h-[380px] border border-[#D4AF37]/12 rounded-full spin-ring-reverse" />
            
            {/* RING 3 (Paling Luar) */}
            <div className="absolute w-[320px] h-[320px] lg:w-[500px] lg:h-[500px] border border-[#D4AF37]/8 rounded-full spin-ring-slow" />
            
            {/* CORE GLOW CENTER */}
            <div className="absolute w-[200px] h-[200px] lg:w-[320px] lg:h-[320px] bg-radial from-[#D4AF37]/15 to-transparent blur-2xl lg:blur-3xl animate-[border-glow-pulse_6s_infinite]" />
          </motion.div>

        </div>

      </div>
    </div>
  )
}
