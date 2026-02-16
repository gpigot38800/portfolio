# Spec: project-realisation-5

Contenu complet de la réalisation 5 (Dashboard RH Automatisé) avec métadonnées, markdown structuré et assets images.

## ADDED Requirements

### Requirement: Structure des fichiers du projet

Le système DOIT créer la structure de fichiers suivante pour le projet `dashboard-rh-automatise` :
- `projects/dashboard-rh-automatise/meta.json` : Métadonnées du projet
- `projects/dashboard-rh-automatise/content.md` : Contenu Markdown détaillé
- `public/projects/dashboard-rh-automatise/cover.png` : Image de couverture
- `public/projects/dashboard-rh-automatise/workflow.png` : Image du workflow technique
- `public/projects/dashboard-rh-automatise/dashboard.png` : Image du dashboard RH

#### Scenario: Création de la structure complète

- **WHEN** les fichiers sont créés dans les emplacements spécifiés
- **THEN** le système getProjects() détecte automatiquement le nouveau projet
- **THEN** le projet apparaît dans la liste des réalisations sur la page /realisations

### Requirement: Format du fichier meta.json

Le fichier `meta.json` DOIT contenir les champs suivants au format JSON valide :
- `title` (string) : "Dashboard RH - Suivi du Temps de Travail"
- `slug` (string) : "dashboard-rh-automatise"
- `excerpt` (string) : Description courte du projet (1-2 phrases)
- `tags` (array of strings) : Liste des technologies et domaines
- `date` (string) : Date au format "YYYY-MM"
- `coverUrl` (string) : Chemin vers l'image de couverture "/projects/dashboard-rh-automatise/cover.png"

#### Scenario: Validation du meta.json

- **WHEN** le fichier meta.json est lu par getProjects()
- **THEN** tous les champs obligatoires sont présents
- **THEN** le JSON est valide et parsable
- **THEN** le slug correspond au nom du dossier parent

#### Scenario: Tags du projet

- **WHEN** les tags sont définis dans meta.json
- **THEN** ils incluent "Google Sheets", "n8n", "Automatisation", "No-Code", "RH", "Looker Studio"
- **THEN** les tags sont cohérents avec les technologies utilisées dans le projet

### Requirement: Structure du fichier content.md

Le fichier `content.md` DOIT suivre la structure Markdown suivante avec des sections clairement identifiées :
- `## Présentation` : Introduction du projet avec emoji et description courte
- `## 🎯 Objectif du Projet` : But principal et contexte
- `## ⚡ Fonctionnalités Clés` : Liste des fonctionnalités principales
- `## 🏗️ Architecture & Flux` : Description du flux de données (Entrée → Traitement → Sortie)
- `## 🔧 Processus de Développement` : Phases de développement
- `## 🧰 Stack & Paramètres` : Technologies et outils utilisés
- `## 💡 Compétences Développées` : Compétences techniques et métier
- `## 🏆 Résultats` : Résultats obtenus avec métriques quantifiables

#### Scenario: Structure complète du contenu

