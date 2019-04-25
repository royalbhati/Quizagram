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
    console.log("props", this.props);

    return (
      <div className='mt-5 feed'>
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
                title={this.props.data.name}
                description={this.props.data.text}
              />
            </Skeleton>
          </Card>
        </div>
      </div>
    );
  }
}
