<<<<<<< HEAD
import React, { Component } from "react";
import "./App.css";
import HomeNav from "./components/HomeNav";
import Landing from "./components/Landing";
import Form from "./components/Form";
import TEMP from "./components/temp";
// import CreateQuiz from "./components/CreateQuiz";
=======
import React, { Component } from 'react';
import './App.css';
import HomeNav from './components/HomeNav'
import Landing from './components/Landing'
import Form from './components/Form'
import TEMP from './components/temp'
import quiz from './data/data.json'
>>>>>>> ba0e302bdf4e0ebfbab4f1c8148ab4203f8454a9
class App extends Component {
  state={
    quiz:quiz
  }

  renderQues =()=>{
    return this.state.quiz.map((elem)=>{
      return(
        <Form quiz={elem}></Form>
      )
        }
    )
  }

  render() {
    return (
      <div className='App'>
        <HomeNav />
        {/* <CreateQuiz /> */}
        {/* <Landing></Landing> */}
<<<<<<< HEAD
        {/* <Form></Form> */}
        {/* <TEMP></TEMP> */}
=======
        {/* // <Form></Form> */}
        {this.renderQues()}
        {/* <TEMP></TEMP> */}

>>>>>>> ba0e302bdf4e0ebfbab4f1c8148ab4203f8454a9
      </div>
    );
  }
}

export default App;
