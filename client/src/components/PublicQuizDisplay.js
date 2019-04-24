import React, { Component } from "react";
// import quiz from '../data/data.json'
export default class PublicQuizDisplay extends Component {
  state = {};

  render() {
    // console.log("props ka question", this.props.quiz.question);
    return (
      <div className='container mt-5'>
       <h2>Your performance </h2>
       <h4>You have scored {this.props.score}</h4>
       <button className="btn btn-primary" onClick={this.props.onSubmitQuiz}>Submit your response</button>

      </div>
    );
  }
}
