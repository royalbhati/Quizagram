import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <div className='main-top' id='home'>
        <header>
          <div className='container-fluid'>
            <div className='header d-lg-flex justify-content-between align-items-center py-3 px-sm-3'>
              <div id='logo'>
                <h1>
                  <a href='index.html'>
                    <span className='fa fa-linode mr-2' />QuizaGram
                  </a>
                </h1>
              </div>

              <div className='nav_temps-amkls'>
                <nav>
                  <label for='drop' className='toggle'>
                    Menu
                  </label>
                  <input type='checkbox' id='drop' />
                  <ul className='menu'>
                    <li>
                      <a href='index.html' className='active'>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href='about.html'>About Us</a>
                    </li>
                    <li>
                      <label for='drop-2' className='toggle toogle-2'>
                        Examination{" "}
                        <span className='fa fa-angle-down' aria-hidden='true' />
                      </label>
                      <a href='#'>
                        Examination{" "}
                        <span className='fa fa-angle-down' aria-hidden='true' />
                      </a>
                      <input type='checkbox' id='drop-2' />
                      <ul>
                        <li>
                          <a href='#services' className='drop-text'>
                            JEE
                          </a>
                        </li>
                        <li>
                          <a href='faq.html' className='drop-text'>
                            NEET
                          </a>
                        </li>
                        <li>
                          <a href='404.html' className='drop-text'>
                            TCS
                          </a>
                        </li>
                        <li>
                          <a href='#stats' className='drop-text'>
                            CAT
                          </a>
                        </li>
                        <li>
                          <a href='about.html' className='drop-text'>
                            GRE
                          </a>
                        </li>
                        {/* <li><a href="about.html" className="drop-text">Our Team</a></li> */}
                        {/* <li><a href="#partners" className="drop-text">Partners</a></li> */}
                      </ul>
                    </li>
                    <li>
                      <a href='contact.html'>Contact Us</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className='d-flex mt-lg-1 mt-sm-2 mt-3 justify-content-center'>
                <div className='search-temps-amklayouts mr-3'>
                  {/* <form action="#" method="post" className="search-bottom-amk-tems d-flex">
								<input className="search" type="search" placeholder="Search Here..." required=""/>
								<button className="form-control btn" type="submit"><span className="fa fa-search"></span></button>
                            </form> */}
                  <Link to='/login' className='btn button-style'>
                    Login
                  </Link>
                </div>

                {/* <a className="dwn-temps-amkls btn" href="http://w3layouts.com/" target="_blank">

						</a> */}
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
