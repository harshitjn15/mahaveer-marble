"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface ImageRevealProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "center"
}

export function ImageReveal({ children, className = "", direction = "up" }: ImageRevealProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Clip path animations based on direction
  const maskMap = {
    up: ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"],
    down: ["inset(0% 0% 100% 0%)", "inset(0% 0% 0% 0%)"],
    left: ["inset(0% 0% 0% 100%)", "inset(0% 0% 0% 0%)"],
    right: ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"],
    center: ["circle(0% at 50% 50%)", "circle(150% at 50% 50%)"]
  }

  const clipPath = useTransform(scrollYProgress, [0, 0.4], maskMap[direction])
  const scale = useTransform(scrollYProgress, [0, 0.4], [1.2, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ clipPath, scale, opacity }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  )
}
