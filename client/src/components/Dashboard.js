import React, { Component } from "react";
import DashNav from "./DashNav";
import PostCard from "./PostCard";
import LiveUpdate from "./LiveUpdates";
import Axios from "axios";
import jwtDecode from 'jwt-decode'
export default class Dashboard extends Component {
  
  
  componentDidMount() {
    //todo check localstorage if token is not available than redirect to login page
    if (!localStorage.getItem("auth-token")) {
      this.props.history.push("/login");
    }
    // Axios.get('/api/post/all')
    // .then(res=>{
    //   const data= res.data
    //   this.setState({
    //     posts:data
    //   })
    // })

    const { type } = jwtDecode(localStorage.getItem("auth-token"))
    if(type==="organization"){
      this.props.history.push("/compdash");
    }else{
      this.props.history.push("/dashboard")
    }
  }

    
    // renderPosts=()=>{
    //   return this.state.posts.map((elem,i)=>{
    //     return (
    //       <PostCard data={elem}  className="content"></PostCard>
    //     )
    //   })
    // }

  render() {
    return (
      <div>
          <DashNav history={this.props.history}></DashNav>
        <div className="dashboard">
        <div className="sidebar">
        <LiveUpdate history={this.props.history}></LiveUpdate>
        </div>
        <div className="content">
        <PostCard></PostCard>
        </div>

        </div>
      </div>
    );
  }
}
