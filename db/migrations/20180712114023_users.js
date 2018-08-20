
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
      table.string('user_name')
      table.string('password')
      table.string('rank')
      table.boolean('isAdmin').defaultTo(false)
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.timestamp('ucreated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
