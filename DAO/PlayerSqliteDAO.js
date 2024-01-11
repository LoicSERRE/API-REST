import { PlayerDAO } from "./PlayerDAO.js";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

/**
 * Player DAO for SQLite.
 * @extends PlayerDAO
 * @class
 */
export class PlayerSqliteDAO extends PlayerDAO {
    
    /**
     * Creates a new player DAO for SQLite.
     * @constructor
     */
    constructor() {
        super();

        this.db = open({
            filename: './BDD/database.sqlite',
            driver: sqlite3.Database
        });
    }

    /**
     * Retrieves players based on the specified filters.
     * @param {object} filters - The filters to apply when retrieving players.
     * @returns {Array} - An array containing the players that match the specified filters.
     */
    async getPlayers(filters) {
        const db_ = await this.db;
        let sql = 'SELECT * FROM Player';
        let sqlparams = [];
        let filtersparam = [];

        if (filters.id) {
            sqlparams.push('id = ?');
            filtersparam.push(filters.id);
        }

        if (filters.name) {
            sqlparams.push('name = ?');
            filtersparam.push(filters.name);
        }

        if (filters.pseudo) {
            sqlparams.push('pseudo = ?');
            filtersparam.push(filters.pseudo);
        }

        if (filters.email) {
            sqlparams.push('email = ?');
            filtersparam.push(filters.email);
        }

        if (filters.mainGame) {
            sqlparams.push('mainGame = ?');
            filtersparam.push(filters.mainGame);
        }

        if (filters.score) {
            sqlparams.push('score = ?');
            filtersparam.push(filters.score);
        }

        if (sqlparams.length > 0)
            sql += ' WHERE ' + sqlparams.join(' AND ');

        return await db_.all(sql, filtersparam);
    }

    /**
     * Creates a new player.
     * @param {object} player - The player to create.
     * @returns {object} - The created player.
     */
    async createPlayer(player) {
        const db_ = await this.db;
        let sql = 'INSERT INTO Player (name, pseudo, email, mainGame, score) VALUES (?, ?, ?, ?, ?)';
        let sqlparams = [player.name, player.pseudo, player.email, player.mainGame, player.score];

        return await db_.run(sql, sqlparams);
    }

    /**
     * Updates an existing player.
     * @param {string} id - The id of the player to update.
     * @param {object} player - The new player information.
     * @returns {object} - The updated player.
     */
    async updatePlayer(id, player) {
        const db_ = await this.db;
        let sql = 'UPDATE Player SET ';
        let sqlparams = [];
        let sqlparams2 = [];

        if (player.name) {
            sqlparams.push('name = ?');
            sqlparams2.push(player.name);
        }

        if (player.pseudo) {
            sqlparams.push('pseudo = ?');
            sqlparams2.push(player.pseudo);
        }

        if (player.email) {
            sqlparams.push('email = ?');
            sqlparams2.push(player.email);
        }

        if (player.mainGame) {
            sqlparams.push('mainGame = ?');
            sqlparams2.push(player.mainGame);
        }

        if (player.score) {
            sqlparams.push('score = ?');
            sqlparams2.push(player.score);
        }

        if (sqlparams.length > 0)
            sql += sqlparams.join(', ');

        sql += ' WHERE id = ?';
        sqlparams2.push(id);

        return await db_.run(sql, sqlparams2);
    }

    /**
     * Deletes a player.
     * @param {string} id - The id of the player to delete.
     * @returns {object} - The deleted player.
     */
    async deletePlayer(id) {
        const db_ = await this.db;
        let sql = 'DELETE FROM Player WHERE id = ?';

        return await db_.run(sql, id);
    }
}