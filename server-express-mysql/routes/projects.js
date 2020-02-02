var express = require("express");
var router = express.Router();
var models = require("../models");
var authService = require('../services/auth');


router.get("/", function(req, res, next) {
  models.Project.findAll().then(projects => res.json(projects));
});

router.post("/", function(req, res, next) {
  let newProject = new models.Project();
  newProject.name = req.body.name;
  newProject.createdBy = req.body.createdBy;
  newProject.save().then(project => res.json(project));
});

router.delete("/:id", function(req, res, next) {
  let UserId = parseInt(req.params.id);
  models.Project.findByPk(userId)
    .then(project => project.destroy())
    .then(() => res.send({ userId }))
    .catch(err => res.status(400).send(err));
});

router.put("/:id", function(req, res, next) {
  models.Project.update(
    {
      name: req.body.name,
      createdBy: req.body.createdBy
    },
    {
      where: { id: parseInt(req.params.id) }
    }
  ).then(result => res.json(result));
});

/* GET projects listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

//*Create New projects if one doesn't exist*//
router.post('/signup', function(req, res, next) {
  models.project
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

//Login user and return JWT as cookie 
router.post("/login", function(req, res, next){
  models.project.findOne({
    where: {
      Username: req.body.username,
    }
  }).then( project => {
    if(!project){
      console.log("User not found");
      return res.status(401).json({message: "Login failed"})
    } else {
      let passwordMatch = authService.comparePasswords(req.body.password, project.Password);
      if (passwordMatch) {
        let token = authService.signProject(project);
        res.cookie('jwt', token);
        res.send('Login successful');
      } else {
        console.log('Wrong password');
        res.send('Wrong password');
      }
  };  
});
router.get('/profile', function (req, res, next) {
  let token = req.cookies.jwt;
  if (token) {
    authService.verifyProject(token)
      .then(project => {
        if (project) {
          res.send(JSON.stringify(project));
        } else {
          res.status(401);
          res.send('Invalid authentication token');
        }
      });
  } else {
    res.status(401);
    res.send('Must be logged in');
  }
});

router.get('/logout', function (req, res, next) {
res.cookie('jwt', "", { expires: new Date(0)});
res.send('Logged out');
});
});

 module.exports = router;
