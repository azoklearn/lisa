'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Colonne texte */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Titre de section */}
            <div className="text-center lg:text-left">
              <motion.p
                className="text-gold font-script text-2xl mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Mon Histoire
              </motion.p>
              <motion.h2
                className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                La Passion de la Pâtisserie
              </motion.h2>
            </div>

            {/* Histoire personnelle */}
            <motion.div
              className="space-y-6 text-soft-brown leading-relaxed"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-lg">
                <span className="font-script text-2xl text-gold">B</span>onjour, je suis Lisa, 
                pâtissière passionnée depuis plus de 15 ans. Mon aventure culinaire a commencé 
                dans la cuisine familiale, où j'ai découvert la magie des saveurs et textures 
                qui se transforment sous mes doigts.
              </p>
              
              <p className="text-lg">
                Formée dans les meilleures écoles de pâtisserie françaises et enrichie par 
                mes expériences dans des établissements prestigieux, j'ai développé ma propre 
                signature : l'alliance parfaite entre tradition artisanale et créativité moderne.
              </p>
              
              <p className="text-lg">
                Chaque création que je confectionne est une œuvre d'art comestible, pensée pour 
                émerveiller vos papilles et créer des souvenirs inoubliables. Ma philosophie ? 
                Utiliser uniquement des ingrédients d'exception, respecter les techniques ancestrales 
                tout en apportant une touche d'innovation.
              </p>
            </motion.div>

            {/* Statistiques */}
            <motion.div
              className="grid grid-cols-3 gap-8 py-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gold font-serif">15+</div>
                <div className="text-sm text-soft-brown">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold font-serif">500+</div>
                <div className="text-sm text-soft-brown">Créations uniques</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold font-serif">100%</div>
                <div className="text-sm text-soft-brown">Fait maison</div>
              </div>
            </motion.div>

            {/* Valeurs */}
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gold to-light-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🌟</span>
                </div>
                <div>
                  <h4 className="font-semibold text-chocolate mb-2">Excellence</h4>
                  <p className="text-soft-brown text-sm">Chaque détail compte pour atteindre la perfection</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gold to-light-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🌱</span>
                </div>
                <div>
                  <h4 className="font-semibold text-chocolate mb-2">Naturel</h4>
                  <p className="text-soft-brown text-sm">Ingrédients sélectionnés avec soin et respect</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gold to-light-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">❤️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-chocolate mb-2">Passion</h4>
                  <p className="text-soft-brown text-sm">L'amour du métier dans chaque bouchée</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gold to-light-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">✨</span>
                </div>
                <div>
                  <h4 className="font-semibold text-chocolate mb-2">Innovation</h4>
                  <p className="text-soft-brown text-sm">Créativité constante pour vous surprendre</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Colonne image */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Image principale - remplacez par une vraie photo de Lisa */}
            <motion.div
              className="relative rounded-3xl overflow-hidden elegant-shadow"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/meringue.jpg" // À remplacer par une photo de Lisa en train de pâtisser
                alt="Lisa en train de créer ses pâtisseries"
                width={600}
                height={400}
                className="object-cover w-full h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>

            {/* Grille de petites images */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden elegant-shadow"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/fruitrouge.jpg"
                  alt="Détail d'une création"
                  width={300}
                  height={200}
                  className="object-cover w-full h-48"
                />
              </motion.div>
              <motion.div
                className="relative rounded-2xl overflow-hidden elegant-shadow"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/tartecitron.jpg"
                  alt="Processus de création"
                  width={300}
                  height={200}
                  className="object-cover w-full h-48"
                />
              </motion.div>
            </motion.div>

            {/* Citation inspirante */}
            <motion.div
              className="bg-white rounded-2xl p-8 elegant-shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-gold text-4xl font-script mb-4">"</div>
              <p className="text-soft-brown italic text-lg leading-relaxed">
                La pâtisserie n'est pas seulement un art culinaire, 
                c'est une manière de transmettre des émotions et 
                de créer du bonheur à chaque bouchée.
              </p>
              <div className="flex items-center justify-between mt-6">
                <div>
                  <p className="font-semibold text-chocolate">Lisa</p>
                  <p className="text-sm text-soft-brown">Pâtissière & Créatrice</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-gold to-light-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-script text-xl">L</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
