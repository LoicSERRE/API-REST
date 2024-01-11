import PlayerTournamentServices from "../Services/PlayerTournamentServices.js";

/**
 * Controller class for managing player tournaments.
 * @class
 * @classdesc This class manages the player tournaments.
 */
class PlayerTournamentsController {
    constructor() {}

    /**
     * Get player tournaments.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Promise<void>} - A promise that resolves when the player tournaments are retrieved.
     */
    async getPlayerTournaments(req, res) {
        let playerTournaments = [];
        
        try{
            playerTournaments = await PlayerTournamentServices.getPlayerTournaments(req.query);
        }
        catch(err){
            res.status(500).json({ message: err.message });
        }

        if (playerTournaments.length > 0) {
            res.status(200).json(playerTournaments);
        } else {
            res.status(404).json({ message: "No playerTournaments found" });
        }
    }

    /**
     * Creates a new player tournament.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Promise<void>} - A promise that resolves when the player tournament is created.
     */
    createPlayerTournament(req, res) {
        const playerTournament = req.body;

        try {
            PlayerTournamentServices.createPlayerTournament(playerTournament);
            res.status(200).json({ message: "PlayerTournament created" });
        }
        catch(err) {
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * Updates an existing player tournament.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Promise<void>} - A promise that resolves when the player tournament is updated.
     */
    updatePlayerTournament(req, res) {
        const id = req.params.id;
        const playerTournament = req.body;

        try {
            PlayerTournamentServices.updatePlayerTournament(id, playerTournament);
            res.status(200).json({ message: "PlayerTournament updated" });
        }
        catch(err) {
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * Deletes a player tournament.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Promise<void>} - A promise that resolves when the player tournament is deleted.
     */
    deletePlayerTournament(req, res) {
        const id = req.params.id;

        try {
            PlayerTournamentServices.deletePlayerTournament(id);
            res.status(200).json({ message: "PlayerTournament deleted" });
        }
        catch(err) {
            res.status(500).json({ message: err.message });
        }
    }
}

export default new PlayerTournamentsController();