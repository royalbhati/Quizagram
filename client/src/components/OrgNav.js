import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <div class='main-top' id='home'>
        <header>
          <div class='container-fluid'>
            <div class='header d-lg-flex justify-content-between align-items-center py-3 px-sm-3'>
              <div id='logo'>
                <h1>
                  <a href='index.html'>
                    <span class='fa fa-linode mr-2' />QuizaGram
                  </a>
                </h1>
              </div>

              <div class='nav_temps-amkls'>
                <nav>
                  <label for='drop' class='toggle'>
                    Menu
                  </label>
                  <input type='checkbox' id='drop' />
                  <ul class='menu'>
                    <li>
                      <a href='index.html' class='active'>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href='about.html'>About Us</a>
                    </li>
                    <li />
                    <li>
                      <a href='contact.html'>Contact Us</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class='d-flex mt-lg-1 mt-sm-2 mt-3 justify-content-center'>
                <div class='search-temps-amklayouts mr-3'>
                  {/* <form action="#" method="post" class="search-bottom-amk-tems d-flex">
								<input class="search" type="search" placeholder="Search Here..." required=""/>
								<button class="form-control btn" type="submit"><span class="fa fa-search"></span></button>
                                                        </form> */}

                  <Link
                    to='/dashboard/createQuiz'
                    class='btn button-style mr-5'>
                    {" "}
                    <i class='fas fa-pen' /> Create Quiz
                  </Link>

                  <Link to='/login' onClick={onLogout} class='btn button-style'>
                    Logout
                  </Link>
                </div>

                {/* <a class="dwn-temps-amkls btn" href="http://w3layouts.com/" target="_blank">

						</a> */}
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
function onLogout(e) {
  localStorage.removeItem("auth-token");
}
