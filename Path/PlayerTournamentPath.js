import express from 'express';
import PlayerTournamentsController from '../Controller/PlayerTournamentsController.js';

/**
 * Router for handling player tournament paths.
 * @type {express.Router}
 */
const playerTournamentPath = express.Router();

/**
 * Get player tournaments.
 * @param {Object} req - The request object.
 */
playerTournamentPath.get('/', PlayerTournamentsController.getPlayerTournaments);

/**
 * Create a new player tournament.
 * @param {Object} req - The request object.
 */
playerTournamentPath.post('/', PlayerTournamentsController.createPlayerTournament);

/**
 * Update an existing player tournament.
 * @param {Object} req - The request object.
 */
playerTournamentPath.patch('/:id', PlayerTournamentsController.updatePlayerTournament);

/**
 * Delete a player tournament by ID.
 * @param {Object} req - The request object.
 */
playerTournamentPath.delete('/:id', PlayerTournamentsController.deletePlayerTournament);

export default playerTournamentPath;