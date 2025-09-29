'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const CreationsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Toutes', icon: '🍰' },
    { id: 'entremets', name: 'Entremets', icon: '🎂' },
    { id: 'tartes', name: 'Tartes', icon: '🥧' },
    { id: 'chocolats', name: 'Chocolats', icon: '🍫' },
    { id: 'macarons', name: 'Macarons', icon: '🍪' },
  ]

  const creations = [
    {
      id: 1,
      name: 'Tarte au Citron Meringuée',
      description: 'Une tarte classique revisitée avec une pâte sablée croustillante, une crème au citron acidulée et une meringue italienne dorée.',
      price: '32€',
      image: '/images/tartecitron.jpg',
      category: 'tartes',
      features: ['Pâte sablée maison', 'Citrons bio', 'Meringue italienne']
    },
    {
      id: 2,
      name: 'Plateau de Desserts Raffinés',
      description: 'Une sélection de nos meilleures créations miniatures pour une expérience gustative complète.',
      price: '85€',
      image: '/images/plateaudessert.jpg',
      category: 'entremets',
      features: ['6 desserts variés', 'Présentation soignée', 'Pour 4-6 personnes']
    },
    {
      id: 3,
      name: 'Dessert Signature Lisa',
      description: 'Notre création phare : un entremet aux multiples textures avec mousse chocolat, cœur fruits rouges et biscuit amande.',
      price: '45€',
      image: '/images/dessert.jpg',
      category: 'entremets',
      features: ['Recette exclusive', 'Chocolat grand cru', 'Fruits de saison']
    },
    {
      id: 4,
      name: 'Tarte aux Fruits Rouges',
      description: 'Une explosion de saveurs estivales avec une crème pâtissière vanille bourbon et des fruits rouges de saison.',
      price: '38€',
      image: '/images/fruitrouge.jpg',
      category: 'tartes',
      features: ['Fruits de saison', 'Crème vanille bourbon', 'Pâte sucrée']
    },
    {
      id: 5,
      name: 'Meringue aux Perles Dorées',
      description: 'Une meringue aérienne garnie de crème chantilly et décorée de perles croustillantes dorées.',
      price: '28€',
      image: '/images/meringue.jpg',
      category: 'entremets',
      features: ['Meringue française', 'Chantilly maison', 'Décoration artistique']
    },
    {
      id: 6,
      name: 'Macarons Assortiment Prestige',
      description: 'Une sélection de 12 macarons aux saveurs raffinées : rose, chocolat, passion, pistachio, caramel beurre salé.',
      price: '24€',
      image: '/images/plateaudessert.jpg', // Utilisera une partie de l'image pour les macarons
      category: 'macarons',
      features: ['12 macarons', 'Coques parfaites', 'Ganaches artisanales']
    },
  ]

  const filteredCreations = activeCategory === 'all' 
    ? creations 
    : creations.filter(creation => creation.category === activeCategory)

  return (
    <section id="creations" className="section-padding bg-warm-cream">
      <div className="container-custom">
        {/* En-tête de section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-gold font-script text-2xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nos Créations
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Un Voyage Gourmand Unique
          </motion.h2>
          <motion.p
            className="text-lg text-soft-brown max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Découvrez notre collection de pâtisseries artisanales, chacune conçue pour éveiller vos sens 
            et créer des moments d'exception. Chaque création est unique et préparée à la commande.
          </motion.p>
        </motion.div>

        {/* Filtres par catégorie */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-gold to-light-gold text-white shadow-lg'
                  : 'bg-white text-chocolate hover:bg-gold/10 hover:shadow-md'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Grille des créations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredCreations.map((creation, index) => (
              <motion.div
                key={creation.id}
                className="product-card group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
                whileHover={{ y: -10 }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={creation.image}
                    alt={creation.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Prix en overlay */}
                  <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full font-semibold text-sm">
                    {creation.price}
                  </div>

                  {/* Bouton d'action en overlay */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full bg-white text-chocolate py-2 rounded-full font-medium hover:bg-gold hover:text-white transition-colors duration-300">
                      Commander
                    </button>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-chocolate mb-2 group-hover:text-gold transition-colors duration-300">
                    {creation.name}
                  </h3>
                  
                  <p className="text-soft-brown text-sm leading-relaxed mb-4">
                    {creation.description}
                  </p>

                  {/* Caractéristiques */}
                  <div className="space-y-2">
                    {creation.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-soft-brown">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Footer de la carte */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-warm-beige">
                    <div className="text-lg font-bold text-chocolate">
                      {creation.price}
                    </div>
                    <motion.button
                      className="text-gold hover:text-chocolate transition-colors duration-300 flex items-center space-x-1 text-sm font-medium"
                      whileHover={{ x: 5 }}
                    >
                      <span>Voir plus</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-12 elegant-shadow max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-chocolate mb-4">
              Une Création Personnalisée ?
            </h3>
            <p className="text-soft-brown mb-8 leading-relaxed">
              Vous avez une occasion spéciale ou une envie particulière ? 
              Je conçois des créations sur mesure pour rendre vos moments uniques et mémorables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Demander un Devis
              </motion.button>
              <motion.button
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir le Menu Complet
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CreationsSection
