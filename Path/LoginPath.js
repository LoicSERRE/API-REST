import express from 'express';
import Jwt from 'jsonwebtoken';
import UsersServices from '../Services/UsersServices.js';
import bcrypt from "bcrypt";

/**
 * Router for disconnecting a path.
 * @type {express.Router}
 */
const loginPath = express.Router();

/**
 * Post a login.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
loginPath.post('/', async (req, res) => {
    // Vérifiez que le nom d'utilisateur et le mot de passe ont été fournis
    if (!req.body.username || !req.body.password) {
        return res.status(400).send('Nom d\'utilisateur et mot de passe requis');
    }

    // Récupère l'utilisateur avec le nom d'utilisateur donné
    let user = [];
    try {
        user = await UsersServices.getUser({ username: req.body.username });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }

    // Vérifiez le mot de passe chiffré de la base de données avec celui fourni par l'utilisateur
    if (user.length > 0 && bcrypt.compareSync(req.body.password, user[0].password)) {
        // Supprimez le mot de passe de l'objet utilisateur
        delete user[0].password;
    } 
    else {
        return res.status(401).send('Nom d\'utilisateur ou mot de passe incorrect');
    }

    // Créez un token avec une expiration de 100 ans
    /**
     * JSON Web Token representing the user's authentication token.
     * @typedef {string} Token
     */
    const token = Jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });

    // Renvoyez le token à l'utilisateur
    res.send({ token });
});

export default loginPath;