- **WHEN** le content.md est créé avec toutes les sections requises
- **THEN** chaque section H2 (##) est présente dans l'ordre spécifié
- **THEN** le contenu est formaté en Markdown valide
- **THEN** les emojis sont utilisés pour améliorer la lisibilité

#### Scenario: Section Présentation

- **WHEN** la section Présentation est rédigée
- **THEN** elle commence par un emoji représentatif (📊 ou 🤖)
- **THEN** elle inclut le titre du projet en gras
- **THEN** elle contient une description en 2-3 paragraphes
- **THEN** elle mentionne les outils principaux, la durée et la période de réalisation

#### Scenario: Section Architecture & Flux

- **WHEN** la section Architecture & Flux est rédigée
- **THEN** elle décrit le flux en 3 parties : Entrée, Traitement, Sortie
- **THEN** chaque partie est clairement identifiée avec un H3 (###)
- **THEN** les technologies utilisées à chaque étape sont mentionnées

#### Scenario: Section Résultats

- **WHEN** la section Résultats est rédigée
- **THEN** elle contient des points avec checkmarks (✅)
- **THEN** chaque résultat est quantifiable ou mesurable
- **THEN** elle mentionne le nombre de salariés (25) et les automatisations actives (4)

### Requirement: Images du projet

Le système DOIT copier et renommer les 3 captures d'écran sources vers les emplacements cibles :
- Source `Réalisations/Réalisation 5/Capture d'écran 2026-02-16 205103.png` → Cible `public/projects/dashboard-rh-automatise/cover.png`
- Source `Réalisations/Réalisation 5/Capture d'écran 2026-02-16 211107.png` → Cible `public/projects/dashboard-rh-automatise/workflow.png`
- Source `Réalisations/Réalisation 5/Capture d'écran 2026-02-16 205123.png` → Cible `public/projects/dashboard-rh-automatise/dashboard.png`

#### Scenario: Copie des images sources

- **WHEN** les fichiers sources existent dans le dossier Réalisations/Réalisation 5/
- **THEN** ils sont copiés (pas déplacés) vers les emplacements cibles
- **THEN** ils sont renommés selon la convention (cover.png, workflow.png, dashboard.png)
- **THEN** les images conservent leur qualité et format PNG

#### Scenario: Validation des images

- **WHEN** les images sont copiées dans public/projects/dashboard-rh-automatise/
- **THEN** le fichier cover.png existe et est accessible via /projects/dashboard-rh-automatise/cover.png
- **THEN** le fichier workflow.png existe et est accessible via /projects/dashboard-rh-automatise/workflow.png
- **THEN** le fichier dashboard.png existe (utilisé pour référence future)

### Requirement: Contenu spécifique de la réalisation 5

Le contenu du project DOIT refléter fidèlement les informations fournies sur le Dashboard RH :
- **Titre** : "Dashboard RH - Suivi du Temps de Travail" ou "Système Automatisé de Suivi du Temps de Travail"
- **Objectif** : Remplacer le suivi manuel par un système centralisé pour 25 salariés au forfait jours
- **Technologies** : Google Forms, Google Sheets, n8n (auto-hébergé sur VPS), Looker Studio, Gmail, Google Cloud Console
- **Fonctionnalités** : Saisie automatisée, alertes conformité légale (11h repos, 35h hebdo), rappels automatiques, dashboard temps réel
- **Phases** : Conception du socle → Formulaire et intégrations → Automatisations n8n → Dashboard et livraison
- **Résultats** : Système opérationnel pour 25 salariés, conformité automatique, zéro saisie manuelle RH, coût zéro (outils gratuits)

#### Scenario: Présentation fidèle du projet

- **WHEN** le content.md est rédigé
- **THEN** il mentionne les 25 salariés au forfait jours
- **THEN** il décrit les 4 workflows automatisés n8n
- **THEN** il mentionne l'hébergement sur VPS Hostinger
- **THEN** il souligne le coût zéro et l'écosystème 100% Google + n8n auto-hébergé

#### Scenario: Conformité légale mise en avant

- **WHEN** les fonctionnalités sont décrites
- **THEN** les alertes de conformité légale sont mentionnées (11h repos quotidien, 35h hebdomadaires)
- **THEN** le système de rappels automatiques (1er et 6 du mois) est documenté
- **THEN** les alertes sur les soldes CP/RTT élevés sont expliquées

#### Scenario: Architecture technique détaillée

- **WHEN** la section Architecture & Flux est complétée
- **THEN** elle décrit le flux : Formulaire → Google Sheets → n8n → Emails + Dashboard
- **THEN** elle mentionne la centralisation des données dans Google Sheets
- **THEN** elle explique les 4 workflows n8n tournant en continu sur VPS
- **THEN** elle mentionne le dashboard Looker Studio mis à jour en temps réel
