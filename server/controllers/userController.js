const db = require('../dbModels.js');

const userController = {};

  userController.addUser = (req, res, next) => {
console.log('inside addUser');
    const {
      first_name,
      last_name,
      email,
      password,
      phone,
      address,
      zip,
  } = req.body;

  const addUser = `INSERT INTO users (first_name, last_name, email, password, phone, address, zip)
  VALUES ('${first_name}', '${last_name}', '${email}', '${password}', '${phone}', '${address}', '${zip}' )`;

  db.query(addUser, (err, data)=> {
    if(err) next(err);
    else {
      console.log('data.rows', data.rows);
      return next();
    }
  })
  };

  //to add: verifyLogin
userController.verifyUser = (req, res, next)=> {
  const user = req.body.username;
  const pass = req.body.password;
  const text = `SELECT * FROM users WHERE email = $1 AND password = $2`
  const values = [user, pass]
  db.query(text, values, (err, data)=> {
    if(err) next(err);
    else {
      console.log('data.rows', data.rows);
      return next();
    }
  })
}
  module.exports = userController;
