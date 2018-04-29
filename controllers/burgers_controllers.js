const express = require("express");
let burger = require("./../models/burger.js");

let router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll( (data) => {
      res.render("index", { burgers: data });
    });
  });

module.exports = router;