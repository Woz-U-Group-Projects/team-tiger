var express = require("express");
var router = express.Router();
const mysql = require('mysql2');
const models = require('../models');
var Sequelize = require('sequelize');

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

// router.get('/homes', function(req, res, next) {
//   models.homes.findAll({})
//   .then(homesFound => {
//     let mappedhomes = homesFound.map(home => ({
//       homeId: home.homeId,
//       Name: `${home.first_name} ${home.last_name}`
//     }));
//     res.send(JSON.stringify(mappedhomes));
//   });
// });

// router.get('/home/:id', function(req, res, next) {
//   let homeId = parseInt(req.params.id);
//   models.homes
//     .findOne({
//       where: {
//         home_id: homeId
//       }
//     })
// <<<<<<< HEAD
//     .then(home => {
//       res.render('specifichome', {
//         home: home
// =======
//     .then(user => {
//       res.render('specificProject', {
//         user: user
// >>>>>>> 6ec3b72d4c7c38a167e91af458f993501647142d
//       });
//     });
// });

// <<<<<<< HEAD
// router.post('/register', (req, res) => {
//   models.homes
// =======
// router.post('/project', (req, res) => {
//   models.projects
// >>>>>>> 6ec3b72d4c7c38a167e91af458f993501647142d
//     .findOrCreate({
//       where: {
//         first_name: req.body.first_name,
//         last_name: req.body.last_name
//       }
//     })
//     .spread(function(result, created) {
//       if (created) {
// <<<<<<< HEAD
//         res.redirect('/login');
// =======
//         res.redirect('/projects');
// >>>>>>> 6ec3b72d4c7c38a167e91af458f993501647142d
//       } else {
//         res.send('This home already exists!');
//       }
//     });
// });



module.exports = router;
