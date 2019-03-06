const jwt = require('jsonwebtoken');
const config = require('../config');
const db = require('../config/db.config');
const User = require('../model/employee.model');

// The authentication controller.
const AuthController = {};

// get user.
AuthController.getUserByJwt = (req, res) => {
    if (req.headers && req.headers.authorization) {
      const token = req.headers['authorization'].replace(/^JWT\s/, '');
      let decoded;
      decoded = jwt.verify(token, config.keys.secret);
  
      console.log(decoded.username);
      // Fetch the user by id 
      User.findOne({_username: decoded.username}).then(function(user){
          // Do something with the user
          res.status(200).json({
            user
          });
      });
  }
  };
  
  // Authenticate a user.
  AuthController.authenticateUser = (req, res) => {
    if (!req.body.username || !req.body.password) {
      res.status(404).json({
        message: 'username and password are needed!',
      });
    } else {
      const username = req.body.username;
      const password = req.body.password;
      const potentialUser = {
        where: {
          username,
        },
      };
      User.findOne(potentialUser).then((user) => {
        if (!user) {
          res.status(404).json({
            message: 'Authentication failed!',
          });
        } else {
          user.comparePasswords(password, (error, isMatch) => {
            if (isMatch && !error) {
              const token = jwt.sign({
                username: user.username,
              },
              config.keys.secret, {
                expiresIn: '300m',
              },
              );
              res.json({
                success: true,
                token: `JWT ${token}`,
                role: user.role,
              });
            } else {
              res.status(404).json({
                message: 'Login failed!',
              });
            }
          });
        }
      }).catch(() => {
        res.status(500).json({
          message: 'There was an error!',
        });
      });
    }
  };