import React, { Component } from "react";
// import quiz from '../data/data.json'
export default class Form extends Component {
  state = {
    answers: [
      {
        question: 0,
        a: ""
      }
    ],
    current: 0
  };
  onClick = event => {
    const options = Array.from(document.getElementsByClassName("opts"));
    console.log("options", options);

    if (event.target.classList.contains("btn-outline-info")) {
      event.target.classList.remove("btn-outline-info");

      event.target.classList.add("btn-info");
      options.forEach(elem => {
        if (elem !== event.target) {
          elem.classList.remove("btn-info");
          elem.classList.add("btn-outline-info");
        }
      });
    } else {
      // event.target.classList.add('btn-outline-info');
      // event.target.classList.remove('btn-info');
    }

    const answer = {
      question: this.props.quiz.index,
      a: event.target.value
    };
    this.setState(prevState => {
      const prevOpt = prevState.answers[prevState.answers.length - 1].question;
      if (
        prevState.answers[prevState.answers.length - 1].question ===
        answer.question
      ) {
        return { answers: [{ question: prevOpt, a: answer.a }] };
      } else {
        return { answers: [...prevState.answers, answer] };
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  optionRender = () => {
    return this.props.quiz.options.map((elem, i) => {
      return (
        <button
          onClick={this.onClick}
          value={elem}
          class=' opts btn btn-outline-info'
          style={{ cursor: "pointer" }}>
          {elem}
        </button>
      );
    });
  };

  render() {
    console.log("props ka question", this.props.quiz.question);
    return (
      <div className='container mt-5'>
        <form onSubmit={this.onSubmit}>
          <div class='form-group'>
            <label className='ques'>Question 1 out of 20</label>
            <h5 class='label' for='exampleInputEmail1'>
              {this.props.quiz.question}
            </h5>
            <div className='options'>{this.optionRender()}</div>
            <div className='next'>
              <button
                className='btn btn-primary mt-5 btn-lg'
                onClick={this.props.onClick}>
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
