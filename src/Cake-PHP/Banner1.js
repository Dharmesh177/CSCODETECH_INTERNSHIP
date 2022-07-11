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
                <img class="" loading="lazyload" data-src="img/PHP.png" src="img/PHP.png" alt="Out of the Box Nodejs Development" title="Out of the Box Nodejs Development" width="620" height="490"/>
         
                </div>
                <h1 data-aos="fade-in" class="section-title mb-30">Rapid CakePHP Development</h1>
                <p>Website of your dreams using rapid development frameworks in CakePHP by our unique team of 
                <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Cake-PHP"
                            >
                <a href="#" class="internal-links">CakePHP developers</a></Link>.</p>
                <p>Consult with our Business Head and let's start developing next-gen LARAVEL Website for your upcoming/existing startup or brand.</p>
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
              <img class="" loading="lazyload" data-src="img/PHP.png" src="img/PHP.png" alt="Out of the Box Nodejs Development" title="Out of the Box Nodejs Development" width="620" height="490"/>
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
              <h2 class="section-title mb-30">Extensive CakePHP Development Services</h2>
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
                <p>Creative and functional websites and web applications developed using CakePHP lead your business to new peaks. Our skilled and dedicated team of CakePHP developers at 'iCoderz Solutions' can develop all the types of websites and web applications you always wanted.</p>
                <p>Our expert developers can develop all types of single-page applications, websites, and cross- platform applications. We offer holistic capabilities and full-stack technological expertise for all the platforms and website development services to satisfy your business needs and help you grow your business.</p>
                <p>Let us come together for building excellent AngularJS webpages for your business.</p>
                <h5>Celebrating a decade in developing Awesome Website</h5>
                <div class="row">
                <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
<div class="app-ics">
<img class="" loading="lazyload" data-src="img/ms-ecommarce-y.svg" src="img/ms-ecommarce-y.svg" alt="eCommerce" title="eCommerce"/>
<p>eCommerce</p>
</div>
</div>
    <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
<div class="app-ics">
<img class="" loading="lazyload" data-src="img/s-businss.svg" src="img/s-businss.svg" alt="Business" title="Business"/>

<p>Business</p>
</div>
</div>

<div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
<div class="app-ics">
<img class="" loading="lazyload" data-src="img/s-personal.svg" src="img/s-personal.svg" alt="Personal" title="Personal"/>
<p>Personal</p>
</div>
</div>

<div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
<div class="app-ics">
<img class="" loading="lazyload" data-src="img/s-theme-bs.svg" src="img/s-theme-bs.svg" alt="Theme-Based" title="Theme-Based"/>
<p>Theme-Based</p>
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
