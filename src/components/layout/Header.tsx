"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import { GetQuoteModal } from "@/components/GetQuoteModal"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "glass-premium py-4 shadow-2xl" 
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Logo 
            showSubtitle={!isScrolled} 
            className={cn("transition-all duration-500 transform origin-left", isScrolled ? "scale-90" : "scale-110")} 
        />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredPath(link.href)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className="text-[11px] font-black text-foreground/50 hover:text-gold-500 transition-all uppercase tracking-[0.4em] relative py-2"
                >
                  <span className="relative z-10">{link.name}</span>
                  {(hoveredPath === link.href || isActive) && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-500 z-10 shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 35
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </div>
          
          <div className="flex items-center gap-8 pl-8 border-l border-stone-600">
            <ThemeToggle />
            <GetQuoteModal>
              <Button 
                variant={isScrolled ? "default" : "glass"} 
                className="px-10 h-12 rounded-2xl shadow-2xl shadow-gold-500/10 hover:shadow-gold-500/30 transition-all font-black text-xs uppercase tracking-widest"
              >
                Inquire
              </Button>
            </GetQuoteModal>
          </div>
        </nav>

        {/* Mobile Mini-CTA & Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <AnimatePresence>
            {isScrolled && (
              <motion.a
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                href="https://wa.me/919331709435"
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gold-500 text-white shadow-lg shadow-gold-500/30 relative z-[110]"
                aria-label="Contact on WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </motion.a>
            )}
          </AnimatePresence>
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-dark-200/50 dark:bg-dark-300 border border-stone-600 relative z-[110]"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span 
                animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 9 : 0 }}
                className="w-full h-[2px] bg-foreground origin-center" 
              />
              <motion.span 
                animate={{ opacity: mobileMenuOpen ? 0 : 1, x: mobileMenuOpen ? 10 : 0 }}
                className="w-full h-[2px] bg-foreground" 
              />
              <motion.span 
                animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -9 : 0 }}
                className="w-full h-[2px] bg-foreground origin-center" 
              />
            </div>
          </button>
        </div>
      </div>

      {/* Cinematic Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background lg:hidden h-[100vh] overflow-hidden"
          >
            <div className="absolute inset-0 marble-texture opacity-5 pointer-events-none" />
            <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
            
            <div className="flex flex-col h-full container mx-auto px-10 pt-40 pb-20 justify-between">
               <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-6xl font-serif text-foreground hover:text-gold-500 transition-colors flex items-center gap-4 group"
                    >
                        <span className="text-sm font-sans font-black text-gold-500/30 group-hover:text-gold-500 transition-colors">0{i+1}</span>
                        {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-col gap-10"
              >
                <div className="flex flex-wrap gap-x-12 gap-y-4">
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gold-500">Contact</p>
                    <a href="tel:+919331709435" className="text-xl font-light text-foreground/70">+91 93317 09435</a>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gold-500">Email</p>
                    <a href="mailto:info@mahaveermarble.com" className="text-xl font-light text-foreground/70">hi@mahaveer.com</a>
                  </div>
                </div>
                
                <GetQuoteModal>
                  <Button className="h-20 w-full text-2xl font-serif rounded-[2rem] shadow-2xl shadow-gold-500/20">
                     Start Your Project
                  </Button>
                </GetQuoteModal>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
