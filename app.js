import express from 'express';
import playersPath from './Path/PlayerPath.js';
import tournamentsPath from './Path/TournamentPath.js';
import playerTournamentPath from './Path/PlayerTournamentPath.js';
import usersPath from './Path/UserPath.js';
import loginPath from './Path/LoginPath.js';
import disconnectPath from './Path/DisconnectPath.js';
import Jwt from 'jsonwebtoken';
import UsersServices from './Services/UsersServices.js';
import { createDatabase } from './BDD/bdd.js';

//await createDatabase();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/login", loginPath);
app.use("/disconnect", disconnectPath);
// Appliquer le middleware partour sur l'application pour autoriser uniquement les utilisateurs authentifiés
app.use(async (req, res, next) => {
    // Récupère le token dans le header
    /**
     * The authorization token.
     * @type {string}
     */
    const token = req.headers['authorization'];

    // Si le token n'est pas défini, renvoie une erreur 401
    if (!token) {
        return res.status(401).send('Accès refusé. Token manquant.');
    }

    const isRevoked = await UsersServices.isRevokedToken(token);
    
    // Si le token est dans la liste des tokens révoqués, renvoie une erreur 401
    if (isRevoked) {
        return res.status(401).send('Accès refusé. Token révoqué.');
    }
    
    // Vérifie le token
    Jwt.verify(token, 'secretKey', (err, decoded) => {
        // Si le token n'est pas valide, renvoie une erreur 401
        if (err) {
            return res.status(401).send('Accès refusé. Token invalide.');
        }

        // Si le token est valide, passe à la suite
        next();
    });
});

app.use("/players", playersPath);
app.use("/tournaments", tournamentsPath);
app.use("/playertournaments", playerTournamentPath);
app.use("/users", usersPath);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
