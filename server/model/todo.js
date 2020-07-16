const bookshelf = require("../bookshelf");

const Todo = bookshelf.model("Todo", {
  tableName: "todo"
});

module.exports = Todo;
