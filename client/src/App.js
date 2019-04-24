import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import HomeNav from "./components/HomeNav";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import TakeQuiz from "./components/TakeQuiz";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateQuiz from "./components/CreateQuiz";
import Login from "./components/Login";
import DashOrg from "./components/DashboardOrg";

class App extends Component {
  render() {
  

    return (
      <Router>
        <div>
          <div className='App'>
            <Route exact path='/' component={HomeNav} />
            <Route exact path='/' component={Landing} />
            <div className='container' />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/CompDash' component={DashOrg} />
            <Route exact path='/dashboard/takeQuiz' component={TakeQuiz} />
            <Route exact path='/dashboard/createQuiz' component={CreateQuiz} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
