"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThreeDHero } from "@/components/ThreeDHero"
import { GetQuoteModal } from "@/components/GetQuoteModal"
import { Magnetic } from "@/components/ui/Magnetic"
import { ImageReveal } from "@/components/ui/ImageReveal"

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Parallax transforms for segments
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100])
  const revealScale = useTransform(scrollYProgress, [0, 0.1], [0.95, 1])

  return (
    <div ref={containerRef} className="relative flex flex-col min-h-screen overflow-x-hidden">
      
      {/* Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden hero-gradient">
        <motion.div style={{ y: heroY, scale: revealScale }} className="absolute inset-0 z-0">
          <ThreeDHero />
        </motion.div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="inline-block text-gold-400 font-bold uppercase tracking-[0.4em] text-xs mb-6"
            >
              Since 1988 • Pure Luxury
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-8xl font-serif text-foreground leading-[1.1] mb-8"
            >
              Premium Marble <br />
              <span className="text-gold-500 italic">Redefining Elegance</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.6 }}
              className="text-foreground/60 text-lg md:text-2xl max-w-2xl font-light leading-relaxed mb-12"
            >
              Elegant Marble. Timeless Designs. Premium Quality. <br className="hidden md:block" />
              Directly from Rajasthan's finest quarries to your master spaces.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Magnetic>
                <Link href="/products">
                  <Button size="lg" className="h-16 px-10 text-lg rounded-2xl shadow-2xl shadow-gold-500/20 group">
                    Explore Collection <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Magnetic>
              <Magnetic strength={0.25}>
                <GetQuoteModal>
                  <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-2xl border-white/10 hover:border-gold-500/30">
                    Get Free Quote
                  </Button>
                </GetQuoteModal>
              </Magnetic>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-bold font-sans">Scroll to Explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold-500 to-transparent" />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-[3rem] overflow-hidden"
            >
              <ImageReveal className="h-full w-full" direction="right">
                <div className="relative h-full w-full glass-card p-4 border border-stone-600">
                  <Image 
                    src="/images/ita-gold.png" 
                    alt="Marble Texture" 
                    fill 
                    className="object-cover rounded-[2.5rem]" 
                  />
                  <div className="absolute inset-0 bg-gold-500/5 mix-blend-overlay" />
                </div>
              </ImageReveal>
            </motion.div>
            
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Legacy</span>
                <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-8">Pioneers of <span className="text-gold-500">Fine Stone</span></h2>
                <p className="text-foreground/60 text-lg leading-relaxed max-w-xl font-light">
                  With over three decades of excellence, Mahaveer Marble represents the pinnacle of craftsmanship. We don't just supply stone; we curate stories written in the veins of nature's most beautiful creations.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "Founded", val: "1988" },
                  { label: "Exp. (Years)", val: "30+" },
                  { label: "Varieties", val: "200+" },
                  { label: "Projects", val: "5k+" },
                ].map((stat, i) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-dark-200/50 dark:bg-dark-300 border border-stone-600 group hover:border-gold-500/30 transition-colors"
                  >
                    <p className="text-3xl font-serif text-gold-500 mb-1">{stat.val}</p>
                    <p className="text-xs uppercase tracking-widest text-foreground/40 font-bold">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-32 bg-dark-200/30 dark:bg-dark-200/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-6">Master <span className="text-gold-500">Collections</span></h2>
            <p className="text-foreground/60 text-lg font-light">Hand-selected marble and granite from the most prestigious quarries globally.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Italian Marble", tag: "Exotic", img: "/images/ita-gold.png" },
              { name: "Premium Granite", tag: "Solid", img: "/images/sparkle-black.png" },
              { name: "Onyx Collection", tag: "Rare", img: "/images/ita-gold.png" },
            ].map((item, i) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group relative h-[600px] rounded-[3rem] overflow-hidden cursor-pointer p-2 border border-stone-600 shadow-2xl bg-background/50 backdrop-blur-sm"
              >
                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden">
                  <Image 
                    src={item.img} 
                    alt={item.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-10 left-10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-500 mb-4 block group-hover:tracking-[0.6em] transition-all duration-500">{item.tag}</span>
                    <h3 className="text-3xl font-serif text-foreground">{item.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-32 bg-background relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 md:px-8"
        >
          <div className="rounded-[4rem] p-12 md:p-24 border border-gold-500/20 text-center relative overflow-hidden glass-card">
            <div className="absolute inset-0 mesh-gradient opacity-20" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-10">
              <h2 className="text-4xl md:text-7xl font-serif text-foreground leading-tight">Elevate Your Space with <span className="text-gold-500 italic">Pure Lux</span></h2>
              <p className="text-foreground/60 text-xl font-light">Transform your interiors into a statement of timeless elegance. Consult with our stone experts today.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Magnetic>
                  <GetQuoteModal>
                    <Button size="lg" className="h-16 px-12 text-lg rounded-2xl shadow-2xl shadow-gold-500/30">Get Free Consultation</Button>
                  </GetQuoteModal>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <Button variant="outline" size="lg" className="h-16 px-12 text-lg rounded-2xl border-stone-600 hover:border-gold-500/50" asChild>
                    <a href="https://wa.me/919331709435" target="_blank">Chat on WhatsApp</a>
                  </Button>
                </Magnetic>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
