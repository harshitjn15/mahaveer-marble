"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { GetQuoteModal } from "@/components/GetQuoteModal"
import { TiltCard } from "@/components/ui/tilt-card"

const CATEGORIES = ["All", "Marble", "Granite", "Tiles", "Handicrafts"]

const PRODUCTS = [
  { id: 1, name: "Italian Statuario", category: "Marble", img: "/images/statuario-premium.png" },
  { id: 2, name: "Luxury Marquina", category: "Granite", img: "/images/marquina-luxury.png" },
  { id: 3, name: "Amber Onyx", category: "Tiles", img: "/images/amber-onyx.png" },
  { id: 4, name: "Makrana Pure White", category: "Marble", img: "/images/statuario-premium.png" },
  { id: 5, name: "Black Galaxy", category: "Granite", img: "/images/marquina-luxury.png" },
  { id: 6, name: "Custom Onyx Crafts", category: "Handicrafts", img: "/images/amber-onyx.png" },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredProducts = PRODUCTS.filter(p => activeCategory === "All" || p.category === activeCategory)

  if (!mounted) return null

  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-16 bg-dark-200/30 dark:bg-dark-200/10 border-b border-stone-600 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-gold-500 uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Premium Selection</span>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6">Our <span className="text-gold-500">Products</span></h1>
          <p className="text-foreground/60 text-lg">
            Explore our vast collection of premium stones and materials tailored for your luxury spaces.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background flex-1 relative">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {CATEGORIES.map(category => (
              <Button 
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "h-12 px-8 rounded-full transition-all duration-300",
                  activeCategory !== category 
                    ? "bg-transparent border-stone-600 text-foreground/70 hover:border-gold-500/50 hover:text-gold-500" 
                    : "shadow-lg shadow-gold-500/20"
                )}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div 
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="group relative"
                >
                  <TiltCard>
                    <div className="relative rounded-2xl overflow-hidden glass-card p-2 cursor-pointer shadow-xl border border-stone-600 hover:shadow-2xl transition-all duration-500">
                      <div className="relative h-[350px] rounded-xl overflow-hidden bg-dark-300">
                        <Image 
                          src={product.img} 
                          alt={product.name} 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                        
                        {/* Hover Actions */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 bg-background/40 backdrop-blur-md transition-all duration-500">
                           <GetQuoteModal>
                             <Button variant="default" className="w-[160px] h-12 text-base shadow-xl">Inquire Now</Button>
                           </GetQuoteModal>
                        </div>

                        <div className="absolute bottom-6 left-6 right-6">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold mb-1 block group-hover:tracking-[0.3em] transition-all duration-300">{product.category}</span>
                          <h3 className="text-2xl font-serif text-foreground group-hover:text-gold-500 transition-colors duration-300">{product.name}</h3>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
