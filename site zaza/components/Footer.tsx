'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Créations', href: '#creations' },
    { name: 'Tarifs', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ]

  const legalLinks = [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/politique-confidentialite' },
    { name: 'Conditions générales', href: '/conditions-generales' },
    { name: 'Cookies', href: '/politique-cookies' },
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/lisa_delices',
      icon: '📸',
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/lisa.delices',
      icon: '👥',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Pinterest',
      href: 'https://pinterest.com/lisa_delices',
      icon: '📌',
      color: 'from-red-500 to-red-600'
    },
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-gradient-to-br from-chocolate to-dark-chocolate text-white">
      {/* Section principale du footer */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Informations de l'entreprise */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-gold to-light-gold rounded-full flex items-center justify-center">
                <span className="text-xl text-white font-script font-bold">L</span>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold">Lisa Délices</h3>
                <p className="text-sm opacity-80">Pâtisserie Artisanale</p>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed opacity-90 mb-6">
              L'art de la pâtisserie française dans chaque création. 
              Des ingrédients d'exception pour des moments d'exception.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center hover:scale-110 transition-transform duration-300`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  <span className="text-sm">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-serif font-semibold mb-6 text-gold">
              Navigation Rapide
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm opacity-80 hover:opacity-100 hover:text-gold transition-all duration-300 text-left"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 0.8, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, opacity: 1 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-serif font-semibold mb-6 text-gold">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-gold mt-1">📍</span>
                <div className="text-sm opacity-90 leading-relaxed">
                  123 Rue de la Pâtisserie<br />
                  75016 Paris, France
                  <br />
                  <span className="text-xs text-gold">⚠️ Adresse à modifier</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-gold">📞</span>
                <a 
                  href="tel:+33123456789" 
                  className="text-sm opacity-90 hover:text-gold transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-gold">✉️</span>
                <a 
                  href="mailto:contact@lisa-delices.fr" 
                  className="text-sm opacity-90 hover:text-gold transition-colors"
                >
                  contact@lisa-delices.fr
                </a>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-serif font-semibold mb-6 text-gold">
              Newsletter
            </h4>
            <p className="text-sm opacity-90 mb-4">
              Restez informé de nos nouvelles créations et offres spéciales.
            </p>
            
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors duration-300 outline-none"
              />
              <motion.button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-gold to-light-gold text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                S'abonner
              </motion.button>
            </form>
            
            <p className="text-xs opacity-70 mt-3">
              En vous abonnant, vous acceptez de recevoir nos newsletters. 
              Désabonnement possible à tout moment.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Séparateur */}
      <div className="border-t border-white/20"></div>

      {/* Section copyright et liens légaux */}
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <motion.div
            className="text-sm opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              © {currentYear} Lisa Délices. Tous droits réservés. 
              <span className="mx-2">|</span>
              Créé avec ❤️ et Next.js
            </p>
          </motion.div>

          {/* Liens légaux */}
          <motion.div
            className="flex flex-wrap gap-4 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {legalLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="opacity-80 hover:opacity-100 hover:text-gold transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Note développeur */}
        <motion.div
          className="mt-8 pt-6 border-t border-white/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gold/10 rounded-2xl p-6 max-w-4xl mx-auto">
            <h5 className="text-gold font-semibold mb-3 flex items-center justify-center">
              <span className="mr-2">⚠️</span>
              Instructions de Personnalisation
            </h5>
            <div className="text-sm opacity-90 space-y-2">
              <p>
                <strong>Ce site est prêt à être personnalisé !</strong> Voici ce qu'il faut modifier :
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4 text-xs">
                <div className="text-left">
                  <strong>Informations à remplacer :</strong>
                  <ul className="mt-1 space-y-1 list-disc list-inside">
                    <li>Adresse et coordonnées</li>
                    <li>Liens réseaux sociaux</li>
                    <li>Photos par vos vraies créations</li>
                    <li>Textes "À propos" personnels</li>
                  </ul>
                </div>
                <div className="text-left">
                  <strong>Fonctionnalités à configurer :</strong>
                  <ul className="mt-1 space-y-1 list-disc list-inside">
                    <li>Formulaire de contact</li>
                    <li>Carte Google Maps</li>
                    <li>Newsletter (MailChimp, etc.)</li>
                    <li>Domaine et hébergement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
