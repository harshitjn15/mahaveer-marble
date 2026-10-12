"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required").optional().or(z.literal("")),
  phone: z.string().min(10, "Valid phone number is required"),
  message: z.string().min(10, "Please provide more details"),
})

type ContactFormValues = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      reset()
    }, 5000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 bg-dark-200/30 dark:bg-dark-200/10 border-b border-stone-600 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Get in Touch</span>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6">Let's <span className="text-gold-500">Connect</span></h1>
          <p className="text-foreground/60 text-lg">
            Ready to elevate your space? Contact us today for quotes, consultations, or any inquiries regarding our premium stone collections.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background flex-1 relative">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Details & Map */}
            <div className="space-y-12">
              <div className="glass-card p-10 rounded-[2.5rem] border border-stone-600 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 marble-texture opacity-5 pointer-events-none" />
                <h3 className="text-3xl font-serif text-foreground mb-10 relative z-10">Contact Information</h3>
                <ul className="space-y-8 relative z-10">
                  <li className="flex items-start gap-5 text-foreground/80">
                    <div className="w-12 h-12 mt-1 shrink-0 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/20">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-foreground mb-2">Our Showroom</p>
                      <p className="text-foreground/60 text-base leading-relaxed">
                        Ghosal Para Ln near Anukul Thakur Ashram Nabagram,<br />
                        Serampore West Bengal 712203
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-5 text-foreground/80">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/20">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-foreground mb-2">Phone / WhatsApp</p>
                      <a href="tel:+919331709435" className="text-foreground/60 text-base hover:text-gold-500 transition-colors font-medium">+91 9331709435</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-5 text-foreground/80">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/20">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-foreground mb-2">Email Address</p>
                      <a href="mailto:info@mahaveermarble.com" className="text-foreground/60 text-base hover:text-gold-500 transition-colors font-medium">info@mahaveermarble.com</a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map Embed */}
              <div className="h-[400px] rounded-[2.5rem] overflow-hidden glass-card p-2 border border-stone-600 shadow-2xl relative transition-all duration-700 group">
                <div className="absolute inset-0 bg-gold-500/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14723.953579899388!2d88.33088715!3d22.75691165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8992ad58c370d%3A0x6f2b4b53c9677cb7!2sAnukul%20Thakur%20Ashram!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: "2rem" }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mahaveer Marble Location"
                  className="dark:invert dark:grayscale dark:contrast-[0.8]"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-10 lg:p-16 rounded-[3rem] border border-stone-600/80 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 mesh-gradient opacity-10" />
              <div className="relative z-10">
                <h3 className="text-3xl font-serif text-foreground mb-3">Send an Inquiry</h3>
                <p className="text-foreground/60 mb-12 text-lg">Fill out the form below and we'll get back to you shortly.</p>
                
                {isSuccess ? (
                   <div className="py-20 flex flex-col items-center justify-center text-center space-y-6">
                    <div className="w-24 h-24 rounded-full bg-gold-500/20 flex items-center justify-center border border-gold-500/30">
                      <span className="text-gold-500 text-5xl">✓</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-serif text-foreground">Message Sent!</h3>
                      <p className="text-foreground/60 text-lg">Thank you for reaching out. Our team will contact you soon.</p>
                    </div>
                    <Button variant="outline" onClick={() => setIsSuccess(false)} className="mt-4">Send Another Message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-base font-bold text-foreground/80">Full Name *</Label>
                      <Input id="name" placeholder="John Doe" className="h-14 text-base px-6 rounded-2xl bg-background/50" {...register("name")} error={errors.name?.message} />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-base font-bold text-foreground/80">Phone / WhatsApp *</Label>
                        <Input id="phone" type="tel" placeholder="+91 9876543210" className="h-14 text-base px-6 rounded-2xl bg-background/50" {...register("phone")} error={errors.phone?.message} />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-base font-bold text-foreground/80">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" className="h-14 text-base px-6 rounded-2xl bg-background/50" {...register("email")} error={errors.email?.message} />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-base font-bold text-foreground/80">Your Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="I'm looking for Italian marble for my new home..." 
                        className="min-h-[180px] text-base px-6 py-4 rounded-2xl bg-background/50"
                        {...register("message")} 
                        error={errors.message?.message} 
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full h-16 text-lg rounded-2xl shadow-xl shadow-gold-500/20" disabled={isSubmitting}>
                      {isSubmitting ? "Sending Message..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
