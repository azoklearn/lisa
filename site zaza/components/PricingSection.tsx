'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState('individual')

  const pricingPlans = [
    {
      id: 'individual',
      name: 'Commande Individuelle',
      description: 'Parfait pour une dégustation personnelle ou un petit cadeau',
      price: 'À partir de 15€',
      icon: '🍰',
      features: [
        'Pâtisseries à l\'unité',
        'Emballage soigné inclus',
        'Commande 24h à l\'avance',
        'Récupération en boutique',
        'Conseils personnalisés'
      ],
      popular: false
    },
    {
      id: 'family',
      name: 'Plateau Familial',
      description: 'Idéal pour partager en famille ou entre amis',
      price: 'À partir de 45€',
      icon: '👨‍👩‍👧‍👦',
      features: [
        'Plateau de 6-8 portions',
        'Sélection variée incluse',
        'Commande 48h à l\'avance',
        'Livraison possible (15km)',
        'Personnalisation des goûts',
        'Présentation élégante'
      ],
      popular: true
    },
    {
      id: 'event',
      name: 'Événement Spécial',
      description: 'Pour vos occasions exceptionnelles',
      price: 'Sur devis',
      icon: '🎉',
      features: [
        'Créations sur mesure',
        'Service complet',
        'Commande 1 semaine min.',
        'Livraison et installation',
        'Design personnalisé',
        'Support jusqu\'à l\'événement'
      ],
      popular: false
    }
  ]

  const additionalServices = [
    {
      name: 'Livraison Premium',
      description: 'Livraison soignée dans un rayon de 15km',
      price: '8€'
    },
    {
      name: 'Emballage Cadeau',
      description: 'Écrin élégant avec ruban doré',
      price: '5€'
    },
    {
      name: 'Carte Personnalisée',
      description: 'Message manuscrit sur carte artisanale',
      price: '3€'
    },
    {
      name: 'Conservation Optimale',
      description: 'Emballage isotherme pour transport longue distance',
      price: '12€'
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-cream to-warm-cream">
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
            Nos Tarifs
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Des Formules Adaptées à Vos Envies
          </motion.h2>
          <motion.p
            className="text-lg text-soft-brown max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Que ce soit pour vous faire plaisir ou pour une occasion spéciale, 
            nos formules s'adaptent à tous vos besoins avec la même exigence de qualité.
          </motion.p>
        </motion.div>

        {/* Plans de tarification */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-gold scale-105' : 'hover:scale-105'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Badge populaire */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gold to-light-gold text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Le plus populaire
                </div>
              )}

              {/* Icon et titre */}
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-chocolate mb-2">
                  {plan.name}
                </h3>
                <p className="text-soft-brown text-sm">
                  {plan.description}
                </p>
              </div>

              {/* Prix */}
              <div className="text-center mb-8">
                <div className="text-3xl font-bold text-gold font-serif mb-2">
                  {plan.price}
                </div>
              </div>

              {/* Fonctionnalités */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-soft-brown text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Bouton de sélection */}
              <motion.button
                onClick={() => setSelectedPlan(plan.id)}
                className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-gold to-light-gold text-white shadow-lg'
                    : selectedPlan === plan.id
                    ? 'bg-chocolate text-white'
                    : 'bg-gray-100 text-chocolate hover:bg-gold hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {plan.id === 'event' ? 'Demander un Devis' : 'Commander'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Services additionnels */}
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-chocolate mb-4">
              Services Additionnels
            </h3>
            <p className="text-soft-brown">
              Personnalisez votre commande avec nos services premium
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl hover:bg-cream transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-gold mb-2">{service.price}</div>
                <h4 className="font-semibold text-chocolate mb-2">{service.name}</h4>
                <p className="text-sm text-soft-brown">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Informations de commande */}
        <motion.div
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-gold to-light-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">⏰</span>
            </div>
            <h4 className="font-serif font-semibold text-chocolate mb-2">Délais de Commande</h4>
            <p className="text-soft-brown text-sm">
              Commande simple : 24h<br />
              Plateau familial : 48h<br />
              Événement spécial : 1 semaine
            </p>
          </motion.div>

          <motion.div
            className="text-center p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-gold to-light-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">💳</span>
            </div>
            <h4 className="font-serif font-semibold text-chocolate mb-2">Moyens de Paiement</h4>
            <p className="text-soft-brown text-sm">
              Espèces, CB, chèques<br />
              Virement bancaire<br />
              Paiement en ligne sécurisé
            </p>
          </motion.div>

          <motion.div
            className="text-center p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-gold to-light-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">📱</span>
            </div>
            <h4 className="font-serif font-semibold text-chocolate mb-2">Comment Commander</h4>
            <p className="text-soft-brown text-sm">
              Téléphone : 06.XX.XX.XX.XX<br />
              Email : contact@lisa-delices.fr<br />
              Formulaire de contact
            </p>
          </motion.div>
        </motion.div>

        {/* Call to action final */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gold to-light-gold rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Prêt à Commander ?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Contactez-nous dès maintenant pour réserver vos pâtisseries d'exception
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-white text-gold rounded-full font-semibold hover:bg-cream transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Appeler Maintenant
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gold transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ✉️ Envoyer un Message
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
