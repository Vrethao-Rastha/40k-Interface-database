
exports.up = function(knex, Promise) {
  return knex.schema.createTable('case_files', function(table){
    table.increments();
      table.string('date')
      table.string('author')
      table.string('content')
      table.string('title')
      table.string('file_id')
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.timestamp('ucreated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('case_files')
};
