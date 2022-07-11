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
                <img class="" loading="lazyload" data-src="img/wearble-app-main-sc.png" src="img/wearble-app-main-sc.png" alt="Smart Wearable App Development Services" title="Smart Wearable App Development Services" width="369" height="490"/>  </div>
                <h1 data-aos="fade-in" class="section-title mb-30">Smart Wearable App Development Services</h1>
                <p>Our know-how in the wearable device app development gives a winning combination of the futuristic design and intuitive experience. Consult with our Business Head and let's start developing next-gen smart wearable apps for smartphones.</p>
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
              <img class="" loading="lazyload" data-src="img/wearble-app-main-sc.png" src="img/wearble-app-main-sc.png" alt="Smart Wearable App Development Services" title="Smart Wearable App Development Services" width="369" height="490"/>  </div>
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
                <h2 class="section-title mb-30">Our Wearable App Development Has Proven To Be The Best For Our Client's Business!</h2>
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
                <p>The world is changing dramatically with the fast-paced development of technology. And, <a href="#" class="internal-links">Wearable App Development</a> is the best example of it. Our development team has the fullest perspective of all the changes.</p>
                <p>We have excellent experience of working in diverse niches that is reflected by a long list of contented clients. At <a href="/" class="internal-links">CSCODETECH</a>, we are focused on designing and developing wearable applications which are simple, flawless, and they enhance our standard of living. Let us come together for building dynamic wearable apps for smart devices.</p>
                
                <h5>Celebrating a few years in developing Impeccable Wearable Apps</h5>
                
                <div class="row">
                  <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
                    <div class="app-ics">
                    <img class="" loading="lazyload" data-src="img/apple_watch-y.svg" src="img/apple_watch-y.svg" alt="Apple Watch" title="Apple Watch"/>
                      <p>Apple Watch</p>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
                    <div class="app-ics">
                    <img class="" loading="lazyload" data-src="img/android_watch-r.svg" src="img/android_watch-r.svg" alt="Android Watch" title="Android Watch"/>
                      <p>Android Watch</p>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
                    <div class="app-ics">
                    <img class="" loading="lazyload" data-src="img/google_glass_g.svg" src="img/google_glass_g.svg" alt="Google Glass" title="Google Glass"/>
                      <p>Google Glass</p>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
                    <div class="app-ics">
                    <img class="" loading="lazyload" data-src="img/fiteness-band-b.svg" src="img/fiteness-band-b.svg" alt="Fitness Band" title="Fitness Band"/>
                      <p>Fitness Band</p>
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
