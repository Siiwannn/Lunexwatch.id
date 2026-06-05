"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* HEADER UTAMA: Dipastikan pakai z-50 agar logo dan baris menu selalu di depan */}
      <header className="fixed top-0 left-0 w-full h-20 bg-transparent flex items-center justify-between px-6 md:px-12 z-50 pointer-events-auto">
        {/* LOGO LUNEX */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-4 h-4 border border-[#D4AF37] rotate-45" />
          <span className="font-serif text-white tracking-[0.3em] text-sm uppercase font-light">
            Lunex <span className="text-[9px] text-[#D4AF37] block tracking-widest font-sans -mt-1">Watch</span>
          </span>
        </div>

        {/* BURGER / CLOSE BUTTON */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="relative w-8 h-8 flex flex-col justify-center items-end gap-1.5 focus:outline-none z-50"
        >
          <span className={`h-[1px] bg-[#D4AF37] transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
          <span className={`h-[1px] bg-[#D4AF37] transition-all duration-300 ${isOpen ? "opacity-0 w-0" : "w-4"}`} />
          <span className={`h-[1px] bg-[#D4AF37] transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`} />
        </button>
      </header>

      {/* MOBILE MENU DRAWER OVERLAY
          FIX TOTAL: Wajib menggunakan z-50 agar laci menu melayang mutlak di atas sasis z-40 Hero */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-screen bg-[#050505]/98 backdrop-blur-md flex flex-col justify-center items-center gap-8 z-50 pointer-events-auto"
          >
            {/* Nav Links */}
            <nav className="flex flex-col items-center gap-6 text-center">
              {["Heritage", "Collection", "Craftsmanship", "Bespoke", "Contact"].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="text-white/70 hover:text-[#D4AF37] font-serif text-xl tracking-[0.2em] uppercase font-light transition-colors duration-300"
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            {/* Footer Menu Mobile */}
            <div className="absolute bottom-12 text-[8px] tracking-[0.4em] text-white/20 uppercase font-semibold">
              © MMXXVI LUNEX HAUTE HORLOGERIE
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
