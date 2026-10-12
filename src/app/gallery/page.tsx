"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { TiltCard } from "@/components/ui/tilt-card"
import { SectionReveal } from "@/components/ui/SectionReveal"

const GALLERY_IMAGES = [
  { id: 1, src: "/images/statuario-premium.png", title: "Italian Statuario Lounge" },
  { id: 2, src: "/images/marquina-luxury.png", title: "Nero Marquina Kitchen" },
  { id: 3, src: "/images/amber-onyx.png", title: "Amber Onyx Feature Wall" },
  { id: 4, src: "/images/statuario-premium.png", title: "Premium Suite Flooring" },
  { id: 5, src: "/images/marquina-luxury.png", title: "Modern Office Reception" },
  { id: 6, src: "/images/amber-onyx.png", title: "Luminous Onyx Bathroom" },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null)

  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 bg-dark-200/30 dark:bg-dark-200/10 border-b border-stone-600 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-gold-500 uppercase tracking-[0.4em] text-xs font-black mb-4 block">Our Projects</span>
          <h1 className="text-4xl md:text-7xl font-serif text-foreground mb-6 transition-all duration-700">Visual <span className="text-gold-500 italic">Showcase</span></h1>
          <p className="text-foreground/60 text-lg leading-relaxed font-light">
            A visual journey through our finest work, highlighting the transformational power of premium Mahaveer Marble.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background flex-1 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
            {GALLERY_IMAGES.map((img, idx) => (
              <SectionReveal 
                key={img.id}
                delay={idx * 0.05}
                className="break-inside-avoid mb-8 relative"
                direction="up"
              >
                <div onClick={() => setSelectedImage(img)}>
                  <TiltCard className="p-1.5 glass-card rounded-[2rem] border border-stone-600 group">
                    <div className="relative aspect-[4/5] bg-dark-300 rounded-[1.75rem] overflow-hidden cursor-pointer">
                      <Image 
                        src={img.src} 
                        alt={img.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                      />
                      <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-colors duration-500" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-background via-background/60 to-transparent">
                        <h3 className="text-foreground font-serif text-xl">{img.title}</h3>
                        <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mt-2">View Project</p>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-6xl bg-background/95 backdrop-blur-xl border-stone-600 shadow-2xl p-1 sm:rounded-[2rem] overflow-hidden">
          <div className="sr-only"><DialogTitle>Image Lightbox</DialogTitle></div>
          <AnimatePresence mode="wait">
            {selectedImage && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-full rounded-[1.75rem] overflow-hidden"
              >
                <div className="aspect-[4/3] md:aspect-video relative bg-dark-200">
                  <Image 
                    src={selectedImage.src} 
                    alt={selectedImage.title} 
                    fill 
                    className="object-contain" 
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md p-6 flex justify-between items-center border-t border-stone-600">
                  <h3 className="text-xl font-serif text-foreground">{selectedImage.title}</h3>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-gold-500 uppercase tracking-widest">Mahaveer Marble</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </div>
  )
}
