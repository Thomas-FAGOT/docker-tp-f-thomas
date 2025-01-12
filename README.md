# Projet Docker

## Table des matières
- [Description](#description)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Commandes utiles](#commandes-utiles)
  - [Commandes pour lancer en environnement de développement](#commandes-pour-lancer-en-environnement-de-développement)
  - [Commandes pour build l'image en environnement de production](#commandes-pour-build-limage-en-environnement-de-production)
  - [Commandes pour lancer en environnement de production](#commandes-pour-lancer-en-environnement-de-production)
  - [Commandes pour tester les logs en production](#commandes-pour-tester-les-logs-en-production)
  - [Commandes pour tester l'envoi d'email en développement](#commandes-pour-tester-lenvoi-demail-en-développement)


## Description
Ce projet répond au tp final du modul Comprendre et développer avec Docker.
Pour cela il est constitué d'un projet web entièrement conteneurisé en vue d'être déployé sur une plateforme Docker.
Ce projet web comprend : 
- un service **client** pour le frontend
- un service **server** pour le backend
- une base de donnée relationnelle **database**
- des outils de développement (uniquement en environnement de développement) : 
    - **adminer** (SGBD) 
    - **nodemailer** (reception de mail)

## Prérequis
- Docker
- git

## Instalation
- Cloner le dépôt : 
```
git clone https://github.com/Thomas-FAGOT/docker-tp-f-thomas
cd tp-f-thomas
```

## Commande utiles
### Commandes pour lancer en envrionnement de développement
```
docker-compose -f docker-compose.yml -f docker-compose-dev.yml --env-file dev.env up --build
```

### Commandes pour build l'image en envrionnement de production
```
docker-compose -f docker-compose.yml --env-file prod.env build
```

### Commandes pour lancer en envrionnement de production
```
docker-compose -f docker-compose.yml -f docker-compose-prod.yml --env-file prod.env up --build
```

### Commandes pour tester les logs en production
1. lancer cette commande dans un premier terminal : 
```
docker-compose -f docker-compose.yml -f docker-compose-prod.yml --env-file prod.env up --build
```
2. Ouvrir un nouveau terminal (terminal 2) et faire les commandes suivantes : 
```
docker ps
docker exec -it <backend-container-id> sh
```
3. ouvrir un nouveau terminal (terminal 3) et executer cette requête : 
```
curl http://localhost:3000/test-error
```
4. Dans le terminal 2 afficher les log du fichier error.log avec cette commande : 
```
cat logs/error.log
```

### Commandes pour tester l'envoie d'email en developpement
1. lancer cette commande dans un premier terminal : 
```
docker-compose -f docker-compose.yml -f docker-compose-dev.yml --env-file dev.env up --build
```
2. lancer cette commande dans un autre terminal : 
```
curl http://localhost:3000/send-email
```
3. Rendez-vous sur cette page pour voir les emails envoyé : [mailHog](http://localhost:8025)