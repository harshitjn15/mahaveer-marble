"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 right-0 bottom-0 w-[2px] bg-gold-500/20 z-[90] origin-top"
      style={{ scaleY }}
    >
      <div className="absolute top-0 right-0 w-full h-full bg-gold-500" />
    </motion.div>
  )
}
