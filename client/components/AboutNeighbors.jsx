import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";

import { Box, Text} from '@chakra-ui/react';
import axios from "axios";

class AboutNeighbors extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numRisky: 0,
      numPositive: 0,
    };
  }

  // const [numRisky, setRisky] = useState('');
  // const [numPositive, setPositive] = useState('');

  ComponentDidMount(){
    console.log('here in comp did mount')
    axios.get(`/results/zip/${props.email}`).then((res) => {

      let risky = 0;
      let positive = 0;
      console.log('res.data:', res.data);
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].test === 'Positive') {
          console.log('hi');
          positive = positive + 1;
        }
      }
      this.setState({numPositive: positive});

      // setRisky({numRisky: risky});
      // setPositive({numPositve: positive});
    });
  }

  // return (
  //   <Box className="about-window" mt='50px'>
  //     <h3>Results from Neighbors</h3>
  //     <p>
  //       Below are results from neighbors in your Zip Code! Wash them Hands!
  //     </p>
  //     <p>
  //       <Text fontSize='2xl' >
  //         Number of Neighbors scoring above Risk Level 4: &#8594;
  //       </Text >
  //       <Text fontSize='2xl' >
  //         Number of Neighbors testing positive for COVID-19: &#8594;
  //       </Text >
  //     </p>
  //   </Box>

  // );

  render() {
    return (
      <Box className="about-window" mt='50px'>
      <h3>Results from Neighbors</h3>
      <p>
        Below are results from neighbors in your Zip Code! Wash them Hands!
      </p>
      <p>
        <Text fontSize='2xl' >
          Number of Neighbors scoring above Risk Level 4: &#8594;
        </Text >
        <Text fontSize='2xl' >
    Number of Neighbors testing positive for COVID-19: {this.state.numPositive}&#8594;
        </Text >
      </p>
    </Box>
    );
  }
}

export default AboutNeighbors;
