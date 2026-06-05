import type { Metadata } from "next"
import "./globals.css"
import SmoothScrollProvider from "@/context/SmoothScrollProvider"
import CustomCursor from "@/components/CustomCursor"

export const metadata: Metadata = {
  title: "LUNEXWATCH | Time, perfected.",
  description: "Swiss Haute Horlogerie - Est. 2024. Engineered with absolute mechanical precision in Geneva, Switzerland.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="bg-[#050505] text-[#F8F8F8] antialiased overflow-x-hidden w-full max-w-full">
        <SmoothScrollProvider>
          <CustomCursor />
          
          {/* MASTER LAYOUT SHIELD WRAPPER */}
          <div className="w-full max-w-full overflow-x-hidden relative flex flex-col min-h-screen">
            {children}
          </div>
          
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
