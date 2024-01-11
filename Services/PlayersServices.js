import { DAOSqliteFactory } from "../Factory/DAOSqliteFactory.js";

const Factory = new DAOSqliteFactory();
const playerDAO = Factory.createPlayerDAO();

/**
 * Represents a service for handling player requests.
 */
const PlayersServices = {
    
    /**
     * Get players.
     * @param {Object} filters - The filters to apply to the query.
     * @returns {Promise<Array>} - A promise that resolves to an array of players. 
     */
    getPlayers: async (filters) => {
        return await playerDAO.getPlayers(filters);
    },

    /**
     * Update an existing player.
     * @param {number} id - The ID of the player to update.
     * @param {Object} player - The updated player data.
     * @returns {Promise<void>} - A promise that resolves when the player is updated.
     */
    updatePlayer: async (id, player) => {
        return await playerDAO.updatePlayer(id, player);
    },

    /**
     * Delete a player.
     * @param {number} id - The ID of the player to delete.
     * @returns {Promise<void>} - A promise that resolves when the player is deleted.
     */
    deletePlayer: async (id) => {
        return await playerDAO.deletePlayer(id);
    },

    /**
     * Create a new player.
     * @param {Object} player - The player to create.
     * @returns {Promise<void>} - A promise that resolves when the player is created.
     */
    createPlayer: async (player) => {
        return await playerDAO.createPlayer(player);
    }
}

export default PlayersServices;
