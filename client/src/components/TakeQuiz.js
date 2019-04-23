import React, { Component } from "react";
import Form from "./Form";
import quiz from "../data/data.json";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
export default class TakeQuiz extends Component {
  state = {
    quiz: quiz,
    current: 0,
    prev: -1,
    len: quiz.length
  };
  // componentDidMount() {
  //set toekn and fetch quizzes
  // const token = localStorage.getItem("auth-token");
  // setAuthToken(token);

  // }
  componentDidMount() {
    //todo check localstorage if token is not available than redirect to login page
    if (!localStorage.getItem("auth-token")) {
      this.props.history.push("/login");
    }
  }

  onClick = () => {
    const options = Array.from(document.getElementsByClassName("opts"));
    options.forEach(elem => {
      elem.classList.remove("btn-info");
      elem.classList.add("btn-outline-info");
    });
    this.setState(prevState => ({
      current: prevState.current + 1,
      prev: prevState.current
    }));
  };
  renderQues = i => {
    return (
      <Form
        onClick={this.onClick}
        classBtn='btn-outline-info'
        quiz={this.state.quiz[i]}
      />
    );
  };
  render() {
    return (
      <div>
        {this.state.current > this.state.prev &&
        this.state.len > this.state.current
          ? this.renderQues(this.state.current)
          : null}
      </div>
    );
  }
}
