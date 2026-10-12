"use client"

import { useRef, useState, useMemo, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, SoftShadows, Float, PresentationControls, useProgress } from "@react-three/drei"
import { motion, AnimatePresence } from "framer-motion"
import * as THREE from "three"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

function MarbleSlab() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { theme } = useTheme()
  
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas")
    canvas.width = 512
    canvas.height = 512
    const context = canvas.getContext("2d")
    if (context) {
      const isDark = theme === "dark"
      context.fillStyle = isDark ? "#0A0A0A" : "#FFFFFF"
      context.fillRect(0, 0, 512, 512)
      
      for (let i = 0; i < 50; i++) {
        context.beginPath()
        context.moveTo(Math.random() * 512, Math.random() * 512)
        context.lineTo(Math.random() * 512, Math.random() * 512)
        context.strokeStyle = isDark 
          ? `rgba(212, 175, 55, ${Math.random() * 0.15})` 
          : `rgba(197, 160, 23, ${Math.random() * 0.2})`
        context.lineWidth = Math.random() * 2
        context.stroke()
      }
    }
    const tex = new THREE.CanvasTexture(canvas)
    tex.wrapS = THREE.RepeatWrapping
    tex.wrapT = THREE.RepeatWrapping
    return tex
  }, [theme])

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <PresentationControls
        global={false}
        cursor={true}
        snap={true}
        speed={1}
        zoom={1}
        rotation={[0, 0, 0]}
        polar={[-0.2, 0.2]}
        azimuth={[-0.5, 0.5]}
      >
        <mesh ref={meshRef} castShadow receiveShadow rotation={[-0.2, -0.4, 0]}>
          <boxGeometry args={[4, 5, 0.2]} />
          <meshPhysicalMaterial
            map={texture}
            color={theme === "dark" ? "#111111" : "#F5F5F5"}
            metalness={theme === "dark" ? 0.2 : 0.1}
            roughness={0.1}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
            envMapIntensity={theme === "dark" ? 2.0 : 1.0}
          />
        </mesh>
      </PresentationControls>
    </Float>
  )
}

export function ThreeDHero() {
  const { theme } = useTheme()
  const { progress } = useProgress()
  const [isReady, setIsReady] = useState(false)
  const isDark = theme === "dark"

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setIsReady(true), 800)
      return () => clearTimeout(timer)
    }
  }, [progress])

  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-background overflow-hidden">
      <AnimatePresence>
        {isReady && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            {/* Decorative gradient overlay */}
            <div className={cn(
              "absolute inset-0 z-10 pointer-events-none",
              isDark 
                ? "bg-gradient-to-r from-background via-background/80 to-transparent" 
                : "bg-gradient-to-r from-background/90 via-background/40 to-transparent"
            )} />
            <div className={cn(
              "absolute inset-0 z-10 pointer-events-none",
              isDark
                ? "bg-gradient-to-t from-background via-transparent to-background/30"
                : "bg-gradient-to-t from-background/40 via-transparent to-background/10"
            )} />
            
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
              <SoftShadows size={10} samples={10} focus={0.5} />
              <ambientLight intensity={isDark ? 0.5 : 0.8} />
              <directionalLight position={[5, 10, 5]} intensity={isDark ? 1.5 : 2.0} castShadow />
              <pointLight position={[-5, -5, -5]} intensity={1} color={isDark ? "#d4af37" : "#c5a017"} />
              <Environment preset={isDark ? "city" : "apartment"} />
              <group position={[2, 0, -1]}>
                <MarbleSlab />
              </group>
            </Canvas>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
