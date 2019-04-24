import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import OrgNav from './OrgNav'
export default class DashboardOrg extends Component {

  componentDidMount(){
    //todo check localstorage if token is not available than redirect to login page
    if(!localStorage.getItem("auth-token")){
      this.props.history.push("/login")
    }
  }
  render() {
    return (
      <div>
      <OrgNav></OrgNav>
      <div className="container mt-5">
      <div className="compDiv">
      <button class="alert alert-dismissible alert-warning ">
          <h4 class="alert-heading compButton">Create Quiz</h4>
      </button>
         {/* <Link class="btn button-style">Create Quiz</Link> */}
         </div>
         </div>
      </div>
    )
  }
}
