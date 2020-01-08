var express = require("express");
var router = express.Router();
const mysql = require('mysql2');
const models = require('../models');

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get('/users', function(req, res, next) {
  models.project.findAll({}).then(usersFound => {
    res.render('users', {
      users: usersFound
    });
  });
});

router.get('/user/:id', function(req, res, next) {
  let userId = parseInt(req.params.id);
  models.project
    .findOne({
      where: {
        user_id: userId
      }
    })
    .then(user => {
      res.render('specificUser', {
        user: user
      });
    });
});

router.post('/user', (req, res) => {
  models.project
    .findOrCreate({
      where: {
        first_name: req.body.first_name,
        last_name: req.body.last_name
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.redirect('/users');
      } else {
        res.send('This user already exists!');
      }
    });
});



module.exports = router;
