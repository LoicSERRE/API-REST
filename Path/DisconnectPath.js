import express from 'express';
import Jwt from 'jsonwebtoken';
import UsersServices from '../Services/UsersServices.js';
import bcrypt from "bcrypt";

/**
 * Router for disconnecting a path.
 * @type {express.Router}
 */
const disconnectPath = express.Router();

// Supprime le token de l'utilisateur
disconnectPath.post('/', async (req, res) => {
    // Récupère le token dans le header et récupère l'ID de l'utilisateur
    /**
     * The authorization token.
     * @type {string}
     */
    const token = req.headers['authorization'];

    // Vérifie le token
    Jwt.verify(token, 'secretKey', async (err, decoded) => {

        // Ajoute le token à la liste des tokens révoqués
        await UsersServices.addRevokedToken(token);

        // Renvoie une réponse 200
        res.status(200).send('Token supprimé.');
    });
});

export default disconnectPath;