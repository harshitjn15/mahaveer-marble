"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Smooth springs for hardware-accelerated feel
  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isSelectable = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      
      setIsHovering(!!isSelectable)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-gold-500 pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
      style={{
        x: x,
        y: y,
        translateX: "-50%",
        translateY: "-50%",
        scale: isHovering ? 2.5 : 1,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: isHovering ? 2.5 : 1,
        opacity: 1,
      }}
      transition={{ duration: 0.3 }}
    >
        {isHovering && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 rounded-full border border-white/20 scale-125"
            />
        )}
    </motion.div>
  )
}
