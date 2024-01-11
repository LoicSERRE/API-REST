import express from 'express';
import PlayersController from '../Controller/PlayersController.js';

/**
 * Router for handling player paths.
 * @type {express.Router}
 */
const playersPath = express.Router();

/**
 * Get players.
 * @param {Object} req - The request object.
 */
playersPath.get('/', PlayersController.getPlayers);

/**
 * Create a new player.
 * @param {Object} req - The request object.
 */
playersPath.post('/', PlayersController.createPlayer);

/**
 * Update an existing player.
 * @param {Object} req - The request object.
 */
playersPath.patch('/:id', PlayersController.updatePlayer);

/**
 * Delete a player by ID.
 * @param {Object} req - The request object.
 */
playersPath.delete('/:id', PlayersController.deletePlayer);

export default playersPath;