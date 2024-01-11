import { DAOSqliteFactory } from "../Factory/DAOSqliteFactory.js";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const db = await open({
    filename: './BDD/database.sqlite',
    driver: sqlite3.Database
});

const Factory = new DAOSqliteFactory();
const UserDAO = Factory.createUserDAO();

/**
 * Represents a service for handling user requests.
 */
const UsersServices = {

    /**
     * Get users.
     * @param {Object} filters - The filters to apply to the query.
     * @returns {Promise<Array>} - A promise that resolves to an array of users. 
     */
    getUser: async (filters) => {
        return await UserDAO.getUsers(filters);
    },

    /**
     * Update an existing user.
     * @param {number} id - The ID of the user to update.
     * @param {Object} user - The updated user data.
     * @returns {Promise<void>} - A promise that resolves when the user is updated.
     */
    updateUser: async (id, user) => {
        return await UserDAO.updateUser(id, user);
    },

    /**
     * Delete a user.
     * @param {number} id - The ID of the user to delete.
     * @returns {Promise<void>} - A promise that resolves when the user is deleted.
     */
    deleteUser: async (id) => {
        return await UserDAO.deleteUser(id);
    },

    /**
     * Create a new user.
     * @param {Object} user - The user to create.
     * @returns {Promise<void>} - A promise that resolves when the user is created.
     */
    createUser: async (user) => {
        return await UserDAO.createUser(user);
    },

    addRevokedToken: async (token) => {
        await db.exec(`INSERT INTO Blacklist (token) VALUES ('${token}')`);
    },

    isRevokedToken: async (token) => {
        // renvoie true ou false si le token est dans la liste des tokens révoqués
        return await db.get(`SELECT * FROM Blacklist WHERE token = '${token}'`);
    }
}

export default UsersServices;