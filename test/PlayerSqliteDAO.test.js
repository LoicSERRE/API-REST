import { PlayerSqliteDAO } from '../DAO/PlayerSqliteDAO.js';
import { expect } from 'chai';

/**
 * PlayerSqliteDAO test suite.
 * @test {PlayerSqliteDAO}
 */
describe('PlayerSqliteDAO', () => {
    let playerSqliteDAO;
    let idtestplayer;

    beforeEach(() => {
        playerSqliteDAO = new PlayerSqliteDAO();
    });

    /**
     * Test the getPlayers method.
     * @test {PlayerSqliteDAO#getPlayers}
     * @summary Tests if the method retrieves players based on the specified filters.
     */
    describe('getPlayers', () => {
        it('should retrieve players based on the specified filters', async () => {
            const filters = {
                id: 788,
                name: 'test',
                pseudo: 'test',
                email: 'test',
                mainGame: 'test',
                score: 100
            };

            const players = await playerSqliteDAO.getPlayers(filters);

            expect(players).to.be.an('array');
            expect(players).to.have.lengthOf(1);
            expect(players[0]).to.have.property('id', 788);
            expect(players[0]).to.have.property('name', 'test');
            expect(players[0]).to.have.property('pseudo', 'test');
            expect(players[0]).to.have.property('email', 'test');
            expect(players[0]).to.have.property('mainGame', 'test');
            expect(players[0]).to.have.property('score', 100);
        });
    });

    describe('createPlayer', () => {
        it('should create a player', async () => {
            const player = {
                name: 'createPlayer',
                pseudo: 'createPlayer',
                email: 'createPlayer',
                mainGame: 'createPlayer',
                score: 100
            };

            const createdPlayer = await playerSqliteDAO.createPlayer(player);
            idtestplayer = createdPlayer.lastID;

            expect(createdPlayer).to.be.an('object');
            expect(createdPlayer).to.have.property('lastID');
        });
    });

    describe('updatePlayer', () => {
        it('should update a player', async () => {
            const player = {
                name: 'updatePlayer',
                pseudo: 'updatePlayer',
                email: 'updatePlayer',
                mainGame: 'updatePlayer',
                score: 100
            };

            const updatedPlayer = await playerSqliteDAO.updatePlayer(idtestplayer, player);

            expect(updatedPlayer).to.be.an('object');
            expect(updatedPlayer).to.have.property('changes');
        });
    });

    describe('deletePlayer', () => {
        it('should delete a player', async () => {
            const deletedPlayer = await playerSqliteDAO.deletePlayer(idtestplayer);

            expect(deletedPlayer).to.be.an('object');
            expect(deletedPlayer).to.have.property('changes');
        });
    });
});