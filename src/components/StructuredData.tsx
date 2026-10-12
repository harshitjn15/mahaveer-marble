import Script from "next/script"

export function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mahaveer Marble",
    "image": "https://mahaveermarble.com/images/ita-gold.png",
    "@id": "https://mahaveermarble.com",
    "url": "https://mahaveermarble.com",
    "telephone": "+919331709435",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ghosal Para Ln near Anukul Thakur Ashram Nabagram",
      "addressLocality": "Serampore",
      "addressRegion": "West Bengal",
      "postalCode": "712203",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.7569,
      "longitude": 88.3309
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "priceRange": "$$$",
    "sameAs": [
      "https://www.facebook.com/mahaveermarble",
      "https://www.instagram.com/mahaveermarble"
    ]
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  )
}
