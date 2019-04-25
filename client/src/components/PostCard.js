import React, { Component } from "react";
// import  from 'antd'
import CreatePost from "./CreatePost";

import { Skeleton, Card, Icon, Avatar } from "antd";
const { Meta } = Card;
export default class PostCard extends Component {
  state = {
    loading: true
  };

  //   onChange = (checked) => {
  //     this.setState({ loading: !checked });
  //   }

  render() {
    const { loading } = this.state;
    console.log("props",this.props);
    
    return (
      <div className='mt-5 feed'>
        <CreatePost />
        <div className='feedPost'>
          <Card
            className='m-auto post'
            style={{ width: 600, marginTop: 16 }}
            actions={[
              <Icon type='setting' />,
              <Icon type='edit' />,
              <Icon type='ellipsis' />
            ]}>
            <Skeleton loading={false} avatar active>
              <Meta
                avatar={
                  <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                }
                title='Akash'
                description="Now let's use some more properties. Consider a list of 6 items, all with a fixed dimensions in a matter of aesthetics but they could be auto-sized. We want them to be evenly and nicely distributed on the horizontal axis so that when we resize the browser, everything is fine (without media queries!)."
              />
            </Skeleton>
          </Card>
        </div>
       
      </div>
    );
  }
}
