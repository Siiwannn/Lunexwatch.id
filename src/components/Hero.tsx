"use client"

import React, { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Watch3D from "./Watch3D"

interface Particle {
  top: string
  left: string
  width: string
  height: string
  duration: string
  delay: string
}

function generateParticles(): Particle[] {
  return Array.from({ length: 20 }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    width: `${Math.random() * 2 + 1}px`,
    height: `${Math.random() * 2 + 1}px`,
    duration: `${Math.random() * 7 + 8}s`,
    delay: `${Math.random() * 5}s`
  }))
}

export default function Hero() {
  const { scrollY } = useScroll()
  const [particles, setParticles] = useState<Particle[]>([])
  
  useEffect(() => {
    setParticles(generateParticles())
  }, [])
  
  const textY = useTransform(scrollY, [0, 500], [0, -60])
  const opacityTransform = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section className="relative min-h-screen w-full max-w-full overflow-hidden bg-[#050505] flex items-center">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full max-w-full overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#D4AF37]/[0.08] blur-[150px] animate-[orb-drift_20s_infinite]" />
        <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-[#D4AF37]/[0.06] blur-[120px] animate-[orb-drift_15s_infinite_reverse]" />
        
        <div 
          className="absolute inset-0 opacity-[0.02] animate-[grid-pulse_4s_infinite]"
          style={{
            backgroundImage: "linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)",
            backgroundSize: "100px 100px"
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_100%)]" />
        
        {particles.map((p, idx) => (
          <div
            key={idx}
            className="absolute rounded-full bg-[#D4AF37]"
            style={{
              top: p.top,
              left: p.left,
              width: p.width,
              height: p.height,
              animation: `particle-rise ${p.duration} infinite linear`,
              animationDelay: p.delay
            }}
          />
        ))}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent z-10" />
      </div>

      {/* CORE ULTRA-WIDE GRID SYSTEM */}
      <div 
        style={{ width: "94vw" }}
        className="mx-auto grid grid-cols-1 lg:grid-cols-[46%_54%] min-w-0 relative z-20 items-center pt-20 lg:pt-20 overflow-hidden"
      >
        
        {/* Left Column Text Block */}
        <motion.div 
          style={{ y: textY, opacity: opacityTransform }}
          className="flex flex-col items-start gap-4 md:gap-6 text-left relative z-20 min-w-0 w-full"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="border border-white/10 px-4 py-1.5 rounded-full inline-flex"
          >
            <span className="text-[9px] tracking-[0.45em] text-white/45 font-medium uppercase">
              Swiss Haute Horlogerie
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif font-light leading-[0.95] text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl tracking-tight text-white flex flex-col"
          >
            <span>Time,</span>
            <span className="shimmer-text font-normal">perfected.</span>
          </motion.h1>

          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-16 h-[1px] bg-[#D4AF37]/50 origin-left"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xs lg:text-sm text-white/40 leading-relaxed max-w-md font-light"
          >
            Crafted for those who demand excellence, absolute precision, and perpetual prestige.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="pt-1"
          >
            <a 
              href="#collection"
              className="bg-[#D4AF37] text-black px-8 py-3.5 text-[10px] tracking-[0.3em] font-medium flex items-center gap-3 transition-all duration-400 border border-[#D4AF37] hover:bg-transparent hover:text-[#D4AF37] group"
            >
              DISCOVER THE COLLECTION
              <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex items-center gap-4 text-[8px] tracking-[0.35em] text-white/20 uppercase font-semibold mt-2 lg:mt-8"
          >
            <span>EST. MMXXIV</span>
            <span className="text-[#D4AF37]">•</span>
            <span>Geneva, Switzerland</span>
          </motion.div>
        </motion.div>

        {/* Right Column Interactive 3D Frame
            FIX: Ketinggian boks di HP dikunci h-[42vh] biar langsung sejajar nangkring estetik di bawah teks */}
        <div className="relative w-full h-[42vh] lg:h-[75vh] xl:h-[80vh] flex items-center justify-center min-w-0 max-w-full mt-4 lg:mt-0">
          <div className="w-full h-full relative z-10 min-w-0 min-h-0">
            <Watch3D />
          </div>

          <div className="absolute right-0 bottom-12 hidden sm:flex flex-col gap-4 items-end pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="text-white text-[10px] tracking-widest font-medium">01</span>
              <span className="w-8 h-[1px] bg-white" />
            </div>
            <span className="text-white/20 text-[10px] tracking-widest">02</span>
            <span className="text-white/20 text-[10px] tracking-widest">03</span>
          </div>
        </div>

      </div>
    </section>
  )
}
