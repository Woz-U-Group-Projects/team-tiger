const jwt = require("jsonwebtoken");
const models = require("../models");

var authService = {
   signUser: function(user) {
       const token = jwt.sign(
        {
           Username: user.Username,
           UserId: user.UserId
       }, 
       "secretkey", 
       { expiresIn: "1h" }
       );
       return token;
   },
   verifyUser: function(token) {
        try {
            let decoded = jwt.verify(token, "secretkey");
            return models.users.findkByPk(decoded.UserId);
        } catch (error) {
          console.log(error);
          return null; 
            
        }
    }
};


module.exports = authService;