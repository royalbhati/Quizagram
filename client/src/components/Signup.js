import React, { Component } from 'react'
import './signup.css'
class Signup extends Component {

    onClick = (event) =>{
        // const signUpButton = document.getElementById('signUp');
        // const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        container.classList.add("right-panel-active");
    }
    onClick2 = () =>{
        const container = document.getElementById('container');
            container.classList.remove("right-panel-active");
    }





  render() {
    // const {errors}= this.state

    return (
<div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="#">
			<h1>Business Account Signup</h1>
			<div class="social-container">
				<a href="#" class="social links"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social links"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social links"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>To be filled by a company representitive</span>
			<input type="text" placeholder="Company Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
            <input type="password" placeholder="Password" />

			<button className="buttonSign">Company Signup</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Individual Account Signup</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
            {/* <span>or use your account</span> */}
            <input type="text" placeholder="Full Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
            <input type="password" placeholder="Password" />


			<button className="buttonSign">Individual Signup</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Hey There!</h1>
                <p>If you want to signup fro an individual account click here</p>

				<button onClick={this.onClick2} class="ghost buttonSign" id="signIn">Sign Up</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>If you want to signup fro a buisness account click here</p>
				<button onClick={this.onClick} class="ghost buttonSign" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>




    )
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

  export default Signup