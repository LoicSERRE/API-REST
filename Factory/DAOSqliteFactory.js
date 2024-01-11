import { DAOFactory } from "./DAOFactory.js";
import { PlayerSqliteDAO } from "../DAO/PlayerSqliteDAO.js";
import { TournamentSqliteDAO } from "../DAO/TournamentSqliteDAO.js";
import { PlayerTournamentSqliteDAO } from "../DAO/PlayerTournamentSqliteDAO.js";
import { UserSqliteDAO } from "../DAO/UserSqliteDAO.js";

/**
 * Represents a factory for creating SQLite DAO objects.
 * @extends DAOFactory
 */
export class DAOSqliteFactory extends DAOFactory {
    /**
     * Creates a new instance of DAOSqliteFactory.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Creates a new instance of PlayerSqliteDAO.
     * @returns {PlayerSqliteDAO} A new instance of PlayerSqliteDAO.
     */
    createPlayerDAO() {
        return new PlayerSqliteDAO();
    }

    /**
     * Creates a new instance of TournamentSqliteDAO.
     * @returns {TournamentSqliteDAO} A new instance of TournamentSqliteDAO.
     */
    createTournamentDAO() {
        return new TournamentSqliteDAO();
    }

    /**
     * Creates a new instance of PlayerTournamentSqliteDAO.
     * @returns {PlayerTournamentSqliteDAO} A new instance of PlayerTournamentSqliteDAO.
     */
    createPlayerTournamentDAO() {
        return new PlayerTournamentSqliteDAO();
    }

    /**
     * Creates a new instance of UserSqliteDAO.
     * @returns {UserSqliteDAO} A new instance of UserSqliteDAO.
     */
    createUserDAO() {
        return new UserSqliteDAO();
    }
}