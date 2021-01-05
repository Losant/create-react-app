import React, { Component } from 'react';
import Status from "./components/Status/Status"
import getTarget from "./targets";
import logo from './logo.svg';
import './App.css';

class App extends Component {

  getTargetsConfig() {
    const dev = getTarget("development");
    const staging = getTarget("staging",false);
    const prod = getTarget("production",false);

    if (!dev.url  || !dev.appId) {
      throw new Error('Please configure targets.js with a default Losant URL and application ID.');
    }

    return { 
      mockAPI: process.env.REACT_APP_MOCK_API,
      target: process.env.REACT_APP_TARGET,
      developmentURL: dev.url,
      developmentAppId: dev.appId,
      stagingURL: staging.url,
      stagingAppId: staging.appId,
      productionURL: production.url,
      productionAppId: production.appId  
    };
  }

  render() {

    const { 
      mockAPI,
      target,
      developmentURL, 
      developmentAppId, 
      stagingURL, 
      stagingAppId, 
      productionURL, 
      productionAppId 
    } = this.getTargetsConfig();

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Losant Solutions</h2>
        </div>
        <ul className="App-intro">
          <li> Mock API (env)? { mockAPI }</li>
          <li> Target env: { target }</li>
          <li> *Development URL: { developmentURL }</li>
          <li> *Development App ID: { developmentAppId }</li>
          <li> Staging URL: { stagingURL }</li>
          <li> Staging App ID: { stagingAppId }</li>
          <li> Production URL: { productionURL }</li>
          <li> Production App ID: { productionAppId }</li>
        </ul>
        <Status />
      </div>
    );
  }
}

export default App;