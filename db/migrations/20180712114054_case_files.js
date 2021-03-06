
exports.up = function(knex, Promise) {
  return knex.schema.createTable('case_files', function(table){
    table.increments();
      table.string('First_Name')
      table.string('Last_Name')
      table.string('Address')
      table.string('Hive')
      table.string('Hive_Stack')
      table.text('Bio')
      table.string('file_number')
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.timestamp('ucreated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('case_files')
};
