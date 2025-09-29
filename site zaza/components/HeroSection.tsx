'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroSectionProps {
  scrollY: number
}

const HeroSection = ({ scrollY }: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const heroImages = [
    {
      src: '/images/plateaudessert.jpg',
      alt: 'Plateau de desserts artisanaux raffinés',
      title: 'L\'Art de la Pâtisserie Artisanale'
    },
    {
      src: '/images/tartecitron.jpg',
      alt: 'Tarte au citron meringuée',
      title: 'Des Créations Uniques & Savoureuses'
    },
    {
      src: '/images/dessert.jpg',
      alt: 'Dessert signature élégant',
      title: 'Une Expérience Gustative Inoubliable'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  const scrollToCreations = () => {
    document.querySelector('#creations')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Images en arrière-plan avec transition */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1.05 : 1 
            }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover"
              style={{
                transform: `translateY(${scrollY * 0.5}px)`,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10"></div>

      {/* Contenu principal */}
      <div className="relative z-20 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Titre principal avec animation */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <span className="block text-gradient-gold">Lisa Délices</span>
            <motion.span
              className="block text-3xl md:text-4xl lg:text-5xl mt-4 font-script font-normal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              {heroImages[currentImageIndex].title}
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl mb-12 text-gray-200 font-light leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Découvrez un univers gourmand où chaque création raconte une histoire. 
            Des pâtisseries d'exception, façonnées avec passion et savoir-faire artisanal, 
            pour éveiller vos sens et créer des moments inoubliables.
          </motion.p>

          {/* Boutons d'action */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <motion.button
              onClick={scrollToContact}
              className="px-10 py-5 bg-gradient-to-r from-gold to-light-gold text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-gold-glow transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Commander Maintenant
              <span className="ml-2">✨</span>
            </motion.button>
            
            <motion.button
              onClick={scrollToCreations}
              className="px-10 py-5 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-chocolate transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Découvrir le Menu
            </motion.button>
          </motion.div>

          {/* Indicateurs d'images */}
          <motion.div
            className="flex justify-center space-x-3 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.2 }}
          >
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-gold scale-125' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Flèche de scroll animée */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <motion.div
          className="w-8 h-12 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <p className="text-white text-sm mt-2 font-light">Découvrir</p>
      </motion.div>

      {/* Particules flottantes décoratives */}
      <div className="absolute inset-0 z-15">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
