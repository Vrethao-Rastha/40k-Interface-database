
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vox_dispatch').del()
    .then(function () {
      // Inserts seed entries
      return knex('vox_dispatch').insert([
        {name: 'Case 15-v-4rk7-i', date:'314.999.M41', content:'The patriarch of the house of Blah did a thing'},


      ]);
    });
};
