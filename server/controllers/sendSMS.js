

const twilio = require('twilio');
const client = new twilio('AC70996f026f35e4293b7d2f1d5a4c1303', 'e0366f30c35e0d5779f5133380ecacc5');


const smsTexting = {};


smsTexting.sendText = (req, res, next) => {
  console.log('phone sending');
const { phone } = res.locals;
client.messages.create({
  body: 'Hello from Esma',
  to: phone,  // Text this number
  from: '+18554986517' // From a valid Twilio number
})
.then((message) => console.log('message', message.sid))
.then(next)
.catch(err=> console.log('error', err))
}

module.exports = smsTexting;