## Présentation

🤖 **Geoffrey Assistant — Un assistant personnel accessible partout, directement depuis Telegram**

Ce projet est né d'un besoin simple : pouvoir gérer son quotidien à la voix, depuis n'importe où, sans ouvrir plusieurs applications. Un message vocal ou texte suffit pour créer un événement, noter une idée ou enregistrer une dépense.

- **Outils** : n8n + VPS Hostinger + Claude API + Whisper
- **IA utilisée** : Claude (décisions) + Whisper (transcription vocale)
- **Période de réalisation** : Février 2026

## 🎯 Objectif du Projet

Concevoir un assistant personnel intelligent accessible via Telegram, capable de comprendre des instructions en langage naturel — à l'écrit comme à la voix — et d'interagir automatiquement avec des services du quotidien : agenda Google, prise de notes, suivi des dépenses et météo.

## ⚡ Fonctionnalités Clés

### Reconnaissance vocale en français

- Transcription des messages vocaux via Whisper, hébergé en local sur VPS
- Zéro coût d'API supplémentaire grâce à l'hébergement auto-géré
- Prise en charge du français avec une précision élevée

### Gestion d'agenda via Google Calendar

- Création d'événements en langage naturel ("Rdv dentiste mardi prochain à 14h")
- L'IA interprète la date, l'heure et le titre sans formulaire

### Prise de notes automatique

- Sauvegarde instantanée dans Google Sheets avec horodatage
- Récupération et consultation des notes à la demande

### Suivi des dépenses

- Enregistrement d'une dépense avec catégorisation automatique (Courses, Restaurant, Transport, etc.)
- Récapitulatif périodique des dépenses par catégorie
- Visualisation de l'historique directement depuis Telegram

### Météo locale à la demande

- Intégration de l'API Open-Meteo (gratuite, sans clé)
- Réponse immédiate avec les conditions actuelles et prévisions

### Intelligence décisionnelle par Claude

- Claude agit comme cerveau central : il comprend l'intention derrière chaque message et choisit automatiquement le bon outil à déclencher
- Une seule interface (Telegram) pour tout gérer

## 🏗 Architecture Technique

Le workflow est entièrement orchestré dans **n8n**, hébergé sur un **VPS Hostinger**.

### Réception des messages

- Un **Telegram Trigger** reçoit tous les messages entrants
- Un routeur **If** sépare les messages texte des messages vocaux

### Traitement vocal

- Les messages vocaux sont envoyés à un serveur **Flask/Whisper** hébergé en local sur le VPS
- La transcription est retournée à n8n pour la suite du traitement

### Prise de décision IA

- L'**AI Agent (Claude)** analyse le texte transcrit ou le message direct
- Il sélectionne le bon outil parmi : Google Calendar, Google Sheets (notes), Google Sheets (dépenses) ou Open-Meteo

### Réponse

- La réponse est renvoyée instantanément sur Telegram via l'API bot

## 🧰 Stack & Outils

- **n8n** : Orchestrateur de workflow (hébergé sur VPS)
- **Whisper (local)** : Transcription vocale en français
- **Claude API** : Cerveau décisionnel — routing et génération de réponse
- **Telegram Bot API** : Interface utilisateur
- **Google Calendar API** : Gestion de l'agenda
- **Google Sheets API** : Stockage des notes et dépenses
- **Open-Meteo API** : Données météo (gratuit, sans clé)
- **VPS Hostinger** : Hébergement n8n + serveur Whisper Flask

## 💡 Compétences Développées

### Architecture multi-services

- Conception d'un système multi-outils avec routing intelligent par l'IA
- Intégration simultanée de plusieurs APIs (Google, Telegram, Open-Meteo)
- Hébergement et configuration d'un VPS pour un usage en production

### Optimisation des coûts

- Hébergement de Whisper en local pour éviter les coûts de transcription API
- Choix d'Open-Meteo (gratuit) plutôt que des APIs météo payantes
- Architecture pensée pour un usage long terme sans coûts récurrents importants

### Pilotage de l'IA

- Prompt engineering pour qu'un agent IA sélectionne le bon outil en contexte
- Gestion des cas limites (commandes ambiguës, formats variés)
- Approche pragmatique : un outil utile au quotidien, pas juste une démo

## 🏆 Résultats

- ✅ **Assistant personnel fonctionnel, actif 24h/24 sur Telegram**
- ✅ **Reconnaissance vocale en français sans coût API supplémentaire**
- ✅ **Création d'événements Google Calendar en langage naturel**
- ✅ **Suivi des dépenses avec catégorisation automatique**
- ✅ **Prise de notes horodatées dans Google Sheets**
- ✅ **Météo locale à la demande via Open-Meteo**
- ✅ **Architecture entièrement hébergée sur VPS pour un contrôle total**

---

Un projet qui démontre la capacité à concevoir une architecture d'assistant IA bout-en-bout, en combinant orchestration no-code (n8n), IA décisionnelle (Claude), transcription locale (Whisper) et intégrations APIs multiples — le tout déployé en production sur infrastructure propre.
