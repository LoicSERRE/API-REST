import { PlayerTournamentSqliteDAO } from '../DAO/PlayerTournamentSqliteDAO.js';
import { expect } from 'chai';

describe('PlayerTournamentSqliteDAO', () => {
    let playerTournamentSqliteDAO;
    let idtestplayerTournament;

    beforeEach(() => {
        playerTournamentSqliteDAO = new PlayerTournamentSqliteDAO();
    });

    describe('getPlayerTournaments', () => {
        it('should retrieve playerTournaments based on the specified filters', async () => {
            const filters = {
                id: 6667,
                player_id: 0,
                tournament_id: 0
            };

            const playerTournaments = await playerTournamentSqliteDAO.getPlayerTournaments(filters);

            expect(playerTournaments).to.be.an('array');
            expect(playerTournaments).to.have.lengthOf(1);
            expect(playerTournaments[0]).to.have.property('id', 6667);
            expect(playerTournaments[0]).to.have.property('player_id', 0);
            expect(playerTournaments[0]).to.have.property('tournament_id', 0);
        });
    });

    describe('createPlayerTournament', () => {
        it('should create a playerTournament', async () => {
            const playerTournament = {
                player_id: 123,
                tournament_id: 456
            };

            const createdPlayerTournament = await playerTournamentSqliteDAO.createPlayerTournament(playerTournament);
            idtestplayerTournament = createdPlayerTournament.lastID;

            expect(createdPlayerTournament).to.be.an('object');
            expect(createdPlayerTournament).to.have.property('lastID');
        });
    });

    describe('updatePlayerTournament', () => {
        it('should update a playerTournament', async () => {
            const playerTournament = {
                player_id: 789,
                tournament_id: 987
            };

            const updatedPlayerTournament = await playerTournamentSqliteDAO.updatePlayerTournament(idtestplayerTournament, playerTournament);

            expect(updatedPlayerTournament).to.be.an('object');
            expect(updatedPlayerTournament).to.have.property('changes');
        });
    });

    describe('deletePlayerTournament', () => {
        it('should delete a playerTournament', async () => {
            const deletedPlayerTournament = await playerTournamentSqliteDAO.deletePlayerTournament(idtestplayerTournament);

            expect(deletedPlayerTournament).to.be.an('object');
            expect(deletedPlayerTournament).to.have.property('changes');
        });
    });
});