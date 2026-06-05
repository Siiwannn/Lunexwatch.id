"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    
    // Simulasi pengiriman data ke server LUNEX selama 1.5 detik
    setTimeout(() => {
      setStatus("success")
      setEmail("")
    }, 1500)
  }

  return (
    <section className="w-full max-w-full overflow-hidden py-20 lg:py-24 px-6 bg-[#050505] border-b border-[#D4AF37]/10">
      <div className="max-w-xl mx-auto glass p-8 md:p-12 text-center relative overflow-hidden w-full">
        
        {/* Frame Corner Accents */}
        <span className="absolute top-0 left-0 w-4 h-[1px] bg-[#D4AF37]/40" />
        <span className="absolute top-0 left-0 w-[1px] h-4 bg-[#D4AF37]/40" />
        <span className="absolute bottom-0 right-0 w-4 h-[1px] bg-[#D4AF37]/40" />
        <span className="absolute bottom-0 right-0 w-[1px] h-4 bg-[#D4AF37]/40" />

        <span className="text-[9px] tracking-[0.45em] text-[#D4AF37]/60 block mb-3 uppercase font-medium">EXCLUSIVE ACCESS</span>
        
        <AnimatePresence mode="wait">
          {status !== "success" ? (
            <motion.div
              key="form-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-tight">Join the Inner Circle</h2>
              <p className="text-[11px] md:text-xs text-white/35 mt-3 max-w-xs mx-auto leading-relaxed font-light">
                Receive priority invitations to limited collections, private exhibitions, and bespoke releases.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 max-w-sm mx-auto flex flex-col gap-3 w-full">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  placeholder="Your email address"
                  className="bg-transparent border-b border-[#D4AF37]/20 focus:border-[#D4AF37] py-2.5 text-xs text-white placeholder:text-white/20 w-full outline-none transition-colors duration-400 font-light tracking-wide text-center disabled:opacity-50"
                />
                <button 
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 bg-[#D4AF37] text-black text-[9px] tracking-[0.3em] font-medium transition-all duration-400 hover:bg-[#E8C84A] uppercase mt-3 flex items-center justify-center min-h-[40px]"
                >
                  {status === "loading" ? (
                    <span className="inline-block w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : "SUBSCRIBE"}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success-state"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="py-6 flex flex-col items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] text-lg">
                ✓
              </div>
              <h3 className="font-serif text-2xl text-white font-light">Welcome to the Maison</h3>
              <p className="text-xs text-white/40 max-w-xs leading-relaxed font-light">
                A confirmation link has been routed to your digital address. Private concierge access granted.
              </p>
              <button 
                onClick={() => setStatus("idle")}
                className="text-[9px] tracking-widest text-[#D4AF37] uppercase border-b border-[#D4AF37]/30 pb-0.5 mt-2 hover:border-[#D4AF37] transition-all"
              >
                Go Back
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
