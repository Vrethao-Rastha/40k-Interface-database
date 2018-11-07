
exports.up = function(knex, Promise) {
    return knex.schema.createTable('glossary', function(table){
      table.increments();
        table.string('Title')
        table.text('Content')
        table.string('file_number')
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.timestamp('ucreated_at').defaultTo(knex.fn.now());
      })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('glossary')
  };
  