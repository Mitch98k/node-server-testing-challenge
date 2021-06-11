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

module.exports = {
    get,
    getById,
    add
}