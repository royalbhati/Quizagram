import React, { Component } from "react";
import Form from "./Form";
import quiz from "../data/data.json";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import PublicQuizDisplay from './PublicQuizDisplay'
import jwtDecode from 'jwt-decode'
export default class TakeQuiz extends Component {
  state = {
    quiz: this.props.location.state.quiz,
    current: 0,
    prev: -1,
    len: this.props.location.state.quiz.answer.length,
    answer:this.props.location.state.quiz.answer
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
    console.log("data aa gaya", this.props.location.state.quiz);
  }

  onClick = (event) => {
    console.log("event",event.target.id)
   
    const options = Array.from(document.getElementsByClassName("opts"));
    options.forEach(elem => {
        elem.classList.remove("btn-info");
        elem.classList.add("btn-outline-info");
        elem.disabled=false;    
        elem.classList.remove("btn-success")
        elem.classList.remove("btn-danger")
  
  
      });
     
    if(this.state.current===1){
      this.setState(prevState => ({
        current: prevState.current,
        prev: prevState.current
      }));
    }else{
      this.setState(prevState => ({
        current: prevState.current + 1,
        prev: prevState.current
    }))}
   
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
        actualAnswer={this.state.answer}
      />
    );
  };
  submitQuiz = ()=>{
      const score=localStorage.getItem("score")
    return(<PublicQuizDisplay score={score}></PublicQuizDisplay>)
  }
  
  render() {
    return (
      
      <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Test conducted by 'this.props.quiz.companyName'</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


</nav>
        {this.state.current > this.state.prev &&
        this.state.len > this.state.current
          ? this.renderQues(this.state.current)
          :this.submitQuiz()}
      </div>
    );
  }
}
