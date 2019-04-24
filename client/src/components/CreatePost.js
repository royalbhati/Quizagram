import React, { Component } from 'react'
import { Card, Icon, Avatar, } from 'antd';
import jwt_decode from 'jwt-decode'
import axios from 'axios'
export default class CreatePost extends Component {

  state={
    post:"",
    user_id:jwt_decode(localStorage.getItem('auth-token')).id,
    name:jwt_decode(localStorage.getItem('auth-token')).name
  }

  onChange= (event) =>{
this.setState({
  post:event.target.value 
})
  }
  onSubmit = (event)=>{
    event.preventDefault();
    console.log(this.state);
    //axios request 
    axios.post('/api/post',this.state)
    .then(()=>{console.log("post submitted")    
    })
  }
  render() {
    return (
      <div>
         <Card className="m-auto "
          style={{ width: 600, marginTop: 16 }}
        >
        <form onSubmit={this.onSubmit}>
        <div className="AddPost">
        <img className="PostBoxpic" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
         <input onChange={this.onChange} value={this.state.post} className="PostBoxInput" type="textarea" placeholder="Create a Post"></input>
        <input type="submit"></input>
         </div>
         </form>
        </Card>
      </div>
    )
  }
}
