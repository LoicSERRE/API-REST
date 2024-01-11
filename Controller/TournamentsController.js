import TournamentsServices from "../Services/TournamentsServices.js";

/**
 * Controller class for handling tournaments.
 * @class
 * @classdesc This class manages the tournaments.
 */
class TournamentsController {
    constructor() {}

    /**
     * Get tournaments.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Promise<void>} - A promise that resolves when the tournaments are retrieved.
     */
    async getTournaments(req, res) {
        let tournaments = [];
        
        try{
            tournaments = await TournamentsServices.getTournaments(req.query);
        }
        catch(err){
            res.status(500).json({ message: err.message });
        }

        if (tournaments.length > 0) {
            res.status(200).json(tournaments);
        } else {
            res.status(404).json({ message: "No tournaments found" });
        }
    }

    /**
     * Create a new tournament.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Promise<void>} - A promise that resolves when the tournament is created.
     */
    createTournament(req, res) {
        const tournament = req.body;

        try {
            TournamentsServices.createTournament(tournament);
            res.status(200).json({ message: "Tournament created" });
        }
        catch(err) {
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * Update an existing tournament.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Promise<void>} - A promise that resolves when the tournament is updated.
     */
    updateTournament(req, res) {
        const id = req.params.id;
        const tournament = req.body;

        try {
            TournamentsServices.updateTournament(id, tournament);
            res.status(200).json({ message: "Tournament updated" });
        }
        catch(err) {
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * Delete a tournament.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Promise<void>} - A promise that resolves when the tournament is deleted.
     */
    deleteTournament(req, res) {
        const id = req.params.id;

        try {
            TournamentsServices.deleteTournament(id);
            res.status(200).json({ message: "Tournament deleted" });
        }
        catch(err) {
            res.status(500).json({ message: err.message });
        }
    }
}

export default new TournamentsController();