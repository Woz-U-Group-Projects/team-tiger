var createError = require('http-errors');
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var models = require("./models");
var cors = require("cors");


var indexRouter = require("./routes/index");
<<<<<<< HEAD
var usersRouter = require("./routes/users");
var homesRouter = require("./routes/homes");
=======
var projectsRouter = require("./routes/projects");
>>>>>>> 6ec3b72d4c7c38a167e91af458f993501647142d

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
<<<<<<< HEAD
app.use("/users", usersRouter);
app.use("/homes", homesRouter);
=======
app.use("/projects", projectsRouter);
>>>>>>> 6ec3b72d4c7c38a167e91af458f993501647142d

models.sequelize.sync().then(function() {
  console.log("DB Sync'd up");
});

module.exports = app;
