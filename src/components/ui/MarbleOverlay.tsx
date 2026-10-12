"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function MarbleOverlay() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5])

  return (
    <motion.div 
      style={{ y, rotate }}
      className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03] lg:opacity-[0.05]"
    >
      <div className="absolute inset-0 marble-texture scale-110" />
    </motion.div>
  )
}
