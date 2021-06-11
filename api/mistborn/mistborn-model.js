const db = require('../../db-config');

function get() {
    return db('mistborn');
}

function getById(id) {
    return db('mistborn').where({id}).first();
}

async function add(character) {
    const [id] = await db('mistborn').insert(character);

    return getById(id);
}

async function update(id, character) {
    await db('mistborn').where({id}).update(character);
    return getById(id);
}

function remove(id) {
    return db('mistborn').where({id}).del();
}

module.exports = {
    get,
    getById,
    add,
    update,
    remove
}