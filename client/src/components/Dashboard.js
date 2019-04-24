import React, { Component } from "react";
import DashNav from "./DashNav";
import PostCard from "./PostCard";
import LiveUpdate from "./LiveUpdates";
export default class Dashboard extends Component {
  componentDidMount() {
    //todo check localstorage if token is not available than redirect to login page
    if (!localStorage.getItem("auth-token")) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div>
        <DashNav history={this.props.history} />
        <div className='dashboard'>
          <div className='sidebar'>
            <LiveUpdate />
          </div>
          <div className='content'>
            <PostCard className='content' />
          </div>
        </div>
      </div>
    );
  }
}
