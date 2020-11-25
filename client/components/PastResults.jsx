import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Redirect, NavLink } from "react-router-dom";
import axios from 'axios';
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
            data:[]
          }
        ]
      }
    };
  }

  //let dateToAdd = allData[i][0]
  //let riskToAdd = allData[i][1]

  componentDidMount() {

    axios.get(`/results/${this.props.email}`).then((res) => {
      console.log('this is res.data', res.data);
      let results = [];
      //[row, row]
      const toConvert = {
        'Low': 1,
        'Moderate Low': 2,
        'Moderate': 3,
        'Moderate High': 4,
        'High': 5,
      }
      for (let i = 0; i < res.data.length; i++) {
        results.push([res.data[i].date, toConvert[res.data[i].risk]]);
      }
      this.setState({allData: results});
    });
  }

  render() {

    return (
      <div>
        <div className="chart-window">
          <Line data={this.state.data}/>
        </div>
        <NavLink to="/home" className="navButtonOnCasesPage">
          Return to Home Page &#8594;
        </NavLink>
      </div>
    );
  }
}

export default PastResults;
