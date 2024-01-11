import UserServices from "../Services/UsersServices.js";
import bcrypt from "bcrypt";

/**
 * Controller for managing user operations.
 * @class
 * @classdesc This class manages the users.
 */
class UsersController {
    constructor() {}

    /**
     * Get a user by query parameters.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Promise<void>} - A promise that resolves when the user is retrieved.
     */
    async getUser(req, res) {
        let user = [];
        
        try{
            user = await UserServices.getUser(req.query);
        }
        catch(err){
            res.status(500).json({ message: err.message });
        }

        if (user.length > 0) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "No user found" });
        }
    }

    /**
     * Create a new user.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Promise<void>} - A promise that resolves when the user is created.
     */
    createUser(req, res) {
        const user = req.body;

        // Chiffrer le mot de passe
        const salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(user.password, salt);

        try {
            UserServices.createUser(user);
            res.status(200).json({ message: "User created" });
        }
        catch(err) {
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * Update an existing user.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Promise<void>} - A promise that resolves when the user is updated.
     */
    updateUser(req, res) {
        const id = req.params.id;
        const user = req.body;

        try {
            UserServices.updateUser(id, user);
            res.status(200).json({ message: "User updated" });
        }
        catch(err) {
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * Delete a user by ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Promise<void>} - A promise that resolves when the user is deleted.
     */
    deleteUser(req, res) {
        const id = req.params.id;

        try {
            UserServices.deleteUser(id);
            res.status(200).json({ message: "User deleted" });
        }
        catch(err) {
            res.status(500).json({ message: err.message });
        }
    }
}

export default new UsersController();