# 🍰 Lisa Délices - Site Web Pâtisserie Artisanale

Un site web moderne et élégant pour pâtissière indépendante, développé avec Next.js, Tailwind CSS et Framer Motion.

## ✨ Caractéristiques

- **Design immersif** avec hero section en plein écran
- **Galerie interactive** avec système de filtrage par catégories
- **Animations fluides** et micro-interactions élégantes
- **Responsive design** adapté à tous les appareils
- **Optimisé SEO** pour la recherche locale
- **Performance optimale** avec Next.js 14
- **Accessibilité** respectée

## 🎨 Sections Incluses

1. **Hero Section** - Images en carrousel avec appels à l'action
2. **À Propos** - Histoire et valeurs de la pâtissière
3. **Créations** - Galerie filtrable des pâtisseries
4. **Tarifs** - Plans de tarification clairs
5. **Témoignages** - Avis clients avec carrousel
6. **Contact** - Formulaire et informations pratiques
7. **Footer** - Liens utiles et informations légales

## 🚀 Installation et Développement

### Prérequis

- Node.js 18+ installé
- Git installé

### Installation

1. **Cloner ou télécharger le projet**
   ```bash
   # Si vous utilisez Git
   git clone votre-repo
   cd lisa-delices
   
   # Ou si vous avez téléchargé le zip, extraire et naviguer dans le dossier
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📝 Personnalisation du Site

### 🖼️ Remplacer les Images

Les images se trouvent dans `public/images/`. Remplacez-les par vos vraies photos :

```
public/images/
├── dessert.jpg          → Votre dessert signature
├── fruitrouge.jpg       → Tarte aux fruits rouges
├── meringue.jpg         → Vos meringues
├── plateaudessert.jpg   → Plateau de vos créations
└── tartecitron.jpg      → Votre tarte au citron
```

**Conseil** : Utilisez des images haute qualité (1920x1080 minimum) au format JPG ou WebP.

### 📧 Configurer le Formulaire de Contact

Dans `components/ContactSection.tsx`, ligne 45-60, remplacez la simulation par votre service email :

```typescript
// Remplacez cette section par votre service
// Options recommandées :
// - Formspree : https://formspree.io
// - EmailJS : https://www.emailjs.com
// - Netlify Forms : https://www.netlify.com/products/forms

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  // Exemple avec Formspree
  const response = await fetch('https://formspree.io/f/votre-id', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  
  // Gérer la réponse...
}
```

### 🗺️ Ajouter Google Maps

Dans `components/ContactSection.tsx`, remplacez le placeholder par une vraie carte :

```tsx
<iframe
  src=\"https://www.google.com/maps/embed?pb=VOTRE_CODE_EMBED\"
  width=\"100%\"
  height=\"300\"
  style={{ border: 0 }}
  allowFullScreen
  loading=\"lazy\"
  referrerPolicy=\"no-referrer-when-downgrade\"
  className=\"rounded-xl\"
/>
```

### 📱 Configurer les Réseaux Sociaux

Modifiez les liens dans :
- `components/Header.tsx`
- `components/ContactSection.tsx` 
- `components/Footer.tsx`

Remplacez `https://instagram.com/lisa_delices` par vos vrais liens.

### 🎯 Personnaliser le SEO

Dans `app/layout.tsx`, modifiez :

```typescript
export const metadata: Metadata = {
  title: 'Votre Nom | Pâtisserie Artisanale',
  description: 'Votre description personnalisée...',
  metadataBase: new URL('https://votre-domaine.com'),
  // ... autres métadonnées
}
```

### 📞 Mettre à Jour les Informations de Contact

Recherchez et remplacez dans tout le projet :

```bash
# Adresse
123 Rue de la Pâtisserie, 75016 Paris
→ Votre vraie adresse

# Téléphone  
+33 1 23 45 67 89
→ Votre vrai numéro

# Email
contact@lisa-delices.fr
→ Votre vraie adresse email
```

### 💰 Personnaliser les Prix et Créations

Dans `components/CreationsSection.tsx` et `components/PricingSection.tsx`, modifiez :
- Les noms des créations
- Les descriptions
- Les prix
- Les catégories

## 🚀 Déploiement sur Vercel (Recommandé)

### Méthode 1 : Via Interface Web

