
exports.up = knex => {
  return knex.schema.createTable("todo", table => {
    table.increments("id").primary();
    table.string("todo").notNullable();
    table.datetime("when");
    table
    	.integer("user_id")
    	.unsigned()
    	.notNullable()
    	.references("id")
    	.inTable("user")
    	.onUpdate("CASCADE")
    	.onDelete("CASCADE");
  });
};

exports.down = knex => {
  return knex.schema.dropTable("user");
};
