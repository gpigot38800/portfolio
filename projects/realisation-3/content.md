## Présentation

🏥 **NightWatch — Un outil concret de prévention des risques pour le personnel hospitalier de nuit**

Ce projet est né d'un vrai besoin terrain : les établissements de santé manquent d'outils simples pour suivre la fatigue de leurs équipes de nuit et anticiper les risques liés au manque de repos. J'ai voulu créer une application complète qui centralise le planning, calcule automatiquement les indicateurs de fatigue et alerte en cas de violation du Code du Travail — le tout sans écrire une seule ligne de code moi-même, en utilisant Claude Code comme assistant de développement.

- **Outils** : Claude Code + Vercel + Supabase
- **IA utilisée** : Claude Code (développement assisté par IA)
- **Durée du projet** : 4 jours
- **Période de réalisation** : Février 2026

## 🎯 Objectif du Projet

Concevoir et déployer une application web complète permettant aux cadres de santé et responsables RH de visualiser en temps réel l'état de fatigue de leurs équipes, détecter les violations réglementaires et prendre des décisions éclairées sur la gestion des plannings.

## ⚡ Fonctionnalités Clés

### Tableau de bord intelligent

- Vue synthétique avec indicateurs clés : nombre total d'employés, score de fatigue moyen, alertes actives, effectifs en shift de nuit, violations du Code du Travail
- Détail des violations réglementaires avec employé, service, type et sévérité
- Résumé par service avec moyenne de déficit de sommeil et statut d'alerte
- Graphiques visuels : déficit de sommeil par employé et répartition des shifts (jour/soir/nuit)

### Vue d'ensemble des employés

- Tableau complet par employé avec service, statut (Alerte/Normal), déficit de sommeil, taux de récupération et nombre de nuits travaillées
- Identification rapide des profils à risque

### Planning hebdomadaire

- Vue calendaire par semaine avec tous les employés organisés par service (Urgences, Réanimation, Cardiologie)
- Codes couleur par type de shift (Matin, Soir, Nuit, Repos, Congé, Formation...)
- Indicateurs visuels de points de vigilance directement sur le planning

### Import CSV intelligent

- Processus guidé en 7 étapes : Fichier → Analyse → Colonnes → Employés → Codes → Aperçu → Import
- Glisser-déposer de fichiers CSV ou TXT
- Analyse et mapping automatique des données avant import

### Paramètres personnalisables

- Gestion complète des codes vacation : Matin, Soir, Nuit, Journée, Jour Long (12h), Nuit Longue (12h), Repos, Congé Annuel, RTT, Maladie, Formation, Astreinte...
- Configuration des horaires de début/fin, durée, pause et statut travail pour chaque code
- Possibilité d'ajouter, modifier ou supprimer des codes pour s'adapter à chaque établissement

## 🔧 Processus de Développement avec Claude Code

### Phase 1 : Cadrage et PRD

- Rédaction d'un Product Requirements Document (PRD) détaillé décrivant toutes les fonctionnalités attendues, les règles métier (Code du Travail, calcul de fatigue) et l'architecture souhaitée
- Définition des user stories et des critères d'acceptation

### Phase 2 : MVP structuré

- Création d'un plan de développement (MVP) étape par étape, à suivre à la lettre par Claude Code
- Instructions claires et séquentielles pour chaque fonctionnalité : d'abord la base de données, puis le tableau de bord, le planning, l'import CSV et les paramètres

### Phase 3 : Développement itératif

- Utilisation de Claude Code pour générer l'application complète
- Tests systématiques de chaque fonctionnalité au fur et à mesure du développement
- Corrections et ajustements par itérations successives jusqu'à obtenir le résultat attendu
- Déploiement sur Vercel avec base de données Supabase

## 🧰 Stack & Outils

- **Claude Code** : assistant IA pour le développement complet de l'application
- **Vercel** : hébergement et déploiement
- **Supabase** : base de données et authentification
- **Méthodologie** : PRD → MVP → développement itératif → tests continus

## 💡 Compétences Développées

### Gestion de projet IA

- Rédaction d'un PRD complet et structuré pour guider un assistant IA
- Découpage d'un projet complexe en MVP avec étapes séquentielles
- Formulation d'instructions claires et précises pour obtenir le résultat attendu

### Pilotage de Claude Code

- Capacité à diriger un outil de développement IA sans savoir coder
- Tests méthodiques et identification des bugs à chaque étape
- Itérations successives pour affiner le produit final

### Compréhension métier

- Connaissance des règles du Code du Travail sur le travail de nuit
- Modélisation d'un calcul de fatigue basé sur des critères réels
- Adaptation de l'outil aux contraintes spécifiques des établissements de santé

## 🏆 Résultats

- ✅ **Application web complète déployée en production en 4 jours**
- ✅ **Tableau de bord temps réel avec alertes et violations réglementaires**
- ✅ **Planning interactif par service avec codes couleur**
- ✅ **Import CSV guidé en 7 étapes pour une prise en main immédiate**
- ✅ **Paramètres personnalisables pour s'adapter à tout établissement**
- ✅ **Zéro ligne de code écrite manuellement — 100% piloté par IA**

---

Un projet qui démontre qu'il est possible de concevoir et déployer une application web professionnelle répondant à un vrai besoin métier, en pilotant un assistant IA avec une méthodologie rigoureuse, sans compétences en programmation.

## 🚀 Tester l'application

Découvrez NightWatch en action et explorez toutes ses fonctionnalités :

[**→ Accéder à l'application**](https://app-sommeil.vercel.app/)
