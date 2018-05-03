let orm = require("./../config/orm.js");

let burger = {

  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (vals, cb) {
    orm.insertOne("burgers", "burger_name", vals, function (res) {
      cb(res);
    });
  },
  changeOne: function (objColVals, condition, cb) {
    orm.changeOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
  deleteOne: function (condition, cb) {
    orm.deleteOne("burgers", condition, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;