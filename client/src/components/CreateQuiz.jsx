import React, { Component } from "react";

export default class CreateQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: [],
      answer: [],
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      ans: "",
      index: 0
    };
    this.onChange = this.onChange.bind(this);
    this.newQuestion = this.newQuestion.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  //send quiz to backend
  onSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }

  //this method create array of quiz and answer key array
  newQuestion = async e => {
    e.preventDefault();
    const quiz = {};
    quiz.index = this.state.index;
    quiz.question = this.state.question;
    quiz.option1 = this.state.option1;
    quiz.option2 = this.state.option2;
    quiz.option3 = this.state.option3;
    quiz.option4 = this.state.option4;
    

    await this.setState(previous => ({
      index: this.state.index + 1,
      quizzes: [...previous.quizzes, quiz],
      answer: [...previous.answer, previous.ans]
    }));
    console.log(this.state.quizzes);
    console.log(this.state.answer);
    await this.setState({
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      ans: ""
    });
  };

  render() {
    return (
      <div className='container mt-3'>
            <form onSubmit={this.onSubmit}>
          <div class='form-group'>
            <label for='Input1'>Question?</label>
            <input
              type='textarea'
              class='form-control'
              id='Input1'
              name='question'
              value={this.state.question}
              onChange={this.onChange}
              placeholder='Type Question'
            />
          </div>
          <div class='form-group'>
            <div className='row'>
              <div className='col-6'>
                <label for='exampleFormControlInput1'>Option 1</label>
                <input
                  type='text'
                  class='form-control'
                  name='option1'
                  value={this.state.option1}
                  onChange={this.onChange}
                  placeholder='Option 1'
                />
              </div>
              <div className='col-6'>
                <label for='exampleFormControlInput1'>Option 2</label>
                <input
                  type='text'
                  class='form-control'
                  name='option2'
                  value={this.state.option2}
                  onChange={this.onChange}
                  placeholder='Option 2'
                />
              </div>
            </div>
            <div className='row mt-2'>
              <div className='col-6'>
                <label for='exampleFormControlInput1'>Option 3</label>
                <input
                  type='text'
                  class='form-control'
                  name='option3'
                  value={this.state.option3}
                  onChange={this.onChange}
                  placeholder='Option 3'
                />
              </div>
              <div className='col-6'>
                <label>Option 4</label>
                <input
                  type='text'
                  class='form-control'
                  name='option4'
                  value={this.state.option4}
                  onChange={this.onChange}
                  placeholder='Option 4'
                />
              </div>
            </div>
          </div>
          <div class='form-group'>
            <label>Answer</label>
            <input
              type='text'
              class='form-control'
              name='ans'
              value={this.state.ans}
              onChange={this.onChange}
              placeholder='Type correct option index'
            />
          </div>
          <div class='form-group'>
            <div>
              <button
                onClick={this.newQuestion}
                className='btn btn-primary mr-2'>
                <i class='fas fa-plus' />
              </button>

              <button type='submit' class='btn btn-primary'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
