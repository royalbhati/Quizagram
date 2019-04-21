import React, { Component } from 'react'
import Form from './Form'
import quiz from '../data/data.json'
export default class TakeQuiz extends Component {
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
      <div>
    {this.state.current>this.state.prev && this.state.len>this.state.current ? this.renderQues(this.state.current):null}
      </div>
    )
  }
}
