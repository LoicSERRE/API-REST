import { TournamentDAO } from "./TournamentDAO.js";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

/**
 * Tournament DAO for SQLite.
 * @extends TournamentDAO
 * @class
 */
export class TournamentSqliteDAO extends TournamentDAO {

    /**
     * Creates a new tournament DAO for SQLite.
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
     * Retrieves tournaments based on the specified filters.
     * @param {object} filters - The filters to apply when retrieving tournaments.
     * @returns {Array} - An array containing the tournaments that match the specified filters.
     */
    async getTournaments(filters) {
        const db_ = await this.db;
        let sql = 'SELECT * FROM Tournament';
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

        if (filters.startDate) {
            sqlparams.push('startDate = ?');
            filtersparam.push(filters.startDate);
        }

        if (filters.endDate) {
            sqlparams.push('endDate = ?');
            filtersparam.push(filters.endDate);
        }

        if (filters.game) {
            sqlparams.push('game = ?');
            filtersparam.push(filters.game);
        }

        if (filters.place) {
            sqlparams.push('place = ?');
            filtersparam.push(filters.place);
        }

        if (filters.winningPrice) {
            sqlparams.push('winningPrice = ?');
            filtersparam.push(filters.winningPrice);
        }

        if (sqlparams.length > 0)
            sql += ' WHERE ' + sqlparams.join(' AND ');

        return await db_.all(sql, filtersparam);
    }

    /**
     * Creates a new tournament.
     * @param {object} tournament - The tournament information to create.
     * @returns {object} - The created tournament. 
     */
    async createTournament(tournament) {
        const db_ = await this.db;
        let sql = 'INSERT INTO Tournament (name, startDate, endDate, game, place, winningPrice) VALUES (?, ?, ?, ?, ?, ?)';
        let sqlparams = [tournament.name, tournament.startDate, tournament.endDate, tournament.game, tournament.place, tournament.winningPrice];

        return await db_.run(sql, sqlparams);
    }

    /**
     * Updates the information of an existing tournament.
     * @param {string} id - The identifier of the tournament to update.
     * @param {object} tournament - The new tournament information.
     * @returns {object} - The updated tournament.
     */
    async updateTournament(id, tournament) {
        const db_ = await this.db;
        let sql = 'UPDATE Tournament SET ';
        let sqlparams = [];
        let sqlparams2 = [];

        if (tournament.name) {
            sqlparams.push('name = ?');
            sqlparams2.push(tournament.name);
        }

        if (tournament.startDate) {
            sqlparams.push('startDate = ?');
            sqlparams2.push(tournament.startDate);
        }

        if (tournament.endDate) {
            sqlparams.push('endDate = ?');
            sqlparams2.push(tournament.endDate);
        }

        if (tournament.game) {
            sqlparams.push('game = ?');
            sqlparams2.push(tournament.game);
        }

        if (tournament.place) {
            sqlparams.push('place = ?');
            sqlparams2.push(tournament.place);
        }

        if (tournament.winningPrice) {
            sqlparams.push('winningPrice = ?');
            sqlparams2.push(tournament.winningPrice);
        }

        if (sqlparams.length > 0) {
            sql += sqlparams.join(', ') + ' WHERE id = ?';
            sqlparams2.push(id);
        }

        return await db_.run(sql, sqlparams2);
    }

    /**
     * Deletes a tournament.
     * @param {string} id - The identifier of the tournament to delete.
     * @returns {object} - The deleted tournament.
     */
    async deleteTournament(id) {
        const db_ = await this.db;
        let sql = 'DELETE FROM Tournament WHERE id = ?';
        let sqlparams = [id];

        return await db_.run(sql, sqlparams);
    }
}