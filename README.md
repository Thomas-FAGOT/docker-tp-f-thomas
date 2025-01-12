# Projet Docker
## Table des matières

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

Pour tester les log en prod : 
1. lancer la commande en prod dans un terminal (terminal 1)
2. Ouvrir un nouveau terminal (terminal 2) et faire la commande suivante : docker exec -it <backend-container-id> sh
3. ouvrir un nouveau terminal (terminal 3) et executer cette requête : curl http://localhost:3000/test-error
4. Dans le terminal 2 afficher les log du fichier error.log avec cette commande : cat logs/error.log
