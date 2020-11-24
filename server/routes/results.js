  const express = require('express');

  const router = express.Router();

  const resultsController = require('../controllers/resultsController');

// route handlers:
//  will receive the Submit event from the frontend when user completes the quiz
//  and send assessment result back to frontend:
router.post('/', resultsController.calculateRisk, (req, res) => {
  res.status(200)
    // .redirect('/results');
    .send(res.locals);
})

//user signs in and 'get' request loads results
  // router.get('/:userId' , resultsController.getUserResults, (req, res) => {
  //   res.status.json(res.locals.userResults);
  // });

  module.exports = router;

