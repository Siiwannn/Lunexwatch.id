"use client"

import React from "react"

export default function Footer() {
  return (
    <footer className="py-16 lg:py-20 px-6 md:px-12 xl:px-20 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Menggunakan grid adaptif dari mobile ke tablet, lalu ke desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Column Brand Signature */}
          <div className="col-span-2 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-5 h-5 flex items-center justify-center">
                <span className="absolute w-3.5 h-3.5 border border-[#D4AF37] rotate-45" />
                <span className="absolute w-3.5 h-3.5 border border-[#D4AF37] -rotate-45" />
              </div>
              <span className="text-sm tracking-[0.25em] text-white font-serif uppercase">LUNEXWATCH</span>
            </div>
            <p className="text-[11px] text-white/30 font-light leading-relaxed max-w-xs">
              Meticulously conceptualized and assembled in Geneva, Switzerland. Perfecting chronographical precision since MMXXIV.
            </p>
          </div>

          {/* Links Directory Matrix Group 1 */}
          <div>
            <h4 className="text-[9px] tracking-[0.3em] text-[#D4AF37]/70 font-semibold uppercase mb-4">COLLECTION</h4>
            <div className="flex flex-col gap-2.5">
              {["Royal Gold", "Midnight Prestige", "Celestial Noir"].map((l) => (
                <a key={l} href="#collection" className="text-[10px] tracking-wide text-white/40 hover:text-[#D4AF37] transition-colors duration-300 font-light">{l}</a>
              ))}
            </div>
          </div>

          {/* Links Directory Matrix Group 2 */}
          <div>
            <h4 className="text-[9px] tracking-[0.3em] text-[#D4AF37]/70 font-semibold uppercase mb-4">MAISON</h4>
            <div className="flex flex-col gap-2.5">
              {["Heritage", "Craftsmanship", "Bespoke Hub", "Concierge"].map((l) => (
                <a key={l} href="#" className="text-[10px] tracking-wide text-white/40 hover:text-[#D4AF37] transition-colors duration-300 font-light">{l}</a>
              ))}
            </div>
          </div>

          {/* Links Directory Matrix Group 3 */}
          <div>
            <h4 className="text-[9px] tracking-[0.3em] text-[#D4AF37]/70 font-semibold uppercase mb-4">COMPANY</h4>
            <div className="flex flex-col gap-2.5">
              {["About Press", "Careers", "Legal Notices", "Contact"].map((l) => (
                <a key={l} href="#" className="text-[10px] tracking-wide text-white/40 hover:text-[#D4AF37] transition-colors duration-300 font-light">{l}</a>
              ))}
            </div>
          </div>

        </div>

        <div className="w-full h-[1px] bg-[#D4AF37]/10 my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] tracking-widest text-white/20 uppercase font-medium">
          <span>© 2026 LUNEXWATCH. ALL RIGHTS RESERVED.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
