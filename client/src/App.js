import React, { Component } from 'react';
import './App.css';
import HomeNav from './components/HomeNav'
import Landing from './components/Landing'
import Form from './components/Form'
import TEMP from './components/temp'
import quiz from './data/data.json'
import Question from './components/Question';
import QuestionCount from './components/QuestionCount';
import AnswerOption from './components/AnswerOption'



class App extends Component {
  state={
    quiz:quiz,
    current:0,
    prev:-1,
    len:quiz.length
  }

  onClick=()=>{
    const options = Array.from(document.getElementsByClassName("opts"))
    options.forEach(elem=>{
      elem.classList.remove('btn-info')
      elem.classList.add('btn-outline-info')
})
    this.setState(prevState=>({
      current:prevState.current+1,
      prev:prevState.current
    }))

  }
  renderQues =(i)=>{
    return (<Form onClick={this.onClick} classBtn ='btn-outline-info' quiz={this.state.quiz[i]}></Form>)
  }

  render() {
    return (
      <div className='App'>
        <HomeNav />
        <CreateQuiz />
        {/* <Landing></Landing> */}
        {/* // <Form></Form> */}
        {this.state.current>this.state.prev && this.state.len>this.state.current ? this.renderQues(this.state.current):null}


        {/* <TEMP></TEMP> */}
        {/* <Question content="What is your favourite food?" /> */}
      </div>
    );
  }
}

export default App;
