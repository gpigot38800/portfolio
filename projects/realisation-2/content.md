# Agent IA de Veille Technologique

Résumé et analyse automatique quotidienne de l'actualité IA avec agent intelligent

## Présentation

🤖 **Agent IA de Veille Technologique** - Automatisation complète de veille IA avec agent autonome

L'idée de ce projet est née d'un besoin simple : suivre l'actualité de l'intelligence artificielle sans y passer des heures chaque jour. J'ai voulu créer un système qui non seulement collecte et résume les articles, mais qui soit capable de prendre des décisions autonomes pour approfondir les sujets les plus importants.

**Outils no-code** : N8N + NewsAPI + SerpAPI
**IA utilisée** : Claude (API Anthropic)
**Durée du projet** : 1 jour
**Période de réalisation** : Février 2026

## 🎯 Objectif du Projet

Mettre en place un agent IA autonome qui, chaque matin, récupère les derniers articles sur l'intelligence artificielle, les traduit en français, les résume avec un score de pertinence, approfondit les sujets les plus importants de sa propre initiative, et envoie le tout dans un email HTML formaté.

## ⚡ Fonctionnalités Clés

### Collecte intelligente d'articles

- Requête quotidienne à l'API NewsAPI avec opérateurs booléens avancés
- Recherche par expressions exactes ("artificial intelligence", "machine learning", "generative AI", "Claude AI", "Anthropic")
- Tri par date de publication et limitation à 5 articles pour garder la veille digeste

### Agent IA autonome

- Traduction automatique des articles en français quelle que soit la langue source
- Résumé structuré de chaque article avec titre, synthèse et lien source
- Attribution d'un score de pertinence de 1 à 5 pour chaque article
- Décision autonome d'approfondir les recherches via SerpAPI pour les articles notés 5/5

### Livraison par email

- Formatage HTML avec style professionnel (titre, date, séparateurs)
- Transformation JavaScript des données brutes en template email
- Envoi automatique via Gmail chaque matin

## 🏗 Architecture & Flux

### Entrée

- Déclencheur planifié (Schedule Trigger) chaque matin à 8h
- Appel API NewsAPI avec paramètres optimisés (mots-clés, tri, pagination)

### Traitement

- Envoi des 5 articles à un AI Agent propulsé par Claude
- L'agent analyse, traduit, résume et note chaque article
- Pour les articles 5/5, l'agent utilise SerpAPI de sa propre initiative pour approfondir
- Synthèse générale des tendances du jour

### Sortie

- Transformation du texte brut en HTML via un node Code (JavaScript)
- Mise en page avec style inline pour compatibilité email
- Envoi automatique par Gmail

## 🔧 Processus de Développement

### Phase 1 : Conception

- Construction de l'URL NewsAPI avec paramètres avancés (q, qInTitle, pageSize, sortBy, from)
- Optimisation des mots-clés avec opérateurs booléens et expressions exactes pour éviter les faux positifs
- Tests itératifs pour affiner la pertinence des résultats

### Phase 2 : Agent IA

- Configuration du node AI Agent avec modèle Claude (Anthropic)
- Rédaction du prompt avec rôle, instructions, format de sortie et injection dynamique des données
- Ajout de l'outil SerpAPI pour donner à l'agent la capacité de recherche autonome
- Calibrage du nombre de tokens pour éviter les réponses tronquées

### Phase 3 : Formatage et livraison

- Développement du script JavaScript pour la transformation texte → HTML
- Mise en page responsive avec styles inline
- Configuration de Gmail via OAuth2 et connexion au workflow

## 🧰 Stack & Paramètres

- **N8N** (self-hosted sur Hostinger) : orchestration complète du workflow
- **API Claude** (Anthropic) : agent IA pour l'analyse et le résumé
- **NewsAPI** : collecte d'articles avec filtres avancés
- **SerpAPI** : outil de recherche autonome pour l'agent
- **Nodes utilisés** : Schedule Trigger, HTTP Request, AI Agent, Code, Gmail

## 💡 Compétences Développées

### Technique

- Intégration d'APIs REST avec paramètres avancés (NewsAPI, SerpAPI, Anthropic)
- Configuration d'un AI Agent autonome avec outils (tools)
- Prompt engineering : rôle, instructions structurées, injection de données dynamiques
- Manipulation de données en JavaScript dans n8n
- Construction d'URLs avec opérateurs booléens et expressions exactes

### Résolution de problèmes

- Optimisation des mots-clés pour éliminer les faux positifs (passage de "q" à "qInTitle")
- Calibrage des tokens pour éviter les réponses tronquées
- Affinement itératif des paramètres API (suppression du filtre domains, élargissement de la fenêtre temporelle)

## 🏆 Résultats

✅ **Veille quotidienne automatique** : un email de synthèse IA chaque matin sans intervention
✅ **Agent IA autonome** : décision intelligente d'approfondir les articles les plus pertinents
✅ **Contenu multilingue** : traduction automatique depuis n'importe quelle langue vers le français
✅ **Workflow robuste** : collecte, analyse, formatage et envoi en une seule chaîne automatisée
✅ **Gain de temps considérable** : ce qui prenait 30-45 minutes de veille quotidienne est entièrement automatisé

---

Un projet concret qui démontre la puissance des agents IA autonomes dans un contexte d'automatisation no-code, combinant collecte de données, intelligence artificielle et livraison automatisée.
