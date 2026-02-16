## Context

Le portfolio utilise un système de projets basé sur le filesystem :
- Chaque projet réside dans `projects/<slug>/` avec `meta.json` et `content.md`
- Les images sont stockées dans `public/projects/<slug>/`
- La fonction `getProjects()` lit automatiquement tous les projets au build time
- Aucune configuration centralisée n'est nécessaire

L'ajout d'un nouveau projet est donc complètement découplé du code existant : il suffit de créer les fichiers dans la bonne structure.

## Goals / Non-Goals

**Goals :**
- Ajouter la réalisation 5 (Dashboard RH Automatisé) au portfolio avec un contenu professionnel et structuré
- Respecter exactement le même format que les réalisations existantes (meta.json + content.md + images)
- Copier et intégrer les 3 captures d'écran fournies par l'utilisateur

**Non-Goals :**
- Modifier le code React existant (pas nécessaire)
- Changer la structure des projets ou le design du portfolio
- Ajouter de nouvelles fonctionnalités au système de projets

## Decisions

### 1. Slug du projet : `dashboard-rh-automatise`

**Rationale :** Le slug doit être descriptif, en kebab-case et refléter le contenu du projet. "dashboard-rh-automatise" est clair et cohérent avec les autres slugs du portfolio.

**Alternatives considérées :**
- `realisation-5` : Trop générique, ne décrit pas le contenu
- `suivi-temps-travail` : Trop vague, ne met pas en avant l'automatisation

### 2. Structure du content.md

**Rationale :** Le content.md suivra le template établi par les réalisations existantes (notamment `auto-post-linkedin-ia`) :
- ## Présentation (avec emoji et description)
- ## 🎯 Objectif du Projet
- ## ⚡ Fonctionnalités Clés
- ## 🏗️ Architecture & Flux
- ## 🔧 Processus de Développement
- ## 🧰 Stack & Paramètres
- ## 💡 Compétences Développées
- ## 🏆 Résultats

Ce format a fait ses preuves et assure la cohérence du portfolio.

### 3. Mapping des images

Les 3 captures d'écran de l'utilisateur seront renommées et utilisées comme suit :
- `Capture d'écran 2026-02-16 205103.png` → `cover.png` (graphiques congés/RTT - image principale)
- `Capture d'écran 2026-02-16 211107.png` → `workflow.png` (workflow Zapier/Make.com)
- `Capture d'écran 2026-02-16 205123.png` → `dashboard.png` (tableau suivi RH)

**Rationale :** La première image (graphiques colorés) est la plus visuelle et adapté comme cover. Le workflow montre l'architecture technique. Le dashboard est une vue complémentaire.

### 4. Tags du projet

Tags proposés : `["Google Sheets", "n8n", "Automatisation", "No-Code", "RH", "Looker Studio"]`

**Rationale :** Ces tags reflètent les technologies clés du projet et permettent de filtrer/rechercher facilement. Cohérent avec les tags des autres projets.

### 5. Date de publication

Date proposée : `"2026-02"` (Février 2026)

**Rationale :** Correspond à la période actuelle et place le projet en tête de liste (tri par date décroissante sur la page réalisations).

## Risks / Trade-offs

**[Risque] Images mal nommées ou introuvables** → Vérifier que les 3 captures sont bien dans `Réalisations/Réalisation 5/` avant de les copier. Si une image manque, l'utilisateur sera averti.

**[Trade-off] Contenu long dans content.md** → Le texte fourni par l'utilisateur est détaillé (101 lignes). C'est un avantage pour le SEO et la crédibilité, mais peut rallonger le temps de lecture. Acceptable car la structure avec H2/H3 permet de scanner rapidement.

**[Risque] Ordre des projets sur la page** → Avec la date "2026-02", ce projet apparaîtra en premier. Si d'autres projets ont aussi cette date, l'ordre peut varier selon l'ordre de lecture des fichiers. Acceptable car tous les projets de Février 2026 sont récents.

## Migration Plan

Aucune migration nécessaire. Il s'agit d'un ajout de contenu statique.

**Étapes de déploiement :**
1. Créer les fichiers meta.json et content.md
2. Copier les images dans public/projects/dashboard-rh-automatise/
3. Vérifier avec Playwright que le projet apparaît bien sur /realisations
4. Vérifier que la page de détail /realisations/dashboard-rh-automatise s'affiche correctement

**Rollback :** Supprimer le dossier `projects/dashboard-rh-automatise/` et `public/projects/dashboard-rh-automatise/`. Aucun impact sur le reste du portfolio.

## Open Questions

Aucune question ouverte. Le scope est clair et la structure bien définie.
