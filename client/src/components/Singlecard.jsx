import React, { Component } from "react";
import Axios from "axios";

export default class Singlecard extends Component {
  state={
    result:""
  }
  onClick=()=>{
    Axios.get(`/api/quiz/result/${this.props.quiz_id}`)
    .then(res=>{
      const data=res.data
      this.setState({
        result:data
      })
    })
    this.props.history.push({
      pathname:"/result",
      state:{result:this.state.result}
    })
    }
  render() {
    const { quiz_id, quizname } = this.props;
    // console.log(quiz_id, quizname);

    return (
      <div>
        <div class='col'>
          <div class='card' style={{ width: " 18rem" }}>
            <div class='card-body'>
              <h5 class='card-title'><strong>Quiz Name:</strong>{quizname}</h5>
              <h6 class='card-text'><strong>Key:</strong>{quiz_id} </h6>
              <button onClick={this.onClick} className="btn btn-primary">Results</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
