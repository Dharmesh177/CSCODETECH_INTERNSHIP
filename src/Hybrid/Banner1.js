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
                <img class="" loading="lazyload" data-src="img/hybrid-app-main-sc.png" src="img/hybrid-app-main-sc.png" alt="Modernized Hybrid App Development Services" title="Modernized Hybrid App Development Services" width="442" height="490"/>
                </div>
                <h1 data-aos="fade-in " class="section-title mb-30">Modernized Hybrid App Development Services</h1>
                <p>We use both advanced and standard technologies for affordable as well as flexible <a href="#" class="internal-links">hybrid apps development</a> on all the platforms and frameworks with the functionalities of code reusability.</p>
                <p>Talk to our Business Head about your android app requirements and let us get started with the first easy step of Hybrid App Consultation.</p>
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
              <img class="" loading="lazyload" data-src="img/hybrid-app-main-sc.png" src="img/hybrid-app-main-sc.png" alt="Modernized Hybrid App Development Services" title="Modernized Hybrid App Development Services" width="442" height="490"/>            </div>
            </div>
          </div>
        </div>
      </div>

      <Factsheet />

      <div class="parallax let-us ios-about-main">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-12 text-left">
              <div class="soln-heading" data-aos="fade-in">
                <h2 class="section-title mb-30">Hybrid App Development Services</h2>
              </div>
              <div class="ios-about-con">
                <div class="ios-img-box mobile-about-img">
                  <img
                    class=""
                    loading="lazyload"
                    data-src="img/ios-main-img.png"
                    src="img/ios-main-img.png"
                    alt="HR"
                    title="HR"
                  />
                </div>
                <div class="ios-small-img-box mobile-about-img">
                  <img
                    class=""
                    loading="lazyload"
                    data-src="img/os-sub-img.png"
                    src="img/os-sub-img.png"
                    alt="Management Team"
                    title="Management Team"
                  />
                </div>
                <p>We hold all the development skills and specialize in <a href="#" class="internal-links">hybrid apps development</a>. We build apps which can be released quickly to market with cross-platform compatibility.</p>
                <p>Our expertise is best suitable to create business applications with hybrid mobile application development. You can leverage our extensive capabilities and choose the right technology, platforms and app development types.</p>
                <p>
                <p>Let us come together for building dynamic hybrid apps for your mobile and web platforms.</p>
                </p>
                <h5>Celebrating a few years in developing Awesome Hybrid Apps</h5>
                <div class="row">

                  <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
                    <div class="app-ics">
                    <img class="" loading="lazyload" data-src="img/web-dv.svg" src="img/web-dv.svg" alt="Web" title="Web"/>
                      <p>Web</p>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
                    <div class="app-ics">
                    <img class="" loading="lazyload" data-src="img/s-iphone.svg" src="img/s-iphone.svg" alt="Mobile" title="Mobile"/>
                      <p>Mobile</p>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
                    <div class="app-ics">
                    <img class="" loading="lazyload" data-src="img/tablet-iphone-g.svg" src="img/tablet-iphone-g.svg" alt="Tablet/iPad" title="Tablet/iPad"/>
                      <p>Tablet/Ipad</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-12 ios-right-img desktop-about-img">
              <div class="ios-img-box">
                <img
                  class=""
                  loading="lazyload"
                  data-src="img/ios-main-img.png"
                  src="img/ios-main-img.png"
                  alt="HR"
                  title="HR"
                />
              </div>
              <div class="ios-small-img-box">
                <img
                  class=""
                  loading="lazyload"
                  data-src="img/os-sub-img.png"
                  src="img/os-sub-img.png"
                  alt="Management Team"
                  title="Management Team"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner1;
