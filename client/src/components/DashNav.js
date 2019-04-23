import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ReactModal from 'react-modal';
import axios from 'axios'
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
export default class DashNav extends Component {
	constructor () {
		super();
		this.state = {
			showModal: false,
			id:""
		};

		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	handleOpenModal () {
		this.setState({ showModal: true });
	}

	handleCloseModal () {
		this.setState({ showModal: false });
	}

	onChange=(event)=>{
		console.log(event.target.value);

		this.setState({
			id:event.target.value
		})
	}
	handleRedirect = (event)=>{
		// event.preventDefault();
		console.log(this.state);

		// console.log(event.target.value)
		// this.props.history.push('/dashboard/takeQuiz')
		axios.get(`/takequiz/:${this.state.id}`)
		.then(res=>{
					console.log("quiz",res.data)
		})
	}
	render() {
		return (
			<div>
			<div class="main-top" id="home">
			<header>
				<div class="container-fluid">
					<div class="header d-lg-flex justify-content-between align-items-center py-3 px-sm-3">

						<div id="logo">
							<h1><a href="index.html"><span class="fa fa-linode mr-2"></span>QuizaGram</a></h1>
						</div>

						<div class="nav_temps-amkls">
							<nav>
								<label for="drop" class="toggle">Menu</label>
								<input type="checkbox" id="drop" />
								<ul class="menu">
									<li><a href="index.html" class="active">Home</a></li>
									<li><a href="about.html">About Us</a></li>
									<li>

										<label for="drop-2" class="toggle toogle-2">Examination <span class="fa fa-angle-down" aria-hidden="true"></span>
										</label>
										<a href="#">Examination <span class="fa fa-angle-down" aria-hidden="true"></span></a>
										<input type="checkbox" id="drop-2" />
										<ul>
											<li><a href="#services" class="drop-text">JEE</a></li>
											<li><a href="faq.html" class="drop-text">NEET</a></li>
											<li><a href="404.html" class="drop-text">TCS</a></li>
											<li><a href="#stats" class="drop-text">CAT</a></li>
											<li><a href="about.html" class="drop-text">GRE</a></li>
											{/* <li><a href="about.html" class="drop-text">Our Team</a></li> */}
											{/* <li><a href="#partners" class="drop-text">Partners</a></li> */}
										</ul>
									</li>
									<li><a href="contact.html">Contact Us</a></li>
								</ul>
							</nav>
						</div>
						<div class="d-flex mt-lg-1 mt-sm-2 mt-3 justify-content-center">

							<div class="search-temps-amklayouts mr-3">

							<button class="btn button-style mr-5" onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal
					 isOpen={this.state.showModal}
					 style={customStyles}
        >
				<form onSubmit={this.handleRedirect}>
				<div class="form-group">
      <label for="exampleInputEmail1">Enter Quiz ID</label>
      <input  onChange={this.onChange} value={this.state.id} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ac2b3cd..."/>
   			 </div>

					</form>
					<button class="btn button-style mr-5"   onClick={this.handleRedirect}>Enter Quiz</button>
					<button class="btn btn-primary "   onClick={this.handleCloseModal}>Close</button>


        </ReactModal>
															 {/* <Link to="/dashboard/takeQuiz" class="btn button-style mr-5"> <i class="fas fa-pen"></i> Take Quiz</Link> */}

															<Link to="/login" class="btn button-style">Logout</Link>
							</div>

							{/* <a class="dwn-temps-amkls btn" href="http://w3layouts.com/" target="_blank">

							</a> */}

						</div>
					</div>
				</div>
			</header>



		</div>
			</div>
		)
	}
}
