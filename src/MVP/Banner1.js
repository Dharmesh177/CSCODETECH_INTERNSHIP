import React from "react";
import "../main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../plugins.min.css";
import Factsheet from "./Factsheet";
import { Link } from "react-router-dom";

function Banner1() {
  return (
    <div>
      <div class="parallax services-top-main" id="parallax">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6">
              <div class="text-left mauto">
                <div class="home-slider-decor mobile-about-img">
                <img class="" loading="lazyload" data-src="img/Top MVP Development Company.png" src="img/Top MVP Development Company.png" alt="Top MVP Development Company" title="Top MVP Development Company" width="442" height="490"/>
                </div>
                <h1 data-aos="fade-in" class="section-title mb-30">Top MVP Development Company</h1>
                <p>Are you looking to launch your product successfully using MVP development services? Our minimum viable product helps you get valuable business insights for better customer engagement.</p>
                <p>Consult with our Business Head and let's start developing next-gen MVP Website for your upcoming/existing startup or brand.</p>
                <div className="d-inline ml-0 ml-lg-3 my-2 my-lg-0">
                <Link style={{ textDecoration: "none" }} to="/lets-talk">
                  <a className=" butn butn-sm" href="#">
                    Let's talk
                  </a>
                 </Link>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 desktop-about-img">
              <div class="home-slider-decor">
              <img class="" loading="lazyload" data-src="img/Top MVP Development Company.png" src="img/Top MVP Development Company.png" alt="Top MVP Development Company" title="Top MVP Development Company" width="442" height="490"/>
             </div> 
            </div> 
          </div>
        </div>
      </div>

      <Factsheet />

      <div class="parallax services-top-main" id="parallax">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6">
              <div class="text-left mauto">
                <div class="home-slider-decor mobile-about-img">
                <img class="" loading="lazyload" data-src="img/MVP-full.png" src="img/MVP-full.png" alt="MVP Development Services" title="MVP Development Services" width="512" height="512"/>
                </div>
                <h1 data-aos="fade-in" class="section-title mb-30">What Is The Minimum Viable Product (MVP)?</h1>
                <p>When you wish to attract easy adopter customers, you need to develop an MVP product. It is one of the early stages of the product development cycle. Major businesses trust the MVP product for launching their product successfully on the later stage.</p>
                <p>We are offering an agile development process- it means we are offering MVP product development. It is indeed one of the best ways to lead to a successful product launch. Here we try to gather the maximum percentage of validated learning with fewer efforts, ultimately resulting in customer satisfaction.</p>
                <p>At iCoderz Solutions, our developers follow in-depth user research and competitive analysis for delivering the most successful MVP product.</p>
                <div className="d-inline ml-0 ml-lg-3 my-2 my-lg-0">
                <Link style={{ textDecoration: "none" }} to="/lets-talk">
                  <a className=" butn butn-sm" href="#">
                    Let's talk
                  </a>
                 </Link>

                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 desktop-about-img">
              <div class="home-slider-decor">
              <img class="" loading="lazyload" data-src="img/MVP-full.png" src="img/MVP-full.png" alt="MVP Development Services" title="MVP Development Services" width="512" height="512"/>
             </div> 
            </div> 
          </div>
        </div>
      </div>


      

        </div>
  );
}

export default Banner1;
