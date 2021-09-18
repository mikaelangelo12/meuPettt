
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', table =>{
    table.increments('id').primary()
    table.string('name')
    table.integer('parantId').references('id')
            .inTable('categories')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories')
  
};
