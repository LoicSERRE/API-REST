import { TournamentSqliteDAO } from '../DAO/TournamentSqliteDAO.js';
import { expect } from 'chai';

describe('TournamentSqliteDAO', () => {
    let tournamentSqliteDAO;
    let idtesttournament;

    beforeEach(() => {
        tournamentSqliteDAO = new TournamentSqliteDAO();
    });

    describe('getTournaments', () => {
        it('should retrieve tournaments based on the specified filters', async () => {
            const filters = {
                id: 483,
                name: 'test',
                startDate: 'test',
                endDate: 'test',
                game: 'test',
                place: 'test',
                winningPrice: 100
            };

            const tournaments = await tournamentSqliteDAO.getTournaments(filters);

            expect(tournaments).to.be.an('array');
            expect(tournaments).to.have.lengthOf(1);
            expect(tournaments[0]).to.have.property('id', 483);
            expect(tournaments[0]).to.have.property('name', 'test');
            expect(tournaments[0]).to.have.property('startDate', 'test');
            expect(tournaments[0]).to.have.property('endDate', 'test');
            expect(tournaments[0]).to.have.property('game', 'test');
            expect(tournaments[0]).to.have.property('place', 'test');
            expect(tournaments[0]).to.have.property('winningPrice', 100);
        });
    });

    describe('createTournament', () => {
        it('should create a tournament', async () => {
            const tournament = {
                name: 'createTournament',
                startDate: 'createTournament',
                endDate: 'createTournament',
                game: 'createTournament',
                place: 'createTournament',
                winningPrice: 100
            };

            const createdTournament = await tournamentSqliteDAO.createTournament(tournament);
            idtesttournament = createdTournament.lastID;

            expect(createdTournament).to.be.an('object');
            expect(createdTournament).to.have.property('lastID');
        });
    });

    describe('updateTournament', () => {
        it('should update a tournament', async () => {
            const tournament = {
                name: 'updateTournament',
                startDate: 'createTournament',
                endDate: 'createTournament',
                game: 'updateTournament',
                place: 'updateTournament',
                winningPrice: 1000
            };

            const updatedTournament = await tournamentSqliteDAO.updateTournament(idtesttournament, tournament);

            expect(updatedTournament).to.be.an('object');
            expect(updatedTournament).to.have.property('changes');
        });
    });

    describe('deleteTournament', () => {
        it('should delete a tournament', async () => {
            const deletedTournament = await tournamentSqliteDAO.deleteTournament(idtesttournament);

            expect(deletedTournament).to.be.an('object');
            expect(deletedTournament).to.have.property('changes');
        });
    });
});