import React, { Component } from "react";

export default class Singlecard extends Component {
  render() {
    const { quiz_id, quizname } = this.props;
    // console.log(quiz_id, quizname);

    return (
      <div>
        <div class='col'>
          <div class='card' style={{ width: " 18rem" }}>
            <div class='card-body'>
              <h5 class='card-title'><strong>Quiz Name:</strong>{quizname}</h5>
              <h6 class='card-text'><strong>Key:</strong>{quiz_id} </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
