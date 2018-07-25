
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vox_dispatch').del()
    .then(function () {
      // Inserts seed entries
      return knex('vox_dispatch').insert([
        {name: 'test', date:'test', content:'test'},


      ]);
    });
};
