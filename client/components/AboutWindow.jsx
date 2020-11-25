import React from "react";
import { Redirect, NavLink } from "react-router-dom";
import { FormControl, FormLabel, Switch } from '@chakra-ui/react';
function AboutWindow(props) {
  return (
    <div className="about-window">
         <FormControl className="sms-form" display="flex" alignItems="center">
  <FormLabel htmlFor="sms-alerts" mb="0">
    Enable SMS alerts?
  </FormLabel>
  <Switch colorScheme="orange" id="sms-alerts"/>
</FormControl>
      <h3>About the Quiz</h3>
      <p>
        This tool will help you assess your activities and determine your risk
        of contracting COVID-19. It will also offer guidance on what exactly
        your riskiest activities are.
      </p>
      <p>
        This information is based on the Texas Medical Association guidelines
        and has been ranked by physicians from the TMA COVID-19 task force and
        the TMA committee on infectious diseases.
      </p>
      <p>
        <NavLink to="/CasesByState" className="navButtons">
          See Total Cases By State &#8594;
        </NavLink>
        <br></br>
        <NavLink to="/DeathsByState" className="navButtons">
          See Total Deaths By State &#8594;
        </NavLink>
        <br></br>
        <NavLink to="/PastResults" className="navButtons">
          See Your Past Results &#8594;
        </NavLink>
        <br></br>
      </p>
    </div>
  );
}

export default AboutWindow;
