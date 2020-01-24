var express = require('express');
var router = express.Router();
var models = require('../models');
var authService = require('../services/auth');

//*POST requests below*//
router.post('/signup', function(req, res, next) {
  models.users
    .findOrCreate({
      where: {
        Username: req.body.username
      },
      defaults: {
        FirstName: req.body.firstName,
        LastName: req.body.lastName,
        Email: req.body.email,
        Password: req.body.password
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.send('User successfully created');
      } else {
        res.send('This user already exists');
      }
    });
});

router.post("/login", function(req, res, next){
  models.users.findOne({
    where: {
      Username: req.body.username,
      Password: req.body.password
    }
  }).then( user => {
    if(!user){
      console.log("User not found");
      return res.status(401).json({message: "Login failed"})
    } else {
      let token = authService.signUser(user);
      res.cookie('jwt', token);
      res.send("Login Successful");
    }
  });
});

router.get("/profile", function(req, res, next){
  let token = req.cookies.jwt;
  authService.verifyUser(token).then(user => {
    if(user) {
      res.send(JSON.stringify(user));
    } else {
      res.status(401);
      res.send("Must be logged in");
    }
  })
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});


module.exports = router;
