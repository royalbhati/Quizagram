import React, { Component } from "react";
// import quiz from '../data/data.json'
export default class Form extends Component {
  state = {
    
  };
 
  render() {
    // console.log("props ka question", this.props.quiz.question);
    return (
      <div className='container mt-5'>
       <h2>Thank you for taking this test </h2>
       <h4>Please click on submit to finish the test</h4>
       <button className="btn btn-primary" onClick={this.props.onSubmitQuiz}>Submit your response</button>

      </div>
    );
  }
}
