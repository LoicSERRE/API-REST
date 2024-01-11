# R5.L.02 Développement services web / Loïc SERRE

## Description

Ce projet constitue le TP1 pour le développement de services web.

## Configuration

- **Version Node.js:** 18.17.1

- **Base de données:** SQLite3

- **Dépendances principales:**

  - Express.js pour la gestion des routes
  - JWT pour l'authentification
  - Bcrypt pour le hachage des mots de passe

## Utilisation

Pour lancer le projet il suffit de faire : 

- npm install
- npm run start

Pour lancer les jeux de test il faut faire :

- npm install
- npm test

Et pour la collection Postman il suffit de l'importer à partir du fichier TP1.postman_collection.json

Un mécanisme de Refresh Token est mis en place pour gérer l'authentification de manière sécurisée.

## Endpoints

### Players

- **Get Players:** `GET http://localhost:3000/players`
- **Update Player:** `PATCH http://localhost:3000/players/1`
- **Add Player:** `POST http://localhost:3000/players`
- **Delete Player:** `DELETE http://localhost:3000/players/50`

### Tournaments

- **Get Tournaments:** `GET http://localhost:3000/tournaments`
- **Update Tournament:** `PATCH http://localhost:3000/tournaments/1`
- **Add Tournament:** `POST http://localhost:3000/tournaments`
- **Delete Tournament:** `DELETE http://localhost:3000/tournaments/1`

### PlayerTournament

- **Get PlayerTournament:** `GET http://localhost:3000/playertournaments`
- **Update PlayerTournament:** `PATCH http://localhost:3000/playertournaments/1`
- **Add PlayerTournament:** `POST http://localhost:3000/playertournaments`
- **Delete PlayerTournament:** `DELETE http://localhost:3000/playertournaments/1373`

### Users

- **Get Users:** `GET http://localhost:3000/users`
- **Update User:** `PATCH http://localhost:3000/users/2`
- **Add User:** `POST http://localhost:3000/users`
- **Delete User:** `DELETE http://localhost:3000/users/4`

### Login / Disconnect

- **Send Login:** `POST http://localhost:3000/login`
- **Disconnect:** `POST http://localhost:3000/disconnect`
