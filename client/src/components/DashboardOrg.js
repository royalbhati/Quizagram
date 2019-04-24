import React, { Component } from "react";
import { Link } from "react-router-dom";
import OrgNav from "./OrgNav";
import jwtDecode from "jwt-decode";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import Cards from "./Cards";
export default class DashboardOrg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_data: "" //baad mein bnaenge data ke hisaab se
    };
  }

  componentDidMount() {
    //todo check localstorage if token is not available than redirect to login page
    if (!localStorage.getItem("auth-token")) {
      this.props.history.push("/login");
    }
    // send req to backend to accept all quiz name and their id

    setAuthToken(localStorage.getItem("auth-token"));
    const { companyName } = jwtDecode(localStorage.getItem("auth-token"));
    // console.log(companyName);
    axios
      .get(`/api/quiz/name/${companyName}`)
      .then(res => {
        // console.log("mhv", res.data);
        this.setState({ quiz_data: res.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    // console.log("data=", this.state.quiz_data);

    return (
      <div>
        <OrgNav />
        <div className='container mt-5'>
          <div className='compDiv'>
            {/* <button class='alert alert-dismissible alert-warning '>
              <h4 class='alert-heading compButton'>Create Quiz</h4>
            </button> */}
            <Cards quiz_data={this.state.quiz_data} />
            {/* <Link class="btn button-style">Create Quiz</Link> */}
          </div>
        </div>
      </div>
    );
  }
}
