const db = require('../../db-config');
const Mistborn = require('./mistborn-model');

describe('Mistborn model', () => {
    beforeAll(async () => {
        await db.migrate.rollback();
        await db.migrate.latest();
    });

    beforeEach(async () => {
        await db('mistborn').truncate();
    });

    // afterAll(async () => {
    //     await db.destroy();
    // });
    describe('get()', () => {
        it('returns an array of all the characters in the database', async () => {
            await Mistborn.add({ name: 'Kelsier' });
            await Mistborn.add({ name: 'Vin' });
            await Mistborn.add({ name: 'Sazed' });

            const chars = await Mistborn.get();

            expect(chars).toHaveLength(3);
        });

        it('returns an empty array if there are no characters', async () => {
            const chars = await Mistborn.get();

            expect(chars).toEqual([]);
        });
    });

    describe('getById()', () => {
        it('retrieves the character with the specific id', async () => {
            const {id} = await Mistborn.add({ name: 'Kelsier' });

            const char = await Mistborn.getById(id);

            expect(char).toMatchObject({ name: 'Kelsier' });
        });

        it('returns undefined if there is no character with the id', async () => {
            const char = await Mistborn.getById(1);

            expect(char).toBeUndefined();
        });
    });

    describe('add()', () => {
        it('creates a new character', async () => {
            const newChar = await Mistborn.add({ name: "Elend" });

            expect(newChar).toMatchObject({ name: 'Elend' });
        });

        it('adds new character to the database', async () => {
            await Mistborn.add({ name: "Elend" });

            const char = Mistborn.get()

            expect(char).toBeDefined();
        });
    });
});