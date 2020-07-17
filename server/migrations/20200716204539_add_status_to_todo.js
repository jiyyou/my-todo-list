exports.up = knex => {
  return knex.schema.table("todo", table => {
    table
      .string("status")      
      .notNullable()
    	.defaultTo('todo');
  });
};

exports.down = knex => {
  return knex.schema.table("todo", table => {
  	table.dropColumn('status')
  });
};