
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('mistborn_characters').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('mistborn_characters').insert([
        {id: 1, name: 'Kelsier'},
        {id: 2, name: 'Vin'},
        {id: 3, name: 'Sazed'}
      ]);
    });
};
