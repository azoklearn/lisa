'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Marie Dubois',
      role: 'Particulière',
      image: '/images/fruitrouge.jpg', // Placeholder - remplacer par photos clients
      rating: 5,
      text: "Lisa a créé le gâteau de mariage de mes rêves ! Un entremet aux fruits rouges absolument divin, aussi beau que délicieux. Tous nos invités en parlent encore. Un savoir-faire exceptionnel !",
      location: 'Paris 16ème',
      occasion: 'Mariage'
    },
    {
      id: 2,
      name: 'Pierre Martin',
      role: 'Chef d\'entreprise',
      image: '/images/dessert.jpg',
      rating: 5,
      text: "Pour notre événement d'entreprise, Lisa a réalisé un buffet de desserts spectaculaire. La qualité était au rendez-vous et la présentation parfaite. Nos clients étaient impressionnés !",
      location: 'Neuilly-sur-Seine',
      occasion: 'Événement professionnel'
    },
    {
      id: 3,
      name: 'Sophie Laurent',
      role: 'Maman de famille',
      image: '/images/plateaudessert.jpg',
      rating: 5,
      text: "Les macarons de Lisa sont une pure merveille ! Mes enfants les adorent et moi aussi. La texture est parfaite et les saveurs sont originales. C'est devenu notre pâtisserie de référence.",
      location: 'Boulogne-Billancourt',
      occasion: 'Goûter d\'anniversaire'
    },
    {
      id: 4,
      name: 'Thomas Rousseau',
      role: 'Amateur de pâtisserie',
      image: '/images/meringue.jpg',
      rating: 5,
      text: "La tarte au citron de Lisa est tout simplement parfaite ! L'équilibre entre l'acidité et la douceur est remarquable. Une vraie œuvre d'art qui fond en bouche. Bravo !",
      location: 'Levallois-Perret',
      occasion: 'Plaisir personnel'
    },
    {
      id: 5,
      name: 'Isabelle Moreau',
      role: 'Organisatrice d\'événements',
      image: '/images/tartecitron.jpg',
      rating: 5,
      text: "Je recommande Lisa les yeux fermés ! Professionnelle, créative et ses pâtisseries sont d'un raffinement exceptionnel. Mes clients sont toujours ravis de ses créations sur mesure.",
      location: 'Courbevoie',
      occasion: 'Événements clients'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <motion.span
        key={i}
        className={`text-2xl ${i < rating ? 'text-gold' : 'text-gray-300'}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: i * 0.1 }}
      >
        ★
      </motion.span>
    ))
  }

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-warm-cream to-cream">
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
            Témoignages
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ce Que Disent Nos Clients
          </motion.h2>
          <motion.p
            className="text-lg text-soft-brown max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Leur bonheur et leur satisfaction sont notre plus belle récompense. 
            Découvrez les expériences de ceux qui ont goûté à nos créations.
          </motion.p>
        </motion.div>

        {/* Témoignage principal (grand format) */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Motif décoratif */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/10 to-transparent rounded-full -mt-16 -mr-16"></div>
            
            <div className="relative z-10">
              {/* Citation */}
              <div className="text-center mb-8">
                <div className="text-6xl text-gold/20 font-script mb-4">"</div>
                <motion.p
                  className="text-xl md:text-2xl text-chocolate leading-relaxed font-light italic"
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {testimonials[currentTestimonial].text}
                </motion.p>
              </div>

              {/* Notes */}
              <motion.div
                className="flex justify-center mb-6"
                key={`stars-${currentTestimonial}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {renderStars(testimonials[currentTestimonial].rating)}
              </motion.div>

              {/* Informations client */}
              <motion.div
                className="flex items-center justify-center space-x-4"
                key={`client-${currentTestimonial}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-gold to-light-gold flex items-center justify-center">
                  <span className="text-white font-serif text-xl">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-chocolate">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-soft-brown text-sm">
                    {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].location}
                  </div>
                  <div className="text-gold text-xs font-medium mt-1">
                    {testimonials[currentTestimonial].occasion}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Indicateurs de navigation */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-gold scale-125' 
                    : 'bg-gray-300 hover:bg-gold/60'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Grille de témoignages supplémentaires */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Étoiles */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Texte du témoignage */}
              <p className="text-soft-brown text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Informations client */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-light-gold flex items-center justify-center">
                  <span className="text-white font-serif">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-chocolate text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-soft-brown text-xs">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistiques de satisfaction */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-gold font-serif mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              100%
            </motion.div>
            <div className="text-soft-brown text-sm">Clients Satisfaits</div>
          </div>
          
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-gold font-serif mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              250+
            </motion.div>
            <div className="text-soft-brown text-sm">Commandes Livrées</div>
          </div>
          
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-gold font-serif mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              5.0
            </motion.div>
            <div className="text-soft-brown text-sm">Note Moyenne</div>
          </div>
          
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-gold font-serif mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              95%
            </motion.div>
            <div className="text-soft-brown text-sm">Clients Fidèles</div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gold to-light-gold rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Rejoignez Nos Clients Satisfaits
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Faites l'expérience de nos créations exceptionnelles et laissez-nous vous enchanter
            </p>
            <motion.button
              className="px-8 py-4 bg-white text-gold rounded-full font-semibold hover:bg-cream transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Commander Ma Première Création
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
