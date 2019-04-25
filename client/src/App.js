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
import PublicQuiz from "./components/PublicQuiz";
import SubmitPage from './components/SubmitPage'
import Result from './components/Result'
import jwt_decode from "jwt-decode";

// if(localStorage.getItem("auth-token")){
  
//     const token = localStorage.getItem("auth-token");

//     if (jwt_decode(token).type === "organization") {
//       window.location.href = "/compDash";
//     } else {
//       window.location.href = "/dashboard";
//     }
  
// }
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
            <Route exact path='/dashboard/public/' component={PublicQuiz} />
            <Route exact path='/dashboard/submitted/' component={SubmitPage} />
            <Route exact path='/result/' component={Result} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
