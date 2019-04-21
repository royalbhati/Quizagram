  
import React, { Component } from "react"; 
import "./App.css";
import HomeNav from "./components/HomeNav";
import Landing from "./components/Landing";
import Form from "./components/Form";
import TEMP from "./components/temp";
import CreateQuiz from "./components/CreateQuiz";


class App extends Component {
  state = {
    quiz: ""
  }

  // renderQues =()=>{
  //   return this.state.quiz.map((elem)=>{
  //     return(
  //       <Form quiz={elem}></Form>
  //     )
  //       }
  //   )
  // }

  render() {
    return (
      <div className='App'>
        <HomeNav />
        <CreateQuiz />
        {/* <Landing></Landing> */}
        {/* // <Form></Form> */}
        {/* {this.renderQues()} */}
        {/* <TEMP></TEMP> */}

      </div>
    );
  }
}

export default App;
