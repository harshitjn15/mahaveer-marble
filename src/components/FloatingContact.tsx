"use client"

import { PhoneCall, MessageCircle, MapPin } from "lucide-react"

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* Map Button */}
      <a 
        href="https://www.google.com/maps/place/?q=place_id:ChIJDbeM1SqF-DkRt3xnyVNL7m8" 
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-dark-200 border border-white/10 text-gray-300 hover:text-white hover:bg-dark-300 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        aria-label="Google Maps Location"
      >
        <MapPin className="w-5 h-5" />
        <span className="absolute right-14 bg-dark-200 text-xs px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Location
        </span>
      </a>

      {/* Call Button */}
      <a 
        href="tel:+919331709435" 
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-dark-200 border border-white/10 text-gray-300 hover:text-gold-500 hover:border-gold-500/50 hover:bg-dark-300 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        aria-label="Call Us"
      >
        <PhoneCall className="w-5 h-5" />
        <span className="absolute right-14 bg-dark-200 text-xs px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Us
        </span>
      </a>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/+919331709435?text=Hi+there!+I+am+interested+in+your+premium+marble+and+granite." 
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-16 bg-[#25D366] text-white text-xs font-medium px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none pointer-events-none">
          Message us on WhatsApp
        </span>
      </a>
    </div>
  )
}
