"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Mengunci scroll latar belakang saat menu hp terbuka
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  // Navigasi manual support Lenis Smooth Scroll
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 h-20 flex items-center transition-all duration-500 ${
          isScrolled 
            ? "bg-[#050505]/92 backdrop-blur-2xl border-b border-[rgba(212,175,55,0.08)]" 
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="w-[94vw] mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span className="absolute w-4 h-4 border border-[#D4AF37] rotate-45 transition-transform duration-700 group-hover:rotate-[225deg]" />
              <span className="absolute w-4 h-4 border border-[#D4AF37] -rotate-45 transition-transform duration-700 group-hover:rotate-[135deg]" />
            </div>
            <div className="flex flex-col">
              <span className="text-base tracking-[0.25em] text-white font-light font-serif">LUNEX</span>
              <span className="text-[7px] tracking-[0.5em] text-[#D4AF37]/60 font-semibold -mt-1">WATCH</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {["Collection", "Heritage", "Craftsmanship", "Experience"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="text-[10px] tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300 uppercase relative py-2 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* Appointment Button Desktop */}
          <div className="hidden md:block">
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="relative px-6 py-2.5 border border-[#D4AF37]/40 overflow-hidden group transition-all duration-500"
            >
              <span className="absolute inset-0 bg-[#D4AF37] scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
              <span className="relative text-[10px] tracking-[0.2em] text-[#D4AF37] group-hover:text-black transition-colors duration-500 font-medium">
                BOOK APPOINTMENT
              </span>
            </button>
          </div>

          {/* FIX TOMBOL HAMBURGER MOBILE (100% Simetris, Anti-Meyon) */}
          <button 
            className="md:hidden relative w-8 h-8 z-50 flex items-center justify-center outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* Garis Atas */}
            <span className={`absolute w-6 h-[1px] bg-[#D4AF37] transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
            }`} />
            
            {/* Garis Tengah */}
            <span className={`absolute w-6 h-[1px] bg-[#D4AF37] transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
            }`} />
            
            {/* Garis Bawah */}
            <span className={`absolute w-6 h-[1px] bg-[#D4AF37] transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
            }`} />
          </button>

        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#050505]/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8"
          >
            {["Collection", "Heritage", "Craftsmanship", "Experience"].map((item, idx) => (
              <motion.a
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="text-4xl font-light font-serif text-white hover:text-[#D4AF37] transition-colors duration-300"
              >
                {item}
              </motion.a>
            ))}
            
            <motion.button
              initial={{ y: 30, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => {
                setIsMobileMenuOpen(false)
                setIsBookingModalOpen(true)
              }}
              className="mt-6 px-8 py-3 border border-[#D4AF37] text-[#D4AF37] text-xs tracking-widest font-medium"
            >
              BOOK APPOINTMENT
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LUXURY BOOKING MODAL */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center px-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsBookingModalOpen(false)} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="glass max-w-md w-full p-8 text-center relative z-10 bg-neutral-950/90">
              <span className="text-[8px] tracking-[0.4em] text-[#D4AF37] block mb-2 font-medium">GENEVA CONCIERGE</span>
              <h3 className="font-serif text-2xl text-white font-light mb-4">Private Lounge Reservation</h3>
              <p className="text-xs text-white/40 leading-relaxed font-light mb-6">
                Secure encryption tunnel established. Our horology registrar will route a private schedule link to your corporate digital terminal within the hour.
              </p>
              <button 
                onClick={() => setIsBookingModalOpen(false)}
                className="w-full py-3 bg-[#D4AF37] text-black text-[10px] tracking-widest font-medium transition-colors hover:bg-[#E8C84A]"
              >
                CLOSE SECURE PORT
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
