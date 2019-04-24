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
              <h5 class='card-title'>{quizname}</h5>
              <p class='card-text'>{quiz_id} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
