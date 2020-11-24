import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
//import classes from "./LineGraph.module.css";

class LocalData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Total Cases",
            data: [],
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
        const startDate = "2020-11-22";
        const filteredData = data.filter((states) => states.date >= startDate);
        const allLabels = this.state.chartData.labels;
        const allCases = this.state.chartData.datasets[0];
        console.log(filteredData);
        filteredData.forEach((elem) => {
          allLabels.push(elem.state);
          allCases[0].data.push(elem.cases);
          console.log(elem.cases);
          //console.log(allLabels);
        });
        console.log(filteredData);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }
  render() {
    return (
      <div className="chart-window">
        <Bar data={this.state.chartData} />
      </div>
    );
  }
}

export default LocalData;
