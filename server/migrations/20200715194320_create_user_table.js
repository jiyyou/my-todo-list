
exports.up = knex => {
  return knex.schema.createTable("user", table => {
    table.increments("id").primary();
    table.string("fName").notNullable();
    table.string("lName").notNullable();
    table.string("googleId").notNullable();
  });
};

exports.down = knex => {
  return knex.schema.dropTable("user");
};
