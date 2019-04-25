import React, { Component } from "react";
import Form from "./Form";
import quiz from "../data/data.json";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import SubmitPage from "./SubmitPage";
import jwtDecode from "jwt-decode";
// import setAuthToken from "../utils/setAuthToken"
export default class TakeQuiz extends Component {
  state = {
    quiz: this.props.location.state.quiz,
    current: 0,
    prev: -1,
    len: this.props.location.state.quiz.answer.length,
    time: {},
    seconds: 30,
    timer: 0,
    timeLeft: true
  };
  // componentDidMount() {
  // set toekn and fetch quizzes
  // const token = localStorage.getItem("auth-token");
  // setAuthToken(token);
  // }

  componentDidMount() {
    //todo check localstorage if token is not available than redirect to login page
    if (!localStorage.getItem("auth-token")) {
      this.props.history.push("/login");
    }
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    console.log("data aa gaya", this.props.location.state.quiz._id);
    if (this.state.timer == 0 && this.state.seconds > 0) {
      this.setState({
        timer: setInterval(this.countDown, 1000)
      });
    }
  }

  onClick = event => {
    console.log("event", event.target.id);
    const options = Array.from(document.getElementsByClassName("opts"));
    options.forEach(elem => {
      elem.classList.remove("btn-info");
      elem.classList.add("btn-outline-info");
    });

    if (this.state.current === 1) {
      this.setState(prevState => ({
        current: prevState.current,
        prev: prevState.current
      }));
    } else {
      this.setState(prevState => ({
        current: prevState.current + 1,
        prev: prevState.current
      }));
    }
  };
  renderQues = i => {
    return (
      <Form
        onClick={this.onClick}
        classBtn='btn-outline-info'
        quiz={this.state.quiz.quizzes[i]}
        len={this.state.len}
        current={this.state.current}
        onSubmitQuiz={this.onSubmitQuiz}
        // id={this.props.location.state.quiz._id}
        history={this.props.history}
      />
    );
  };

  submitQuiz = () => {
    return <SubmitPage />;
  };
  onSubmitQuiz = () => {
    // console.log("submit ke time",this.state);
    //   const answerObj = {
    //     answersArr: this.state,
    //     user_id: jwtDecode(localStorage.getItem("auth-token")).id,
    //     quiz_id: this.state.quiz._id
    //   };
    //   // console.log(jwtDecode(getItem('auth-token'),"token");
    //   console.log("answer object", answerObj);
    // setAuthToken(localStorage.getItem("auth-token"));
    // axios
    //   .post("/api/quiz/eval", answerObj)
    //   .then(res => console.log("submitted"));
  };
  secondsToTime = secs => {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  };
  startTimer = () => {};
  countDown = () => {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.state.timer);
      this.setState({
        timeLeft: false
      });
    }
  };
  render() {
    return (
      <div>
        <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
          <a class='navbar-brand' href='#'>
            Test conducted by 'this.props.quiz.companyName'
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span class='navbar-toggler-icon' />
          </button>
        </nav>

        <h4 style={{ background: "#FF9800", color: "white" }}>
          Time left : &nbsp;&nbsp; m: {this.state.time.m} s: {this.state.time.s}
        </h4>

        {this.state.current > this.state.prev &&
        this.state.len > this.state.current &&
        this.state.timeLeft
          ? this.renderQues(this.state.current)
          : this.submitQuiz()}
      </div>
    );
  }
}
