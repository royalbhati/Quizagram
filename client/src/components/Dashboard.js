import React, { Component } from 'react'
import DashNav from './DashNav'
import PostCard from './PostCard'
import LiveUpdate from './LiveUpdates'
export default class Dashboard extends Component {

  render() {
    return (
      <div>
          <DashNav></DashNav>
        <div className="dashboard">
        <div className="sidebar">
        <LiveUpdate ></LiveUpdate>
        </div>
        <div className="content">
        <PostCard className="content"></PostCard>
        </div>

        </div>
      </div>
    )
  }
}
