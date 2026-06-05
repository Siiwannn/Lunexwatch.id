import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import GlobalBackgroundRings from "@/components/GlobalBackgroundRings"
import FeaturedCollection from "@/components/FeaturedCollection"
import BrandStory from "@/components/BrandStory"
import PremiumFeatures from "@/components/PremiumFeatures"
import Experience from "@/components/Experience"
import Testimonials from "@/components/Testimonials"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    /* Mengunci satu warna dasar hitam pekat di level paling dasar aplikasi */
    <main className="relative min-h-screen w-full bg-[#050505]">
      <Navbar />
      
      
      {/* 2. ALUR TIMELINE SEKSI SITUS: Mengalir lurus tanpa duplikasi */}
      <Hero />
      <FeaturedCollection />
      <BrandStory />
      <PremiumFeatures />
      <Experience /> {/* <-- Seksi LEGACY sekarang dikunci cuma ada SATU di sini */}
      
      {/* 3. PENUTUP HALAMAN */}
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
