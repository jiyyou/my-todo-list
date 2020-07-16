const bookshelf = require("../bookshelf");

const User = bookshelf.model("User", {
  tableName: "user",
  todo: function() {
  	return this.hasMany("Todo");
  }
});

module.exports = User;
