# Portfolio - Site Professionnel

Portfolio moderne construit avec Next.js 15, TypeScript et TailwindCSS.

## 🚀 Commandes disponibles

```bash
# Développement
npm run dev          # Démarre le serveur de développement sur http://localhost:3000

# Production
npm run build        # Crée un build de production optimisé
npm start            # Démarre le serveur de production

# Qualité du code
npm run lint         # Vérifie le code avec ESLint
npm run format       # Formate le code avec Prettier
```

## 📁 Structure du projet

```
portfolio/
├── app/                  # Routes et layouts Next.js (App Router)
│   ├── layout.tsx        # Layout racine
│   ├── page.tsx          # Page d'accueil
│   └── globals.css       # Styles globaux Tailwind
├── components/           # Composants réutilisables
│   ├── layout/          # Navbar, Footer
│   ├── ui/              # Button, Badge, ProjectCard
│   └── sections/        # Hero, Bio, TechStack
├── lib/                 # Utilitaires serveur
├── content/             # Contenu statique (Markdown)
├── projects/            # Projets dynamiques à importer
└── public/              # Assets statiques
    └── images/          # Images
```

## ⚙️ Configuration

### Variables d'environnement

Copiez `.env.local.example` vers `.env.local` et configurez les variables :

```bash
cp .env.local.example .env.local
```

Variables requises (Phase 7 - Contact) :

- `RESEND_API_KEY` : Clé API Resend pour l'envoi d'emails
- `EMAIL_TO` : Email de destination pour le formulaire de contact
- `EMAIL_FROM` : Email expéditeur

### Technologies utilisées

- **Framework** : Next.js 15 (App Router)
- **Language** : TypeScript 5 (strict mode)
- **Styling** : TailwindCSS 3 + @tailwindcss/typography
- **UI Library** : React 19
- **Linting** : ESLint (next/core-web-vitals)
- **Formatting** : Prettier

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🎯 Roadmap

- [x] **Phase 1** : Configuration initiale (Next.js, TypeScript, Tailwind)
- [ ] **Phase 2** : Layout & Navigation (Navbar, Footer)
- [ ] **Phase 3** : Page "À propos"
- [ ] **Phase 4** : Système d'import projets
- [ ] **Phase 5** : Page "Réalisations"
- [ ] **Phase 6** : Pages projets dynamiques
- [ ] **Phase 7** : Page Contact + API
- [ ] **Phase 8** : SEO & Meta
- [ ] **Phase 9** : Design final & Polish
- [ ] **Phase 10** : Tests & Documentation

## 📝 Notes

- Le projet utilise TypeScript en mode strict pour garantir la qualité du code
- TailwindCSS est configuré avec des design tokens (couleur accent, typographie Inter)
- L'alias `@/*` est configuré pour les imports absolus
- Les variables d'environnement dans `.env.local` sont git-ignorées pour la sécurité

---

**Auteur** : [Votre Nom]
**Version** : Phase 1 - Configuration initiale
