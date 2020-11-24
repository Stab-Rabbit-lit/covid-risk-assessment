const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const smsTexting = require('../controllers/sendSMS');

//user signs up
  router.post('/signup', userController.addUser, (req, res) => {
    console.log('finished');
    res.status(200).json('signup confirmed');
  });

  router.post('/login', userController.verifyUser, (req, res) => {
console.log(res.locals.results);
    res.status(200).json(res.locals.results);
  });

  module.exports = router;