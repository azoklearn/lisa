import type { Metadata } from 'next'
import { Playfair_Display, Poppins, Dancing_Script } from 'next/font/google'
import './globals.css'

// Configuration des polices Google
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lisa Délices | Pâtisserie Artisanale Haut de Gamme',
  description: 'Découvrez l\'univers gourmand de Lisa Délices, pâtissière indépendante spécialisée dans les créations artisanales haut de gamme. Entremets, tartes, chocolats et bien plus encore.',
  keywords: 'pâtisserie, artisanale, haut de gamme, Lisa Délices, entremets, tartes, chocolats, desserts, gâteaux, commande',
  authors: [{ name: 'Lisa Délices' }],
  creator: 'Lisa Délices',
  publisher: 'Lisa Délices',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lisa-delices.vercel.app'), // À remplacer par votre domaine
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lisa Délices | Pâtisserie Artisanale Haut de Gamme',
    description: 'Découvrez l\'univers gourmand de Lisa Délices, pâtissière indépendante spécialisée dans les créations artisanales haut de gamme.',
    url: 'https://lisa-delices.vercel.app',
    siteName: 'Lisa Délices',
    images: [
      {
        url: '/images/plateaudessert.jpg',
        width: 1200,
        height: 630,
        alt: 'Plateau de desserts artisanaux Lisa Délices',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lisa Délices | Pâtisserie Artisanale Haut de Gamme',
    description: 'Découvrez l\'univers gourmand de Lisa Délices, pâtissière indépendante spécialisée dans les créations artisanales haut de gamme.',
    images: ['/images/plateaudessert.jpg'],
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
  verification: {
    google: 'votre-code-google-search-console', // À remplacer par votre code
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={`${playfair.variable} ${poppins.variable} ${dancingScript.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#D4AF37" />
        <meta name="msapplication-TileColor" content="#D4AF37" />
        
        {/* JSON-LD pour le SEO local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              "name": "Lisa Délices",
              "description": "Pâtisserie artisanale haut de gamme",
              "url": "https://lisa-delices.vercel.app",
              "telephone": "+33-X-XX-XX-XX-XX", // À remplacer par le vrai numéro
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Votre Adresse", // À remplacer
                "addressLocality": "Votre Ville", // À remplacer
                "postalCode": "Code Postal", // À remplacer
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 0.0, // À remplacer par les vraies coordonnées
                "longitude": 0.0
              },
              "openingHours": [
                "Mo-Sa 09:00-19:00"
              ],
              "priceRange": "€€€",
              "servesCuisine": "Pâtisserie française",
              "founder": "Lisa",
              "image": "https://lisa-delices.vercel.app/images/plateaudessert.jpg",
              "sameAs": [
                "https://www.instagram.com/lisa_delices", // À remplacer par les vraies URLs
                "https://www.facebook.com/lisa.delices"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-cream">
          {children}
        </div>
        
        {/* Script pour les animations au scroll */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Animation au scroll
              const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
              };
              
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                  }
                });
              }, observerOptions);
              
              // Observer tous les éléments avec la classe animate-on-scroll
              document.addEventListener('DOMContentLoaded', () => {
                const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
                elementsToAnimate.forEach(el => observer.observe(el));
              });
            `
          }}
        />
      </body>
    </html>
  )
}
