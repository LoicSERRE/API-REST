import { UserSqliteDAO } from '../DAO/UserSqliteDAO.js';
import { expect } from 'chai';

describe('UserSqliteDAO', () => {
    let userSqliteDAO;
    let idtestuser;

    beforeEach(() => {
        userSqliteDAO = new UserSqliteDAO();
    });

    describe('getUsers', () => {
        it('should retrieve users based on the specified filters', async () => {
            const filters = {
                id: 6,
                username: 'test',
                password: '$2b$10$mTUAtqqnwt8pDH57b16bs.gp9reqCgTZneXsBPXkxaTfKj5um1zT2'
            };

            const users = await userSqliteDAO.getUsers(filters);

            expect(users).to.be.an('array');
            expect(users).to.have.lengthOf(1);
            expect(users[0]).to.have.property('id', 6);
            expect(users[0]).to.have.property('username', 'test');
            expect(users[0]).to.have.property('password', '$2b$10$mTUAtqqnwt8pDH57b16bs.gp9reqCgTZneXsBPXkxaTfKj5um1zT2');
        });
    });

    describe('createUser', () => {
        it('should create a user', async () => {
            const user = {
                username: 'createUser',
                password: 'createUser'
            };

            const createdUser = await userSqliteDAO.createUser(user);
            idtestuser = createdUser.lastID;

            expect(createdUser).to.be.an('object');
            expect(createdUser).to.have.property('lastID');
        });
    });

    describe('updateUser', () => {
        it('should update a user', async () => {
            const user = {
                username: 'updateUser',
                password: 'updateUser'
            };

            const updatedUser = await userSqliteDAO.updateUser(idtestuser, user);

            expect(updatedUser).to.be.an('object');
            expect(updatedUser).to.have.property('changes');
        });
    });

    describe('deleteUser', () => {
        it('should delete a user', async () => {
            const deletedUser = await userSqliteDAO.deleteUser(idtestuser);

            expect(deletedUser).to.be.an('object');
            expect(deletedUser).to.have.property('changes');
        });
    });
});