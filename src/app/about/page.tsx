"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { ImageReveal } from "@/components/ui/ImageReveal"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-dark-200/30 dark:bg-dark-200/10 border-b border-stone-600 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-gold-500 uppercase tracking-[0.4em] text-xs font-black mb-4 block">Our Story</span>
          <h1 className="text-4xl md:text-7xl font-serif text-foreground mb-6 transition-all duration-700">The Heritage of <span className="text-gold-500 italic">Mahaveer</span></h1>
          <p className="text-foreground/60 text-lg leading-relaxed font-light">
            We are pioneers in the marble space in India, curating the finest stones that blend nature's raw beauty with architectural precision.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            {/* Image Reveal */}
            <div className="relative aspect-[4/5] lg:aspect-square">
                <ImageReveal className="h-full w-full" direction="right">
                    <div className="relative h-full w-full rounded-[3.5rem] overflow-hidden glass-card p-4 border border-stone-600 shadow-2xl">
                        <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden">
                            <Image 
                                src="/images/ita-gold.png" 
                                alt="Showroom display" 
                                fill 
                                className="object-cover transition-transform duration-1000" 
                            />
                            <div className="absolute inset-0 bg-gold-500/5 mix-blend-overlay" />
                        </div>
                    </div>
                </ImageReveal>
            </div>

            {/* Text Content */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-serif text-foreground leading-[1.1]">Our Legacy of <br />Elite <span className="text-gold-500">Craftsmanship</span></h2>
                <div className="w-32 h-1 bg-gradient-to-r from-gold-500 to-transparent rounded-full" />
              </div>
              
              <div className="space-y-8 text-foreground/70 text-xl font-light leading-relaxed">
                <p>
                  Drawing its inspiration from Rajasthan's majestic quarries, each block is hand-selected by our master graders to ensure unparalleled quality and aesthetic consistency.
                </p>
                <p>
                  At Mahaveer Marble, luxury is not just a style—it's a philosophy. We source exclusively from the world's most prestigious quarries, bringing the timeless elegance of Italian Statuario and Indian Makrana to your spaces.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gold-500">Why Choose Us</h3>
                  <ul className="space-y-5">
                    {[
                      "Unmatched Quality Grading",
                      "Exclusive Quarry Access",
                      "Custom Block Cutting",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-foreground/80 group">
                        <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6 sm:mt-11">
                  <ul className="space-y-5">
                    {[
                      "Architectural Consultation",
                      "Direct Factory Logistics",
                      "24/7 Expert Support"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-foreground/80 group">
                        <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
