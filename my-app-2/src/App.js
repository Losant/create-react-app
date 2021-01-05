import React, { Component } from 'react';
import Status from './components/Status/Status';
import { getTarget } from './targets';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  getTargetsConfig() {
    const dev = getTarget('development');

    return {
      mockAPI: process.env.REACT_APP_MOCK_API,
      target: process.env.REACT_APP_TARGET,
      developmentURL: dev.url,
      developmentAppId: dev.appId
    };
  }

  render() {

    const {
      mockAPI,
      target,
      developmentURL,
      developmentAppId
    } = this.getTargetsConfig();

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Losant Solutions</h2>
          <ul className="App-intro">
            <li> Please run <code>losant configure</code> in the "build" directory</li>
            <li> Target env: { target }</li>
            <li> Development URL: { developmentURL ? developmentURL : 'Please set in ./targets.js' }</li>
            <li> Development App ID: { developmentAppId ? developmentAppId : 'Please set in ./targets.js' }</li>
          </ul>
          Example API Call: <Status /> { mockAPI ? '(mocked)' : '(not mocked)'}
        </div>
      </div>
    );
  }
}

export default App;
