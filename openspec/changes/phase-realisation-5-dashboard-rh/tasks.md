# Tasks: phase-realisation-5-dashboard-rh

## 1. Préparation et structure

- [ ] 1.1 Créer le dossier `projects/dashboard-rh-automatise/`
- [ ] 1.2 Créer le dossier `public/projects/dashboard-rh-automatise/`
- [ ] 1.3 Vérifier que les 3 captures d'écran existent dans `Réalisations/Réalisation 5/`

## 2. Création du fichier meta.json

- [ ] 2.1 Créer le fichier `projects/dashboard-rh-automatise/meta.json`
- [ ] 2.2 Ajouter le champ `title` : "Dashboard RH - Suivi du Temps de Travail"
- [ ] 2.3 Ajouter le champ `slug` : "dashboard-rh-automatise"
- [ ] 2.4 Rédiger le champ `excerpt` (description courte du projet)
- [ ] 2.5 Ajouter le champ `tags` : ["Google Sheets", "n8n", "Automatisation", "No-Code", "RH", "Looker Studio"]
- [ ] 2.6 Ajouter le champ `date` : "2026-02"
- [ ] 2.7 Ajouter le champ `coverUrl` : "/projects/dashboard-rh-automatise/cover.png"
- [ ] 2.8 Valider que le JSON est valide et parsable

## 3. Création du fichier content.md - Section Présentation

- [ ] 3.1 Créer le fichier `projects/dashboard-rh-automatise/content.md`
- [ ] 3.2 Ajouter la section `## Présentation` avec emoji 📊
- [ ] 3.3 Ajouter le titre du projet en gras avec description complète
- [ ] 3.4 Mentionner les outils no-code (Google Forms, Sheets, n8n, Looker Studio)
- [ ] 3.5 Indiquer la durée et période de réalisation du projet

## 4. Création du fichier content.md - Section Objectif

- [ ] 4.1 Ajouter la section `## 🎯 Objectif du Projet`
- [ ] 4.2 Décrire l'objectif principal : remplacer le suivi manuel par un système centralisé
- [ ] 4.3 Mentionner les 25 salariés au forfait jours
- [ ] 4.4 Mentionner les alertes de conformité légale et rappels automatiques

## 5. Création du fichier content.md - Section Fonctionnalités

- [ ] 5.1 Ajouter la section `## ⚡ Fonctionnalités Clés`
- [ ] 5.2 Ajouter la sous-section `### Saisie automatisée` avec détails
- [ ] 5.3 Ajouter la sous-section `### Alertes et conformité légale` avec 4 types d'alertes
- [ ] 5.4 Ajouter la sous-section `### Dashboard RH centralisé` avec description

## 6. Création du fichier content.md - Section Architecture

- [ ] 6.1 Ajouter la section `## 🏗️ Architecture & Flux`
- [ ] 6.2 Ajouter la sous-section `### Entrée` (formulaire Google Forms)
- [ ] 6.3 Ajouter la sous-section `### Traitement` (Google Sheets + n8n + 4 workflows)
- [ ] 6.4 Ajouter la sous-section `### Sorties` (emails alertes + dashboard Looker Studio)

## 7. Création du fichier content.md - Section Processus

- [ ] 7.1 Ajouter la section `## 🔧 Processus de Développement`
- [ ] 7.2 Ajouter `### Phase 1 : Conception du socle` avec détails
- [ ] 7.3 Ajouter `### Phase 2 : Formulaire et intégrations` avec OAuth2 et APIs
- [ ] 7.4 Ajouter `### Phase 3 : Automatisations n8n` avec description des 4 workflows
- [ ] 7.5 Ajouter `### Phase 4 : Dashboard et livraison` avec Looker Studio et guide client

## 8. Création du fichier content.md - Section Stack

- [ ] 8.1 Ajouter la section `## 🧰 Stack & Paramètres`
- [ ] 8.2 Lister toutes les technologies : Google Forms, Sheets, n8n (VPS Hostinger), Gmail, Looker Studio, Google Cloud Console
- [ ] 8.3 Mentionner l'hébergement n8n sur VPS et l'écosystème 100% Google

