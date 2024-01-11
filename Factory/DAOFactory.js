/**
 * Represents a factory for creating DAO objects.
 * @class
 */
export class DAOFactory{
    constructor() {}

    /**
     * Creates a PlayerDAO object.
     * @returns {PlayerDAO} The created PlayerDAO object.
     */
    createPlayerDAO() {
        throw new Error('Not implemented');
    }

    /**
     * Creates a TournamentDAO object.
     * @returns {TournamentDAO} The created TournamentDAO object.
     */
    createTournamentDAO() {
        throw new Error('Not implemented');
    }

    /**
     * Creates a PlayerTournamentDAO object.
     * @returns {PlayerTournamentDAO} The created PlayerTournamentDAO object.
     */
    createPlayerTournamentDAO() {
        throw new Error('Not implemented');
    }

    /**
     * Creates a UserDAO object.
     * @returns {UserDAO} The created UserDAO object.
     */
    createUserDAO() {
        throw new Error('Not implemented');
    }
}