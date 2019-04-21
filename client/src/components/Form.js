<<<<<<< HEAD
import React, { Component } from "react";
// import quiz from "./data/data.json";
export default class Form extends Component {
  state = {
    answers: []
  };
  onClick = event => {
    // console.log(this.staanswers);

    if (event.target.classList.contains("btn-outline-info")) {
      event.target.classList.remove("btn-outline-info");
      event.target.classList.add("btn-info");
    } else {
      event.target.classList.add("btn-outline-info");
      event.target.classList.remove("btn-info");
    }
    this.state.answers.push(event.target.value);
    console.log(this.state);
  };
  onSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div className='container mt-5'>
        <form onSubmit={this.onSubmit}>
          <div class='form-group'>
            <label className='ques'>Question 1 out of 20</label>
            <h5 class='label' for='exampleInputEmail1'>
              Why is React library used for?
            </h5>
            <div className='options'>
              <button
                onClick={this.onClick}
                className='a'
                value='For UI designing'
                class='btn btn-outline-info'
                style={{ cursor: "pointer" }}>
                For UI designing
              </button>
              <button
                onClick={this.onClick}
                className='b'
                value='For backend connection'
                class='btn btn-outline-info'
                style={{ cursor: "pointer" }}>
                For backend connection
              </button>
              <button
                onClick={this.onClick}
                className='c'
                value='For cleaning toilet'
                class='btn btn-outline-info'
                style={{ cursor: "pointer" }}>
                For cleaning toilet
              </button>
              <button
                onClick={this.onClick}
                className='d'
                value='For nothing'
                class='btn btn-outline-info'
                style={{ cursor: "pointer" }}>
                For nothing
              </button>
            </div>
          </div>

          <div class='form-group'>
            <label className='ques'>Question 1 out of 20</label>
            <h5 class='label' for='exampleInputEmail1'>
              Why is React library used for?
            </h5>
            <div className='options'>
              <input
                onClick={this.onClick}
                className='a'
                value='For UI designing'
                class='btn btn-outline-info'
                style={{ cursor: "pointer" }}
              />
              <input
                onClick={this.onClick}
                className='b'
                value='For backend connection'
                class='btn btn-outline-info'
                style={{ cursor: "pointer" }}
              />
              <input
                onClick={this.onClick}
                className='c'
                value='For cleaning toilet'
                class='btn btn-outline-info'
                style={{ cursor: "pointer" }}
              />
              <input
                onClick={this.onClick}
                className='d'
                value='For nothing'
                class='btn btn-outline-info'
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>

          <div class='form-group'>
            <label className='ques'>Question 1 out of 20</label>
            <h5 class='label' for='exampleInputEmail1'>
              Why is React library used for?
            </h5>
            <div className='options'>
              <input
                onClick={this.onClick}
                className='a'
                value='For UI designing'
                class='btn btn-outline-info'
                style={{ cursor: "pointer" }}
              />
              <input
                onClick={this.onClick}
                className='b'
                value='For backend connection'
                class='btn btn-outline-info'
                style={{ cursor: "pointer" }}
              />
              <input
                onClick={this.onClick}
                className='c'
                value='For cleaning toilet'
                class='btn btn-outline-info'
                style={{ cursor: "pointer" }}
              />
              <input
                onClick={this.onClick}
                className='d'
                value='For nothing'
                class='btn btn-outline-info'
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </form>
      </div>
    );
=======
import React, { Component } from 'react'
import quiz from '../data/data.json'
export default class Form extends Component {
    state ={
        answers:[
            {
                q:0,
                a:""
            }
        ],
        current:0
    }
    onClick = (event) =>{
        const options = Array.from(document.getElementsByClassName("opts"))
        console.log("options",options);


        if(event.target.classList.contains('btn-outline-info')){
            event.target.classList.remove('btn-outline-info');

            event.target.classList.add('btn-info');
            options.forEach(elem=>{
                if(elem!==event.target){
                    elem.classList.remove('btn-info');
                }

            })

        }else{
            event.target.classList.add('btn-outline-info');
            event.target.classList.remove('btn-info');
        }

    const answer={
        q:this.props.quiz.I,
        a: event.target.value

    }
    this.setState(prevState=>
        {
        const prevOpt=prevState.answers[prevState.answers.length-1].q
        if(prevState.answers[prevState.answers.length-1].q===answer.q){
            return {answers:[{q:prevOpt,a:answer.a}]}
        }else{
            return {answers:[...prevState.answers,answer]}
        }

    })

    }

    onSubmit= (event)=>{
        event.preventDefault();
        console.log(this.state)
    }

    optionRender=()=>{
        return this.props.quiz.O.map((elem,i)=>{
            return(
                <button onClick ={this.onClick}  value={elem} class=" opts btn btn-outline-info" style={{cursor:'pointer'}}>{elem}</button>
            )
        })
    }

  render() {
    console.log("props",this.props)
    return (
      <div className="container mt-5">
          <form onSubmit={this.onSubmit}>
          <div class="form-group">
            <label className="ques">Question 1 out of 20</label>
            <h5  class="label" for="exampleInputEmail1">{this.props.quiz.Q}</h5>
        <div className="options">

            {this.optionRender()}

        </div>
        <div className="next">
        <button className="btn btn-primary mt-5 btn-lg" onClick={this.props.onClick}>Next</button>
        </div>
        </div>
          </form>
      </div>
    )
>>>>>>> ba0e302bdf4e0ebfbab4f1c8148ab4203f8454a9
  }
}
