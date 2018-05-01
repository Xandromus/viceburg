const express = require("express");
let burger = require("./../models/burger.js");
let router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
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

module.exports = router;