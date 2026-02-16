## Présentation

📊 **Système Automatisé de Suivi du Temps de Travail** - Automatisation RH complète (Google Forms + Google Sheets + n8n + Looker Studio)

Un projet né d'un besoin concret : remplacer le suivi manuel du temps de travail par fichier Excel individuel par un système centralisé et automatisé. Conçu pour 25 salariés au forfait jours, ce système garantit la conformité légale, automatise les rappels et offre un dashboard RH en temps réel.

- **Outils no-code** : Google Forms, Google Sheets, n8n (auto-hébergé), Looker Studio
- **IA utilisée** : Aucune (pure automatisation logique)
- **Durée du projet** : 3 semaines
- **Période de réalisation** : Janvier 2026

## 🎯 Objectif du Projet

Remplacer le suivi manuel du temps de travail par fichier Excel individuel par un système centralisé et automatisé pour 25 salariés au forfait jours, avec alertes de conformité légale, rappels automatiques et dashboard RH en temps réel.

Le système doit garantir :
- La conformité avec la réglementation du travail (11h de repos quotidien, 35h hebdomadaires)
- L'automatisation complète des rappels mensuels
- Une vision centralisée pour le service RH
- Un coût d'exploitation nul (outils gratuits uniquement)

## ⚡ Fonctionnalités Clés

### Saisie automatisée

- Formulaire Google Forms accessible sur mobile et ordinateur
- Saisie mensuelle en quelques minutes par chaque salarié
- Données centralisées automatiquement dans Google Sheets

### Alertes et conformité légale

- Alerte immédiate au manager si un salarié ne respecte pas les 11h de repos quotidien ou 35h hebdomadaires
- Rappel automatique le 1er du mois aux salariés n'ayant pas rempli leur fiche
- Relance automatique le 6 du mois aux retardataires
- Alerte si un salarié a trop de CP ou RTT non pris

### Dashboard RH centralisé

- Vue d'ensemble des soldes CP/RTT de tous les salariés
- Graphiques visuels des congés restants par personne
- Tableau de suivi de la conformité légale

## 🏗️ Architecture & Flux

### Entrée

- Salarié remplit le formulaire Google Forms (congés, RTT, maladie, conformité)

### Traitement

- Google Sheets centralise les données et calcule les soldes automatiquement
- n8n surveille les nouvelles saisies et déclenche les workflows d'alerte
- 4 workflows automatisés tournent en continu sur VPS

### Sorties

- Emails d'alerte conformité au manager
- Emails de rappel/relance aux salariés
- Emails d'alerte soldes élevés
- Dashboard Looker Studio mis à jour en temps réel

## 🔧 Processus de Développement

### Phase 1 : Conception du socle

- Analyse du fichier Excel existant de la cliente (fiche de suivi individuelle forfait jours)
- Structuration de la base Google Sheets (onglets Salariés, Saisies, Soldes)
- Création des formules SUMIFS et VLOOKUP pour les calculs automatiques

### Phase 2 : Formulaire et intégrations

- Création du Google Forms avec toutes les rubriques légales
- Configuration Google Cloud Console (OAuth2, APIs Drive/Sheets/Gmail)
- Connexion Google Forms → Google Sheets

### Phase 3 : Automatisations n8n

- Workflow alerte conformité (Google Sheets Trigger → IF → Gmail)
- Workflow rappels mensuels (Schedule Trigger → Code → Gmail)
- Workflow relance J+5 (duplication et adaptation)
- Workflow alertes soldes (Schedule Trigger → Code → Gmail)

### Phase 4 : Dashboard et livraison

- Création du dashboard Looker Studio connecté au Google Sheets
- Rédaction du guide de livraison client
- Préparation du transfert de propriété

## 🧰 Stack & Paramètres

- **Google Forms** : saisie mensuelle des salariés
- **Google Sheets** : base de données centralisée avec formules dynamiques
- **n8n** (auto-hébergé sur VPS Hostinger) : orchestration des 4 workflows
- **Gmail** : envoi des alertes et rappels en HTML
- **Looker Studio** : dashboard RH interactif
- **Google Cloud Console** : OAuth2 et gestion des APIs

Écosystème 100% Google + n8n auto-hébergé pour garantir la sécurité des données RH et le contrôle total.

## 💡 Compétences Développées

### Technique

- Configuration OAuth2 et APIs Google (Drive, Sheets, Gmail)
- Création de workflows n8n avec triggers, conditions et nodes Code (JavaScript)
- Formules avancées Google Sheets (SUMIFS, VLOOKUP, mise en forme conditionnelle)
- Conception de dashboards Looker Studio connectés à des données live

### Conseil & gestion de projet

- Analyse du besoin client à partir d'un fichier existant
- Choix d'architecture technique adaptée (écosystème Google + n8n auto-hébergé)
- Argumentation sur la sécurité des données RH (hébergement européen)
- Rédaction d'un guide de livraison professionnel

## 🏆 Résultats

- ✅ **Système opérationnel pour 25 salariés** avec 4 automatisations actives
- ✅ **Conformité légale surveillée automatiquement** (repos 11h et 35h)
- ✅ **Zéro saisie manuelle côté RH** — tout est centralisé et calculé
- ✅ **Dashboard temps réel pour la direction**
- ✅ **Coût zéro en outils** (100% gratuit : Google + n8n auto-hébergé)
- ✅ **Guide de livraison complet** pour autonomie de la cliente

---

Un projet de bout en bout qui transforme un processus RH manuel et fragile en un système automatisé, conforme et évolutif.
