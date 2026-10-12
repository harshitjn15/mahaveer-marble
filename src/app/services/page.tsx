"use client"

import { Layers, Pickaxe, Truck, Hammer, ShieldCheck, Ruler } from "lucide-react"
import { SectionReveal } from "@/components/ui/SectionReveal"

const SERVICES = [
  { title: "Flooring Installation", desc: "Expert marble and granite flooring installation ensuring a seamless, mirror-like finish.", icon: Layers },
  { title: "Wall Cladding & Tiles", desc: "Premium wall tiles and stone cladding to add vertical elegance to your interiors and exteriors.", icon: Ruler },
  { title: "Marble Slabs Supply", desc: "Wholesale and retail supply of over 50 varieties of high-quality marble and granite slabs.", icon: ShieldCheck },
  { title: "Custom Cut-to-Size", desc: "Precision cutting machines to tailor stones exactly to your project's architectural requirements.", icon: Pickaxe },
  { title: "Marble Polishing", desc: "Advanced diamond polishing services to bring old marble back to life with a radiant gloss.", icon: Hammer },
  { title: "Safe Delivery", desc: "Secure and timely transportation of heavy stone materials directly to your project site.", icon: Truck },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 bg-dark-200/30 dark:bg-dark-200/10 border-b border-stone-600 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-gold-500 uppercase tracking-[0.4em] text-xs font-black mb-4 block">Expert Solutions</span>
          <h1 className="text-4xl md:text-7xl font-serif text-foreground mb-6 transition-all duration-700">Our <span className="text-gold-500 italic">Services</span></h1>
          <p className="text-foreground/60 text-lg leading-relaxed font-light">
            Beyond supplying premium stone, we offer end-to-end solutions to ensure your vision is executed flawlessly with master craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background flex-1 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, idx) => {
              const Icon = service.icon
              return (
                <SectionReveal 
                  key={idx} 
                  delay={idx * 0.1}
                  className="glass-card p-10 rounded-[2rem] border border-stone-600 hover:border-gold-500/30 transition-all duration-500 group relative overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="absolute inset-0 marble-texture opacity-5 pointer-events-none" />
                  <div className="w-16 h-16 rounded-2xl bg-dark-200/50 dark:bg-dark-300 flex items-center justify-center mb-8 group-hover:bg-gold-500 group-hover:text-white transition-all duration-500 shadow-inner">
                    <Icon className="w-8 h-8 text-gold-500 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl font-serif text-foreground mb-4 group-hover:text-gold-500 transition-colors duration-300">{service.title}</h3>
                  <p className="text-foreground/60 leading-relaxed text-base font-light">{service.desc}</p>
                </SectionReveal>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
