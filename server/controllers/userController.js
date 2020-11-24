const db = require('../dbModels.js');

const userController = {};

  userController.addUser = (req, res, next) => {
console.log('inside addUser');
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      address,
      zipcode,
  } = req.body;

  const addUser = `INSERT INTO users (first_name, last_name, email, password, phone, address, zip)
  VALUES ($1, $2, $3, $4, $5, $6, $7 ) RETURNING _id`;
  const values = [firstName, lastName, email, password, phoneNumber, address, zipcode]
  res.locals.phone = phoneNumber;
  db.query(addUser, values,(err, data)=> {
    if(err) next(err);
    else {
      console.log('data.rows', data.rows);
      return next();
    }
  })
  };

  //to add: verifyLogin
userController.verifyUser = (req, res, next)=> {
  const user = req.body.email;
  const pass = req.body.password;
  const text = `SELECT * FROM users WHERE email = $1 AND password = $2`
  const values = [user, pass]
  db.query(text, values, (err, data)=> {
    console.log('data', data.rows);
    if(err) next(err);
    else if (!data.rows.length){
      console.log('password does not match');
      return res.status(404).json('password does not match')
    }
    else {
      res.locals.results = true;
      return next();
    }
  })
}
  module.exports = userController;
