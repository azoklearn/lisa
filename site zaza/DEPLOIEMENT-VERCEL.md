# 🚀 Guide de Déploiement Vercel - Lisa Délices

Guide complet pour déployer votre site de pâtisserie sur Vercel.

## ⚡ Déploiement Rapide (5 minutes)

### Étape 1 : Préparation

1. **Vérifier que votre site fonctionne localement**
   ```bash
   npm install
   npm run dev
   ```
   → Visitez http://localhost:3000 pour confirmer

2. **Construire le projet pour vérifier qu'il n'y a pas d'erreurs**
   ```bash
   npm run build
   ```
   → Doit se terminer sans erreurs

### Étape 2 : Créer un compte Vercel

1. Aller sur [vercel.com](https://vercel.com)
2. S'inscrire avec GitHub, GitLab, ou email
3. Choisir le plan gratuit (largement suffisant)

### Étape 3 : Déployer le site

#### Option A : Glisser-Déposer (Le plus simple)

1. **Créer un ZIP du projet**
   ```bash
   # Exclure node_modules et .next
   zip -r lisa-delices.zip . -x "node_modules/*" ".next/*" ".git/*"
   ```

2. **Sur Vercel :**
   - Cliquer sur "Add New Project"
   - Choisir "Deploy with Zero Configuration"
   - Glisser le fichier ZIP ou sélectionner le dossier du projet
   - Attendre 2-3 minutes ⏳

3. **C'est terminé !** 🎉
   - URL automatique fournie (ex: `lisa-delices-abc123.vercel.app`)
   - Certificat SSL automatique
   - CDN mondial inclus

#### Option B : Depuis GitHub (Recommandé pour les mises à jour)

1. **Pousser votre code sur GitHub**
   ```bash
   git init
   git add .
   git commit -m "Site Lisa Délices initial"
   git branch -M main
   git remote add origin https://github.com/votre-username/lisa-delices.git
   git push -u origin main
   ```

2. **Sur Vercel :**
   - "Add New Project"
   - "Import Git Repository"
   - Sélectionner votre repo
   - Cliquer "Deploy"

3. **Avantages :**
   - Mises à jour automatiques à chaque commit
   - Aperçus des modifications
   - Rollback facile

## 🌐 Configuration Domaine Personnalisé

### Acheter un Domaine

Recommandations :
- **OVH** (français) : ~12€/an
- **Namecheap** : ~10€/an  
- **Google Domains** : ~15€/an

Suggestions de noms :
- `lisa-delices.fr`
- `patisserie-lisa.com`
- `delices-de-lisa.fr`

### Configurer le Domaine

1. **Dans Vercel :**
   - Aller dans votre projet
   - Settings → Domains
   - "Add Domain"
   - Saisir votre domaine (ex: `lisa-delices.fr`)

2. **Chez votre registrar (OVH, etc.) :**
   - Modifier les DNS
   - Ajouter un enregistrement CNAME :
     ```
     Nom: www
     Valeur: cname.vercel-dns.com
     ```
   - Ajouter un enregistrement A :
     ```
     Nom: @
     Valeur: 76.76.19.61
     ```

3. **Attendre 24h maximum** pour la propagation DNS

## 📧 Configurer le Formulaire de Contact

### Option 1 : Formspree (Recommandé)

1. **S'inscrire sur [formspree.io](https://formspree.io)**
2. **Créer un nouveau formulaire**
3. **Copier l'URL du formulaire**
4. **Modifier le code** dans `components/ContactSection.tsx` :

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    const response = await fetch('https://formspree.io/f/VOTRE-ID-ICI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    
    if (response.ok) {
      setSubmitMessage('Votre message a été envoyé avec succès ! Je vous recontacterai très rapidement.')
      setFormData({ /* reset form */ })
    } else {
      throw new Error('Erreur envoi')
    }
  } catch (error) {
    setSubmitMessage('Une erreur est survenue. Veuillez réessayer ou me contacter directement.')
  } finally {
    setIsSubmitting(false)
    setTimeout(() => setSubmitMessage(''), 5000)
  }
}
```

5. **Redéployer** :
   ```bash
   git add .
   git commit -m "Configuration formulaire contact"
   git push
   ```

### Option 2 : EmailJS

1. **S'inscrire sur [emailjs.com](https://www.emailjs.com)**
2. **Configurer un service email**
3. **Suivre leur documentation** pour l'intégration React

## 🗺️ Ajouter Google Maps

1. **Obtenir une clé API Google Maps**
   - Console Google Cloud
   - Activer "Maps JavaScript API"
   - Créer une clé API

2. **Remplacer le placeholder** dans `ContactSection.tsx` :

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=1!1m18!1m12!1m3!1d2624.991441757778!2d2.294359776176935!3d48.85884197128773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1234567890123"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-xl"
/>
```

