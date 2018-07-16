
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_name: 'Alex', rank:'Interrogator', password:'asdf'},
        {user_name: 'Jessie', rank:'Acolyte', password:'asdf'},
        {user_name: 'Derek', rank:'Acolyte', password:'asdf'},
        {user_name: 'Liam', rank:'Acolyte', password:'asdf'},
        {user_name: 'Carmen', rank:'Acolyte', password:'asdf'},
        {user_name: 'Lord Inq', rank:'Lord Inquisitor', password:'asdf'},
        {user_name: 'Spectre', rank:'Acolyte', password:'asdf'},
        {user_name: 'Nathan Inchabel', rank:'Acolyte', password:'asdf'},
        {user_name: 'Phellepas Lyco', rank:'Acolyte', password:'asdf'},
        {user_name: 'Konrad Molitor', rank:'Acolyte', password:'asdf'},
        {user_name: 'Commodus Voke', rank:'Inquisitor', password:'asdf'},
        {user_name: 'Felice Celemene', rank:'Inquisitor', password:'asdf'},

      ]);
    });
};
