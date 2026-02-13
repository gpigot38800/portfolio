## Présentation

📊 **DealPulse — Un outil de pilotage commercial complet pour visualiser, analyser et projeter ses performances de vente**

Ce projet part d'un constat fréquent chez les équipes commerciales : les données existent dans des fichiers CSV, Notion ou Airtable, mais il manque un outil simple et visuel pour les exploiter. J'ai voulu créer un dashboard complet qui transforme des données brutes en indicateurs actionnables — avec filtres avancés, analyses graphiques et même un simulateur de projection — le tout piloté intégralement par Claude Code, sans écrire une seule ligne de code moi-même.

- **Outils** : Claude Code + Vercel
- **IA utilisée** : Claude Code (développement assisté par IA)
- **Durée du projet** : 3 jours
- **Période de réalisation** : Février 2026

## 🎯 Objectif du Projet

Concevoir et déployer un dashboard CRM permettant aux responsables commerciaux de suivre leur pipeline en temps réel, analyser les performances par secteur et par commercial, et simuler l'impact de variations sur leur chiffre d'affaires.

## ⚡ Fonctionnalités Clés

### KPIs Flash

- Vue synthétique des indicateurs essentiels : Pipeline Pondéré, Panier Moyen, Nombre de Deals, Deals Gagnés avec taux de conversion, Deals Froids
- Mise à jour en temps réel à chaque modification des données

### Liste des Deals avec filtres avancés

- Tableau complet de tous les deals avec client, statut (prospect, qualifié, négociation, gagné), montant, secteur, commercial et échéance
- Système de filtres multi-critères : par statut, par secteur (20+ secteurs), par commercial, par dates d'échéance et par recherche libre
- Actions rapides : modifier ou supprimer un deal, créer un nouveau deal

### Analyse par Secteur

- Graphique du montant total par secteur pour identifier les marchés les plus porteurs
- Top 5 des paniers moyens par secteur pour cibler les secteurs à plus forte valeur

### Performance Commerciale

- Graphique comparatif Deals & Taux de Conversion par commercial
- Récapitulatif détaillé par commercial : nombre de deals, montant total, pipeline pondéré, panier moyen
- Indicateur de vitesse de vente : temps moyen du passage Prospect → Gagné

### Simulateur What-If

- Outil interactif pour simuler l'impact d'une variation du panier moyen sur le pipeline
- Curseur de variation en pourcentage avec calcul en temps réel du nouveau panier moyen, pipeline projeté et différence
- Permet d'anticiper des scénarios commerciaux sans modifier les données réelles

### Import multi-sources

- Import par glisser-déposer de fichiers CSV
- Compatibilité avec les exports Notion et Airtable
- Intégration rapide des données existantes sans ressaisie

## 🔧 Processus de Développement avec Claude Code

### Phase 1 : Cadrage et PRD

- Rédaction d'un Product Requirements Document détaillé décrivant les KPIs, les filtres, les graphiques et le simulateur attendus
- Définition de la structure des données et des règles de calcul (pipeline pondéré, taux de conversion, vitesse de vente)

### Phase 2 : MVP structuré

- Plan de développement séquentiel confié à Claude Code : d'abord les KPIs, puis la liste des deals avec filtres, les graphiques d'analyse, la performance commerciale, le simulateur et enfin l'import
- Instructions précises à chaque étape avec critères de validation

### Phase 3 : Développement itératif

- Génération complète de l'application par Claude Code
- Tests systématiques de chaque fonctionnalité : filtres, calculs, graphiques, simulateur
- Corrections et ajustements par itérations successives
- Déploiement sur Vercel

## 🧰 Stack & Outils

- **Claude Code** : assistant IA pour le développement complet de l'application
- **Vercel** : hébergement et déploiement
- **Méthodologie** : PRD → MVP → développement itératif → tests continus

## 💡 Compétences Développées

### Gestion de projet IA

- Rédaction d'un PRD adapté à un outil de pilotage commercial
- Traduction de besoins métier complexes (calculs de pipeline, taux de conversion, simulateur) en instructions claires pour Claude Code
- Découpage rigoureux en étapes séquentielles testables

### Pilotage de Claude Code

- Direction d'un assistant de développement IA pour produire une application complète avec graphiques interactifs et filtres dynamiques
- Tests méthodiques et identification des incohérences de calcul
- Itérations pour affiner le rendu visuel et la fiabilité des données

### Compréhension métier

- Maîtrise des KPIs commerciaux : pipeline pondéré, panier moyen, taux de conversion, vitesse de vente
- Conception d'un simulateur de projection financière
- Structuration de filtres pertinents pour un usage quotidien par une équipe commerciale

## 🏆 Résultats

- ✅ **Dashboard CRM complet déployé en production en 3 jours**
- ✅ **5 KPIs clés avec mise à jour temps réel**
- ✅ **Filtres multi-critères avancés (statut, secteur, commercial, dates, recherche)**
- ✅ **Graphiques d'analyse par secteur et par commercial**
- ✅ **Simulateur What-If interactif pour projeter des scénarios commerciaux**
- ✅ **Import multi-sources : CSV, Notion, Airtable**
- ✅ **Développement complet par orchestration de Claude Code**

---

Un projet qui démontre la capacité à concevoir un outil de pilotage commercial professionnel en traduisant des besoins métier complexes en instructions claires pour un assistant IA, sans aucune compétence en programmation.

## 🚀 Tester l'application

Découvrez DealPulse en action et explorez toutes ses fonctionnalités :

[**→ Accéder à l'application**](https://test-crm-flame.vercel.app/)
