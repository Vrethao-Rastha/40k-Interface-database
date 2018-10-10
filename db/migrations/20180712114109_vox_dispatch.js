
exports.up = function(knex, Promise) {
  return knex.schema.createTable('vox_dispatch', function(table){
    table.increments();
    table.string('avatar')
      table.string('caseNumber')
      table.string('senderName')
      table.string('date')
      table.text('content')
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.timestamp('ucreated_at').defaultTo(knex.fn.now());
    })
  };

  exports.down = function(knex, Promise) {
  return knex.schema.dropTable('vox_dispatch')
  };
