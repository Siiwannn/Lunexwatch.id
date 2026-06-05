"use client"

import React, { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Center } from "@react-three/drei"
import * as THREE from "three"

function MechanicalWatchAssembly({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null)
  const hourHandRef = useRef<THREE.Group>(null)
  const minuteHandRef = useRef<THREE.Group>(null)
  const secondHandRef = useRef<THREE.Group>(null)
  const tourbillonRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (groupRef.current) {
      groupRef.current.rotation.y = -0.15 + Math.sin(time * 0.2) * 0.05
      groupRef.current.rotation.x = 0.1 + Math.cos(time * 0.15) * 0.03
    }

    if (hourHandRef.current) hourHandRef.current.rotation.z = -time * 0.02
    if (minuteHandRef.current) minuteHandRef.current.rotation.z = -time * 0.15
    if (secondHandRef.current) secondHandRef.current.rotation.z = -time * 0.9
    if (tourbillonRef.current) tourbillonRef.current.rotation.z = time * 3.5
  })

  return (
    /* Skala diset 1.25 di HP agar jam tetep kelihatan besar dan berwibawa */
    <group ref={groupRef} scale={isMobile ? 1 : 0.60} rotation={[0.1, -0.15, 0]}>
      
      {/* 1. BODI EMAS UTAMA (CASE) */}
      <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2.2, 2.2, 0.3, 64]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* 2. RING LINGKARAN DEPAN (BEZEL) */}
      <mesh position={[0, 0, 0.16]}>
        <torusGeometry args={[2.0, 0.06, 16, 100]} />
        <meshStandardMaterial color="#B8961E" metalness={0.95} roughness={0.1} />
      </mesh>

      {/* 3. PLAT WAJAH JAM (DIAL) */}
      <mesh position={[0, 0, 0.14]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.94, 1.94, 0.02, 64]} />
        <meshStandardMaterial color="#0A0A0A" metalness={0.2} roughness={0.6} />
      </mesh>

      {/* 4. GARIS INDEKS ANGKA LUAR (12 JAM) */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * Math.PI) / 6
        return (
          <mesh key={i} position={[Math.sin(angle) * 1.7, Math.cos(angle) * 1.7, 0.15]} rotation={[0, 0, -angle]}>
            <boxGeometry args={[0.05, 0.18, 0.03]} />
            <meshStandardMaterial color="#E8C84A" metalness={0.9} roughness={0.1} />
          </mesh>
        )
      })}

      {/* 5. SISTEM JARUM JAM INTERAKTIF */}
      <group ref={hourHandRef} position={[0, 0, 0.16]}>
        <mesh position={[0, 0.4, 0]}>
          <boxGeometry args={[0.07, 0.8, 0.02]} />
          <meshStandardMaterial color="#F8F8F8" metalness={0.6} roughness={0.2} />
        </mesh>
      </group>

      <group ref={minuteHandRef} position={[0, 0, 0.17]}>
        <mesh position={[0, 0.55, 0]}>
          <boxGeometry args={[0.05, 1.2, 0.02]} />
          <meshStandardMaterial color="#E8C84A" metalness={0.8} roughness={0.1} />
        </mesh>
      </group>

      <group ref={secondHandRef} position={[0, 0, 0.18]}>
        <mesh position={[0, 0.6, 0]}>
          <boxGeometry args={[0.02, 1.3, 0.01]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.05} />
        </mesh>
      </group>

      <mesh position={[0, 0, 0.19]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* 6. TOURBILLON CAGE ESCAPEMENT */}
      <group ref={tourbillonRef} position={[0, -0.8, 0.15]}>
        <mesh>
          <torusGeometry args={[0.3, 0.03, 8, 32]} />
          <meshStandardMaterial color="#B8961E" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0.01]}>
          <boxGeometry args={[0.03, 0.55, 0.02]} />
          <meshStandardMaterial color="#F8F8F8" metalness={0.8} roughness={0.1} />
        </mesh>
      </group>

      {/* 7. PELINDUNG KACA SAPPHIRE */}
      <mesh position={[0, 0, 0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.96, 1.96, 0.01, 64]} />
        <meshPhysicalMaterial color="#ffffff" transparent opacity={0.12} roughness={0.0} transmission={1.0} thickness={0.2} />
      </mesh>

      {/* 8. LUGS STRAP EMAS */}
      <mesh position={[0, 2.25, 0.05]}><boxGeometry args={[1.0, 0.3, 0.3]} /><meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.2} /></mesh>
      <mesh position={[0, -2.25, 0.05]}><boxGeometry args={[1.0, 0.3, 0.3]} /><meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.2} /></mesh>
    </group>
  )
}

export default function Watch3D() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full min-w-0 min-h-0 overflow-hidden cursor-grab active:cursor-grabbing">
      {/* PERUBAHAN KRITIKAL: Menambahkan properti 'key'. Jika isMobile berubah, 
          Canvas direset dengan posisi kamera baru [0, 0, 7.2] khusus HP agar jam bebas hambatan */}
      <Canvas
        key={isMobile ? "canvas-mobile" : "canvas-desktop"}
        camera={{ position: [0, 0, isMobile ? 7.2 : 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 4]} intensity={1.5} />
        <directionalLight position={[-5, 3, 2]} intensity={0.7} />
        <pointLight position={[0, 0, 2]} intensity={1.2} color="#E8C84A" />
        <spotLight position={[0, 5, 5]} angle={0.4} penumbra={1} intensity={1.5} />

        <Center>
          <MechanicalWatchAssembly isMobile={isMobile} />
        </Center>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 1.3} minPolarAngle={Math.PI / 4} />
      </Canvas>
    </div>
  )
}
