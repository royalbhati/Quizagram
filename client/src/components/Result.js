import React, { Component } from "react";
import Axios from "axios";

export default class Result extends Component {
//   onClick=()=>{
//     this.props.history.push({
//       pathname:"/result",
//       state:{"asdasda":"ASDsaa"}
//     })
//     }
  render() {
    // const { quiz_id, quizname } = this.props;
    console.log("sdf",this.props.location.state.score);

    return (
      <div>
        <div class='col'>
          <div class='card' style={{ width: " 18rem" }}>
            <div class='card-body'>
              <h5 class='card-title'><strong>Quiz Result </strong></h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