*Remplacez l'URL par celle de Google Maps avec votre adresse réelle.*

## 📊 Analytics et Suivi

### Google Analytics 4

1. **Créer un compte** sur [analytics.google.com](https://analytics.google.com)
2. **Obtenir l'ID de suivi** (ex: G-XXXXXXXXXX)
3. **Ajouter dans** `app/layout.tsx` :

```tsx
// Ajouter dans le <head>
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Vercel Analytics (Inclus gratuitement)

Dans votre dashboard Vercel :
- Analytics → Enable
- Données de performance automatiques
- Web Vitals inclus

## 🔧 Variables d'Environnement

Si vous avez des clés API (maps, analytics, etc.) :

1. **Dans Vercel :**
   - Project Settings → Environment Variables
   - Ajouter vos variables

2. **Dans le code :**
   ```typescript
   const googleMapsKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
   const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_URL
   ```

## 🚨 Checklist Pré-Déploiement

### Contenu à Personnaliser

- [ ] **Images** : Remplacer par vos vraies photos de pâtisseries
- [ ] **Textes** : Personnaliser l'histoire "À propos"
- [ ] **Coordonnées** : Adresse, téléphone, email réels
- [ ] **Réseaux sociaux** : Liens Instagram, Facebook
- [ ] **Prix** : Mettre à jour selon vos tarifs réels
- [ ] **Menu** : Adapter les créations à votre offre

### Configuration Technique

- [ ] **Formulaire contact** : Configurer avec Formspree/EmailJS
- [ ] **Google Maps** : Ajouter votre vraie adresse
- [ ] **Domaine** : Acheter et configurer si souhaité
- [ ] **Analytics** : Configurer Google Analytics
- [ ] **SEO** : Vérifier métadonnées dans layout.tsx

### Tests Finaux

- [ ] **Mobile** : Tester sur différentes tailles d'écran
- [ ] **Performance** : Vérifier avec PageSpeed Insights
- [ ] **Formulaires** : Tester l'envoi de messages
- [ ] **Navigation** : Vérifier tous les liens internes
- [ ] **Images** : S'assurer que tout s'affiche correctement

## 🎯 Optimisations Post-Déploiement

### SEO Local

1. **Google My Business** : Créer un profil gratuit
2. **Schema.org** : Déjà inclus dans le code
3. **Sitemap** : Généré automatiquement par Next.js

### Performance

1. **Images** : Optimiser avec [TinyPNG](https://tinypng.com)
2. **Core Web Vitals** : Monitorer dans Google Search Console
3. **CDN** : Déjà activé par Vercel

### Marketing

1. **Newsletter** : Configurer avec Mailchimp/ConvertKit
2. **Réseaux sociaux** : Partager le lancement
3. **QR Code** : Créer pour vos supports physiques

## 🆘 Résolution de Problèmes

### Erreur de Build

```bash
# Vérifier localement
npm run build

# Si erreur TypeScript
npm run lint

# Si erreur de dépendances
rm -rf node_modules package-lock.json
npm install
```

### Site lent

1. **Optimiser les images** : Utiliser le format WebP
2. **Lazy loading** : Déjà implémenté avec Next.js
3. **Vérifier** : [PageSpeed Insights](https://pagespeed.web.dev)

### Domaine ne fonctionne pas

1. **Attendre 24h** pour propagation DNS
2. **Vérifier DNS** : [DNS Checker](https://dnschecker.org)
3. **Contacter support** Vercel si problème persiste

## 📞 Support

- **Documentation Vercel** : [vercel.com/docs](https://vercel.com/docs)
- **Support Vercel** : Chat dans le dashboard
- **Communauté** : Discord Vercel officiel

---

🎉 **Félicitations !** Votre site de pâtisserie est maintenant en ligne et accessible au monde entier !

**URL de test** : Votre site sera accessible sur une URL comme `https://lisa-delices-xyz.vercel.app`

**Prochaines étapes** :
1. Tester toutes les fonctionnalités
2. Personnaliser le contenu
3. Configurer le domaine personnalisé
4. Partager sur les réseaux sociaux ! 📱✨
