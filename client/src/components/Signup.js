import React, { Component } from "react";
import "./signup.css";
import axios from "axios";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password1: "",
      password2: "",
      mobile: "",
      companyName: ""
    };
  }
  onClick = event => {
    // const signUpButton = document.getElementById('signUp');
    // const signInButton = document.getElementById('signIn');
    const container = document.getElementById("container");
    this.setState({
      name: "",
      email: "",
      password1: "",
      password2: "",
      mobile: "",
      companyName: ""
    });
    container.classList.add("right-panel-active");
  };
  onClick2 = () => {
    const container = document.getElementById("container");
    this.setState({
      name: "",
      email: "",
      password1: "",
      password2: "",
      mobile: "",
      companyName: ""
    });
    container.classList.remove("right-panel-active");
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onUserSignup = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password1,
      password2: this.state.password2,
      mobile: this.state.mobile,
      usertype: "student"
    };
    //axios post request
    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(function(response) {
        console.log(response);
      });

    this.props.history.push("/login");
  };
  onCompanySignup = e => {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password1,
      password2: this.state.password2,
      mobile: this.state.mobile,
      usertype: "organization",
      companyName: this.state.companyName
    };
    //axios post request
    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(function(response) {
        console.log(response);
      });

    this.props.history.push("/login");
  };

  render() {
    // const {errors}= this.state

    return (
      <div class='container' id='container'>
        <div class='form-container sign-up-container'>
          <form className='Authform'>
            <h1>Business Account Signup</h1>
            <div class='social-container'>
              <a href='#' class='social links'>
                <i class='fab fa-facebook-f' />
              </a>
              <a href='#' class='social links'>
                <i class='fab fa-google-plus-g' />
              </a>
              <a href='#' class='social links'>
                <i class='fab fa-linkedin-in' />
              </a>
            </div>
            <span>To be filled by a company representitive</span>
            <input
              type='text'
              placeholder='Company Name'
              name='companyName'
              value={this.state.companyName}
              onChange={this.onChange}
            />
            <input
              type='email'
              placeholder='Email'
              value={this.state.email}
              name='email'
              onChange={this.onChange}
            />
            <input
              type='password'
              placeholder='Password'
              value={this.state.password1}
              name='password1'
              onChange={this.onChange}
            />
            <input
              type='password'
              placeholder='Confirm Password'
              value={this.state.password2}
              name='password2'
              onChange={this.onChange}
            />
            <input
              type='tel'
              placeholder='Mobile'
              value={this.state.mobile}
              name='mobile'
              onChange={this.onChange}
            />

            <button className='buttonSign' onClick={this.onCompanySignup}>
              Company Signup
            </button>
          </form>
        </div>
        <div class='form-container sign-in-container'>
          <form className='Authform'>
            <h1>Individual Account Signup</h1>
            <div class='social-container'>
              <a href='#' class='social'>
                <i class='fab fa-facebook-f' />
              </a>
              <a href='#' class='social'>
                <i class='fab fa-google-plus-g' />
              </a>
              <a href='#' class='social'>
                <i class='fab fa-linkedin-in' />
              </a>
            </div>
            {/* <span>or use your account</span> */}
            <input
              type='text'
              placeholder='Full Name'
              name='name'
              value={this.state.name}
              onChange={this.onChange}
            />
            <input
              type='email'
              placeholder='Email'
              value={this.state.email}
              name='email'
              onChange={this.onChange}
            />
            <input
              type='password'
              placeholder='Password'
              value={this.state.password1}
              name='password1'
              onChange={this.onChange}
            />
            <input
              type='password'
              placeholder='Confirm Password'
              value={this.state.password2}
              name='password2'
              onChange={this.onChange}
            />
            <input
              type='tel'
              placeholder='Mobile'
              value={this.state.mobile}
              name='mobile'
              onChange={this.onChange}
            />

            <button className='buttonSign' onClick={this.onUserSignup}>
              Individual Signup
            </button>
          </form>
        </div>
        <div class='overlay-container'>
          <div class='overlay'>
            <div class='overlay-panel overlay-left'>
              <h1>Hey There!</h1>
              <p>If you want to signup for an individual account click here</p>

              <button
                onClick={this.onClick2}
                class='ghost buttonSign'
                id='signIn'>
                Sign Up
              </button>
            </div>
            <div class='overlay-panel overlay-right'>
              <h1>Hello, Friend!</h1>
              <p>If you want to signup for a buisness account click here</p>
              <button
                onClick={this.onClick}
                class='ghost buttonSign'
                id='signUp'>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Login.propTypes = {
//     loginuser : PropTypes.func.isRequired,
//     auth:PropTypes.object.isRequired,
//     errors:PropTypes.object.isRequired
//   }

//   const mapStateToProps = (state) =>({
//     auth:state.auth,
//     errors:state.errors
//   })

export default Signup;
