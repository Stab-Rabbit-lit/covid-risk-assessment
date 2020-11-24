const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

//user signs up
  router.post('/signup', userController.addUser, (req, res) => {
    res.status(200).json('signup confirmed');
  });

  router.post('/login', userController.verifyUser, (req, res) => {
    res.status(200).json(res.locals);
  });

  module.exports = router;