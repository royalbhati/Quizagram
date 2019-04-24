import React, { Component } from 'react'
import { Card, Icon, Avatar, } from 'antd';

export default class CreatePost extends Component {
  render() {
    return (
      <div>
         <Card className="m-auto "
          style={{ width: 600, marginTop: 16 }}
        >
        <div className="AddPost">
        <img className="PostBoxpic" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
         <input className="PostBoxInput" type="textarea" placeholder="Create a Post"></input>
         </div>
        </Card>
      </div>
    )
  }
}
