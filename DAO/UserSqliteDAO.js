import { UserDAO } from "./UserDAO.js";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

/**
 * User DAO for SQLite.
 * @extends UserDAO
 * @class
 */
export class UserSqliteDAO extends UserDAO {

    /**
     * Creates a new user DAO for SQLite.
     * @constructor
     * @returns {void}
     */
    constructor() {
        super();

        this.db = open({
            filename: './BDD/database.sqlite',
            driver: sqlite3.Database
        });
    }

    /**
     * Retrieves users based on the specified filters.
     * @param {object} filters - The filters to apply when retrieving users.
     * @returns {Array} - An array containing the users that match the specified filters.
     */
    async getUsers(filters) {
        const db_ = await this.db;
        let sql = 'SELECT * FROM User';
        let sqlparams = [];
        let filtersparam = [];

        if (filters.id) {
            sqlparams.push('id = ?');
            filtersparam.push(filters.id);
        }

        if (filters.username) {
            sqlparams.push('username = ?');
            filtersparam.push(filters.username);
        }

        if (filters.password) {
            sqlparams.push('password = ?');
            filtersparam.push(filters.password);
        }

        if (sqlparams.length > 0)
            sql += ' WHERE ' + sqlparams.join(' AND ');

        return await db_.all(sql, filtersparam);
    }

    /**
     * Creates a new user.
     * @param {object} user - The user information to create.
     * @returns {object} - The created user.
     */
    async updateUser(id, user) {
        const db_ = await this.db;
        const sql = 'UPDATE User SET username = ?, password = ? WHERE id = ?';
        const params = [user.username, user.password, id];

        return await db_.run(sql, params);
    }

    /**
     * Deletes an existing user.
     * @param {string} id - The identifier of the user to delete.
     * @returns {object} - The deleted user.
     */
    async deleteUser(id) {
        const db_ = await this.db;
        const sql = 'DELETE FROM User WHERE id = ?';

        return await db_.run(sql, id);
    }

    /**
     * Creates a new user.
     * @param {object} user - The user information to create.
     * @returns {object} - The created user.
     */
    async createUser(user) {
        const db_ = await this.db;
        const sql = 'INSERT INTO User (username, password) VALUES (?, ?)';
        const params = [user.username, user.password];

        return await db_.run(sql, params);
    }
}