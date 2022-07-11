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
                <img class="" loading="lazyload" data-src="img/flutter-app-main-sc.png" src="img/flutter-app-main-sc.png" alt="Best Flutter App Development Services" title="Best Flutter App Development Services" width="442" height="490"/>
                </div>
                <h1 data-aos="fade-in" class="section-title mb-30">Best Flutter App Development Services</h1>
                <p>Being one of the best 
                <Link
                              style={{ textDecoration: "none" }}
                              to="/Hire-Flutter-developers"
                            >
                <a class="internal-links" href="#">Flutter mobile app development</a> </Link>
                companies, our mobile app development team can build the extensive apps according to your requirements, budget, and deadline.</p>
                 <p>Talk to our Business Head about your android app requirements and let us get started with the first easy step of Android App Consultation.</p>
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
              <img class="" loading="lazyload" data-src="img/flutter-app-main-sc.png" src="img/flutter-app-main-sc.png" alt="Best Flutter App Development Services" title="Best Flutter App Development Services" width="442" height="490"/>
                  </div>
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
              <h2 class="section-title mb-30">Flutter Mobile App Development</h2>
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
                <p>We have all the required Flutter 
                <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Mobile"
                             
                            >
                <a class="internal-links" href="#">mobile app development</a> </Link>
                skills and expertise. Our capable, innovative and tech-savvy Flutter mobile app development team has achieved a respectable spot in the Flutter mobile app development arena.</p>
                <p>Consult with our Business Head and let’s start developing exclusive cross-platform apps using Flutter Technology.</p>
                <div class="row">
                  <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
                    <div class="app-ics">
                      <img
                        class=""
                        loading="lazyload"
                        data-src="img/s-iphone.svg"
                        src="img/s-iphone.svg"
                        alt="iPhone"
                        title="iPhone"
                      />
                      <p>iPhone</p>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
                    <div class="app-ics">
                      <img
                        class=""
                        loading="lazyload"
                        data-src="img/s-tvos.svg"
                        src="img/s-tvos.svg"
                        alt="Tv"
                        title="Tv"
                      />
                      <p>Tv</p>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
                    <div class="app-ics">
                      <img
                        class=""
                        loading="lazyload"
                        data-src="img/s-watchos.svg"
                        src="img/s-watchos.svg"
                        alt="iWatch"
                        title="iWatch"
                      />
                      <p>iWatch</p>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
                    <div class="app-ics">
                      <img
                        class=""
                        loading="lazyload"
                        data-src="img/s-macos.svg"
                        src="img/s-macos.svg"
                        alt="Macbook"
                        title="Macbook"
                      />
                      <p>Macbook</p>
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
