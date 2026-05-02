import Footer from '@/components/Footer'
import './globals.css'
import ContactButton from '@/components/ContactBtn'
import BackToTop from '@/components/BackBtn'
import Script from 'next/script'

// 1. Enhanced Metadata for SEO
export const metadata = {
  metadataBase: new URL('https://gotripcabs.in'), // Replace with your actual domain
  title: {
    default: 'Go Trip Cabs | Airport Taxi & Outstation Cabs Bangalore',
    template: '%s | Go Trip Cabs Bangalore'
  },
  description: 'Book reliable airport taxi, outstation cabs, and local rentals in Bangalore. Affordable tour packages to Coorg, Mysore, Ooty & more. Safe & professional drivers.',
  keywords: ['Airport Taxi Bangalore', 'Outstation Cabs Bangalore', 'Bangalore Tour Packages', 'Tempo Traveller Rental Bangalore', 'Go Trip Cabs'],
  authors: [{ name: 'Go Trip Cabs' }],
  creator: 'Go Trip Cabs',
  publisher: 'Go Trip Cabs',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'Go Trip Cabs - Bangalore’s Most Reliable Taxi Service',
    description: 'Safe, affordable, and punctual cab services in Bangalore for local and outstation travel.',
    url: 'https://gotripcabs.in',
    siteName: 'Go Trip Cabs',
    images: [
      {
        url: '/banners/go-trip-cab.png', // Ensure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: 'Go Trip Cabs Bangalore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  
  // 2. Structured Data (JSON-LD) for Local Business
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    'name': 'Go Trip Cabs',
    'image': 'https://gotripcabs.in/logo.png',
    '@id': 'https://gotripcabs.in',
    'url': 'https://gotripcabs.in',
    'telephone': '+919886673753',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '#20, Sarjapur Main Rd',
      'addressLocality': 'Bangalore',
      'postalCode': '560035',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 12.9155, // Approximate for Sarjapur Rd
      'longitude': 77.6745
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
      ],
      'opens': '00:00',
      'closes': '23:59'
    },
    'priceRange': '₹₹'
  }

  return (
    <html lang="en">
      <head>
        {/* Error handling script provided in your original layout */}
        <script 
          dangerouslySetInnerHTML={{
            __html: 'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'
          }} 
        />
        
        {/* Inject Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased bg-white">
        {children}
        <Footer />
        <BackToTop />
        <ContactButton />
      </body>
    </html>
  )
}