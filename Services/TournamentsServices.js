import { DAOSqliteFactory } from "../Factory/DAOSqliteFactory.js";

const Factory = new DAOSqliteFactory();
const tournamentDAO = Factory.createTournamentDAO();

/**
 * Represents a service for handling tournament requests.
 */
const TournamentsServices = {

    /**
     * Get tournaments.
     * @param {Object} filters - The filters to apply to the query.
     * @returns {Promise<Array>} - A promise that resolves to an array of tournaments. 
     */
    getTournaments: async (filters) => {
        return await tournamentDAO.getTournaments(filters);
    },

    /**
     * Update an existing tournament.
     * @param {number} id - The ID of the tournament to update.
     * @param {Object} tournament - The updated tournament data.
     * @returns {Promise<void>} - A promise that resolves when the tournament is updated.
     */
    updateTournament: async (id, tournament) => {
        return await tournamentDAO.updateTournament(id, tournament);
    },

    /**
     * Delete a tournament.
     * @param {number} id - The ID of the tournament to delete.
     * @returns {Promise<void>} - A promise that resolves when the tournament is deleted.
     */
    deleteTournament: async (id) => {
        return await tournamentDAO.deleteTournament(id);
    },

    /**
     * Create a new tournament.
     * @param {Object} tournament - The tournament to create.
     * @returns {Promise<void>} - A promise that resolves when the tournament is created.
     */
    createTournament: async (tournament) => {
        return await tournamentDAO.createTournament(tournament);
    }
}

export default TournamentsServices;