import { DAOSqliteFactory } from "../Factory/DAOSqliteFactory.js";

const Factory = new DAOSqliteFactory();
const playerTournamentDAO = Factory.createPlayerTournamentDAO();

/**
 * PlayerTournamentServices is responsible for handling player tournament operations.
 */
const PlayerTournamentServices = {
    /**
     * Get player tournaments.
     * @param {Object} filters - The filters to apply to the query.
     * @returns {Promise<Array>} - A promise that resolves to an array of player tournaments. 
     */
    getPlayerTournaments: async (filters) => {
        return await playerTournamentDAO.getPlayerTournaments(filters);
    },

    /**
     * Update an existing player tournament.
     * @param {number} id - The ID of the player tournament to update.
     * @param {Object} playerTournament - The updated player tournament data.
     * @returns {Promise<void>} - A promise that resolves when the player tournament is updated.
     */
    updatePlayerTournament: async (id, playerTournament) => {
        return await playerTournamentDAO.updatePlayerTournament(id, playerTournament);
    },

    /**
     * Delete a player tournament.
     * @param {number} id - The ID of the player tournament to delete.
     * @returns {Promise<void>} - A promise that resolves when the player tournament is deleted.
     */
    deletePlayerTournament: async (id) => {
        return await playerTournamentDAO.deletePlayerTournament(id);
    },

    /**
     * Create a new player tournament.
     * @param {Object} playerTournament - The player tournament to create.
     * @returns {Promise<void>} - A promise that resolves when the player tournament is created.
     */
    createPlayerTournament: async (playerTournament) => {
        return await playerTournamentDAO.createPlayerTournament(playerTournament);
    }
}

export default PlayerTournamentServices;