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
    current: 0,
 
  };
  onClick = event => {
    const options = Array.from(document.getElementsByClassName("opts"));
    console.log("options", event.target.id);

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
      a:  event.target.id
    };
    this.setState(prevState => {
      const prevOpt = prevState.answers[prevState.answers.length - 1].question;
      if (
        prevState.answers[prevState.answers.length - 1].question ===
        answer.question
      ) {
        return { answers: [{ question: prevOpt, a: answer.a }],current:prevState.current+1 };
      } else {
        return { answers: [...prevState.answers, answer],current:prevState.current+1 };
      }
    });

  // For public quiz
  if(this.props.actualAnswer){
    if(this.props.actualAnswer[this.state.current]==event.target.id){
      if(event.target.classList.contains("btn-info")|| event.target.classList.contains("btn-outline-info")){
        event.target.classList.remove("btn-outline-info");
        event.target.classList.remove("btn-info");
        event.target.classList.add("btn-success")


      }
     
    }else{
      event.target.classList.remove("btn-outline-info");
        event.target.classList.remove("btn-info");
        event.target.classList.add("btn-danger")
    }
      

  }
  
  };

  onSubmit = event => {
    event.preventDefault();

    };

  optionRender = () => {
    return this.props.quiz.options.map((elem, i) => {
      return (
        <button
          onClick={this.onClick}
          value={elem}
          id={i+1}
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
            <label className='ques'>Question {this.props.current+1} out of {this.props.len}</label>
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
