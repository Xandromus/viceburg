// variable declarations for required packages and imported files/functions
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main",
  helpers:{
    // Function to do basic mathematical operation in handlebar
    math: function(lvalue, operator, rvalue) {lvalue = parseFloat(lvalue);
        rvalue = parseFloat(rvalue);
        return {
            "+": lvalue + rvalue,
            "-": lvalue - rvalue,
            "*": lvalue * rvalue,
            "/": lvalue / rvalue,
            "%": lvalue % rvalue
        }[operator];
    }
}}));
app.set("view engine", "handlebars");

// sets up the Express app to serve static files
app.use(express.static(path.join(__dirname, '/public')));

// routes?
let routes = require("./controllers/burgers_controllers.js");
app.use(routes);

// starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });