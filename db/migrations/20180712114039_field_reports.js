
exports.up = function(knex, Promise) {
  return knex.schema.createTable('field_reports', function(table){
    table.increments();
      table.string('date')
      table.string('author')
      table.string('content')
      table.string('title')
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.timestamp('ucreated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('field_reports')
};
