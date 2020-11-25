import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Redirect, NavLink } from "react-router-dom";
import axios from "axios";
//import classes from "./LineGraph.module.css";

class PastResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //all data for a specific user
      allData: [],
      data: {
        labels: [],

        datasets: [
          {
            label: "Past Results",
            backgroundColor: "rgba(255, 0, 255, .75)",
            data: [],
          },
        ],
      },
    };
  }

  //let dateToAdd = allData[i][0]
  //let riskToAdd = allData[i][1]

  componentDidMount() {
    axios.get(`/results/${this.props.email}`).then((res) => {
      console.log("this is res.data", res.data);
      console.log("this is only res", res);
      console.log("length should not be 1:", res.data.length);
      let results = [];
      //[row, row]
      for (let i = 0; i < res.data.length; i++) {
        const riskLevels = {
          Low: 1,
          "Moderate Low": 2,
          Moderate: 3,
          "Moderate High": 4,
          High: 5,
        };
        let newDate = res.data[i].date;
        let finalDate = newDate.slice(5, newDate.length);
        let indexZero = "Test Number " + (i + 1) + " on " + finalDate;
        let risk = res.data[i].risk;
        let indexOne = riskLevels[risk];
        results.push([indexZero, indexOne]);
      }

      console.log(results);
      this.setState({ allData: results });
    });
  }

  render() {
    console.log("inside render:", this.state.allData);

    this.state.allData.forEach((elem) => {
      this.state.data.labels.push(elem[0]);
      this.state.data.datasets[0].data.push(elem[1]);
    });
    return (
      <div className="chart-window">
        <Line data={this.state.data} />
        <br></br> <br></br>
        <NavLink to="/home" className="navButtonOnCasesPage">
          Return to Home Page &#8594;
        </NavLink>
      </div>
    );
  }
}

export default PastResults;
