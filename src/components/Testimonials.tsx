"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const REVIEW_ITEMS = [
  {
    quote: "A new pinnacle of horology. Simply extraordinary structural finish and mechanical execution.",
    author: "Marcus von Hauer",
    role: "Watch Collector & Specialist"
  },
  {
    quote: "Every dynamic structural detail speaks directly to centuries of pristine Swiss horology mastery.",
    author: "Isabelle Fontaine",
    role: "Haute Couture Fashion Director"
  },
  {
    quote: "The most extraordinary mechanical timepiece I have ever had the profound luxury to wear.",
    author: "Alexander Chen",
    role: "CEO & Global Philanthropist"
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const loopTimer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % REVIEW_ITEMS.length)
    }, 6000)
    return () => clearInterval(loopTimer)
  }, [])

  return (
    <section className="w-full max-w-full overflow-hidden py-20 lg:py-24 bg-[#080808] relative border-b border-[#D4AF37]/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.02)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="w-full max-w-3xl mx-auto px-6 text-center relative z-10">
        <span className="text-[9px] tracking-[0.45em] text-[#D4AF37]/60 block mb-3 uppercase font-medium">CLIENT VOICES</span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight mb-12">Worn by the Extraordinary</h2>

        <div className="relative w-full min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="glass p-6 md:p-10 lg:p-12 text-center relative w-full rounded-none"
            >
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 font-serif text-[6rem] md:text-[8rem] text-[#D4AF37]/5 leading-none pointer-events-none select-none">
                “
              </span>
              
              <div className="text-[#D4AF37] text-[10px] tracking-[0.25em] mb-4 select-none">★★★★★</div>
              
              <p className="font-serif text-base md:text-lg lg:text-xl text-white/80 italic font-light leading-relaxed max-w-xl mx-auto">
                {REVIEW_ITEMS[activeIndex].quote}
              </p>
              
              <div className="w-6 h-[1px] bg-[#D4AF37]/30 mx-auto my-5" />
              
              <span className="text-xs tracking-[0.15em] text-white/70 block uppercase font-medium">
                {REVIEW_ITEMS[activeIndex].author}
              </span>
              <span className="text-[9px] tracking-[0.2em] text-[#D4AF37]/50 block uppercase mt-1">
                {REVIEW_ITEMS[activeIndex].role}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {REVIEW_ITEMS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveIndex(dotIdx)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                dotIdx === activeIndex ? "bg-[#D4AF37] scale-125" : "bg-transparent border border-[#D4AF37]/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
