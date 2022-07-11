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
               <img class="" loading="lazyload" data-src="img/website-service-img.png" src="img/website-service-img.png" alt="Top Website Development Services" title="Top Website Development Services" width="620" height="490"/>
                </div>
                <h1 data-aos="fade-in" class="section-title mb-30">Excellent Website Development Services</h1>
                <p>Beautiful and functional websites using PHP drives your business towards success. When you need something exceptional to show off on your website, PHP is the way to go. Our experienced and skilled team of <a class="internal-links" href="#">PHP developers</a> at 'CSCODETECH ' can build all the types of sites you ever wanted.</p>
                <p>Our expertise is best suitable to develop all types of websites. You can utilize our comprehensive capabilities and choose the right technology, platforms and website development services to the fullest to grow your business.</p>
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
             <img class="" loading="lazyload" data-src="img/website-service-img.png" src="img/website-service-img.png" alt="Top Website Development Services" title="Top Website Development Services" width="620" height="490"/>
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
              <h2 class="section-title mb-30">Excellent Web Development Services</h2>
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
                <p>A professional website is a useful platform that increases the chances of business conversions. We at <Link style={{ textDecoration: "none" }} to="/"><a class="internal-links" href="#">CSCODETECH</a> </Link> are well capable with experience, issues solving abilities, and fully reliable with commitments in providing superior class websites.</p>
                <p>Having worked on numerous web development projects, we grasp that each website project is miscellaneous and needs special consideration. Thus, we devote sizeable time in market research, planning, design, development, implementation and final testing.</p>
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
