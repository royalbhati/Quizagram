import React, { Component } from "react";
import SingleCard from "./Singlecard";
export default class Cards extends Component {
  render() {
    const quiz_data = this.props.quiz_data || [];
    // console.log(quiz_data);

    return (
      <div>
        <div class='container'>
          <div class='row'>
            {quiz_data.map((quiz,i) => {
              return (
                <SingleCard
                  key={i}
                  quiz_id={quiz.quiz_id}
                  quizname={quiz.quizname}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
