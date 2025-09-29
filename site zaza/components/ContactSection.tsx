'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    message: '',
    preferred_contact: 'email',
    budget: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const occasions = [
    'Plaisir personnel',
    'Anniversaire',
    'Mariage',
    'Baptême/Communion',
    'Événement d\'entreprise',
    'Autre occasion spéciale'
  ]

  const budgetRanges = [
    'Moins de 50€',
    '50€ - 100€',
    '100€ - 200€',
    '200€ - 500€',
    'Plus de 500€',
    'Sur devis'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulation d'envoi (remplacer par votre logique d'envoi réelle)
    try {
      // Ici vous pouvez intégrer avec votre service d'email préféré
      // (Formspree, EmailJS, Netlify Forms, etc.)
      
      // Simulation d'un délai d'envoi
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitMessage('Votre message a été envoyé avec succès ! Je vous recontacterai très rapidement.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        occasion: '',
        message: '',
        preferred_contact: 'email',
        budget: ''
      })
    } catch (error) {
      setSubmitMessage('Une erreur est survenue. Veuillez réessayer ou me contacter directement.')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitMessage(''), 5000)
    }
  }

  return (
    <section id="contact" className="section-padding bg-cream">
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
            Contact
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contactez-Nous
          </motion.h2>
          <motion.p
            className="text-lg text-soft-brown max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Vous avez une envie gourmande ou un projet spécial ? 
            N'hésitez pas à nous contacter, nous serons ravis de vous accompagner.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Formulaire de contact */}
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-bold text-chocolate mb-4">
                Formulaire de Contact
              </h3>
              <p className="text-soft-brown">
                Remplissez ce formulaire et nous vous recontacterons rapidement pour discuter de votre projet.
              </p>
            </div>

            {submitMessage && (
              <motion.div
                className={`p-4 rounded-xl mb-6 ${
                  submitMessage.includes('succès') 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {submitMessage}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nom et Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-chocolate mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-warm-beige focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors duration-300 outline-none"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-chocolate mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-warm-beige focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors duration-300 outline-none"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              {/* Téléphone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-chocolate mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-warm-beige focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors duration-300 outline-none"
                  placeholder="06 XX XX XX XX"
                />
              </div>

              {/* Occasion et Budget */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="occasion" className="block text-sm font-medium text-chocolate mb-2">
                    Type d'occasion
                  </label>
                  <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-warm-beige focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors duration-300 outline-none bg-white"
                  >
                    <option value="">Sélectionnez une occasion</option>
                    {occasions.map((occasion, index) => (
                      <option key={index} value={occasion}>
                        {occasion}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-chocolate mb-2">
                    Budget approximatif
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-warm-beige focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors duration-300 outline-none bg-white"
                  >
                    <option value="">Sélectionnez un budget</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Préférence de contact */}
              <div>
                <label className="block text-sm font-medium text-chocolate mb-2">
                  Comment préférez-vous être contacté(e) ?
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferred_contact"
                      value="email"
                      checked={formData.preferred_contact === 'email'}
                      onChange={handleInputChange}
                      className="text-gold focus:ring-gold"
                    />
                    <span className="ml-2 text-soft-brown">Email</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferred_contact"
                      value="phone"
                      checked={formData.preferred_contact === 'phone'}
                      onChange={handleInputChange}
                      className="text-gold focus:ring-gold"
                    />
                    <span className="ml-2 text-soft-brown">Téléphone</span>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-chocolate mb-2">
                  Votre message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-warm-beige focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors duration-300 outline-none resize-vertical"
                  placeholder="Décrivez-nous votre projet, vos envies, le nombre de personnes, la date souhaitée..."
                />
              </div>

              {/* Bouton d'envoi */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-gold to-light-gold hover:shadow-lg hover:scale-105 active:scale-95'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Envoi en cours...</span>
                  </div>
                ) : (
                  'Envoyer ma Demande'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Informations de contact et carte */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Informations pratiques */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-chocolate mb-6">
                Informations Pratiques
              </h3>
              
              <div className="space-y-6">
                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-gold to-light-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-chocolate mb-1">Adresse</h4>
                    <p className="text-soft-brown text-sm">
                      123 Rue de la Pâtisserie<br />
                      75016 Paris<br />
                      France
                    </p>
                    <p className="text-gold text-xs mt-1">
                      ⚠️ Remplacez par votre vraie adresse
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-gold to-light-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-chocolate mb-1">Téléphone</h4>
                    <p className="text-soft-brown text-sm">
                      <a href="tel:+33123456789" className="hover:text-gold transition-colors">
                        +33 1 23 45 67 89
                      </a>
                    </p>
                    <p className="text-gold text-xs mt-1">
                      ⚠️ Remplacez par votre vrai numéro
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-gold to-light-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-chocolate mb-1">Email</h4>
                    <p className="text-soft-brown text-sm">
                      <a href="mailto:contact@lisa-delices.fr" className="hover:text-gold transition-colors">
                        contact@lisa-delices.fr
                      </a>
                    </p>
                    <p className="text-gold text-xs mt-1">
                      ⚠️ Remplacez par votre vraie adresse email
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-gold to-light-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">⏰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-chocolate mb-1">Horaires</h4>
                    <div className="text-soft-brown text-sm space-y-1">
                      <p>Lundi - Vendredi : 9h - 19h</p>
                      <p>Samedi : 9h - 17h</p>
                      <p>Dimanche : Sur rendez-vous</p>
                    </div>
                    <p className="text-gold text-xs mt-2">
                      ⚠️ Adaptez selon vos horaires
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-chocolate mb-6">
                Suivez-Nous
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href="https://instagram.com/lisa_delices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-2xl">📸</span>
                  <div>
                    <div className="font-semibold">Instagram</div>
                    <div className="text-xs opacity-90">@lisa_delices</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://facebook.com/lisa.delices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 rounded-xl bg-blue-600 text-white hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-2xl">👥</span>
                  <div>
                    <div className="font-semibold">Facebook</div>
                    <div className="text-xs opacity-90">Lisa Délices</div>
                  </div>
                </motion.a>
              </div>
              
              <p className="text-gold text-xs mt-4 text-center">
                ⚠️ Remplacez par vos vrais liens de réseaux sociaux
              </p>
            </div>

            {/* Carte - placeholder */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-chocolate mb-6">
                Nous Trouver
              </h3>
              
              <div className="bg-warm-cream rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-chocolate font-medium mb-2">Carte Google Maps</p>
                <p className="text-soft-brown text-sm mb-4">
                  Intégrez ici votre carte Google Maps avec votre adresse réelle
                </p>
                <div className="bg-gold text-white px-4 py-2 rounded-full text-xs inline-block">
                  À configurer avec votre vraie adresse
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
