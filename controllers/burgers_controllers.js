const express = require("express");
let burger = require("./../models/burger.js");
let router = express.Router();

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(req.body.burger, function (result) {
    res.json({ id: result.insertId });
  });
});

router.get("/api/burgers", function(req, res) {
  burger.selectAll(function (data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.json(hbsObject);
  });
});

router.put("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function (result) {
    console.log(result);
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.deleteOne(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;