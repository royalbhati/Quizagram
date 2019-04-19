import React, { Component } from 'react';
import './App.css';
import HomeNav from './components/HomeNav'
import Landing from './components/Landing'
import Form from './components/Form'
import TEMP from './components/temp'
class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeNav></HomeNav>
        {/* <Landing></Landing> */}
        {/* <Form></Form> */}
        <TEMP></TEMP>

      </div>
    );
  }
}

export default App;
