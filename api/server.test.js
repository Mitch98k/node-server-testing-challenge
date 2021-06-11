const request = require('supertest');
const server = require('./server');
const db = require('../db-config');
const Mistborn = require('./mistborn/mistborn-model');

describe('server.js', () => {
    beforeAll(async () => {
        await db.migrate.rollback();
        await db.migrate.latest();
    });

    beforeEach(async () => {
        await db('mistborn').truncate();
    });

    describe('[POST] /characters', () => {
        it('returns a valid response', () => {
            return request(server)
            .post('/characters')
            .send({ name: 'Elend' })
            .expect(200, { name: 'Elend' })
        });
    });
});