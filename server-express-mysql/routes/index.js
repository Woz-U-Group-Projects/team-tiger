var express = require("express");
var router = express.Router();
const mysql = require('mysql2');
const models = require('../models');
var Sequelize = require('sequelize');

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get('/users', function(req, res, next) {
  models.projects.findAll({})
  .then(projectsFound => {
    let mappedProjects = projectsFound.map(user => ({
      ProjectID: user.user_id,
      Name: `${user.first_name} ${user.last_name}`
    }));
    res.send(JSON.stringify(mappedProjects));
  });
});

router.get('/user/:id', function(req, res, next) {
  let userId = parseInt(req.params.id);
  models.projects
    .findOne({
      where: {
        user_id: userId
      }
    })
    .then(user => {
      res.render('specificProject', {
        user: user
      });
    });
});

router.post('/project', (req, res) => {
  models.projects
    .findOrCreate({
      where: {
        first_name: req.body.first_name,
        last_name: req.body.last_name
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.redirect('/projects');
      } else {
        res.send('This user already exists!');
      }
    });
});



module.exports = router;
