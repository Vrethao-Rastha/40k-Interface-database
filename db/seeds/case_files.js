
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('case_files').del()
    .then(function () {
      // Inserts seed entries
      return knex('case_files').insert([
        {date: 'test', content: 'test', author:'test', title: 'test', file_id: '123'},
        {date: 'test', content: 'bob', author:'test', title: 'test', file_id: '234'},
        {date: 'test', content: 'test', author:'test', title: 'test', file_id: '345'},
        {date: 'test', content: 'test', author:'test', title: 'test', file_id: '456'},
      ]);
    });
};
