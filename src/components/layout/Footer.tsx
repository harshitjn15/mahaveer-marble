import Link from "next/link"
import { MapPin, Phone, Mail, Star } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { Magnetic } from "@/components/ui/Magnetic"

export function Footer() {
  return (
    <footer className="bg-dark-200/50 dark:bg-dark-200/20 pt-20 pb-10 relative overflow-hidden ring-1 ring-border">
      <div className="absolute inset-0 marble-texture opacity-5 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Logo />
            <p className="text-foreground/60 text-sm leading-relaxed max-w-xs">
              Bringing nature's finest marble, granite, and tiles to your doorstep. Quality and luxury redefined for your spaces.
            </p>
            
            <div className="flex gap-4">
              {['FB', 'IG', 'IN'].map((social) => (
                <Magnetic key={social} strength={0.4}>
                  <a key={social} href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-foreground/60 hover:text-gold-500 hover:border-gold-500/50 transition-all duration-300 text-xs font-bold border border-stone-600">
                    {social}
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif text-foreground">Explore</h4>
            <ul className="space-y-4">
              {[
                { name: "Our Products", href: "/products" },
                { name: "Services", href: "/services" },
                { name: "Project Gallery", href: "/gallery" },
                { name: "About Us", href: "/about" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-foreground/60 hover:text-gold-500 transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif text-foreground">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground/60 text-sm group">
                <MapPin size={18} className="shrink-0 text-gold-500" />
                <span>Ghosal Para Ln near Anukul Thakur Ashram Nabagram, Serampore West Bengal 712203</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/60 text-sm group">
                <Phone size={18} className="shrink-0 text-gold-500" />
                <a href="tel:+919331709435" className="hover:text-gold-500 transition-colors">+91 9331709435</a>
              </li>
              <li className="flex items-center gap-3 text-foreground/60 text-sm group">
                <Mail size={18} className="shrink-0 text-gold-500" />
                <a href="mailto:info@mahaveermarble.com" className="hover:text-gold-500 transition-colors">info@mahaveermarble.com</a>
              </li>
            </ul>
          </div>

          {/* Reviews */}
          <div className="space-y-6">
             <h4 className="text-lg font-serif text-foreground">Trust</h4>
             <a 
              href="https://www.google.com/search?q=Mahaveer+Marble+Serampore" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col gap-4 p-6 glass-card rounded-2xl border border-stone-600 hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="flex text-gold-500 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <div>
                <p className="text-foreground font-bold text-sm">4.9 Star Rating</p>
                <p className="text-foreground/50 text-xs">Based on Google Reviews</p>
              </div>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/40 font-medium">
            &copy; {new Date().getFullYear()} Mahaveer Marble. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-foreground/40 font-medium">
            <Link href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
