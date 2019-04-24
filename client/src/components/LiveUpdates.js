import React, { Component } from "react";
import { Skeleton, Card, Icon, Avatar, Typography } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

const { Meta } = Card;
const { Text, Title } = Typography;
export default class LiveUpdates extends Component {
  onClick = event => {
    console.log("live update ka click", event.target.value);
    //TODO sourav
    setAuthToken(localStorage.getItem("auth-token"));

    axios.get(`/api/quiz/5cc0788658c367471adb966e`).then(res => {
      console.log(res.data);
      this.props.history.push({
        pathname: "/dashboard/public",
        state: { quiz: res.data }
      });
    });
  };
  render() {
    return (
      <div className='live'>
        <Text>
          <Title>
            <span style={{ color: "grey" }}>&nbsp; Interview Prep</span>
          </Title>
        </Text>
        {/*
     <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta
      title="Europe Street beat"
      description="www.instagram.com"
    />
  </Card> */}
        <button
          onClick={this.onClick}
          value='TCS'
          name='sds'
          className='alert alert-dismissible alert-warning'>
          <h4 className='alert-heading'>TCS</h4>
        </button>
        <button className='alert alert-dismissible alert-success'>
          <h4 className='alert-heading'>Infosys</h4>
        </button>
        <button className='alert alert-dismissible alert-info'>
          <h4 className='alert-heading'>SSC</h4>
        </button>
        <button className='alert alert-dismissible alert-danger'>
          <h4 className='alert-heading'>SSC</h4>
        </button>
      </div>
    );
  }
}