1. **Créer un compte sur [Vercel](https://vercel.com)**

2. **Importer le projet**
   - Cliquer sur "New Project"
   - Connecter votre repository Git ou uploader le dossier

3. **Configuration automatique**
   - Vercel détecte automatiquement Next.js
   - Cliquer sur "Deploy"

4. **Votre site est en ligne !**
   - URL fournie automatiquement
   - SSL/HTTPS inclus

### Méthode 2 : Via CLI

```bash
# Installer Vercel CLI
npm install -g vercel

# Dans le dossier du projet
vercel

# Suivre les instructions
```

### Configuration du Domaine Personnalisé

1. Dans votre dashboard Vercel, aller dans Settings > Domains
2. Ajouter votre domaine personnalisé
3. Configurer les DNS selon les instructions

## 🌐 Autres Options de Déploiement

### Netlify

1. Aller sur [Netlify](https://www.netlify.com)
2. Glisser-déposer le dossier du projet après `npm run build`
3. Configuration automatique

### OVH/Hostinger (Hébergement traditionnel)

```bash
# Créer version statique
npm run build
npm run export

# Uploader le contenu du dossier 'out' via FTP
```

## 📊 Optimisations SEO Incluses

- ✅ Métadonnées complètes
- ✅ Open Graph pour réseaux sociaux  
- ✅ JSON-LD Schema.org (entreprise locale)
- ✅ Sitemap automatique
- ✅ Images optimisées avec Next.js
- ✅ Performance Web Vitals

## 🛠️ Maintenance et Mises à Jour

### Ajouter une Nouvelle Création

1. Ajouter l'image dans `public/images/`
2. Modifier `components/CreationsSection.tsx` :

```typescript
const creations = [
  // ... créations existantes
  {
    id: 6,
    name: 'Nouvelle Création',
    description: 'Description...',
    price: '35€',
    image: '/images/nouvelle-creation.jpg',
    category: 'entremets',
    features: ['Caractéristique 1', 'Caractéristique 2']
  }
]
```

### Mettre à Jour les Témoignages

Modifier le tableau `testimonials` dans `components/TestimonialsSection.tsx`.

### Changer les Couleurs

Les couleurs sont définies dans `tailwind.config.js` :

```javascript
colors: {
  cream: '#FDF6E3',      // Fond principal
  gold: '#D4AF37',       // Couleur accent
  chocolate: '#8B4513',   // Texte principal
  // ... autres couleurs
}
```

## 🎨 Polices Utilisées

- **Playfair Display** : Titres élégants
- **Poppins** : Texte principal
- **Dancing Script** : Éléments décoratifs

## 📱 Responsive Breakpoints

- **Mobile** : < 768px
- **Tablette** : 768px - 1024px  
- **Desktop** : > 1024px

## 🔧 Scripts Disponibles

```bash
npm run dev          # Développement
npm run build        # Construction pour production
npm run start        # Serveur de production
npm run lint         # Vérification du code
```

## 📄 Structure des Fichiers

```
lisa-delices/
├── app/                 # Pages Next.js 13+ (App Router)
│   ├── globals.css     # Styles globaux
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Page d'accueil
├── components/         # Composants réutilisables
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── CreationsSection.tsx
│   ├── PricingSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── public/            # Fichiers statiques
│   └── images/        # Images du site
├── package.json       # Dépendances
├── tailwind.config.js # Configuration Tailwind
├── next.config.js     # Configuration Next.js
└── README.md         # Ce fichier
```

## 🆘 Support et Problèmes Courants

### Le site ne se lance pas
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Images qui ne s'affichent pas
- Vérifier que les images sont dans `public/images/`
- Vérifier les chemins dans le code (commencent par `/images/`)

### Formulaire de contact non fonctionnel
- Configurer un service comme Formspree (voir section personnalisation)
- Vérifier les CORS si utilisation d'une API externe

### Problème de déploiement
- Vérifier que `npm run build` fonctionne localement
- Consulter les logs de déploiement sur votre plateforme

## 📞 Besoin d'Aide ?

Ce site est livré prêt à l'emploi avec des instructions détaillées. Pour des personnalisations avancées, consultez :

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation Framer Motion](https://www.framer.com/motion)

---

🍰 **Bon succès avec votre pâtisserie en ligne !** 

N'oubliez pas de personnaliser toutes les informations marquées avec ⚠️ pour que le site reflète parfaitement votre activité.
