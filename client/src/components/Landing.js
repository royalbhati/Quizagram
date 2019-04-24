import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class Landing extends Component {
  render() {
    return (
      <div>
           <div class="main-top" id="home">
           <div class="banner_temps-amklspvt position-relative">
			<div class="container">
				<div class="d-md-flex">
					<div class="temps-amkls_banner_txt">
						<h3 class="temps-amkls_pvt-title">Quiza<span>Gram</span></h3>
						<p class="text-sty-banner">Create Quizzes for competitions or for screening employees. Connect 
						with young minds and prepare for exams
							</p>
						<Link to="/signup"  class="btn button-style mt-md-5 mt-4">Get Started</Link>
					</div>
					<div class="banner-img">
						<img src="banner.png" alt="" class="img-fluid"/>
					</div>
				</div>
			</div>

			<div class="icon-effects-temps-amkl">
				<img src="images/shape1.png" alt="" class="img-fluid shape-amk-tems shape-temps-amk-one"/>
				<img src="images/shape2.png" alt="" class="img-fluid shape-amk-tems shape-temps-amk-two"/>
				<img src="images/shape3.png" alt="" class="img-fluid shape-amk-tems shape-temps-amk-three"/>
				<img src="images/shape5.png" alt="" class="img-fluid shape-amk-tems shape-temps-amk-four"/>
				<img src="images/shape4.png" alt="" class="img-fluid shape-amk-tems shape-temps-amk-five"/>
				<img src="images/shape6.png" alt="" class="img-fluid shape-amk-tems shape-temps-amk-six"/>
			</div>

		</div>


           </div>
      </div>
    )
  }
}
