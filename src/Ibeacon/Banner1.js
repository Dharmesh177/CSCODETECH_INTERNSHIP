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
                <img class="" loading="lazyload" data-src="img/iBeacon-main.png" src="img/iBeacon-main.png" alt="Leading iBeacon App Development Company" title="Leading iBeacon App Development Company" width="442" height="490"/> 
                </div>
                <h1 data-aos="fade-in" class="section-title mb-30">Leading IBeacon App Development Company</h1>
                <p>CSCODETECH have helped businesses offer a personalized user experience through their top-class <a href="#" class="internal-links">iBeacon app development</a> offerings. Consult with our Business Head and let's start developing next-gen iBeacon apps for your upcoming project.</p> <div className="d-inline ml-0 ml-lg-3 my-2 my-lg-0">
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
              <img class="" loading="lazyload" data-src="img/iBeacon-main.png" src="img/iBeacon-main.png" alt="Leading iBeacon App Development Company" title="Leading iBeacon App Development Company" width="442" height="490"/> </div>
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
                <h2 class="section-title mb-30">Next-Gen IBeacon Development Services</h2>
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
                <p>
                iBeacon technology is developed for offering a personalized user experience. It works on both iOS and Android & using an intuitive app; you can serve your customers in such a customized fashion that can give you a clear edge in the crowd.
                </p>
                <p>
                Sensing the proximity, users are notified of various relevant offers & promotional campaigns.

  
                </p>
                <p>We have in-house developers to provide you with the efficient <a href="#" class="internal-links">iBeacon</a> mobile apps for the growth and retention of your customer base.</p>
                <p>Let us come together for building dynamic iBeacon Apps.</p>
                <h5>Celebrating a few years in developing awesome iBeacon Apps</h5>
                <div class="row">
                <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
<div class="app-ics">
 <img class="" loading="lazyload" data-src="img/retail-and-e-commerce.svg" src="img/retail-and-e-commerce.svg" alt="Retail" title="Retail"/>
<p>Retail</p>
</div>
</div>
                 <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
<div class="app-ics">
<img class="" loading="lazyload" data-src="img/healthcare-r.svg" src="img/healthcare-r.svg" alt="Healthcare" title="Healthcare"/>

<p>Healthcare</p>
</div>
</div>
                 <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
<div class="app-ics">
<img class="" loading="lazyload" data-src="img/pets-g.svg" src="img/pets-g.svg" alt="Pets" title="Pets"/>
<p>Pets</p>
</div>
</div>
<div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
<div class="app-ics">
<img class="" loading="lazyload" data-src="img/Luggage.svg" src="img/Luggage.svg" alt="Luggage" title="Luggage"/>
<p>Luggage</p>
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
