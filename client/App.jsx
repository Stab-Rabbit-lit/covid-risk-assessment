
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import AssessmentPage from './components/AssessmentPage.jsx';
import ResultsPage from './components/ResultsPage.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
// import LocalData from "./components/LocalDataChart.jsx";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      riskLevel: "",
      riskyActs: [],
      answers: [],
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      zipcode: '',
      password: '',
    };

    this.submitAnswers = this.submitAnswers.bind(this);
    this.addToAnswers = this.addToAnswers.bind(this);
    this.removeFromAnswers = this.removeFromAnswers.bind(this);
    this.getRiskLevel = this.getRiskLevel.bind(this);
    this.getRiskyActs = this.getRiskyActs.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
    this.submitPassword = this.submitPassword.bind(this);
  }

  submitEmail(email1){
    this.setState({email:email1})
  }
  submitPassword(password1){
    this.setState({password: password1 })
  }
  submitInfo(userObj) {
    this.setState({
      ...this.state,
      firstName: userObj.firstName,
      lastName: userObj.lastName,
      email: userObj.email,
      phoneNumber: userObj.phoneNumber,
      address: userObj.address,
      zipcode: userObj.zipcode,
      password: userObj.password,
    });
    console.log(this.state);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    // this.setState();
    // const signupForm = {
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   phoneNumber: phoneNumber,
    //   address: address,
    //   zipcode: zipcode,
    //   password: password,
    // };
    // axios.post('', signupForm).then((res) => {
    //   if (res.data !== null) window.location = '/login';
    //   else window.location = '/signup';
    // });
  }

  submitAnswers() {

    fetch("/home", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ activities: this.state.answers }),
    //   body: JSON.stringify( {
    //     first_name: 'Esma',
    //     last_name: 'Sah',
    //     email: 'esma@gmail.com',
    //     password: 123,
    //     phone: 2567648273,
    //     address: '123 west street',
    //     zip: 34334,
    // } ),

    })
      .then((response) => response.json())
      .then((data) => {
        console.log("risky acts include", data.activities.riskyActs);
        const newRisk = data.activities.riskLevel;
        const newRiskyActs = data.activities.riskyActs;

        this.setState({
          ...this.state,
          riskLevel: newRisk,
          riskyActs: newRiskyActs,
        });
      });
  }

  addToAnswers(keyword) {
    const newAnswers = this.state.answers.slice();
    newAnswers.push(keyword);

    console.log("keyword is", keyword, "new answers include :", newAnswers);
    this.setState({
      ...this.state,
      answers: newAnswers,
    });
  }

  removeFromAnswers(keyword) {
    let newAnswers = this.state.answers.slice();
    newAnswers = newAnswers.filter((answer) => answer !== keyword);

    console.log("keyword was ", keyword, "new answers include :", newAnswers);
    this.setState({
      ...this.state,
      answers: newAnswers,
    });
  }

  getRiskyActs() {
    return this.state.riskyActs;
  }

  getRiskLevel() {
    return this.state.riskLevel;
  }

  render() {
    return (
      <div>
        <h1>Covid Risk Assessment Quiz</h1>
        <Switch>
          <Route exact path="/">
            <Login email={this.state.email} submitEmail={this.submitEmail} password={this.state.password} submitPassword={this.submitPassword}/>
          </Route>
          <Route path ="/signup">
            <Signup submitInfo={this.submitInfo}/>
          </Route>
            
          <Route path="/home">
            <AssessmentPage
              submitAnswers={this.submitAnswers}
              add={this.addToAnswers}
              remove={this.removeFromAnswers}
            />
          </Route>

          <Route path="/results">
            <ResultsPage
              riskLevel={this.state.riskLevel}
              riskyActs={this.state.riskyActs}
              getRiskLevel={this.getRiskLevel}
              getRiskyActs={this.getRiskyActs}
            />
          </Route>
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
