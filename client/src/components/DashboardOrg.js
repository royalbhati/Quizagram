import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class DashboardOrg extends Component {
  render() {
    return (
      <div className="container mt-5 ">

         <Link to="/dashboard/createQuiz" class="btn button-style">Create Quiz</Link>

      </div>
    )
  }
}
