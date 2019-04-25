import React, { Component } from "react";
import DashNav from "./DashNav";
import PostCard from "./PostCard";
import LiveUpdate from "./LiveUpdates";
import Axios from "axios";
import jwtDecode from "jwt-decode";
export default class Dashboard extends Component {
  state = {
    posts: ""
  };
  componentDidMount() {
    //todo check localstorage if token is not available than redirect to login page
    if (!localStorage.getItem("auth-token")) {
      this.props.history.push("/login");
    }
    Axios.get("/api/post/all").then(res => {
      const data = res.data;
      this.setState({
        posts: data
      });
    });

    const { type } = jwtDecode(localStorage.getItem("auth-token"));
    if (type === "organization") {
      this.props.history.push("/compdash");
    } else {
      this.props.history.push("/dashboard");
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
    console.log("state", this.state);

    return (
      <div>
        <DashNav history={this.props.history} />
        <div className='dashboard'>
          <div className='sidebar'>
            <LiveUpdate history={this.props.history} />
          </div>
          <div className='content'>
            {/* {this.renderPosts()} */}
            {/* <PostCard></PostCard> */}
          </div>
        </div>
      </div>
    );
  }
}
