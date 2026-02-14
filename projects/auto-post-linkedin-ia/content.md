## Présentation

🤖 **Auto-Post LinkedIn IA** - Automatisation complète de veille technologique et publication LinkedIn

L'idée de ce projet est née d'un constat simple : je passais beaucoup de temps à chercher des articles intéressants sur l'IA pour les partager sur LinkedIn. J'ai voulu automatiser tout le processus, de la veille à la publication, en gardant un ton naturel et professionnel.

- **Outils no-code** : N8N + LinkedIn API
- **IA utilisée** : Claude (API Anthropic)
- **Durée du projet** : 2 jours
- **Période de réalisation** : Février 2026

## 🎯 Objectif du Projet

Mettre en place un système entièrement automatisé qui, chaque matin, récupère les derniers articles sur l'intelligence artificielle, sélectionne le plus pertinent, rédige un post LinkedIn engageant en français, et le publie sur mon profil — le tout sans aucune intervention manuelle.

## ⚡ Fonctionnalités Clés

### Veille automatisée multi-sources

- Collecte quotidienne d'articles via 3 flux RSS (TechCrunch, The Verge, Google AI Blog)
- Agrégation et déduplication des articles pour éviter les répétitions
- Système anti-doublon basé sur un stockage persistant des liens déjà traités

### Rédaction IA intelligente

- Appel à l'API Claude (Anthropic) pour analyser les articles et sélectionner le plus pertinent
- Rédaction automatique d'un post LinkedIn structuré : hook accrocheur, insights clés, question ouverte, hashtags
- Traduction et adaptation du contenu anglais en français naturel

### Publication automatique

- Connexion directe à l'API LinkedIn via OAuth2
- Publication quotidienne avec un délai aléatoire (0 à 90 minutes) pour paraître plus naturel
- Gestion des erreurs et des doublons LinkedIn

## 🏗 Architecture & Flux

### Entrée

- Déclencheur planifié (Schedule Trigger) chaque matin à 8h
- Délai aléatoire via un module Wait pour varier l'heure de publication
- 3 flux RSS en parallèle pour maximiser la diversité des sources

### Traitement

- Merge des articles des 3 sources
- Filtrage des articles déjà postés (Static Data n8n)
- Agrégation en un seul bundle
- Envoi à l'API Claude avec un prompt structuré pour la sélection et la rédaction

### Sortie

- Extraction du texte du post via Edit Fields
- Nettoyage du formatage (suppression du markdown, vérification des sauts de ligne)
- Publication via le node LinkedIn de n8n

## 🔧 Processus de Développement

### Phase 1 : Conception

- Définition du flux de données : RSS → IA → LinkedIn
- Choix des sources RSS pertinentes pour l'actualité IA
- Rédaction du prompt Claude optimisé pour des posts LinkedIn engageants

### Phase 2 : Intégration

- Configuration de l'API Anthropic (authentification, headers, body JSON)
- Mise en place de l'OAuth2 LinkedIn et création de l'app développeur
- Résolution des problèmes de scopes et permissions LinkedIn
- Connexion des 3 flux RSS avec un node Merge

### Phase 3 : Fiabilisation

- Ajout du système anti-doublon avec le Static Data de n8n
- Nettoyage du formatage pour éviter les posts vides sur LinkedIn
- Ajout du délai aléatoire pour simuler un comportement humain
- Tests de bout en bout et correction des erreurs

## 🧰 Stack & Paramètres

- **N8N** (self-hosted) : orchestration complète du workflow
- **API Claude** (Anthropic, modèle claude-sonnet-4) : sélection d'articles et rédaction
- **API LinkedIn** (OAuth2) : publication automatique
- **Flux RSS** : TechCrunch AI, The Verge AI, Google AI Blog
- **Nodes utilisés** : Schedule Trigger, Wait, RSS Feed Read, Merge, Code, Aggregate, HTTP Request, Edit Fields, LinkedIn

## 💡 Compétences Développées

### Technique

- Intégration d'APIs REST (Anthropic, LinkedIn)
- Gestion de l'authentification OAuth2 et des scopes
- Manipulation de données JSON et expressions JavaScript dans n8n
- Gestion de la persistance avec le Static Data

### Résolution de problèmes

- Contournement des limitations de l'API LinkedIn (posts vides, doublons, scopes manquants)
- Debugging d'erreurs JSON et de formatage
- Adaptation du prompt IA pour obtenir un output propre et publiable

## 🏆 Résultats

- ✅ **Publication quotidienne automatique** : un post LinkedIn chaque matin sans intervention
- ✅ **Contenu varié et pertinent** : sélection intelligente parmi 3 sources grâce à Claude
- ✅ **Workflow robuste** : gestion des doublons, des erreurs et du formatage
- ✅ **Gain de temps considérable** : ce qui prenait 30-45 minutes par jour est désormais entièrement automatisé

---

Un projet concret qui combine veille technologique, IA générative et automatisation no-code pour construire une présence LinkedIn professionnelle et régulière, sans effort quotidien.
