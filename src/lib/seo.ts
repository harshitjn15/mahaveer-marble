import { Metadata } from "next"

interface SEOProps {
  title?: string
  description?: string
  image?: string
  canonical?: string
  type?: "website" | "article"
}

export const siteConfig = {
  name: "Mahaveer Marble",
  description: "Mahaveer Marble - Pioneers in premium marble, granite, and stone solutions since 1988. Pure luxury from Rajasthan.",
  url: "https://mahaveermarble.com",
  ogImage: "/og-image.png",
  links: {
    whatsapp: "https://wa.me/919331709435",
  },
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  canonical = siteConfig.url,
  type = "website",
}: SEOProps = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@mahaveermarble",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonical,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}
