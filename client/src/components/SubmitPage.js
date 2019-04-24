import React, { Component } from "react";
// import quiz from '../data/data.json'
export default class SubmitPage extends Component {
  state = {};

  render() {
    // console.log("props ka question", this.props.quiz.question);
    return (
      <div className='container mt-5'>
        <h2>Thank you for taking this test </h2>
        <h4>Your response has been submitted</h4>
      </div>
    );
  }
}
