const express = require('express');
const path = require('path');
const app = express();
const passport = require("passport");

const session = require("express-session");
const userRouter = require('./routes/users');
const resultsRouter = require('./routes/results');

const PORT = 3000;

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    // Key we want to keep secret which will encrypt all of our information
    secret: 'secret',
    // Should we resave our session variables if nothing has changes which we dont
    resave: false,
    // Save empty value if there is no vaue which we do not want to do
    saveUninitialized: false
  })
);
// Funtion inside passport which initializes passport
app.use(passport.initialize());
// Store our variables to be persisted across the whole session. Works with app.use(Session) above
app.use(passport.session());

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

  app.use('/', userRouter);
  app.use('/results', resultsRouter);


// route handler to send risk assessment results back to client
app.get('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// default error handler
app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err};
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//listen
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

module.exports = app;
