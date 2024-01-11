import PlayersServices from "../Services/PlayersServices.js";

/**
 * Controller for managing players.
 * @class
 * @classdesc This class manages the players.
 */
class PlayersController {
    constructor() {}
    
    /**
     * Get players.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Promise<void>} - A promise that resolves when the players are retrieved.
     */
    async getPlayers(req, res) {
        let players = [];
        
        try{
            players = await PlayersServices.getPlayers(req.query);
        }
        catch(err){
            res.status(500).json({ message: err.message });
        }

        if (players.length > 0) {
            res.status(200).json(players);
        } else {
            res.status(404).json({ message: "No players found" });
        }
    }

    /**
     * Create a new player.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Promise<void>} - A promise that resolves when the player is created.
     */
    createPlayer(req, res) {
        const player = req.body;

        try {
            PlayersServices.createPlayer(player);
            res.status(200).json({ message: "Player created" });
        }
        catch(err) {
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * Update a player.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Promise<void>} - A promise that resolves when the player is updated.
     */
    updatePlayer(req, res) {
        const id = req.params.id;
        const player = req.body;

        try {
            PlayersServices.updatePlayer(id, player);
            res.status(200).json({ message: "Player updated" });
        }
        catch(err) {
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * Delete a player.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Promise<void>} - A promise that resolves when the player is deleted.
     */
    deletePlayer(req, res) {
        const id = req.params.id;

        try {
            PlayersServices.deletePlayer(id);
            res.status(200).json({ message: "Player deleted" });
        }
        catch(err) {
            res.status(500).json({ message: err.message });
        }
    }
}

export default new PlayersController();