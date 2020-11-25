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
      for (let i = 0; i < res.data.length; i++) {
        let indexZero = res.data[i].date;
        let indexOne = res.data[i].risk;
        results.push([indexZero, indexOne]);
      }
      for (let i = 0; i < 7; i++) {
        results.push(['' + i, '' + i]);
      }
      console.log(results);
      this.setState({allData: results});
    });
  }

  render() {
    console.log('inside render:', this.state.allData);

    this.state.allData.forEach((elem) => {
      this.state.data.labels.push(elem[0])
      this.state.data.datasets[0].data.push(elem[1])
    });
    return (
        <div className="chart-window">
          <Line data={this.state.data}/>
          <NavLink to="/home" className="navButtonOnCasesPage">
          Return to Home Page &#8594;
          </NavLink>
        </div>
    )}
}

export default PastResults;
