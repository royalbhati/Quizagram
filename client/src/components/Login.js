import React, { Component } from "react";
import "./signup.css";
import axios from "axios";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  onClick = event => {
    const container = document.getElementById("container");

    container.classList.add("right-panel-active");
  };
  onClick2 = () => {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLogin = e => {
    e.preventDefault();
    var user = {
      email: this.state.email,
      password: this.state.password
    };

    //axios post request
    axios
      .post("/api/users/login", user)
      .then(response => {
        // const token = response.data["x-auth"];
        const { token } = response.data;
        // console.log(response.data);
        localStorage.setItem("auth-token", token);
        this.props.history.push('/dashboard')  
		//TODO redirect to dashboard
      })
      .catch(function(response) {
        console.log(response);
      });
  };

  render() {
    // const {errors}= this.state

    return (
      <div class='container' id='container'>
        <div class='form-container sign-up-container'>
          <form className='Authform'>
            <h1>Business Account Login</h1>
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
            {/* <span>To be filled by a company representitive</span> */}
            {/* <input type="text" placeholder="Company Name" /> */}
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={this.state.email}
              onChange={this.onChange}
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={this.state.password}
              onChange={this.onChange}
            />
            {/* <input type="password" placeholder="Password" /> */}

            <button className='buttonSign' onClick={this.onLogin}>
              Company Login
            </button>
          </form>
        </div>
        <div class='form-container sign-in-container'>
          <form className='Authform'>
            <h1>Individual Login</h1>
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
            {/* <input type="text" placeholder="Full Name" /> */}
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={this.state.email}
              onChange={this.onChange}
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={this.state.password}
              onChange={this.onChange}
            />
            {/* <input type="password" placeholder="Password" /> */}

            <button className='buttonSign' onClick={this.onLogin}>
              Individual Login
            </button>
          </form>
        </div>
        <div class='overlay-container'>
          <div class='overlay'>
            <div class='overlay-panel overlay-left'>
              <h1>Welcome!</h1>
              <p>If you are an individual please click here</p>

              <button
                onClick={this.onClick2}
                class='ghost buttonSign'
                id='signIn'>
                Sign In
              </button>
            </div>
            <div class='overlay-panel overlay-right'>
              <h1>Hello, Friend!</h1>
              <p>If you are a company representitive please click here</p>
              <button
                onClick={this.onClick}
                class='ghost buttonSign'
                id='signUp'>
                Sign In
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

export default Login;
