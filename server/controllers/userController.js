const db = require('../dbModels.js');
const bcrypt = require("bcrypt");
const session = require("express-session");
const userController = {};

  userController.addUser = async (req, res, next) => {
console.log('inside addUser');
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      address,
      zipcode,
      positive
  } = req.body;

  //handle form errors into an array
  const errors = [];
 //* check if all forms are entered
 if(!firstName || !lastName || !email || !password || !phoneNumber || !address || !zipcode || !positive){
   errors.push({message: 'please enter all fields'})
 }
 //* check if the password is long enough to be more secure
//  if (password.length < 6) {
//   errors.push({ message: "Password must be a least 6 characters long" });
// }

//* if errors we want to redirect to the singup page
// if (errors.length > 0) {
// return next(error[0])

// } 
//* form validation has passed 
const hashPassword = await bcrypt.hash(password, 10);
console.log(hashPassword);



  const addUser = `INSERT INTO users (first_name, last_name, email, password, phone, address, zip, test)
  VALUES ($1, $2, $3, $4, $5, $6, $7 , $8) RETURNING _id`;
  const values = [firstName, lastName, email, hashPassword, phoneNumber, address, zipcode, positive]
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
  const text = `SELECT * FROM users WHERE email = $1`
  const values = [user]
  db.query(text, values, (err, data)=> {
    console.log('data', data.rows);
    if(err) next(err);
    else {
      const user = data.rows[0];
      bcrypt.compare(pass, user.password, (err, isMatch) => {
        if (err) {
          console.log('err', err);
          next(err)
        }
        if (isMatch) {
          console.log('isMatch',isMatch);
          res.locals.results = isMatch;
          return next();
        } 
          //password is incorrect
          console.log("Password is incorrect");
          return next();
        
      });
    }
  })
}
  module.exports = userController;
