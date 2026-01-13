import type { Metadata } from 'next'
import { Bitter, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const bitter = Bitter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://foxy-johns.connecteire.ie'),
  title: "Foxy John's | Pub. Hardware. Bicycles. | Dingle, Co. Kerry",
  description: "Pint of Guinness and a box of screws, please. Since 1899, Foxy John's has been serving drinks, selling hardware, and renting bikes on Dingle's Main Street.",
  keywords: "Foxy Johns Dingle, Dingle pub, hardware pub Ireland, bike rental Dingle, Irish pub, Wild Atlantic Way, Dingle Peninsula, Star Wars Dingle",
  authors: [{ name: "Foxy John's" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Foxy John's | Pub. Hardware. Bicycles. Since 1899",
    description: "Ireland's most charming contradiction. A pub where you can buy nails, rent a bike, and catch a trad session all in the same room.",
    type: 'website',
    locale: 'en_IE',
    siteName: "Foxy John's",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "Foxy John's - Pub, Hardware, Bicycles in Dingle" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Foxy John's | Pub. Hardware. Bicycles.",
    description: "Pint of Guinness and a box of screws, please. Since 1899 in Dingle.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://foxy-johns.connecteire.ie',
    name: "Foxy John's",
    alternateName: "Foxy's",
    description: "Historic pub, hardware store, and bicycle rental on Main Street, Dingle since 1899. Famous for The Snug and hosting the Star Wars: The Last Jedi wrap party.",
    url: 'https://foxy-johns.connecteire.ie',
    telephone: '+353669151316',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Main Street, Grove',
      addressLocality: 'Dingle',
      addressRegion: 'Co. Kerry',
      postalCode: 'V92 PD6F',
      addressCountry: 'IE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.1409,
      longitude: -10.2671,
    },
    foundingDate: '1899',
    image: 'https://foxy-johns.connecteire.ie/images/exterior.webp',
    priceRange: '$$',
    servesCuisine: 'Drinks only',
    hasMenu: false,
    sameAs: ['https://www.instagram.com/foxyjohnsdingle/'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '10:30',
        closes: '23:30',
      },
    ],
    additionalType: ['https://schema.org/BarOrPub', 'https://schema.org/Store', 'https://schema.org/LocalBusiness'],
  }

  return (
    <html lang="en" className={`scroll-smooth ${bitter.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased font-body">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
