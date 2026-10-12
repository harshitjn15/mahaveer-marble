"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Logo } from "./logo"

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" } 
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Animated Background Mesh */}
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            className="absolute inset-0 mesh-gradient"
          />
          
          <div className="relative flex flex-col items-center">
            {/* Shimmering Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Logo className="scale-150 mb-8" />
              
              {/* Shimmer Effect Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
                animate={{ 
                  x: ['-200%', '200%'] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2, 
                  ease: "linear" 
                }}
              />
            </motion.div>

            {/* Progress Bar */}
            <div className="w-48 h-[2px] bg-border rounded-full overflow-hidden mt-8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="h-full bg-gold-500"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-gold-500/60 uppercase tracking-[0.4em] text-[10px] font-bold"
            >
              Mahaveer Marble
            </motion.p>
          </div>

          {/* Decorative Marble Vein overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none marble-texture" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
