import express from 'express';
import TournamentsController from '../Controller/TournamentsController.js';

/**
 * Router for handling tournament paths.
 * @type {express.Router}
 */
const tournamentsPath = express.Router();

/**
 * Get tournaments.
 * @param {Object} req - The request object.
 */
tournamentsPath.get('/', TournamentsController.getTournaments);

/**
 * Create a new tournament.
 * @param {Object} req - The request object.
 */
tournamentsPath.post('/', TournamentsController.createTournament);

/**
 * Update an existing tournament.
 * @param {Object} req - The request object.
 */
tournamentsPath.patch('/:id', TournamentsController.updateTournament);

/**
 * Delete a tournament by ID.
 * @param {Object} req - The request object.
 */
tournamentsPath.delete('/:id', TournamentsController.deleteTournament);

export default tournamentsPath;