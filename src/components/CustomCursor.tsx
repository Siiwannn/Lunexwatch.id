"use client"

import React, { useEffect, useState, useRef } from "react"

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches)
    }
    checkDevice()
    
    if (isMobile) return

    const moveCursor = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${e.clientX}px`
        ringRef.current.style.top = `${e.clientY}px`
      }
    }

    const handleHoverStart = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "72px"
        ringRef.current.style.height = "72px"
        ringRef.current.style.borderColor = "rgba(212, 175, 55, 0.3)"
        ringRef.current.style.backgroundColor = "rgba(212, 175, 55, 0.05)"
      }
    }

    const handleHoverEnd = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "32px"
        ringRef.current.style.height = "32px"
        ringRef.current.style.borderColor = "rgba(212, 175, 55, 0.6)"
        ringRef.current.style.backgroundColor = "transparent"
      }
    }

    window.addEventListener("mousemove", moveCursor)

    const interactables = document.querySelectorAll("a, button, [role='button'], .glass-hover")
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart)
      el.addEventListener("mouseleave", handleHoverEnd)
    })

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart)
        el.removeEventListener("mouseleave", handleHoverEnd)
      })
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot fixed top-0 left-0" />
      <div ref={ringRef} className="cursor-ring fixed top-0 left-0" />
    </>
  )
}
