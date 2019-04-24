import React, { Component } from "react";
import DashNav from "./DashNav";
import PostCard from "./PostCard";
import LiveUpdate from "./LiveUpdates";
import Axios from "axios";
export default class Dashboard extends Component {
  componentDidMount() {
    //todo check localstorage if token is not available than redirect to login page
    if (!localStorage.getItem("auth-token")) {
      this.props.history.push("/login");
    }
    Axios.get('')
    .then(res=>{
      const data= res.data
      this.setState({
        posts:data
      })
    })


    }
    renderPosts=()=>{
      return this.state.posts.map((elem,i)=>{
        return (
          <PostCard data={elem}  className="content"></PostCard>
        )
      })
    }

  render() {
    return (
      <div>
          <DashNav history={this.props.history}></DashNav>
        <div className="dashboard">
        <div className="sidebar">
        <LiveUpdate history={this.props.history}></LiveUpdate>
        </div>
        <div className="content">
        {this.renderPosts()}
        </div>

        </div>
      </div>
    );
  }
}
