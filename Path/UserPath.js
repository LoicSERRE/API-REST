import express from 'express';
import UsersController from '../Controller/UsersController.js';

/**
 * Router for handling user paths.
 * @type {express.Router}
 */
const usersPath = express.Router();

/**
 * Get users.
 * @param {Object} req - The request object.
 */
usersPath.get('/', UsersController.getUser);

/**
 * Create a new user.
 * @param {Object} req - The request object.
 */
usersPath.post('/', UsersController.createUser);

/**
 * Update an existing user.
 * @param {Object} req - The request object.
 */
usersPath.patch('/:id', UsersController.updateUser);

/**
 * Delete a user by ID.
 * @param {Object} req - The request object.
 */
usersPath.delete('/:id', UsersController.deleteUser);

export default usersPath;