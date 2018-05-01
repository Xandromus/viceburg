const express = require("express");
let burger = require("./../models/burger.js");

let router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll( (data) => {
      let hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

module.exports = router;