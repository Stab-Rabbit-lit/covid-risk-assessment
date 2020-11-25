import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import axios from "axios";

class LocalTestingCenters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersState: [],
      allData: [],
      displayData: {
        centerName: "",
        centerAddress: "",
      },
    };
  }

  componentDidMount() {
    // axios.get(`/LocalTestingCenters/${this.props.email}`).then((res) => {
    //     console.log("this is res.data", res.data);
    // }

    const url = "https://sheetlabs.com/NCOR/covidtestcentersinUS";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((elem) => this.state.allData.push(elem));
      });
    console.log(this.state.allData);
  }

  render() {
    const allMyData = this.state.allData;
    console.log(allMyData);
    return (
      <div className="chart-window">
        <h2>Find a local testing center in your state.</h2>
        <form>
          <label for="states">Choose your state:</label>
          <select name="states" id="states">
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          <br></br>
          <button>Sumbit</button>
        </form>
        <br></br>
        <NavLink to="/home" className="navButtonOnCasesPage">
          Return to Home Page &#8594;
        </NavLink>
      </div>
    );
  }
}

export default LocalTestingCenters;
