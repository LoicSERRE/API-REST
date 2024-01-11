import { PlayerTournamentDAO } from "./PlayerTournamentDAO.js";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

/**
 * PlayerTournament DAO for SQLite.
 * @extends PlayerTournamentDAO
 * @class
 */
export class PlayerTournamentSqliteDAO extends PlayerTournamentDAO {
    constructor() {
        super();

        this.db = open({
            filename: './BDD/database.sqlite',
            driver: sqlite3.Database
        });
    }

    /**
     * Retrieves playerTournaments based on the specified filters.
     * @param {object} filters - The filters to apply when retrieving playerTournaments.
     * @returns {Array} - An array containing the playerTournaments that match the specified filters.
     */
    async getPlayerTournaments(filters) {
        const db_ = await this.db;
        let sql = 'SELECT * FROM PlayerTournament';
        let sqlparams = [];
        let filtersparam = [];

        if (filters.id) {
            sqlparams.push('id = ?');
            filtersparam.push(filters.id);
        }

        if (filters.player_id) {
            sqlparams.push('player_id = ?');
            filtersparam.push(filters.playerId);
        }

        if (filters.tournament_id) {
            sqlparams.push('tournament_id = ?');
            filtersparam.push(filters.tournamentId);
        }

        if (sqlparams.length > 0)
            sql += ' WHERE ' + sqlparams.join(' AND ');

        return await db_.all(sql, filtersparam);
    }

    /**
     * Creates a new playerTournament.
     * @param {object} playerTournament - The playerTournament information to create.
     * @returns {object} - The created playerTournament.
     */
    async createPlayerTournament(playerTournament) {
        const db_ = await this.db;
        let sql = 'INSERT INTO PlayerTournament (player_id, tournament_id) VALUES (?, ?)';
        let sqlparams = [playerTournament.player_id, playerTournament.tournament_id];

        return await db_.run(sql, sqlparams);
    }

    /**
     * Updates the information of an existing playerTournament.
     * @param {string} id - The identifier of the playerTournament to update.
     * @param {object} playerTournament - The new playerTournament information.
     * @returns {object} - The updated playerTournament.
     */
    async updatePlayerTournament(id, playerTournament) {
        const db_ = await this.db;
        let sql = 'UPDATE PlayerTournament SET ';
        let sqlparams = [];
        let sqlparams2 = [];

        if (playerTournament.player_id) {
            sqlparams.push('player_id = ?');
            sqlparams2.push(playerTournament.player_id);
        }

        if (playerTournament.tournament_id) {
            sqlparams.push('tournament_id = ?');
            sqlparams2.push(playerTournament.tournament_id);
        }

        if (sqlparams.length > 0)
            sql += sqlparams.join(', ');

        sql += ' WHERE id = ?';
        sqlparams2.push(id);

        return await db_.run(sql, sqlparams2);
    }

    /**
     * Deletes an existing playerTournament.
     * @param {string} id - The identifier of the playerTournament to delete.
     * @returns {object} - The deleted playerTournament.
     */
    async deletePlayerTournament(id) {
        const db_ = await this.db;
        let sql = 'DELETE FROM PlayerTournament WHERE id = ?';

        return await db_.run(sql, id);
    }
}

