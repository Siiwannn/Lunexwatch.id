"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function BrandStory() {
  return (
    /* FIX: bg-transparent murni tanpa batas overflow kaku */
    <section id="heritage" className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] bg-transparent relative z-10 items-stretch w-full">
      
      {/* Left Image Frame */}
      <div className="relative h-[55vh] lg:h-auto min-h-[400px] overflow-hidden bg-transparent">
        <Image src="https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=900&q=80" alt="Lunex Watchmaking Craft Studio" fill className="object-cover" sizes="(max-w-7xl) 50vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050505] hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent lg:hidden" />
      </div>

      {/* Right Content Box: Diubah jadi FULL TRANSPARENT tanpa backdrop blur penghalang lingkaran */}
      <div className="flex items-center justify-center px-8 lg:px-20 py-24 bg-transparent relative z-20">
        <div className="max-w-xl w-full flex flex-col items-start text-left">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-[1px] bg-[#D4AF37]/50" />
            <span className="text-[9px] tracking-[0.45em] text-[#D4AF37]/60 uppercase font-medium">MAISON LUNEX</span>
          </div>

          <h2 className="font-serif text-4xl lg:text-6xl font-light text-white leading-tight tracking-tight">
            A century of mastery, <br />
            <span className="shimmer-text font-normal">distilled into time.</span>
          </h2>

          <p className="mt-8 text-xs lg:text-sm text-white/35 leading-[1.85] font-light max-w-md">
            Born in the heart of Switzerland, each Lunex timepiece is the culmination of generations of master craftsmen. Our artisans dedicate hundreds of hours to perfecting every movement, every facet, and every single breath of technological innovation.
          </p>

          <div className="w-12 h-[1px] bg-[#D4AF37]/30 mt-8" />

          <div className="grid grid-cols-3 gap-6 lg:gap-10 mt-12 w-full pt-2">
            <div>
              <span className="font-serif text-3xl lg:text-4xl text-white font-light">150+</span>
              <p className="text-[8px] tracking-[0.25em] text-white/35 font-medium uppercase mt-2">Years</p>
            </div>
            <div>
              <span className="font-serif text-3xl lg:text-4xl text-white font-light">50</span>
              <p className="text-[8px] tracking-[0.25em] text-white/35 font-medium uppercase mt-2">Watchmakers</p>
            </div>
            <div>
              <span className="font-serif text-3xl lg:text-4xl text-white font-light">400h</span>
              <p className="text-[8px] tracking-[0.25em] text-white/35 font-medium uppercase mt-2">Per Piece</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
