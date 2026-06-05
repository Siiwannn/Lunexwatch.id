"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const PRODUCTS_DATA = [
  {
    id: "royal-gold",
    name: "Royal Gold",
    badge: "18K ROSE GOLD",
    price: "$24,500",
    desc: "18K rose gold case with hand-finished guilloche dial. A masterpiece of traditional horology.",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=80"
  },
  {
    id: "midnight-prestige",
    name: "Midnight Prestige",
    badge: "PLATINUM",
    price: "$31,800",
    desc: "Platinum case with meteorite dial. Each piece tells a story written in the stars.",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&q=80"
  },
  {
    id: "celestial-noir",
    name: "Celestial Noir",
    badge: "BLACK CERAMIC",
    price: "$28,200",
    desc: "Black ceramic and titanium construction with skeleton dial. Audacious design meets transparency.",
    image: "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=600&q=80"
  }
]

export default function FeaturedCollection() {
  return (
    /* FIX: Menggunakan bg-transparent total tanpa boks penghalang agar lingkaran tengah terlihat jelas */
    <section id="collection" className="pt-32 pb-0 bg-transparent relative z-10 border-b border-[#D4AF37]/10 w-full">
      
      {/* HEADER TEXT - DIRESTORE PENUH */}
      <div className="text-center pb-20 px-6 relative z-20">
        <span className="text-[9px] tracking-[0.45em] text-[#D4AF37]/60 block mb-4 uppercase font-medium">THE COLLECTION</span>
        <h2 className="font-serif text-5xl lg:text-7xl font-light text-white tracking-tight">Timepieces of Distinction</h2>
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mt-8" />
      </div>

      {/* GRID KARTU PRODUK SEMI-TRANSPARAN ELEGAN */}
      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#D4AF37]/15 border-t border-[#D4AF37]/15 bg-transparent">
        {PRODUCTS_DATA.map((product, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.15, duration: 0.8 }}
            key={product.id}
            className="group relative flex flex-col bg-transparent transition-all duration-500 overflow-hidden"
          >
            {/* Image Frame */}
            <div className="h-96 lg:h-[460px] bg-transparent relative overflow-hidden flex items-center justify-center p-8">
              <span className="absolute top-6 left-6 w-4 h-4 border-t border-l border-[#D4AF37]/20 group-hover:border-[#D4AF37]/60 transition-colors duration-500" />
              <span className="absolute top-6 right-6 w-4 h-4 border-t border-r border-[#D4AF37]/20 group-hover:border-[#D4AF37]/60 transition-colors duration-500" />
              <span className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-[#D4AF37]/20 group-hover:border-[#D4AF37]/60 transition-colors duration-500" />
              <span className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-[#D4AF37]/20 group-hover:border-[#D4AF37]/60 transition-colors duration-500" />

              <div className="w-full h-full relative scale-[0.82] group-hover:scale-[0.92] transition-transform duration-700 ease-out">
                <Image src={product.image} alt={product.name} fill className="object-contain" sizes="(max-w-7xl) 33vw" priority />
              </div>
            </div>

            {/* Info Frame dibuat transparan tipis */}
            <div className="p-10 border-t border-[#D4AF37]/10 flex flex-col flex-grow bg-[#050505]/10 relative z-10">
              <div className="mb-4">
                <span className="text-[8px] tracking-[0.4em] text-[#D4AF37]/60 border border-[#D4AF37]/20 px-2.5 py-1 inline-block font-medium uppercase">
                  {product.badge}
                </span>
              </div>

              <h3 className="font-serif text-3xl font-light text-white mb-3 tracking-wide">{product.name}</h3>
              <p className="text-xs text-white/40 leading-relaxed font-light mb-8 max-w-sm">{product.desc}</p>

              <div className="mt-auto pt-4 flex items-end justify-between">
                <span className="text-xl font-light font-serif text-[#D4AF37]">{product.price}</span>
                <span className="text-[9px] tracking-[0.2em] text-white/40 uppercase font-semibold group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                  Discover <span className="transform transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
