const express = require('express');
const path = require('path');
const app = express();

const userRouter = require('./routes/users');
const resultsRouter = require('./routes/results');

const PORT = 3000;

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
