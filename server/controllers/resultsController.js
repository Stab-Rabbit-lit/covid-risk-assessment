const db = require('../dbModels.js');

const resultsController = {};

const riskFactor = {
  mail: 1,
  takeout: 1,
  gas: 1,
  tennis: 1,
  camp: 1,
  grocery: 2,
  walk: 2,
  restaurantOut: 2,
  doctor: 2,
  downtown: 2,
  house: 3,
  bbq: 3,
  mall: 3,
  kids: 3,
  elderly: 3,
  hair: 4,
  restaurantIn: 4,
  plane: 4,
  wedding: 4,
  hug: 4,
  gym: 5,
  movie: 5,
  music: 5,
  religious: 5,
  bar: 5,
}

const risk = {
  1: 'Low',
  2: 'Moderate Low',
  3: 'Moderate',
  4: 'Moderate High',
  5: 'High',
}

resultsController.calculateRisk = (req, res, next) => {
  // algorithm for calculating risk goes here
    // iterate over req.body.activities
    // check if activity against our activity lookup object for the activity's risk value
    // assign the activities to the risk
    // assign maxNum to highest risk activity

  // if this activity, look in riskFactor object for its value
  // example: [mail, gas, grocery, hair, plane]
  const { activities, date, email} = req.body;
  let max = 0;
  let maxRisk;
  let maxArray;
  // let riskLevel;

  // i = 0: riskFactor[mail] = 1, 1 > 0, make max = 1, maxArray = [mail]
  // i = 1: riskFactor[gas] = 1, 1 > 1 -> NO, go to else if. 1 === 1 -> YES!, maxArray = [mail, gas]
  // i = 2: riskFactor[grocery] = 2, 2 > 1 -> YES!, make max = 2, maxArray = [grocery]
  // i = 3: riskFactor[hair] =  4, 4 > 2 -> YES!, make max = 4, maxArray = [hair]
  // i = 4; riskFactor[plane] = 4, 4 > 1 -> NO, go to else if. 4 === 4 -> YES!, maxArray = [hair, plane]

  for (let i = 0; i < activities.length; i += 1) {
    if (riskFactor[activities[i]] > max) {
      max = riskFactor[activities[i]];
      maxRisk = risk[max];
      maxArray = [activities[i]];
    } else if (riskFactor[activities[i]] === max) {
      maxArray.push(activities[i]);
    }
  }

  res.locals.activities = {
    riskLevel: maxRisk,
    riskyActs: maxArray
  }

  const stringActivities = JSON.stringify(maxArray);


  const addResultsQuery = `INSERT INTO results (date, risk, activities, user_id) VALUES ('${date}', '${maxRisk}', '${stringActivities}', (SELECT _id FROM users WHERE users.email = '${email}'))`;


  db.query(addResultsQuery, (err, data)=> {
    if(err) next(err);
    else {
      return next();
    }
  });

  return next();
}

  resultsController.getResults = (req, res, next) => {
    const { email } = req.params;

  const getResultsQuery = `
  SELECT * FROM results WHERE _id = (SELECT _id FROM users WHERE users.email = '${email}')
    `;


  db.query(getResultsQuery, (err, data)=> {
    if(err) next(err);
    else {
      res.locals.userResults = data.rows;
      return next();
    }
  })
  };


  module.exports = resultsController;