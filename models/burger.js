let orm = require("./../config/orm.js");

let burger = {

    selectAll: function() {
        connection.query("SELECT * FROM burgers;", function(err, data) {
        if (err) {
          return res.status(500).end();
        }
      });
    
    },
    insertOne: function() {  },
    updateOne: function() {  }
};

module.exports = burger;