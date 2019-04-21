import React, { Component } from 'react';
import './App.css';
import HomeNav from './components/HomeNav'
import Landing from './components/Landing'

import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Login from './components/Login'

class App extends Component {

  render() {
    return (
      <Router>
      <div>


      <div className="App">
      <Route exact path="/" component={HomeNav}></Route>
       <Route exact path='/' component={Landing}></Route>
       <div className="container"></div>
       <Route exact path='/signup' component={Signup}></Route>
       <Route exact path='/login' component={Login}></Route>
       <Route exact path='/dashboard' component={Dashboard}></Route>



      </div>


      </div>
      </Router>
      // <div className='App'>
      //   <HomeNav />
      //   {/* <CreateQuiz /> */}
      //   {/* <Landing></Landing> */}
      //   {/* // <Form></Form> */}
      //   {this.state.current>this.state.prev && this.state.len>this.state.current ? this.renderQues(this.state.current):null}
      //  <Signup></Signup>

      //   {/* <TEMP></TEMP> */}
      //   {/* <Question content="What is your favourite food?" /> */}
      // </div>
    );
  }
}

export default App;
