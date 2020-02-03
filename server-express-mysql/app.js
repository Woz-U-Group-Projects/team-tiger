var createError = require('http-errors');
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var models = require("./models");
var cors = require("cors");


var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var homesRouter = require("./routes/homes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/homes", homesRouter);

models.sequelize.sync().then(function() {
  console.log("DB Sync'd up");
});

module.exports = app;
