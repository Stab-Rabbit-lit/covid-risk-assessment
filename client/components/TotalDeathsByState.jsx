import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Redirect, NavLink } from "react-router-dom";
//import classes from "./LineGraph.module.css";

class DeathsByState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      allFilteredData: [],
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Total Deaths to Date",
            data: [],
            backgroundColor: [],
          },
        ],
      },
    };
  }

  componentDidMount() {
    const url = "http://disease.sh/v3/covid-19/nyt/states?lastdays=30";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //dynamically filters cases by date 2 days ago and sends to state
        const dynamicYear = new Date().getFullYear();
        const dynamicMonth = new Date().getMonth() + 1;
        const stringMonth = dynamicMonth.toString();
        const dynamicDay = new Date().getDate() - 2;
        let finalDate = dynamicYear + "-" + dynamicMonth + "-" + dynamicDay;

        const filteredData = data.filter((states) => states.date > finalDate);
        this.setState({ allFilteredData: filteredData });
      })
      .catch((error) => console.error(`Error: ${error}`));
  }
  render() {
    const allLabels = this.state.chartData.labels;
    const allCases = this.state.chartData.datasets;
    const barColor = this.state.chartData.datasets[0].backgroundColor;
    this.state.allFilteredData.forEach((elem) => {
      allLabels.push(elem.state);
      allCases[0].data.push(elem.deaths);
      const randomColorBar = () => {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let a = 0.5;
        let barColorGenerated = "rgba(" + x + "," + y + "," + z + "," + a + ")";
        barColor.push(barColorGenerated);
      };
      randomColorBar();
    });

    return (
      <div>
        <div className="chart-window">
          <Bar data={this.state.chartData} />
        </div>
        <NavLink to="/home" className="navButtonOnCasesPage">
          Return to Home Page &#8594;
        </NavLink>
      </div>
    );
  }
}

export default DeathsByState;
