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
                <img class="" loading="lazyload" data-src="img/swift-app-main-sc.png" src="img/swift-app-main-sc.png" alt="High-end IoT Mobile App Development Company" title="High-end IoT Mobile App Development Company"/>    </div>
                <h1 data-aos="fade-in" class="section-title mb-30">Top IoT Development Company</h1>
                <p>Welcome to the Web 5.0 with IoT where 
                <Link style={{ textDecoration: "none" }} to="/">
                <a class="internal-links" href="#">CSCODETECH</a></Link> will help you stand out of the crowd with high-end and next-gen <a class="internal-links" href="#">IoT Mobile App Development</a> services.
Consult with our Business Head and let's start developing innovative IoT apps for your upcoming project.</p>
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
              <img class="" loading="lazyload" data-src="img/swift-app-main-sc.png" src="img/swift-app-main-sc.png" alt="High-end IoT Mobile App Development Company" title="High-end IoT Mobile App Development Company"/>     </div>
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
                <h2 class="section-title mb-30">Next-Gen IoT Development Services</h2>
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
                <p>IoT Mobile Apps Best Suited For Web 3.0 One of the most prominent features of Web 3.0 is interconnected devices and IoT is the way to go. We, at CSCODETECH, can help you develop connect anything to anything with the help of the internet by out cutting Edge <a class="internal-links" href="#">IoT App Development</a>.</p>
                <p>We can develop the best-in-class IoT apps for the growth of your business by integrating your ideas into our innovative IoT apps. It enhances the user experience and grows your business.</p>
                <p>

                  Have an idea? We will offer a{" "}
                  <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-IOS"
                            >
                  <a class="internal-links" href="#">
                    iOS
                  </a></Link>{" "}
                  analysis and proposal for it. Don’t worry; it will remain
                  completely safe and confidential. Your ideas transformed into
                  realities!
                </p>
                <h5>Celebrating a few years in developing awesome IoT Apps</h5>
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