## 9. Création du fichier content.md - Section Compétences

- [ ] 9.1 Ajouter la section `## 💡 Compétences Développées`
- [ ] 9.2 Ajouter la sous-section `### Technique` avec OAuth2, n8n workflows, formules Sheets, Looker Studio
- [ ] 9.3 Ajouter la sous-section `### Conseil & gestion de projet` avec analyse besoin, architecture, sécurité, livraison

## 10. Création du fichier content.md - Section Résultats

- [ ] 10.1 Ajouter la section `## 🏆 Résultats`
- [ ] 10.2 Ajouter ✅ Système opérationnel pour 25 salariés avec 4 automatisations actives
- [ ] 10.3 Ajouter ✅ Conformité légale surveillée automatiquement (11h et 35h)
- [ ] 10.4 Ajouter ✅ Zéro saisie manuelle côté RH
- [ ] 10.5 Ajouter ✅ Dashboard temps réel pour la direction
- [ ] 10.6 Ajouter ✅ Coût zéro en outils (100% gratuit)
- [ ] 10.7 Ajouter ✅ Guide de livraison complet pour autonomie cliente
- [ ] 10.8 Ajouter phrase de conclusion sur la transformation du processus RH

## 11. Copie et renommage des images

- [ ] 11.1 Copier `Réalisations/Réalisation 5/Capture d'écran 2026-02-16 205103.png` vers `public/projects/dashboard-rh-automatise/cover.png`
- [ ] 11.2 Copier `Réalisations/Réalisation 5/Capture d'écran 2026-02-16 211107.png` vers `public/projects/dashboard-rh-automatise/workflow.png`
- [ ] 11.3 Copier `Réalisations/Réalisation 5/Capture d'écran 2026-02-16 205123.png` vers `public/projects/dashboard-rh-automatise/dashboard.png`
- [ ] 11.4 Vérifier que les 3 images sont bien copiées et accessibles

## 12. Vérification Playwright - Page liste

- [ ] 12.1 Démarrer le serveur de développement `npm run dev` en arrière-plan
- [ ] 12.2 Naviguer vers http://localhost:3000/realisations avec Playwright
- [ ] 12.3 Prendre un snapshot de la page liste des réalisations
- [ ] 12.4 Vérifier que le projet "Dashboard RH - Suivi du Temps de Travail" apparaît dans la liste
- [ ] 12.5 Vérifier que l'image cover.png est affichée correctement
- [ ] 12.6 Vérifier que les tags sont visibles (Google Sheets, n8n, etc.)

## 13. Vérification Playwright - Page de détail

- [ ] 13.1 Naviguer vers http://localhost:3000/realisations/dashboard-rh-automatise avec Playwright
- [ ] 13.2 Prendre un snapshot de la page de détail
- [ ] 13.3 Vérifier que le titre "Dashboard RH - Suivi du Temps de Travail" est affiché avec le gradient
- [ ] 13.4 Vérifier que tous les badges de tags sont affichés
- [ ] 13.5 Vérifier que le contenu Markdown est rendu correctement avec toutes les sections
- [ ] 13.6 Vérifier que la galerie d'images (cover.png et workflow.png) est affichée dans la colonne de droite
- [ ] 13.7 Vérifier que les images sont cliquables et s'agrandissent
- [ ] 13.8 Prendre une capture d'écran finale : `phase-5-verification.png`

## 14. Finalisation et Git

- [ ] 14.1 Vérifier que le build Next.js fonctionne : `npm run build`
- [ ] 14.2 Créer un commit Git avec le message : "feat: Phase 5 - Ajouter réalisation Dashboard RH"
- [ ] 14.3 Ajouter le message détaillé du commit avec bullets points
- [ ] 14.4 Ajouter la ligne Co-Authored-By dans le commit
- [ ] 14.5 Pousser le commit sur GitHub : `git push origin main`
- [ ] 14.6 Vérifier que le push a réussi
- [ ] 14.7 Mettre à jour l'architecture.md si nécessaire (marquer Phase 5 complétée)
