
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('field_reports').del()
    .then(function () {
      // Inserts seed entries
      return knex('field_reports').insert([
        {date: 'test', content: 'test', author:'test', title: 'test'},
        {date: 'test', content: 'test', author:'test', title: 'test'},
        {date: 'test', content: 'test', author:'test', title: 'test'},
        {date: 'test', content: 'test', author:'test', title: 'test'},

      ]);
    });
};
